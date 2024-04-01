import React from 'react'



export default function ProfileCard(props:any) {

    console.log("props: ", props);
    console.log("props.displayName: ", props.displayName);
    
  return (
    <div className="flex items-center gap-x-4">
        <img className="h-10 w-10 rounded-full bg-gray-50" src={props.photoURL} alt="Profile"/>
        <div className="">
            <div className="font-semibold text-cyan-600">{props.displayName}</div>
            <div className="cursor-pointer text-sm" onClick={props.signOutFxn}>Sign Out</div>
        </div>
    </div>
  )
}
