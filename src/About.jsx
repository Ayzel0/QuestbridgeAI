import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

const About = () => {
  return (
    <>
      <div className="bg-zinc-100">
        <TopBar />
        <div className='mx-[20vw] my-20'>
          <h1 className='text-2xl font-semibold'>About the project</h1>
          <p className='text-xl my-5'>Questbridge is a national nonprofit which aims to send <span className="text-indigo-400 font-bold">first-generation</span> and <span className="text-indigo-400 font-bold">low-income</span> students to college. Qualifying students can apply to Questbridge's partner schools. If they are matched, they will receive a <span className="text-indigo-400 font-bold">full-ride</span> scholarship to their institution, including living expenses. <br /><br />The college application process, however, can be <span className="text-cyan-400 font-bold">daunting</span>, especially for students who don't have the institutional resources compared to higher-income students. They may be taking on extra <span className="text-cyan-400 font-bold">household responsibilities</span> including taking care of younger sibilings or working part-time jobs in order to support their family. They simply do not have the <span className="text-cyan-400 font-bold">luxury</span> of sifting through application websites to find what they need.<br /><br />We realize information gap is vast, and this needs to <span className="text-purple-400 font-bold">change now</span>. Our team designed an AI chatbot trained on Questbridge university partner data so that students interested in the Questbridge program can understand the steps to apply, how they will fund their education, determine a school that is a good academic fit for them, and more. Our AI chatbot is an <span className="text-purple-400 font-bold">invaluable resource</span> for any student interested in the Questbridge program, and we hope that our chatbot can <span className="text-purple-400 font-bold">transform</span> student outcomes.</p>
        </div>
        <BottomBar />
      </div>
      
    </>
  )
}

export default About;