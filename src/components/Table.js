import { Fragment } from 'react'

function Table({ config, data, keyFn }) {
  const renderedHeaders = config.map(c => {
    if (c.header) return <Fragment key={c.label}>{c.header()}</Fragment>

    return (
      <th key={c.label}>{c.label}</th>
    )
  })
  const renderedRows = data.map(r => {
    const renderedCells = config.map(c => {
      return (
        <td className='p-2' key={c.label}>
          {c.render(r)}
        </td>
      )
    })

    return (
      <tr className='border-b' key={keyFn(r)}>
        {renderedCells}
      </tr>
    )
  })

  return (
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr>{renderedHeaders}</tr>
      </thead>
      <tbody>
        {renderedRows}
      </tbody>
    </table>
  )
}

export default Table