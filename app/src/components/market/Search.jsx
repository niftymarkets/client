import React, { Component } from 'react'

class Search extends Component {
  searchRef = React.createRef()

  searchItems = () => {
    this.props.searchItems(this.searchRef.current.value)
  }

  clearSearch = () => {
    this.props.clearSearch()
    this.searchRef.current.value = ''
  }

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='Search'
          ref={this.searchRef}
          onChange={() => this.searchItems()}
        />
        <button onClick={() => this.clearSearch()}>Clear Search</button>
      </div>
    )
  }
}

export default Search
