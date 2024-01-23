import React from 'react'            //importing React

const AddSales = () => {                       //AddSales component
    return (                                   //returning the JSX
        <>                                     {/* fragment tag*/}
            <div className="container">
                <div className="row">
                    <div className='col-12'>
                    <h2 className="text-center m-5 text-bolder">ADD SALE ENTRY</h2>
                        <form className='border border-1 p-4 border-grey shadow-sm mb-5'>
                            {/* product name */}
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Product Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                            </div>
                            {/* product quantity */}
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Quantity</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" />
                            </div>
                            {/* product amount */}
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Amount</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" />
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

export default AddSales                      //exporting AddSales component