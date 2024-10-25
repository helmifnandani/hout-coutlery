import Image from 'next/image'
import Link from 'next/link'

import logo from '@/public/logo.png'

function Logo() {
    return (
        <Link href="/" className="flex">
            <Image
                src={logo}
                className="size-12"
                quality={100}
                alt="Hout Cutlery logo"
            />
        </Link>
    )
}

export default Logo
