import React from 'react'

class Menu extends React.Component{

  state = {}//end of state


  render(){
    return(
    <div>
      <ul>
        <li><button onClick={() => this.props.ChangeView('allBooks')}>Browse</button></li>
        <li><button onClick={() => this.props.ChangeView('CheckedOut')}>Checked Out</button></li>
        <li><button onClick={(e) => this.props.ChangeView('Reserved')}>Reserved</button></li>
      </ul>
    </div>)
  }//end of render
}//end of Menu

export default Menu
