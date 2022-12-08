import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
}
const callback = action('accordion mode change event fired')


export const UnCollapsedMode = () => <Accordion collapsed={false} titleValue={'User'} onClick={callback}/>

export const ModeChanging = () =>{
    const [value, setValue] = useState<boolean>(false)
    return <Accordion titleValue={'User'} collapsed={value} onClick={() => setValue(!value)} />
}