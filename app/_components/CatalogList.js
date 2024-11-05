import { Suspense } from 'react'
import { getCatalogs } from '../_lib/data-service'
import CatalogSlider from './CatalogSlider'
import Spinner from './Spinner'

const CatalogList = async () => {
    const catalogs = await getCatalogs()
    return (
        <div className="w-screen overflow-hidden">
            <Suspense fallback={<Spinner />}>
                <CatalogSlider catalogs={catalogs} />
            </Suspense>
        </div>
    )
}

export default CatalogList
