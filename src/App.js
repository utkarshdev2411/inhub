import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Introduction from "./Components/Introduction/introduction";
import SearchBox from './Components/Searchbox/searchbox'; 
import SearchBoxExtra from "./Components/Searchextra/searchboxextra";
import Body from './Components/Body/body';
import Footer from "./Components/Footer/footer";
function App() {
  return (
    <div className="App">
 
   <Navbar/>
   <Introduction/>
   <SearchBox/>
   <SearchBoxExtra/>
   <Body/>
   <Footer/>
   
    </div>
  );
}

export default App;
