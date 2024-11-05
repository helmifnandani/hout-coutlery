'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useSidebar } from '../_contexts/SideBarContext'

const NavItem = ({ children, href, isSidebar }) => {
    const pathname = usePathname()
    const { handleClickNavigate } = useSidebar()
    return (
        <Link
            href={href}
            onClick={() => handleClickNavigate()}
            className={`px-4 py-3 text-regular-m transition-colors ${pathname === href && !isSidebar ? 'rounded-lg bg-primary-200' : ''} ${pathname === href && isSidebar ? 'rounded-lg bg-gray-500' : ''} ${isSidebar ? 'text-white' : 'text-primary-700 hover:text-primary-400'}`}
        >
            {children}
        </Link>
    )
}

export default NavItem
