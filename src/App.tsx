import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

//function declaration
function App() {
    //что то полезное

    //обязан вернуть JSX(html-подобный js)
    console.log('App rendering')
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}
function AppTitle() {
    console.log('App rendering')
    return (
        <>This is APP component</>
    )
}


export default App;
