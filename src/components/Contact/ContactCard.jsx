import {
    FaEnvelope,
    FaPhone,
    FaLocationDot
} from "react-icons/fa6";

const icons = {

    email: <FaEnvelope />,

    phone: <FaPhone />,

    address: <FaLocationDot />

};

function ContactCard({

    type,

    title,

    value

}) {

    return (

        <div
            className="
                bg-[rgb(var(--card))]/80

                backdrop-blur-xl

                border

                border-[rgb(var(--border-base))]/15

                rounded-2xl

                p-6

                flex

                items-center

                gap-5

                shadow-lg

                hover:shadow-[0_10px_30px_-10px_rgba(124,106,239,.5)]

                hover:-translate-y-2

                transition-all

                duration-300
            "
        >

            <div
                className="
                    w-14

                    h-14

                    rounded-full

                    bg-[#7C6AEF]

                    flex

                    justify-center

                    items-center

                    text-white

                    text-xl
                "
            >

                {icons[type]}

            </div>

            <div>

                <h3
                    className="
                        font-semibold

                        text-[rgb(var(--text))]
                    "
                >

                    {title}

                </h3>

                <p
                    className="
                        text-[rgb(var(--text-muted))]
                    "
                >

                    {value}

                </p>

            </div>

        </div>

    )

}

export default ContactCard