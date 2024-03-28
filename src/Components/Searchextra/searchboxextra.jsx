import React from "react";
import './searchboxextra.css';
 import { Search } from '@styled-icons/material'
import { Tick } from "styled-icons/typicons";


const Searchboxextra = () => {
    return (
        <div className="s-extra">
              <div className="e-extra"><Tick size="28"/> Free to Try</div>
              <div className="e-extra"><Tick size="28"/> Power insights</div>

              <div className="e-extra"><Tick size="28"/> Unlimited data access</div>

        </div>
    )

};
export default Searchboxextra;