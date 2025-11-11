import React from 'react'

function TextRotator() {
  return (
   
    <div
    className="py-4  rounded-md flex flex-col justify-center items-center overflow-hidden">
    
    <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700">

        <li className="font-poppins text-lg w-full text-primary max-sm:text-base bg-gradient-to-r from-white/50 via-green-200/50 to-blue-600/50 p-4 rounded-lg shadow-md">I am a Data Scientist &</li>
      <span
        className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden"
      >
        <ul
          className="block text-left font-rubik text-lg sm:text-3xl leading-tight [&_li]:block animate-text-slide"
        >
          <li className="text-[#419ad5]">Freelancer</li>
          <li className="text-[#419ad5]">AI Systems Architecture</li>
          <li className="text-[#419ad5]">Gamer</li>
          <li className="text-[#419ad5]">Book Lover</li>
          <li className="text-[#419ad5]">Game Developer</li>
          <li className="text-[#419ad5]">Contributer</li>
        </ul>
      </span>
    </div>
  </div>
  )
}

export default TextRotator