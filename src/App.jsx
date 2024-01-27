import { useState } from 'react'
import QuestbridgeLogo from './assets/questbridgeLogo.png'
import AzureLogo from './assets/AzureLogo.webp'
import CloudforceLogo from './assets/cloudforceLogo.png'
import OpenAILogo from './assets/OpenAILogo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center">
        <a href="https://www.questbridge.org" target="_blank">
          <img className="h-32" src={QuestbridgeLogo} alt="Questbridge logo" />
        </a>
      </div>

      <div className="flex-col justify-center">
        <h1 className="text-3xl flex justify-center">
          College Admissions AI
        </h1>
        <h2 className="text-blue-500 text-center">
          Making college admissions more equitable and accessible for all
        </h2>
        <div className="flex justify-center items-center">
          <div className="bg-white">
            <a href="https://azure.microsoft.com/en-us/" target="_blank">
              <img className="h-24 w-auto" src={AzureLogo} alt="Microsoft Azure logo" />
            </a>
          </div>
          <div className="bg-white">
            <a href="https://gocloudforce.com" target="_blank">
              <img className="h-10 w-auto" src={CloudforceLogo} alt="Cloudforce logo" />
            </a>
          </div>
          <div className="bg-white">
            <a href="https://openai.com" target="_blank">
              <img className="h-36 w-auto" src={OpenAILogo} alt="OpenAI logo" />
            </a>
          </div>
        </div>
        <h2 className="text-center">
          Data-driven, backed by leading cloud and artificial intelligence solutions
        </h2>
        <div className="text-center">
          <h3>Try out our chatbot here</h3>
          <button className="bg-sky-500 hover:bg-sky-700 text-white">
            Ask me anything!
          </button>
        </div>
      </div>
    </>
  )
}

export default App
