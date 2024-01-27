const Icon = ({ imgSrc, link, altText }) => {
  return (
    <div className='rounded-2xl bg-gradient-to-bl from-indigo-200 to-cyan-200 flex flex-col justify-center p-5 h-[128px] hover:brightness-90'>
      <a href={link}>
        <img className='w-[128px] h-auto' src={imgSrc} alt={altText} />
      </a>
    </div>
  )
}

export default Icon;