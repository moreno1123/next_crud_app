import { BiEdit, BiTrashAlt } from 'react-icons/bi';
import data from '../database/data.json';


export default function Table(){
  return(
    <table className="min-w-full table-auto">
      <thead>
          <tr className="bg-gray-800">
            <th className="px-16 py-4">
              <span className="text-gray-200">Ime</span>
            </th>
            <th className="px-16 py-4">
              <span className="text-gray-200">Email</span>
            </th>
            <th className="px-16 py-4">
              <span className="text-gray-200">Plaća</span>
            </th>
            <th className="px-16 py-4">
              <span className="text-gray-200">Datum rođenja</span>
            </th>
            <th className="px-16 py-4">
              <span className="text-gray-200">Status</span>
            </th>
            <th className="px-16 py-4">
              <span className="text-gray-200">Akcije</span>
            </th>
          </tr>
      </thead>
      <tbody>
          {
            data.map((object, id) => <Tr {...object} key={id} />)
          }
      </tbody>
    </table>
  )
}

function Tr({ id, name, avatar, email, salary, date, status }){
  return(
    <tr className="bh-gray-50 text-center">
      <td className="px-16 py-2 flex flex-row items-center">
        <img src={avatar || "#"} alt="" />
        <span className="text-center ml-2 font-semibold">{name || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{email || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{salary || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{date || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <button className="cursor"><span className="bg-green-500 text-white px-5 py-1 rounded-full">{status || "Unknown"}</span></button>
      </td>
      <td className="px-16 py-2 flex justify-around gap-5">
        <button className="cursor"><BiEdit size={25} color={"rgb(35,197,94)"}></BiEdit></button>
        <button className="cursor"><BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt></button>
      </td>
    </tr>
  )
}