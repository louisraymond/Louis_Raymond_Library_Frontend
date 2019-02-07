import React from 'react'

class SearchBar extends React.Component {
  state= {
    searchTerm:""
  }

  updateSearchTerm = (event) => {
     this.setState({searchTerm : event.target.value})
   }

  render(){
    return(
    <form onSubmit={(e) => {
        e.preventDefault()
        this.props.search(this.state.searchTerm)}
      }>
      <input onChange={(e)=>this.updateSearchTerm(e)}/>
    </form>
  )}
}

export default SearchBar
