'use client'
import { useState, useCallback, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const SearchBar = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [searchTerm, setSearchTerm] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    // Optional: Get current search term from URL
    useEffect(() => {
        const currentSearch = searchParams.get('q')
        if (currentSearch) {
            setSearchTerm(currentSearch)
        }
    }, [searchParams])

    // Handle Search
    const handleSearch = useCallback(
        async (term) => {
            try {
                setIsLoading(true)
                setError(null)
                setSearchTerm('')

                // Create new URLSearchParams
                const params = new URLSearchParams(searchParams)
                if (term) {
                    params.set('search', term)
                    params.set('catalog', 'all')
                } else {
                    params.delete('search')
                }

                // Update URL
                router.push(`/products?${params.toString()}`)

                // Optional: Fetch search results here
                // const response = await fetch(`/api/search?q=${term}`)
                // const data = await response.json()
            } catch (err) {
                setError('Search failed. Please try again.')
                console.error('Search error:', err)
            } finally {
                setIsLoading(false)
            }
        },
        [searchParams, router]
    )

    // Handle key press
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch(searchTerm)
        }
    }
    return (
        <div className="flex w-52 items-center gap-2 rounded-[4px] border border-primary-500 p-2">
            <span>
                <MagnifyingGlassIcon className="size-4" />
            </span>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search Product"
                disabled={isLoading}
                className="w-full text-primary-500 focus:border-none focus:outline-none focus:ring-0"
            ></input>
        </div>
    )
}

export default SearchBar
