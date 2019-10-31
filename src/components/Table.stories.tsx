import * as React from 'react'
import { Table } from './Table'

export default {
  title: 'Table',
}

const data = [
  { team: 'team1', w: 1000, d: 3, l: 23324444 },
  { team: 'team2', w: 2000, d: 3, l: 1 },
  { team: 'team33232 f', w: 333232, d: 0, l: 2 },
  { team: 'team4', w: 10000, d: 3, l: 2 },
]

export const simpleVersion = () => <Table data={data} />
