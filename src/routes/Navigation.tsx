import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { routes } from './routes'

const Navigation = () => {
	return (
		<Suspense fallback={<span>Cargando</span>}>
			<BrowserRouter>
				<div className='main-layout'>
					<nav>
						<ul>
							{routes.map(({ to, path, name }) => (
								<li key={path}>
									<NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink>
								</li>
							))}
						</ul>
					</nav>
					<Routes>
						{routes.map(({ path, Component }) => (
							<Route key={path} path={path} element={<Component />} />
						))}
						<Route path="/*" element={<Navigate to={routes[0].to} replace />} />
					</Routes>
				</div>
			</BrowserRouter>
		</Suspense>
	)
}

export default Navigation