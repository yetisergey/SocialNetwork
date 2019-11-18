import styled from "styled-components";

interface IColorProps {
  color?: string;
  hoverColor?: string;
}

export const ButtonWrap = styled.button`
background-color: ${(props: IColorProps) => props.color ? props.color : '#629aaa'};
padding: 10px;
border-radius: 5px;
border: none;
color: white;
width: 100%;
margin-top: 5px;
outline: none;
cursor: pointer;

&:hover {
    background-color:  ${(props: IColorProps) => props.hoverColor ? props.hoverColor : '#53808d'};
  }

  &:active {
    background-color: ${(props: IColorProps) => props.hoverColor ? props.hoverColor : '#53808d'};
    }

&:focus {
  &:after {
    opacity: 1;
  }
}
`;
