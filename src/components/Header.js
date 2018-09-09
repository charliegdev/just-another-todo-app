import React from "react";

// Normally a presentational component would come with a unit test, a snapshot test and an index.js file.
// However since this one is completely static, no need for that.
const Header = () => 
  <div>
    <br />
    <h1 className="ui header text center aligned">
      <i className="icon tasks" />
      <div className="content">
        Just Another Todo App
        <div className="sub header">Made in React, Redux & Semantic UI React</div>
      </div>
    </h1>
    <br />
  </div>

export default Header;