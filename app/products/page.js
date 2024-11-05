import { Suspense } from 'react'
import Breadcrumb from '../_components/Breadcrumb'
import CatalogList from '../_components/CatalogList'
import ProductList from '../_components/ProductList'
import Spinner from '../_components/Spinner'

const page = ({ searchParams }) => {
    const filter = searchParams?.catalog ?? 'all'
    const search = searchParams?.search ?? ''
    console.log(search)

    return (
        <div>
            <Breadcrumb />
            <div className="w-screen overflow-hidden px-4 py-6 md:px-20">
                <h1 className="mb-6 text-h2 lg:text-h1">Catalog</h1>
                <Suspense
                    fallback={<Spinner />}
                    key={`filter_${filter}_search_${search}`}
                >
                    <CatalogList />
                    <ProductList filter={filter} search={search} />
                </Suspense>
            </div>
        </div>
    )
}

export default page
