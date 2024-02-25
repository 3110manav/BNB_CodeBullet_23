import React from 'react'

const EndangerTable = ({data}) => {
  return (
    <div className="relative overflow-x-auto mb-5">
      <table className="w-1/2 text-md text-left rtl:text-right text-gray-500 rounded-md">
        <thead className="text-md text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Species Name
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((extinctAnimals, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {extinctAnimals}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EndangerTable