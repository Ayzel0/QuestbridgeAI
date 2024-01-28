import QuestbridgeLogo from './assets/questbridgeLogo.png';
import AzureLogo from './assets/AzureLogo.webp';
import CloudforceLogo from './assets/cloudforceLogo.png';
import OpenAILogo from './assets/OpenAILogo.png';
import Icon from './Icon';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import beforeAI from './assets/before.png';
import afterAI from './assets/after.png';

function App() {
  return (
    <>
      <div>
        <TopBar />
        <div className='flex flex-col items-center relative h-[40vh] bg-gradient-to-br from-indigo-400 to-cyan-200 m-0'>
          <h1 className='absolute left-16 top-10 font-semibold text-4xl'>Say goodbye to confusing college websites...</h1>
          <h1 className='absolute right-16 top-[28vh] font-semibold text-4xl text-black'>...and say hello to the Questbridge AI Helper.</h1>
        </div>
        <div className='bg-zinc-800 m-0 flex flex-row justify-center'>
          <h2 className='text-2xl text-white py-5'>Making college admissions more <span className='text-indigo-400 font-semibold'>equitable</span> and <span className='text-cyan-400 font-semibold'>accessible</span> for all.</h2>
        </div>
        <div className='bg-zinc-100'>
          <div className="flex-col justify-center items-center mb-10 p-10">
            <h2 className="text-2xl text-center mb-5">
              Using a chatbot <span className="text-indigo-400 font-bold">before</span> Questbridge AI
            </h2>
            <div className="flex justify-center items-center">
                <div className="hover:animate-pulse flex justify-center items-center bg-gradient-to-r from-indigo-200 to-cyan-200 p-4 h-100 w-auto mb-5 rounded-lg">
                  <img className=" h-60 w-auto" src={beforeAI} alt="OpenAI logo" />
                </div>
            </div>
            <ul className="flex flex-col items-center text-xl gap-2 p-10">
              <li>&#10060; Not specific to the college</li>
              <li>&#10060; Generic and easily searchable information</li>
              <li>&#10060; Subject to change each application cycle</li>
            </ul>
          </div>
          <div className="flex-col justify-center items-center">
            <h2 className="text-2xl text-center mb-5">
              Using a chatbot <span className="text-cyan-400 font-bold">after</span> QuestbridgeAI
            </h2>
            <div className="flex justify-center items-center">
              <div className="hover:animate-pulse flex justify-center items-center bg-gradient-to-r from-indigo-200 to-cyan-200 p-4 h-100 w-auto mb-5 rounded-lg">
                <img className="h-40 w-auto" src={afterAI} alt="OpenAI logo" />
              </div>
            </div>
            <ul className="flex flex-col items-center text-xl gap-2 p-10 pb-20">
              <li>✅ Tailored directly to the institution and your situation</li>
              <li>✅ Includes accurate emails and direct links for reliability</li>
              <li>✅ Updated with the latest from trustworthy sources</li>
            </ul>
          </div>
        </div>
        <div className='bg-zinc-800 m-0 flex flex-row justify-center'>
          <h2 className='text-2xl text-white py-5 text-bold'>Powered by</h2>
        </div>
        <div className='flex flex-row justify-center bg-white p-10'>
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
        <div className='bg-zinc-100 flex flex-row justify-center'>
          <a href={'/chatbot'} className='rounded-full bg-cyan-300 hover:bg-cyan-400 py-4 px-8 my-10'>Try our Chatbot!</a>
        </div>
        <BottomBar />
      </div>
    </>
  )
}

export default App
