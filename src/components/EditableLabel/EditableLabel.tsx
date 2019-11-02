import React from "react";
import { EditableLabelWrap } from "./EditableLabel.style";

interface IEditableLabel
{
    text: string;
}

export default class EditableLabel extends React.Component<IEditableLabel> {
    componentDidMount() {
    }

    render() {
        const { text } = this.props;
        return (<EditableLabelWrap>{text}</EditableLabelWrap>)
    }
}