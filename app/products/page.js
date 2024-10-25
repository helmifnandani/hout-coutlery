import Breadcrumb from '../_components/Breadcrumb'
import CatalogList from '../_components/CatalogList'
import ProductList from '../_components/ProductList'

const page = () => {
    return (
        <div className="">
            <Breadcrumb />
            <div className="px-4 py-6 md:px-20">
                <h1 className="mb-6 text-h2 lg:text-h1">Catalog</h1>
                <CatalogList />
                <ProductList />
            </div>
        </div>
    )
}

export default page
