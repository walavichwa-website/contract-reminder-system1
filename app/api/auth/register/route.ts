import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { db } from '@/lib/db'; // Assuming you have a db connection set up

export async function POST(req) {
    try {
        const { username, password } = await req.json();

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user in the database
        const newUser = await db.user.create({
            data: {
                username,
                password: hashedPassword,
            },
        });

        return NextResponse.json({ user: newUser }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'User creation failed', error: error.message }, { status: 500 });
    }
}