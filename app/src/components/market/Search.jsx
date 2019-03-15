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
        <SearchIcons className='fas fa-search' />
        <InputField
          type='text'
          placeholder='Search...'
          ref={this.searchRef}
          onChange={() => this.searchItems()}
        />
        <SearchIcons
          className='fas fa-times'
          onClick={() => this.clearSearch()}
        />
      </SearchWrapper>
    )
  }
}

const SearchWrapper = styled.div`
  margin-top: 1rem;
  padding: 10px 0;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  background: #212b38;
  margin: 1rem 10px 0 10px;
`

const SearchIcons = styled.i`
  color: #0299a0;
  padding: 5px 5px;
  font-size: 0.9rem;
  &.fa-times {
    cursor: pointer;
  }
`

const InputField = styled.input`
    border: none;
    width: 100%;
    background: #212b38;
    font-family: 'Ubuntu', sans-serif;
    &:focus {
      outline: none;
      color: #0299a0;
    }
    ::placeholder {
      color: white;
    }
  }
`

export default Search
