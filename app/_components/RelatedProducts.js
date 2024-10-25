'use client'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { Pagination, Navigation } from 'swiper/modules'
import ProductItemCard from './ProductItemCard'

const RelatedProducts = () => {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#EFBF95',
                    '--swiper-pagination-color': '#EFBF95',
                }}
                slidesPerView={4}
                spaceBetween={30}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <ProductItemCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItemCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItemCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItemCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItemCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItemCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItemCard />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default RelatedProducts
