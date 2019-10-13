import React, { Component } from "react";
import { WallWrapp, LeftSide, RightSide } from "./Wall.style";
import ButtonSquare from "../../components/Buttons/ButtonSquare";
import { AvatarWrapp } from "../../components/Avatar/Avatar";
import Text from "../../components/Text";
import CollapsibleText from "../../components/CollapsibleText/CollapsibleText";
export default class Wall extends Component {
    comonentDidMount() { }

    render() {
        return (
            <WallWrapp>
                <LeftSide>
                    <AvatarWrapp src="https://sun9-54.userapi.com/c853628/v853628492/11decf/k3UxaHY5Vlw.jpg" />
                    <ButtonSquare onClick={() => alert("hello")}>
                        Пригласить в
          </ButtonSquare>
                    <ButtonSquare onClick={() => alert("hello")}>
                        Добавить в контакты
          </ButtonSquare>
                    <ButtonSquare onClick={() => alert("hello")}>
                        Отправить сообщение
          </ButtonSquare>
                </LeftSide>
                <RightSide>
                    <Text text={"Масленников Сергей Андреевич"}></Text>
                    <Text text="Здесь должен быть какой-то умный статус "></Text>
                    <CollapsibleText text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}></CollapsibleText>
                </RightSide>
            </WallWrapp>
        );
    }
}
