import Header from "./header";
import NavBar from "./navigation";
import Footer from "./footer";

function Dashboard(){
    const random = Math.floor(Math.random()*10000 + 1);

    return(
    <div className="bg-slate-900 rounded-xl p-10 font-['Google_Sans'] m-10 overflow-x-auto">
        <h1 className="text-white text-5xl mb-8">Console Home</h1>
        <div className="bg-white rounded-xl text-black p-5 flex flex-grow flex-col">

            <div className="font-medium text-xl">Cost and Usage</div>

            <div className="flex flex-wrap gap-6 outline outline-gray-600 rounded-lg p-5 mb-8 overflow-x-auto">
                <div className="flex flex-col p-5">
                    <div className="font-medium text-2xl">Cost: ${random}.00</div>
                    <div className="font-medium text-lg text-gray-500">Current charge per month</div> 
                </div>

                <div className="flex flex-col border-l p-5">
                    <div className="font-medium text-2xl">Instances {random % 20}</div>
                    <div className="font-medium text-lg text-gray-500">Total active instances</div> 
                </div>

                <div className="flex flex-col border-l p-5">
                    <div className="font-medium text-2xl">Instances Per Region</div>
                    <div className="font-medium text-lg text-gray-500">North America {random % 6 + 1}</div>
                    <div className="font-medium text-lg text-gray-500">South America {random % 6 + 2}</div>
                    <div className="font-medium text-lg text-gray-500">Europe and Asia {random % 6 + 2}</div>
                    <div className="font-medium text-lg text-gray-500">Africa {random % 6 + 1}</div> 
                </div>

                <div className="flex flex-grow flex-col border-l border-b p-5 gap-2 ml-auto">
                    <div className="bg-green-600 w-32 text-white p-1"> PulseCRM</div>
                    <div className="bg-red-600 w-48 text-white p-1"> AeroBalance</div>
                    <div className="bg-blue-600 w-40 text-white p-1"> EngageERP</div>
                    <div className="bg-purple-600 w-24 text-white p-1"> ScaleForge</div> 
                <div className="flex"> 
                    <div>0</div>
                    <div className="ml-auto">150</div>
                </div>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="font-medium text-xl">Server Health</div>
            <div className="font-medium text-xl">Security</div>
            <div className="font-medium text-xl">Active products</div>
            <div className="outline rounded-lg p-5 bg-green-600 text-white flex items-center justify-center"> Healthy! <i className='bx  bx-happy-beaming'></i> </div>
            <div className="outline outline-black rounded-lg p-5 text-red-600 font-bold flex items-center justify-center">0 security recommendations</div>
            <div className="outline rounded-lg p-5 font-medium">Commercial License: 
                <div>PulseCRM v.12.3</div>
                <div>EngageERP v.3.8</div>
                <div>AeroBalance v.9.0.1</div>
                <div>ScaleForge v.2.0</div>
            </div>
            </div>
        </div>
    </div>)
};

function DashboardApp() {
  return (
    <div className="min-h-screen flex flex-col">
    <Header/>
    <NavBar/>
    <div className="flex-grow">
    <Dashboard />
    </div>
    <Footer/>
    </div>
  );
};

export {DashboardApp}