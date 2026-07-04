import { FaExclamationTriangle } from "react-icons/fa"

function ErrorMessage({
    message = "Something went wrong."
}) {
    return (
        <div
            className="
                flex
                flex-col
                items-center
                justify-center
                py-16
            "
        >
            <FaExclamationTriangle
                className="
                    text-red-500
                    text-5xl
                    mb-4
                "
            />

            <h2
                className="
                    text-xl
                    font-bold
                    text-red-400
                    mb-2
                "
            >
                Error
            </h2>

            <p
                className="
                    text-gray-300
                    text-center
                "
            >
                {message}
            </p>

        </div>
    )
}

export default ErrorMessage