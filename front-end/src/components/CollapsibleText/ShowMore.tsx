import React from "react";
import { ShowMoreButton, ShowMoreText } from "./CollapsibleText.style";


interface IShowMore {
    onClick(e: React.MouseEvent): void;
}

export const ShowMore = (props: IShowMore) => {
    return (<ShowMoreButton onClick={props.onClick}>
        <ShowMoreText>ShowMore</ShowMoreText></ShowMoreButton>)
}