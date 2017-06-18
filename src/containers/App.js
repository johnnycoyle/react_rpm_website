/*es-lint enable*/

import React, { Component } from 'react';
import ReactTransition from 'react-transition-group/CSSTransitionGroup';
import styles from './../assets/styles/app.scss';
import YoutubeEmbedVideo from 'youtube-embed-video';

class App extends Component {
  constructor(props) {
    super(props);

  }



  render(){
    return(
      <div id='home-page-container'>
        <span id='main-title'>react-rpm</span>
        <span id='main-byline'>an open-source devtool for measuring react efficiency | available on Chrome store </span>
        <div id='nav-bar'>
          <div id='nav-buttons'>
            <button>download</button>
            <button>github</button>
            <button>video walkthrough</button>
          </div>
        </div>

        <div id='splash-container'>
          <div id='rpm-splash-container'>
            <img id='splash-logo' src={require('./../assets/images/rpm_logo.png')}/>
            <div id='description-text'>
              <span id='description-title'>Measure React App Effenciency with React RPM</span>
              <span id='description-summary'><br/>React RPM is a Chrome DevTool configured to automatically capture and display performance data in real-time as you interact with your React.js application, enabling you to quickly identify bottlenecks and gauge overall efficiency with precision.<br/><br/> After downloading the DevTool from the Chrome store, simply install the npm module and import into the top level React component. The NPM package will immediately begin capturing session data, which is then relayed seamlessly to the DevTool for processing and visualization. <br/><br/>Debugging large-scale applications is a complex challenge, and different developers have different needs. React RPM is designed to fit a wide variety of needs, and it allows developers to pinpoint areas of interest --- such as average render times, lifecycle times, overall render times, and most importantly wasted time, which is the amount of time spent unnecessarily re-rendering React components.</span>
            </div>
          </div>
          <div id='iframe-container'>
            <iframe width="853" height="480" src="https://www.youtube.com/embed/8Ye9b3RY7lQ?rel=0?ecver=1" frameborder="0" allowfullscreen></iframe>
          </div>

          <div id='credits-container'>
            <span>react-rpm was created by team JAMM:</span>
            <a href="https://github.com/johnnycoyle">johnny coyle</a>
            <a href="https://github.com/mjlaufer">matthew laufer</a>
            <a href="https://github.com/mkawauchi">masaya kawauchi</a>
            <a href="https://github.com/angieyu">angela yu</a>
          </div>
            
        </div>
      </div>

    )
  }
}
    

export default App;
