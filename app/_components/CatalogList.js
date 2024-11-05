import { getCatalogs } from '../_lib/data-service'
import CatalogSlider from './CatalogSlider'

const CatalogList = async () => {
    const catalogs = await getCatalogs()
    return (
        <div className="w-screen overflow-hidden">
            <CatalogSlider catalogs={catalogs} />
        </div>
    )
}

export default CatalogList
