import styled from "styled-components";

export const ButtonWrap = styled.button`
background-color: #629aaa;
padding: 10px;
border-radius: 5px;
border: none;
color: white;
width: 100%;
margin-top: 5px;
outline: none;
cursor: pointer;

&:hover {
    background-color: #53808d;
  }

  &:active {
    background-color: #53808d;
    }

&:focus {
  &:after {
    opacity: 1;
  }
}
`;
