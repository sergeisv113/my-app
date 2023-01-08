import React, {useEffect, useState} from 'react';
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

export type ClockViewPropsType = {
    date: Date
}
type PropsType = {
    mode?: 'digital' | 'analog'
}

export const ClockAnalog2 = (props: PropsType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalID =  setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalID)//delete clock effect
        }
    }, [])// запуск один раз


let view;
switch (props.mode) {
    case 'analog':
        view = <AnalogClockView date={date}/>
        break;
    case 'digital':
    default:
        view = <DigitalClockView date={date}/>
}

    return (
        <div>
            {view}
           {/* {props.mode === 'digital' ? <>
                <span>{hoursString}</span>
                :
                <span>{minutesString}</span>
                :
                <span>{secondsString}</span>
            </> : <>ANALOG</>
            }*/}
        </div>
    );
};

