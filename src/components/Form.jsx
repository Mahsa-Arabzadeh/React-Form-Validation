import { Component } from 'react'
import "./styles/Form.css"

export default class Form extends Component {

    constructor(props) {
        super(props)

        // this.submitForm = this.submitForm.bind(this)
        this.firstNameFunc = this.firstNameFunc.bind(this)
        this.lastNameFunc = this.lastNameFunc.bind(this)
        this.emailValid = this.emailValid.bind(this)

        this.state = {
            firstNameData: "",
            lastNameData: "",
            emailData: "",
            allValid: true
        }
    }

    // submitForm(){

    // }

    firstNameFunc(e){
      this.setState({
        firstNameData: e.nativeEvent.target.value
      })
    }

    lastNameFunc(e){
      this.setState({
        lastNameData: e.nativeEvent.target.value
      })
    }

    emailValid(e){
      this.setState({
        emailData: e.nativeEvent.target.value
      })
    }


  render() {
    return (
      <div>
        <form action="" id='form-valid'>
        <div className="input-container">
          <input id='first-name' type="text" placeholder='First Name' value={this.state.firstNameData} onChange={this.firstNameFunc} />
          <input id='last-name' type="text" placeholder='Last Name' value={this.state.lastNameData} onChange={this.lastNameFunc}/>
          <input id='email-data' type="email" placeholder='Email address' value={this.state.emailData} onChange={this.emailValid} />
          <input type="submit" id='submit'/>
        </div>
      </form>
      </div>
    )
  }
}
