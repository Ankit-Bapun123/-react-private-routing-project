import React from 'react';

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-400 p-6">
      <div className="w-[90%] max-w-5xl bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-lg flex gap-6 p-4 text-white">

        <div className='w-1/2'>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/053/630/747/small/a-beautiful-young-woman-in-a-business-suit-photo.jpeg" alt="img" className="rounded-2xl object-cover h-full w-full " />

        </div>
        <div className='w-1/2'>
          <form>
            <h1 className="font-extrabold mb-4">Contact Us</h1>
            <h1 className='font-semibold'>Name <span className='text-red-500'>*</span></h1>
            <div className="flex gap-4">
              <input type="text" placeholder="First Name" className="border border-black rounded p-2 w-1/2 bg-transparent" />
              <input type="text" placeholder="Last Name" className="border border-black rounded p-2 w-1/2 bg-transparent" />

            </div>

            <h1 className='font-semibold'>Email <span className='text-red-500'>*</span></h1>
            <input type="email" placeholder="Enter Your Email" className="border border-black rounded p-2 w-1/2 mt-4 bg-transparent" /> <br />
            <h1 className='font-semibold'>Leave us a few words <span className='text-red-500'>*</span></h1>
            <textarea placeholder="" className="border border-black rounded p-2 w-full resize-none h-32 text-white bg-transparent" />

            <button className="text-white font-medium px-6 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition duration-300"
            >Submit</button>

          </form>


        </div>
      </div>
    </div>
  );
};

export default Contact;




