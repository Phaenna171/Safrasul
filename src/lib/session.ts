'use server'
import 'server-only'
import { jwtVerify } from 'jose'

const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export async function decrypt(token: string | undefined = '') {
    try {
        await jwtVerify(token, encodedKey)

        return true
    } catch (error) {
        console.error('Failed to verify session')
        return false
    }
}