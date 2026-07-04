function Filter({
    label,
    value,
    options,
    onChange
}) {

    return (

        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="
                px-5
                py-3

                rounded-xl

                bg-[rgb(var(--card))]
                text-[rgb(var(--text))]

                border
                border-[rgb(var(--border-base))]

                shadow-sm

                outline-none

                focus:border-[#7C6AEF]
                focus:ring-2
                focus:ring-[#7C6AEF]/20

                hover:border-[#7C6AEF]/50

                transition-all
                duration-300

                cursor-pointer
            "
        >

            <option
                value="All"
                className="
                    bg-[rgb(var(--card))]
                    text-[rgb(var(--text))]
                "
            >

                All {label}

            </option>

            {options.map((option) => (

                <option
                    key={option}
                    value={option}
                    className="
                        bg-[rgb(var(--card))]
                        text-[rgb(var(--text))]
                    "
                >

                    {option}

                </option>

            ))}

        </select>

    );

}

export default Filter;