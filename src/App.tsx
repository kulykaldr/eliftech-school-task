import React from 'react'
import { Routes, Route, NavLink } from "react-router-dom"
import Mortgage from './Mortgage'
import BanksTable from './BanksTable'

const App = () => {
  return (
    <main className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to='/' className="nav-link" style={({ isActive }) => ({ color: isActive ? "red" : "" })}>
                  Bank List
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to='mortgage' className="nav-link" style={({ isActive }) => ({ color: isActive ? "red" : "" })}>
                  Mortgage
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<BanksTable />} />
        <Route path="mortgage" element={<Mortgage />} />
      </Routes>
    </main>
  )
}

export default App
