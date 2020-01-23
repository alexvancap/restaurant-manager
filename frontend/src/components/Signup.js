import React from "react";
import { history } from "../history";

export default class Signup extends React.Component {
                 state = {
                   username: "",
                   name: "",
                   dob: "",
                   phone: "",
                   country: "",
                   email: "",
                   password: ""
                 };

                 handleLogin = e => {
                   e.preventDefault();
                   fetch("http://localhost:3000/signup", {
                     method: "POST",
                     headers: {
                       "Content-Type": "application/json"
                     },
                     body: JSON.stringify({
                       name: this.state.name,
                       username: this.state.username,
                       password: this.state.password,
                       dob: this.state.dob,
                       country: this.state.country,
                       phone: this.state.phone,
                       email: this.state.email
                     })
                   }).then(() => history.push("/login"));
                 };

                 render() {
                   return (
                     <div>
                       <h1>SIGN UP</h1>
                       <div className="ui centered grid container">
                         <div className="nine wide column">
                           <div className="ui fluid card">
                             <div className="content">
                               <form
                                 className="ui form"
                                 method="POST"
                                 onSubmit={e => {
                                   this.handleLogin(e);
                                 }}
                               >
                                 <div className="field">
                                   <label>Please Enter A Username</label>
                                   <input
                                     name="username"
                                     placeholder="Your Username"
                                     onChange={e => {
                                       this.setState({
                                         username: e.target.value
                                       });
                                     }}
                                   ></input>
                                 </div>
                                 <div className="field">
                                   <label>Please Enter A Name</label>
                                   <input
                                     name="name"
                                     placeholder="Your Name"
                                     onChange={e => {
                                       this.setState({
                                         name: e.target.value
                                       });
                                     }}
                                   ></input>
                                 </div>
                                 <div className="field">
                                   <label>Please Enter Email </label>
                                   <input
                                     type="text"
                                     name="user"
                                     placeholder="Your Email"
                                     onChange={e => {
                                       this.setState({ email: e.target.value });
                                     }}
                                   ></input>
                                 </div>
                                 <div className="field">
                                   <label>Country</label>
                                   <input
                                     type="text"
                                     name="user"
                                     placeholder="Your Country"
                                     onChange={e => {
                                       this.setState({
                                         country: e.target.value
                                       });
                                     }}
                                   ></input>
                                 </div>
                                 <div className="field">
                                   <label>Date Of Birth </label>
                                   <input
                                     type="text"
                                     name="user"
                                     placeholder="00/00/0000"
                                     onChange={e => {
                                       this.setState({ dob: e.target.value });
                                     }}
                                   ></input>
                                 </div>
                                 <div className="field">
                                   <label>Please Enter Phone Number</label>
                                   <input
                                     name="phone"
                                     placeholder="000-000-0000"
                                     onChange={e => {
                                       this.setState({ phone: e.target.value });
                                     }}
                                   ></input>
                                 </div>
                                 <div className="field">
                                   <label>Create Password</label>
                                   <input
                                     type="password"
                                     name="pass"
                                     placeholder="Password"
                                     onChange={e => {
                                       this.setState({
                                         password: e.target.value
                                       });
                                     }}
                                   ></input>
                                 </div>
                                 <div className="field">
                                   <label>Re-enter Password</label>
                                   <input
                                     type="password"
                                     name="pass"
                                     placeholder="Password"
                                     onChange={e => {
                                       this.setState({
                                         password: e.target.value
                                       });
                                     }}
                                   ></input>
                                 </div>
                                 <button
                                   className="ui primary labeled icon button"
                                   type="submit"
                                 >
                                   <i className="address card icon"></i>
                                   Click to Login
                                 </button>
                               </form>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   );
                   
                 }
               }
