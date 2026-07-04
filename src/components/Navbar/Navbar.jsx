import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const links = [
    {
      id: "home",
      name: "Home",
    },
    {
      id: "skills",
      name: "Skills",
    },
    {
      id: "projects",
      name: "Projects",
    },
    {
      id: "contact",
      name: "Contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = section.offsetTop - 150;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300
        text-[rgb(var(--text))]
        ${
          scrolled
            ? "bg-[rgb(var(--bg))]/85 backdrop-blur-xl border-b border-[rgb(var(--border-base))]/10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }
      `}
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          h-20
          flex
          items-center
          justify-between
        "
      >
        <a
          href="#home"
          className="
            font-mono
            text-2xl
            font-bold
            tracking-tight
            text-[rgb(var(--text))]
          "
        >
          <span className="text-[#7C6AEF]">&lt;</span>
          Portfolio
          <span className="text-[#FFB454]">/&gt;</span>
        </a>

        <ul
          className="
            hidden
            md:flex
            items-center
            gap-8
          "
        >
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`
                  relative
                  font-medium
                  text-sm
                  uppercase
                  tracking-wide
                  transition-all
                  duration-300

                  ${
                    active === link.id
                      ? "text-[#7C6AEF]"
                      : "text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text))]"
                  }

                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-0.5
                  after:rounded-full
                  after:bg-gradient-to-r
                  after:from-[#7C6AEF]
                  after:to-[#FFB454]
                  after:transition-all
                  after:duration-300

                  ${
                    active === link.id
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }
                `}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            md:hidden
            text-2xl
            text-[rgb(var(--text))]
          "
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-500

          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div
          className="
            bg-[rgb(var(--bg))]/95
            backdrop-blur-xl
            border-t
            border-[rgb(var(--border-base))]/10
          "
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`
                block
                px-6
                py-4
                text-sm
                uppercase
                tracking-wide
                transition-all
                duration-300

                ${
                  active === link.id
                    ? "bg-[#7C6AEF]/15 text-[#7C6AEF]"
                    : "text-[rgb(var(--text-muted))] hover:bg-[rgb(var(--border-base))]/5 hover:text-[rgb(var(--text))]"
                }
              `}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;