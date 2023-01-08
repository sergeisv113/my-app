import React, {useEffect, useState} from 'react';

type PropsType = {}
const get2dig=(num: number) => num < 10 ? '0' + num : num

export const Clock = (props: PropsType) => {
    const [date, setDate] = useState(new Date())

useEffect(() => {

  const intervalID =  setInterval(() => {
        setDate(new Date())
    }, 1000);

   return () => {
       clearInterval(intervalID)//delete clock effect
   }
}, [])// запуск один раз


    const secondsString = get2dig(date.getSeconds())
    const minutesString = get2dig(date.getMinutes())
    const hoursString = get2dig(date.getHours())

    return (
        <div>
            <span>{hoursString}</span>
            :
            <span>{minutesString}</span>
            :
            <span>{secondsString}</span>
        </div>
    );
};

