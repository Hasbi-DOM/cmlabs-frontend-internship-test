
import { useEffect, useState } from "react";
import CardFood from "../components/CardFood";
import Slider from "../components/Sliders";
import axios from "axios";

function Home() {
	const [dataCategory, setDataCategory] = useState([])
	useEffect (() => {
		const getFoodCategory = async () => {
			await fetch(
				'https://www.themealdb.com/api/json/v1/1/categories.php'
			) 
			.then((response) => response.json())
			.then((data) => (
				setDataCategory(data.categories)
			))
		}
		getFoodCategory()
	}, [])
  return (
    <div className="w-full h-screen">
      <Slider/>
	  <div className="w-full space-y-2 py-2">
	  	<div className="w-full flex justify-center bg-red-800 py-2">
			<p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-yellow-400 font-bold">What Will You Cook Next ?</p>
		</div>
		<div className=" w-full flex flex-wrap gap-4 justify-center">
			{
				dataCategory.map((data, index) => (
					<CardFood href={`/category-detail` + `/?str=&category=${data.strCategory}`} className="h-44 w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5" key={index} img={data.strCategoryThumb} name={data.strCategory}/>
				))
			}
		</div>
	  </div>
    </div>
  );
}

export default Home;
