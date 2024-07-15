import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLoginMutation } from '../../services/api'
import useAuth from '../../services/auth'

const Login = () => {
    const { login, isLoading, errMessage } = useAuth()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = async (e) => {
        e.preventDefault()
        try {
            const result = await login({ username, password })
            console.log('login success: ' + result)

        } catch (error) {
            console.error('failed to login: ', error.error)
        }

    }

    return (
        <div className='flex'>
            <div className="h-screen bg-black">
                <img src="https://images.unsplash.com/photo-1611638281871-1063d3e76e1f?q=80&w=1433&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='object-cover h-full w-full' />

            </div>
            <div className="flex flex-1 flex-col mx-10 justify-center gap-5">
                <div className="flex justify-center">
                    <div className="absolute top-10">
                        <p className='text-4xl font-bold'>BandungVoyage</p>
                    </div>
                </div>
                <p className='font-bold text-2xl'>Masuk</p>
                <form onSubmit={onLogin} className='flex flex-col gap-5'>

                    <div className="">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input
                                type="text"
                                className="grow"
                                placeholder="Username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input
                                type="password"
                                className="grow"
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <button className="btn btn-block btn-accent" type='submit' disabled={isLoading}>
                        {
                            isLoading
                                ?
                                <span className="loading loading-dots loading-md"></span>
                                :
                                <p className='text-lg'>Login</p>
                        }
                    </button>
                </form>
                <p>Tidak memiliki akun? <Link to='/register' className='underline' hidden={isLoading}>Daftar</Link></p>
                {
                    errMessage && <p>{errMessage}</p>
                }
            </div>
        </div>
    )
}

export default Login