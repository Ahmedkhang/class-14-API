
import Image from 'next/link';
import Link from 'next/link';
import { useState } from 'react';
export default async function Home(){


  const url = await fetch("https://simple-books-api.glitch.me/books");
      const response = await url.json();
      
    
     
  return(
    <div className='max-w-md  text-white  justify-center bg-[#444444]'>

      <h1 className='text-center font-bold text-3xl'>My Favourite Books</h1>
      <h3 className='mt-5 text-center text-xl'>My favourite books are :</h3>
      <br/>
      <br/>
     {response.map((books:any) => (
       // eslint-disable-next-line react/jsx-key
       <div className=' gap-5 py-1 text-lg'>
        <span className='w-[100px] text-zinc-100'>{books.id}</span><span className='ml-2 font-bold'>{books.name}</span><span className='ml-3 text-red-300'>{books.type}</span>
       </div>
     ))}
   
       </div>
  )}