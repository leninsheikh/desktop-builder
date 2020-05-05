import React from "react";
import ComponentItem from "./ComponentItem";

export default props => {
    return (
        <>
            <ComponentItem type='CPU'/>
            <ComponentItem type='Motherboard'/>
            <ComponentItem type='RAM' empty={true}/>
        </>
    )
}
