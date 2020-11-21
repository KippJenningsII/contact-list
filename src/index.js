import React from'react';
import ReactDOM from 'react-dom';



const App = () => {
    return(
        <div id="App">
            <form> 
                <ul>
                <li><label>
                    Contact Name:
                    <input type="text" name="name" />
                </label></li>
                <li><label>
                    Address:
                    <input type="text" name="name" />
                </label></li>
                <label>
                <input type="submit" value="Submit" />
                </label>
                </ul>
            </form>
        </div>
    )
}



ReactDOM.render(
    <App />,
    document.getElementById('app')
);











async function fetchAPI(url, method="GET", sendData=null) {
    const fetchOptions = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Implbm5pbmdza2lwcCIsImlhdCI6MTYwNTc0NjE3NywiZXhwIjoxNjA2MzUwOTc3fQ.Spr-OmuBZt-N0gqgo0nGMm9T21P65E2N-h3oQ7Gc_kk'
      }
    };
  
    if (sendData) {
      fetchOptions.body = JSON.stringify(sendData);
    }
  
    const response = await fetch(url, fetchOptions);
    const data = await response.json();
  
    return data;
  }