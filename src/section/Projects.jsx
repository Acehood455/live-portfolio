import React, { useRef, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight, FaPlay  } from "react-icons/fa";
import { projects, techConfig } from "../constants";
import { motion } from "motion/react";
import { childVariants, containerVariant, staggerchildVariantsContainer } from "../constants/animations/variants";


const Projects = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  
  return (
    <section
      id="projects"
      className="relative w-full max-w-[95%] md:max-w-[97%] mx-auto"
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
        className="relative mt-2 md:mt-5 picture bg-cardColor md:max-w-[95%] h-[84vh] md:h-[75vh] rounded-2xl mx-auto"
        spaceBetween={40}
        slidesPerView={1}
      >
        {projects.map((project) => (
          <SwiperSlide
            key={project.id}
            className="!h-full flex items-center justify-center"
          >
            {/* Gradient Card */}
            <motion.div
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} 
              className={`m-4 h-[85%] md:h-[85%] z-20 bg-gradient-to-br ${project.gradient} rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row gap-2`}
            >
              {/* Video container */}
              <motion.div
                variants={childVariants}
                className="relative w-full  md:w-[90%] aspect-video overflow-hidden rounded-xl bg-black"
              >

                <span
                  className="
                    absolute md:top-4 top-1 md:left-2 left-1 z-20
                    uppercase
                    text-[10px] md:text-xs
                    font-semibold
                    px-2 md:px-3
                    py-0.5 md:py-1
                    rounded-full
                    bg-background/60 md:bg-text/60 backdrop-blur
                    text-text md:text-background
                    border border-background/20 md:border-text/30
                  "
                >
                  {project.stack}
                </span>
                {/* Play button (mobile-first) */}
                  {!isPlaying && (
                    <button
                      aria-label="Play video"
                      onClick={() => {
                        videoRef.current?.play();
                        setIsPlaying(true);
                      }}
                      className="
                        absolute inset-0 z-20
                        flex items-center justify-center
                      "
                    >
                      <span className="
                        flex items-center justify-center
                        md:w-9 w-7 md:h-9 h-7
                        rounded-full
                        bg-black/60 backdrop-blur
                        border border-white/20
                        hover:scale-95 transition
                      ">
                        <FaPlay className="text-white text-xl ml-1" />
                      </span>
                    </button>
                  )}
                <video
                  src={project.video}
                  poster={`images/thumbnails/${project.id}.jpg`}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                />


              </motion.div>

              {/* Content container */}
              <motion.div 
                variants={staggerchildVariantsContainer}
                className="w-full md:w-1/2 md:h-full flex flex-col px-3 gap-1 md:gap-4 text-background justify-center overflow-y-auto"
              >
                <motion.h3 variants={childVariants} className="text-2xl font-bold">{project.title}</motion.h3>
                <motion.p variants={childVariants} className="text-sm font-normal md:text-base opacity-90">{project.description}</motion.p>

                {/* Tech badges */}
                <motion.div 
                  variants={childVariants} 
                  className="flex flex-wrap gap-2"
                >
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
                </motion.div>

                {/* Buttons */}
                <motion.div variants={childVariants} className="flex gap-4 mt-2">
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
                    <span className="max-sm:hidden">Live</span> Demo <FaExternalLinkAlt size={14} />
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
                </motion.div>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}

        {/* Navigation arrows (bottom-right) */}
        <div className="absolute bottom-0 rounded-tl-2xl bg-body right-0 px-4 py-1 flex items-center gap-3 z-30">
          {/* Corner masks - top right and bottom left */}
          <div className="absolute -top-2 right-0 w-2 h-2 bg-body z-0"/>
          <div className="absolute -top-2 right-0 w-2 h-2 bg-cardColor rounded-br-2xl z-0">
            <div className="pictureElements z-0" />
          </div>

          <div className="absolute bottom-0 -left-2 w-2 h-2 bg-body"/>
          <div className="absolute bottom-0 -left-2 w-2 h-2 bg-cardColor rounded-br-2xl">
            <div className="pictureElements" />
          </div>

          <button
            className="custom-prev inline-flex items-center justify-center 
                      size-8 md:size-[clamp(2.6rem,2.6vw+1.5rem,7rem)] 
                      rounded-full border border-cardColor bg-background text-text 
                      hover:scale-95 duration-300 transition
                      disabled:opacity-60 disabled:scale-90 disabled:cursor-not-allowed"
          >
            <FaArrowLeft className='size-4 md:size-[clamp(1.3rem,1.3vw+0.75rem,3.5rem)]'/>
          </button>
          <button
            className="custom-next inline-flex items-center justify-center 
                      size-8 md:size-[clamp(2.6rem,2.6vw+1.5rem,7rem)]
                      rounded-full border border-cardColor bg-background text-text 
                      hover:scale-95 duration-300 transition
                      disabled:opacity-60 disabled:scale-90 disabled:cursor-not-allowed"
          >
            <FaArrowRight className='size-4 md:size-[clamp(1.3rem,1.3vw+0.75rem,3.5rem)]'/>
          </button>
        </div>
      </Swiper>

    </section>
  );
};

export default Projects;