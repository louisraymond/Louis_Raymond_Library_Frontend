import React from 'react'

class SearchBar extends React.Component {
  state= {
    searchTerm:""
  }

  updateSearchTerm = (searchTerm)=> {
    this.setState({searchTerm})
  }

  render(){
    return(
    <form onSubmit={(e) => {
        e.preventDefault()
        this.props.search(this.state.searchTerm)}
      }>
      <input onChange={this.updateSearchTerm}/>
    </form>
  )}
}

export default SearchBar
