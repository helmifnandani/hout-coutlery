'use client'

import Navigation from '@/app/_components/Navigation'
import Logo from '@/app/_components/Logo'
import SearchBar from './SearchBar'
import HamburgerButton from './HamburgerButton'
import Sidebar from './Sidebar'
import { useHeader } from '@/app/_contexts/HeaderContext'

function Header() {
    const { bannerRef, headerClasses, isClient, isScrolled } = useHeader()
    return (
        <header>
            <div className="w-full">
                <div
                    className="bg-primary-600 px-5 py-2 text-white md:px-20"
                    ref={bannerRef}
                >
                    <div className="flex justify-end">
                        <p className="text-regular-m">See our social media</p>
                    </div>
                </div>
                <div className={headerClasses}>
                    <div
                        className={`mx-auto flex items-center justify-between gap-8 px-6 transition-all duration-300 md:px-20 ${isClient && isScrolled ? 'py-3' : 'py-4'} `}
                    >
                        <div className="flex-shrink-0">
                            <Logo />
                        </div>
                        <Navigation />
                        <div className="flex items-center gap-4">
                            <SearchBar />
                            {/* <Link href="/account">
                                <UserCircleIcon className="size-6 text-primary-700" />
                            </Link> */}
                        </div>
                        <div className="md:hidden">
                            <HamburgerButton />
                        </div>
                    </div>
                </div>
                <div className="h-[calc(var(--banner-height)+var(--header-height))]" />
            </div>

            <Sidebar />
        </header>
    )
}

export default Header
