import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
                fixed
                top-24
                right-6
                z-50
                w-12
                h-12
                rounded-full
                bg-[rgb(var(--surface))]/90
                backdrop-blur-lg
                border
                border-[rgb(var(--border-base))]/10
                text-[rgb(var(--text))]
                flex
                items-center
                justify-center
                shadow-[0_10px_30px_-10px_rgba(124,106,239,0.6)]
                hover:border-[#7C6AEF]/60
                hover:scale-110
                transition-all
                duration-300
            "
    >
      {theme === "dark" ? (
        <FaSun className="text-[#FFB454]" />
      ) : (
        <FaMoon className="text-[#7C6AEF]" />
      )}
    </button>
  );
}

export default ThemeToggle;
