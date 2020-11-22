import React, {
    useState
} from'react';
import ReactDOM from 'react-dom';

import './style.css';




const App = () => {
    const [info, displayName] = useState();


    return(
        <div id="App">
            <h2>Contact List</h2>
            <h3>Add New Contact</h3>
            <form class="contact-input"> 
                <label>Contact Name </label>
                <input type="text" name="name" />
                <br />
                <label>Address </label>
                <input type="text" name="address" />
                <br />
                <label> Email </label>
                <input type="text" name="email" />
                <br />
                <label> Phone Number </label>
                <input type="text" name="phone number" />
                <br />
                <label>Contact Type</label>
                <select>
                    <option value="work">work</option>
                    <option value="personal">personal</option>
                    <option value="other">other</option>
                </select>
                <br />
                <button>Submit</button>
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