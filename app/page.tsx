"use client"
import { authenticate } from '@/app/lib/actions'
import { useFormState, useFormStatus } from 'react-dom'


export default function Home() {

  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const gradientTextStyle = "text-white text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 font-light w-fit mx-auto";

  let statusColor = "text-slate-500";
  let statusText = null;

  return (
    <div className="h-screen flex">
      <div className="max-w-md m-auto p-2">
        <div className="bg-slate-800 p-6 rounded-md text-white">
          <div className="text-center my-6">
            {/* <Image src={logo} width={42} height={42} /> */}
            <h1 className={gradientTextStyle + " text-3xl font-light"}>
              TNT Logistics
            </h1>
            <div className="{gradientTextStyle}">A reliable transportation service provider</div>
          </div>
{/* 
          <div className="mb-6 text-slate-400">
            <p>
              Tell me what your brand is about and I will generate copy and keywords
              for you.
            </p>
          </div> */}
          <form action={dispatch}>
            <input
              className="p-2 w-full mb-8 rounded-md focus:outline-teal-400 focus:outline text-slate-700"
              type="email"
              placeholder="Email"
              required
              ></input>

            <input
              className="p-2 w-full mb-8 rounded-md focus:outline-teal-400 focus:outline text-slate-700"
              type="password"
              placeholder="Password"
              required
            ></input>

            <div className="">
              <div>{errorMessage && <p>{errorMessage}</p>}</div>
              <LoginButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


function LoginButton() {
  const { pending } = useFormStatus()
 
  return (
    <button
      className="bg-gradient-to-r from-teal-400 
      to-blue-500 disabled:opacity-50 w-full p-2 rounded-md text-lg mb-6"
      aria-disabled={pending} type="submit">
      Submit
    </button>
  )
}