import React from 'react'
import Sidebar from './Sidebar'

function Dashboard() {
  return (
    <div className="flex flex-col lg:flex-row lg:min-h-screen">
      <Sidebar/>
    </div>
  )
}

export default Dashboard