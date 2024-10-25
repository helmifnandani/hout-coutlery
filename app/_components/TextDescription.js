'use client'

import HTMLRenderer from './HTMLRenderer'

const TextDescription = () => {
    return (
        <div className="inline-block text-body-m">
            <HTMLRenderer
                content={
                    '<p>Id laborum irure ullamco amet officia officia eiusmod et dolor aliqua culpa consectetur excepteur.</p>'
                }
            />
            <button className="text-sub-h-m text-primary-300">
                See Details
            </button>
        </div>
    )
}

export default TextDescription
