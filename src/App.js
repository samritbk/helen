import React, { Component } from 'react';
import './css/style.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="marginedInner80">
            <div className="left logo"><b>YOUR LOGO HERE</b></div>
            <div className="menuWrapper right">
            <ul className="menu">
              <a href="#"><li>Home</li></a>
              <a href="#"><li>Services</li></a>
              <a href="#"><li>About</li></a>
              <a href="#"><li>Contact</li></a>
              <div className="clear"></div>
            </ul>
          </div>
          <div className="clear"></div>
          </div>
          <div className="clear"></div>
        </div>
        <div className="topHeader">
          <div className="moto">
            <div className="midText">
            <div className="mottoStyle">I am Helen Mehari</div><div className="clear"></div>
            <div className="typer mottoStyle marginMiddleMotto mottoSmall">Network Security</div><div className="clear"></div>
            <div className="mottoStyle mottoSmall">Professional</div><div className="clear"></div>
          </div>
        </div>
        </div>
        <div className="content">
      <div className="sectionTitle">
        Overview
      </div>
      <div className="marginedInner90">
        <div className="col-3">
          <div className="marginedInner90">
            <div className="intro">
              <span className="ion-eye ion"/>
            </div>
            <div className="inner-text-title">Vision</div>
            <div className="intro-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero.Mauris ultrices odio vitae nulla ultrices iaculis.
            </div>
            <a href="#">
              <div className="learn-more-style">
              Learn More
              </div>
            </a>
          </div>
        </div>
        <div className="col-3">
        <div className="marginedInner90">
          <div className="intro">
            <span className="ion-code ion"/>
          </div>
          <div className="inner-text-title">Services</div>
          <div className="intro-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero.Mauris ultrices odio vitae nulla ultrices iaculis.
          </div>
          <div className="learn-more-style">
            Learn More
          </div>
        </div>
        </div>
        <div className="col-3">
        <div className="marginedInner90">
          <div className="intro">
            <span className="ion-information ion"/>
          </div>
          <div className="inner-text-title">About</div>
          <div className="intro-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero.Mauris ultrices odio vitae nulla ultrices iaculis.
          </div>
          <div className="learn-more-style">
            Learn More
          </div>
        </div>
        </div>
        <div className="clear"></div>
      </div>
    </div>
    <div className="images">
      <div className="saying">
        Our works speaks for itself
      </div>
    </div>
    <footer>
        <div className="marginedInner80">
          <div className="col-2">
            <h2>Address</h2>
            <div className="col-2">
              <h3>Postal</h3>
              <p>
                Untitled Corporation<br/>
                1234 Somewhere Rd #987<br/>
                Nashville, TN 00000-0000
              </p>
            </div>
            <div className="col-2">
              <h3>Telephone</h3>
              <p>
                (000) 555-0000
              </p>
              <h3>Email</h3>
              <p>
                info@example.com
              </p>
            </div>
            <h3 className="social">Social</h3>
            <div>
              <span className="ion-social-facebook"></span>
              <span className="ion-social-twitter"></span>
              <span className="ion-social-instagram"></span>
              <span className="ion-social-pinterest"></span>
            </div>
          </div>
          <div className="col-2">
            <h2>Contact</h2>
            <div className="col-2">
              <input type="text" name="Name" placeholder="name"/>
            </div>
            <div className="col-2">
              <input type="email" name="email" placeholder="email"/>
            </div>
              <textarea name="text" placeholder="Lets talk about your project"></textarea>
              <div className="formHint">This message will be sent to my email. I will answer as soon as possible.</div>
              <input type="button" value="Send"/>
            </div>
          <div className="clear"></div>
        </div>
      </footer>
      </div>
    );
  }
}

export default App;
