import { mysqlTable, serial, text, json } from 'drizzle-orm/mysql-core';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

export const habits = mysqlTable('habits', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    emoji: text('emoji').notNull(),
    completedDays: json('completed_days').notNull().default(JSON.stringify([])),
});

export const insertHabitSchema = createInsertSchema(habits).pick({
    name: true,
    emoji: true,
});

export type InsertHabit = z.infer<typeof insertHabitSchema>;
export type Habit = typeof habits.$inferSelect;
