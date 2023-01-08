import React from "react";
import {ClockViewPropsType} from "./ClockAnalog2";

export const get2dig=(num: number) => num < 10 ? '0' + num : num

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    const secondsString = get2dig(date.getSeconds())
    const minutesString = get2dig(date.getMinutes())
    const hoursString = get2dig(date.getHours())

    return <>
        <span>{hoursString}</span>
        :
        <span>{minutesString}</span>
        :
        <span>{secondsString}</span>
    </>
}