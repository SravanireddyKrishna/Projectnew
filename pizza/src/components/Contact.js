import React, { Component } from 'react';
import '../Style/Contact.css';
import Contact1 from './Contact1';

export default class Contact extends Component {
      constructor(props) {
        super(props);
        this.state=
        {
          name:'',
          email:'',
          mobile:'' 

        }
      }
      NameHandler =(event)=>
      {
          //alert('123451');
          //alert(event.target.value);
          this.setState({
            name:event.target.value
          })
      }
      EmailHandler=(event)=>{
        this.setState({
          email:event.target.value
        })
      }
      MobileHandler=(event)=>{
        this.setState({
          mobile:event.target.value
        })
      }
      submitHandler=(event)=>{
        event.preventDefault();

        //alert(`my name is ${this.state.name} and my email is ${this.state.email} and my number is ${this.state.mobile}`);
        let name = this.state.name;
        let email = this.state.email;
        let mobile = this.state.mobile;

        if(name=="")
        {
            document.getElementById('uname').innerHTML="Please enter a name";
        }
        if(email =="")
                {
                    document.getElementById('emailid').innerHTML="Please fill the  Email Id  ";
                    return false;
                }
                if(email.indexOf('@')<=0)
                {
                    document.getElementById('emailid').innerHTML="@ Invalid Position  ";
                    return false; 
                }
                if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.'))
                {
                    document.getElementById('emailid').innerHTML=". Invalid Position  ";
                    return false; 
                }
          if(mobile =="")
                {
                    document.getElementById('mobilenum').innerHTML="Please fill the Mobile Number";
                    return false;
                }
                if(isNaN(mobile))
                {
                    document.getElementById('mobilenum').innerHTML="Must Write Digits Only ";
                    return false;
                }
                if(mobile.length!=10)
                {
                    document.getElementById('mobilenum').innerHTML="Mobile Number Must be 10 Digits Only ";
                    return false;
                }

      }
      
  render() 
  {
    return (

      <div>
          <div className="Container-fluid contact">
          {/* <img src="Pizza Images/pizzaLeft.jpg" alt="pizza" className="img-fluid"/>*/}
            <h1 className="text-center pb-2 text-danger">Contact Us</h1> 
            <div className="row">
              <div className="col-md-6 col-sm-6 col-lg-6  ">
                <div> <h3 className="text-success p-5 reg">Registration-Form</h3> </div>

                  <form className="Forms"onSubmit={this.submitHandler}>

                    <input className="form-control"
                        type="text" 
                        name="name"
                        placeholder="Name" 
                        value={this.state.name}
                        onChange={this.NameHandler}  
                    />
                    <p id="uname"className="Error"></p>
                     <input className="form-control"
                        type="text" 
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.EmailHandler} 
                        
                    />
                    <p id="emailid"className="Error"></p>
                     <input className="form-control"
                        type="text"
                        name="mobile"
                        placeholder="Mobile Number"
                        value={this.state.mobile}
                        onChange={this.MobileHandler}
                    />
                     <p id="mobilenum"className="Error"></p>
                     <button  className="btn btn-primary pl-3 m-4"type="submit">Submit</button>
                     
                  </form>

              </div>
              <div className="col-md-6">
                  <Contact1/>
              </div>   
              </div>
            </div>
          </div>
        

    );
  }
}
