import React from 'react'
import { TbNorthStar } from 'react-icons/tb'
import SectionTitle from '../components/SectionTitle'

const About = () => {
  return (
    <section id="about" className="relative min-h-screen w-full max-w-[95%] md:max-w-[97%] mx-auto">
      <SectionTitle title='About Me' outerColor='cardColor' innerColor='body' rounded='2xl' hasRoundDown={false} />
    </section>
  )
  // return (
  //   <section className="max-w-6xl mx-auto px-6 py-12">
  //     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
  //       {/* About Me Text */}
  //       <div>
  //         <h2 className="text-3xl font-bold mb-4">About Me</h2>
  //         <p className="text-gray-700 mb-4">
  //           Hi, I’m <span className="font-semibold">Ace Taiwo</span>, a self-taught 
  //           full-stack developer passionate about building clean, responsive, 
  //           and user-friendly applications.
  //         </p>
  //         <p className="text-gray-700 mb-4">
  //           I started my coding journey by exploring online resources and quickly 
  //           fell in love with turning ideas into real projects. To build a strong 
  //           foundation, I completed several certifications from freeCodeCamp, including:
  //         </p>
  //         <ul className="list-disc list-inside text-gray-700 mb-4">
  //           <li>Responsive Web Design</li>
  //           <li>JavaScript Algorithms & Data Structures</li>
  //           <li>Front End Development Libraries</li>
  //         </ul>
  //         <p className="text-gray-700">
  //           Through these certifications, I gained hands-on experience in creating layouts, 
  //           solving algorithmic challenges, and working with popular libraries. They not only 
  //           sharpened my technical skills but also taught me the value of persistence and 
  //           problem-solving.
  //         </p>
  //       </div>

  //       {/* Certificates Bento Grid */}
  //       <div>
  //         <h3 className="text-2xl font-bold mb-4">My Certifications</h3>
  //         <div className="grid grid-cols-2 gap-4">
            
  //           {/* Card 1 */}
  //           <a
  //             href="your-responsive-web-design-link"
  //             target="_blank"
  //             className="col-span-2 bg-white rounded-2xl p-4 shadow hover:shadow-lg transition flex flex-col items-center text-center"
  //           >
  //             <img
  //               src="/certificates/responsive-web-design.png"
  //               alt="Responsive Web Design Certificate"
  //               className="rounded-lg mb-3 w-full object-cover"
  //             />
  //             <h4 className="text-lg font-semibold">Responsive Web Design</h4>
  //             <p className="text-sm text-blue-500">View Certificate →</p>
  //           </a>

  //           {/* Card 2 */}
  //           <a
  //             href="your-js-algorithms-link"
  //             target="_blank"
  //             className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition flex flex-col items-center text-center"
  //           >
  //             <img
  //               src="/certificates/javascript-algorithms.png"
  //               alt="JavaScript Algorithms Certificate"
  //               className="rounded-lg mb-3 w-full object-cover"
  //             />
  //             <h4 className="text-lg font-semibold">JavaScript Algorithms</h4>
  //             <p className="text-sm text-blue-500">View Certificate →</p>
  //           </a>

  //           {/* Card 3 */}
  //           <a
  //             href="your-frontend-libraries-link"
  //             target="_blank"
  //             className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition flex flex-col items-center text-center"
  //           >
  //             <img
  //               src="/certificates/frontend-libraries.png"
  //               alt="Front End Libraries Certificate"
  //               className="rounded-lg mb-3 w-full object-cover"
  //             />
  //             <h4 className="text-lg font-semibold">Front End Libraries</h4>
  //             <p className="text-sm text-blue-500">View Certificate →</p>
  //           </a>

  //         </div>
  //       </div>

  //     </div>
  //   </section>
  // )
}

export default About