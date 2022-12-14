import React from "react";
// import './OnOff.css';

type ValueType = {
    on: boolean
    onChange: (on: boolean) => void
}
export const OnOff = (props: ValueType) => {
    console.log('OnOff rendering')

    console.log('on: ' + props.on)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'white'
        //    props.on === true
        //controlled element

    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '5px',
        backgroundColor: props.on ? 'white' : 'red'
    };
    const  indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }
return (

    <div>
        <div style={onStyle} onClick={() => {props.onChange(true)}}>ON</div>
        <div style={offStyle} onClick={() => {props.onChange(false)}}>OFF</div>
        <div style={indicatorStyle}></div>
    </div>
)
};




