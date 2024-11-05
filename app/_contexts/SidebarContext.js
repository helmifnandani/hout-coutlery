'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const SidebarContext = createContext()

function SidebarProvider({ children }) {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false)
    const [wasClicked, setWasClicked] = useState(false)

    useEffect(() => {
        if (wasClicked) {
            setIsOpenSidebar(false)
        }
    }, [wasClicked])

    const toggleSidebar = () => {
        setIsOpenSidebar((prev) => !prev)
    }

    const handleClickNavigate = () => {
        setWasClicked(true)
    }

    return (
        <SidebarContext.Provider
            value={{
                isOpenSidebar,
                setIsOpenSidebar,
                toggleSidebar,
                handleClickNavigate,
                wasClicked,
                setWasClicked,
            }}
        >
            {children}
        </SidebarContext.Provider>
    )
}

function useSidebar() {
    const context = useContext(SidebarContext)
    if (context === undefined)
        throw new Error('Context was used outside provider')

    return context
}

export { SidebarProvider, useSidebar }
