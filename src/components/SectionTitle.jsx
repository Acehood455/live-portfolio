import React from 'react'
import { TbNorthStar } from 'react-icons/tb'

const SectionTitle = ({title, outerColor, innerColor, rounded, hasRoundDown}) => {
  return (
          <div className="w-full">
            <div className={`relative rounded-b-${rounded} bg-${outerColor} p-12 
                ${hasRoundDown ? `before:content-[''] before:absolute before:-bottom-4 before:left-0 before:w-4 before:h-4 before:bg-${outerColor}
                after:content-[''] after:absolute after:-bottom-4 after:right-0 after:w-4 after:h-4 after:bg-${innerColor} after:rounded-tr-2xl` : ''}
                `}>
                {hasRoundDown && ( 
                    <>
                        <div className={`before:content-[''] before:absolute before:-bottom-4 before:left-0 before:w-4 before:h-4 before:bg-${innerColor} before:rounded-tl-2xl`}/>
                        <div className={`after:content-[''] after:absolute after:-bottom-4 after:right-0 after:w-4 after:h-4 after:bg-${outerColor}`}/>
                    </>
                )}
              
              <div className="absolute bottom-0 left-6 md:left-14">
                <div className={`before:content-[''] before:absolute before:bottom-0 before:-left-2 before:w-2 before:h-2 before:bg-${innerColor}`}/>
                <div className={`after:content-[''] after:absolute after:bottom-0 after:-right-2 after:w-2 after:h-2 after:bg-${innerColor}`}/>
                <span
                  className={`
                    relative inline-flex items-center gap-2 px-4 py-2 bg-${innerColor} text-sm font-medium rounded-t-xl
                    before:content-[''] before:absolute before:bottom-0 before:-left-2 before:w-2 before:h-2 before:bg-${outerColor} before:rounded-br-xl
                    after:content-[''] after:absolute after:bottom-0 after:-right-2 after:w-2 after:h-2 after:bg-${outerColor} after:rounded-bl-xl
                    `}
                >
                  <div className="flex items-center gap-2">
                    <TbNorthStar size={17} className="text-purple2" />
                    <h1 className="uppercase tracking-widest text-xs md:text-sm font-medium text-text ">
                        {title}
                    </h1>
                  </div>
                </span>
              </div>
            </div>
          </div>
  )
}

export default SectionTitle