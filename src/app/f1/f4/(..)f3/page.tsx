export default function InterceptedF3() {
    return <h1>(..) Intercepted F3 page</h1>
}

/**
 * Intercepting Routes conventions
 * (.) to match segments on the same level
 * (..) to match segments one level above
 * (..)(..) to match segments two levels above //not working as expected issue with framwwork
 * 
 * (...) to match segements from the root app directory
 */