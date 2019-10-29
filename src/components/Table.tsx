import * as React from 'react'
import styled from 'styled-components'
import cx from 'classnames'

type Row = { [key: string]: any }
type Column = {
  title: string
  link: string
  type: string
}

export type TableProps = {
  rows: Row[]
}

type TableRowProps = {
  columns: Column[]
  row: Row
}

const TableRow: React.FC<TableRowProps> = ({ columns, row }) => {
  return (
    <tr>
      {columns.map(column => (
        <td key={column.link} className={cx([column.type])}>
          {row[column.link]}
        </td>
      ))}
    </tr>
  )
}

export const Table: React.FC<TableProps> = ({ rows }) => {
  const columns = Object.keys(rows[0]).map(colName => ({
    title: colName,
    link: colName,
    type: typeof rows[0][colName],
  }))
  console.log(columns)
  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column.link}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <TableRow key={i} columns={columns} row={row}></TableRow>
        ))}
      </tbody>
    </StyledTable>
  )
}

const StyledTable = styled.table`
  td.number {
    text-align: right;
  }
`
