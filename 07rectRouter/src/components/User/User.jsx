import { useParams } from "react-router-dom";


export default function User(){

   const {userId} = useParams()

   return(
    
    <div className="max-w-screen p-6  flex justify-center bg-white h-120" >
      <h1 className="bg-gray-300 rounded-md px-5 py-2 h-10  text-2xl text-blue-800"> The User id is: {userId}</h1>
    </div>
   )
}