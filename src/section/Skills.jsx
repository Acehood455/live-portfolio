import React from "react"
import SectionTitle from '../components/SectionTitle'
import { skills } from "../constants"
import { CardBody, CardContainer, CardItem } from "../components/3dCard"


const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-cardColor min-h-screen w-full max-w-[95%] md:max-w-[97%] mx-auto"
    >
      <SectionTitle
        title="My Skills"
        outerColor="body"
        innerColor="cardColor"
        rounded="none"
        hasRoundDown={true}
      />

      {/* Intro */}
      <div className="flex justify-center pt-5 md:pt-8">
        <div className="text-text text-center max-w-[95%] md:max-w-[60%]">
          <p className="font-semibold">
            Here are some of the skills and tools I&apos;m more familiar with. PS. I added a little explanation for the non-techies.
          </p>
        </div>
      </div>

      {/* Masonry Grid */}
      <div
        className="text-text relative mt-3 md:mt-10 mx-auto 
                  max-w-[97%] md:max-w-[80%]  
                  columns-2 sm:columns-3 lg:columns-4 xl:columns-5 
                  gap-4 px-4 md:px-8 overflow-visible group"
      >
        {skills.map((skill) => (
          <CardContainer
            key={skill.id}
            className="break-inside-avoid mb-5 inline-block w-full"
          >
            <CardBody
              className="relative py-4 px-3 rounded-2xl bg-cardColor2
                        shadow-md hover:shadow-xl transition-shadow
                        w-full h-full group/card"
            >
              {/* Shimmer sweep */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <span className="absolute inset-0 
                                before:content-[''] before:absolute before:inset-0 
                                before:bg-gradient-to-r before:from-transparent before:via-purple4/10 before:to-transparent 
                                before:translate-x-[-100%] before:skew-x-12
                                before:transition-transform before:duration-700 
                                group-hover/card:before:translate-x-[100%]" 
                />
              </div>
              {/* Decorative background logo */}
              <div className="absolute right-0 bottom-0 w-1/2 h-1/2 overflow-hidden rounded-br-2xl">
                <img
                  src={skill.img}
                  alt=""
                  className="absolute -right-6 -bottom-6 w-20 h-20 opacity-15 object-contain"
                />
              </div>

              {/* Folded corner + Skill icon */}
              <CardItem translateZ={60} className="inline-block -ml-4 -mt-8">
                <div className="rounded-br-2xl relative pr-1 pb-1">
                  {/* Corner pseudo elements */}
                  {/* <span className="pointer-events-none absolute inset-0 
                                    before:content-[''] before:absolute before:top-4 before:-right-3 
                                    before:w-3 before:h-3 
                                    after:content-[''] after:absolute after:top-4 after:-right-3 
                                    after:w-3 after:h-3 after:bg-cardColor2 after:rounded-tl-2xl" />

                  <span className="pointer-events-none absolute inset-0 
                                    before:content-[''] before:absolute before:-bottom-3 before:left-1 
                                    before:w-3 before:h-3 
                                    after:content-[''] after:absolute after:-bottom-3 after:left-1 
                                    after:w-3 after:h-3 after:bg-cardColor2 after:rounded-tl-2xl" /> */}

                  {/* Blob glow */}
                  <div className="absolute md:w-20 md:h-20 top-10 left-5 md:top-8 md:left-8 
                                  w-24 h-24 z-10 rounded-full blur-xl md:blur-2xl opacity-40 md:opacity-50">
                    <div
                      className={`md:w-20 md:h-20 w-10 h-10 rounded-full z-20 
                                  md:blur-xl opacity-50 ${skill.color}`}
                    />
                  </div>

                  {/* Icon floating in 3D */}
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="
                      w-12 h-12 object-contain bg-cardColor2 p-1 rounded-2xl relative z-30
                      transition-shadow duration-300
                      shadow-[3px_3px_8px_rgba(223,153,255,0.15)]
                      group-hover/card:shadow-[4px_4px_10px_rgba(223,153,255,0.25)]
                    "
                  />
                </div>
              </CardItem>


              {/* Title floating */}
              <CardItem translateZ="40">
                <h3 className="text-sm md:text-lg font-semibold 
                              bg-gradient-to-r from-gold2 via-purple4 to-accent 
                              bg-clip-text text-transparent mt-3">
                  {skill.name}
                </h3>
              </CardItem>

              {/* Description floating */}
              <CardItem translateZ="30" as="p" className="text-xs md:text-sm font-normal text-muted">
                {skill.description}
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  )
}

export default Skills