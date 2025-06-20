import React,{useState} from 'react'
import authService from '../appwrite/auth.js'
import {Button, Logo, Input} from "./index.js"
import {login as authLogin} from "../store/authSlice.js"
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Signup() {
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const create = async (data) =>{
        setError("")
        try {
            const userSession = await authService.createAccount(data)
            if(userSession){
              const userData = await authService.getCurrentUser()
                if(userData){
                    dispatch(authLogin(userData))
                    navigate("/")
                }
            } 
        } catch (error) {
            setError(error.message)
        }
    }
    return (
      <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                
                <form onSubmit={handleSubmit(create)}>
                 <div className='space-y-5'>
                    <Input
                    label="Name "
                    placeholder="enter you name"
                    type="text"
                    {...register("name",{
                        required: true
                    })}/>
                    <Input 
                    type="email"
                    label="Email "
                    placeholder="enter email"
                    {...register("email",{
                        required:true,
                        validate:{
                            matchPatern:(value)=> /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || "email address must be valid"
                        }
                    })}/>
                    <Input 
                    type="password"
                    label="Password"
                    placeholder="enter password"
                    {...register("password",{
                        required:true
                    })}
                    />
                <Button type='submit' className='w-full'>
                    Signup
                </Button>
                 </div>
                </form>
            
            </div>
        </div>
  )
}

export default Signup