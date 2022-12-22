import './App.css';
import Profile from '../src/images/Jiraya.jpg';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {BsMoonStarsFill} from 'react-icons/bs';
import { useState } from 'react';
import Resume from '../src/images/Resume.pdf';


export default function App() {
   const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""} >
        <div className="min-h-[100vh] bg-[#f6f4f0] dark:bg-black">
            <nav className="w-full h-14">
                <div className="container mx-auto flex flex-row justify-around sm:justify-between py-2">
                        <div>
                        <h3 className="font-island-moments flex item-center text-4xl sm:text-5xl font-medium text-black dark:text-white">Prateek</h3>
                        </div>
                    <div className="flex space-x-6 items-center">
                        <div className="cursor-pointer text-2xl">
                        <BsMoonStarsFill className="dark:text-white" onClick={() => setDarkMode(!darkMode)}/>
                        </div>
                        <div>
                        <a href={Resume} target="blank">
                                <button className="bg-[#6768ab] text-[#f6f4f0] font-bold py-2 px-4 rounded inline-block dark:bg-[#f56565] dark:text-white"> Resume </button>
                                </a>
                        </div>
                    </div>
                </div>
            </nav>
            <section >
                <div className="">
                    <div className='flex justify-center h-44 sm:h-72  mt-16 my-4'>
                        <img src={Profile} alt="Jiraya" className="rounded-full" />
                    </div>
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-5xl text-[#6768ab] py-1 font-poppins dark:text-[#f56565]">Prateek Kukreja</h1>
                        <span className="text-lg sm:text-2xl font-semibold font-questrial dark:text-white"> FrontEnd Web Developer</span>
                        <p className="leading-7 mx-auto text-gray-800 py-4 font-questrial text-md sm:text-xl max-w-xs sm:max-w-2xl dark:text-[#FFFFF0]">
                        A smart and knowledgeable Front-End developer! I can easily tackle the challenges in the domain of Front-End Development using HTML5, Cascade Style Sheets (CSS3), Bootstrap, Tailwind, Javascript & React.Js. I combine these skills with sincerity, hard work, and consistency which help me in exploring the greater depths of this field.
                        </p>
                    </div>
                    <div className="flex justify-center pt-1 space-x-8 text-2xl sm:text-4xl text-gray-800 dark:text-white">
                        <a href="https://www.linkedin.com/in/theprateekkukreja/" target="blank"><AiFillLinkedin /></a>
                        <a href="https://twitter.com/prateekwho" target="blank"><AiFillTwitterCircle /></a>
                        <a href="https://github.com/prateekwho" target="blank"><AiFillGithub /></a>
                    </div>
                
                </div>  
            </section>
            
        </div>
    </div>  
  )
}