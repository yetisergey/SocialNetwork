import React from "react";
import { WallWrapp, LeftSide, RightSide } from "./Wall.style";
import ButtonSquare from "../../components/Buttons/ButtonSquare";
import { AvatarWrapp } from "../../components/Avatar/Avatar";
import CollapsibleText from "../../components/CollapsibleText/CollapsibleText";
import { Label, LargeLabel, CursiveLabel } from "../../components/Label/Label";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { loadWallAction } from '../../store/Wall/actions';
import { storeType } from "../../store";
import Interests from "./Interests/Interests";

type Props = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> & {};

class Wall extends React.Component<Props> {
    componentDidMount() {
        this.props.loadWall();
    }

    render() {
        const { user, interests} = this.props;
        return (
            <WallWrapp>
                <LeftSide>
                    <AvatarWrapp src={user.avatar} />
                    <ButtonSquare onClick={() => alert("hello")}>
                        Отправить сообщение
                    </ButtonSquare>
                    <Interests {...interests}></Interests>
                </LeftSide>
                <RightSide>
                    <LargeLabel>{user.fio}</LargeLabel>
                    <br/>
                    <CursiveLabel>{user.status}</CursiveLabel>
                    <br />
                    <Label>О себе</Label>
                    <br />
                    <CollapsibleText text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}></CollapsibleText>
                </RightSide>
            </WallWrapp>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            loadWall: loadWallAction,
        },
        dispatch
    );

const mapStateToProps = (state: storeType) => { return state.wallReducer; };

export default connect(mapStateToProps, mapDispatchToProps)(Wall);