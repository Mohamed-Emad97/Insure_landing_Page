import React from 'react';
import logo from "../../assets/images/logo.svg";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img src={logo} alt="" className="w-100" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="#">HOW WE WORK</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">BLOG</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">ACCOUNT</a>
                </li>
                <div className={`${styles["Btn"]} mx-2`}>
                  <a href="#" className={`${styles["btnMain"]} btn px-3 p-2 rounded-0`}>VIEW PLANS</a>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
