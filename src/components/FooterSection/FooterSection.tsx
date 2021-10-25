import * as React from 'react'
import { FC } from 'react'


const FooterSection: FC = (): JSX.Element =>
    <footer id="footer" className="footer-section">
      <div className="footer-section__contact--wrap">
        <div className="footer-section__contact">
          <div className="footer-section__contact--phone">
            <div className=" footer-section__link">
              <img className="footer-section__links--image" src="/images/phone.png"
                   alt="phone"/>
            </div>
            <p>0721 345 236</p>
          </div>
          <div className="footer-section__contact--address">
            <div className=" footer-section__link">
              <a
                href="https://www.google.com/maps/place/45%C2%B043'41.6%22N+21%C2%B016'16.3%22E/">
                <img className="footer-section__links--image" src="/images/location.png"
                     alt="location"/>
              </a>
            </div>
            <p className="footer-section__contact--address-text">Str. Onisifor Ghibu nr.
              14, Cluj Napoca, Romania</p>
          </div>
        </div>
        <div className="footer-section__links">
          <div className=" footer-section__link">
            <a href="https://www.instagram.com/">
              <img className="footer-section__links--image" src="/images/instagram.png"
                   alt="instagram"/>
            </a>
          </div>
          <div className="footer-section__link">
            <a href="https://www.facebook.com/">
            <img className="footer-section__links--image" src="/images/facebook.png"
                 alt="facebook"/>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-section__copyright">
        <p>Copyright © 2021 George Hutanu. All rights reserved.</p>
      </div>
    </footer>


export default FooterSection