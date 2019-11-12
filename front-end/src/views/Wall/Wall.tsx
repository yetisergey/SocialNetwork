import React from "react";
import { WallWrapp, LeftSide, RightSide } from "./Wall.style";
import { ButtonSquare } from "../../components/Button";
import AvatarWrapp from "../../components/Avatar";
import CollapsibleText from "../../components/CollapsibleText";
import { Label, LargeLabel } from "../../components/Label";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { loadUserProfileAction } from '../../store/Wall/actions';
import { storeType, history } from "../../store";
import Interests from "./Interests/Interests";
import { Link } from 'react-router-dom'
import { logoutAction } from "../../store/Auth/actions";

type Props = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> & {};

class Wall extends React.Component<Props> {
    componentDidMount() {
        const { loadUserProfile } = this.props;
        loadUserProfile();
    }

    logout() {
        this.props.logoutAction();
        history.push('/enter');
    }

    render() {
        const { user, interests } = this.props;
        return (
            <WallWrapp>
                <LeftSide>
                    <AvatarWrapp src={user.avatar} />
                    <Link to="/messages">
                        <ButtonSquare>
                            Messages
                        </ButtonSquare>
                    </Link>
                    <Link to="/friends">
                        <ButtonSquare>
                            My friends
                        </ButtonSquare>
                    </Link>
                    <Link to="/people">
                        <ButtonSquare>
                            Find friends
                        </ButtonSquare>
                    </Link>
                    <ButtonSquare onClick={this.logout.bind(this)}>
                        Exit
                    </ButtonSquare>
                    <Interests {...interests}></Interests>
                </LeftSide>
                <RightSide>
                    <LargeLabel>{user.lastName} {user.firstName}</LargeLabel>
                    <br />
                    {/* <CursiveLabel>{user.status}</CursiveLabel> */}
                    <br />
                    <Label>About</Label>
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
            loadUserProfile: loadUserProfileAction,
            logoutAction: logoutAction
        },
        dispatch
    );

const mapStateToProps = (state: storeType) => { return state.wallReducer; };

export default connect(mapStateToProps, mapDispatchToProps)(Wall);