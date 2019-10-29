import * as React from 'react'
import { text } from '@storybook/addon-knobs'
import { Card } from './Card'

export default {
  title: 'Card',
}

export const raisedToFloating = () => (
  <Card kind={'raised'} hoverKind={'floating'}>
    {text('Text', 'This is some text')}
  </Card>
)
