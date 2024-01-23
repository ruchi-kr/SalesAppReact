import React from 'react'                 //importing React

const Register = () => {                             //Register component
  return (                                           //returning the JSX
<>                                                    {/* fragment tag*/}
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <h2 className="text-center m-5 text-bolder">REGISTRATION FORM</h2>
                        <form className='border border-1 p-4 border-grey shadow-sm mb-5'>
                            {/* First name */}
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="First Name" />
                            </div>
                            {/* Last name */}
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Last Name" />
                            </div>
                            {/* email address */}
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            {/* password */}
                            <label htmlFor="inputPassword5" className="form-label">Password</label>
                            <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                            <div id="passwordHelpBlock" className="form-text">
                                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                            </div>
                            {/* submit button */}
                            <div className="d-grid gap-2 my-3">
                                <button className="btn btn-success" type="button">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register                                //exporting Register component