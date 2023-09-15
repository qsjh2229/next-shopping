"use client"

import Link from "next/link"
import { useState } from "react"

export default function Cart({ result }) {
   let [count, setount] = useState(1)

   return (
      <div>
         <span className='minus' onClick={()=>{
           if(count <= 0){
            return false
           }
           setount(count -1)
         }}> - </span>
         <span className='number'> {count} </span>
         <span className='plus' onClick={()=>{
            setount(count +1)
         }} > + </span>

    <Link href='/cart'>
            <button
               className='cartBtn'
               onClick={() => {
                  fetch("/api/cart/new", {
                     method: "POST",
                     body: JSON.stringify({
                        count: count,
                        price: result.price,
                        description: result.description,
                        image: result.image,
                     }),
                  })
               }}
            >
               장바구니 담기
            </button>
    </Link>
         <button className='buy'>바로구매</button>
      </div>
   )
}
