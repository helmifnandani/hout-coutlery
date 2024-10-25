import Hero from './_components/Hero'
import BestSellerSection from './_components/BestSellerSection'
import CollectionSection from './_components/CollectionSection'
import GallerySection from './_components/GallerySection'

export default function Home() {
    return (
        <div>
            <Hero />
            <BestSellerSection />
            <CollectionSection />
            <CollectionSection />
            <GallerySection />
        </div>
    )
}
