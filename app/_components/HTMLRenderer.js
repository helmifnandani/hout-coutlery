'use client'

import { sanitizeHTML } from '../_lib/sanitize'

const SafeHTML = ({ content, className = '' }) => {
    const cleanContent = sanitizeHTML(content)

    return (
        <div
            className={className}
            dangerouslySetInnerHTML={{ __html: cleanContent }}
        />
    )
}

export default SafeHTML
