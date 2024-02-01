// make our page a client page
"use client"

// import useState
import { useState } from "react";

import axios from "axios";
import { useRouter } from "next/navigation";


export default function Home() {
  // store useRouter in a variable
  const router = useRouter();

  const [errMsg, setErrMsg] = useState('')

  async function submitHandler(e) {
    // stop default form submission
    e.preventDefault();

    console.log(e);

    let fName = e.target[0].value;
    let LName = e.target[1].value;
    let age = e.target[2].value;
    let phone = e.target[3].value;
    console.log(fName, LName, age, phone)

    if (!fName) {
      setErrMsg('fill in firstname');
    }
    else if (!LName) {
      setErrMsg('fill in lastname');
    }
    else if (!age) {
      setErrMsg('fill in age');
    }
    else if (!phone) {
      setErrMsg('fill in phone number');
    }
    else {
      setErrMsg('');
    }

    // send form data to api
    // import axios first

    const res = axios.post('/api/register', {
      body: { fName, LName, age, phone }


    })

    console.log(res)
    if (res.status = 200) {
      router.push('/login');
    }

    else {
      setErrMsg("status code is 201")
    }



  }

  return (
    <form action="" onSubmit={submitHandler}>
      {
        errMsg && <p className="err"> {errMsg}</p>
      }

      <div className="input-group">
        <label htmlFor="" className="form-label">FirstName</label>
        <input type="text" className="form-control"
        // onChange={(e)=>setFirstName(e.target.value)}
        />
        {/* {console.log(firstName)} */}
      </div>

      <div className="input-group">
        <label htmlFor="" className="form-label">LastName</label>
        <input type="text" className="form-control" />
      </div>

      <div className="input-group">
        <label htmlFor="" className="form-label">Age</label>
        <input type="text" className="form-control" />
      </div>

      <div className="input-group">
        <label htmlFor="" className="form-label">PhoneNumber</label>
        <input type="text" className="form-control" />
      </div>

      <button className="button">Submit</button>

    </form>
  );
}
