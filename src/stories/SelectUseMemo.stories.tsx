import React, {useMemo, useState} from 'react';

export default {
    title: 'Select UseMemo ',
}

type CityType = {
    cityName: string
    cityCountry: number
    popular: number
}
const CitySelect = (props: {city: Array<CityType>}) => {
    console.log('USERS Secret')
    return <div>
        <select>
            {props.city.map((c,i) => <option value="" key={i}>{c.cityName}</option>)}
        </select>
    </div>
}

const City = React.memo(CitySelect)
export const SelectUseMemo = () => {
    console.log('HelpToReactMemo')
    const [counter, setCounter] = useState(0)
    const [city, setCity] = useState([
        {cityName: 'Minsk', cityCountry: 1, popular: 5500000},
        {cityName: 'Brest', cityCountry: 1, popular: 1500000},
        {cityName: 'Gomel', cityCountry: 1, popular: 3000000},
        {cityName: 'Moscow', cityCountry: 2, popular: 13500000},
        {cityName: 'Sankt-Petersburg', cityCountry: 2, popular: 10000000},
        {cityName: 'Belgorod', cityCountry: 2, popular: 2500000},
        {cityName: 'Kiev', cityCountry: 3, popular: 9500000},
        {cityName: 'Kharkow', cityCountry: 3, popular: 2000000},
        {cityName: 'Dnepropetrowsk', cityCountry: 3, popular: 1000000},
    ])


    const newArr = useMemo(() => {
        const newArr =  city.filter(c => c.cityName.toLowerCase().indexOf('m') > - 1)
        return newArr

    }, [city])
    const newArr2 = useMemo(() => {
        const newArr =  city.filter(c => c.cityCountry === 1)
        return newArr

    }, [city])
    const newArr3 = useMemo(() => {
        const newArr =  city.filter(c => c.popular >= 10000000)
        return newArr

    }, [city])

    return <>
        <div>
            <button onClick={() => setCounter(counter+1)}>+</button>
            <button onClick={() => setCounter(counter-1)}>-</button>
            {counter}
        </div>
        <div>
            <h2>City = 'm'</h2>
            <City city={newArr}/>
        </div>
        <div>
            <h2>City in 1 country = 'Belarus'</h2>
            <City city={newArr2}/>
        </div>
        <div>
            <h2>City popular = 10 million</h2>
            <City city={newArr3}/>
        </div>
    </>
}
