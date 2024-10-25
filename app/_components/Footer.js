import vectorFooter1 from '@/app/_images/vector-footer-1.svg'
import vectorFooter2 from '@/app/_images/vector-footer-2.svg'
import Image from 'next/image'
import Logo from './Logo'

const Footer = () => {
    return (
        <div className="relative bg-primary-200">
            <div className="absolute bottom-0 left-0 md:top-0">
                <Image src={vectorFooter1} alt="vector 1" />
            </div>
            <div className="absolute right-0 top-0">
                <Image src={vectorFooter2} alt="vector 1" />
            </div>
            <div className="mx-auto flex h-full w-full max-w-4xl flex-col justify-between gap-10 px-14 py-10 md:flex-row md:gap-0 md:px-0">
                <div className="flex flex-col">
                    <div className="mb-4">
                        <Logo />
                    </div>
                    <p className="mb-2 text-sub-h-l">Hout Cutlery</p>
                    <p className="text-body-s">
                        Sidoarjo, Jawa Timur, Indonesia
                    </p>
                </div>
                <div className="flex grid-cols-3 flex-col gap-10 md:grid">
                    <div>
                        <h4 className="mb-5 text-h3">Product</h4>
                        <p className="mb-3 text-body-l">Hampers</p>
                        <p className="mb-3 text-body-l">Kitchen Set</p>
                        <p className="text-body-l">Coutlery Set</p>
                    </div>
                    <div>
                        <h4 className="mb-5 text-h3">Online Store</h4>
                        <p className="mb-3 text-body-l">Shopee</p>
                        <p className="text-body-l">Tokopedia</p>
                    </div>
                    <div>
                        <h4 className="mb-5 text-h3">Social Media</h4>
                        <p className="mb-3 text-body-l">Instagram</p>
                        <p className="text-body-l">Whatsapp</p>
                    </div>
                </div>
            </div>
            <div className="h-full bg-primary-600 py-2">
                <p className="text-center text-regular-s text-white">
                    Made by HFN
                </p>
            </div>
        </div>
    )
}

export default Footer