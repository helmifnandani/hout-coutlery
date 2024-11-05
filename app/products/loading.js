import Spinner from '@/app/_components/Spinner'

const loading = () => {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <Spinner />
        </div>
    )
}

export default loading
