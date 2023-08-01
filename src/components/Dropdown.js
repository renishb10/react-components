import React, { useEffect, useRef, useState } from 'react'
import { GoChevronDown } from 'react-icons/go'
import Panel from './Panel'

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropDownElement = useRef()

  useEffect(() => {
    const handler = (e) => {
      if (!dropDownElement.current) {
        return
      }

      if (!dropDownElement.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('click', handler, true)

    return () => { document.removeEventListener('click', handler) }
  }, [])

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const handleOptionClick = (selectedOption) => {
    setIsOpen(false)
    onChange(selectedOption)
  }

  const renderedOptions = options.map(o => {
    return <div key={o.value} onClick={() => handleOptionClick(o)}
      className='hover:bg-sky-100 rounded cursor-pointer p-1'>{o.label}</div>
  })

  return (
    <div ref={dropDownElement} className='w-48 relative'>
      <Panel onClick={handleClick}
        className='flex justify-between items-center cursor-pointer'>{value?.label || 'Select...'}
        <GoChevronDown className='text-lg' />
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  )
}

export default Dropdown