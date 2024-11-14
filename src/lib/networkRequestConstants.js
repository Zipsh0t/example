export const POST = 'POST';
export const PUT = 'PUT';
export const GET = 'GET';
export const DELETE = 'DELETE';

export const JSON_HEADER = { 'Content-Type': 'application/json' }
export const AUTH_HEADER = (token) => ({
    'Authorization': `Token ${token}`
})

export const JSON_AND_AUTH_HEADER = (token) => ({
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
})

export const LOGIN_EXT = '/login'