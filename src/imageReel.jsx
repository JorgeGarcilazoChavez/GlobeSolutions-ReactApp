import { useEffect, useState } from 'react'
import image1 from './assets/image-reel-1.jpg'
import image2 from './assets/image-reel-2.jpg'
import image3 from './assets/image-reel-3.jpg'
import { PopUp, PopUpContent} from './popUp';

const images = [image1,image2,image3]
const title = ["The best cloud scaling in the market", "Check our CRM solutions!", "New Apple Pay Integration"]
const line1 = ["Contact us for bespoke cloud scaling solutions for your business", "Leverage PulseCRM or EngageFlow CRM for your business!", 
  "We recently made Apple Pay available for all our products"]
const line2 = ["Thinking of going serverless? We can help!", "Help your business get the best client bookkeeping software","Choose between Google Pay or Apple Pay for your business!"]

function ImageReel() {
  // useEffect to create an Interval Image Swap every 8 seconds. useState to swap the image index of the array
    const [index, indexSet] = useState(0)
    useEffect(()=>{
        const intervalID = setInterval(()=>{
            indexSet(lastIndex => (lastIndex + 1) % images.length);
        },8000);
        return() => clearInterval(intervalID)
    },[]);

  return (
    <div className="flex font-['Google_Sans'] m-10 rounded-2xl overflow-hidden shadow-xl ">
      <img className="w-300 "src={images[index]} alt="Technology Image"/>
      <div className="bg-slate-800 flex-col">
        <h1 className="text-yellow-300 p-8 text-8xl font-medium ">{title[index]}</h1>
        <br/>
        <p className="text-yellow-300 p-8 text-6xl font-medium">{line1[index]}</p>
        <br/>
        <p className="text-yellow-300 p-8 text-6xl font-medium">{line2[index]}</p>
        <div className="mt-auto flex justify-center pb-8">
            <div className="bg-yellow-300  border-yellow-300 text-4xl rounded-full font-medium text-blue-950 p-3 hover:bg-yellow-200 hover:text-blue-300 hover:shadow-xl/30"><PopUp PopUpBox={PopUpContent}>Get a Quote!</PopUp></div>
        </div>
      </div>
    </div>
  );
};

export default ImageReel;