import React from "react";
import {
    WallWrapper,
    ProfileWrapper,
    WrapperForm,
    AvatarWrapper,
    Icon,
    Name,
    NavWrapper,
    Settings,
    Label
} from "./Wall.style";
import CollapsibleText from "../../components/CollapsibleText";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { loadUserProfileAction } from '../../store/Wall/actions';
import { storeType } from "../../store";
import Interests from "./Interests/Interests";
import Menu from "../../components/Menu";
import * as images from "../../img";

type IWallProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> & {};

interface IWallState {
    isOpenedMenu: boolean;
}

class Wall extends React.Component<IWallProps, IWallState> {
    constructor(props: IWallProps) {
        super(props);
        this.state = { isOpenedMenu: false }
    }

    componentDidMount() {
        this.props.loadUserProfile();
    }

    toggleMenu(open: boolean) {
        this.setState({ isOpenedMenu: open });
    }

    render() {
        const { isOpenedMenu } = this.state;
        const { user, interests } = this.props;
        return (
            <WallWrapper>
                <WrapperForm>
                    {isOpenedMenu && <Menu user={user} close={() => { this.toggleMenu(false) }}></Menu>}
                    <ProfileWrapper>
                        <AvatarWrapper src={user.avatar}>
                            <NavWrapper>
                                <Icon onClick={() => this.toggleMenu(true)} src={images.burgerMenu}></Icon>
                                <Settings>
                                    <Icon src={images.search}></Icon>
                                    <Icon src={user.avatar}></Icon>
                                </Settings>
                            </NavWrapper>
                            <Name>{user.lastName} {user.firstName}</Name>
                        </AvatarWrapper>
                        <Label>Status</Label>
                        <CollapsibleText text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}></CollapsibleText>
                        <Interests {...interests}></Interests>
                    </ProfileWrapper>
                </WrapperForm>
            </WallWrapper>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            loadUserProfile: loadUserProfileAction
        },
        dispatch
    );

const mapStateToProps = (state: storeType) => { return state.wallReducer; };

export default connect(mapStateToProps, mapDispatchToProps)(Wall);