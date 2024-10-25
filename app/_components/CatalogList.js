import CatalogItem from './CatalogItem'

const CatalogList = () => {
    return (
        <div className="">
            <div className="scrollbar-hide -mx-4 flex snap-x snap-mandatory items-center gap-6 overflow-x-auto whitespace-nowrap px-4 pb-4">
                <CatalogItem>
                    <p className="text-body-xl text-white">All Categories</p>
                    <p className="text-body-s text-white">5 Items</p>
                </CatalogItem>
                <CatalogItem>
                    <p className="text-body-xl text-white">Cutlery</p>
                    <p className="text-body-s text-white">5 Items</p>
                </CatalogItem>
                <CatalogItem>
                    <p className="text-body-xl text-white">Kitchen Set</p>
                    <p className="text-body-s text-white">5 Items</p>
                </CatalogItem>
                <CatalogItem>
                    <p className="text-body-xl text-white">Hampers</p>
                    <p className="text-body-s text-white">5 Items</p>
                </CatalogItem>
                <CatalogItem>
                    <p className="text-body-xl text-white">Healthy Snack</p>
                    <p className="text-body-s text-white">5 Items</p>
                </CatalogItem>
            </div>
        </div>
    )
}

export default CatalogList
