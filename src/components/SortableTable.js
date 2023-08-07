import React, { useState } from 'react'
import { GoArrowUp, GoArrowDown, GoArrowBoth } from 'react-icons/go'
import Table from './Table'

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null)
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc')
      setSortBy(label)
      return
    }

    if (sortOrder === null) {
      setSortOrder('asc')
      setSortBy(label)
    }
    else if (sortOrder === 'asc') {
      setSortOrder('desc')
      setSortBy(label)
    }
    else if (sortOrder === 'desc') {
      setSortOrder(null)
      setSortBy(null)
    }
  }

  const updatedConfig = config.map(c => {
    if (!c.sortValue) return c

    return {
      ...c,
      header: () => (
        <th className='cursor-pointer hover:bg-gray-100' onClick={() => handleClick(c.label)}>
          <div className='flex items-center'>
            {getIcons(c.label, sortBy, sortOrder)}
            {c.label}
          </div>
        </th>
      ),
    }
  })

  let sortedData = data
  if (sortOrder && sortBy) {
    const { sortValue } = config.find(c => c.label === sortBy)
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a)
      const valueB = sortValue(b)

      const reverseOrder = sortOrder === 'asc' ? 1 : -1

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder
      } else {
        return (valueA - valueB) * reverseOrder
      }
    })
  }

  return (
    <Table {...props} data={sortedData} config={updatedConfig} />
  )
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return <div>
      <GoArrowUp />
      <GoArrowDown />
    </div>
  }

  if (sortOrder === null) {
    return <div>
      <GoArrowUp />
      <GoArrowDown />
    </div>
  } else if (sortOrder === 'asc') {
    return <div>
      <GoArrowUp />
    </div>
  } else if (sortOrder === 'desc') {
    return <div>
      <GoArrowDown />
    </div>
  }
}

export default SortableTable