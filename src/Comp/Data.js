import React, { useEffect, useState } from 'react'
import Api from "../Api"
import { Link, useNavigate } from 'react-router-dom'

export default function Data() {
    const navigate=useNavigate()
    const [data,setdata]=useState(Api)

const filterdata=(item)=>{

        const updateitem=Api.filter((mydata)=>{
        return mydata.category===item
    })
    setdata(updateitem)

}

const cart=()=>{    
    navigate("/Cart")
}

useEffect(()=>{
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((element) => {
          console.log(element);
          if (element.isIntersecting) {
           return  element.target.classList.add("show");
          } else {
          return   element.target.classList.remove("show"); // Remove "show" class if not intersecting
         
          }
        });
      });
      
      const hiddenElements = document.querySelectorAll(".hidden"); // Use querySelectorAll
      hiddenElements.forEach((el) => observer.observe(el));
      
})
  
  
    
  return (
    
<>
<div className="container">
    <div className="container d-flex justify-content-end">
        <button className='btn btn-dark p-2 float-right d-block' onClick={cart}>Cart</button>
    </div>
<div className='d-flex justify-content-center align-items-center flex-wrap hidden'>
        <button className='btn btn-dark mx-4 hidden' onClick={()=>{setdata(Api)}}>All</button>
        <button className='btn btn-dark mx-4 hidden' onClick={()=>{filterdata("laptop")}}>lapTop</button>
        <button className='btn btn-dark mx-4 hidden'onClick={()=>{filterdata("watch")}}>Watch</button>
        <button className='btn btn-dark mx-4 hidden'onClick={()=>{filterdata("mobile")}}>Mobile</button>
      </div>
    <div className="d-flex justify-content-evenly align-items-center flex-wrap">
{
    data.map((value,index)=>{

        return(
            <div className="card col-xl-3 col-lg-4 col-md-5 col-sm-6 col-12 m-3 d-flex flex-direction-column justify-content-around align-items-center hidden" style={{height:"450px"}} key={index}>
 
     <img className="card-img-top " src={value.images[0]} height="50%"  alt="Card imag cap"/>
 
        <div className="card-body">

     <h5 className="card-title">{value.title}</h5>
        <p className="card-text">{value.price}</p>
          <Link className='btn btn-dark p-2'>Add To Cart</Link>
        </div>
        </div>
        )

    })
}


</div>
</div>
</>



  )
}
