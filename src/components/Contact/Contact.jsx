import { useState } from "react";

import {
    FaGithub,
    FaLinkedin
} from "react-icons/fa";

import API from "../../api/api";
import useFetch from "../../hooks/useFetch";

import Spinner from "../UI/Spinner";
import ErrorMessage from "../UI/ErrorMessage";
import Button from "../UI/Button";

import ContactCard from "./ContactCard";

function Contact() {

    const {
        data,
        loading,
        error
    } = useFetch(API.contact);

    const [form, setForm] = useState({

        name: "",

        email: "",

        message: ""

    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (

            !form.name ||

            !form.email ||

            !form.message

        ) {

            alert("Please fill all fields.");

            return;

        }

        setSubmitted(true);

        setForm({

            name: "",

            email: "",

            message: ""

        });

    };

    if (loading) return <Spinner />;

    if (error) return <ErrorMessage message={error} />;

    return (

        <section
            id="contact"
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
                        md:text-5xl
                        font-bold
                        text-center
                        mb-14
                    "
                >

                    Contact Me

                </h2>

                <div
                    className="
                        grid
                        lg:grid-cols-2
                        gap-12
                    "
                >

                    {/* Contact Information */}

                    <div className="space-y-6">

                        <ContactCard

                            type="email"

                            title="Email"

                            value={data.email}

                        />

                        <ContactCard

                            type="phone"

                            title="Phone"

                            value={data.phone}

                        />

                        <ContactCard

                            type="address"

                            title="Address"

                            value={data.address}

                        />

                        <div
                            className="
                                flex
                                gap-5
                                pt-4
                            "
                        >

                            <a
                                href={data.github}
                                target="_blank"
                                rel="noreferrer"
                                className="
                                    w-14
                                    h-14

                                    rounded-full

                                    bg-[rgb(var(--card))]

                                    border
                                    border-[rgb(var(--border-base))]/20

                                    flex
                                    items-center
                                    justify-center

                                    text-2xl

                                    text-[rgb(var(--text))]

                                    hover:bg-[#7C6AEF]
                                    hover:text-white

                                    hover:-translate-y-1

                                    transition-all
                                    duration-300
                                "
                            >

                                <FaGithub />

                            </a>

                            <a
                                href={data.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="
                                    w-14
                                    h-14

                                    rounded-full

                                    bg-[rgb(var(--card))]

                                    border
                                    border-[rgb(var(--border-base))]/20

                                    flex
                                    items-center
                                    justify-center

                                    text-2xl

                                    text-[rgb(var(--text))]

                                    hover:bg-[#0A66C2]
                                    hover:text-white

                                    hover:-translate-y-1

                                    transition-all
                                    duration-300
                                "
                            >

                                <FaLinkedin />

                            </a>

                        </div>

                    </div>

                    {/* Contact Form */}

                    <form

                        onSubmit={handleSubmit}

                        className="
                            bg-[rgb(var(--card))]/85

                            backdrop-blur-xl

                            border
                            border-[rgb(var(--border-base))]/20

                            rounded-3xl

                            p-8

                            shadow-xl

                            space-y-6
                        "

                    >

                        <input

                            type="text"

                            name="name"

                            placeholder="Your Name"

                            value={form.name}

                            onChange={handleChange}

                            className="
                                w-full

                                p-4

                                rounded-xl

                                bg-[rgb(var(--surface))]

                                border
                                border-[rgb(var(--border-base))]

                                text-[rgb(var(--text))]

                                placeholder:text-[rgb(var(--text-muted))]

                                focus:border-[#7C6AEF]

                                focus:ring-2
                                focus:ring-[#7C6AEF]/20

                                outline-none

                                transition-all
                                duration-300
                            "

                        />

                        <input

                            type="email"

                            name="email"

                            placeholder="Email Address"

                            value={form.email}

                            onChange={handleChange}

                            className="
                                w-full

                                p-4

                                rounded-xl

                                bg-[rgb(var(--surface))]

                                border
                                border-[rgb(var(--border-base))]

                                text-[rgb(var(--text))]

                                placeholder:text-[rgb(var(--text-muted))]

                                focus:border-[#7C6AEF]

                                focus:ring-2
                                focus:ring-[#7C6AEF]/20

                                outline-none

                                transition-all
                                duration-300
                            "

                        />

                        <textarea

                            rows="6"

                            name="message"

                            placeholder="Your Message"

                            value={form.message}

                            onChange={handleChange}

                            className="
                                w-full

                                p-4

                                rounded-xl

                                resize-none

                                bg-[rgb(var(--surface))]

                                border
                                border-[rgb(var(--border-base))]

                                text-[rgb(var(--text))]

                                placeholder:text-[rgb(var(--text-muted))]

                                focus:border-[#7C6AEF]

                                focus:ring-2
                                focus:ring-[#7C6AEF]/20

                                outline-none

                                transition-all
                                duration-300
                            "

                        />

                        <Button
                            type="submit"
                            className="w-full"
                        >

                            Send Message

                        </Button>

                        {

                            submitted && (

                                <div
                                    className="
                                        p-4

                                        rounded-xl

                                        bg-green-500/10

                                        border

                                        border-green-500/20

                                        text-green-500

                                        text-center

                                        font-medium
                                    "
                                >

                                    ✅ Message sent successfully!

                                </div>

                            )

                        }

                    </form>

                </div>

            </div>

        </section>

    );

}

export default Contact;