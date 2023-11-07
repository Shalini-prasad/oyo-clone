import Image from "next/image"

const PromoCard = ({detailTitle, detailInfo, promoLogo}) => {
  return (
    <div className="flex items-center gap-4 px-3 py-4 border-solid border-2 border-indigo-600">
      <div className="">
        <Image src = "/images/building.png" alt="building" width={30} height={30}/>
      </div>
      <div className="">
      <h2 className="flex font-bold font-sans text-sm">{detailTitle}</h2>
      <p className="text-xs">{detailInfo}</p>
      </div>
    </div>
  )
}

export default PromoCard