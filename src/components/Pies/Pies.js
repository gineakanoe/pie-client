//* Set up a boilerplate for a component called Pies. Include a css file of the same name.
//* Silver: Add a table within the return. The head will include: Name of Pie, Base of Pie, Crust, Bake Time, Servings, Rating. The body of the table will be empty.
//* Gold: import useState from react. Create a state variable of pies that has a default value of an empty array.

import React, {useState, useEffect} from 'react';
import './pies.css';
import DisplayPies from './Pie/Pie';
import CreatePie from './CreatePie/CreatePie';

const Pies = (props) => {
    console.log(props);
    const [pies, setPies] = useState([]);
    const [createPie, setCreatePie] = useState(false);


    const fetchPies = () => {
        let url = 'http://localhost:4000/pies';

        fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(response => response.json())
        .then(json => setPies(json))
        .catch(err => console.log(err))
    }
    console.log(pies);
    useEffect(() => {
        fetchPies();
    }, [createPie])

    const buttonHandler = () => {
        setCreatePie(true)
    }

    return (
        <>
        {createPie ? <CreatePie setCreatePie={setCreatePie} sessionToken={props.sessionToken} />
        : null}
        {!createPie ? <button onClick={buttonHandler}>Create Pie!</button>: null}
        
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
                <DisplayPies pies={pies} />
            </tbody>

        </table>
        </>
    )

};

export default Pies;