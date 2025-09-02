import React from "react"
import SectionTitle from '../components/SectionTitle'

const skills = [
  {
    id: 1,
    name: "React",
    img: "/images/skills/react.png",
    description: "Building fast and interactive UIs with reusable components.",
  },
  {
    id: 2,
    name: "Node.js",
    img: "/images/skills/node.png",
    description: "Writing scalable backend APIs with JavaScript.",
  },
  {
    id: 3,
    name: "TailwindCSS",
    img: "/images/skills/tailwind.png",
    description: "Designing responsive and modern interfaces quickly.",
  },
]

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
            Here are some of the skills and tools I&apos;ve picked up along the
            way, and I&apos;m more familiar with.
          </p>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="text-text relative mt-2 md:mt-10 mx-auto max-w-[95%] md:max-w-[60%] 
      columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-2 md:gap-3 px-4 md:px-8 overflow-visible">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="break-inside-avoid relative mb-6 py-4 px-3 rounded-2xl bg-cardColor2 hover:shadow-lg transition-shadow"
          >
            <div className="absolute right-0 bottom-0 w-1/2 h-1/2 overflow-hidden rounded-br-2xl">
              <img
                src={skill.img}
                alt=""
                className="absolute -right-6 -bottom-6 w-20 h-20 opacity-15 object-contain"
              />
            </div>

            <div className="bg-cardColor rounded-br-2xl relative pr-1 pb-1 inline-block -ml-4 -mt-8 ">
              <span className="pointer-events-none absolute inset-0 
                                    before:content-[''] before:absolute before:top-4 before:-right-3 before:w-3 before:h-3 before:bg-cardColor
                                    after:content-[''] after:absolute after:top-4 after:-right-3 after:w-3 after:h-3 after:bg-cardColor2 after:rounded-tl-2xl" />

              <span className="pointer-events-none absolute inset-0 
                                    before:content-[''] before:absolute before:-bottom-3 before:left-1 before:w-3 before:h-3 before:bg-cardColor
                                    after:content-[''] after:absolute after:-bottom-3 after:left-1 after:w-3 after:h-3 after:bg-cardColor2 after:rounded-tl-2xl" />
                 
              <div className="absolute md:w-20 md:h-20 top-5 left-5 md:top-8 md:left-8 w-24 h-24 z-10 rounded-full blur-xl md:blur-2xl opacity:40 md:opacity-70">
                <div className="md:w-10 md:h-10 w-20 h-20 bg-gold2 rounded-full z-20  md:blur-xl opacity-40 md:opacity-80" />
              </div>

              <img
                src={skill.img}
                alt={skill.name}
                className="w-12 h-12 object-contain bg-cardColor2 p-1 z-30 left-0 rounded-2xl shadow-lg"
              />
            </div>

            {/* Content */}
            <h3 className="text-sm md:text-lg font-semibold bg-gradient-to-r from-gold2 via-purple4 to-accent bg-clip-text text-transparent ">
              {skill.name}
            </h3>
            <p className="text-xs md:text-sm font-normal text-muted ">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills





// import React from 'react'
// import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa'
// import { SiNextdotjs, SiTailwindcss, SiPrisma, SiPostgresql } from 'react-icons/si'
// import SectionTitle from '../components/SectionTitle'

// // Example skills array (replace with constants later)
// const skills = [
//   {
//     name: "React",
//     description: "Interactive UIs with components & hooks.",
//     icon: <FaReact className="text-sky-400 text-2xl" />,
//   },
//   {
//     name: "Next.js",
//     description: "Full-stack framework for modern apps. Great for SEO, API routes, and server-side rendering.",
//     icon: <SiNextdotjs className="text-black dark:text-white text-2xl" />,
//   },
//   {
//     name: "Tailwind CSS",
//     description: "Utility-first styling for rapid UI dev. Helps keep styling consistent and responsive.",
//     icon: <SiTailwindcss className="text-sky-500 text-2xl" />,
//   },
//   {
//     name: "Node.js",
//     description: "Backend runtime for scalable apps. Perfect for REST APIs and real-time applications.",
//     icon: <FaNodeJs className="text-green-500 text-2xl" />,
//   },
//   {
//     name: "Prisma",
//     description: "Next-gen ORM for databases. Simplifies complex queries with type safety.",
//     icon: <SiPrisma className="text-indigo-500 text-2xl" />,
//   },
//   {
//     name: "PostgreSQL",
//     description: "Relational database for structured data. Great for analytics and production workloads.",
//     icon: <SiPostgresql className="text-blue-500 text-2xl" />,
//   },
//   {
//     name: "Git & GitHub",
//     description: "Version control & collaboration for modern dev teams.",
//     icon: <FaGithub className="text-gray-800 dark:text-gray-200 text-2xl" />,
//   },
// ]

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="relative bg-cardColor min-h-screen w-full max-w-[95%] md:max-w-[97%] mx-auto"
//     >
//       <SectionTitle
//         title="Skills"
//         outerColor="body"
//         innerColor="cardColor"
//         rounded="none"
//         hasRoundDown={true}
//       />

//       {/* Masonry Grid */}
//       <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-6">
//         {skills.map((skill, i) => (
//           <div
//             key={i}
//             className="break-inside-avoid bg-body rounded-2xl shadow p-5 flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
//           >
//             <div className="flex items-center gap-3">
//               {skill.icon}
//               <h3 className="text-lg font-semibold text-text">{skill.name}</h3>
//             </div>
//             <p className="text-sm text-muted mt-3 leading-relaxed">
//               {skill.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Skills
