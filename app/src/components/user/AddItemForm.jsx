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
  img_url: '',
  availability: '',
}

class ItemForm extends Component {
  onClickHandler = (e) => {
    e.preventDefault();
    this.props.postNewItem(this.props.addItem);
    this.props.updateItemForm(emptyItemForm);
  }

  onChangeHandler = (e) => {
    this.props.updateItemForm({
      ...this.props.addItem,
      // userId: this.props.id,  // uncomment and test this once the userDetails API is fixed
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form autoComplete="off">

        <input
          required
          value={this.props.addItem.name}
          onChange={this.onChangeHandler}
          name="name" type="text" placeholder="Enter item name">
        </input>

        <input
          required
          value={this.props.addItem.price}
          onChange={this.onChangeHandler}
          name="price" type="text" placeholder="Enter item price">
        </input>

        <input
          required
          value={this.props.addItem.description}
          onChange={this.onChangeHandler}
          name="description" type="text" placeholder="Enter item description">
        </input>
        
        <select
          required
          name="category"
          onChange={this.onChangeHandler}
        >
          <option defaultValue value="Outfits">Outfits</option>
          <option value="Emotes">Emotes</option>
          <option value="Toys">Toys</option>
          <option value="Pets">Pets</option>
        </select>
                
        <input
          required
          value={this.props.addItem.img_url}
          onChange={this.onChangeHandler}
          name="img_url" type="text" placeholder="Enter image URL">
        </input>

{/* Still not sure how do we use this */}
        {/* <input
          value={this.props.addItem.availability}
          onChange={this.onChangeHandler}
          name="availability" type="text" placeholder="Enter item immediately on the market?">
        </input> */}


        <button onClick={this.onClickHandler}>Add new item</button>

      </form>
    );
  }
}

const mapStateToProps = state => {
  return ({
    addItem: state.user.addItem,
    id: state.user.userDetails.userId,
  })
}

export default connect(mapStateToProps, { postNewItem, updateItemForm })(ItemForm);