import React, { Component } from 'react'
import styled from 'styled-components'
import EditUserForm from './EditUserForm'

class UserDetails extends Component {
  state = {
    isEditing: false
  }

  toggleEditing = () => {
    this.setState({ isEditing: !this.state.isEditing, isAdding: false })
  }

  render() {

    const newFunds = this.props.funds_balance + 100;
    return (
      <DetailsContainer>
        
        <UserInfoContainer>

          <ImageWrapper>
            <img src={this.props.img_url} alt='User avatar' />
          </ImageWrapper>
          <UserInfoDiv>
            <StyledUserName>
              Welcome {this.props.name}
            </StyledUserName>

            <h6>Balance: ${this.props.funds_balance}</h6>
          </UserInfoDiv>

        </UserInfoContainer>

        <ButtonsContainer>

          <button onClick={() => this.toggleEditing()}>Edit Profile</button>
          <button
            onClick={() =>
              this.props.changeFunds(this.props.userId, newFunds)
            }
          >
            Add $100
          </button>
        </ButtonsContainer>

        {this.state.isEditing && (
          <EditUserForm toggleEditing={this.toggleEditing} />
        )}
      </DetailsContainer>
    )
  }
}

export default UserDetails

const DetailsContainer = styled.div`
  border: 1px solid #212b38;
  border-radius: 4px;
  padding: 0.5rem;
  min-width: 350px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12);
`

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 1rem;
`
const StyledUserName = styled.h6`
  text-transform: capitalize;
`

const UserInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin-left: 1rem;
  h6 {
    margin: 0.2rem 0;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  button {
    border: 1px solid #212b38;
    margin: 0.5rem;
  }
`


const ImageWrapper = styled.div`
  max-width: 60px;

  img {
    max-width: 100%;
    border-radius: 50%;
  }
`
