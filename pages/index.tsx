import React from 'react'
import {Nav} from './layout/nav';
import { Foot } from './layout/foot';
import { userService } from '../utils/user.service';
import { User } from '../utils/types/user.type';
import {Product} from '../utils/types/product.type';
import {productService} from '../utils/product.service';



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
      <div className="w-full bg-gray-800 ">
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12">
                <div className="text-center">
                    <p className="text-xl text-white font-bold mb-2">ID</p>
                    <p className="text-xl text-white font-bold mb-2">{prd.id}</p>
                    <p className="text-base text-gray-400 font-normal">Nombre del Producto</p>
                    <p className="text-base text-gray-400 font-normal">{prd.name}</p>
                    <p className="text-base text-gray-400 font-normal">Precio del producto con IVA=${prd.IVA}</p>
                    <p className="text-base text-gray-400 font-normal">Precio del producto sin IVA=${prd.no_IVA}</p>
                    <p className="text-base text-gray-400 font-normal">Stock={prd.stock}</p>
                    <p className="text-base text-gray-400 font-normal">Descripcion={prd.Notes}</p>
                    <p className="text-base text-gray-400 font-normal">{prd.isActive}</p>
                </div>
            </div>
        </div>
    </section>
</div>
</div>
    ) })}
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

