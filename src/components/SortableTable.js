import React, { useState } from 'react'
import { GoArrowUp, GoArrowDown, GoArrowBoth } from 'react-icons/go'
import Table from './Table'
import useSort from '../hooks/useSort';

function SortableTable(props) {
  const { config, data } = props;
  const { sortBy, sortOrder, sortedData, handleClick } = useSort(data, config)

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