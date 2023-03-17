import {useState, createContext} from 'react';
import BookCreate from '../components/BookCreate';

const BookContext = CreateContext();

function Provider ({children}){
    cosnt [count, setCount] = useState(0);
    const ValueToShare={
        count,
        incrementCount: () => {
            setCount(count + 1);
          },
}
return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BookContext;