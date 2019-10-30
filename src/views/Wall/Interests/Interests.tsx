import React from "react";
import { InterestsWrapper } from "./Interests.style";

export default class Interests extends React.Component
{
    render() {
        //const { arrayOfInterests } = this.props;
        return (<InterestsWrapper>
            <h1>Интересы-----------------</h1>
            {/* {arrayOfInterests.map(element => {
                return (<div>{element.Name}</div>);
            })} */}
        </InterestsWrapper>)
    }
}