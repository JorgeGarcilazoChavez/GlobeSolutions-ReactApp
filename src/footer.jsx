import { Link } from 'react-router-dom';

function Footer(){
    return (
        <footer>
            <div className="bg-blue-950 w-full text-cyan-100 font-['Google_Sans']">
            <div className="hidden md:grid grid-cols-5 p-5">
                <ul> 
                <h1 className ="text-xl/10 text-cyan-500">Finance</h1>
                <li><Link to={`/company#Gift Cards`} className="hover:text-cyan-900">Gift Cards</Link></li>
                <li><Link to={`/company#Globe Credit Card`} className="hover:text-cyan-900">Globe Credit Card</Link></li>
                <li><Link to={`/company#Corporate Financing`} className="hover:text-cyan-900">Corporate Financing</Link></li>
                </ul>
                
                <ul> <h1 className ="text-xl/10 text-cyan-500">Company</h1>
                <li><Link to={`/company#Corporate Information`} className="hover:text-cyan-900">Corporate Information</Link></li>
                <li><Link to={`/company#Corporate Responsibility`} className="hover:text-cyan-900">Corporate Responsibility</Link></li>
                <li><Link to={`/company#Sustainability`} className="hover:text-cyan-900">Sustainability</Link></li>
                </ul>

                <ul> <h1 className ="text-xl/10 text-cyan-500">Our Values</h1>
                <li><Link to={`/company#Ethics & Compliance`} className="hover:text-cyan-900">Ethics & Compliance</Link></li>
                <li><Link to={`/company#Events`} className="hover:text-cyan-900">Events</Link></li>
                <li><Link to={`/company#Investors`} className="hover:text-cyan-900">Investors</Link></li>
                <li><Link to={`/company#Environment`} className="hover:text-cyan-900">Environment</Link></li>
                </ul>
            </div>

            <div className="hidden md:block border-t-2 border-cyan-500 p-4 text-center">
                <Link to={'/company#Accessibility'}><a className="m-10 hover:text-cyan-900">Accessibility</a></Link>
                <Link to={'/company#Privacy Policy'}><a className="m-10 hover:text-cyan-900">Privacy Policy</a></Link>
                <Link to={'/company#Terms of Use'}><a className="m-10 hover:text-cyan-900">Terms of Use</a></Link>
                <Link to={'/company#Legal'}><a className="m-10 hover:text-cyan-900">Legal</a></Link>
            </div>

            <div className="text-gray-400 p-4 text-center">
                Jorge Garcilazo 2026
            </div>

            </div>
        </footer>
    );
};

export default Footer;