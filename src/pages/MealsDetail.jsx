import { useState, useEffect } from "react";
import { IoMdHome } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function MealsDetail () {
	let idMeals = new URLSearchParams(window.location.href).get("meals")
	const apiGetMealsDetail = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeals}`
	const [dataMealsDetail, setDataMealsDetail] = useState([])
	useEffect (() => {
		const getFoodMealsDetail = async () => {
			await fetch(
				apiGetMealsDetail
			) 
			.then((response) => response.json())
			.then((data) => {
				setDataMealsDetail(data.meals[0])
		})
		}
		getFoodMealsDetail()
	}, [])
	let arr = []
	let recipes = []
	let volume = []
	for (let key in dataMealsDetail) {
		arr.push(dataMealsDetail[key]);
	}
	for (let i=0; i < 20; i++) {
		if (arr[9 + i] != "")
		recipes.push(arr[9 + i])
	}
	for (let i=0; i < 20; i++) {
		if (arr[9 + i] != "")
		volume.push(arr[29 + i])
	}
	const [expaded, setExpanded] = useState(false)
	const handleExpandedText = () => {
		setExpanded(true)
	}
	const handleShortenedText = () => {
		setExpanded(false)
	}
	return (
		<div className="pt-2 py-2 px-24 w-full space-y-2">
			<div className="flex items-center gap-2">
				<a href="/" className="flex items-center gap-2 cursor-pointer text-slate-500 hover:text-red-800">
					<IoMdHome className="text-base"/>
					<p className="text-sm ">Home</p>
				</a>
				<div>
					<IoIosArrowForward className="text-base text-slate-500"/>
				</div>
				<a href={`/category-detail` + `/?str=&category=${dataMealsDetail.strCategory}`} className="text-sm cursor-pointer text-slate-500 hover:text-red-800">Foods</a>
				<div>
					<IoIosArrowForward className="text-base text-slate-500"/>
				</div>
				<a href="#" className="text-sm text-slate-500 hover:text-red-800">Ingredients</a>
			</div>
			<p className="text-4xl text-red-800">{dataMealsDetail.strMeal}</p>
			<div className="w-full flex items-start gap-4">
				<div className="w-2/5">
					<img className="w-full" src={dataMealsDetail.strMealThumb} alt="meals" />
				</div>
				<div className="w-3/5 space-y-2">
					<div className="w-full">
						<p className="text-2xl">Instructions</p>
						<p className={expaded == true ? `text-base text-justify line-clamp-none leading-6` : `text-base text-justify line-clamp-6 leading-6`}>
							{
								dataMealsDetail.strInstructions
							}
						</p>
						{
							expaded ?
							<label onClick={handleShortenedText} id="expanded" className="cursor-pointer text-red-800 hover:text-red-400 underline underline-offset-2">Show Less</label> :
							<label onClick={handleExpandedText} id="expanded" className="cursor-pointer text-red-800 hover:text-red-400 underline underline-offset-2">Read More</label>
						}
					</div>
					<div className="w-full">
						<p className="text-2xl">
							Recipes
						</p>
						<div className="flex items-center gap-4">
							<ul className="flex flex-col items-center">
								{
									volume.map((info, index) => (
										<li key={index}>	
											{info}
										</li>
									))
								}
							</ul>
							<ul>
								{
									recipes.map((info, index) => (
										<li key={index}>	
											{info}
										</li>
									))
								}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MealsDetail;