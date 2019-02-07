import React from 'react'

import Book from '../Components/Book'
import Menu from '../Components/Menu'
import SearchBar from '../Components/SearchBar'

class BookContainer extends React.Component{



  state = {
    allBooks:[],
    view: 'allBooks',
    searchTerm:""
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

  renderBooks = (desiredView='allBooks',term="") =>{
    if (desiredView ==='allBooks') {
      return this.state.allBooks
        .map(book =>{
          return <Book book={book}/>})
    }else if (desiredView === "search") {
      return this.state.allBooks
        .filter(book => console.log(book.title.toLowerCase().includes(term.toLowerCase())|book.author.toLowerCase().includes(term.toLowerCase())))
        .map(book => <Book book={book}/>)
    }else {
      return (this.state.allBooks
        .filter(book => book.availability === desiredView)
        .map(book =><Book book={book}/>))
    }//end of if statement
  }//end of render books

  ChangeView = (input) =>{
    this.setState({view:input})
  }


  search = (term) => {
    term = term.toString()
     this.setState({
       view:"search",
       searchTerm:term})
  }

  componentDidMount(){
    fetch(`https://raw.githubusercontent.com/JumpWork/100-best-books/master/books.json`)
      .then(data => data.json())
      .then((data) =>this.mockDatabase(data))
      .then(allBooks => this.setState({allBooks}))
      .then(() =>  this.renderBooks())
  }//This fetches all the books and places them in state under this.state.allBooks

      render(){
        return(
      <div>
        <SearchBar search={this.search}/>
        <Menu ChangeView={this.ChangeView}/>
        {this.renderBooks(this.state.view,this.state.searchTerm)}
      </div>)

      }//end of render

}//end of BookContainer

export default BookContainer
