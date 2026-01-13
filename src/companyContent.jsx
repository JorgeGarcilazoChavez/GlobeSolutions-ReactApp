import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function CompanyContent(){
const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = decodeURIComponent(location.hash.slice(1));
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);


    return (<div className="bg-slate-900 text white m-10 rounded-lg font-['Google_Sans'] p-10">
        <h1 className="text-blue-900 font-medium text-8xl mb-10">Company</h1>

        <h1 id="Corporate Information" className="text-blue-500 font-medium text-4xl mb-2">Corporate Information</h1>
        <p className="text-cyan-100 text-2xl p-10">Globe Solutions was founded with a simple mission to help growing businesses turn complex technology into a competitive advantage. We believe innovation should be practical scalable and accessible rather than overwhelming. From startups taking their first steps to enterprises managing global operations we design solutions that adapt to our clients’ needs and grow alongside them.</p>
        <p className="text-cyan-100 mb-10 text-2xl border-b-1 p-10">This section provides transparency into Globe Solutions’ structure, leadership, and operational framework. We are committed to open communication and responsible corporate governance.</p>
        
        <h1 id="Corporate Responsibility" className="text-blue-500 font-medium text-4xl mb-2">Corporate Responsibility</h1>
        <p className="text-cyan-100 mb-10 text-2xl border-b-1 p-10">We take responsibility for the impact of our technology, operations, and partnerships. Globe Solutions is committed to ethical business practices and positive contributions to society.</p>

        <h1 id="Sustainability" className="text-blue-500 font-medium text-4xl mb-2">Sustainability</h1>
        <p className="text-cyan-100 mb-10 text-2xl border-b-1 p-10">Sustainability is embedded into our technology and operations. We focus on building efficient systems that reduce environmental impact while supporting long-term business growth.</p>

        <h1 id="Our Values" className="text-blue-500 font-medium text-4xl mb-2">Our Values</h1>
        <p className="text-cyan-100 mb-10 text-2xl border-b-1 p-10">Our values guide how we innovate, collaborate, and serve our clients. Integrity, transparency, and continuous improvement define the way we operate every day.</p>

        <h1 id="Ethics & Compliance" className="text-blue-500 font-medium text-4xl mb-2">Ethics & Compliance</h1>
        <p className="text-cyan-100 mb-10 text-2xl border-b-1 p-10">Globe Solutions maintains strong ethical standards and compliance practices across all operations. We adhere to global regulations and prioritize trust, security, and accountability.</p>

        <h1 id="Events" className="text-blue-500 font-medium text-4xl mb-2">Events</h1>
        <p className="text-cyan-100 mb-10 text-2xl border-b-1 p-10">We participate in and host industry events that foster innovation, collaboration, and knowledge sharing. These events connect businesses, partners, and technology leaders worldwide.</p>

        <h1 id="Investors" className="text-blue-500 font-medium text-4xl mb-2">Investors</h1>
        <p className="text-cyan-100 mb-10 text-2xl border-b-1 p-10">Globe Solutions is committed to delivering sustainable growth and long-term value for investors. We focus on transparency, strategic execution, and innovation-driven performance.</p>

        <h1 id="Environment" className="text-blue-500 font-medium text-4xl mb-2">Environment</h1>
        <p className="text-cyan-100 mb-10 text-2xl border-b-1 p-10">We actively work to minimize our environmental footprint through responsible resource use and efficient technology solutions. Our environmental initiatives support a healthier and more sustainable future.</p>

        <h1 id="Corporate Financing" className="text-blue-500 font-medium text-4xl mb-2">Corporate Financing</h1>
        <p className="text-cyan-100 mb-10 text-2xl border-b-1 p-10">Our corporate financing solutions help organizations scale faster by providing access to flexible funding options. We support strategic investments, infrastructure expansion, and innovation initiatives.</p>

        <h1 id="Globe Credit Card" className="text-blue-500 font-medium text-4xl mb-2">Globe Credit Card</h1>
        <p className="text-cyan-100 mb-10 text-2xl border-b-1 p-10">The Inovatech Credit Card is designed for businesses seeking smarter spending control and enhanced purchasing power. It provides streamlined expense management, transparent reporting, and secure transactions.</p>

        <h1 id="Gift Cards" className="text-blue-500 font-medium text-4xl mb-2">Gift Cards</h1>
        <p className="text-cyan-100 mb-10 text-2xl p-10 border-b-1">Globe Gift Cards offer a convenient and secure way to provide digital value for services and solutions. They are ideal for corporate incentives, customer rewards, and promotional programs.</p>

        <h1 id="Accessibility" className="text-blue-500 font-medium text-4xl mb-2">Accessibility</h1>
        <p className="text-cyan-100 mb-10 text-2xl p-10 border-b-1">We are committed to ensuring digital accessibility for all users, including individuals with disabilities, and continually work to improve the usability of our website. If you encounter any accessibility barriers, please contact us so we can address your needs promptly.</p>

        <h1 id="Privacy Policy" className="text-blue-500 font-medium text-4xl mb-2">Privacy Policy</h1>
        <p className="text-cyan-100 mb-10 text-2xl p-10 border-b-1">We respect your privacy and are committed to protecting your personal information through responsible data collection, use, and security practices. Any data collected is used solely to provide and improve our services in accordance with applicable privacy laws.</p>

        <h1 id="Terms of Use" className="text-blue-500 font-medium text-4xl mb-2">Terms Of Use</h1>
        <p className="text-cyan-100 mb-10 text-2xl p-10 border-b-1">By accessing or using our website and services, you agree to comply with these terms and all applicable laws and regulations. Unauthorized use, modification, or distribution of our content is strictly prohibited.</p>

        <h1 id="Legal" className="text-blue-500 font-medium text-4xl mb-2">Legal</h1>
        <p className="text-cyan-100 mb-10 text-2xl p-10">All content, trademarks, and intellectual property on this website are the property of the company or its licensors and are protected by law. The company assumes no liability for damages arising from the use or inability to use this site. Need to talk, our representative is Saul Goodman - (505) 503-4455</p>
    
    </div>)
}
export default CompanyContent