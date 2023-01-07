import React, {useState} from "react";

export default {
    title: 'React.memo demo',
}

const NewMessagesCounter = (props: {count: number}) => {
  return <div>{props.count}</div>
}
// type UsersType = {users: Array<any>}
const UsersSecret = (props: {users: Array<string>}) => {
    console.log('USERS')
    return <div>
        {props.users.map((u,i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Egor', 'Eva'])
    const addUser = () => {
      //  no mutable Array
      const newUser = [...users, 'New user' + new Date().getTime()]
      setUsers(newUser)
    }

    return <>
        <button onClick={() => setCounter(counter+1)}>+</button>
        <button onClick={() => setCounter(counter-1)}>-</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}