import React, { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { certificates } from '../constants'
import { PiPaperclipHorizontalBold } from "react-icons/pi";
import { motion } from "motion/react"
import { fadeInUp } from '../constants/animations/variants';

const About = () => {
  const [pos, setPos] = useState({ x: -999, y: -99 });

  return (


    <section id="about" className="relative min-h-screen w-full max-w-[95%] md:max-w-[97%] mx-auto">
      <SectionTitle title='About Me' outerColor='cardColor' innerColor='body' rounded='2xl' hasRoundDown={false} />
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }} className="py-5 md:py-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
          {/* About Me Text */}
          <div
            className="relative md:col-span-4 h-full rounded-2xl shadow-[-4px_-4px_8px_rgba(223,153,255,0.3)]"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
            onMouseLeave={() => setPos({ x: -999, y: -999 })}
          >
            {/* Back card with alternate text */}
            <div className="absolute  inset-0 bg-purple rounded-3xl shadow p-5 text-background">
              <p className="mb-4 [text-indent:1.5rem]">
                 <span className="font-bold">👀 My inner thoughts. </span>
              </p>
              <p className="mb-4">
                Omo life hard no be play, see as person dey try hustle but it come dey be like say hustle go send person
                go village last last.
              </p>
              <p className="mb-4">
                Then one daughter of Eve go dey one side de wait like say dem no get papa.
              </p>
              <p>Anyway sha all that one for front na part of whining, I hope say my clients go pay quick before this my sub finish.</p>
            </div>

            {/* Front card with mask cut-out */}
            <div
              className="relative picture bg-cardColor rounded-2xl shadow flex flex-col p-5 h-full text-text"
              style={{
                WebkitMaskImage: `radial-gradient( circle 70px at ${pos.x}px ${pos.y}px, transparent 99%, black 100%)`,
                WebkitMaskRepeat: "no-repeat",
                maskImage: `radial-gradient( circle 70px at ${pos.x}px ${pos.y}px, transparent 99%, black 100%)`,
                maskRepeat: "no-repeat",
              }}
            >
            <div className="absolute bottom-2 left-3">
                <div className="bg-yellow-300 text-xs font-semibold md:text-sm text-center opacity-20 text-gray-800 px-3 py-1.5 rounded-tl-xl rounded-br-xl shadow-md rotate-[-7deg]">
                  ✨ I tinker with electronics in my spare time. 
                  Constructing a power bank here, fixing up a pressing iron there. {';)'}
                </div>
              </div>
              
              <div className="md:w-32 md:h-32 w-20 h-20 absolute -left-10 -top-10 bg-gradient-to-r from-purple to-gold rounded-full blur-xl md:blur-2xl opacity-40 md:opacity-40" />
              <div className="md:w-32 md:h-32 w-20 h-20 absolute -right-10 -bottom-10 bg-gradient-to-r from-gold to-purple rounded-full blur-xl md:blur-2xl opacity-40 md:opacity-20" />

              <motion.div
                className="absolute text-gold2 -top-1 -right-2 rotate-90 w-16 h-16 md:h-24 md:w-24 opacity-40"
                animate={{ rotate: [88, 90, 92, 90, 88] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <PiPaperclipHorizontalBold className="w-full h-full" />
              </motion.div>


              <div 
                className="z-10"
              >
                <motion.p custom={0} variants={fadeInUp} className="mb-4 [text-indent:1.5rem] z-10">
                  My name is {' '}
                  <span className="font-semibold bg-gradient-to-r from-purple2 via-gold2 to-accent bg-clip-text text-transparent">
                    Ace Taiwo
                  </span>
                  , but I'm sure you've figured that out by now. 
                  I am a self-taught full-stack developer who enjoys coding. I love building clean, responsive, 
                  and user-friendly applications; what real developer doesn't?
                </motion.p>
                <motion.p custom={1} variants={fadeInUp} className="mb-4 z-10">
                  I started my coding journey by exploring online resources and seemed to gain immense satisfaction with
                  turning ideas into real projects.
                </motion.p>
                <motion.p custom={2} variants={fadeInUp} className="mb-4 z-10">
                  So far 2 clients have trusted me with connecting them with a wider world and through these 
                  I've gained hands-on experience in creating layouts, solving real world challenges, 
                  and working with popular libraries.
                </motion.p>
                <motion.p custom={3} variants={fadeInUp} className='z-10'>
                  These are the certifications I have accrued on my journey so far.
                </motion.p>
              </div>
            </div>
          </div>

          {/* Certificates Masonry */}
          <div
            className="md:col-span-7"
          >
            <div className="columns-2 md:columns-3 gap-2 space-y-4">
              {certificates.map((cert, i) => (
                <motion.div 
                  key={cert.id}
                  custom={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }} 
                  className="break-inside-avoid"
                >
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative picture bg-cardColor rounded-2xl transition-all duration-300 
                              hover:scale-[1.02] overflow-hidden flex flex-col p-2
                              shadow-[-3px_-3px_8px_rgba(223,153,255,0.2)] hover:shadow-[-4px_-4px_10px_rgba(223,153,255,0.25)]"
                  >
                    {/* Image with zoom on hover */}
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={cert.img}
                        alt={`${cert.title} Certificate`}
                        className="w-full transition-transform duration-500 group-hover:scale-105"
                      />

                      
                    </div>

                    {/* Title */}
                    <h4 className="text-xs md:text-lg text-text font-semibold pb-6 mt-2 z-10">
                      {cert.title}
                    </h4>

                    {/* View link */}
                    <div className="absolute bottom-0 right-0 text-sm bg-body px-2 py-1 
                                  rounded-tl-2xl rounded-br-2xl text-gold2 shadow transition-transform duration-300">
                      <span className="relative font-bold z-10 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        View →
                      </span>

                      {/* Corner masks - top right and bottom left */}
                      <div className="absolute -top-3 right-0 w-3 h-3 bg-body"/>
                      <div className="absolute -top-3 right-0 w-3 h-3 bg-cardColor rounded-br-2xl">
                        <div className="pictureElements" />
                      </div>

                      <div className="absolute bottom-0 -left-3 w-3 h-3 bg-body"/>
                      <div className="absolute bottom-0 -left-3 w-3 h-3 bg-cardColor rounded-br-2xl">
                        <div className="pictureElements" />
                      </div>
                    </div>

                    {/* Shimmer sweep */}
                    <span className="pointer-events-none absolute inset-0 
                        before:content-[''] before:absolute before:inset-0 
                        before:bg-gradient-to-r before:from-transparent before:via-purple4/10 before:to-transparent 
                        before:translate-x-[-100%] before:skew-x-12
                        before:transition-transform before:duration-700 group-hover:before:translate-x-[100%]" 
                    />
                  </a>
                </motion.div>

              ))}
            </div>
          </div>
          
        </div>
      </motion.div>
    </section>
  )
}

export default About

