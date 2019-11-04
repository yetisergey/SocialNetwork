import styled from "styled-components";

export const MessagesModule = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    align-content: stretch;
    align-items: stretch;
`

export const MessagesWrapp = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    align-content: stretch;
    align-items: stretch;
    flex-direction: column;
`;
export const MessagesPanelRelative = styled.div`
    flex: 1;
    display: flex;
    position: relative;
`

export const MessagesPanel = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow-y: scroll;
    flex: 1;
`

export const MessagesEnd = styled.div`
    float: "left"; 
    clear: "both";
`

export const MessageWrapp = styled.div`
    display: flex;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
`

export const Message = styled.div`
    margin-right: 5px;
    background-color: #e4e4e4;
    border-radius: 4px;
    padding: 10px;
    height: 20px;
    background-color: #e7e7e7;
`

export const InputPanel = styled.div`
`

export const TextArea = styled.textarea`
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    border-radius: 5px;
    margin: 0;
    box-sizing: border-box;
`