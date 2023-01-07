import React, {useMemo, useState} from "react";
export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
const [a, setA] = useState<number>(5)
const [b, setB] = useState<number>(5)

let resultA = 1
let resultB = 1

 resultA = useMemo(() => {
     let tempResult = 1
     for (let i = 1; i <= a; i++) {
         let fake = 0
         while (fake < 10000000) {
             fake++
             const fakeValue = Math.random()
         }
         tempResult = tempResult * i
     }
     return tempResult

 }, [a])  //если а не поменялось, не перезапускай callback

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for a {resultA}</div>
        <div>Result for b {resultB}</div>
    </>
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('USERS Secret')
    return <div>
        {props.users.map((u,i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)

export const HelpToReactMemo = () => {
    console.log('HelpToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Egor', 'Eva'])

    const newArr = useMemo(() => {
        const newArr =  users.filter(u => u.toLowerCase().indexOf('e') > - 1)
       return newArr

    }, [users])//если не добавить зависимость [users], то посчитает только раз и в кеш -- no counter
//sort, map, filter - перерисовывает
    return <>
        <button onClick={() => setCounter(counter+1)}>+</button>
        <button onClick={() => setCounter(counter-1)}>-</button>
        {counter}

        <Users users={newArr}/>
    </>
}