import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean//  collapsed? передачи props может не быть
}

/*const reducer = (state: boolean, action: ActionType) => {
        if (action.type === 'TOGGLE_COLLAPSED') {
            return !state
        }
    return state
}*/


export function UnControlledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={()=> {setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={props.titleValue} onClick={()=> {dispatch({type: TOGGLE_COLLAPSED})}}/>
             {/*<button onClick={() => {setCollapsed(!collapsed)}}>TOGGLE</button>*/}
            {/*value противоплоложное collapsed*/}
            {/*{!collapsed && <AccordionBody/>}*/}
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={ () => {props.onClick()}}>{props.title}</h3>
    );
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
