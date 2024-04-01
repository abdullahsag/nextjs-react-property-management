import React from 'react'

export default function Hexagonal() {
  return (
    <div className="relative rounded-xl overflow-auto">
        <div className="flex justify-start sm:block overflow-scroll sm:overflow-visible scroll-p-8">
            <div className="flex items-center justify-around gap-6 sm:gap-4 font-mono font-bold shrink-0 p-8">
                <div className="flex flex-col items-center shrink-0">
                    <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">drop-shadow-md</p>
                    <svg className="drop-shadow-md h-28 w-28" viewBox="0 0 84 84" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" fill="#fff"></path>
                    </svg>
                </div>
                <div className="flex flex-col items-center shrink-0">
                    <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">drop-shadow-lg</p>
                    <svg className="drop-shadow-lg h-28 w-28" viewBox="0 0 84 84" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" fill="#fff"></path>
                    </svg>
                </div>
                <div className="flex flex-col items-center shrink-0">
                    <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">drop-shadow-xl</p>
                    <svg className="drop-shadow-xl h-28 w-28" viewBox="0 0 84 84" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" fill="#fff"></path>
                    </svg>
                </div>
                <div className="flex flex-col items-center shrink-0">
                    <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">drop-shadow-2xl</p>
                    <svg className="drop-shadow-2xl h-28 w-28" viewBox="0 0 84 84" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" fill="#fff"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
  )
}