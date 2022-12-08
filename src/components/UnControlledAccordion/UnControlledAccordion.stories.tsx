import React, {useState} from 'react';
import {UnControlledAccordion} from "./UnControlledAccordion";


export default {
    title: 'UnControlledAccordion',
    component: UnControlledAccordion,
}

export const ModeChanging = () =>{
    return <UnControlledAccordion titleValue={'User'} />
}