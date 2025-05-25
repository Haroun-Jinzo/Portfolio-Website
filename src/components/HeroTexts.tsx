import TextRotator from "./TextRotator";

 
const HeroTexts = () => {
 
  
  return (
    <>
      <h3 className="text-[#20264a] font-poppins text-2xl max-sm:text-xl" >My Name is</h3>
      <h1 className="text-[#1b2a80] font-rubik text-8xl name_underline text-primary max-sm:text-6xl " >
        Haroun <br /> Khmiri.
      </h1>
        <TextRotator/>
     
    </>
  );
};
export default HeroTexts