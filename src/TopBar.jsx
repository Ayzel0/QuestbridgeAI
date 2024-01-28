const TopBar = () => {
  return (
    <div className='flex flex-row-reverse bg-zinc-600'>
      <div className='flex flex-row-reverse mr-12'>
        <a 
          className='underline-offset-4 hover:underline-offset-8 underline transition-all text-2xl my-8 mx-6 cursor-pointer text-white'
          href='/'
        >Home</a>
        <a 
          className='underline-offset-4 hover:underline-offset-8 underline transition-all text-2xl my-8 mx-6 cursor-pointer text-white'
          href='/about'
        >About</a>
        <a 
          className='underline-offset-4 hover:underline-offset-8 underline transition-all text-2xl my-8 mx-6 cursor-pointer text-white'
        >Chatbot</a>
        <a 
          className='underline-offset-4 hover:underline-offset-8 underline transition-all text-2xl my-8 mx-6 cursor-pointer text-white'
          href='/how-it-works'
        >How it Works</a>
      </div>
    </div>
  )
}

export default TopBar;