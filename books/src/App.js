import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App(){
    const [books, setBooks] = useState ([]);
    const fetchBooks = async ()=>{
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }
    useEffect(()=>{
        fetchBooks();
    }, []);
    const editBookById = async (id,newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title: newTitle,
        });

        const updateBooks = books.map ((book) =>{
            if (book.id === id){
                return {...book, ...response.data}; //...response.data: para que al actuliazar diferentes prop de un obj x diff users no haya problemas.
            }return book;
        })
        setBooks(updateBooks);
    }
    const deleteBookById = async(id) =>{
        const response = axios.delete(`http://localhost:3001/books/${id}`);
        const updateBooks = books.filter((book)=>{
            return book.id !== id;
        })
        setBooks(updateBooks);
    }
    const createBook = async (title) =>{
        const response = await axios.post('http://localhost:3001/books',{
            title
        })
        const updateBooks = [
            ...books,
            response.data
        ];
        setBooks(updateBooks);
    };

    return (<div className="app">
        <h1>Reading List</h1>
        <BookList books={books} onEdit={editBookById} onDelete={deleteBookById}/>
        <BookCreate onCreate={createBook}/>
    </div>)
}

export default App;