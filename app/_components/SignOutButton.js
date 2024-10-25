import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'

function SignOutButton() {
    return (
        <form>
            <button className="hover:bg-primary-900 flex w-full items-center gap-4 px-5 py-3 font-semibold text-primary-600 transition-colors hover:text-primary-100">
                <ArrowRightOnRectangleIcon className="h-5 w-5" />
                <span>Sign out</span>
            </button>
        </form>
    )
}

export default SignOutButton
