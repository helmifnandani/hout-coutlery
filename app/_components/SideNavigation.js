'use client'

import { usePathname } from 'next/navigation'
import SignOutButton from './SignOutButton'
import localFont from 'next/font/local'

const palatino = localFont({
    src: '../_fonts/Palatino.woff2',
    subsets: ['latin'],
    display: 'swap',
})
function SideNavigation() {
    const pathname = usePathname()

    return (
        <nav className="border-primary-900 border-r">
            <ul className="flex h-full flex-col gap-2 text-lg">
                <li
                    className={`text-secondary-s text-primary-500 ${palatino.className}`}
                >
                    Welcome, User
                </li>

                <li className="mt-auto">
                    <SignOutButton />
                </li>
            </ul>
        </nav>
    )
}

export default SideNavigation
