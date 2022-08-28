import { useRef, useState , useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Gamers from './Gamers';
import Notif from './Notif';
import Features from './Features';
import Feedbacks from './Feedbacks';
import Certificates from './Certificates';
import Footer from './Footer';
import Pagination from './Pagination';

function App() {
  const [status , setStatus] = useState(1)
  const [scrollTop , setScrollTop] = useState(0)
  const [navHidden , setNavHidden]= useState(0)
  const goThere = (state) =>{
    
    setStatus(state)
  }

  window.addEventListener('scroll' , function(e){
    setScrollTop(window.pageYOffset)
    // setStatus(null)
  })

  useEffect(() => {
    if(scrollTop >=80){
      
      setNavHidden(true)
    }else{
      setNavHidden(false)
    }
  }, [scrollTop])

  return (
    <div className="App text-light  bg-light">
      <Pagination status={status} setStatus={setStatus}  navHidden={navHidden}  />
      <div   className='container'  >
        {/* <h1>Hello NFT</h1>  */}
        <Navbar goThere={goThere}  />
        <Hero status={status}  />
        <Gamers  />
        <Notif />
        <Features status={status}  />
        <Feedbacks status={status}  />
        <Certificates />
        <Footer status={status} />
     </div>
    </div>
  );
}

export default App;
