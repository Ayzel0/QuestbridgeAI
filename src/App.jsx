import { useState } from 'react'
import QuestbridgeLogo from './assets/questbridgeLogo.png'
import AzureLogo from './assets/AzureLogo.webp'
import CloudforceLogo from './assets/cloudforceLogo.png'
import OpenAILogo from './assets/OpenAILogo.png'
import beforeAI from './assets/before.png'
import afterAI from './assets/after.png'

function App() {

  return (
    <>
      <div className="bg-gradient-to-b from-zinc-50 to-sky-100">
        <div className="flex-col justify-center mb-20">
          <h1 className="text-3xl flex justify-center mt-5 mb-5">
            College Admissions AI
          </h1>
          <h2 className="text-xl text-center mb-10">
            Making college admissions more <span className="text-indigo-400">equitable</span> and <span className="text-cyan-400">accessible</span> for all
          </h2>
          <div className="flex justify-center items-center mb-10 gap-10 bg-gradient-to-r from-indigo-200 to-cyan-200 h-16 w-screen">
            <h3 className="text-2xl">Home</h3>
            <h3 className="text-2xl">About</h3>
          </div>
          <h2 className="text-xl text-center mb-5">
            Data driven, using the most recent information from leading university partners
          </h2>
          <div className="flex justify-center mb-10">
            <div className="flex items-center bg-gradient-to-r from-indigo-200 to-cyan-200 p-4 h-28 rounded-lg">
              <a href="https://www.questbridge.org" target="_blank">
                <img className="h-28" src={QuestbridgeLogo} alt="Questbridge logo" />
              </a>
            </div>
          </div>
          <h2 className="text-xl text-center mb-5">
            Backed by leading cloud and artificial intelligence solutions
          </h2>
          <div className="flex justify-center items-center gap-10 mb-10">
            <div className="flex items-center bg-gradient-to-r from-indigo-200 to-cyan-200 p-4 h-28 rounded-lg">
              <a href="https://azure.microsoft.com/en-us/" target="_blank">
                <img className="h-24 w-auto" src={AzureLogo} alt="Microsoft Azure logo" />
              </a>
            </div>
            <div className="flex items-center bg-gradient-to-r from-indigo-200 to-cyan-200 p-4 h-28 rounded-lg">
              <a href="https://gocloudforce.com" target="_blank">
                <img className="h-10 w-auto" src={CloudforceLogo} alt="Cloudforce logo" />
              </a>
            </div>
            <div className="flex items-center bg-gradient-to-r from-indigo-200 to-cyan-200 p-4 h-28 rounded-lg">
              <a href="https://openai.com" target="_blank">
                <img className="h-36 w-auto" src={OpenAILogo} alt="OpenAI logo" />
              </a>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl mb-3">Try out our chatbot here</h3>
            <button className="bg-indigo-400 hover:bg-cyan-400 text-white p-3 rounded-lg">
              {/* Link this to the chatbot page */}
              Ask me anything!
            </button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
