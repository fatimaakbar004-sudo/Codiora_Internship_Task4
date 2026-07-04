import { FaSearch } from "react-icons/fa"

function SearchBar({ value, onChange }) {
    return (
        <div className="relative w-full md:w-96">

            <FaSearch
                className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[rgb(var(--text-muted))]
                "
            />

            <input
                type="text"
                placeholder="Search projects..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="
                    w-full
                    pl-11
                    pr-5
                    py-3
                    rounded-lg
                    bg-[rgb(var(--surface))]/80
                    border
                    border-[rgb(var(--border-base))]/10
                    text-[rgb(var(--text))]
                    placeholder:text-[rgb(var(--text-muted))]
                    focus:outline-none
                    focus:border-[#7C6AEF]/60
                    focus:shadow-[0_0_0_3px_rgba(124,106,239,0.15)]
                    transition
                "
            />

        </div>
    )
}

export default SearchBar