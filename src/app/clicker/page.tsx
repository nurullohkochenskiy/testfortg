'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter()
  return (
    <>
    <div >otherpage</div>
    <div onClick={() => router.push("/")}>Go to main </div>
    </>
  )
}

export default page