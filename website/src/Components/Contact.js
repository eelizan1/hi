import React, { Component } from 'react';

class Contact extends Component {
  render() {
    if(this.props.data) {
      // fetch JSON data
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
    }
    return (
      <section id="contact">

            <div className="row section-head">

               <div className="two columns header-col">

                  <h1><span>Say Hello. Its Free!</span></h1>

               </div>

               <div className="ten columns">

                     <h2 className="lead">Say Hi, its Free!
                     </h2>
               </div>
            </div>
            <div className="row">
               <div className="eight columns">

                  <div id="message-warning"> Error boy</div>
   				   <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br/>
   				   </div>
               </div>

                  <div className="widget widget_contact">
   					   <h4>Address and Phone</h4>
   					   <p className="address">
   						   {name}<br/>
   						   {street}<br/>
   						   {city}, {state} {zip} US<br/>
   						   <span>{phone}</span>
   					   </p>
   				   </div>

         </div>
      </section>
    );
  }
}

export default Contact;
