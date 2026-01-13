import { useState } from "react";

function PopUp({ children, PopUpBox}){
    const [show, showPopUp] = useState(false)
    const showPopUpBox = show && PopUpBox

    return(
        <div>
            <button onClick={()=> showPopUp(true)} className="relative flex items-center font-medium hover:text-cyan-900">{children}</button>
            {showPopUpBox && (
            <PopUpContent clickValue={children} onClose={()=> showPopUp(false)}/>)}
        </div>
    )
}

function PopUpContent({ onClose, clickValue }){
    const[submitted, setSubmitted] = useState(false);

    const message = ['Let us know how can we assist you with one of our products', 'Leave us your information and we will get back to you!', 'Want to discuss more? Send us a message below']
    const messageMap = {
        Support: message[0],
        "Get a Quote!": message[1],
        "Contact Us": message[2],
    }

    function handleSubmit(e){
        e.preventDefault();
        setSubmitted(true);
        e.target.reset();
        setTimeout(()=> setSubmitted(false), 3000)
    }
return (
     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="relative w-[90vw] h-[80vh] sm:w-[60vw] sm:h-[60vh] bg-blue-950 rounded-lg p-3 overflow-y-auto">
            <div className="flex justify-center items-center flex-col">
                <button onClick={ onClose } className="absolute top-4 left-4 text-cyan-100 hover:shadow-xl/50 text-4xl rounded-full px-2"><i className='bx  bx-x'></i> </button>
                <h1 className="text-6xl text-yellow-300 font-medium">{clickValue}</h1>
                {clickValue && (<p className="mb-4 m-1 text-cyan-100 text-2xl">{messageMap[clickValue]}</p>
                )}
                {submitted && (
                    <div className="bg-green-700 text-white text-2xl rounded-full p-2 font-medium font-['Google_Sans'] mb-3">
                    Success!
                    </div>
                )}
                <form onSubmit={handleSubmit}className="text-2xl text-cyan-300 grid grid-cols-4 grid-rows-6 gap-1">
                    <input required className="bg-slate-900 m-1 inset-shadow-sm/60 rounded-xl p-2 col-span-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="First Name"/>
                    <input required className="bg-slate-900 m-1 inset-shadow-sm/60 rounded-xl p-2 col-span-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Last Name"/>
                    <input required type="email" className="bg-slate-900 m-1 inset-shadow-sm/60 rounded-xl p-2 col-span-4 col-start-1 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Email"/>
                    <textarea required className="resize-none bg-slate-900 m-1 inset-shadow-sm/60 rounded-xl p-2 col-span-4 row-span-4 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Leave us a message..."/>
                    <button className="text-cyan-100 hover:shadow-xl/50 text-3xl rounded-full p-2">Submit</button>
                </form>
            </div>
        </div>
    </div>
)
};


export { PopUp, PopUpContent }