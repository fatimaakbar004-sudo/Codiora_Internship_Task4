function Spinner() {

    return (

        <div
            className="
                flex
                justify-center
                items-center
                py-24
                bg-[rgb(var(--bg))]
                transition-colors
                duration-300
            "
        >

            <div
                className="
                    w-12
                    h-12

                    border-4

                    border-[#7C6AEF]

                    border-t-transparent

                    rounded-full

                    animate-spin
                "
            />

        </div>

    )

}

export default Spinner