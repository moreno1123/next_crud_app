import { useReducer } from "react"
import { BiBrush } from 'react-icons/bi'
import Success from '../components/success';
import Error from '../components/error';

export default function UpdateUserFrom(){

  const formReducer = (state, event) => {
    return{
      ...state,
      [event.target.name]: event.target.value
    }
  }

  const [formData, setFormData] = useReducer(formReducer, {})

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.keys(formData).length == 0) return console.log("Don't have form data")
    console.log(formData)
  }

  if(Object.keys(formData).length > 0) return <Success message={"Data added"}></Success>

  return(
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input type="text" name="firstname" onChange={setFormData} placeholder="FirstName" className="border w-full px-5 py-2 focus:outline-none rounded-md"></input>
      </div>

      <div className="input-type">
        <input type="text" name="lastname" onChange={setFormData} placeholder="Lastname" className="border w-full px-5 py-2 focus:outline-none rounded-md"></input>
      </div>

      <div className="input-type">
        <input type="text" name="email" onChange={setFormData} placeholder="Email" className="border w-full px-5 py-2 focus:outline-none rounded-md"></input>
      </div>

      <div className="input-type">
        <input type="text" name="salary" onChange={setFormData} placeholder="Salary" className="border w-full px-5 py-2 focus:outline-none rounded-md"></input>
      </div>

      <div className="input-type">
        <input type="date" name="date" onChange={setFormData} placeholder="Date" className="border px-5 py-5 focus:outline-none rounded-md"></input>
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input type="radio" onChange={setFormData} value="Active" id="radioDefault1" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
          <label htmlFor="radioDefault1" className="inline-block text-gray-500">
            Active
          </label>
        </div>

        <div className="form-check">
          <input type="radio" onChange={setFormData} value="Inactive" id="radioDefault2" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
          <label htmlFor="radioDefault2" className="inline-block text-gray-500">
            Inactive
          </label>
        </div>
      </div>

        <button className="flex justify-center text-md w-2/6 bg-yellow-400-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
        Update<span className="px-1"><BiBrush size={24}></BiBrush></span>
        </button>
 
    </form>
  )
}