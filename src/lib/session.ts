'use server'
// import 'server-only'
import { jwtVerify } from 'jose'

const secretKey = process.env.JWT_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export async function decrypt(token: string | undefined = '') {
    try {
        console.log('here 10',encodedKey, secretKey)
        await jwtVerify(token, encodedKey)
        console.log('here 10',encodedKey, secretKey)

        return true
    } catch (error) {
        console.error('Failed to verify session')
        return false
    }
}