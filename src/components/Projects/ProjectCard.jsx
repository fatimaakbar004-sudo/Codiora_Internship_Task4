import Button from "../UI/Button";

function ProjectCard({ project, onView }) {

    return (

        <div
            className="
                group

                bg-[rgb(var(--card))]/80

                backdrop-blur-xl

                border
                border-[rgb(var(--border-base))]/15

                rounded-2xl

                overflow-hidden

                shadow-lg

                hover:-translate-y-3

                hover:shadow-[0_20px_40px_-15px_rgba(124,106,239,0.45)]

                transition-all
                duration-500
            "
        >

            <div className="overflow-hidden">

                <img
                    src={project.image}
                    alt={project.name}
                    className="
                        w-full
                        h-56
                        object-cover

                        group-hover:scale-110

                        transition-transform
                        duration-700
                    "
                />

            </div>

            <div className="p-6">

                <h3
                    className="
                        text-2xl
                        font-bold

                        text-[rgb(var(--text))]

                        transition-colors
                        duration-300
                    "
                >

                    {project.name}

                </h3>

                <p
                    className="
                        mt-4

                        leading-7

                        text-[rgb(var(--text-muted))]

                        transition-colors
                        duration-300
                    "
                >

                    {project.description}

                </p>

                <div
                    className="
                        flex
                        flex-wrap
                        gap-2

                        mt-6
                        mb-6
                    "
                >

                    {

                        project.technologies.map((tech) => (

                            <span
                                key={tech}
                                className="
                                    px-3
                                    py-1.5

                                    rounded-full

                                    text-sm
                                    font-medium

                                    bg-[#7C6AEF]/10

                                    text-[#7C6AEF]

                                    border
                                    border-[#7C6AEF]/20

                                    hover:bg-[#7C6AEF]
                                    hover:text-white

                                    transition-all
                                    duration-300
                                "
                            >

                                {tech}

                            </span>

                        ))

                    }

                </div>

                <Button
                    onClick={() => onView(project)}
                    className="w-full"
                >

                    View Details

                </Button>

            </div>

        </div>

    );

}

export default ProjectCard;