import React, {useState} from "react";

type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export const UnControlledOnOff = (props: PropsType) => {
    console.log('OnOff rendering')
    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    console.log('on: ' + on)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white'
    
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '5px',
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
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }
return (

    <div>
        <div style={onStyle} onClick={onClicked} >ON</div>
        <div style={offStyle} onClick={offClicked}>OFF</div>
        <div style={indicatorStyle}></div>
    </div>
)
};




