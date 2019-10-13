import React from 'react';

interface IText {
    text: string;
}

export const Text = (props: IText) => {
    const { text } = props;
    return (<div>{ text }</div>)
} 