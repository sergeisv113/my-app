import React, {useState} from 'react';
import {RatingValueType} from "../Rating/Rating";

type RatingPropsType = {
    // value: number  ||
     //value: 0|1|2|3|4|5
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}
export const UnControlledRating = (props: RatingPropsType) => {
    console.log('Rating rendering')
let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)
    return (
        /*<div>
            <Star selected={value > 0}/><button onClick={() => {setValue(1)}}>1</button>
            <Star selected={value > 1}/><button onClick={() => {setValue(2)}}>2</button>
            <Star selected={value > 2}/><button onClick={() => {setValue(3)}}>3</button>
            <Star selected={value > 3}/><button onClick={() => {setValue(4)}}>4</button>
            <Star selected={value > 4}/><button onClick={() => {setValue(5)}}>5</button>
        </div>*/
        /*<div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </div>  ||   */
        <div>
            <Star selected={value > 0} setValue={() => {setValue(1); props.onChange(1)}} />
            <Star selected={value > 1} setValue={() => {setValue(2); props.onChange(2)}} />
            <Star selected={value > 2} setValue={() => {setValue(3); props.onChange(3)}} />
            <Star selected={value > 3} setValue={() => {setValue(4); props.onChange(4)}} />
            <Star selected={value > 4} setValue={() => {setValue(5); props.onChange(5)}} />
        </div>
    );
}
type  StarPropsType = {
    // value: 1|2|3|4|5
    selected: boolean
    // setValue: (value: 1|2|3|4|5 ) => void
    setValue: () => void
}

function Star(props: StarPropsType) {
    // debugger
    console.log('Star rendering')
 /*   if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }*/
        // return <span onClick={ () => {props.setValue(props.value)}}>
        return <span onClick={ () => {props.setValue()}}>
           {props.selected ? <b>star </b> : 'star '}
        </span>
}

