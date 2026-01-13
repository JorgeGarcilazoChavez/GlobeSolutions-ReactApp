import { useState } from "react";
import products from './database'
import { Link } from "react-router-dom";

function SecondNavBar({ children, tagValue, ContentBox}){
    const [open, setOpen] = useState(false); // Conditions used to render the pop up navigation on mouse enter/leave
    const showBox = open && ContentBox

        return (
            <div className="relative h-fit w-fit font-medium justify-self-center hover:text-cyan-900" 
            onMouseEnter={()=> setOpen(true)}
            onMouseLeave={()=> setOpen(false)}>
                <a className="relative flex items-center gap-2">{children}</a>
                {showBox && (
                <div className="absolute left-1/2 top-12 -translate-x-1/2 max-w-[calc(100vw-1rem)]">
                    <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent"></div>
                    <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-blue-900"></div>
                <ContentBox tag={tagValue}/>
                </div>
                )}
            </div>
        );
};

function Content({ tag }){
    const items = products[tag] || []

    return(
        <div className="w-[22rem] max-w-[calc(100vw-1rem)] bg-blue-900 text-cyan-100 p-5 shadow-xl rounded-xl">
            <ul className="text-xl grid grid-cols-1 p-1">
                 {items.map((tag, i) => (
                <li key={i}><Link to={`/products#${tag}`} className="hover:text-cyan-400" key={i}>{tag}</Link></li>
        ))}
            </ul>
        </div>
    );
};

export { SecondNavBar, Content }


