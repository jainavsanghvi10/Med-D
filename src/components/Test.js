import React from 'react'




export const Test = () => {

    return (
      <div>
        
        <br></br>
      <h1>Phone Number Verification through OTP </h1>
      <br></br>
        
      <form>
          <label><b>Phone Number</b></label><br></br>
          <input type="text" id="number" placeholder="+91****" required/>
  
  
          <div id="recaptcha-container"></div>
          <br></br>
          <button type="button" id="sendCode" >SendCode</button>
          <br></br>
      </form> 
      <h1>-------------------------- </h1><br></br>
      <form>
          <label><b>OTP</b></label><br></br>
          <input type="number" id="verificationCode" placeholder="Enter OTP" required/><br></br>
          <br></br>
          <button type="button" id="verify"> Verify </button><br></br>
          <br></br>
      </form>
      </div>
    )
}
