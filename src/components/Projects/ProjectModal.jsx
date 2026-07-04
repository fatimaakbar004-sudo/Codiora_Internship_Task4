import {
    FaGithub,
    FaExternalLinkAlt,
    FaTimes
} from "react-icons/fa";

function ProjectModal({ project, onClose }) {

    if (!project) return null;

    return (

        <div
            onClick={onClose}
            className="
                fixed
                inset-0
                z-50

                flex
                items-center
                justify-center

                p-6

                bg-black/60
                backdrop-blur-md

                animate-fadeIn
            "
        >

            <div
                onClick={(e) => e.stopPropagation()}
                className="
                    w-full
                    max-w-4xl

                    rounded-3xl

                    overflow-hidden

                    bg-[rgb(var(--card))]

                    border
                    border-[rgb(var(--border-base))]/20

                    shadow-[0_25px_60px_-15px_rgba(124,106,239,.45)]

                    animate-[fadeIn_.35s_ease]
                "
            >

                {/* Project Image */}

                <div className="relative">

                    <img
                        src={project.image}
                        alt={project.name}
                        className="
                            w-full
                            h-80
                            object-cover
                        "
                    />

                    <button
                        onClick={onClose}
                        className="
                            absolute
                            top-5
                            right-5

                            w-11
                            h-11

                            rounded-full

                            bg-black/40

                            backdrop-blur-md

                            text-white

                            flex
                            items-center
                            justify-center

                            hover:bg-red-500

                            transition-all
                            duration-300
                        "
                    >

                        <FaTimes size={18} />

                    </button>

                </div>

                {/* Content */}

                <div className="p-8">

                    <h2
                        className="
                            text-4xl
                            font-bold

                            text-[rgb(var(--text))]
                        "
                    >

                        {project.name}

                    </h2>

                    <p
                        className="
                            mt-5

                            leading-8

                            text-[rgb(var(--text-muted))]
                        "
                    >

                        {project.description}

                    </p>

                    {/* Technologies */}

                    <div
                        className="
                            flex
                            flex-wrap
                            gap-3

                            mt-8
                        "
                    >

                        {

                            project.technologies.map((tech) => (

                                <span
                                    key={tech}
                                    className="
                                        px-4
                                        py-2

                                        rounded-full

                                        text-sm
                                        font-medium

                                        bg-[#7C6AEF]/10

                                        text-[#7C6AEF]

                                        border
                                        border-[#7C6AEF]/20

                                        transition-all
                                        duration-300

                                        hover:bg-[#7C6AEF]
                                        hover:text-white
                                    "
                                >

                                    {tech}

                                </span>

                            ))

                        }

                    </div>

                    {/* Buttons */}

                    <div
                        className="
                            flex
                            flex-wrap
                            gap-5

                            mt-10
                        "
                    >

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1"
                        >

                            <button
                                className="
                                    w-full

                                    py-3

                                    rounded-xl

                                    flex
                                    items-center
                                    justify-center
                                    gap-3

                                    bg-[#7C6AEF]

                                    text-white

                                    font-semibold

                                    hover:scale-105

                                    hover:shadow-[0_10px_30px_-10px_rgba(124,106,239,.7)]

                                    transition-all
                                    duration-300
                                "
                            >

                                <FaGithub />

                                GitHub Repository

                            </button>

                        </a>

                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1"
                        >

                            <button
                                className="
                                    w-full

                                    py-3

                                    rounded-xl

                                    flex
                                    items-center
                                    justify-center
                                    gap-3

                                    bg-[#FFB454]

                                    text-black

                                    font-semibold

                                    hover:scale-105

                                    hover:shadow-[0_10px_30px_-10px_rgba(255,180,84,.6)]

                                    transition-all
                                    duration-300
                                "
                            >

                                <FaExternalLinkAlt />

                                Live Demo

                            </button>

                        </a>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default ProjectModal;