import React from 'react'

class Menu extends React.Component{

  state = {}//end of state


  render(){
    return(
    <div>
      <ul>
        <li><button onClick={() => this.props.ChangeView('allBooks')}>Browse</button></li>
        <li><button onClick={() => this.props.ChangeView('CheckedOut')}> See Your Checked Out Books!</button></li>
        <li><button onClick={() => this.props.ChangeView('Reserved')}>See Your Reserved Books!</button></li>
      </ul>
    </div>)
  }//end of render
}//end of Menu

export default Menu
