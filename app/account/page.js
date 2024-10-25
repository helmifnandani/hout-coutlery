import React from 'react'
import SideNavigation from '../_components/SideNavigation'
import WishlistSection from '../_components/WishlistSection'

const page = () => {
    return (
        <div className="grid h-full grid-cols-[16rem_1fr] gap-12 py-10">
            <SideNavigation />
            <div className="py-1">
                <WishlistSection />
            </div>
        </div>
    )
}

export default page
