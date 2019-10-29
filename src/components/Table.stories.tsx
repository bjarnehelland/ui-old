import * as React from 'react'
import { text } from '@storybook/addon-knobs'
import { Table } from './Table'

export default {
  title: 'Table',
}

const rows = [
  { team: 'team1', w: 1, d: 3, l: 23324444 },
  { team: 'team2', w: 1, d: 3, l: 1 },
  { team: 'team33232 3224', w: 333232, d: 0, l: 2 },
  { team: 'team4', w: 1, d: 3, l: 2 },
]

export const simpleVersion = () => <Table rows={rows} />
