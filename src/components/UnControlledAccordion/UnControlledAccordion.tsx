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
            <AccordionTitle title={props.titleValue}/>
             <button onClick={() => {setCollapsed(true)}}>TOGGLE</button>
            {!collapsed && <AccordionBody/>}

            {/*{!props.collapsed && <AccordionBody/>}*/}
            {/*если не свернут, покажи AccordionBody*/}
            {/*{props.collapsed === true && <AccordionBody/>} no menu */}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3>{props.title}</h3>
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
