import React from "react";
import { ButtonWrap } from "./ButtonSquare.style";
interface IButtonSquare {
  onClick: (e: React.MouseEvent) => void;
}
export class ButtonSquare extends React.Component<IButtonSquare> {
  render() {
    const props = this.props;
    return <ButtonWrap onClick={props.onClick} {...props}></ButtonWrap>;
  }
}
export class ButtonSquareWrapper extends React.Component {
  render() {
    const props = this.props;
    return <ButtonWrap {...props}></ButtonWrap>;
  }
}
