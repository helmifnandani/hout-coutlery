'use client'
import { useSidebar } from '../_contexts/SideBarContext'
import NavItem from './NavItem'
import { XMarkIcon } from '@heroicons/react/24/solid'

const Sidebar = () => {
    const { isOpenSidebar, toggleSidebar } = useSidebar()
    return (
        <aside
            className={`fixed left-0 top-0 h-screen w-full overflow-hidden border-r border-white/10 bg-accent-black/70 backdrop-blur-[6px] transition-transform duration-300 ease-in-out ${isOpenSidebar ? '-translate-x-0' : 'translate-x-full'} z-[9999]`}
        >
            <div className="relative flex h-full w-full flex-col items-center justify-center">
                {/* Header */}
                <button
                    onClick={toggleSidebar}
                    className="flex justify-end self-end p-6"
                >
                    <XMarkIcon className="size-6 text-white" />
                </button>
                <div className="border-b border-white/10 p-6">
                    <h2 className="text-xl font-medium text-white">Menu</h2>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto p-5">
                    <ul className="space-y-10 px-4">
                        <li className="text-center">
                            <NavItem isSidebar={true} href="/">
                                Home
                            </NavItem>
                        </li>
                        <li className="text-center">
                            <NavItem isSidebar={true} href="/products">
                                Catalog
                            </NavItem>
                        </li>
                        <li className="text-center">
                            <NavItem isSidebar={true} href="/about">
                                About
                            </NavItem>
                        </li>
                        <li className="text-center">
                            <NavItem isSidebar={true} href="/account">
                                Account
                            </NavItem>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar
