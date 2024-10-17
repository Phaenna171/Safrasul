import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { decrypt } from "./lib/session"

const protectedRoutes = ['/admin']

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    console.log('here')
    const isProtectedRoute = protectedRoutes.includes(path)

    if (isProtectedRoute) {
        console.log('here 13',isProtectedRoute)
        const token = cookies().get('auth-token')?.value
        console.log('here 15', token)
        if (!await decrypt(token)) return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}