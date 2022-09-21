
import React, { SyntheticEvent, useState } from "react"
import {Nav} from "../layout/nav";
import {Foot} from "../layout/foot";
import { productService } from "../../utils/product.service";
import { type } from "os";
import {Product} from '../../utils/types/product.type';
import { useRouter } from "next/router";


type productProps={
    products:Product[]
}

const producto = (props:productProps)=>{
    const{products}=props

    const route=useRouter();

   const Deletebtn=(id)=>{
    fetch (`http://localhost:8080/products/${id}`, {
        method: "DELETE"
    })
    .then(async () => {
        await route.push('/')
    });

}
   
    return (
    <>

       <Nav/>

        <div>
                <div>
        <div className="table w-full p-2">
        <table className="w-full border" >
            <thead>
                <tr className="bg-gray-50 border-b">
                    <th className="border-r p-2">
                    Active
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                      ID
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                       Name
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        Price
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                       Price not IVA
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                      Price IVA
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                       Expiration date
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                       Stock
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                       Notes
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {products.map((prd, index) => (
                    <tr className="bg-gray-50 text-center" key={index}>
                    <td className="p-2 border-r">
                        {prd.isActive}
                    </td>
                    <td className="p-2 border-r">
                        {prd.id}
                    </td>
                    <td className="p-2 border-r">
                        {prd.name}
                    </td>
                    <td className="p-2 border-r">
                        {prd.precio}
                    </td>
                    <td className="p-2 border-r">
                        {prd.no_IVA}
                    </td>
                    <td className="p-2 border-r">
                        {prd.IVA}
                    </td>
                    <td className="p-2 border-r">
                        {prd.expiration_date}
                    </td>
                    <td className="p-2 border-r">
                        {prd.stock}
                    </td>  
                    <td className="p-2 border-r">
                        {prd.Notes}
                    </td>
                    
                    <td>
                         <button type="button" className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"><a href={'/product/update/' + prd.id}>Update</a></button>
                       <button type="button" className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Delete</button>
                    </td>
                    
                </tr>
                ))}
            </tbody>
        </table>
       
    </div>
    <div className="flex items-right justify-center"><button type="button" className="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"><a href="/product/addProducto">Add</a></button></div>
    </div>
                </div>
        <Foot/>
        
 
    </>
    )

};
export const getServerSideProps=async(context)=> {

    const products = await productService.getAllproduct();
    return { props :{products}
  }
  }
export default producto;