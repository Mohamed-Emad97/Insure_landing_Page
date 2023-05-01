import React from 'react';
import styles from "./Find.module.scss";

export default function Find() {
  return (
    <>
      <section id={`${styles['find']}`} className='py-5 my-5'>
        <div className="container">
          <div className={`${styles['banner']} p-5 d-flex justify-content-between align-items-center flex-lg-row flex-md-row flex-column flex-sm-column`}>
            <div className={`${styles['txt']}`}>
              <h2>
                FIND OUT MORE <br/>  ABOUT HOW WE WORK
              </h2>
            </div>
            <div className={`${styles["Btn"]} mx-2`}>
              <a href="#" className={`${styles["btnMain"]} btn px-3 p-2 rounded-0`}>HOW WE WORK</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
