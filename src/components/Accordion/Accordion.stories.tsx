import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
}
const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')


export const MenuCollapsedMode = () => <Accordion
    collapsed={true}
    titleValue={'Menu'}
    onChange={callback}
    items={[]}
    onClick={onClickCallback}
/>
export const UsersUnCollapsedMode = () => <Accordion
    collapsed={false}
    titleValue={'Users'}
    onChange={callback}
    items={[{title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4},]}
    onClick={onClickCallback}
/>

export const ModeChanging = () =>{
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'User'}
                      items={[
                          {title: 'Dimych', value: 1},
                          {title: 'Valera', value: 2},
                          {title: 'Artem', value: 3},
                          {title: 'Viktor', value: 4},
                      ]}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      onClick={(value) => alert(`user with ID ${value} should be happy`)}
    />
}