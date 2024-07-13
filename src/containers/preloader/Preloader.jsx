import "./preloader.scss";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Preloader = () => {
    useGSAP(() => {
        gsap.from("h2", {yPercent: -100})
        gsap.fromTo(".up", {yPercent: -50, opacity: 0}, {yPercent: 0, opacity: 1, delay: .5, duration: 1.8})
        gsap.fromTo(".bot", {yPercent: 50, opacity: 0}, {yPercent: 0, opacity: 1, delay: .5, duration: 1.8})
        gsap.fromTo(".line", {width: "0%"}, {width: "90%", delay: 1.4, duration: 1})
        gsap.fromTo(".cta", {filter: "blur(10px)"}, {filter: "blur(0px)", delay: 2})
        gsap.to(".preloader", {opacity: 0, delay: 3})
    }, [])
    
  return (
    <div className="preloader">
        <div className="preloader-header">
            <h2>Ansioluettelo</h2>
        </div>
        <div className="preloader-content">
            <h1 className="up">Jason</h1>
            <h1 className="bot">Williams</h1>
            <div className="line"></div>
           <p className="preloader-content-text">www.jasonwilliams.fi</p>
        </div>
    </div>
  )
}

export default Preloader
