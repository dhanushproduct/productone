import React,{useEffect,useState} from 'react'
import ChatBubble from './Chatbubble'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Phonemockup() {
    const options = {
        loop: true,
        center: true,
        items: 1,
        margin: 0,
        dots:false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 450,
        nav: false
    }
//   const text = 'ARE YOU A JOB SEEKER?';
//   const [animatedText, setAnimatedText] = useState('');

//   useEffect(() => {
//     const animateText = () => {
//       let index = 0;
//       const intervalId = setInterval(() => {
//         if (index < text.length) {
//           setAnimatedText((prevText) => prevText + text[index]);
//           index++;
//         } else {
//           clearInterval(intervalId);
//         }
//       }, 500); // Half-second (500 milliseconds) delay between letters
//     };

//     animateText();
//   }, []);

  return (
    <div className='flex justify-end pr-4 mr-3 z-10'>
    <div className="relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[500px] w-[281px] z-10">
    <div className="absolute top-[4px] right-[120px] w-[15px] h-[15px] bg-black rounded-full z-10"></div>
    <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg z-10"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg z-10"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg z-10"></div>
    <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg z-10"></div>
    <div className="rounded-[2rem] overflow-hidden w-[254px] h-[472px] bg-white dark:bg-gray-800 z-10">
    <div className="bg-gray-100 min-h-screen flex items-center justify-center z-10">
    <OwlCarousel className="owl-theme mb-20 z-10" {...options}>
    <div className="item z-10">
        <h1 className='flex justify-center font-serif font-bold mb-16'>PRODUCT ONE</h1>
        <h1 className='flex justify-center font-mono font-bold mt-4 mb-8'>ARE YOU A JOBSEEKER?</h1>
      <ChatBubble message="Hello, how can I help you?" isSender={true} align={'right'} />
      <ChatBubble message="I am in need of a job" isSender={false} align={'left'} />
      <ChatBubble message="Problem Solved" isSender={true} align={'right'}/>
      <ChatBubble message="How will you solve?" isSender={false} align={'left'}/>
      <ChatBubble message="Click on the login button" isSender={true} align={'right'}/>
    </div>
    <div className="item max-w-lg z-10">
        <h1 className='flex justify-center font-serif font-bold mb-16'>PRODUCT ONE</h1>
        <h1 className='flex justify-center font-mono font-bold mt-4 mb-8'>ARE YOU AN EMPLOYER?</h1>
      <ChatBubble message="Hello, how can I help you?" isSender={true} align={'right'} />
      <ChatBubble message="I am in need of employees" isSender={false} align={'left'} />
      <ChatBubble message="Problem Solved" isSender={true} align={'right'}/>
      <ChatBubble message="How will you solve?" isSender={false} align={'left'}/>
      <ChatBubble message="Click on the login button" isSender={true} align={'right'}/>
    </div>
    </OwlCarousel>
  </div>
    </div>
  </div>
  </div>
  )
}
