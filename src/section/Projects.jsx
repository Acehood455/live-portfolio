import React from "react";
import SectionTitle from "../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { projects, techConfig } from "../constants";


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
        className="relative mt-2 md:mt-5 bg-cardColor md:max-w-[95%] h-[84vh] md:h-[88vh] rounded-2xl mx-auto"
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
              className={`m-4 h-[85%] md:h-[88%] bg-gradient-to-br ${project.gradient} rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row gap-6`}
            >
              {/* Video container */}
              <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden rounded-xl">
                <span className="absolute uppercase top-2 left-2 border border-gray-400 bg-gray-200/50 text-xs md:text-sm font-semibold px-3 py-1 rounded-full text-background z-10">
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
                <p className="text-sm font-normal md:text-base opacity-90">{project.description}</p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => {
                        const { icon: Icon, badge, iconColor } = techConfig[tech] || {
                      icon: null,
                      color: "border-gray-400 bg-gray-200/50 text-background",
                    };
                    return (
                      <span
                        key={tech}
                        className={`inline-flex items-center gap-2 text-xs md:text-sm font-medium px-3 py-1 text-background rounded-full border ${badge}`}
                      >
                        <Icon className={`size-4 ${iconColor}`} />
                        <span className='text-background'>{tech}</span>
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
                    <div className="relative flex items-center justify-center">
                      {/* Ripple glow */}
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-lime-300 opacity-75 animate-ripple"></span>
                      </span>

                      {/* Solid pulsing dot */}
                      <span className="w-2 h-2 bg-lime-500 rounded-full animate-pulseDot"></span>
                    </div>
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
        <div className="absolute bottom-0 rounded-tl-2xl bg-body right-0 px-4 py-1 flex items-center gap-3 z-50">
          {/* Corner masks - top right and bottom left */}
          <span className="pointer-events-none absolute inset-0 
                                    before:content-[''] before:absolute before:-top-3 before:right-0 before:w-3 before:h-3 before:bg-body
                                    after:content-[''] after:absolute after:-top-3 after:right-0 after:w-3 after:h-3 after:bg-cardColor after:rounded-br-2xl" />

          <span className="pointer-events-none absolute inset-0 
                                    before:content-[''] before:absolute before:bottom-0 before:-left-3 before:w-3 before:h-3 before:bg-body
                                    after:content-[''] after:absolute after:bottom-0 after:-left-3 after:w-3 after:h-3 after:bg-cardColor after:rounded-br-2xl" />
                  
          <button
            className="custom-prev inline-flex items-center justify-center w-10 h-10 rounded-full border border-cardColor bg-background text-text 
                      hover:scale-95 duration-300 transition
                      disabled:opacity-60 disabled:scale-90 disabled:cursor-not-allowed"
          >
            <FaArrowLeft className='size-5'/>
          </button>
          <button
            className="custom-next inline-flex items-center justify-center w-10 h-10 rounded-full border border-cardColor bg-background text-text 
                      hover:scale-95 duration-300 transition
                      disabled:opacity-60 disabled:scale-90 disabled:cursor-not-allowed"
          >
            <FaArrowRight className='size-5'/>
          </button>
        </div>
      </Swiper>

    </section>
  );
};

export default Projects;