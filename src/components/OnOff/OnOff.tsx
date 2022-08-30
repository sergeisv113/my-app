import React, {useState} from "react";
// import './OnOff.css';

type ValueType = {
    // on: boolean
}
export const OnOff = (props: ValueType) => {
    console.log('OnOff rendering')
    let [on, setOn] = useState(false)

    console.log('on: ' + on)
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        display: 'inline-block',
        // backgroundColor: props.on ? 'green' : 'white'
        backgroundColor: on ? 'green' : 'white'
    //    props.on===true
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '5px',
        // backgroundColor: props.on ? 'white' : 'red'
        backgroundColor: on ? 'white' : 'red'
    };
    const  indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '5px',
        // backgroundColor: props.on ? 'green' : 'red'
        backgroundColor: on ? 'green' : 'red'
    }
return (

    <div>
        <div style={onStyle} onClick={() => {setOn(true)}}>ON</div>
        <div style={offStyle} onClick={() => {setOn(false)}}>OFF</div>
        <div style={indicatorStyle}></div>
    </div>
)
};




