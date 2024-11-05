'use client'

import { Bars3Icon } from '@heroicons/react/24/solid'
import { useSidebar } from '@/app/_contexts/SidebarContext'

const HamburgerButton = () => {
    const { toggleSidebar } = useSidebar()
    return (
        <div>
            <button className="flex" onClick={() => toggleSidebar()}>
                <Bars3Icon className="size-6" />
            </button>
        </div>
    )
}

export default HamburgerButton
