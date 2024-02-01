// make our page a client page
"use client"

// import useState
import { useState } from "react";

import axios from "axios";
// import { useRouter } from "next/navigation";


export default function Login(){

  // const router = useRouter();

  const [errEmail,seterrEmail]=useState('')
  const [errPass,seterrPass]=useState('')

  
// create a function to handle my form submission
function submitHandler(e){

  // stop the form default, that refreshes the page
  e.preventDefault();
  // save form input  values in a variable
  // NB: the arrangement of the form input is important
  let password=e.target[0].value;
  let email=e.target[1].value;

  // validate my form
  // we want to validate the form so if the user submits the form without
  // filling in the fields
  // we will have an error

  if(!password){
    seterrPass('input password')
  }
  if(!email){
    seterrEmail('input email');
  }

    // if the user input is not empty
    // send form data to the api (/api/login/)
    // we are using axios

    const res = axios.post('/api/login', {
      body: {password, email},
     })

}


  
  return (
    <form action="" onSubmit={submitHandler}>
     

      <div className="input-group">
        <label htmlFor="" className="form-label">Email</label>
        <input type="email" className="form-control"/>
      {
        // display error message
        // we are performing conditional renedering, if error mesage is true, display error message

        errEmail ? <span style={{color:'red'}}>{errEmail}</span> : ''
        // if (errMsg)
        // errMsg
        // }

        // else
        // setErrMsg('')
        // }
      }
    </div>

      <div className="input-group">
        <label htmlFor="" className="form-label">Password</label>
        <input type="text" className="form-control" />
        {
          errPass? <span style={{color:"red"}}>{errPass}</span> : ''
        }
      </div>

      <button className="button">Submit</button>

    </form>
  );
}
