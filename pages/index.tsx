import React from 'react'
import {Nav} from './layout/nav';
import { Foot } from './layout/foot';
const Home =()=> {
  return (
    
   <div>
    <Nav/>

      <Foot/>
   </div>
  
     
  )
}
export const getServerSideProps=async(context)=> {
  
  const res = await fetch(``)
  const products = await res.json()

 
  return { props: { product: products} }
}

export default Home;

