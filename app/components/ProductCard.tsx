import React from 'react'
import Image from 'next/image'
import productImage from "../../public/Assets/images/product_1.png"

interface cardProps {
  id?: number,
  title: string,
  image: string | any,
  price: number
  category: string
}

function ProductCard(props: cardProps) {
  return (
    <div className='product-card'>
      <Image src={props.image} alt='' className='h-[400px] w-[100%]' />
      <h6 className='mt-[16px] text-[#1E2832] font-medium text-[17px]'>{props.title}</h6>
      <div className="flex justify-between items-center mt-[16px]">
        <p className='m-0 text-[#00000080]'>{props.category}</p>
        <span className='text-[#1E2832] font-medium text-[17px]'>${props.price}</span>
      </div>
    </div>
  )
}

export default ProductCard
