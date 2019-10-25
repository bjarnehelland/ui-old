import * as React from 'react'
import { boolean } from '@storybook/addon-knobs'
import { Toggle } from './Toggle'

export default {
  title: 'Toggle',
}

export const text = () => <Toggle on={boolean('On', false)} />
