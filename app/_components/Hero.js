import banner1 from '@/app/_images/banner1.jpg'
import vector1 from '@/app/_images/vector-1.svg'
import vector2 from '@/app/_images/vector-2.svg'
import vector3 from '@/app/_images/vector-3.svg'
import vector4 from '@/app/_images/vector-4.svg'
import localFont from 'next/font/local'
import { getHeader } from '../_lib/data-service'
import ImageComponent from './ImageComponent'
import Image from 'next/image'

const palatino = localFont({
    src: '../_fonts/Palatino.woff2',
    subsets: ['latin'],
    display: 'swap',
})

const Hero = async () => {
    const { subheading, heading, description, catalog_url, image } =
        await getHeader(1)

    return (
        <div className="grid bg-primary-200 px-5 md:grid-cols-2">
            <div className="relative flex flex-col items-center justify-center gap-10 pt-14 text-center md:pt-0">
                <div className="absolute -left-5 top-0">
                    <Image src={vector1} alt="vector 1" />
                </div>
                <div className="absolute -right-5 top-0 md:right-0">
                    <Image src={vector2} alt="vector 2" />
                </div>
                <div className="absolute -left-5 bottom-0 hidden md:block">
                    <Image src={vector3} alt="vector 1" />
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-body-s text-primary-500 lg:text-body-m">
                        {subheading}
                    </h2>
                    <h1
                        className={`${palatino.className} text-secondary-xs text-primary-700 lg:text-secondary-l`}
                    >
                        {heading}
                    </h1>
                    <h3 className="text-regular-m">{description} </h3>
                </div>
                <button className="gap-3 border border-primary-700 p-4 text-body-s text-primary-700">
                    See our catalog
                </button>
            </div>
            <div className="relative p-8">
                <div className="absolute -right-5 bottom-0">
                    <Image src={vector4} alt="vector 1" />
                </div>
                <div className="absolute -left-5 bottom-0 md:hidden">
                    <Image src={vector3} alt="vector 1" />
                </div>
                <div className="relative aspect-1x1 rounded-br-[120px] rounded-tl-[120px] md:rounded-br-[150px] md:rounded-tl-[150px]">
                    <ImageComponent
                        src={image || banner1}
                        className="rounded-br-[120px] rounded-tl-[120px] object-cover md:rounded-br-[150px] md:rounded-tl-[150px]"
                        alt="header"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
