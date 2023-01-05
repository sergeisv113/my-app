import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";
import SelectStories from "./components/Select/Select.stories";
import {Select} from "./components/Select/Select";


//function declaration
function App() {

let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
let [switchOn, setSwitchOn] = useState(false)
    //обязан вернуть JSX(html-подобный js)
    console.log('App rendering')

    return (
        <div className={'App'}>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>

            Article1
            <UnControlledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
{/*            <Accordion titleValue={"Menu"}
                       items={items}
                       collapsed={accordionCollapsed}onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}
            />
            <Accordion titleValue={"Users"}
                        items={items}
                       collapsed={accordionCollapsed}
             onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}
            />*/}
            Article2

          {/*  <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}

            <OnOff on={switchOn} onChange={setSwitchOn}/>
           {/* <OnOff on={switchOn} onChange={(on) => setSwitchOn(on)}/>*/}
            {/*controlled element in props*/}
            {/*<UnControlledOnOff />*/}

            <UnControlledAccordion titleValue={'Menu'}/>
            <UnControlledAccordion titleValue={'Users'}/>
{/*
            <UnControlledRating />
            <UnControlledRating />
*/}
           {/* <Select value={}
                    onChange={}
                    items={}
            />*/}
        </div>
    );
}
type PageTitlePropsTitle = {
    title: string
}
function PageTitle(props: PageTitlePropsTitle) {
    console.log('App rendering')
    return (
        <h1>{props.title}</h1>
    )
}
export default App;
