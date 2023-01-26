import {
  BsCircleFill,
  BsGithub,
  BsBoxArrowUpRight,
  BsFillBriefcaseFill,
} from "react-icons/bs";
import { GiSwitchWeapon } from "react-icons/gi";
import proPic from "../../src/assets/propic.jpg";
export const Data = [
  {
    title: "Kabelo Leboa",
    description: "I'm a software developer and this is my portfolio site",
    info: `South Africa is my home land, Aston Villa is my Football team,for now!.
      I recommend you watch "All Quiet on the Western Front" and if you like it maybe we might match on...\n
      Okay let's move on\n`,
    image: proPic,
    color: "blue",
  },
  {
    title: "Work Projects",
    description: "These are projects I have worked on for moola",
    info: `I've worked for 2 Companies so far and these are the technologies I used during my time with both of them.
      ReactNative, React.js,Next.js, Node.js, Firebase, GraphQL,PostgreSQL,Docker.\n Okay let's see the Blow`,
    image: "icon",
    iconName: (
      <BsFillBriefcaseFill
        size={110}
        style={{
          borderRadius: "50%",
          boxShadow: ` 0 0 .2rem #fff,
0 0 .2rem #fff,
0 0 2rem purple,
0 0 0.8rem purple,
0 0 2.8rem purple,
inset 0 0 1.3rem purple`,
        }}
      />
    ),
    color: "purple",
  },
  {
    title: "i-Nav",
    description:
      "This was a project I was working on during my time at Ultrafrica",
    info: `i-Nav is a smartphone application used to provide navigation assistance for people living with disability. 
    The app provides the users with an ultimate ability to independently navigate both outdoor and indoor environments. 
    The app simplifies navigation by providing them with disability friendly access points surrounding their environments.`,
    image:
      "https://play-lh.googleusercontent.com/WqfMRd7AOwmctxgS8YmeI2XCfUNy1uWaNEMHj3c7zHuTpsgWOXHGkHuyYrgCcx8QDw=w240-h480-rw",
    iconName: (
      <BsGithub
        size={110}
        style={{
          borderRadius: "50%",
          boxShadow: ` 0 0 .2rem #fff,
0 0 .2rem #fff,
0 0 2rem red,
0 0 0.8rem red,
0 0 2.8rem red,
inset 0 0 1.3rem red`,
        }}
      />
    ),
    color: "red",
    link: (
      <a href="https://play.google.com/store/apps/details?id=com.ttz.kmystro.i_nav&hl=en_ZA&gl=US">
        <BsBoxArrowUpRight size={35} color="red" />
      </a>
    ),
  },
  {
    title: "Checkers",
    description:
      "The first project I had my hands on during my time at Make Better Consulting",
    info: `The Checkers app offers thousands of products and the ability of their customers to save (Xtra Savings) with highly personalised offers.`,
    image:
      "https://play-lh.googleusercontent.com/qR6RwYkdo9Js_NDz8h-1SUeI3oP2zazDeTGFKzXymwwd5lYGx9huatNKVF6tRQ9vOA=w240-h480-rw",
    iconName: (
      <BsGithub
        size={110}
        style={{
          borderRadius: "50%",
          boxShadow: ` 0 0 .2rem #fff,
0 0 .2rem #fff,
0 0 2rem red,
0 0 0.8rem red,
0 0 2.8rem red,
inset 0 0 1.3rem red`,
        }}
      />
    ),
    color: "red",
    link: (
      <a href="https://play.google.com/store/apps/details?id=za.co.shoprite.eezicoupon&hl=en_ZA&gl=US">
        <BsBoxArrowUpRight size={35} color="red" />
      </a>
    ),
  },
  {
    title: "myTFGworld",
    description:
      "A project I had my hands on during my time at Make Better Consulting",
    info: `The app offers a comprehensive portfolio of retail brands that include clothing, footwear, jewellery, sportswear, mobile phones, technology products and home furniture.`,
    image:
      "https://play-lh.googleusercontent.com/pKBc2qqNjCT_SK9W7cty5t9sU7ql-MpI2vHOI1XJoFla309YBVBT0Z6iC3G2_sIsgIqQ=w240-h480-rw",
    iconName: (
      <BsGithub
        size={110}
        style={{
          borderRadius: "50%",
          boxShadow: ` 0 0 .2rem #fff,
0 0 .2rem #fff,
0 0 2rem red,
0 0 0.8rem red,
0 0 2.8rem red,
inset 0 0 1.3rem red`,
        }}
      />
    ),
    color: "red",
    link: (
      <a href="https://play.google.com/store/apps/details?id=com.tfgbeta&hl=en_ZA&gl=US">
        <BsBoxArrowUpRight size={35} color="red" />
      </a>
    ),
  },
  {
    title: "PetRock",
    description:
      "Another project I had my hands on during my time at Make Better Consulting",
    info: `Pet Rock is a private platform for digital asset investments, offering regulated access to crypto markets.`,
    image:
      "https://uploads-ssl.webflow.com/62ff7f8952ca1007ee5b5af0/63060533e1e0b82e7c8c089d_petrockLogoInvertColour.svg",
    iconName: (
      <BsGithub
        size={110}
        style={{
          borderRadius: "50%",
          boxShadow: ` 0 0 .2rem #fff,
0 0 .2rem #fff,
0 0 2rem red,
0 0 0.8rem red,
0 0 2.8rem red,
inset 0 0 1.3rem red`,
        }}
      />
    ),
    color: "red",
    link: (
      <a href="https://www.petrockinvest.com/">
        <BsBoxArrowUpRight size={35} color="red" />
      </a>
    ),
  },
  {
    title: "Ovex",
    description: " Yep!!, during my time at Make Better Consulting",
    info: `A platform that offers cryptocurrency trading and the largest selection of digital asset markets. I Was part of the team helping to develop the Ovex app.`,
    image: "icon",
    iconName: (
      <BsCircleFill
        size={110}
        color={"black"}
        style={{
          borderRadius: "50%",
          boxShadow: ` 0 0 .2rem #fff,
0 0 .2rem #fff,
0 0 2rem red,
0 0 0.8rem red,
0 0 2.8rem red,
inset 0 0 1.3rem red`,
        }}
      />
    ),
    color: "red",
    link: (
      <a href="https://www.ovex.io/">
        <BsBoxArrowUpRight size={35} color="red" />
      </a>
    ),
  },
  {
    title: "Personal Projects",
    description: "These are the my personal projects",
    info: `As a developer you need time to yourself so you can sharpen your skills, like a young prodigy trying to avenge the death of a sansei
    in a 90s action flick`,
    image: "icon",
    iconName: (
      <GiSwitchWeapon
        size={110}
        style={{
          borderRadius: "50%",
          boxShadow: ` 0 0 .2rem #fff,
0 0 .2rem #fff,
0 0 2rem green,
0 0 0.8rem green,
0 0 2.8rem green,
inset 0 0 1.3rem green`,
        }}
      />
    ),
    color: "green",
  },
  {
    title: "Goli",
    description:
      " Goli was a project I build to explore the world of blockchain technology ",
    info: `Goli is Polygon Token build to power software applications and innovative technologies through funding.`,
    image:
      "https://scontent.fjnb1-1.fna.fbcdn.net/v/t39.30808-6/302602781_403379111922365_3113053652681245952_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGLRv6ycgkA06qeL28vYrOiOtVDd8ZKCA061UN3xkoIDZqLxPHypPMTE-WbIBSoWZTeNCuqFDzP2-HY8Kv0OfbR&_nc_ohc=He6IJlBbkjoAX_lLK2F&_nc_zt=23&_nc_ht=scontent.fjnb1-1.fna&oh=00_AfCzB4uLBrllD0F9eWRUNxiWu0ASUjNle3OO8637U1uTkw&oe=63D740EC",
    iconName: (
      <BsCircleFill
        size={110}
        style={{
          borderRadius: "50%",
          boxShadow: ` 0 0 .2rem #fff,
0 0 .2rem #fff,
0 0 2rem yellow,
0 0 0.8rem yellow,
0 0 2.8rem yellow,
inset 0 0 1.3rem yellow`,
        }}
      />
    ),
    color: "yellow",
    link: (
      <a href="https://golinetwork.com/">
        <BsBoxArrowUpRight size={35} color="red" />
      </a>
    ),
  },
  {
    title: "CatchOne",
    description:
      " CatchOne Introduced me to the world of Maps & location data via Google Maps ",
    info: `Catch1 focuses on providing the latest information on the transportation industry from the ground up and who is best to deliver that information then the people who use those public roads. 
    Therefore the app relies on information given to it by the community on the app.`,
    image:
      "https://play-lh.googleusercontent.com/1nPd0Z0kb_dHFttDzLNABbmO5QOPNZ97kmvudTurM1dS1PTOFAKfCjKG8qfZ7G1y1jWE=w240-h480-rw",
    iconName: (
      <BsCircleFill
        size={110}
        style={{
          borderRadius: "50%",
          boxShadow: ` 0 0 .2rem #fff,
0 0 .2rem #fff,
0 0 2rem yellow,
0 0 0.8rem yellow,
0 0 2.8rem yellow,
inset 0 0 1.3rem yellow`,
        }}
      />
    ),
    color: "yellow",
    link: (
      <a href="https://play.google.com/store/apps/details?id=com.ttz.kmystro.catchone">
        <BsBoxArrowUpRight size={35} color="red" />
      </a>
    ),
  },
  {
    title: "TopThat",
    description: "TopThat allowed me to put the Goli Token to use and to try expo pwa",
    info: `TopThat is a story-sharing platform. For each story users will be given points, these points will be used to determine how much Goli tokens users get. Goli tokens will be sent to users each month. The TopThat algorithm will distribute Goli tokens to the users crypto wallet(which is created during the signup process)`,
    image:
      "https://play-lh.googleusercontent.com/aZBrnFHIMEnqnAKoGuQfQN3iJrRNUGwqM5nGQGPkV0vaKmu303ZNcZu1atlnvDv2yGk=w240-h480-rw",
    iconName: (
      <BsCircleFill
        size={110}
        style={{
          borderRadius: "50%",
          boxShadow: ` 0 0 .2rem #fff,
0 0 .2rem #fff,
0 0 2rem yellow,
0 0 0.8rem yellow,
0 0 2.8rem yellow,
inset 0 0 1.3rem yellow`,
        }}
      />
    ),
    color: "yellow",
    link: (
      <a href="https://topthatstory.com/">
        <BsBoxArrowUpRight size={35} color="red" />
      </a>
    ),
  },
];
