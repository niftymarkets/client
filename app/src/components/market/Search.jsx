import React, { Component } from 'react'
import styled from 'styled-components'

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
      <SearchWrapper>
        <i class='fas fa-search' />
        <input
          type='text'
          placeholder='Search...'
          ref={this.searchRef}
          onChange={() => this.searchItems()}
        />
        <i class='fas fa-times' onClick={() => this.clearSearch()} />
      </SearchWrapper>
    )
  }
}

const SearchWrapper = styled.div`
  padding: 10px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;

  i {
    color: #0299a0;
    padding: 5px 10px;
    cursor: pointer;
  }

  input {
    border: none;
    width: 100%;
    color: transparent;
    background: #212b38;
    font-family: 'Ubuntu', sans-serif;
    &:focus {
      outline: none;
    }
  }
`

export default Search
