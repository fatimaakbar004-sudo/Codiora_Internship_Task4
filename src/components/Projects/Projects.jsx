import { useMemo, useState } from "react";

import API from "../../api/api";
import useFetch from "../../hooks/useFetch";

import SearchBar from "./SearchBar";
import Filter from "./Filter";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import Spinner from "../UI/Spinner";
import Skeleton from "../UI/Skeleton";
import ErrorMessage from "../UI/ErrorMessage";
import EmptyState from "../UI/EmptyState";

function Projects() {

    const {
        data: projects,
        loading,
        error
    } = useFetch(API.projects);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [technology, setTechnology] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = useMemo(() => {

        if (!projects) return [];

        return [...new Set(projects.map(project => project.category))];

    }, [projects]);

    const technologies = useMemo(() => {

        if (!projects) return [];

        return [...new Set(projects.flatMap(project => project.technologies))];

    }, [projects]);

    const filteredProjects = useMemo(() => {

        if (!projects) return [];

        return projects.filter(project => {

            const matchesSearch =
                project.name.toLowerCase().includes(search.toLowerCase());

            const matchesCategory =
                category === "All" ||
                project.category === category;

            const matchesTechnology =
                technology === "All" ||
                project.technologies.includes(technology);

            return (
                matchesSearch &&
                matchesCategory &&
                matchesTechnology
            );

        });

    }, [projects, search, category, technology]);

    if (loading) {

        return (

            <section
                id="projects"
                className="
                    py-24
                    px-6
                    bg-[rgb(var(--bg))]
                    text-[rgb(var(--text))]
                "
            >

                <div className="max-w-7xl mx-auto">

                    <h2
                        className="
                            text-4xl
                            font-bold
                            text-center
                            mb-12
                        "
                    >

                        Projects

                    </h2>

                    <div
                        className="
                            grid
                            md:grid-cols-2
                            xl:grid-cols-3
                            gap-8
                        "
                    >

                        {[1,2,3,4,5,6].map(item => (

                            <Skeleton
                                key={item}
                                className="h-[420px]"
                            />

                        ))}

                    </div>

                </div>

            </section>

        );

    }

    if (error) {

        return <ErrorMessage message={error} />;

    }

    return (

        <section
            id="projects"
            className="
                py-24
                px-6

                bg-[rgb(var(--bg))]
                text-[rgb(var(--text))]

                transition-colors
                duration-300
            "
        >

            <div className="max-w-7xl mx-auto">

                <h2
                    className="
                        text-4xl
                        font-bold
                        text-center
                        mb-12
                    "
                >

                    Projects

                </h2>

                <div
                    className="
                        flex
                        flex-col
                        lg:flex-row
                        justify-between
                        items-center
                        gap-5
                        mb-12
                    "
                >

                    <SearchBar
                        value={search}
                        onChange={setSearch}
                    />

                    <div
                        className="
                            flex
                            flex-wrap
                            gap-4
                        "
                    >

                        <Filter
                            label="Categories"
                            value={category}
                            options={categories}
                            onChange={setCategory}
                        />

                        <Filter
                            label="Technologies"
                            value={technology}
                            options={technologies}
                            onChange={setTechnology}
                        />

                    </div>

                </div>

                {

                    filteredProjects.length === 0

                        ?

                        (

                            <EmptyState

                                title="No Projects Found"

                                description="Try another search or filter."

                            />

                        )

                        :

                        (

                            <div
                                className="
                                    grid
                                    md:grid-cols-2
                                    xl:grid-cols-3
                                    gap-8
                                "
                            >

                                {

                                    filteredProjects.map(project => (

                                        <ProjectCard

                                            key={project.id}

                                            project={project}

                                            onView={setSelectedProject}

                                        />

                                    ))

                                }

                            </div>

                        )

                }

                <ProjectModal

                    project={selectedProject}

                    onClose={() => setSelectedProject(null)}

                />

            </div>

        </section>

    );

}

export default Projects;