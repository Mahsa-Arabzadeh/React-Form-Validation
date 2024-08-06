import { Component } from 'react'
import "./styles/Form.css"

export default class Form extends Component {

    constructor(props) {
        super(props)

        this.firstNameFunc = this.firstNameFunc.bind(this)
        this.lastNameFunc = this.lastNameFunc.bind(this)
        this.emailValid = this.emailValid.bind(this)
        this.submitForm = this.submitForm.bind(this)

        this.state = {
            firstNameData: "",
            lastNameData: "",
            emailData: "",
            allValid: false,
            submited: false,
        }
    }

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

    submitForm(e){
      e.preventDefault()

      this.setState({
        submited: true
      })

      if(this.state.firstNameData.length !== 0 && this.state.lastNameData.length !== 0 && this.state.emailData.length !== 0){

        this.setState({
          allValid: true,
        })

        let alertBox = true;
        if (alertBox) {
        alertBox = silverBox({
          position: "top-center",
          alertIcon: "success",
          text: "Your data has been saved!",
          centerContent: true,
          showCloseButton: true,
        });
      } else {
        // Disable alertBox
        alertBox = null;
      }

      }

      setTimeout(() => {
        this.setState({
          allValid: false,
        })
      }, 3000);
    }


  render() {
    return (
      <div>
        <form action="" id='form-valid' onSubmit={this.submitForm} autoComplete='off'>
        <div className="input-container">
          <input id='first-name' type="text" placeholder='First Name' value={this.state.firstNameData} onChange={this.firstNameFunc} />
          {this.state.submited && this.state.firstNameData === "" &&          
                  <span id='error-handler'>Please enter an first name</span>
          }
                  <input id='last-name' type="text" placeholder='Last Name' value={this.state.lastNameData} onChange={this.lastNameFunc}/>
          {this.state.submited && this.state.lastNameData === "" &&          
                  <span id='error-handler'>Please enter an last name</span>
          }
          <input id='email-data' type="email" placeholder='Email address' value={this.state.emailData} onChange={this.emailValid} />
          {this.state.submited && this.state.emailData.length === 0 &&          
                  <span id='error-handler'>Please enter an email address</span>
          }
          <input type="submit" id='submit' onClick={this.submitForm}/>
        </div>
      </form>
      </div>
    )
  }
}
