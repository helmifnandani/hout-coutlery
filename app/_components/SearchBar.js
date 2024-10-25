import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const SearchBar = () => {
    return (
        <div className="flex w-52 items-center gap-2 rounded-[4px] border border-primary-500 p-2">
            <span>
                <MagnifyingGlassIcon className="size-4" />
            </span>
            <input
                placeholder="Search Catalog"
                type="string"
                className="w-full text-primary-500 focus:border-none focus:outline-none focus:ring-0"
            ></input>
        </div>
    )
}

export default SearchBar
