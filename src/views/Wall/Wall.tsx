
import React, { Component } from "react";
import { WallWrapp, LeftSide, RightSide, AvatarWrapp } from "./Wall.style";

export default class Wall extends Component {
    comonentDidMount() {

    }

    render() {
        return (
            <WallWrapp>
                <LeftSide>
                    <AvatarWrapp />
                    <button> Пригласить в</button>
                    <button> Добавить в контакты</button>
                    <button> Отправить сообщение</button>
                </LeftSide>
                <RightSide>
                    <h3>Масленников Сергей Андреевич</h3>
                </RightSide>
            </WallWrapp>);
    }
}