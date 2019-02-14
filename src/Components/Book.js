import React from 'react'
import Button from '@material-ui/core/Button';


class Book extends React.Component{


  requestOrReturnBook = () => {
    this.props.requestOrReturnBook(this.props.book)
  }//end of requestOrReturnBook

  buttonText = (book) => {
    if (this.props.book.availability==="CheckedOut"){
      return "Return Book"
    }else if (this.props.book.availability === 'Unavailable') {
      return `Reserve Book (Available from ${book.dueDate.getDate()}/${book.dueDate.getMonth()}/${book.dueDate.getFullYear()})`
    }else if (this.props.book.availability === 'Reserved') {
      return `Unreserve Book`
    }else if (this.props.book.availability === 'Available') {
      return 'Check Out'
    }

  }

  render(){
    return(
      <span onClick={this.handleClick}>
        <div id='Card' >
          <img alt='' src={'http://www.100bestbooks.xyz/static/' + this.props.book.imageLink}/>
        </div>
        <ul>
        <Button  onClick={this.requestOrReturnBook}>{this.buttonText(this.props.book)}</Button>
          <h3> {this.props.book.title} </h3>
          <h5> {this.props.book.author} </h5>
        </ul>
      </span>)
  }//end of render

}//end of Book

export default Book
