import * as React from 'react'
import { text } from '@storybook/addon-knobs'
import { Card } from './Card'

export default {
  title: 'Card',
}

export const deful = () => (
  <Card kind={text('kind', 'raised')} hoverKind={'floating'}>
    This is some text
  </Card>
)
