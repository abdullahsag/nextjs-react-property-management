import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { UserAuth } from '../context/AuthContext'
import Image from 'next/image'
import ProfileCard from './profile-card/profile-card'

export default function Navbar() {
    const {user, googleSignIn, logOut} =  UserAuth();
    const [loading, setLoading] = useState(true);

    const handleSignIn = async () => {
        try {
            let result = await googleSignIn();
            console.log("result: ", result);
            // setIsUserLoggedIn(true)
        }
        catch(error){
            console.log(error)
        }
    }

    const handleSignOut = async () => {
        try {
            await logOut()
        }
        catch(error){
            console.log(error)
        }
    }

    console.log("User: ", user, user?.displayName);
    if(user){
        console.log("--->", user.displayName);
    }

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            setLoading(false);
        };

        checkAuthentication();
    }, [user])

  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-16 w-full border-b-2 flex items-center justify-between p2'>
        <ul className='flex'>
            <li className='p-2 cursor-pointer'>
                <Link href="/">Home</Link>    
            </li>
            <li className='p-2 cursor-pointer'>
                <Link href="/dashboard">Dashboard</Link>    
            </li>    
            <li className='p-2 cursor-pointer'>
                <Link href="/playground">Playground</Link>    
            </li> 
            <li className='p-2 cursor-pointer'>
                <Link href="/about">About</Link>    
            </li> 
            <li className='p-2 cursor-pointer'>
                <Link href="/auth/login">Login</Link>    
            </li> 
            {!user ? null : (
            <li className='p-2 cursor-pointer'>
                <Link href="/profile">Profile</Link>    
            </li>
            )}
                
        </ul>
        
            {loading ? null : !user ? (
            <ul className="flex pr-5">
                <li className="p-2 cursor-pointer" onClick={handleSignIn}>
                    Sign In
                </li>
                <li className="p-2 cursor-pointer" onClick={handleSignIn}>
                    Sign Up
                </li>
            </ul>
            ) : (
            <div  className='flex mr-3'>
                <ProfileCard displayName={user.displayName} photoURL={user.photoURL} signOutFxn={handleSignOut}/>
            </div>
            )}
    </div>
  )
}
