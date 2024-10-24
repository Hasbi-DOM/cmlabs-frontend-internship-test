import CardFood from "../components/CardFood";
import { IoMdHome } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
function CategoryDetail () {
	let category = new URLSearchParams(window.location.href).get("category")
	const apiGetCategoryDetail = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
	const [dataCategoryDetail, setDataCategoryDetail] = useState([])
	useEffect (() => {
		const getFoodCategoryDetail = async () => {
			await fetch(
				apiGetCategoryDetail
			) 
			.then((response) => response.json())
			.then((data) => (
				setDataCategoryDetail(data.meals)
			))
		}
		getFoodCategoryDetail()
	}, [])
	return (
		<div className="pt-2">
			<div className="pl-20 flex items-center gap-2">
				<a href="/" className="flex items-center gap-2 cursor-pointer text-slate-500 hover:text-red-800">
					<IoMdHome className="text-base"/>
					<p className="text-sm ">Home</p>
				</a>
				<div>
					<IoIosArrowForward className="text-base text-slate-500"/>
				</div>
				<a href="#" className="text-sm text-slate-500 hover:text-red-800">Foods</a>
			</div>
			<div className="w-full flex flex-col items-center space-y-4 py-2">
				<p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-red-800 font-bold">{category} Meals</p>
				<div className=" w-full flex flex-wrap gap-4 justify-center">
				{
					dataCategoryDetail.map((data, index) => (
						<CardFood key={index} href={`/meals-detail` + `/?str=&meals=${data.idMeal}`} className="h-24 sm:h-24 md:h-40 lg:h-44 w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/6" name={data.strMeal} img={data.strMealThumb}/>
					))
				}
				</div>
			</div>
		</div>
	)
}

export default CategoryDetail;