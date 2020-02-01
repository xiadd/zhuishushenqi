const { useState, useEffect } = React

function useFetchBooks () {
  const [books, setBooks] = useState([])
  const [status, setStatus] = useState('pending')
  useEffect(async () => {
    try {
      const res = await fetch('/books')
      const data = await res.json()
      setBooks(data.books)
      setStatus('done')
    } catch(err) {
      setStatus('error')
    }
  }, [])
  return {
    status,
    books
  }
}

function Book ({ book }) {
  return (
    <div className="single-book">
      <div className="book-cover">
        <img src={book.cover} alt={book.title} />
      </div>
      <div className="book-info">
        <p className="book-title">{book.title}</p>
        <p className="book-author">
          <span className="author">{book.author}</span>
          <span> | </span>
          <span className="cat">{book.cat}</span>
          <span> | </span>
          <span className="zt">{book.zt}</span>
        </p>
        <p className="book-shortIntro">{book.shortIntro}</p>
      </div>
    </div>
  )
}

function App () {
  const { books, status } = useFetchBooks()
  switch (status) {
    case 'pending':
      return (
        <div>请求数据中</div>
      )
    case 'error':
      return (
        <div>请求异常</div>
      )
    case 'done':
      return (
        <div className="example-books">
          {books.map(book => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      )
  }
  
}

ReactDOM.render(<App />, document.getElementById('example-content'))