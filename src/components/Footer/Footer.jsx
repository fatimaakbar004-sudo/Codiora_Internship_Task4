import {
    FaGithub,
    FaLinkedin,
    FaHeart
} from "react-icons/fa"

function Footer() {

    const year = new Date().getFullYear()

    return (

        <footer
            className="
                border-t
                border-[rgb(var(--border-base))]/10
               bg-[rgb(var(--bg))]
transition-colors
duration-300
                text-[rgb(var(--text))]
                py-10
                mt-20
            "
        >

            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-6
                    flex
                    flex-col
                    md:flex-row
                    justify-between
                    items-center
                    gap-6
                "
            >

                <div>

                    <h2
                        className="
                            font-mono
                            text-xl
                            font-bold
                        "
                    >

                        <span className="text-[#7C6AEF]">&lt;</span>
                        Portfolio
                        <span className="text-[#FFB454]">/&gt;</span>

                    </h2>

                    <p className="text-[rgb(var(--text-muted))]
transition-colors
duration-300 mt-2 text-sm">

                        © {year} All Rights Reserved

                    </p>

                </div>

                <div
                    className="
                        flex
                        gap-6
                        text-2xl
                    "
                >

                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noreferrer"
                    >

                        <FaGithub
                            className="
                               text-[rgb(var(--text-muted))]
transition-colors
duration-300
                                hover:text-[#7C6AEF]
                                transition
                            "
                        />

                    </a>

                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noreferrer"
                    >

                        <FaLinkedin
                            className="
                                text-[rgb(var(--text-muted))]
transition-colors
duration-300
                                hover:text-[#7C6AEF]
                                transition
                            "
                        />

                    </a>

                </div>

                <p
                    className="
                        flex
                        items-center
                        gap-2
                      text-[rgb(var(--text-muted))]
transition-colors
duration-300
                        text-sm
                    "
                >

                    Made with

                    <FaHeart className="text-[#FF6B6B]" />

                    using React & Tailwind

                </p>

            </div>

        </footer>

    )

}

export default Footer