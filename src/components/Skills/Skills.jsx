import API from "../../api/api"
import useFetch from "../../hooks/useFetch"

import SkillCard from "./SkillCard"

import Spinner from "../UI/Spinner"
import Skeleton from "../UI/Skeleton"
import ErrorMessage from "../UI/ErrorMessage"

function Skills() {

    const {

        data: skills,

        loading,

        error

    } = useFetch(API.skills)

    if (loading) {

        return (

           <section
id="skills"
className="
py-24
px-6
bg-[rgb(var(--bg))]
text-[rgb(var(--text))]
transition-colors
duration-300
"
>

                <div className="max-w-6xl mx-auto">

                    <h2 className="text-4xl font-bold text-center mb-12">

                        Skills

                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {[1,2,3,4,5,6].map(item => (

                            <Skeleton
                                key={item}
                                className="h-32"
                            />

                        ))}

                    </div>

                </div>

            </section>

        )

    }

    if (error)

        return (

            <ErrorMessage
                message={error}
            />

        )

    return (

        <section
            id="skills"
            className="
                py-24
                px-6
            "
        >

            <div className="max-w-6xl mx-auto">

                <h2
className="
text-4xl
font-bold
text-center
mb-14
text-[rgb(var(--text))]
"
>
                    Skills

                </h2>

                <div
                    className="
                        grid
                        sm:grid-cols-2
                        lg:grid-cols-3
                        gap-8
                    "
                >

                    {skills.map(skill => (

                        <SkillCard
                            key={skill.id}
                            skill={skill}
                        />

                    ))}

                </div>

            </div>

        </section>

    )

}

export default Skills