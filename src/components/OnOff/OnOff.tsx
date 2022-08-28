import React from "react";
import './OnOff.css';

type ValueType = {
    myValue: boolean
}
export const OnOff = (props: ValueType) => {
if (props.myValue) {
     return (  <div>
            <span>
                <button id={'button1'} className={'on'}>ON</button>
                <button id={'button2'}>OFF</button>
                <button id={'button3'} className={'on' + ' ' + 'radial'}>.</button>
            </span>
        </div>)
} else  {
    return (
        <div>

            <span>
                <button id={'button1'}>ON</button>
                <button id={'button2'} className={'off'}>OFF</button>
                <button id={'button3'} className={'off' + ' ' + 'radial'}>.</button>
            </span>
        </div>
    );
}

};

