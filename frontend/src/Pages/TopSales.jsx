import React from 'react'                            //importing React

const TopSales = () => {                            //TopSales component
    return (                                        //returning the JSX
        <>                                          {/* fragment tag*/}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center my-5 mx-2 text-bolder col-12">TOP 5 SALES</h2>
                        <table className="table table-hover col-12 ">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Sales Id:</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Sale Amount</th>

                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                <tr>
                                    <th scope="row">1</th>
                                    <td>SI1212</td>
                                    <td>Laptop</td>
                                    <td>2</td>
                                    <td>90000</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>SI423</td>
                                    <td>Mobile</td>
                                    <td>5</td>
                                    <td>85000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopSales                                 //exporting TopSales component