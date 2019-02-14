import React from 'react'
import '../App.css';


import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';







class Menu extends React.Component{
  state = {}//end of state


  render(){
    return(
          <div className="sideMenu">
      <Drawer
              className='SideBar'
              variant="permanent"
              anchor="left"
            >
            <h1>The Library</h1>
            <Divider/>
            <Button onClick={() => this.props.ChangeView('allBooks')}>Browse all books</Button>
            <Button onClick={() => this.props.ChangeView('CheckedOut')}> See Your Checked Out Books!</Button>
            <Button onClick={() => this.props.ChangeView('Reserved')}>See Your Reserved Books!</Button>
            <Divider/>
            <Button>My Account</Button>
        </Drawer>
    </div>)
  }//end of render
}//end of Menu

export default Menu
