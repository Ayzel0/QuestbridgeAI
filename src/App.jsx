import { useState } from 'react'
import QuestbridgeLogo from './assets/questbridgeLogo.png'
import AzureLogo from './assets/AzureLogo.webp'
import CloudforceLogo from './assets/cloudforceLogo.png'
import OpenAILogo from './assets/OpenAILogo.png'
import beforeAI from './assets/before.png'
import afterAI from './assets/after.png'
import fafsa from './assets/fafsa.png'
import css from './assets/css.png'

function App() {

  return (
    <>
      <body className="bg-gradient-to-b from-zinc-50 to-violet-100">
        <div className="flex-col justify-center mb-20">
          <h1 className="text-3xl flex justify-center mt-5 mb-5">
            College Admissions AI
          </h1>
          <h2 className="text-xl text-center mb-10">
            Making college admissions more <span className="text-indigo-400 font-bold">equitable</span> and <span className="text-cyan-400 font-bold">accessible</span> for all
          </h2>
          <div className="flex justify-center items-center mb-10 gap-10 bg-gradient-to-r from-indigo-200 to-cyan-200 h-16 w-screen">
            <h3 className="text-2xl">Home</h3>
            <h3 className="text-2xl">About</h3>
          </div>
          <div className="flex-col">
            <h2 className="text-2xl text-left mb-5 ml-20">Say you're a high school student...</h2>
            <h2 className="text-2xl text-center mb-5">and you're excited to go to college...</h2>
            <h2 className="text-2xl text-right mb-5 mr-20">but you don't know where to start</h2>
          </div>
          <div className="flex-col justify-center items-center mb-20">
            <h2 className="text-2xl text-center mb-5">
              Using a Chatbot <span className="text-indigo-400 font-bold">before</span> CollegeAI
            </h2>
            <div className="flex justify-center items-center">
                <div className="hover:animate-pulse flex justify-center items-center bg-gradient-to-r from-indigo-200 to-cyan-200 p-4 h-100 w-auto mb-5 rounded-lg">
                  <img className=" h-60 w-auto" src={beforeAI} alt="OpenAI logo" />
                </div>
            </div>
            <ul className="flex flex-col items-center text-xl gap-2 mb-10">
              <li>&#10060; Not specific to the college</li>
              <li>&#10060; Generic and easily searchable information</li>
              <li>&#10060; Subject to change each application cycle</li>
            </ul>
          </div>
          <div className="flex-col justify-center items-center">
            <h2 className="text-2xl text-center mb-5">
              Using a Chatbot <span className="text-cyan-400 font-bold">after</span> CollegeAI
            </h2>
            <div className="flex justify-center items-center">
              <div className="hover:animate-pulse flex justify-center items-center bg-gradient-to-r from-indigo-200 to-cyan-200 p-4 h-100 w-auto mb-5 rounded-lg">
                <img className="h-40 w-auto" src={afterAI} alt="OpenAI logo" />
              </div>
            </div>
            <ul className="flex flex-col items-center text-xl gap-2 mb-20">
              <li>✅ Tailored directly to the institution and your situation</li>
              <li>✅ Includes accurate emails and direct links for reliability</li>
              <li>✅ Updated with the latest from trustworthy sources</li>
            </ul>
          </div>
          <h2 className="text-2xl text-center mb-5">
            &#128202; Data driven, using the most recent information from trusted university partners
          </h2>
          <div className="flex justify-center mb-10">
            <div className="hover:animate-pulse flex items-center bg-gradient-to-r from-indigo-200 to-cyan-200 p-4 h-28 rounded-lg">
              <a href="https://www.questbridge.org" target="_blank">
                <img className="h-24" src={QuestbridgeLogo} alt="Questbridge logo" />
              </a>
            </div>
          </div>
          <h2 className="text-2xl text-center mb-5">
            &#128218; Works with any institution on Questbridge, so you can compare your options
          </h2>
          <div className="flex justify-center mb-10">
            <div className="hover:animate-pulse flex items-center bg-gradient-to-r from-indigo-200 to-cyan-200 p-4 h-28 rounded-lg">
              <a href="https://www.questbridge.org" target="_blank">
                <img className="h-24" src={QuestbridgeLogo} alt="Questbridge logo" />
              </a>
            </div>
          </div>
          <h2 className="text-2xl text-center mb-5">
            &#128184; Includes information about financial aid applications, so you never miss a deadline
          </h2>
          <div className="flex justify-center gap-10 mb-10">
            <div className="hover:animate-pulse flex items-center bg-gradient-to-r from-indigo-200 to-cyan-200 p-4 h-28 rounded-lg">
              <a href="https://studentaid.gov/h/apply-for-aid/fafsa" target="_blank">
                <img className="h-14" src={fafsa} alt="fafsa logo" />
              </a>
            </div>
            <div className="hover:animate-pulse flex items-center bg-gradient-to-r from-indigo-200 to-cyan-200 p-4 h-28 rounded-lg">
              <a href="https://cssprofile.collegeboard.org" target="_blank">
                <img className="h-20" src={css} alt="css logo" />
              </a>
            </div>
          </div>
          <h2 className="text-2xl text-center mb-5">
            &#9729; Backed by leading cloud and artificial intelligence solutions
          </h2>
          <div className="flex justify-center items-center gap-10 mb-10">
            <div className="hover:animate-pulse flex items-center bg-gradient-to-r from-indigo-200 to-cyan-200 p-4 h-28 rounded-lg">
              <a href="https://azure.microsoft.com/en-us/" target="_blank">
                <img className="h-20" src={AzureLogo} alt="Microsoft Azure logo" />
              </a>
            </div>
            <div className="hover:animate-pulse flex items-center bg-gradient-to-r from-indigo-200 to-cyan-200 p-4 h-28 rounded-lg">
              <a href="https://gocloudforce.com" target="_blank">
                <img className="h-6" src={CloudforceLogo} alt="Cloudforce logo" />
              </a>
            </div>
            <div className="hover:animate-pulse flex items-center bg-gradient-to-r from-indigo-200 to-cyan-200 p-4 h-28 rounded-lg">
              <a href="https://openai.com" target="_blank">
                <img className="h-28" src={OpenAILogo} alt="OpenAI logo" />
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl mb-3">Talk to our chatbot yourself!</h3>
            <button className="hover:animate-pulse bg-indigo-400 hover:bg-cyan-400 text-white p-3 rounded-lg">
              {/* Link this to the chatbot page */}
              Ask me anything
            </button>
          </div>
        </div>
      </body>
      
    </>
  )
}

export default App
