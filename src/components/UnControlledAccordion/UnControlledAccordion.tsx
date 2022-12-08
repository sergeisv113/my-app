import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean//  collapsed? передачи props может не быть

}

export function UnControlledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    let [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=> {setCollapsed(!collapsed)}}/>
             {/*<button onClick={() => {setCollapsed(!collapsed)}}>TOGGLE</button>*/}
            {/*value противоплоложное collapsed*/}
            {!collapsed && <AccordionBody/>}
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
