import API from "../../api/api";
import useFetch from "../../hooks/useFetch";

import Spinner from "../UI/Spinner";
import ErrorMessage from "../UI/ErrorMessage";
import Button from "../UI/Button";

function Hero() {
  const { data, loading, error } = useFetch(API.profile);

  if (loading) return <Spinner />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <section
      id="home"
      className="
                relative
                min-h-screen
                flex
                items-center
                justify-center
                px-6
                overflow-hidden

                bg-[rgb(var(--bg))]
                text-[rgb(var(--text))]

                transition-colors
                duration-300
            "
    >
      {/* Purple Glow */}
      <div
        className="
                    absolute
                    -top-44
                    left-1/2
                    -translate-x-1/2
                    w-[700px]
                    h-[700px]
                    rounded-full
                    bg-[#7C6AEF]/20
                    blur-[140px]
                    pointer-events-none
                "
      />

      {/* Orange Glow */}
      <div
        className="
                    absolute
                    bottom-0
                    right-0
                    w-[420px]
                    h-[420px]
                    rounded-full
                    bg-[#FFB454]/15
                    blur-[120px]
                    pointer-events-none
                "
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <p
          className="
                        font-mono
                        uppercase
                        tracking-[4px]
                        text-sm
                        text-[#FFB454]
                        mb-6
                    "
        >
          &lt;/&gt; Hello World, I'm
        </p>

        <div className="relative inline-block">
          <div
            className="
                            absolute
                            inset-0
                            rounded-full
                            bg-[#7C6AEF]/30
                            blur-2xl
                            animate-pulse
                        "
          />

          <img
            src={data.image}
            alt={data.name}
            className="
                            relative
                            w-40
                            h-40
                            mx-auto
                            rounded-full
                            object-cover

                            border-2
                            border-[#7C6AEF]/70

                            shadow-[0_0_55px_-10px_rgba(124,106,239,.7)]

                            animate-[float_4s_ease-in-out_infinite]

                            mb-8
                        "
          />
        </div>

        <h1
          className="
                        text-5xl
                        md:text-7xl
                        font-extrabold
                        tracking-tight
                        leading-tight
                    "
        >
          <span
            className="
                            bg-gradient-to-r
                            from-[rgb(var(--text))]
                            via-[#DCD6FF]
                            to-[#7C6AEF]
                            bg-clip-text
                            text-transparent
                        "
          >
            {data.name}
          </span>
        </h1>

        <h2
          className="
                        mt-5
                        inline-flex
                        items-center
                        gap-2

                        font-mono
                        text-xl
                        md:text-2xl

                        text-[#FFB454]
                    "
        >
          {data.title}

          <span
            className="
                            w-[2px]
                            h-6
                            bg-[#FFB454]
                            animate-pulse
                        "
          />
        </h2>

        <p
          className="
                        mt-8
                        max-w-2xl
                        mx-auto
                        leading-8
                        text-lg

                        text-[rgb(var(--text-muted))]
                    "
        >
          {data.bio}
        </p>

        <div
          className="
                        mt-12
                        flex
                        flex-wrap
                        justify-center
                        gap-5
                    "
        >
          <a href="#projects">
            <Button>View Projects</Button>
          </a>

          <a href={data.resume} target="_blank" rel="noreferrer">
            <Button
              className="
    bg-transparent
    text-black
    dark:bg-transparent
    dark:text-white

    border border-[#7C6AEF]/50
    dark:border-[#7C6AEF]/40

    hover:bg-[#7C6AEF]/10
    dark:hover:bg-[#7C6AEF]/20

    hover:border-[#7C6AEF]
    dark:hover:border-[#7C6AEF]

    text-sm font-medium

    transition-all duration-200 ease-in-out

    shadow-none
    dark:text-[rgb(var(--text))]
  "
            >
              Download CV
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
