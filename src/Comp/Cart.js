import React from 'react'
import img from "../img1.jpg"
import { useNavigate } from 'react-router-dom'
export default function Cart() {
    const navigate=useNavigate()
  const back=()=>{
    navigate(-1)
    }
  return (
    <div className='container'>
        <div>
            <button className="btn btn-secondary m-5" onClick={back}>Back</button>
        </div>
        <h1 className='display-2 text-center'>Cart Items</h1>
        <div class="card">
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-3'>
                        <img src={img} alt="cart im" className='card-img'/>
                    </div>
                    <div className='col-xl-4'><h1 className='display-6'>Price{}</h1></div>
                    <div className='col-xl-4'>2</div>
                </div>
            </div>
        </div>
    </div>
  )
}
