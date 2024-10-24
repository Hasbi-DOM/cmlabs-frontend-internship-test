import React from 'react'
import './index.css'
import { Routes, Route} from 'react-router-dom'
import LayoutPage from './layout/LayoutPage'
import Home from './pages/Category'
import CategoryDetail from './pages/CategoryDetail'
import MealsDetail from './pages/MealsDetail'

export default function App () {
	return (
		<React.Fragment>
			<Routes>
				<Route path='/' element={<LayoutPage/>}>
					<Route path='' element={<Home/>}></Route>
					<Route path='/category-detail' element={<CategoryDetail/>}></Route>
					<Route path='/meals-detail' element={<MealsDetail/>}></Route>
				</Route>
			</Routes>
		</React.Fragment>
	)
}