import React from 'react'
import {Nav} from './layout/nav';
import { Foot } from './layout/foot';
import { userService } from '../utils/user.service';
import { User } from '../utils/types/user.type';
import {Product} from '../utils/types/product.type';
import {productService, ProductService} from '../utils/product.service';



type HomeProps = {
  // users: User[],
  products:Product[]
}

const Home =(props: HomeProps)=> {

  // const {users} = props
  const {products}= props
  
  return (
    
   <>
    <Nav/>

  <div>
{
  products.map((prd)=>{
    return (
      <div key={prd.id} >
      <div className="w-full bg-gray-800">
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
            <h2 className="text-base font-bold text-indigo-600">
                We have the best equipment in the market
            </h2>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                Check our awesome team memwhite            
            </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div className="mb-8">
                    <img className="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
                </div>
                <div className="text-center">
                    <p className="text-xl text-white font-bold mb-2">{prd.id}</p>
                    <p className="text-base text-gray-400 font-normal">{prd.name}</p>
                    <p className="text-base text-gray-400 font-normal">{prd.IVA}</p>
                    <p className="text-base text-gray-400 font-normal">{prd.no_IVA}</p>
                    <p className="text-base text-gray-400 font-normal">{prd.stock}</p>
                    <p className="text-base text-gray-400 font-normal">{prd.Notes}</p>
                    <p className="text-base text-gray-400 font-normal">{prd.isActive}</p>
                </div>
            </div>
        </div>
    </section>
</div>
</div>
    )
  })
}
  </div> 
      <Foot/>
   </>
  
     
  )
}
export const getServerSideProps=async(context)=> {

  // await productService.createProduct({
  //   name: 'Coca4',
  //   precio: 30,
  //   IVA: 21,
  //   no_IVA: 24,
  //   expiration_date:'20220221',
  //   Notes:'jdjsdj',
  //   stock:3,
  //   isActive:true
  // })



  // const users = await userService.getAllUser();
 
  // return { props: { users} }

  const products = await productService.getAllproduct();
  return { props :{products}
}
}

export default Home;

