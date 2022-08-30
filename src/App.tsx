import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";


//function declaration
function App() {
    //что то полезное

    //обязан вернуть JSX(html-подобный js)
    console.log('App rendering')
    return (
        <div>
            {/*<PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article1
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            Article2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            {/*<OnOff on={true}/>*/}
            <OnOff />
            <UnControlledAccordion titleValue={'Menu'}/>
            <UnControlledAccordion titleValue={'Users'}/>
            <UnControlledRating/>
            <UnControlledRating/>
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
