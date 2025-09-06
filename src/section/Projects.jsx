// import React from 'react'
// import SectionTitle from '../components/SectionTitle'

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

//       <div className="mx-auto w-full mt-3 p-6 h-full">
//         <div className="w-full bg-black text-text">test</div>
//       </div>
//     </section>
//   )
// }

// export default Projects


// // src/sections/Projects.jsx
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
//     video: "/videos/portfolio.mp4",
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
//     video: "/videos/ecommerce.mp4",
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
//         className="mt-10 p-10 bg-cardColor"
//         spaceBetween={40}
//         slidesPerView={1}
//       >
//         {projects.map((project) => (
//           <SwiperSlide key={project.id}>
//             <div
//               className={`p-6 rounded-2xl shadow-xl bg-gradient-to-r ${project.gradient} text-white flex flex-col gap-6`}
//             >
//               {/* Video with stack badge
//               <div className="relative w-full aspect-video overflow-hidden rounded-xl">
//                 <span className="absolute top-2 left-2 bg-black/70 text-xs px-3 py-1 rounded-full">
//                   {project.stack}
//                 </span>
//                 <video
//                   src={project.video}
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className="w-full h-full object-cover rounded-xl"
//                 />
//               </div> */}

//               {/* Title + description */}
//               <div>
//                 <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
//                 <p className="text-sm md:text-base opacity-90">
//                   {project.description}
//                 </p>
//               </div>

//               {/* Tech badges */}
//               <div className="flex flex-wrap gap-2">
//                 {project.tech.map((t, i) => (
//                   <span
//                     key={i}
//                     className="bg-white/20 text-xs px-3 py-1 rounded-full"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>

//               {/* Buttons */}
//               <div className="flex gap-4">
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl font-semibold hover:bg-gray-200 transition"
//                 >
//                   Live Demo <FaExternalLinkAlt size={14} />
//                 </a>
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 border border-white px-4 py-2 rounded-xl font-semibold hover:bg-white hover:text-black transition"
//                 >
//                   GitHub <FaGithub size={16} />
//                 </a>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
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
    video: "/videos/ecommerce.mp4",
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
        className="mt-5 bg-cardColor md:max-w-[95%] h-[80vh] rounded-2xl mx-auto"
        spaceBetween={40}
        slidesPerView={1}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className={`bg-gradient-to-br ${project.gradient} rounded-2xl shadow-xl m-6 p-2 md:p-4 flex flex-col md:flex-row gap-8 items-center`}>
              {/* Video on the left */}
              <div className="relative w-full md:w-1/2 aspect-video overflow-hidden rounded-xl">
                <span className="absolute top-1 left-1 bg-black/70 text-xs px-3 py-1 rounded-full text-white z-10">
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

              {/* Content on the right */}
              <div className="flex-1 flex flex-col gap-4 text-white">
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