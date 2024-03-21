import { Component } from 'react'
import "./styles/Form.css"

export default class Form extends Component {
  render() {
    return (
      <div>
        <form action="" id='form-valid'>
        <div className="input-container">
          <input id='first-name' type="text" placeholder='First Name' />
          <input id='last-name' type="text" placeholder='Last Name'/>
          <input id='email-data' type="text" placeholder='Email address' />
          <input type="submit" id='submit'/>
        </div>
      </form>
      </div>
    )
  }
}
