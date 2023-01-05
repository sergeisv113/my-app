import React from "react";

type  ItemType = {
    title: string
    value: any
}
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean//  collapsed? передачи props может не быть
    onChange: () => void
    items: Array<ItemType>
    onClick: (value: any) => void
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
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items}
                                                onClick={props.onClick}
            />}

            {/*{props.collapsed === false && <AccordionBody/>}*/}
            {/*если не свернут, покажи AccordionBody*/}
            {/*{props.collapsed === true && <AccordionBody/>} no menu */}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void

}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
    );
}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}
function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
        return (
            <ul>
                {props.items.map((i, index) => <li
                    onClick={() => {props.onClick(i.value)}}
                    key={index}>{i.title}</li>)}
            </ul>
        )
}
