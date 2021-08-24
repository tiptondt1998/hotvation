import React from 'react';
import './searchStyles.css'
const searchForm = () =>{
return(
    <div id='search-body'>
<h3>Enter first city</h3>
<form>
  <input id='city1' type="search" placeholder="Search"/>
<h3>Enter second city</h3>
<input id='city2' type="search" placeholder="Search"/>
</form>
</div>
    );
}
export default searchForm;