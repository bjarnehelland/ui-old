import * as React from 'react'
import styled from '@emotion/styled'

export interface CardProps {
  kind:
    | 'default'
    | 'bordered'
    | 'well'
    | 'white'
    | 'raised'
    | 'floating'
    | 'popping'
}

const kinds = {
  default: ``,
  bordered: `
    box-shadow: 0 0 0 2px rgba(48, 45, 61, 0.1);
  `,
  well: `
    background-color: rgba(26, 14, 35, 0.03);
    transition-duration: 0.3s;
  `,
  white: `
    background-color: #fff;
    transition-duration: 0.3s;
  `,
  raised: `
    border: 2px solid rgba(139, 133, 160, 0.1);
    border-bottom: 4px solid rgba(139, 133, 160, 0.25);
    background-color: #fff;
  `,
  floating: `
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(48, 45, 61, 0.1);
    transition-duration: 0.3s;
  `,
  popping: `
    background-color: #fff;
    box-shadow: 0 12px 24px 0 rgba(48, 45, 61, 0.1);
    transition-duration: 0.4s;
  `,
}
const getKind = ({ kind = 'default' }: CardProps) => kinds[kind]

const StyledCard = styled('div')<CardProps>`
  box-sizing: border-box;
  background-color: transparent;
  border-radius: 0.5em;
  box-shadow: none;
  color: #3f2454;
  display: block;
  padding: 1.25rem 1.375rem;
  transition: all 0.25s ease-out;
  ${getKind};
`

export const Card: React.SFC<CardProps> = ({ children, ...props }) => (
  <StyledCard {...props}>{children}</StyledCard>
)
