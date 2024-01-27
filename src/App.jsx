import { useState } from 'react'
import QuestbridgeLogo from './assets/questbridgeLogo.png'
import AzureLogo from './assets/AzureLogo.webp'
import CloudforceLogo from './assets/cloudforceLogo.png'
import OpenAILogo from './assets/OpenAILogo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.questbridge.org" target="_blank">
          <img src={QuestbridgeLogo} className="logo questbridge" alt="Questbridge logo" />
        </a>
      </div>
      <h1>College Admissions</h1>
      <div className="card">
        <h2 className="text-blue-500">
          Making college admissions more equitable and accessible for all
        </h2>
        <div className="columns-3">
          <a href="https://azure.microsoft.com/en-us/" target="_blank">
            <img src={AzureLogo} className="logo azure" alt="Microsoft Azure logo" />
          </a>
          <a href="https://gocloudforce.com" target="_blank">
            <img src={CloudforceLogo} className="logo cloudforce" alt="Cloudforce logo" />
          </a>
          <a href="https://openai.com" target="_blank">
            <img src={OpenAILogo} className="logo openAI" alt="OpenAI logo" />
          </a>
        </div>
        <h2>
          Data-driven, backed by leading cloud and artificial intelligence solutions
        </h2>
        <div className="chatbot">
          <h3>Try out our chatbot here</h3>
          <button className="bg-sky-500 hover:bg-sky-700">
            Ask me anything!
          </button>
        </div>
      </div>
      <p className="read-the-docs">
        Learn more here
      </p>
    </>
  )
}

export default App
