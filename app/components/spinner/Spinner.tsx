import React from 'react'
import Image from 'next/image'
import spinner from "./spinner.gif"


export default function Spinner() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <Image src={spinner} alt="Loading..."/>
    </div>
  )
}
