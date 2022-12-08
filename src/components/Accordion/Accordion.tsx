import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean//  collapsed? передачи props может не быть
    onClick: () => void
}
/*export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    if (props.collapsed)
    return (
        <div>
            {/!*onFocus*!/}
            <AccordionTitle title={props.titleValue}/>
        </div>
    )
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    );
}*/
export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    return (
        <div>
            {/*let a = true && false && true */}
            {/*a = false первое фолс значение*/}
            <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody/>}

            {/*{props.collapsed === false && <AccordionBody/>}*/}
            {/*если не свернут, покажи AccordionBody*/}
            {/*{props.collapsed === true && <AccordionBody/>} no menu */}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={(e) => props.onClick()}>{props.title}</h3>
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
