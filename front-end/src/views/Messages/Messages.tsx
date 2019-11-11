import React from "react";
import {
    MessagesModule,
    MessagesWrapp,
    MessagesPanelRelative,
    MessagesPanel,
    Message,
    MessageWrapp,
    InputPanel,
    TextArea,
    MessagesEnd
} from "./Messages.style";
import { storeType, history } from "../../store";
import { bindActionCreators, Dispatch } from "redux";
import { loadMessagesAction, addMessageAction } from "../../store/Messages/actions";
import { connect } from "react-redux";
import { ButtonSquare } from "../../components/Button";

type IMessagesProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> & {};

interface IMessagesState {
    messageText: string;
}

class Messages extends React.Component<IMessagesProps, IMessagesState>   {
    constructor(props: IMessagesProps) {
        super(props);
        this.state = {
            messageText: ""
        }
    }

    scrollToBottom = () => {
        let messagesEnd = document.getElementById('messagesEnd');
        if (messagesEnd !== null) {
            messagesEnd.scrollIntoView()
        }
    }

    componentDidMount() {
        this.props.loadMessages();
        this.scrollToBottom();
    }

    handleChangeMessage(e: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({ messageText: e.target.value });
    }

    sendMessage() {
        const { messageText } = this.state;
        const { addMessage } = this.props;
        addMessage(messageText);
        this.scrollToBottom();
    }

    render() {
        const { arrayOfMessages } = this.props;
        return (
            <MessagesModule>
                <MessagesWrapp>
                    <ButtonSquare onClick={history.goBack}>Назад</ButtonSquare>
                    <MessagesPanelRelative>
                        <MessagesPanel>
                            {arrayOfMessages && arrayOfMessages.map(msg => (
                                <MessageWrapp key={msg.id}>
                                    <Message>{msg.text}</Message>
                                </MessageWrapp>))}
                            <MessagesEnd id="messagesEnd"></MessagesEnd>
                        </MessagesPanel>
                    </MessagesPanelRelative>
                    <InputPanel>
                        <TextArea onChange={this.handleChangeMessage.bind(this)} />
                        <ButtonSquare onClick={this.sendMessage.bind(this)}>Отправить</ButtonSquare>
                    </InputPanel>
                </MessagesWrapp>
            </MessagesModule>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            loadMessages: loadMessagesAction,
            addMessage: addMessageAction
        },
        dispatch
    );

const mapStateToProps = (state: storeType) => state.messagesReducer;

export default connect(mapStateToProps, mapDispatchToProps)(Messages);