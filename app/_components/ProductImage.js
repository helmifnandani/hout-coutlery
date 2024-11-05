'use client'

import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import ImageComponent from './ImageComponent'
import Spinner from './Spinner'

const ProductImage = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted || !images) return <Spinner /> // Or your loading component

    return (
        <>
            {images.length > 0 && (
                <>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        spaceBetween={10}
                        navigation={true}
                        effect={'fade'}
                        thumbs={{
                            swiper:
                                thumbsSwiper && !thumbsSwiper.destroyed
                                    ? thumbsSwiper
                                    : null,
                        }}
                        modules={[EffectFade, FreeMode, Navigation, Thumbs]}
                        className="mb-5"
                    >
                        {images?.map((image) => (
                            <SwiperSlide key={image.id}>
                                <div className="relative aspect-card max-w-96">
                                    <ImageComponent
                                        src={image.image_url}
                                        className="object-cover"
                                        alt={image.id}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        modules={[FreeMode, Navigation, Thumbs]}
                        onSwiper={setThumbsSwiper}
                        spaceBetween={12}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        className="thumbs-swiper"
                    >
                        {images?.map((image) => (
                            <SwiperSlide key={image.id}>
                                <div className="relative aspect-4x3 w-full">
                                    <ImageComponent
                                        src={image.image_url}
                                        className="object-cover"
                                        alt={image.id}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            )}
            {images.length === 0 && (
                <div className="relative aspect-card max-w-96">
                    <ImageComponent
                        className="object-cover"
                        alt="placeholder"
                    />
                </div>
            )}
        </>
    )
}
export default ProductImage
