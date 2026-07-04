import { FaFolderOpen } from "react-icons/fa"

function EmptyState({
    title = "No Data Found",
    description = "Nothing available right now."
}) {
    return (
        <div className="flex flex-col items-center py-16">

            <FaFolderOpen
                className="
                    text-6xl
                    text-gray-500
                    mb-4
                "
            />

            <h2
                className="
                    text-2xl
                    font-bold
                    mb-2
                "
            >
                {title}
            </h2>

            <p
                className="
                    text-gray-400
                    text-center
                "
            >
                {description}
            </p>

        </div>
    )
}

export default EmptyState