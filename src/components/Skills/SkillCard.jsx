function SkillCard({ skill }) {

    return (

        <div
            className="
                bg-[rgb(var(--card))]/80

                backdrop-blur-xl

                border

                border-[rgb(var(--border-base))]/15

                rounded-2xl

                p-6

                shadow-lg

                hover:shadow-[0_10px_30px_-10px_rgba(124,106,239,0.5)]

                hover:-translate-y-2

                transition-all

                duration-300
            "
        >

            <div className="flex justify-between items-center mb-3">

                <h3
                    className="
                        font-semibold
                        text-lg
                        text-[rgb(var(--text))]
                    "
                >

                    {skill.name}

                </h3>

                <span
                    className="
                        text-[#7C6AEF]
                        font-semibold
                    "
                >

                    {skill.level}%

                </span>

            </div>

            <div
                className="
                    w-full
                    h-3
                    rounded-full

                    bg-[rgb(var(--border-base))]/20

                    overflow-hidden
                "
            >

                <div

                    style={{
                        width: `${skill.level}%`
                    }}

                    className="
                        h-full

                        rounded-full

                        bg-gradient-to-r

                        from-[#7C6AEF]

                        to-[#FFB454]

                        transition-all

                        duration-1000
                    "

                />

            </div>

        </div>

    )

}

export default SkillCard