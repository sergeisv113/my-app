import React, {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'input',

}
export const UnControlledInput = () => <input/>
export const TreackValueOfUnControlledInput = () => {
    const [value, setValue] = useState('')
    const onСhange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return <><input value={value} onChange={onСhange}/> - {value}</>
}
export const GetValueOfUnControlledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
       }
    return <><input ref={inputRef}/> <button onClick={save}>save</button> - actual value: {value}</>
}

export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>

export const ControlledInput = () => {
 const [parentValue, setParentValue] = useState('')

    // return <input value={parentValue} onChange={action('want to change')}/>
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {setParentValue(e.currentTarget.value)}
    return <input value={parentValue} onChange={onChange}/>
    // parentValue peredaet roditel
}
export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {setParentValue(e.currentTarget.checked)}
    return <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<undefined | string>(undefined)//('2')=Moscow

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)//select
    }
    return <select value={parentValue} onChange={onChange}>
        <option >none</option>
        <option value={'1'}>Minsk</option>
        <option value={"2"}>Kiev</option>
        <option value={"3"}>Moscow</option>
    </select>
}