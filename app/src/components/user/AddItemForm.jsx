import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewItem, updateItemForm } from '../../actions/actionCreators';

const emptyItemForm = {
  owner: '',
  itemId: '',
  name: '',
  price: '',
  description: '',
  category: '',
  imgUrl: '',
  availability: '',
}

class ItemForm extends Component {
  onClickHandler = (e) => {
    e.preventDefault();
    this.props.postNewItem(this.props.addItem); // actionCreator that sends the POST request
    this.props.updateItemForm(emptyItemForm); // actionCreator that changes the addItem state object
  }

  onChangeHandler = (e) => {
    this.props.updateItemForm({ ...this.props.addItem , [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form autoComplete="off">

        <input
          value={this.props.addItem.name}
          onChange={this.onChangeHandler}
          name="name" type="text" placeholder="Enter item name">
        </input>

        <input
          value={this.props.addItem.price}
          onChange={this.onChangeHandler}
          name="price" type="text" placeholder="Enter item price">
        </input>

        <input
          value={this.props.addItem.description}
          onChange={this.onChangeHandler}
          name="description" type="text" placeholder="Enter item description">
        </input>
        
        <select
          name="category"
          onChange={this.onChangeHandler}
        >
          <option value="Outfits">Outfits</option>
          <option value="Emotes">Emotes</option>
          <option value="Toys">Toys</option>
          <option value="Pets">Pets</option>
        </select>
                
        <input
          value={this.props.addItem.imgUrl}
          onChange={this.onChangeHandler}
          name="imgUrl" type="text" placeholder="Enter image URL">
        </input>

        <input
          value={this.props.addItem.availability}
          onChange={this.onChangeHandler}
          name="availability" type="text" placeholder="Enter item immediately on the market?">
        </input>


        <button onClick={this.onClickHandler}>Add new item</button>

      </form>
    );
  }
}

const mapStateToProps = state => {
  return ({
    addItem: state.user.addItem,
  })
}

export default connect(mapStateToProps, { postNewItem, updateItemForm })(ItemForm);