import React from 'react'
import { TbNorthStar } from 'react-icons/tb'
import clsx from 'clsx'

// JIT-safe maps
const bgMap = {
  body: 'bg-body',
  cardColor: 'bg-cardColor',
}
const beforeBgMap = {
  body: 'before:bg-body',
  cardColor: 'before:bg-cardColor',
}
const afterBgMap = {
  body: 'after:bg-body',
  cardColor: 'after:bg-cardColor',
}

const roundedMap = {
  none: 'rounded-b-none',
  sm: 'rounded-b-sm',
  md: 'rounded-b-md',
  lg: 'rounded-b-lg',
  xl: 'rounded-b-xl',
  '2xl': 'rounded-b-2xl',
  '3xl': 'rounded-b-3xl',
  full: 'rounded-b-full',
}


const SectionTitle = ({ title, outerColor, innerColor, rounded, hasRoundDown }) => {
  return (
    <div className="w-full">
      <div
        className={clsx(
          `relative p-12 md:p-6`,
          roundedMap[rounded],
          bgMap[outerColor],
          hasRoundDown &&
            clsx(
              `before:content-[''] before:absolute before:-bottom-4 before:left-0 before:w-4 before:h-4`,
              beforeBgMap[outerColor],
              `after:content-[''] after:absolute after:-bottom-4 after:right-0 after:w-4 after:h-4 after:rounded-tr-2xl`,
              afterBgMap[innerColor],
            )
        )}
      >
        {hasRoundDown && (
          <>
            <div
              className={clsx(
                `before:content-[''] before:absolute before:-bottom-4 before:left-0 before:w-4 before:h-4 before:rounded-tl-2xl`,
                beforeBgMap[innerColor]
              )}
            />
            <div
              className={clsx(
                `after:content-[''] after:absolute after:-bottom-4 after:right-0 after:w-4 after:h-4`,
                afterBgMap[outerColor] 
              )}
            />
          </>
        )}

        <div className="absolute bottom-0 left-6 md:left-7">
          <div
            className={clsx(
              `before:content-[''] before:absolute before:bottom-0 before:-left-2 before:w-2 before:h-2`,
              beforeBgMap[innerColor]
            )}
          />
          <div
            className={clsx(
              `after:content-[''] after:absolute after:bottom-0 after:-right-2 after:w-2 after:h-2`,
              afterBgMap[innerColor]
            )}
          />
          <span
            className={clsx(
              `relative inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-t-xl`,
              bgMap[innerColor],
              `before:content-[''] before:absolute before:bottom-0 before:-left-2 before:w-2 before:h-2 before:rounded-br-xl`,
              beforeBgMap[outerColor],
              `after:content-[''] after:absolute after:bottom-0 after:-right-2 after:w-2 after:h-2 after:rounded-bl-xl`,
              afterBgMap[outerColor],
            )}
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
