import React, {useState} from 'react';

type RatingPropsType = {
    // value: number  ||
    // value: 0|1|2|3|4|5
}
export const UnControlledRating = (props: RatingPropsType) => {
    console.log('Rating rendering')
let [value, setValue] = useState(0)
    return (
        <div>
            <Star selected={value > 0}/><button onClick={() => {setValue(1)}}></button>
            <Star selected={value > 1}/><button onClick={() => {setValue(2)}}></button>
            <Star selected={value > 2}/><button onClick={() => {setValue(3)}}></button>
            <Star selected={value > 3}/><button onClick={() => {setValue(4)}}></button>
            <Star selected={value > 4}/><button onClick={() => {setValue(5)}}></button>
        </div>
    );
}
type  StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    // debugger
    console.log('Star rendering')
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }
}

