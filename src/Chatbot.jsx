import { useState, useEffect, useRef } from 'react';
import sendIcon from './assets/sendicon.png';
import TopBar from './TopBar';
import BottomBar from './BottomBar';

const aoai_endpoint = import.meta.env.VITE_AOAI_ENDPOINT;
const aoai_key = import.meta.env.VITE_AOAI_KEY;
const aoai_deployment_id = import.meta.env.VITE_AOAI_DEPLOYMENT_ID;
const search_endpoint = import.meta.env.VITE_SEARCH_ENDPOINT;
const search_key = import.meta.env.VITE_SEARCH_KEY;
const search_index = import.meta.env.VITE_SEARCH_INDEX;

const Chatbot = () => {
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([]);
  const [messages, setMessages] = useState([]);
  const [returnData, setReturnData] = useState({});

  const chatContainerRef = useRef(null); 

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, questions]); 

  const handleQuestionFieldChange = (e) => {
    setQuestion(e.target.value);
  }

  const handleSubmit = (e) => {
    setQuestions([...questions, question]);
    e.preventDefault();
    console.log('question asked:', question);
    const url = `${aoai_endpoint}/openai/deployments/${aoai_deployment_id}/extensions/chat/completions?api-version=2023-08-01-preview`;

    const headers = {
      'Content-Type': 'application/json',
      'api-key': aoai_key,
    }

    const data = {
      dataSources: [
        {
          type: "AzureCognitiveSearch",
          parameters: {
            endpoint: search_endpoint,
            key: search_key,
            indexName: search_index
          }
        }
      ],
      messages: [
        {
          role: "user",
          content: question
        }
      ]
    }

    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      const returnMessage = data['choices'][0]['message']['content'];
      setMessages([...messages, returnMessage]);
      console.log('Success:', returnMessage);
      setReturnData(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    setQuestion('');
  };

  return (
    <>
      <TopBar />
      <div 
        className='min-h-[60vh] max-h-[80vh] overflow-y-scroll'
        ref={chatContainerRef}
      >
      {questions.map((q, index) => (
        <div key={index}>
          <div className='flex justify-end'>
            <div className='inline-block bg-blue-400 py-5 px-8 rounded-3xl my-5 mr-5'>
              <p>{q}</p>
            </div>
          </div>
          {messages.length > index ?
          <div className='inline-block bg-slate-400 py-5 px-8 rounded-3xl max-w-[80vw] my-5 ml-5'>
            <p>{messages[index]}</p>
          </div>
          :
          <div className='inline-block bg-slate-400 py-5 px-8 rounded-3xl my-5 ml-5'>...</div>
          }
        </div>
      ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className='flex flex-row align-center justify-center my-5'
      >
        <input
          value={question}
          className='w-[79vw] text-xl pl-5'
          type='text'
          placeholder="Enter a question to get started!"
          onChange={handleQuestionFieldChange}
        />
        <button 
          type='submit'
          className='ml-5'
        >
          <div className='bg-blue-400 hover:bg-blue-500 p-2 rounded-md'>
            <img 
              src={sendIcon}
              className='w-10'
            />
          </div>
        </button>
      </form>
      <BottomBar />
    </>
  )
}

export default Chatbot;