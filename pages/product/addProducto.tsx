import React from "react";
import { Nav } from "../layout/nav";
import { Foot } from "../layout/foot";
const Add =()=>{

    return (<div>
        <Nav/>

        
    
    <div className="grid place-items-center mx-2 my-20 sm:my-auto">
    
   
        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg">

            <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                Add Product
            </h2>

            <form className="mt-10" method="POST">
             
                <label  className="block text-xs font-semibold text-gray-600 uppercase">Product name</label>
                <input id="product_name" type="text" name="product_name" placeholder="product name" 
                    className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                    required />

              
                <label  className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Price with IVA</label>
                <input id="price_iva" type="number" name="password" placeholder="Price with IVA"
                    className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                    required />

                <label  className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Price not IVA</label>
                <input id="price_not_iva" type="number" name="password" placeholder="Price not IVA"
                    className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                    required /> 
                <label  className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Date expired</label>
                <input id="date_expired" type="date" name="password" placeholder="Date expired"
                    className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                    required /> 
                <label  className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Notes</label>
                <textarea id="notes" name="notes" placeholder="Notes"
                    className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200">
                    </textarea> 
                <label  className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Stock</label>
                <input id="stock" type="number" name="stock" placeholder="Stock"
                    className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                    required /> 
                <label  className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Active</label>
                
                <div className="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                <label  className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Active</label>
                </div>
                <div className="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                <input  id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                <label  className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Not active</label>
                </div>

               
                <button type="submit"
                    className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none">
                    submit
                </button>
            </form>
        </div>
    </div>


       <Foot/>
    </div>)
}
export default Add;