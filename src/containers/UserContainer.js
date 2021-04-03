import React from 'react'
import { Loader, Segment } from 'semantic-ui-react'
import UserPets from '../components/users/UserPets'

class UserContainer extends React.Component {
  render() {
    const { currentUser } = this.props

    if (currentUser) {
      return (
        <div>
          <Segment className="pet-container">
            hi {currentUser.name}! <br />
          </Segment>
          <Segment>
            <UserPets pets={currentUser.pets} currentUser={currentUser} />
          </Segment>
        </div>
      )
    } else {
      return <Loader />
    }
  }
}

export default UserContainer
