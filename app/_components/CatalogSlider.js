'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
// import banner1 from '@/app/_images/banner1.jpg'
import banner1 from '@/public/banner1.jpg'
import CatalogItem from './CatalogItem'

import 'swiper/css'
import 'swiper/css/pagination'

const CatalogSlider = ({ catalogs }) => {
    return (
        <Swiper
            style={{
                '--swiper-navigation-color': '#EFBF95',
                '--swiper-pagination-color': '#EFBF95',
            }}
            slidesPerView="auto"
            spaceBetween={30}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            centeredSlides={true}
            modules={[Pagination, Navigation]}
            loop={true}
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
            className="mySwiper"
        >
            <SwiperSlide className="!w-48">
                <CatalogItem src={banner1} id="all" name="All Products">
                    <p className="text-body-xl text-white">All Products</p>
                </CatalogItem>
            </SwiperSlide>
            {catalogs.map((catalog) => (
                <SwiperSlide key={catalog.id} className="!w-48">
                    <CatalogItem
                        key={catalog.id}
                        src={catalog.image}
                        id={catalog.id}
                        name={catalog.name}
                    >
                        <p className="text-body-xl text-white">
                            {catalog.name}
                        </p>
                        <p className="text-body-s text-white">
                            {catalog.catalog_product.length} Item
                            {`${catalog.catalog_product.length > 1 ? 's' : ''}`}
                        </p>
                    </CatalogItem>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default CatalogSlider
