

import React from 'react';
import { LinedInputWrapper } from './LinedInput.style';

interface ILinedInput {
    onChange?: () => {}
    value?: string;
}

export default (props: ILinedInput) => {
    const { onChange, value } = props;
    return (<LinedInputWrapper onChange={onChange} value={value}></LinedInputWrapper>)
} 