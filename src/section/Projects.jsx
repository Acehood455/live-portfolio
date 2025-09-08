import React from "react";
import SectionTitle from "../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaArrowLeft, FaArrowRight } from "react-icons/fa";
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
    video: "/videos/test.mp4",
    gradient: "from-green-400 via-emerald-500 to-teal-600",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    live: "https://ecommerce-demo.com",
    github: "https://github.com/yourname/ecommerce",
  },
  {
    id: 3,
    title: "E-Commerce App",
    description:
      "A scalable e-commerce platform with authentication, payments, and admin dashboard.",
    stack: "MERN",
    video: "/videos/test.mp4",
    gradient: "from-green-400 via-yellow-500 to-teal-600",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    live: "https://ecommerce-demo.com",
    github: "https://github.com/yourname/ecommerce",
  },
  {
    id: 4,
    title: "E-Commerce App",
    description:
      "A scalable e-commerce platform with authentication, payments, and admin dashboard.",
    stack: "MERN",
    video: "/videos/test.mp4",
    gradient: "from-red-400 via-emerald-500 to-teal-600",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    live: "https://ecommerce-demo.com",
    github: "https://github.com/yourname/ecommerce",
  },
  {
    id: 5,
    title: "E-Commerce App",
    description:
      "A scalable e-commerce platform with authentication, payments, and admin dashboard.",
    stack: "MERN",
    video: "/videos/test.mp4",
    gradient: "from-blue-400 via-emerald-500 to-teal-600",
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
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="custom-bullet ${className}"></span>`,
        }}
        
        onSlideChange={(swiper) => {
          const bullets = swiper.pagination.bullets;
          bullets.forEach((bullet, index) => {
            if (index <= swiper.activeIndex) {
              bullet.classList.add("seen");
            } else {
              bullet.classList.remove("seen");
            }
          });
        }}
        className="relative mt-2 md:mt-5 bg-cardColor md:max-w-[95%] h-[85vh] rounded-2xl mx-auto"
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
                <span className="absolute uppercase top-2 left-2 border-gray-400 bg-gray-200/50 text-xs px-3 py-1 rounded-full text-background z-10">
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
                <p className="text-sm md:text-base opacity-90">{project.description}</p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => {
                    const conf = techConfig[t] || {
                      icon: null,
                      color: "border-gray-400 bg-gray-200/50 text-background",
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
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base rounded-lg border-2 border-cardColor font-bold hover:scale-95 
                      hover:translate-y-0.5 duration-300 text-text hover:bg-cardColor hover:text-text hover:shadow-[0px_4px_16px_0_rgba(13,11,15,.90)] transition"
                  >
                    Repo <FaGithub size={16} />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation arrows (bottom-right) */}
        <div className="absolute bottom-4 right-4 flex items-center gap-3 z-50">
          <button
            className="custom-prev inline-flex items-center justify-center w-10 h-10 rounded-full border border-cardColor bg-background text-text 
                      hover:scale-95 duration-300 transition
                      disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <FaArrowLeft size={16} />
          </button>
          <button
            className="custom-next inline-flex items-center justify-center w-10 h-10 rounded-full border border-cardColor bg-background text-text 
                      hover:scale-95 duration-300 transition
                      disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <FaArrowRight size={16} />
          </button>
        </div>
      </Swiper>

    </section>
  );
};

export default Projects;
// import React from "react";
// import SectionTitle from "../components/SectionTitle";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from "react-icons/fa";
// import { SiNextdotjs, SiTailwindcss, SiMongodb, SiStripe, SiFramer } from "react-icons/si";

// const techConfig = {
//   "React": { icon: <FaReact className="text-cyan-500" />, color: "border-cyan-500 bg-cyan-300/30" },
//   "Next.js": { icon: <SiNextdotjs className="text-gray-900" />, color: "border-gray-900 bg-gray-700/50" },
//   "Tailwind": { icon: <SiTailwindcss className="text-sky-500" />, color: "border-sky-500 bg-sky-300/30" },
//   "Framer Motion": { icon: <SiFramer className="text-pink-500" />, color: "border-pink-500 bg-pink-300/30" },
//   "Node.js": { icon: <FaNodeJs className="text-green-600" />, color: "border-green-600 bg-green-400/30" },
//   "MongoDB": { icon: <SiMongodb className="text-emerald-600" />, color: "border-emerald-600 bg-emerald-400/30" },
//   "Stripe": { icon: <SiStripe className="text-indigo-600" />, color: "border-indigo-600 bg-indigo-600/50" },
// };

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
//         navigation={{
//           nextEl: ".custom-next",
//           prevEl: ".custom-prev",
//         }}
//         pagination={{
//           el: ".custom-pagination",
//           clickable: true,
//           bulletClass: "custom-bullet",
//           bulletActiveClass: "custom-bullet-active",
//         }}
//         className="relative mt-2 md:mt-5 bg-cardColor md:max-w-[95%] h-[85vh] rounded-2xl mx-auto"
//         spaceBetween={40}
//         slidesPerView={1}
//       >
//         {projects.map((project) => (
//           <SwiperSlide
//             key={project.id}
//             className="!h-full flex items-center justify-center"
//           >
//             {/* Gradient Card */}
//             <div
//               className={`m-4 h-[90%] bg-gradient-to-br ${project.gradient} rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row gap-6`}
//             >
//               {/* Video container */}
//               <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden rounded-xl">
//                 <span className="absolute uppercase top-2 left-2 border-gray-400 bg-gray-200/50  text-xs px-3 py-1 rounded-full text-background z-10">
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
//               </div>

//               {/* Content container */}
//               <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col px-3 gap-1 md:gap-4 text-background justify-center overflow-y-auto">
//                 <h3 className="text-2xl font-bold">{project.title}</h3>
//                 <p className="text-sm md:text-base opacity-90">
//                   {project.description}
//                 </p>

//                 {/* Tech badges */}
//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.map((t, i) => {
//                     const conf = techConfig[t] || {
//                       icon: null,
//                       color: "border-gray-400 bg-gray-200/50 text-background",
//                     };
//                     return (
//                       <span
//                         key={i}
//                         className={`inline-flex items-center gap-2 text-xs px-3 py-1 text-background rounded-full border ${conf.color}`}
//                       >
//                         {conf.icon} {t}
//                       </span>
//                     );
//                   })}
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex gap-4 mt-2">
//                   <a
//                     href={project.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-1 px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base rounded-lg bg-background text-text font-bold hover:scale-95 
//                       hover:translate-y-0.5 duration-300 hover:shadow-[0px_4px_16px_0_rgba(13,11,15,.90)] transition"
//                   >
//                     Live Demo <FaExternalLinkAlt size={14} />
//                   </a>

//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-1 px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base rounded-lg border border-cardColor font-bold hover:scale-95 
//                       hover:translate-y-0.5 duration-300 text-text hover:bg-cardColor hover:text-text hover:shadow-[0px_4px_16px_0_rgba(13,11,15,.90)] transition"
//                   >
//                     Repo <FaGithub size={16} />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}

//         {/* Pagination */}
//         <div className="absolute custom-pagination flex bottom-4 items-center gap-2 z-50"></div>

//         {/* Custom controls */}
//         <div className="absolute bottom-4 right-4 flex items-center gap-4 z-50">
//           {/* Nav buttons */}
//           <button className="custom-prev inline-flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg border border-cardColor font-bold bg-background text-text hover:scale-95 duration-300">
//             Prev
//           </button>
//           <button className="custom-next inline-flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg border border-cardColor font-bold bg-background text-text hover:scale-95 duration-300">
//             Next
//           </button>
//         </div>
//       </Swiper>
//     </section>
//   );
// };

// export default Projects;









// import React from "react";
// import SectionTitle from "../components/SectionTitle";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from "react-icons/fa";
// import { SiNextdotjs, SiTailwindcss, SiMongodb, SiStripe, SiFramer } from "react-icons/si";

// const techConfig = {
//   "React": { icon: <FaReact className="text-cyan-500" />, color: "border-cyan-500 bg-cyan-300/30" },
//   "Next.js": { icon: <SiNextdotjs className="text-gray-900" />, color: "border-gray-900 bg-gray-700/50" },
//   "Tailwind": { icon: <SiTailwindcss className="text-sky-500" />, color: "border-sky-500 bg-sky-300/30" },
//   "Framer Motion": { icon: <SiFramer className="text-pink-500" />, color: "border-pink-500 bg-pink-300/30" },
//   "Node.js": { icon: <FaNodeJs className="text-green-600" />, color: "border-green-600 bg-green-400/30" },
//   "MongoDB": { icon: <SiMongodb className="text-emerald-600" />, color: "border-emerald-600 bg-emerald-400/30" },
//   "Stripe": { icon: <SiStripe className="text-indigo-600" />, color: "border-indigo-600 bg-indigo-600/50" },
// };

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
//         className="mt-2 md:mt-5 bg-cardColor md:max-w-[95%] h-[85vh] rounded-2xl mx-auto"
//         spaceBetween={40}
//         slidesPerView={1}
//       >
//         {projects.map((project) => (
//           <SwiperSlide
//             key={project.id}
//             className="!h-full flex items-center justify-center"
//           >
//             {/* Gradient Card */}
//             <div
//               className={`m-4 h-[90%] bg-gradient-to-br ${project.gradient} rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row gap-6`}
//             >
//               {/* Video container */}
//               <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden rounded-xl">
//                 <span className="absolute uppercase top-2 left-2 border-gray-400 bg-gray-200/50  text-xs px-3 py-1 rounded-full text-background z-10">
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
//               </div>

//               {/* Content container */}
//               <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col px-3 gap-1 md:gap-4 text-background justify-center overflow-y-auto">
//                 <h3 className="text-2xl font-bold">{project.title}</h3>
//                 <p className="text-sm md:text-base opacity-90">
//                   {project.description}
//                 </p>

//                 {/* Tech badges */}
//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.map((t, i) => {
//                     const conf = techConfig[t] || {
//                       icon: null,
//                       color: "border-gray-400 bg-gray-200/50 text-background",
//                     };
//                     return (
//                       <span
//                         key={i}
//                         className={`inline-flex items-center gap-2 text-xs px-3 py-1 text-background rounded-full border ${conf.color}`}
//                       >
//                         {conf.icon} {t}
//                       </span>
//                     );
//                   })}
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex gap-4 mt-2">
//                   <a
//                     href={project.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-1 px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base rounded-lg bg-background text-text font-bold hover:scale-95 
//                       hover:translate-y-0.5 duration-300 hover:shadow-[0px_4px_16px_0_rgba(13,11,15,.90)] transition"
//                   >
//                     Live Demo <FaExternalLinkAlt size={14} />
//                   </a>

//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-1 px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base rounded-lg border border-cardColor font-bold hover:scale-95 
//                       hover:translate-y-0.5 duration-300 text-text hover:bg-cardColor hover:text-text hover:shadow-[0px_4px_16px_0_rgba(13,11,15,.90)] transition"
//                   >
//                     Repo <FaGithub size={16} />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Projects;
