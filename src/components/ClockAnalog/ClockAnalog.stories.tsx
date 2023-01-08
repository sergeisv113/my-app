import React from 'react';
import {ClockAnalog} from "./ClockAnalog";
import {ClockAnalog1} from "./ClockAnalog1";
import {ClockAnalog2} from "./ClockAnalog2";


export default {
    title: 'ClockAnalog',
    component: ClockAnalog,
}

export const Example2 = () =>{
    return (
        <div>
            <ClockAnalog />
            <ClockAnalog1 />
        </div>
    )
}
export const analogExample = () =>{
    return <ClockAnalog2 mode={'analog'}/>
}
export const digitalExample = () =>{
    return  <ClockAnalog2 mode={'digital'}/>
}

