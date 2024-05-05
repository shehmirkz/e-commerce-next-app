import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface buttonProps {
  name: string,
  iconItem: string | any,
  class?: string,
  onClick?: () => void
}

function PrimaryButton(props: buttonProps) {
  return <button className={`primary-btn ${props.class ? props.class : "px-[15px] py-[7px]"}`} onClick={props.onClick}>
    <FontAwesomeIcon icon={props.iconItem} /> {props.name}</button>
}

export default PrimaryButton
