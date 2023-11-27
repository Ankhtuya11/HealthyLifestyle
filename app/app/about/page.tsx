"use client"
import React from 'react'
import mandakh from '../../public/assets/mandakh.jpg';
import Image from 'next/image'; 
export default function page() { 
 
  return (
    <>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
    <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
      <span className="inline-block mb-1 sm:mb-4">
        Бидний тухай<br className="hidden md:block" />

      </span>
      <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"></div>
    </h2>
    <p className="text-gray-700 lg:text-sm lg:max-w-md">
      "Class is dead", says Foucault; however, according to Reicher, it is not so much className that is dead, but rather the absurdity, and some would say the paradigm, of className. However, the subject is interpolated into a postpatriarchialist
      dialectic theory that includes consciousness as a totality.
    </p>
  </div>
  <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
    <a href="/" aria-label="View Item">
      <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <img className="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" alt="" />
        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-4 text-lg font-bold text-gray-100">ЗОРИЛГО</p>
          <p className="text-sm tracking-wide text-gray-300">
            Бидний эрхэм зорилго бол хэлний бэрхшээлээс үл хамааран хүнсний мэдээллийг хүн бүрт хүртээмжтэй болгох явдал юм.манай апп нь хувь хүн хэрэглэж буй бүтээгдэхүүнийхээ талаар мэдээлэлтэй сонголт хийх боломжийг олгож, хүнсний шошгоны ертөнцөд ил тод байдал, хүртээмжтэй байдлыг дэмжинэ.
          </p>
        </div>
      </div>
    </a>
    <a href="/" aria-label="View Item">
      <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <img className="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-4 text-lg font-bold text-gray-100">The Starry Night</p>
          <p className="text-sm tracking-wide text-gray-300">
            Vincent Van Gogh’s most popular painting, The Starry Night was created by Van Gogh at the asylum in Saint-Rémy, where he’d committed himself in 1889.
          </p>
        </div>
      </div>
    </a>
    <a href="/" aria-label="View Item">
      <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <img className="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-4 text-lg font-bold text-gray-100">The Kiss</p>
          <p className="text-sm tracking-wide text-gray-300">
            Opulently gilded and extravagantly patterned, The Kiss, Gustav Klimt’s fin-de-siècle portrayal of intimacy, is a mix of Symbolism and Vienna Jugendstil, the Austrian variant of Art Nouveau.
          </p>
        </div>
      </div>
    </a>
    <a href="/" aria-label="View Item">
      <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <img className="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-4 text-lg font-bold text-gray-100">The Harvesters</p>
          <p className="text-sm tracking-wide text-gray-300">
            Bruegel’s fanfare for the common man is considered one of the defining works of Western art. This composition was one of six created on the theme of the seasons.
          </p>
        </div>
      </div>
    </a>
  </div>
  {/* <div className="text-center">
    <a href="/" aria-label="" className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
      
      <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
      </svg>
    </a>
  </div> */}
</div>
 {/* <div  className='w-full text-white my-24 '>
       
        </div>
        <div className='max-w-[1240px] mx-auto '>



<div className="mt-12 grid grid-cols-3 gap-2">
    <div className="h-12  ">
    <div className=' '>
         
         </div>
         
         <div className='max-w-[1240px] mx-auto '>
             <div className='text-center py-8'>
             </div>
  
 
             <div className='grid'>
                 
                 <div className='bg-blue text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
           
                     <div className='flex grid grid-cols-1 lg:grid-cols-2 relative'>
                   
                        
                     </div>
                     <p className='text-1xl  sm:text-3xl text-indigo-600 center text-center font-semibold '>Мандах Их Сургууль</p>
                     <p className='text-1xl sm:text-2xl  text-indigo-700 center text-center'>Мэдээлэл, Технологийн Сургууль</p>
                     <div className='text-2xl '>
                         <p className='flex py-3 text-sm sm:text-xl'>Мандах Их Сургуулийн Мэдээлэл, Технологийн Сургуулийн багш, оюутнуудын хамтын бүтээл юм. Нэг зорилготойгоор нэгдэн нийлсэн шинэ шинэлэг технологийг эрэлхийлэгч залуус тус аппликейшнийг үнэ төлбөргүйгээр танд хүргэж байна.</p>
                        
                         
                     </div>
                 </div>
                 
             </div>
 
         </div>
    </div>
    <div className="h-12 ">
    <div className=' '>
         
         </div>
         
         <div className='max-w-[1240px] mx-auto '>
             <div className='text-center py-8'>
             </div>
  
 
             <div className='grid'>
                 
                 <div className='bg-blue text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
           
                     <div className='flex grid grid-cols-1 lg:grid-cols-2 relative'>
                   
                     </div>
                     <p className='text-1xl  sm:text-3xl text-indigo-600 center text-center font-semibold '>Мандах Их Сургууль</p>
                     <p className='text-1xl sm:text-2xl  text-indigo-700 center text-center'>Мэдээлэл, Технологийн Сургууль</p>
                     <div className='text-2xl '>
                         <p className='flex py-3 text-sm sm:text-xl'>Мандах Их Сургуулийн Мэдээлэл, Технологийн Сургуулийн багш, оюутнуудын хамтын бүтээл юм. Нэг зорилготойгоор нэгдэн нийлсэн шинэ шинэлэг технологийг эрэлхийлэгч залуус тус аппликейшнийг үнэ төлбөргүйгээр танд хүргэж байна.</p>
                        
                         
                     </div>
                 </div>
                 
             </div>
 
         </div>
    </div>
    <div className="h-12 ">
    <div className=' '>
         
         </div>
         
         <div className='max-w-[1240px] mx-auto '>
             <div className='text-center py-8'>
             </div>
  
 
             <div className='grid'>
                 
                 <div className='bg-blue text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
           
                     <div className='flex grid grid-cols-1 lg:grid-cols-2 relative'>
                   
                        
                     </div>
                     <p className='text-1xl  sm:text-3xl text-indigo-600 center text-center font-semibold '>Мандах Их Сургууль</p>
                     <p className='text-1xl sm:text-2xl  text-indigo-700 center text-center'>Мэдээлэл, Технологийн Сургууль</p>
                     <div className='text-2xl '>
                         <p className='flex py-3 text-sm sm:text-xl'>Мандах Их Сургуулийн Мэдээлэл, Технологийн Сургуулийн багш, оюутнуудын хамтын бүтээл юм. Нэг зорилготойгоор нэгдэн нийлсэн шинэ шинэлэг технологийг эрэлхийлэгч залуус тус аппликейшнийг үнэ төлбөргүйгээр танд хүргэж байна.</p>
                        
                         
                     </div>
                 </div>
                 
             </div>
 
         </div>
    </div>
</div>
    </div> */}
    {/* <div className="grid grid-cols-3 gap-4 m-10">
  <div className="...">01</div>
  <div className="...">02</div>
  <div className="...">03</div>
  <div className="col-span-2 ...">04</div>
  <div className="...">05</div>
  <div className="...">06</div>
  <div className="col-span-2 ...">07</div>
</div> */}
    </>
  )
}
