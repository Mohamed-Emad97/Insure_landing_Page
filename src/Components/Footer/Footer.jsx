import React from 'react';
import footerLogo from "../../assets/images/logo.svg";
import {footerData} from "../conts";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer className="py-5">
        <div className="container">
          <div className={`${styles['mainHaeding']} d-flex justify-content-between gap-3 align-items-center flex-lg-row flex-md-row flex-column flex-sm-column`}>
            <div className={`${styles['img']}`}>
              <img src={footerLogo} alt="" className="w-100" />
            </div>
            <div className="socails">
              <ul className="d-flex list-unstyled gap-3 align-items-center">
                <li className='facebook fs-3'><i className="fa-brands fa-facebook"></i></li>
                <li className='twitter fs-3'><i className="fa-brands fa-twitter"></i></li>
                <li className='pinterest fs-3'><i className="fa-brands fa-pinterest"></i></li>
                <li className='instagram fs-3'><i className="fa-brands fa-instagram"></i></li>
              </ul>
            </div>
          </div>
          <div className="border my-4"></div>
          <div className="row">
            {footerData.map((item,i)=>
              <>
                <div className="col-lg-3 col-md-6 col-sm-8" key={i}>
                  <h3 className='my-3'>{item.title}</h3>
                  <ul className='list-unstyled'>
                    {item.listItems.map((listItem, j) =>
                      <>
                        <li key={j}><a href="#">{listItem}</a></li>
                      </>
                    )}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </footer>
    </>
  )
}
