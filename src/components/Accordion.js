import React, { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'

function Accordion({ items }) {

  const [expandedIndex, setExpandedIndex] = useState(-1)

  const handleClick = (nextIndex) => {
    const toggleIndex = (nextIndex === expandedIndex) ? -1 : nextIndex
    setExpandedIndex(toggleIndex)
  }

  return (
    <div>
      {
        items.map((i, index) => {
          const isExpanded = index === expandedIndex
          const icon = <span className='text-xl font-bold'>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>

          return (
            <div className='border-x border-t rounded' key={i.id}>
              <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer' onClick={() => handleClick(index)}>
                {i.label}
                {icon}
              </div>
              {isExpanded && <div className='border-b p-5'>{i.content}</div>}
            </div>
          )
        }
        )
      }
    </div>
  )
}

export default Accordion