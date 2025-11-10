import logo from "../../public/css.png";
import Image from "next/image"

const HeroImage = ()  => {



    return(
        <>
          <Image
          src={logo}
          alt="logo"
          loading="eager"
          priority
          height={1}
          width={1}
        />
        </>
    )
}
export default HeroImage