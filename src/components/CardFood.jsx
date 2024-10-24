import CardImg1 from '../assets/cardimage1.webp'
const CardFood = ({img, name, className = '', href}) => {
	return (
		<a href={href} className={`relative cursor-pointer ` + className} >
			<div className="absolute w-full h-full bg-white brightness-[.60] bg-cover bg-center rounded" style={{backgroundImage: `url(${img})`}}/>
			<div className="w-full h-full text-gray-200 hover:text-yellow-400 absolute z-10 flex items-center justify-center" >
				<p className="font-semibold text-center px-1 py-2 text-base sm:text-xl md:text-xl lg:text-2xl">{name}</p>
			</div>
		</a>
	)
}

export default CardFood;