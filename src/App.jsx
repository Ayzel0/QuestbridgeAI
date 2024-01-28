import QuestbridgeLogo from './assets/questbridgeLogo.png';
import AzureLogo from './assets/AzureLogo.webp';
import CloudforceLogo from './assets/cloudforceLogo.png';
import OpenAILogo from './assets/OpenAILogo.png';
import Icon from './Icon';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import Chatbot from './Chatbot';

function App() {
  return (
    <>
      <div>
        <TopBar />
        <div className='flex flex-col items-center relative h-[40vh] bg-gradient-to-br from-slate-400 to-teal-200 m-0'>
          <h1 className='absolute left-16 top-10 font-semibold text-4xl'>Say goodbye to endless college spreadsheets...</h1>
          <h1 className='absolute right-16 top-[28vh] font-semibold text-4xl text-black'>...and say hello to the Questbridge AI Helper.</h1>
        </div>
        <div className='bg-zinc-800 m-0 flex flex-row justify-center'>
          <h2 className='text-2xl text-white py-5'>Making college admissions more <span className='text-indigo-400 font-semibold'>equitable</span> and <span className='text-cyan-400 font-semibold'>accessible</span> for all.</h2>
        </div>
        <div className='flex flex-row justify-center bg-white'>
          <div className='m-5'>
            <Icon 
              link={'https://www.questbridge.org/'}
              imgSrc={QuestbridgeLogo}
              altText={'questbridge logo'}
            />
          </div>
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
        <div className='bg-zinc-200 flex flex-row justify-center'>
          <button className='rounded-full bg-teal-400 hover:bg-teal-500 py-4 px-8 my-10'>Try our Chatbot!</button>
        </div>
        <BottomBar />
      </div>
    </>
  )
}

export default App
