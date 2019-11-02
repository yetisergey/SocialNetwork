import styled from "styled-components";

export const EditableLabelWrap = styled.div`
    ::after{
        content: "";
        display: block;
        background: url("icon.jpg") no-repeat;
        width: 20px;
        height: 20px;
        float: right;
        margin: 0 6px 0 0;
    }
`;