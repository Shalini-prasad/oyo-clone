
import Image from "next/image"
import PromoCard from "./PromoCard"

const Header = () => {
  return (
    <header className="flex justify-between">   
     <Image src="/images/oyo-logo-transparent.png" alt="logo" width={50} height={50}/>
     <div className="flex">
     <PromoCard detailTitle = "List your property" detailInfo="Start earning in 30 mins"/>
     <PromoCard detailTitle = "OYO for Business" detailInfo="Trusted by 5000 Corporates"/>
     <PromoCard detailTitle = "Become a Member" detailInfo="Additional 10% off on stays"/>
     <PromoCard detailTitle = "0124-6201611" detailInfo="Call us to Book now"/>    


     </div>
    </header>
  )
}

export default Header
// oyo-clone\public\oyo-logo.png