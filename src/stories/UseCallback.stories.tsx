import React, {useCallback, useMemo, useState} from "react";
export default {
    title: 'useMemo'
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])


/*    const addBook = () => {
        console.log(books)
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }
    const memoizedAddBook = useMemo(() => {
       return addBook
    }, [books])//зависит от изменения books*/

    const memoizedAddBook = useCallback(() => {
            console.log(books)
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
    }, [books])//зависит от изменения books

    return <>
        <button onClick={() => setCounter(counter+1)}>+</button>
        {counter}

        <Book addBook={memoizedAddBook}/>
    </>
}

type BooksSecretType = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretType) => {
    console.log(' BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}
const Book = React.memo(BooksSecret)
