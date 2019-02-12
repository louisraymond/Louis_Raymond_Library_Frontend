import React from 'react'

import Book from '../Components/Book'
import Menu from '../Components/Menu'
import SearchBar from '../Components/SearchBar'


class LibraryContainer extends React.Component{


  state = {
    allBooks:[],
    view: 'allBooks',
    searchTerm:"",
  }//end of state

  requestOrReturnBook = (book) => {
    let index = this.state.allBooks.indexOf(book)
    let cloneArray = this.state.allBooks

    if (book.availability ==='Available') {
      cloneArray[index].dueDate =  new Date(Date .now() + 12096e5)
      cloneArray[index].availability = 'CheckedOut'
      alert('Thanks for Checking this book out!')
    } else if (book.availability ==='Unavailable'){
      cloneArray[index].availability = 'Reserved'
      alert(`You have reserved this book and can claim it on  ${book.dueDate.getDate()}/${book.dueDate.getMonth()}/${book.dueDate.getFullYear()}.`)
    } else if(book.availability ==='Reserved'){
        alert(`This Book Is No longer Reserved For You`)
        cloneArray[index].availability = 'Unavailable'
    }else if(book.availability ==='CheckedOut'){
      alert('thanks for returning this book!')
      cloneArray[index].dueDate= null
      cloneArray[index].availability = 'Available'
    }
    this.setState({allBooks:cloneArray})
  }

  mockDatabase = (array) => {
    array.map((book)=>{
      let chance= Math.floor(Math.random() * 10 + 1)
      //random chance out of 10.
        book.availability ='Available'
        book.dueDate =  null
      if (chance > 7) {
        book.availability ='Unavailable'
        book.dueDate =  new Date(Date.now() + 12096e5)
        //book is unavailble, but can be obtained after the due date
      }
      if (chance >9){
        book.availability ='Reserved'
        book.dueDate =  new Date(Date.now() + 2*(12096e5))
        //book is unavailble but you have reserved it
      }
      if (chance < 1){
        book.availability = 'CheckedOut'
        book.dueDate =  new Date(Date.now() + 2*(12096e5))
        //you currently have taken this book out, you have to return it by a due date
      }
    })
    return array
  }// end of mockDatabase

  renderBooks = (desiredView='allBooks',term="") =>{
    if (desiredView ==='allBooks') {
      return this.state.allBooks
        .map(book =>{
          return <Book book={book} availability={book.availability} requestOrReturnBook={this.requestOrReturnBook}/>})
    }else if (desiredView === "search") {
      return this.state.allBooks
        .filter(book => book.title.toLowerCase().includes(term.toLowerCase())|book.author.toLowerCase().includes(term.toLowerCase()))
        .map(book => <Book book={book} availability={book.availability} requestOrReturnBook={this.requestOrReturnBook}/>)
    }else {
      return (this.state.allBooks
        .filter(book => book.availability === desiredView)
        .map(book =><Book book={book} availability={book.availability} requestOrReturnBook={this.requestOrReturnBook}/>))
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
  }//end of search

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

}//end of LibraryContainer

export default LibraryContainer
