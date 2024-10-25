'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'

const HeaderContext = createContext()

function HeaderProvider({ children }) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isClient, setIsClient] = useState(false)
    const bannerRef = useRef(null)

    useEffect(() => {
        setIsClient(true)

        const bannerHeight = bannerRef.current?.offsetHeight || 0
        setIsScrolled(window.scrollY > bannerHeight)

        const handleScroll = () => {
            setIsScrolled(window.scrollY > bannerHeight)
        }

        window.addEventListener('scroll', handleScroll)

        const resizeObserver = new ResizeObserver(() => {
            const newBannerHeight = bannerRef.current?.offsetHeight || 0
            setIsScrolled(window.scrollY > newBannerHeight)
        })

        if (bannerRef.current) {
            resizeObserver.observe(bannerRef.current)
        }

        return () => {
            window.removeEventListener('scroll', handleScroll)
            resizeObserver.disconnect()
        }
    }, [])

    const headerClasses = `
     left-0 right-0 z-[999] w-full
    transition-all duration-300 ease-in-out bg-white
    ${!isClient ? 'invisible' : ''} 
    ${
        isClient && isScrolled
            ? 'fixed top-0 shadow-md opacity-100'
            : 'top-[var(--banner-height)] backdrop-blur-md'
    }
  `

    return (
        <HeaderContext.Provider value={{ headerClasses, isScrolled, isClient }}>
            {children}
        </HeaderContext.Provider>
    )
}

function useHeader() {
    const context = useContext(HeaderContext)
    if (context === undefined)
        throw new Error('Context was used outside provider')

    return context
}

export { HeaderProvider, useHeader }
