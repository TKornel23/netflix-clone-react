import React from 'react'

function SignIn() {
  return (
<div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='Background'/>
        <div className='bg-black/60 w-full h-screen fixed top-0 left-0'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>
                        Sign In
                    </h1>
                    <form className='w-full flex flex-col py-4'>
                        <input className='p-3 my-3 bg-gray-800 rounded' type='email' placeholder='email'/>
                        <input className='p-3 my-3 bg-gray-800 rounded' type='password' placeholder='password'/>                        
                        <button className=' bg-red-700 my-3 py-2 rounded'>
                            Sign Up
                        </button>
                        <div className='text-sm text-gray-600 flex flex-row items-center justify-between'>
                            <p>
                                <input type='checkbox' className='mr-2' />
                                Remember me
                            </p>
                            <p>
                                Need help?
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn