const Header = () => {
	return (
		<div className={ window.location.pathname == '/' ? `hidden px-16 py-2 w-full bg-red-800 fixed z-50 flex items-center justify-between` : `px-16 py-2 w-full bg-red-800 fixed z-50 flex items-center justify-between`}>
			<p className="text-yellow-400 text-2xl font-[Teko]">MealApp</p>
			<div className="flex items-center gap-6">
				<a href="#" className="text-yellow-200 hover:text-yellow-400">Home</a>  
				<a href="" className="text-yellow-200 hover:text-yellow-400">Foods</a>
				<a href="" className="text-yellow-200 hover:text-yellow-400">Ingredients</a>
				<a href="" className="text-yellow-200 hover:text-yellow-400">Local Culinary</a>
			</div>
		</div>
	)
}
export default Header