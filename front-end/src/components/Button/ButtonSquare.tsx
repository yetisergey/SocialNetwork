import React from "react";
import { ButtonWrap } from "./ButtonSquare.style";
interface IButtonSquare {
  onClick?: (e: React.MouseEvent) => void;
  color?: string;
  hoverColor?: string;
}
export default class ButtonSquare extends React.Component<IButtonSquare> {
  render() {
    const props = this.props;
    return <ButtonWrap color={props.color} onClick={props.onClick} {...props}></ButtonWrap>;
  }
}