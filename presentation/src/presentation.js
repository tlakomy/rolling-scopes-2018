// Import React
import styled from 'styled-components';
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Image,
  Heading,
  ListItem,
  List,
  Layout,
  Fit,
  Fill,
  Quote,
  Slide,
  Magic,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const CustomImage = styled(Image)`
  position: absolute;
  max-height: none !important;
  top: -200px;
`;

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'black',
    secondary: '#03A9FC',
    tertiary: '#009D99'
  },
  {
    primary: 'Open Sans Condensed',
    secondary: 'Helvetica',
  }
);

const images = {
  egnyteLogo: require("./assets/egnyte-logo.png"),
  virtualboy: require("./assets/virtualboy.jpg"),
  gearvr: require("./assets/gearvr.jpg"),
  tv: require("./assets/tv.jpg"),
  uber: require("./assets/uber.jpg"),
  vr: require("./assets/vr.jpg"),
  amazon: require("./assets/amazon.gif"),
  facebook: require("./assets/facebook.gif"),
  github: require("./assets/github.gif"),
  reddit: require("./assets/reddit.gif"),
  youtube: require("./assets/youtube.gif"),
  twitter: require("./assets/twitter.gif"),
  frameworks: require("./assets/frameworks.png"),
  renderers: require("./assets/renderers.png"),
  ardefinition: require("./assets/ardefinition.png"),
  airforce: require("./assets/airforce.jpg"),
  marker: require("./assets/marker.jpg"),
  marker2: require("./assets/marker2.png"),
  less: require("./assets/less-logo.png"),
  hiro: require("./assets/hiro.png"),
  arjs: require("./assets/arjs.jpg"),
  reactar: require("./assets/reactar.png"),
  custom_marker: require("./assets/custom_marker.png"),
  mario: require("./assets/mario.gif"),
  yolo: require("./assets/yolo.gif"),
  hellovr: require("./assets/hellovr.png"),
  hololens: require("./assets/hololens.jpg"),
  expensive: require("./assets/expensive.png"),
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        progress="bar"
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="primary">
          <Heading caps fit textColor="tertiary">
            Journey through VR and AR with React
          </Heading>
          <Text fontSize={5} textColor="tertiary" margin="50px 0 0 0">
             Tomasz Łakomy
          </Text>
          <Image fit src={images.egnyteLogo.replace("/", "")} height="150px" margin={0}/>
        </Slide>
        <Slide><Heading fit textColor="secondary">Let's go back to 2012</Heading></Slide>
        <Slide>
          <Heading size={2} fit textColor="secondary" textFont="primary">
            What was it like back then?
          </Heading>
          <List>
            <Appear><ListItem>IE8 😤</ListItem></Appear>
            <Appear><ListItem>PWA? 🤔</ListItem></Appear>
            <Appear><ListItem>Flexbox? 🤨</ListItem></Appear>
            <Appear><ListItem>jQuery 😍</ListItem></Appear>
          </List>  
        </Slide>
        <Slide><Heading fit textColor="secondary">Some things haven't changed that much</Heading></Slide>
        <Slide>
          <Appear>
            <CustomImage src={images.amazon.replace("/", "")}/>
          </Appear>
          <Appear>
            <CustomImage src={images.github.replace("/", "")}/>
          </Appear>
          <Appear>
            <CustomImage src={images.facebook.replace("/", "")}/>
          </Appear>
          <Appear>
            <CustomImage src={images.twitter.replace("/", "")}/>
          </Appear>
          <Appear>
            <CustomImage src={images.reddit.replace("/", "")}/>
          </Appear>
          <Appear>
            <CustomImage src={images.youtube.replace("/", "")}/>
          </Appear>
        </Slide>
        <Slide><Heading fit textColor="secondary">The web can be so much more</Heading></Slide>
        <Slide><Heading fit textColor="secondary">It's fun to explore 🎉</Heading></Slide>
        <Slide><Heading fit textColor="secondary">Now, we are living in the future 📅</Heading></Slide>
        <Slide><Heading fit textColor="secondary">Future is weird</Heading></Slide>
        <Slide><Image fit src={images.uber.replace("/", "")} height="600" margin={0}/></Slide>
        <Slide bgImage={images.tv.replace("/", "")}></Slide>
        <Slide bgImage={images.gearvr.replace("/", "")}></Slide>
        <Slide><Heading fit textColor="secondary">Back to the web</Heading></Slide>
        <Slide><Heading fit textColor="secondary">In 2018, we can do more</Heading></Slide>
        <Slide><Heading fit textColor="secondary">React</Heading></Slide>
        <Slide><Heading fit textColor="secondary">A JavaScript library for building user interfaces</Heading></Slide>
        <Slide>
          <Image fit src={images.frameworks.replace("/", "")} height="550" margin={0}/>
          <Cite textColor="secondary">Source: http://www.timqian.com/star-history/#facebook/react&jquery/jquery&angular/angular&vuejs/vue</Cite>
        </Slide>
        <Slide><Heading fit textColor="secondary">Flexibility</Heading></Slide>
        <Slide>
          <Image fit src={images.renderers.replace("/", "")} height="600" margin={0}/>
          <Cite>Source: https://github.com/chentsulin/awesome-react-renderer</Cite>
        </Slide>
        <Magic>
          <Slide><Heading textColor="secondary">React</Heading></Slide>
          <Slide><Heading textColor="secondary">React for AR and VR</Heading></Slide>
          <Slide><Heading textColor="secondary">Let's start with AR</Heading></Slide>
        </Magic>
        
        <Slide>
          <Text textColor="secondary">
            The are is a unit of area, equal to 100 square metres (10 m × 10 m), used for measuring land area. 
            It was defined by older forms of the metric system, but is now outside the modern International System of Units (SI).
          </Text>
        </Slide>
        <Magic>        
          <Slide><Heading textColor="secondary">AR</Heading></Slide>
          <Slide><Heading textColor="secondary">Augmented Reality</Heading></Slide>
        </Magic>
        <Slide>
          <Image fit src={images.ardefinition.replace("/", "")} height="600" margin={0}/>
        </Slide>
        <Slide><Heading fit textColor="secondary">A layer on top of real world</Heading></Slide>
        <Slide bgImage={images.arjs.replace("/", "")}></Slide>
        <Slide><Heading fit textColor="secondary">It's been around for quite a while</Heading></Slide>
        <Slide>
          <Image fit src={images.airforce.replace("/", "")} height="550" margin={0}/>
          <Cite>By AR Trends (Own work) [CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)], via Wikimedia Commons</Cite>
        </Slide>
        <Slide bgImage={images.marker.replace("/", "")}>
            <Heading fit textColor="secondary" bgColor="black">Marker-based AR</Heading>
        </Slide>
        <Slide>
          <Image fit src={images.hiro.replace("/", "")} height="600" margin={0}/>
        </Slide>
        <Magic>
          <Slide><Heading textColor="secondary">ReactAR</Heading></Slide>
          <Slide><Heading textColor="secondary">React-Web-AR</Heading></Slide>
        </Magic>
        <Slide>
          <Image fit src={images.reactar.replace("/", "")} height="600" margin={0}/>
          <Cite>Source: Nitin Tulswani https://github.com/nitin42/React-Web-AR</Cite>
        </Slide>
        <Slide><Heading fit textColor="secondary">Experimental and work in progress 🚧</Heading></Slide>
        <Slide bgImage={images.yolo.replace("/", "")}></Slide>
        <Slide>
          <Heading size={2} fit textColor="secondary" textFont="primary">
            Standing on the shoulders of giants
          </Heading>
          <List>
            <Appear><ListItem>React</ListItem></Appear>
            <Appear><ListItem>AR.js</ListItem></Appear>
            <Appear><ListItem>aframe</ListItem></Appear>
            <Appear><ListItem>emscripten</ListItem></Appear>
            <Appear><ListItem>asm.js</ListItem></Appear>
            <Appear><ListItem>artoolkit</ListItem></Appear>
          </List>  
        </Slide>
        <Slide>
          <CodePane
            lang="jsx"
            theme="dark"
            contentEditable="true"
            textSize={16}
            source={`import React, { Component } from 'react';

import { AFrameRenderer, Marker } from 'react-web-ar';

class App extends Component {
    render() {
        return (
          <AFrameRenderer>
            <Marker parameters={{ preset: "hiro" }}>
              <a-box color="blue">
                <a-animation
                  attribute="rotation"
                  to="360 0 0"
                  dur="2000"
                  easing="linear"
                  repeat="indefinite"
                />
              </a-box>
            </Marker>
          </AFrameRenderer>
        )
    }
}

export default App;
`}
          />
        </Slide>
        <Slide><Heading fit textColor="secondary">Custom markers</Heading></Slide>
        <Slide bgImage={images.custom_marker.replace("/", "")}></Slide>
        <Slide>
          <CodePane
            lang="javascript"
            textSize={30}
            theme="dark"
            contentEditable="true"
            source={`<Marker parameters={{ 
            preset: 'custom',
            type: 'pattern',
            patternUrl: './rollingscopes.patt', 
            url: './rollingscopes.patt'
          }}>`}
            />
        </Slide>
        <Slide><Heading fit textColor="secondary">Let's go further</Heading></Slide>
        <Magic>
          <Slide><Heading textColor="secondary">Change the reality</Heading></Slide>
          <Slide><Heading textColor="secondary">Virtual Reality</Heading></Slide>
        </Magic>
        <Slide bgColor="black">
          <Heading size={2} fit textColor="secondary" textFont="primary">
            It's been around for quite some time
          </Heading>
        </Slide>
        <Slide bgImage={images.virtualboy.replace("/", "")}></Slide>
        <Slide bgImage={images.mario.replace("/", "")}>
          <Appear fid="1">
            <Heading size={2} caps fit textColor="white">
              Available only in 🇯🇵 and 🇺🇸
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={2} caps fit textColor="white" margin="20px 0">
              Released in July 1995
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={2} caps fit textColor="white" margin="20px 0">
              Discontinued in December 1995
            </Heading>
          </Appear>
        </Slide>
        <Slide><Heading textColor="secondary">23 years later</Heading></Slide>
        <Slide><Heading textColor="secondary">Virtual reality with React</Heading></Slide>
        <Slide>
          <Heading size={2} fit>
            What is ReactVR?
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} fit textColor="secondary" textFont="primary">
            A framework for building VR apps using React
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} fit>
            Getting started
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Layout>
            <Code size={2} fit textColor="secondary">
              npm install -g react-vr-cli
            </Code>
          </Layout>
          <Layout>
            <Code size={2} fit textColor="secondary">
            react-vr init HelloVR 
          </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="secondary"> 
            cd HelloVR
          </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="secondary">
              npm start
            </Code>  
          </Layout>
        </Slide>
        <Slide bgColor="black">
          <Layout>
            <Code size={2} fit textColor="secondary" margin="0 0 0 20px">
              · node_modules
            </Code>
          </Layout>
          <Layout>
            <Code size={2} fit textColor="secondary" margin="0 0 0 20px"> 
              · package.json
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="secondary" margin="0 0 0 20px">
              · static_assets/
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="secondary" margin="0 0 0 60px">
                · chess-world.jpg
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="secondary" margin="0 0 0 20px"> 
              · vr/
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="secondary" margin="0 0 0 60px">
                · client.js
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="secondary" margin="0 0 0 60px">
                · index.html
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="secondary" margin="0 0 0 20px">
              · index.vr.js
            </Code>  
          </Layout>
        </Slide>
        <Slide bgColor="black">
          <Layout>
            <Code size={2} fit textColor="gray" margin="0 0 0 20px">
              · node_modules
            </Code>
          </Layout>
          <Layout>
            <Code size={2} fit textColor="gray" margin="0 0 0 20px"> 
              · package.json
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="gray" margin="0 0 0 20px">
              · static_assets/
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="gray" margin="0 0 0 60px">
                · chess-world.jpg
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="gray" margin="0 0 0 20px"> 
              · vr/
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="gray" margin="0 0 0 60px">
                · client.js
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="gray" margin="0 0 0 60px">
                · index.html
            </Code>  
          </Layout>
          <Layout>
            <Code size={2} fit textColor="secondary" margin="0 0 0 20px">
              · index.vr.js
            </Code>  
          </Layout>
        </Slide>
        <Slide bgImage={images.hellovr.replace("/", "")}></Slide>
         <Slide>
          <CodePane
            lang="javascript"
            textSize={16}
            source={`export default class HelloVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          hello
        </Text>
      </View>
    );
  }
};`}
            />
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            Positioning items in 3D space
          </Heading>
        </Slide>
        <Slide bgColor="black" textColor="secondary">
          <Heading size={2} fit textColor="secondary" textFont="primary">
            Units and transforms
          </Heading>
          <List>
            <Appear><ListItem>Distance and dimensional units are in meters</ListItem></Appear>
            <Appear><ListItem>Rotation units are in degrees</ListItem></Appear>
            <Appear><ListItem>Transform properties:</ListItem></Appear>
            <Appear><List>
              <ListItem>Scale</ListItem>
              <Appear><ListItem>Rotate</ListItem></Appear>
              <Appear><ListItem>Translate</ListItem></Appear>
              <Appear><ListItem>Matrix</ListItem></Appear>
            </List></Appear>
          </List>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} fit textColor="secondary" textFont="primary">
            Events
          </Heading>
        </Slide>
        <Slide bgColor="black" textColor="secondary">
          <Heading size={2} fit textColor="secondary" textFont="primary">
            Supported Input Events
          </Heading>
          <List>
            <Appear><ListItem>onEnter</ListItem></Appear>
            <Appear><ListItem>onExit</ListItem></Appear>
            <Appear><ListItem>onMove</ListItem></Appear>
            <Appear><ListItem>onInput</ListItem></Appear>
            <Appear><List>
              <ListItem>MouseInputEvent</ListItem>
              <Appear><ListItem>KeyboardInputEvent</ListItem></Appear>
              <Appear><ListItem>TouchInputEvent</ListItem></Appear>
              <Appear><ListItem>GamepadInputEvent</ListItem></Appear>
            </List></Appear>
          </List>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} fit textColor="secondary" textFont="primary">
            Allright, that's cool but...
          </Heading>
        </Slide>      
        <Slide bgImage={images.vr.replace("/", "")} bgDarken={0.5}>
          <Heading size={2} fit textColor="white">
            Where's the VR?!
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} fit textColor="secondary" textFont="primary">
            THE DEMO
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} fit textColor="secondary" textFont="primary">
            What if I wanted to do both?
          </Heading>
        </Slide>
        <Slide bgImage={images.hololens.replace("/", "")} bgDarken={0.5}>
          <Heading size={2} fit textColor="white">
            Hololens
          </Heading>
        </Slide>
        <Slide>
          <Image fit src={images.expensive.replace("/", "")} height="500" margin={0}/>
        </Slide>
        <Magic>
          <Slide><Heading textColor="secondary">React</Heading></Slide>
          <Slide><Heading textColor="secondary">React AR</Heading></Slide>
          <Slide><Heading textColor="secondary">React VR</Heading></Slide>
          <Slide><Heading textColor="secondary">React VAR</Heading></Slide>
        </Magic>
        <Slide>
          <Heading size={2} caps fit textFont="primary">
            The Web offers us unlimited possibilities 🌐
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="secondary" textFont="primary">
            And it's waiting for us to explore them 😎
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} fit textColor="secondary" textFont="primary">
            Thank you!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
