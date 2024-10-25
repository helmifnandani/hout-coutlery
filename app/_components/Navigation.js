import Link from 'next/link'
import NavItem from './NavItem'
// import { auth } from "../_lib/auth";

export default function Navigation() {
    // const session = await auth();
    return (
        <nav className="z-10 hidden text-xl md:flex">
            <ul className="flex items-center gap-6">
                <li>
                    <NavItem href="/">Home</NavItem>
                </li>
                <li>
                    <NavItem href="/products">Catalog</NavItem>
                </li>
                <li>
                    <NavItem href="/about">About</NavItem>
                </li>
            </ul>
        </nav>
    )
}
