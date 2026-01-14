import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PopUp, PopUpContent } from "./popUp";

function ProductsContent(){
    const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = decodeURIComponent(location.hash.slice(1));
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);

    return (<div className="bg-blue-900 text white m-10 rounded-lg font-['Google_Sans'] p-10">
      <div className="hidden md:flex items-center">
        <h1 className="text-blue-400 font-medium text-8xl mb-10">Our Products</h1>
        <div className="ml-auto bg-yellow-300  border-yellow-300 text-2xl rounded-full font-medium text-blue-950 p-3 hover:bg-yellow-200 hover:text-blue-300 hover:shadow-xl/30"><PopUp PopUpBox={PopUpContent}>Get a Quote!</PopUp></div>
      </div>
        <h1 className="text-pink-300 mb-10 text-5xl font-medium relative flex items-center gap-2">Software Solutions <i className='bx bx-file-code'></i></h1>

        <h2 id="CRM Solutions" className="text-yellow-300 text-2xl">CRM Solutions</h2>
        <h3 className="text-cyan-100 text-2xl">PulseCRM</h3>
        <p className="text-cyan-300 text-xl mb-3">A centralized customer relationship platform designed to track leads, manage pipelines, and strengthen client engagement across teams.</p>
        <h3 className="text-cyan-100 text-2xl">EngageFlow CRM</h3>
        <p className="text-cyan-300 text-xl mb-10">An automation-first CRM that streamlines follow-ups, customer communications, and sales analytics in one intuitive dashboard.</p>

        <h2 id="ERP Solutions" className="text-yellow-300 text-2xl">ERP Solutions</h2>
        <h3 className="text-cyan-100 text-2xl">NexaERP</h3>
        <p className="text-cyan-300 text-xl mb-3">A modular ERP platform that adapts to your business processes while improving efficiency and data accuracy.</p>
        <h3 className="text-cyan-100 text-2xl">EngageERP</h3>
        <p className="text-cyan-300 text-xl mb-10">A cloud-based ERP solution that simplifies complex workflows and provides actionable operational intelligence.</p>

        <h2 id="AI Solutions" className="text-yellow-300 text-2xl">AI Solutions</h2>
        <h3 className="text-cyan-100 text-2xl">AutoMind AI</h3>
        <p className="text-cyan-300 text-xl mb-10">An intelligent automation platform that reduces manual tasks and enhances operational efficiency through machine learning.</p>

        <h2 id="Scaling Solutions" className="text-yellow-300 text-2xl">Scaling Solutions</h2>
        <h3 className="text-cyan-100 text-2xl">ScaleForge</h3>
        <p className="text-cyan-300 text-xl mb-10">A performance-focused scaling platform that adapts infrastructure dynamically to meet growing demand.</p>



        <h1 className="text-pink-300 mb-10 text-5xl font-medium relative flex items-center gap-2">Cloud Solutions <i className='bx bx-cloud-alt'></i></h1>
        <h2 id="Load Balancers" className="text-yellow-300 text-2xl">Load Balancers</h2>
        <h3 className="text-cyan-100 text-2xl">AeroBalance</h3>
        <p className="text-cyan-300 text-xl mb-10">A high-availability load balancing solution that distributes traffic efficiently to ensure reliability and performance.</p>
        
        <h2 id="Cloud Storage" className="text-yellow-300 text-2xl">Cloud Storage</h2>
        <h3 className="text-cyan-100 text-2xl">AeroBalance</h3>
        <p className="text-cyan-300 text-xl mb-10">A high-availability load balancing solution that distributes traffic efficiently to ensure reliability and performance.</p>

        <h2 id="Architecture Scaling" className="text-yellow-300 text-2xl">Architecture Scaling</h2>
        <h3 className="text-cyan-100 text-2xl">ArchScale</h3>
        <p className="text-cyan-300 text-xl mb-10">An architecture scaling solution that optimizes cloud environments for performance, resilience, and cost efficiency.</p>

        <h1 className="text-pink-300 mb-10 text-5xl font-medium relative flex items-center gap-2">Payment Solutions <i className='bx  bx-piggy-bank'></i></h1>
        <h2 id="Payment Integrations" className="text-yellow-300 text-2xl">Payment Integrations</h2>
        <h3 className="text-cyan-100 text-2xl">PayLink API</h3>
        <p className="text-cyan-300 text-xl mb-10">A custom payment integration API designed to support modern digital transactions with flexibility and security.</p>

        <h2 id="Apple Pay and Google Pay Integrations" className="text-cyan-100 text-2xl">Apple Pay and Google Pay Integrations</h2>
        <p className="text-cyan-300 text-xl mb-10">Our payment platform offers new custom API integrations with Apple Pay and Google Pay, enabling fast, secure, and seamless checkout experiences across devices.</p>
        
    </div>)
}
export default ProductsContent