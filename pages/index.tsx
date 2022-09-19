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
  const data = await res.json()

 
  return { props: { data } }
}

export default Home;

