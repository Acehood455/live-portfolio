// import React from "react";
// import SectionTitle from "../components/SectionTitle";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// const projects = [
//   {
//     id: 1,
//     title: "Portfolio Website",
//     description:
//       "A modern developer portfolio built with Next.js, Tailwind, and Framer Motion.",
//     stack: "Fullstack",
//     video: "/videos/portfolio/test.mp4",
//     gradient: "from-indigo-500 via-purple-500 to-pink-500",
//     tech: ["Next.js", "Tailwind", "Framer Motion"],
//     live: "https://your-portfolio.com",
//     github: "https://github.com/yourname/portfolio",
//   },
//   {
//     id: 2,
//     title: "E-Commerce App",
//     description:
//       "A scalable e-commerce platform with authentication, payments, and admin dashboard.",
//     stack: "MERN",
//     video: "/videos/portfolio/test.mp4",
//     gradient: "from-green-400 via-emerald-500 to-teal-600",
//     tech: ["React", "Node.js", "MongoDB", "Stripe"],
//     live: "https://ecommerce-demo.com",
//     github: "https://github.com/yourname/ecommerce",
//   },
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="relative min-h-screen w-full max-w-[95%] md:max-w-[97%] mx-auto"
//     >
//       <SectionTitle
//         title="My Works"
//         outerColor="cardColor"
//         innerColor="body"
//         rounded="2xl"
//         hasRoundDown={false}
//       />
//       <Swiper
//         modules={[Navigation, Pagination]}
//         navigation
//         pagination={{ clickable: true }}
//         className="mt-2 md:mt-5 bg-cardColor md:max-w-[95%] h-[85vh] rounded-2xl mx-auto "
//         spaceBetween={40}
//         slidesPerView={1}
//     >
//     {projects.map((project) => (
//         <SwiperSlide key={project.id} className="!h-full flex items-center justify-center">
//         {/* Gradient Card */}
//         <div
//             className={`m-4 h-[90%] bg-gradient-to-br ${project.gradient} rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row gap-6`}
//         >
//             {/* Video container */}
//             <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden rounded-xl">
//             <span className="absolute uppercase top-2 left-2 bg-text/50 border border-text text-xs px-3 py-1 rounded-full text-background z-10">
//                 {project.stack}
//             </span>
//             <video
//                 src={project.video}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="w-full h-full object-cover rounded-xl"
//             />
//             </div>

//             {/* Content container */}
//             <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col px-3 gap-1 md:gap-4 text-background justify-center overflow-y-auto">
//               <h3 className="text-2xl font-bold">{project.title}</h3>
//               <p className="text-sm md:text-base opacity-90">
//                   {project.description}
//               </p>

//               {/* Tech badges */}
//               <div className="flex flex-wrap gap-2">
//                   {project.tech.map((t, i) => (
//                   <span
//                       key={i}
//                       className="bg-white/20 border border-white text-xs px-3 py-1 rounded-full"
//                   >
//                       {t}
//                   </span>
//                   ))}
//               </div>

//               {/* Buttons */}
//               <div className="flex gap-4 mt-2">
//                   <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-1 px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base rounded-lg bg-background text-text font-bold hover:scale-95 
//                     hover:translate-y-0.5 duration-300 hover:shadow-[0px_4px_16px_0_rgba(13,11,15,.90)] transition"
//                   >
//                   Live Demo <FaExternalLinkAlt size={14} />
//                   </a>
                  
//                   <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-1 px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base rounded-lg border border-cardColor font-bold hover:scale-95 
//                     hover:translate-y-0.5 duration-300 text-background hover:bg-cardColor hover:text-text hover:shadow-[0px_4px_16px_0_rgba(13,11,15,.90)] transition"
//                   >
//                   Repo <FaGithub size={16} />
//                   </a>
//               </div>
//             </div>
//         </div>
//         </SwiperSlide>
//     ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Projects;

// src/sections/Projects.jsx
import React from "react";
import SectionTitle from "../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiStripe, SiFramer } from "react-icons/si";

const techConfig = {
  "React": { icon: <FaReact className="text-cyan-500" />, color: "border-cyan-500 bg-cyan-300/30" },
  "Next.js": { icon: <SiNextdotjs className="text-gray-900" />, color: "border-gray-900 bg-gray-700/50" },
  "Tailwind": { icon: <SiTailwindcss className="text-sky-500" />, color: "border-sky-500 bg-sky-300/30" },
  "Framer Motion": { icon: <SiFramer className="text-pink-500" />, color: "border-pink-500 bg-pink-300/30" },
  "Node.js": { icon: <FaNodeJs className="text-green-600" />, color: "border-green-600 bg-green-400/30" },
  "MongoDB": { icon: <SiMongodb className="text-emerald-600" />, color: "border-emerald-600 bg-emerald-400/30" },
  "Stripe": { icon: <SiStripe className="text-indigo-600" />, color: "border-indigo-600 bg-indigo-600/50" },
};



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
        className="mt-2 md:mt-5 bg-cardColor md:max-w-[95%] h-[85vh] rounded-2xl mx-auto"
        spaceBetween={40}
        slidesPerView={1}
      >
        {projects.map((project) => (
          <SwiperSlide
            key={project.id}
            className="!h-full flex items-center justify-center"
          >
            {/* Gradient Card */}
            <div
              className={`m-4 h-[90%] bg-gradient-to-br ${project.gradient} rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row gap-6`}
            >
              {/* Video container */}
              <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden rounded-xl">
                <span className="absolute uppercase top-2 left-2 bg-text/70 border border-text text-xs px-3 py-1 rounded-full text-background z-10">
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
              <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col px-3 gap-1 md:gap-4 text-background justify-center overflow-y-auto">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-sm md:text-base opacity-90">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => {
                    const conf = techConfig[t] || {
                      icon: null,
                      color: "text-white border-white bg-white/10",
                    };
                    return (
                      <span
                        key={i}
                        className={`inline-flex items-center gap-2 text-xs px-3 py-1 text-background rounded-full border ${conf.color}`}
                      >
                        {conf.icon} {t}
                      </span>
                    );
                  })}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base rounded-lg bg-background text-text font-bold hover:scale-95 
                      hover:translate-y-0.5 duration-300 hover:shadow-[0px_4px_16px_0_rgba(13,11,15,.90)] transition"
                  >
                    Live Demo <FaExternalLinkAlt size={14} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base rounded-lg border border-cardColor font-bold hover:scale-95 
                      hover:translate-y-0.5 duration-300 text-background hover:bg-cardColor hover:text-text hover:shadow-[0px_4px_16px_0_rgba(13,11,15,.90)] transition"
                  >
                    Repo <FaGithub size={16} />
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
