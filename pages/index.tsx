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
    
   <div>
    <Nav/>

    <div className="container mx-auto">

      {/* <ul>

        {users.map((value, index) => (

            <li key={index}>{value.email}</li>

        ))}

      </ul> */}

      {products.map((value, index) => (

      <li key={index}>{value.name}</li>

))}
    </div>
      <Foot/>
   </div>
  
     
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

