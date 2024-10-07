export function SetJwtCookie(jwt:string) {
    return document.cookie = `auth-token=${jwt}`
}