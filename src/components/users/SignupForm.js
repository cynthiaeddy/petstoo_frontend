import React from 'react'
import { Form } from 'semantic-ui-react'

class SignupForm extends React.Component {
  state = {
    name: '',
    password: '',
    passwordConfirmation: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  createUser = () => {
    // fetch('http://localhost:3000/api/v1/users', {
    fetch(`https://pacific-hollows-81769.herokuapp.com/api/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Accepts: 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.errors) {
          alert(response.errors)
        } else {
          this.props.setCurrentUser(response)
        }
      })
  }

  handleSubmit = () => {
    if (this.state.password === this.state.passwordConfirmation) {
      this.createUser()
    } else {
      alert("Passwords don't match!")
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>name</label>
          <input
            onChange={this.handleChange}
            name="name"
            value={this.state.name}
            autoComplete="off"
          />
        </Form.Field>
        <Form.Field>
          <label>password</label>
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            value={this.state.password}
            autoComplete="off"
          />
        </Form.Field>
        <Form.Field>
          <label>password confirmation</label>
          <input
            onChange={this.handleChange}
            type="password"
            name="passwordConfirmation"
            value={this.state.passwordConfirmation}
            autoComplete="off"
            className="confirmation"
          />
        </Form.Field>
        <button type="submit">Submit</button>
      </Form>
    )
  }
}

export default SignupForm
