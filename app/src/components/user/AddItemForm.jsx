import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal'
import styled from 'styled-components'
import { postNewItem, updateItemForm } from '../../actions/actionCreators'

const emptyItemForm = {
  owner: '',
  itemId: '',
  name: '',
  price: '',
  description: '',
  category: '',
  img_url: '',
  availability: ''
}

class ItemForm extends Component {
  onClickHandler = e => {
    e.preventDefault()
    this.props.postNewItem(this.props.addItem, this.props.id)
    this.props.updateItemForm(emptyItemForm)
    this.props.toggleAdding()
  }

  onChangeHandler = e => {
    this.props.updateItemForm({
      ...this.props.addItem,
      availability: 1,
      userId: this.props.id,
      username: this.props.username,
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (

      <ReactModal
        isOpen={this.props.handlingModal}
        ariaHideApp={false}
        style={{ overlay, content }}
      >
        <StyledForm autoComplete="off">

          <input
            required
            value={this.props.addItem.name}
            onChange={this.onChangeHandler}
            name='name'
            type='text'
            placeholder='Enter item name'
          />

          <input
            required
            value={this.props.addItem.price}
            onChange={this.onChangeHandler}
            name='price'
            type='text'
            placeholder='Enter item price'
          />

          <input
            required
            value={this.props.addItem.description}
            onChange={this.onChangeHandler}
            name='description'
            type='text'
            placeholder='Enter item description'
          />

          <select required name='category' onChange={this.onChangeHandler}>
            <option defaultValue value='Outfits'>
              Outfits
            </option>
            <option value='Emotes'>Emotes</option>
            <option value='Toys'>Toys</option>
            <option value='Pets'>Pets</option>
          </select>

          <input
            required
            value={this.props.addItem.img_url}
            onChange={this.onChangeHandler}
            name='img_url'
            type='text'
            placeholder='Enter image URL'
          />

          <button onClick={this.onClickHandler}>Add new item</button>
          <button onClick={this.props.toggleAdding}>Cancel</button>
        </StyledForm>
      </ReactModal>
    )
  }
}

const mapStateToProps = state => {
  return {
    addItem: state.user.addItem,
    id: state.user.userDetails.userId,
    username: state.user.userDetails.username,
    handlingModal: state.handlingModal
  }
}

export default connect(
  mapStateToProps,
  { postNewItem, updateItemForm }
)(ItemForm)

const StyledForm = styled.form`
  background-color: orange;
`

// USE THESE OBJECTS TO STYLE THE MODAL
const overlay = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  // backgroundColor: 'rgba(255, 255, 255, 0.75)'
  // opacity: 0.5,
}
  
const content = {
  position: 'absolute',
  top: '40px',
  left: '40px',
  right: '40px',
  bottom: '40px',
  border: '1px dashed #ccc',
  background: '#fff',
  overflow: 'auto',
  WebkitOverflowScrolling: 'touch',
  borderRadius: '4px',
  outline: 'none',
  padding: '20px'
}


