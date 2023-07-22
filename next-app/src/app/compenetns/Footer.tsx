
import React,{useState,useEffect} from 'react'
const date:Date=new Date();

const Footer = () => { 
    return (
        <>
        <div className='fixed left-0 bottom-0 w-full bg-orange-500 text-sm h-10 flex justify-center items-center'>
        <footer className='text-center  '>Copyright {date.getFullYear()}</footer>
        </div>
        </>
    )
}

export default Footer