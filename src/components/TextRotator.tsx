import React from 'react'

function TextRotator() {
  return (
   
    <div
    className="py-4  rounded-md flex flex-col justify-center items-center overflow-hidden"
  >
    <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700">
    I am a Game Developer &
      <span
        className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden"
      >
        <ul
          className="block text-left font-rubik text-lg sm:text-3xl leading-tight [&_li]:block animate-text-slide"
        >
          <li className="text-[#419ad5]">Freelancer</li>
          <li className="text-[#419ad5]">Data Scientist</li>
          <li className="text-[#419ad5]">Gamer</li>
          <li className="text-[#419ad5]">Book Lover</li>
          <li className="text-[#419ad5]">Contributer</li>
          <li className="text-[#419ad5]">AI Systems Architecture</li>
        </ul>
      </span>
    </div>
  </div>
  )
}

export default TextRotator