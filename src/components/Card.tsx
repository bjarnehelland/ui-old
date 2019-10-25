import * as React from 'react'
import styled from 'styled-components'
import cx from 'classnames'

type Kind =
  | 'default'
  | 'bordered'
  | 'well'
  | 'white'
  | 'raised'
  | 'floating'
  | 'popping'

export type Props = {
  kind?: Kind
  hoverKind?: Kind
}

export const Card: React.FC<Props> = ({ children, kind, hoverKind }) => (
  <StyledCard className={cx(kind, hoverKind ? `hover-to-${hoverKind}` : '')}>
    {children}
  </StyledCard>
)

const StyledCard = styled.div`
  box-sizing: border-box;
  background-color: transparent;
  border-radius: 0.5em;
  box-shadow: none;
  color: #3f2454;
  display: block;
  padding: 1.25rem 1.375rem;
  transition: all 0.25s ease-out;

  &.hover-to-bordered:hover,
  &.bordered {
    box-shadow: 0 0 0 2px rgba(48, 45, 61, 0.1);
  }

  &.hover-to-well:hover,
  &.well {
    background-color: rgba(26, 14, 35, 0.03);
    transition-duration: 0.3s;
  }

  &.hover-to-white:hover,
  &.white {
    background-color: #fff;
    transition-duration: 0.3s;
  }

  &.hover-to-raised:hover,
  &.raised {
    border: 2px solid rgba(139, 133, 160, 0.1);
    border-bottom: 4px solid rgba(139, 133, 160, 0.25);
    background-color: #fff;
  }

  &.hover-to-floating:hover,
  &.floating {
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(48, 45, 61, 0.1);
    transition-duration: 0.3s;
  }

  &.hover-to-popping:hover,
  &.popping {
    background-color: #fff;
    box-shadow: 0 12px 24px 0 rgba(48, 45, 61, 0.1);
    transition-duration: 0.4s;
  }
`