import React from 'react'
import SelectforCalDest from '../Calculate/SelectforcalDest';
import '../../App.css'
function refreshPage(){
	window.scrollTo(0,0);
  }

function SelectStationDest() {
    return (
        <div>
            <SelectforCalDest/>
        </div>
    )
}

export default SelectStationDest
