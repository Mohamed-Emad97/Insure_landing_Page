import React from 'react';
import patternLeftImg from "../../assets/images/bg-pattern-intro-left-desktop.svg";
import patternRightImg from "../../assets/images/bg-pattern-intro-right-desktop.svg";
import landingImg from "../../assets/images/image-intro-desktop.jpg";
import styles from "./Landing.module.scss";

export default function Landing() {
  return (
    <>
      <section id={`${styles['landing']}`} className='position-relative'>
        <div className="container h-100">
          <div className="h-100 d-flex align-items-center justify-content-between gap-5 flex-lg-row flex-md-row flex-sm-column-reverse flex-column-reverse caption">
            <div className={`${styles['text']}`}>
              <div className="border d-lg-block d-md-block d-sm-none d-none my-5 w-25"></div>
              <h1 className='my-4'>
                Humanizing your insurance.
              </h1>
              <p>
                Get your life insurance coverage easier and faster. We blend our expertise
                and technology to help you find the plan that's right for you. Ensure you
                and your loved ones are protected.
              </p>
              <div className={`${styles["Btn"]} mx-2`}>
                  <a href="#" className={`${styles["btnMain"]} btn px-3 p-2 rounded-0`}>VIEW PLANS</a>
                </div>
            </div>
            <div className={`${styles['img']}`}>
              <img src={landingImg} alt="" className='w-100'/>
            </div>
            <div className={`${styles['leftPattern']} position-absolute`}>
              <img src={patternLeftImg} alt="" className='w-100'/>
            </div>
            <div className={`${styles['rightPattern']} position-absolute`}>
              <img src={patternRightImg} alt="" className="w-100"/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
