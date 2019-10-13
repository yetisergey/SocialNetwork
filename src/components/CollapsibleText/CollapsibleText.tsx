import React, { Component } from "react";
import Text from "../Text";
import { CollapsibleTextWrapper } from "./CollapsibleText.style";
import { ShowMore } from './ShowMore';

interface ICollapsibleText {
    text: string;
    count?: number;
}

interface ICollapsibleTextState {
    isOpen: boolean;
}

export default class CollapsibleText extends Component<ICollapsibleText, ICollapsibleTextState> {
    constructor(props: ICollapsibleText) {
        super(props);
        this.state = { isOpen: false }
    }

    openText() {
        this.setState({ isOpen: true });
    }

    render() {
        const { text, count = 256 } = this.props;

        return (<CollapsibleTextWrapper>
            <Text text={!this.state.isOpen ? text.slice(0, count) : text}></Text>
            {!this.state.isOpen
                &&
                <ShowMore onClick={this.openText.bind(this)}></ShowMore>}

        </CollapsibleTextWrapper>);
    }
}