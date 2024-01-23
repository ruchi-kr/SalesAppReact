import React from 'react'               //importing React

const Login = () => {                              //Login component
    return (                                      //returning the JSX
        <>                                          {/* fragment tag*/}
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <h2 className="text-center m-5 text-bolder">LOGIN FORM</h2>
                        <form className='border border-1 p-4 border-grey shadow-sm mb-5'>
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

export default Login                            //exporting Login component