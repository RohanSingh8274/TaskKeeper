// import React from 'react';

// function Header(){
//     return <header>
//         <h1>Keeper</h1>
//     </header>
// }

// export default Header; 


import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon />
        TaskKeeper
      </h1>
    </header>
  );
}

export default Header;