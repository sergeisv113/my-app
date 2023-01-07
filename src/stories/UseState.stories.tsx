import React, {useCallback, useMemo, useState} from "react";
export default {
    title: 'useState'
}

function generateData() {
 /*   const [a, setA] = useState<number>(5)
    let resultA = 1
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

    }, [a])*/
    //difficult counting
    return 342348525
}

export const Example1 = () => {
    console.log('Example1')
    // const initValue = useMemo(generateData, [])
    // const [counter, setCounter] = useState(0)//useState=[0, func(newValue)]
    // const [counter, setCounter] = useState(initValue)//useState=[342348525, func(newValue)]
    const [counter, setCounter] = useState(generateData)//useState=[342348525, func(newValue)]// useState приним ф-цию и ее инициализирует 1 раз
    const changer = (state: number) => {//=minireducer function
        return state + 1
      }

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}