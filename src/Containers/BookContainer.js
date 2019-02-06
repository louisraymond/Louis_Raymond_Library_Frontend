import React from 'react'

import Book from '../Components/Book'

class BookContainer extends React.Component{


  state = {
    allBooks:[],
  }//end of state


  mockDatabase = (array) => {
    array.map((book)=>{
      let chance= Math.floor(Math.random() * 10 + 1)
      //random chance out of 10.
      if (chance < 7) {
        book.availability ='Available'

      }
      if (chance > 7) {
        book.availability ='Unavailable'
        //book is unavailble, but able to be reserved
      }
      if (chance >9){
        book.availability ='Reserved'
        //book is unavailble and has been reserved by another user
      }
      if (chance < 1){
        book.availability = 'CheckedOut'
        //you currently have taken this book out, you have to return it by a due date
      }
    })
    return array
  }// end of mockDatabase

  renderBooks = (desiredView='allBooks') =>{
    if (desiredView ==='allBooks') {
      return this.state.allBooks
        .map(book =>{
          console.log(book.availability)
          return <Book book={book}/>})
    } else {
      return this.state.allBooks
        .filter(book => book.availability === desiredView)
        .map(book =><Book book={book}/>)
    }//end of if statement
  }//end of render books


  componentDidMount(){
    fetch(`https://raw.githubusercontent.com/JumpWork/100-best-books/master/books.json`)
      .then(data => data.json())
      .then((data) =>this.mockDatabase(data))
      .then(allBooks => this.setState({allBooks}))
      .then(() =>  this.renderBooks())
  }//This fetches all the books and places them in state under this.state.allBooks

      render(){
        return(<div>{this.renderBooks()}</div>)
      }//end of render

}//end of BookContainer

export default BookContainer
