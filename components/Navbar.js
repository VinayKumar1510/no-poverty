"use client"
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import React, {useState} from 'react'

const Navbar = () => {
    const { data: session } = useSession()
    const [showdropdown, setshowdropdown] = useState(false)
    return (
        <nav className='bg-black text-white flex justify-between text-center items-center px-4 flex-col md:flex-row'>
            <Link className='logo font-bold text-xl flex justify-center items-center hover:scale-125' href={"/"}>
                <img className='mt-2' src="/logo.png" width={100} alt="" />
            </Link>
            <ul className='flex justify-between gap-10 font-bold text-xl text-blue-200'>
                <Link className='hover:underline hover:text-white' href="/">Home</Link>
                <Link className='hover:underline hover:text-white' href="/about">About</Link>
                <Link className='hover:underline hover:text-white' href="/news">News</Link>
                <Link className='hover:underline hover:text-white' href="/blog">Blog</Link>
            </ul>

            <div className='relative'>
                {session && <>
                    <button onClick={()=> setshowdropdown(!showdropdown)} onBlur={()=> setshowdropdown(false)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mx-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                    </button>

                    <div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} absolute left-[125px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                            </li>
                            <li>
                                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                            </li>
                            <li>
                                <Link onClick={()=> signOut()} href="/readme" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                            </li>
                        </ul>
                    </div>
                </>
                }

                {session && <button type='button' className="text-white brightness-100 hover:brightness-110 transition-all delay-75 outline-none bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-1 hover:scale-125" onClick={() => { signOut() }}>Logout</button>}

                {!session &&
                    <Link href={"/readme"}>
                        <button type='button' className="text-white brightness-100 hover:brightness-110 transition-all delay-75 outline-none bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-1 hover:scale-125">Login</button>
                    </Link>}

                <Link href={"/contact"}>
                    <button type='button' className="text-white brightness-100 hover:brightness-110 transition-all delay-75 outline-none bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-1 hover:scale-125">Contact</button>
                </Link>
            </div>

        </nav>
    )
}

export default Navbar