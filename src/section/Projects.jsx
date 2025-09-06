import React from "react";
import SectionTitle from "../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern developer portfolio built with Next.js, Tailwind, and Framer Motion.",
    stack: "Fullstack",
    video: "/videos/portfolio/test.mp4",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    live: "https://your-portfolio.com",
    github: "https://github.com/yourname/portfolio",
  },
  {
    id: 2,
    title: "E-Commerce App",
    description:
      "A scalable e-commerce platform with authentication, payments, and admin dashboard.",
    stack: "MERN",
    video: "/videos/portfolio/test.mp4",
    gradient: "from-green-400 via-emerald-500 to-teal-600",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    live: "https://ecommerce-demo.com",
    github: "https://github.com/yourname/ecommerce",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full max-w-[95%] md:max-w-[97%] mx-auto"
    >
      <SectionTitle
        title="My Works"
        outerColor="cardColor"
        innerColor="body"
        rounded="2xl"
        hasRoundDown={false}
      />
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="mt-2 md:mt-5 bg-cardColor md:max-w-[95%] h-[85vh] rounded-2xl mx-auto "
        spaceBetween={40}
        slidesPerView={1}
    >
    {projects.map((project) => (
        <SwiperSlide key={project.id} className="!h-full flex items-center justify-center">
        {/* Gradient Card */}
        <div
            className={`m-4 h-[90%] bg-gradient-to-br ${project.gradient} rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row gap-6`}
        >
            {/* Video container */}
            <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden rounded-xl">
            <span className="absolute uppercase top-2 left-2 bg-black/70 text-xs px-3 py-1 rounded-full text-white z-10">
                {project.stack}
            </span>
            <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-xl"
            />
            </div>

            {/* Content container */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col gap-4 text-white justify-center overflow-y-auto">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="text-sm md:text-base opacity-90">
                {project.description}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                <span
                    key={i}
                    className="bg-white/20 text-xs px-3 py-1 rounded-full"
                >
                    {t}
                </span>
                ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-2">
                <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl font-semibold hover:bg-gray-200 transition"
                >
                Live Demo <FaExternalLinkAlt size={14} />
                </a>
                <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white px-4 py-2 rounded-xl font-semibold hover:bg-white hover:text-black transition"
                >
                GitHub <FaGithub size={16} />
                </a>
            </div>
            </div>
        </div>
        </SwiperSlide>
    ))}
    </Swiper>
    </section>
  );
};

export default Projects;