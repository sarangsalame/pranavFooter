import React from "react";
import "./downloadFrom.css";
const DownloadFrom = () => {
  return (
    <section className='down__section'>
      <div className='down__section-head'>
        <h2>
          So, what are you waiting for? Get our exclusive deal in one hand
        </h2>
        <p>Download our apps for free and feel the beat!</p>
        <div className='down__section-button-cont'>
          <div className='btn__googlePlay'>
            <div className='btn__gplay-img'></div>
            <div className='btn__content'>
              <span>GET IT ON</span>
              <span>Google Play</span>
            </div>
          </div>

          <div className='btn__appStore'>
            <div className='btn__app-img'></div>
            <div className='btn__content'>
              <span>DOWNLOAD ON THE</span>
              <span>App Store</span>
            </div>
          </div>
        </div>
      </div>
      <div className='down__section-img'></div>
    </section>
  );
};

export default DownloadFrom;
