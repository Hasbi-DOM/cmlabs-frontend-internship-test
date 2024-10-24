import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
const LayoutPage = () => {
	return (
		<div>
			<Header/>
			<main className={window.location.pathname == '/' ? `pt-0` : 'pt-12'}>
				<Outlet/>
			</main>
		</div>
	)
}

export default LayoutPage