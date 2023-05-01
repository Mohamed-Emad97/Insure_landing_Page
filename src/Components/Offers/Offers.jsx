import React from 'react';
import {offersData} from "../conts";
import styles from "./Offers.module.scss";

export default function Offers() {
  return (
    <>
      <section id={`${styles['offers']}`} className='py-5'>
        <div className="container">
          <div className={`${styles["mainHeading"]} my-5 p-4`}>
            <div className={`${styles['width']} border my-3`}></div>
            <h2>
              We're different
            </h2>
          </div>
          <div className="row">
            {
              offersData.map((item, i) => 
                <>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className={`${styles['offerCard']} p-4`}>
                      <div className="img my-4">
                        <img src={item.img} alt="" className='w-25'/>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </>
              )
            }
          </div>
        </div>
      </section>
    </>
  )
}
