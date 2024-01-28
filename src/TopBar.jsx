import MainLogo from './assets/mainLogo.png';

const TopBar = () => {
  return (
    <div className='h-32 bg-cyan-800 flex flex-col justify-center'>
      <div className='absolute top-2 left-10 w-[110px]'>
        <a href='/'><img src={MainLogo} /></a>
      </div>
      <div className='flex flex-row-reverse bg-inherit'>
        <div className='flex flex-row-reverse mr-12'>
          <a 
            className='underline-offset-4 hover:underline-offset-8 hover:text-cyan-400 underline transition-all text-2xl my-8 mx-6 cursor-pointer text-white'
            href='/about'
          >About</a>
          <a 
            className='underline-offset-4 hover:underline-offset-8 hover:text-cyan-400 underline transition-all text-2xl my-8 mx-6 cursor-pointer text-white'
            href='/how-it-works'
          >How it Works</a>
          <a 
            href='/chatbot'
            className='underline-offset-4 hover:underline-offset-8 hover:text-cyan-400 underline transition-all text-2xl my-8 mx-6 cursor-pointer text-white'
          >Chatbot</a>
          <a 
            className='underline-offset-4 hover:underline-offset-8 hover:text-cyan-400 underline transition-all text-2xl my-8 mx-6 cursor-pointer text-white'
            href='/'
          >Home</a>
        </div>
      </div>
    </div>
  )
}

export default TopBar;