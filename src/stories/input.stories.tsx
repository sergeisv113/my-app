import React, {ChangeEvent, useRef, useState} from "react";

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

