import React from 'react'

class Book extends React.Component{

  state = {
    availability:this.props.book.availability
  }//end of state

  DisplayPictureOrButtons = (isClicked) =>{
  if (isClicked === true){
    return (
      <div id='Card' onClick={this.handleClick}>
        <button  onClick={(e)=>this.props.requestBook(this.props.book)}>Request</button>
      </div>)
  }else{
    return (
      <div id='Card' onClick={this.handleClick}>
        <img alt='' src={'http://www.100bestbooks.xyz/static/' + this.props.book.imageLink}/>
      </div>)
    }
  }//end of DisplayPictureOrButtons

  render(){
    return(
      <span>
        {this.DisplayPictureOrButtons(false)}
        <ul>
          <li> {this.props.book.title} </li>
          <li> {this.props.book.author} </li>
          <li>{this.props.book.availability} </li>
        </ul>
      </span>)
  }//end of render

}//end of Book

export default Book
