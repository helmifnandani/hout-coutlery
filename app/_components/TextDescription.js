'use client'

import { useEffect, useState } from 'react'
import HTMLRenderer from './HTMLRenderer'

const DESC_LIMIT = 500

const TextDescription = ({ description }) => {
    const [formattedDescription, setFormattedDescription] =
        useState(description)
    const [isLong, setIsLong] = useState(false)
    const [seeDetails, setSeeDetails] = useState(false)

    useEffect(() => {
        if (description.length > DESC_LIMIT) {
            setFormattedDescription((prev) => prev.slice(0, DESC_LIMIT))
            setIsLong(true)
        }
    }, [description, setIsLong])

    useEffect(() => {
        setFormattedDescription((prev) =>
            seeDetails ? description : description.slice(0, DESC_LIMIT)
        )
    }, [seeDetails, description])

    return (
        <div className="inline-block text-body-m">
            <HTMLRenderer content={formattedDescription} />

            {isLong && (
                <button
                    onClick={() => setSeeDetails((prev) => !prev)}
                    className="text-sub-h-m text-primary-300"
                >
                    See Details
                </button>
            )}
        </div>
    )
}

export default TextDescription
