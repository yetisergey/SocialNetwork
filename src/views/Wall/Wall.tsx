import React from "react";
import { WallWrapp, LeftSide, RightSide } from "./Wall.style";
import ButtonSquare from "../../components/Buttons/ButtonSquare";
import { AvatarWrapp } from "../../components/Avatar/Avatar";
import CollapsibleText from "../../components/CollapsibleText/CollapsibleText";
import { Label } from "../../components/Label/Label";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { loadWallAction } from '../../store/Wall/actions';

type Props = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> & {};

class Wall extends React.Component<Props> {
    componentDidMount() {

    }

    render() {
        return (
            <WallWrapp>
                <LeftSide>
                    <AvatarWrapp src={this.props.user.avatar} />
                    <ButtonSquare onClick={() => this.props.loadWall()}>
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
                    <Label>{this.props.user.fio}</Label>
                    <Label>Здесь должен быть какой-то умный статус</Label>
                    <Label>О себе</Label>
                    <CollapsibleText text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}></CollapsibleText>
                </RightSide>
            </WallWrapp>
        );
    }
}


const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            loadWall: () => loadWallAction(),
        },
        dispatch
    );

const mapStateToProps = (state: any) => { return state.wallReducer; };

export default connect(mapStateToProps, mapDispatchToProps)(Wall);