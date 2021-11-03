import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
// const user = {
//   name: "Liza",
//   city: "New York",
//   bio: "I made this!",
//   color: "firebrick",
//   links: {
//     github: "https://github.com/liza",
//     linkedin: "https://www.linkedin.com/in/liza/",
//   },
// };

// console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home color={user.color} username={user.name} city={user.city}/>
      <About bio={user.bio} links={user.links}/>
      {/* <Links Github={user.links.github} Linkedin={user.links.linkedin}/> */}
    </div>
  );
}

export default App;
