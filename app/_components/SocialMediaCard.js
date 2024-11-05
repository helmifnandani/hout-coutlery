import Link from 'next/link'

const SocialMediaCard = ({ href, icon, children }) => {
    return (
        <Link
            href={href}
            className="flex w-48 flex-col items-center justify-center gap-3 rounded-2xl border border-primary-500 px-2 py-8 md:w-96"
        >
            <div className="flex">{icon}</div>
            <p className="text-body-m md:text-body-xl">{children}</p>
        </Link>
    )
}

export default SocialMediaCard
