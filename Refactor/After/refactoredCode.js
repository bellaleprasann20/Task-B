// refactoredCode.js
// Solution: Async/await, early returns, separation of concerns, transactional safety.

import { db } from '../config/database.js';
import { sendEmail } from '../services/emailService.js';
import { AppError } from '../utils/AppError.js';

/**
 * Processes a user order.
 * @param {string} userId - The ID of the user.
 * @param {string} itemId - The ID of the item to purchase.
 * @param {number} quantity - The amount to purchase.
 * @returns {Promise<Object>} The created order.
 */
export async function processOrder(userId, itemId, quantity) {
    // 1. Input Validation
    if (!userId || !itemId || quantity <= 0) {
        throw new AppError('Invalid order parameters provided.', 400);
    }

    // 2. Fetch dependencies concurrently to save time
    const [user, item] = await Promise.all([
        db.query('SELECT email, isActive FROM users WHERE id = $1', [userId]),
        db.query('SELECT stock FROM inventory WHERE itemId = $1', [itemId])
    ]);

    // 3. Early returns (Guard Clauses)
    if (!user || !user.isActive) {
        throw new AppError('User account is inactive or not found.', 403);
    }
    if (!item || item.stock < quantity) {
        throw new AppError('Insufficient stock for this item.', 409);
    }

    // 4. Database Transaction for Data Integrity
    const client = await db.getClient();
    try {
        await client.query('BEGIN');

        // Deduct inventory
        await client.query(
            'UPDATE inventory SET stock = stock - $1 WHERE itemId = $2',
            [quantity, itemId]
        );

        // Create order
        const orderResult = await client.query(
            'INSERT INTO orders (userId, itemId, qty) VALUES ($1, $2, $3) RETURNING *',
            [userId, itemId, quantity]
        );

        await client.query('COMMIT');

        // 5. Fire and forget side-effects (don't block the response)
        sendEmail(user.email, 'Order placed successfully!').catch(err => {
            console.error('Failed to send order confirmation email:', err);
        });

        return orderResult.rows[0];

    } catch (error) {
        await client.query('ROLLBACK');
        throw new AppError('Order processing failed due to a system error.', 500);
    } finally {
        client.release();
    }
}