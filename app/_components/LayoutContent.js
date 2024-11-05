'use client'
import Image from 'next/image'
import { Outfit } from 'next/font/google'
import { useSidebar } from '../_contexts/SidebarContext'
import Header from './Header'
import Footer from './Footer'
import Flower from './Flower'
import vector2 from '@/app/_images/vector-2.svg'
import { HeaderProvider } from '../_contexts/HeaderContext'

const outfit = Outfit({
    subsets: ['latin'],
    display: 'swap',
})

const LayoutContent = ({ children }) => {
    const { isOpenSidebar } = useSidebar()
    return (
        <body
            className={` ${outfit.className} overflow-x-hidden antialiased ${isOpenSidebar ? 'overflow-hidden' : ''} flex min-h-screen flex-col transition-all duration-300`}
        >
            <HeaderProvider>
                <Header />
            </HeaderProvider>
            <div className="grid flex-1 bg-accent-background">
                <main className="container mx-auto w-full">
                    <Flower
                        className={'left-0 top-[75vh]'}
                        startEnd={[0, 10000]}
                        endStart={[0, -500]}
                    >
                        <div className="absolute -left-5 bottom-0">
                            <Image
                                src={vector2}
                                alt="vector 2"
                                className="rotate-180"
                            />
                        </div>
                    </Flower>
                    <Flower
                        className={'right-0 top-[50vh]'}
                        startEnd={[0, 10000]}
                        endStart={['0%', '-50%']}
                    >
                        <div className="absolute bottom-0 right-0">
                            <Image src={vector2} alt="vector 2" />
                        </div>
                    </Flower>
                    {children}
                </main>
            </div>
            <Footer />
        </body>
    )
}

export default LayoutContent
