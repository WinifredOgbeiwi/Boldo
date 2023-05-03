import React from 'react'

function Button({ color, backgroundColor, border, text }) {
  return (
    <button className='rounded-[56px] px-[2rem] xl:px-[4.5rem] py-4 font-bold md:text-xl text-xs w-52 sm:w-fit' style={{color:color,backgroundColor:backgroundColor, border:border, }}>
      {text}
    </button>
  ) 
}

export default Button
