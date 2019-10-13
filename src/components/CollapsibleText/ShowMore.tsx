import React from "react";
import { ShowMoreButton } from "./CollapsibleText.style";


interface IShowMore {
    onClick(e: React.MouseEvent): void;
}

export const ShowMore = (props: IShowMore) => {
    return (<ShowMoreButton onClick={props.onClick}>ShowMore</ShowMoreButton>)
}