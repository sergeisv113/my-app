import React, {useEffect, useState} from 'react';
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css';



export function ClockAnalog1 ()  {
    const [value, setValue] = useState(new Date())

    useEffect(() => {
        let interval =  setInterval(() => {
            setValue(new Date())
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div >
            <p>Current time:</p>
            <Clock value={value}/>
        </div>
    );
};

