import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import {LazyPage1, LazyPage2, LazyPage3} from '../01-lazyload/pages'

const Navigation = () => {
	return (
		<BrowserRouter>
			<div className='main-layout'>
				<nav>
					<ul>
						<li>
							<NavLink to="/" className={({isActive})=> isActive ? 'nav-active': ''}>Lazy 1</NavLink>
						</li>
						<li>
							<NavLink to="/lazy2" className={({isActive})=> isActive ? 'nav-active': ''}>Lazy 2</NavLink>
						</li>
						<li>
							<NavLink to="/lazy3" className={({isActive})=> isActive ? 'nav-active': ''}>Lazy 3</NavLink>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="lazy2" element={<LazyPage2 />}/>
					<Route path="lazy3" element={<LazyPage3 />}/>
					<Route path="/" element={<LazyPage1 />}/>
					<Route path="/*" element={<Navigate to="/lazy1" replace/>}/>
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default Navigation