import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

const HowItWorks = () => {
  return (
    <div>
      <TopBar />
      <div className='mx-[20vw] my-20'>
        <h1 className='text-2xl font-semibold'>About the project</h1>
        <p className='text-xl my-5'>Questbridge is a national nonprofit which aims to send first-generation and low-income students to college. Students can apply to Questbridge's partner schools and can receive full-ride scholarship offers from these schools. <br /><br />The application process, however, can be daunting, especially for students who don't have the institutional resources which higher-income students have access to regarding college access. <br /><br />To alleviate this issue, our team designed an AI chatbot trained on Questbridge application data so that students interested in the Questbridge program can know how to apply, how they will fund their college journey, information about prospective schools, and more. Our AI chatbot is a one-stop shop for any student interested in the Questbridge program, and we hope that it can be transformative for these students.</p>
      </div>
      <BottomBar />
    </div>
  )
}

export default HowItWorks;