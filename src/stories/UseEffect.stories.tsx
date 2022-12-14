import React, {useEffect, useState} from "react";
export default {
    title: 'useEffect'
}

export const SimpleExample= () => {
    console.log('Example1')
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementId
        //document.title = 'Users '
        document.title = counter.toString()
    }, [counter])// если counter неизмен, то не запускать ф-ю

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })    // запускается при каждом рендеринге страницы

        useEffect(() => {
            console.log('useEffect only first render(componentDidMount)')
            document.title = counter.toString()
        }, [])// смонтир 1 раз, при монтировании компоненты, => при ее изменен, срабатывать не будет

    return <>
        Hello, {counter} - {fake}
        <button onClick={() => setFake(fake + 1)}>fake +</button>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
    </>
}

export const SetTimeoutExample = () => {
    //обновить через секунду
    console.log('SetTimeoutExample')
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

/*
    useEffect(() => {
        setTimeout(() => {
            console.log('SetTimeout')
            document.title = counter.toString()
        }, 1000)//измен тайтл через 1 сек
    }, [counter])// || [props.counter]
*/

    useEffect(() => {
        setInterval(() => {
            console.log('setInterval:' + counter)
            setCounter(state => state + 1)// NO counter + 1
        }, 1000)//измен counter через 1 сек
    }, [])


    let a = new Date
    let b = `${a.getHours()} : ${a.getMinutes()} : ${a.getSeconds()}`
    useEffect(() => {
        setInterval(() => {
            setCounter(counter => counter + 1)// NO counter + 1
        }, 1000)//измен counter через 1 сек
    }, [])


    return <>
        <div>
            Hello, counter: {counter} - fake: {fake}
        </div>
        <div>{b} </div>
{/*
        <button onClick={() => setFake(fake + 1)}>fake +</button>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
*/}
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
        console.log('Component renderer ' + counter)
    useEffect(() => {
        console.log('Effect occurred - ' + counter)

        return () => {
            console.log('Reset effect ' + counter)

        }
    }, [counter])

    return <>
        Hello, counter: {counter} <button onClick={() =>{ setCounter(counter + 1)}}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')
    console.log()
    useEffect(() => {
        const handler = (e: KeyboardEvent ) => {
            console.log(e.key)
            // setText((state) => state + e.key)
            setText( text + e.key)
        }

        window.addEventListener('keypress', handler)
        return () => {
        window.removeEventListener('keypress', handler)
        }
    }, [text])

    return <>
        Hello, Typed text: {text}
    </>
}

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1)
    console.log()
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <>
        Hello, Typed text: {counter}
    </>
}