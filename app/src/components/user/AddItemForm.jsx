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
          <Heading>Add new item</Heading>
          <InputField
            required
            value={this.props.addItem.name}
            onChange={this.onChangeHandler}
            name='name'
            type='text'
            placeholder='Enter item name'
          />

          <InputField
            required
            value={this.props.addItem.price}
            onChange={this.onChangeHandler}
            name='price'
            type='text'
            placeholder='Enter item price'
          />

          <InputField
            required
            value={this.props.addItem.description}
            onChange={this.onChangeHandler}
            name='description'
            type='text'
            placeholder='Enter item description'
          />

          <SelectField required name='category' onChange={this.onChangeHandler}>
            <option defaultValue value='Outfits'>
              Outfits
            </option>
            <option value='Emotes'>Emotes</option>
            <option value='Toys'>Toys</option>
            <option value='Pets'>Pets</option>
          </SelectField>

          <InputField
            required
            value={this.props.addItem.img_url}
            onChange={this.onChangeHandler}
            name='img_url'
            type='text'
            placeholder='Enter image URL'
          />

          <Button onClick={this.onClickHandler}>Add new item</Button>
          <Button onClick={this.props.toggleAdding}>Cancel</Button>
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
`

// USE THESE OBJECTS TO STYLE THE MODAL
const overlay = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}
  
const content = {
  position: 'absolute',
  maxWidth: '500px',
  margin: '6rem auto 0 auto',
  padding: '2rem 3rem',
  borderRadius: '0.5rem',
  border: '1px solid #161c24',
  background: '#161c24',
  overflow: 'auto',
  WebkitOverflowScrolling: 'touch',
  outline: 'none',

}

const Heading = styled.h3`
  color: #29f3db;
`

const InputField = styled.input`
  width: 100%;
  padding: 2rem 0;
  background: #161c24;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  outline: none;
  color: #fcfcfc;
  font-family: 'Ubuntu', sans-serif;
`
const Button = styled.button`
  margin-top: 1.5rem;
  background: #212b38;
  border: 0;
  width: 100%;
  height: 4rem;
  border-radius: 0.3rem;
  color: #29f3db;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  outline: none;
  -khtml-user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  &:hover {
    background: #85bdbf;
  }
`

const SelectField = styled.select`
  width: 100%;
  padding: 2rem 0;
  background: #161c24;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  outline: none;
  color: #fcfcfc;
  font-family: 'Ubuntu', sans-serif;
`
