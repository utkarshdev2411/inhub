import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Introduction from "./Components/Introduction/introduction";
import SearchBox from './Components/Searchbox/searchbox'; 
import SearchBoxExtra from "./Components/Searchextra/searchboxextra";
import Body from './Components/Body/body';
function App() {
  return (
    <div className="App">
 
   <Navbar/>
   <Introduction/>
   <SearchBox/>
   <SearchBoxExtra/>
   <Body/>
   
    </div>
  );
}

export default App;
