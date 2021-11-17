import React from "react";
import "./Main.css";

const Main = ({ children }) => {
  return (
    <main>
      <div>
			<h1 className="H1">Haikus</h1>
	     {children}
       </div>
    </main>
  );
};

export default Main;
