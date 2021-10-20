import React, {useState} from 'react';
import './createPie.css';

const CreatePie = (props) => {
    console.log(props);
    const [nameOfPie, setNameOfPie] = useState('');
    const [baseOfPie, setBaseOfPie] = useState('');
    const [crust, setCrust] = useState('');
    const [timeToBake, setTimeToBake] = useState(0);
    const [servings, setServings] = useState(0);
    const [rating, setRating] = useState(0);

    const postPie = (e) => {
        e.preventDefault();

        let url = 'http://localhost:4000/pies/create';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                nameOfPie: nameOfPie,
                baseOfPie: baseOfPie,
                crust: crust,
                timeToBake: timeToBake,
                servings: servings,
                rating: rating
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            props.setCreatePie(false);
        })
        .catch(err => console.log(err))
    };

    return (
        <form onSubmit={postPie}>
            <input type='text' onChange={(e) => setNameOfPie(e.target.value)} value={nameOfPie} placeholder='Name of Pie' />
            <input type='text' onChange={(e) => setBaseOfPie(e.target.value)} value={baseOfPie} placeholder='Base of Pie' />
            <input type='text' onChange={(e) => setCrust(e.target.value)} value={crust} placeholder='Crust' />
            <input type='number' onChange={(e) => setTimeToBake(e.target.value)} value={timeToBake} placeholder='' />
            <input type='number' onChange={(e) => setServings(e.target.value)} value={servings} placeholder='' />
            <input type='number' onChange={(e) => setRating(e.target.value)} value={rating} placeholder='' />
            <br/>
            <button type='submit'>Submit</button>
        </form>
    )

};

export default CreatePie;