import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import fafsa from './assets/fafsa.png';
import css from './assets/css.png';
import QuestbridgeLogo from './assets/questbridgeLogo.png';
import AzureLogo from './assets/AzureLogo.webp';
import CloudforceLogo from './assets/cloudforceLogo.png';
import OpenAILogo from './assets/OpenAILogo.png';
import Icon from './Icon';

const HowItWorks = () => {
  return (
    <div>
      <TopBar/>
      <div className="flex-col justify-center">
        <div className='bg-zinc-800 m-0 flex flex-row justify-center mb-5'>
          <h2 className='text-2xl text-white py-5'> &#128202; Driven by <span className='text-indigo-400 font-semibold'>data</span></h2>
        </div>
        <div className='flex max-w-[850px] w-auto mx-auto text-center'>
          <h2 className="text-xl mb-5">
            Using the most recent information from trusted university partners and sources, <br></br> we scraped information from <span className='text-indigo-400 font-semibold'>cost of attendance</span> to <span className='text-indigo-400 font-semibold'>student culture</span> so you don't have to look.
          </h2>
        </div>
        <div className="flex justify-center mb-10">
          <Icon 
            link={'https://www.questbridge.org/'}
            imgSrc={QuestbridgeLogo}
            altText={'questbridge logo'}
          />
        </div>
        <div className='bg-zinc-800 m-0 flex flex-row justify-center mb-5'>
          <h2 className='text-2xl text-white py-5'> &#128218; We have <span className='text-cyan-400 font-semibold'>options</span></h2>
        </div>
        <div className='flex max-w-[850px] w-auto mx-auto text-center'>
          <h2 className="text-xl mb-5">
            Our chatbot is an expert on <span className='text-cyan-400 font-semibold'>every</span> institution on Questbridge,<br></br>so you can compare and contrast to find the <span className='text-cyan-400 font-semibold'>perfect fit</span>
          </h2>
        </div>
        <div className="flex justify-center mb-10">
          <Icon 
            link={'https://www.questbridge.org/'}
            imgSrc={QuestbridgeLogo}
            altText={'questbridge logo'}
          />
        </div>
        <div className='bg-zinc-800 m-0 flex flex-row justify-center mb-5'>
          <h2 className='text-2xl text-white py-5'> &#128184; Money <span className='text-indigo-400 font-semibold'>matters</span></h2>
        </div>
        <div className='flex max-w-[850px] w-auto mx-auto text-center'>
          <h2 className="text-xl mb-5">
            We include <span className='text-indigo-400 font-semibold'>up-to-date</span> information about financial aid applications, <br></br>so you <span className='text-indigo-400 font-semibold'>never</span> miss a deadline
          </h2>
        </div>
        <div className="flex justify-center gap-10 mb-10">
          <div className='m-5'>
            <Icon 
              link={'https://studentaid.gov/h/apply-for-aid/fafsa'}
              imgSrc={fafsa}
              altText={'fafsa logo'}
            />
          </div> 
          <div className='m-5'>
            <Icon 
              link={'https://cssprofile.collegeboard.org'}
              imgSrc={css}
              altText={'css logo'}
            />
          </div> 
        </div>
        <div className='bg-zinc-800 m-0 flex flex-row justify-center mb-5'>
          <h2 className='text-2xl text-white py-5'> &#9729; Innovation is <span className='text-cyan-400 font-semibold'>key</span></h2>
        </div>
        <div className='flex max-w-[850px] w-auto mx-auto text-center'>
          <h2 className="text-xl mb-5">
            Our solution is backed by leading <br></br> <span className='text-cyan-400 font-semibold'>cloud</span> and <span className='text-cyan-400 font-semibold'>artificial intelligence</span> solutions in the industry
          </h2>
        </div>
        <div className="flex justify-center items-center gap-10 mb-10">
          <div className='m-5'>
            <Icon 
              link={'https://azure.microsoft.com/en-us/'}
              imgSrc={AzureLogo}
              altText={'azure logo'}
            />
          </div>
          <div className='m-5'>
            <Icon 
              link={'https://gocloudforce.com'}
              imgSrc={CloudforceLogo}
              altText={'cloudforce logo'}
            />
          </div>
          <div className='m-5'>
            <Icon 
              link={'https://openai.com'}
              imgSrc={OpenAILogo}
              altText={'openai logo'}
            />
          </div>
        </div>
        <div className="text-center">
          <div className='bg-zinc-100 flex flex-row justify-center'>
            <button className='rounded-full bg-cyan-300 hover:bg-cyan-400 py-4 px-8 my-10'>Try our Chatbot!</button>
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  )
}

export default HowItWorks;