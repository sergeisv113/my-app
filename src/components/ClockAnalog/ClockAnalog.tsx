import React, {useEffect, useState} from 'react';
import styles from './ClockAnalog.module.css'


export function ClockAnalog ()  {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const hr = document.querySelector('#hr');
        const mn = document.querySelector('#mn');
        const sc = document.querySelector('#sc');
        const deg = 6;

       let interval =  setInterval(() => {
           let day = new Date();
           let hh = day.getHours() * 30;
           let mm = day.getMinutes() * deg;
           let ss = day.getSeconds() * deg;

           hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
           mn.style.transform = `rotateZ(${mm}deg)`;
           sc.style.transform = `rotateZ(${ss}deg)`;
           setDate(new Date)
       }, 0)

        return () => {
           clearInterval(interval)
       }
    }, [])

    return (
        <div className={styles.clock}>
            <div className={styles.hour}>
                <div className={styles.hr} id={'hr'}></div>
            </div>
            <div className={styles.min} id={'mn'}>
                <div className={styles.mn}></div>
            </div>
            <div className={styles.sec} id={'sc'}>
                <div className={styles.sc}></div>
            </div>
        </div>
    );
};


/*
import React, {useEffect, useState} from 'react';
// import styles from './ClockAnalog.module.css'
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css';



export function ClockAnalog ()  {
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
};*/
