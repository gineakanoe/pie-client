//* Set up a boilerplate for a component called Pies. Include a css file of the same name.
//* Silver: Add a table within the return. The head will include: Name of Pie, Base of Pie, Crust, Bake Time, Servings, Rating. The body of the table will be empty.
//* Gold: import useState from react. Create a state variable of pies that has a default value of an empty array.

import React, {useState} from 'react';
import './pies.css';

const Pies = (props) => {

const [pies, setPies] = useState([]);

    // const [nameOfPie, setNameOfPie] = useState('');
    // const [baseOfPie, setBaseOfPie] = useState('');
    // const [crust, setCrust] = useState('');
    // const [bakeTime, setBakeTime] = useState('');
    // const [servings, setServings] = useState('');
    // const [rating, setrating] = useState('');

    return (
        <table>
            <thead>
                <tr>
                    <th>Name of Pie</th>
                    <th>Base of Pie</th>
                    <th>Crust</th>
                    <th>Bake Time</th>
                    <th>Servings</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>

        </table>
    )

};

export default Pies;