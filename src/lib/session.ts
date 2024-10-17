import { jwtDecode } from 'jwt-decode';

export async function decrypt(token: string | undefined = '') {
    try {
        console.log('here   ')
        const decoded = jwtDecode(token);
        console.log(decoded)
        return true
    } catch (error) {
        console.error('Failed to verify session')
        return false
    }
}