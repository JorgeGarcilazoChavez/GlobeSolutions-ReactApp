import { SecondNavBar } from './secondNavigation';
import { Content } from './secondNavigation'
import { PopUp, PopUpContent} from './popUp';

function NavBar(){
    return (
        <nav className="bg-pink-600 w-full flex p-4 text-cyan-200 font-['Google_Sans'] hidden md:flex justify-center items-center">
            <div className="flex space-x-30">
            <SecondNavBar ContentBox={Content} tagValue={"softwareSolutions"}>Software Solutions <i className='bx text-lg bx-file-code'></i> </SecondNavBar>
            <SecondNavBar ContentBox={Content} tagValue={"cloudSolutions"}>Cloud Solutions <i className='bx text-lg bx-cloud-alt'></i> </SecondNavBar>
            <SecondNavBar ContentBox={Content} tagValue={"paymentSolutions"}>Payment Solutions <i className='bx  bx-piggy-bank'></i> </SecondNavBar>
            <PopUp PopUpBox={PopUpContent}>Support</PopUp>
            </div>
        </nav>
    );
};

export default NavBar