
import {Navbar,Billing,Carddeal,Business,Clients, CTA,Stats,Footer,Testimonials,Hero,} from './components/index.js'
import './App.css'
import './index.css';


function App() {
  return (
   <div className="w-full bg-black text-white">
      {/* Global content wrapper */}
      <div className=" mx-auto ">
      <Navbar/>
      <Hero/>
      <Stats/>
      <Business/>
      <Billing/>
      <Carddeal/>
      <Testimonials/>
      <Clients/>
      <CTA/>
      <Footer/>
     
      
    </div>
    </div>
  )
}

export default App
