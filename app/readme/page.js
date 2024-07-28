"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const readme = () => {
  const { data: session } = useSession()

  if(session){
      const router = useRouter()
      router.push('/dashboard')
  }

  return (
    <>
      <div className='mb-5 lg:bg-none '>
        <Link className='sm:flex hidden items-center container mx-auto w-[13%]' href={"/"}>
          <img src="/logo.png" width={250} alt="" />
        </Link>
      </div>
      <div className='w-[393px] container mx-auto rounded-3xl pb-4 bg-gray-950 sm:h-[50vh] h-[65vh] sm:w-[40vw] hover:shadow-[0px_20px_30px_0px_#ed64a6]'>

        <div className='text-white items-center justify-center text-center container mx-auto mt-5 rounded-xl font-bold text-3xl w-[50%]'>
          <h1>Sign in to your account</h1>
        </div>

        <div className='rounded-xl overflow-hidden w-[60%] container mx-auto'>
          <form className='space-y-4 md:space-y-6'>

            <div className='mt-5'>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" className='bg-gray-600 text-white rounded-lg block w-full p-2' placeholder='Your Email' required=""></input>
            </div>

            <div className='mt-5'>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" className='bg-gray-600 text-white rounded-lg block w-full p-2' placeholder='•••••••' required=""></input>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" className="w-5 h-4 border border-gray-300 rounded bg-gray-50" required=""></input>
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                </div>
              </div>
              <a href="#" className="text-sm font-medium hover:underline text-blue-500">Forgot password?</a>
            </div>

            <div>
              <button type="button" className="text-white w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 blur-sm hover:blur-0 transition-all ease-in-out">Sign in</button>
              <p className="text-sm font-normal text-gray-400 mt-2">Don't have an account yet?
                <a href="#" className="font-medium text-blue-500 hover:underline dark:text-primary-500">Sign up</a>
              </p>
            </div>
          </form>
        </div>

      <div className="bg-white h-1 opacity-25 mt-5"></div>

      <div className='text-center text-2xl font-bold'>OR</div>

        <div className='flex border border-gray-300 sm:w-[30%] bg-gray-300 hover:bg-white text-black font-semibold rounded-xl mt-4 justify-center container w-[80%] mx-auto'>
          <button type='button' onClick={()=>{signIn("github")}}>
            <span className='flex flex-row items-center'><img width={35} src='/githublogo.png' alt='' /><span>Continue with GitHub</span></span>
          </button>
        </div>
      </div>

    </>
  )
}

export default readme
