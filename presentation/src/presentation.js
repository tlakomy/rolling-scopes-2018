// Import React
import styled from 'styled-components';
import React from 'react';


// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
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

const Signature = styled(Text)`
  position: absolute;
  bottom: -100%;
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
  mario: require("./assets/mario.gif"),
  yolo: require("./assets/yolo.gif"),
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        progress="number"
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="primary">
          <Heading fit caps textColor="tertiary">
            Journey through VR and AR with React
          </Heading>
          <Image fit src={images.egnyteLogo.replace("/", "")} height="150px" margin={0}/>
          <Signature textColor="secondary">Tomasz Łakomy @tlakomy</Signature>
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
        <Slide><Heading fit textColor="secondary">Some things haven't changed</Heading></Slide>
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
        <Slide><Heading fit textColor="secondary">Future is weird</Heading></Slide>
        <Slide><Image fit src={images.uber.replace("/", "")} height="600" margin={0}/></Slide>
        <Slide bgImage={images.tv.replace("/", "")}></Slide>
        <Slide bgImage={images.gearvr.replace("/", "")}></Slide>
        <Slide><Heading fit textColor="secondary">Back to the web</Heading></Slide>
        <Slide><Heading fit textColor="secondary">In 2018, we can do more</Heading></Slide>
        <Slide><Heading fit textColor="secondary">So, what changed?</Heading></Slide>
        <Magic>
          <Slide><Heading textColor="secondary">Best library?</Heading></Slide>
          <Slide><Heading textColor="secondary">jQuery</Heading></Slide>
          <Slide><Heading textColor="secondary">Most popular lib?</Heading></Slide>
          <Slide><Heading textColor="secondary">React</Heading></Slide>
        </Magic>
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
        <Slide><Heading fit textColor="secondary">Two types of AR</Heading></Slide>
        <Slide bgImage={images.marker.replace("/", "")}></Slide>
        <Slide>
          <Layout>
            <Image fit src={images.marker2.replace("/", "")} height="400" margin={0}/>
            <Image fit src={images.less.replace("/", "")} height="300" margin={50}/>  
          </Layout>
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
      </Deck>
    );
  }
}
