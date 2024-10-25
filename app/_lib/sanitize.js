import DOMPurify from 'isomorphic-dompurify'

export const sanitizeHTML = (dirty) => {
    try {
        return DOMPurify.sanitize(dirty, {
            USE_PROFILES: { html: true },
            ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
            ALLOWED_ATTR: ['href', 'target', 'rel'],
        })
    } catch (error) {
        console.error('Sanitization failed:', error)
        return ''
    }
}
