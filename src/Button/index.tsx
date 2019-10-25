import * as React from 'react'

type Props = {
  onClick?: (e: React.MouseEvent) => void
}

const Button: React.SFC<Props> = props => {
  return <button onClick={props.onClick}>{props.children}</button>
}

export default Button
