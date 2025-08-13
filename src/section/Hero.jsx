import React from 'react'

const Hero = () => {
  return (
    <div className='min-h-screen md:mt-6 w-full md:max-w-[90%] absolute md:left-1/2 md:-translate-x-1/2'>
      <svg className="absolute inset-0 w-full h-full">
              <defs>
                <clipPath id="right__bottom__corner__menu" clipPathUnits="objectBoundingBox">
                <path
                  d="
                    M 0.05 0                    
                    L 0.95 0                    
                    A 0.05 0.05 0 0 1 1 0.05    

                    L 1 0.73                    
                    
                    A 0.05 0.05 0 0 1 0.95 0.78
                    
                    A 0.18 0.18 0 0 0 0.76 0.95 

                    A 0.05 0.05 0 0 1 0.71 1

                    L 0.05 1                 
                    A 0.05 0.05 0 0 1 0 0.95    

                    L 0 0.05                    
                    A 0.05 0.05 0 0 1 0.05 0    
                    Z                           
                  "
                />
                </clipPath>
              </defs>
              <foreignObject width="100%" height="100%" clipPath="url(#right__bottom__corner__menu)">
                <div className="w-full h-full z-10 bg-gold/70 bg-opacity-80 backdrop-blur-sm drop-shadow-lg" />
              </foreignObject>
            </svg>
    </div>
  )
}

export default Hero