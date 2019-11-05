import React from 'react'
import styled from '@emotion/styled'
import cx from 'classnames'
import * as d3 from 'd3-array'

export const sampleData = [
  { team: 'team a', p: 11, w: 10, d: 1, l: 0, gf: 25, ga: 9, gd: 16, pts: 31 },
  { team: 'team b', p: 11, w: 8, d: 1, l: 2, gf: 34, ga: 10, gd: 24, pts: 25 },
  { team: 'team c', p: 11, w: 7, d: 2, l: 2, gf: 27, ga: 8, gd: 19, pts: 23 },
  { team: 'team d', p: 11, w: 7, d: 2, l: 2, gf: 25, ga: 17, gd: 8, pts: 23 },
]

type Row = { [key: string]: any }
type Column = {
  header: string
  key: string
  type: string
  format: (type: string) => string
}

export type TableProps = {
  data: Row[]
}

type TableRowProps = {
  columns: Column[]
  row: Row
}

const TableRow: React.FC<TableRowProps> = ({ columns, row }) => {
  return (
    <tr>
      {columns.map(column => (
        <td key={column.key} className={cx([column.type])}>
          {column.format(row[column.key])}
        </td>
      ))}
    </tr>
  )
}

function getFormatter(type: string) {
  if (type === 'number') {
    var numberFormat = new Intl.NumberFormat('nb-NO')
    return (value: number) => numberFormat.format(value)
  }

  return (value: any) => value
}

export const Table: React.FC<TableProps> = ({ data }) => {
  const columns = Object.keys(data[0]).map(colName => {
    const type = typeof data[0][colName]
    const [min, max] = d3.extent(data, (r: Row) => r[colName])
    const format = getFormatter(type)

    return {
      header: colName,
      key: colName,
      format,
      type,
      min,
      max,
    }
  })
  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column.key}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <TableRow key={i} columns={columns} row={row}></TableRow>
        ))}
      </tbody>
    </StyledTable>
  )
}

const StyledTable = styled('table')<TableProps>`
  td.number {
    text-align: right;
  }

  tr {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
`
