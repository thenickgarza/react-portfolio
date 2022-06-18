import React from "react";
import { useEffect, useState } from "react";
// import Nav from "../Nav";
// import { Link } from "react-router-dom";
// import LogoLG from "../../assets/images/ce-logo-wht.png";

const textArray1 = ['Hi!', 'Hello!', 'Hola!', 'Welcome!'];
const textArray2 = ['Full-Stack Web Developer', 'Innovator Of Ideas', 'Designer!',];

const Home = () => {
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);

    useEffect(() => {
        const timer = () => {
          setIndex1(prevIndex => {
            if(prevIndex === textArray1.length - 1){
              return 0;
            } 
            return prevIndex + 1;
          })
        };
        setInterval(timer, 5000);
        
        //cleanup function in order clear the interval timer
        //when the component unmounts
        return () => { clearInterval(timer); }
      }, []);

      useEffect(() => {
        const timer = () => {
          setIndex2(prevIndex => {
            if(prevIndex === textArray2.length - 1){
              return 0;
            } 
            return prevIndex + 1;
          })
        };
        setInterval(timer, 7000);
        
        //cleanup function in order clear the interval timer
        //when the component unmounts
        return () => { clearInterval(timer); }
      }, []);
    
    
return (
    <section>
        {/* <Nav></Nav> */}
<div className="container-fluid">
    <div className="row align-items-center">
        <div className="col-lg-6 home-text-container">
            <span className="welcome-text">{textArray1[index1]}</span>
            <span className="intro-text">I'm Nicholas Garza,</span>
            <span className="job-text">{textArray2[index2]}</span>
            {/* <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link> */}
        </div>
        <div className="col-lg-6 home-logo-container">
        {/* <img className="home-logo" src={LogoLG} alt="CAE" /> */}
        </div>
        
    </div>
</div>
</section>
  );
};

export default Home;