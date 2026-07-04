function Button({
    children,
    onClick,
    type = "button",
    className = "",
    disabled = false
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
           className={`
px-6
py-3
rounded-xl
font-semibold

bg-cyan-500
text-white

hover:bg-cyan-400

transition-all
duration-300

hover:scale-105
active:scale-95

shadow-lg
hover:shadow-cyan-500/40

disabled:opacity-50
disabled:cursor-not-allowed

${className}

            `}
        >
            {children}
        </button>
    )
}

export default Button