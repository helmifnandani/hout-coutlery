import localFont from 'next/font/local'
import Image from 'next/image'
// import banner1 from '@/app/_images/banner1.jpg'
import banner1 from '@/public/banner1.jpg'
import SocialMediaCard from '../_components/SocialMediaCard'
import IconInstagram from '../_components/_icons/IconInstagram'
import IconShopee from '../_components/_icons/IconShopee'
import IconTokopedia from '../_components/_icons/IconTokopedia'

const palatino = localFont({
    src: '../_fonts/Palatino.woff2',
    subsets: ['latin'],
    display: 'swap',
})
const page = () => {
    return (
        <div className="">
            <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] aspect-3x2 w-screen md:aspect-4x1">
                <Image
                    src={banner1}
                    fill
                    placeholder="blur"
                    quality={80}
                    className="object-cover"
                    alt="Package 1"
                />
                <div className="absolute h-full w-full bg-black opacity-40"></div>
                <div className="absolute flex h-full w-full flex-col items-center justify-center gap-6 text-center">
                    <h3 className="text-h2 text-white lg:text-h1">
                        Hout Cutlery
                    </h3>
                    <p className="w-3/4 text-body-m text-white lg:w-1/3 lg:text-body-xl">
                        Consectetur adipisicing magna minim culpa enim. Commodo
                        sit ad minim aliqua proident minim veniam nisi ipsum
                        commodo consequat.
                    </p>
                </div>
            </div>
            <div className="px-6 py-10 md:px-20">
                <h2
                    className={`${palatino.className} text-secondary-s text-primary-700 md:text-secondary-m`}
                >
                    Online Store
                </h2>
                <p className="mb-6 text-body-m text-primary-700 md:text-body-xl">
                    We also available on:
                </p>

                <div className="mb-6 flex flex-col items-center gap-6 md:flex-row">
                    <SocialMediaCard
                        href="https://www.instagram.com/hout.cutlery/"
                        icon={<IconInstagram />}
                    >
                        hout.cutlery
                    </SocialMediaCard>
                    <SocialMediaCard
                        href="https://shopee.co.id/houtcutlery"
                        icon={<IconShopee />}
                    >
                        hout.cutlery
                    </SocialMediaCard>
                    <SocialMediaCard
                        href="https://www.tokopedia.com/houtcutlery"
                        icon={<IconTokopedia />}
                    >
                        hout.cutlery
                    </SocialMediaCard>
                </div>
                <h2
                    className={`${palatino.className} text-secondary-s text-primary-700 md:text-secondary-m`}
                >
                    Store Location
                </h2>
                <p className="mb-6 text-body-s text-primary-700 md:text-body-l">
                    Ruko graha kota CC-31, Jl. Raya Sungon No.28, Sungon, Suko,
                    Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61224
                </p>
                <div className="relative aspect-20x9 w-full overflow-hidden rounded-lg shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1663.3515147833252!2d112.68166806326262!3d-7.449879897083844!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e15813b0a463%3A0x58a29bdee1a4b756!2sHout%20Cutlery!5e0!3m2!1sen!2sid!4v1729779424645!5m2!1sen!2sid"
                        className="absolute inset-0 h-full w-full border-0"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default page
