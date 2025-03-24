import React from 'react'

const Account = () => {
  return (
  <div>
    <div className='w-full h-17 flex pl-4 text-[18px] items-center bg-white'>Account Settings</div>
    <div className='px-5'>
      <div className='flex'>
        <img src='/Ellipse.png'  alt="img" />
        <div className='flex-col'>
          <p className='font-medium pl-5'>Marry Doe</p>
          <p className='pl-5'>Marry@Gmail.Com</p>
        </div>
      </div>
        <p className='text-[14px] mt-7.5 w-[337px]'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
    </div>
    <div className="bg-transparent mt-4 rounded-lg shadow-sm h-[520px] border-dashed border-2 border-gray-300 border-x-0"></div>
  </div>
  )
}

export default Account