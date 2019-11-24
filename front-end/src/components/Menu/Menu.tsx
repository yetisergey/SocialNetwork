import React from "react";
import { IUser } from "../../models/user/types";
import * as images from "../../img";
import {
    MenuWrapper,
    Navbar,
    NavbarButton,
    PersonalInfo,
    AvatarBlock,
    FioBlock,
    MenuButtonsWrapper,
    MenuButton,
    MenuIconButton
} from "./Menu.style";
import { Dispatch, bindActionCreators } from "redux";
import { logoutAction } from "../../store/Auth/actions";
import { connect } from "react-redux";
import { history } from "../../store";

interface IMenuProps {
    close: ()=> void;
    user: IUser;
}

class Menu extends React.Component<IMenuProps & ReturnType<typeof mapDispatchToProps>>
{
    redirectTo(route: string) {
        history.push(route);
    }

    logout() {
        this.props.logoutAction();
        this.redirectTo('/enter');
    }

    render() {
        const {user} = this.props;
        return (<MenuWrapper>
            <Navbar>
                <NavbarButton onClick={() => this.props.close()} src={images.arrowLeft  } />
                <NavbarButton onClick={() => this.props.close()} src={images.settings} />
            </Navbar>
            <PersonalInfo>
                <AvatarBlock src={user.avatar} />
                <FioBlock>{user.lastName} {user.firstName}</FioBlock>
            </PersonalInfo>
            <MenuButtonsWrapper>
                <MenuButton onClick={() => this.props.close()} >
                    <MenuIconButton src={images.profile}></MenuIconButton>
                    Profile
                </MenuButton>
                <MenuButton onClick={() => this.redirectTo("/news")} >
                    <MenuIconButton src={images.news}></MenuIconButton>
                    News
                </MenuButton>
                <MenuButton onClick={() => this.redirectTo("/messages")} >
                    <MenuIconButton src={images.messages}></MenuIconButton>
                    Messages
                </MenuButton>
                <MenuButton onClick={() => this.redirectTo("/friends")} >
                    <MenuIconButton src={images.friends}></MenuIconButton>
                    My friends
                </MenuButton>
                <MenuButton onClick={() => this.redirectTo("/people")}>
                    <MenuIconButton src={images.myFriends}></MenuIconButton>
                    Find friends
                </MenuButton>
                <MenuButton onClick={() => this.logout()}>
                    <MenuIconButton src={images.signout}></MenuIconButton>
                    Sign out
                </MenuButton>
            </MenuButtonsWrapper>
        </MenuWrapper>);
    }
}


const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            logoutAction: logoutAction
        },
        dispatch
    );


export default connect(null, mapDispatchToProps)(Menu);