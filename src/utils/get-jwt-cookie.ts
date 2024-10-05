export function GetJwtCookie() {
    return "Bearer " + document.cookie
        .split(';')
        .find(el => el.includes('auth-token='))
        ?.trim()
        .replace('auth-token=', '')
}