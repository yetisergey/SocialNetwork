import React from "react";
import {
    FriendsModule,
    FriendsWrapp,
    FriendWrapp,
    Friend
} from "./Friends.style";
import { storeType, history } from "../../store";
import { bindActionCreators, Dispatch } from "redux";
import { loadFriendsAction } from "../../store/Friends/actions";
import { connect } from "react-redux";
import { ButtonSquare } from "../../components/Button";
import { Link } from 'react-router-dom'

type IFriendsProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> & {};

class Friends extends React.Component<IFriendsProps>   {

    componentDidMount() {
        this.props.loadFriends();
    }

    render() {
        const { arrayOfFriends } = this.props;
        return (
            <FriendsModule>
                <ButtonSquare onClick={history.goBack}>Назад</ButtonSquare>
                <FriendsWrapp>
                    {arrayOfFriends && arrayOfFriends.map(f => (
                        <FriendWrapp key={f.id}>
                            <Friend>{f.firstName} {f.lastName}</Friend>
                            <br></br>
                            <Link to={`/messages/${f.id}`}>Написать сообщение</Link>
                        </FriendWrapp>))}
                </FriendsWrapp>
            </FriendsModule>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            loadFriends: loadFriendsAction
        },
        dispatch
    );

const mapStateToProps = (state: storeType) => state.friendsReducer;

export default connect(mapStateToProps, mapDispatchToProps)(Friends);