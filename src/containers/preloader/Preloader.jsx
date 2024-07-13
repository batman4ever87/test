import "./preloader.scss";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Preloader = () => {
    useGSAP(() => {
        gsap.from("h2", {yPercent: -100})
        gsap.fromTo("h1 span", {rotate: 20, opacity: 0, yPercent: 60}, {rotate: 0, stagger: 0.1, opacity: 1, yPercent: 0, delay: .3})
        gsap.fromTo(".line", {width: "0%"}, {width: "90%", delay: 1.4})
        gsap.fromTo(".cta", {filter: "blur(10px)"}, {filter: "blur(0px)", delay: 2})
    }, [])
    
  return (
    <div className="preloader">
        <div className="preloader-header">
            <h2>Ansioluettelo</h2>
        </div>
        <div className="preloader-content">
            <h1><span>J</span><span>a</span><span>s</span><span>o</span><span>n</span></h1>
            <h1><span>w</span><span>i</span><span>l</span><span>l</span><span>i</span><span>a</span><span>m</span><span>s</span></h1>
            <div className="line"></div>
            <button className="cta">Enter</button>
        </div>
    </div>
  )
}

export default Preloader
