import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { decrypt } from "./lib/session"

const protectedRoutes = ['/admin']

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    const isProtectedRoute = protectedRoutes.includes(path)

    if (isProtectedRoute) {
        const token = cookies().get('auth-token')?.value

        if (!await decrypt(token)) return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}