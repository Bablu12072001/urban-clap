import React from 'react'

function DashboardTile({isBlue = false}) {
  return (
    <div className={`p-2 flex flex-row items-center ${isBlue ? 'text-gray-600' : 'text-blue-700'} shadow-sm bg-white`} >
        <div className='p-2'>
        <img
              src="https://via.placeholder.com/32"
              alt="User Avatar"
              className="h-6 w-6 sm:h-8 sm:w-8 rounded-full object-cover border border-gray-300"
        />
        </div>
        <div className='flex-1 flex-col'>
            <h5 className='text-xl'>92</h5>
            <div className='flex flex-row justify-between text-sm'>

            <p className='text-xs'>Total Users</p>
            <p className='text-blue-600 font-bold'>🛈</p>
            </div>
        </div>
    </div>
  )
}

export default DashboardTile