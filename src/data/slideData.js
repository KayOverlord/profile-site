import { BsLinkedin, BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
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
      <BsGithub
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
    title: "I-Nav",
    description:
      "This was a project I was working during my time at Ultrafrica",
    info: `I've worked for 2 Companies so far and these are the technologies I used during my time with both of them.
      React Native, React.js,Next.js, Node.js, Firebase, GraphQL,PostgreSQL,Docker.\n Okay let's see the Blow`,
    image: "icon",
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
      <a href="https://www.linkedin.com/in/kabelo-leboa-6bb27365/">
        <BsBoxArrowUpRight size={35} color="red" />
      </a>
    ),
  },
  {
    title: "Personal Projects",
    description: "These are the my personal projects",
    info: `A web developer is a programmer who specializes in, or is
      specifically engaged in, the development of World Wide Web`,
    image: "icon",
    iconName: (
      <BsGithub
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
];
