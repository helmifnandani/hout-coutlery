'use client'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import placeholderImg from '@/app/_images/placeholder.png'

const hexToRgb = (hex) => {
    hex = hex.replace('#', '')

    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)

    return { r, g, b }
}

const createBlurDataURL = () => {
    const { r, g, b } = hexToRgb('#EFBF95')

    const base64 = Buffer.from(
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'>
           <path fill='rgb(${r},${g},${b})' d='M0 0h8v5H0z'/>
         </svg>`
    ).toString('base64')

    return `data:image/svg+xml;base64,${base64}`
}
const useImageWithFallback = (
    initialSrc,
    placeholderImg = '/placeholder.jpg'
) => {
    const [imgSrc, setImgSrc] = useState(initialSrc || placeholderImg)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (initialSrc) {
            setImgSrc(initialSrc)
            setError(false)
        }
    }, [initialSrc])

    const handleError = useCallback(() => {
        if (!error) {
            setImgSrc(placeholderImg)
            setError(true)
        }
    }, [error, placeholderImg])

    return { imgSrc, handleError, error }
}
const ImageComponent = ({ src, className, alt }) => {
    const { imgSrc, handleError, error } = useImageWithFallback(
        src,
        placeholderImg
    )
    if (!imgSrc) {
        return null // Or a loading state if preferred
    }

    return (
        <>
            <Image
                src={imgSrc}
                fill
                placeholder="blur"
                quality={100}
                blurDataURL={createBlurDataURL()}
                className={className}
                alt={alt}
                onError={handleError}
            />
        </>
    )
}

export default ImageComponent
