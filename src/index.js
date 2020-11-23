import React from'react';
import ReactDOM from 'react-dom';

import './style.css';




const App = () => {


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











