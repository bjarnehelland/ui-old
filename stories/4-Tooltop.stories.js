import React from 'react'
import { action } from '@storybook/addon-actions'
import { Tooltip } from '../src/components/Tooltip'

export default {
  title: 'Tooltip',
}

export const text = () => <Tooltip>Test</Tooltip>
