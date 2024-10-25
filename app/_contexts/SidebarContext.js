'use client'

import { createContext, useContext, useState } from 'react'

const SidebarContext = createContext()

function SidebarProvider({ children }) {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false)

    const toggleSidebar = () => {
        setIsOpenSidebar((prev) => !prev)
    }

    return (
        <SidebarContext.Provider
            value={{ isOpenSidebar, setIsOpenSidebar, toggleSidebar }}
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
