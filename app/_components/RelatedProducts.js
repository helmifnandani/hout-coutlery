'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'

import ProductItemCard from './ProductItemCard'

const RelatedProducts = ({ products }) => {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#EFBF95',
                    '--swiper-pagination-color': '#EFBF95',
                }}
                slidesPerView="auto"
                spaceBetween={30}
                centeredSlides={true}
                navigation={true}
                loop={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                    640: {
                        // sm
                        slidesPerView: 'auto',
                    },
                    768: {
                        slidesPerView: 4,
                        centeredSlides: false,
                        loop: false,
                    },
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id} className="!w-36 md:!w-auto">
                        <ProductItemCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default RelatedProducts
