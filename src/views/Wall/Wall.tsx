import React, { Component } from "react";
import { WallWrapp, LeftSide, RightSide } from "./Wall.style";
import ButtonSquare from "../../components/Buttons/ButtonSquare";
import { AvatarWrapp } from "../../components/Avatar/Avatar";
import Text from "../../components/Text";
export default class Wall extends Component {
  comonentDidMount() {}

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
          <Text>Масленников Сергей Андреевич</Text>
          <Text>Здесь должен быть какой-то умный статус </Text>
          <Text>Здесь должен быть какой-то умный статус </Text>
        </RightSide>
      </WallWrapp>
    );
  }
}
