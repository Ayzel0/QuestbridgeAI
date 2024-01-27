import ReactLogo from './assets/react.svg';
import TailwindLogo from './assets/tailwindLogo.svg';
import PythonLogo from './assets/pythonLogo.svg';

const BottomBar = () => {
  return (
    <div className='bg-zinc-500 flex items-center'>
      <h1 className='inline-block ml-12 text-white text-lg'>Made for the 2024 Hoya Hacks Hackathon. Data from Questbridge; AI Chatbot powered by Azure and Cloudforce.</h1>
      <div className='flex flex-row-reverse ml-auto'>
        <div className='flex flex-col w-[15vw]'>
          <h1 className='text-white text-lg font-semibold my-5'>Made with:</h1>
          <div className='flex flex-row mb-5'>
            <img 
              src={ReactLogo} 
              className='w-12 h-12 mx-1'
            />
            <img 
              src={TailwindLogo}
              className='w-12 h-12 mx-1'
            />
            <img 
              src={PythonLogo}
              className='w-12 h-12 mx-1'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomBar;