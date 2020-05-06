import React from "react";
import {useHistory} from 'react-router-dom';
import {useQuery} from "../services/RouterService";

export default () => {
    let history = useHistory();
    const query = useQuery();
    const name = query.get('name');
    const bladeOfChaos = 'https://static1.srcdn.com/wordpress/wp-content/uploads/2018/04/God-of-War-4-Blades-of-Chaos.jpg';
    return (
        <>
            <h2>Test Page</h2>
            <h4>Query: {name}</h4>
            { name ? <img src={bladeOfChaos} width='150px' height='auto' alt={''}/> : null}
            <br/>
            <button onClick={() => history.push('/')}> go home</button>
            <button onClick={() => history.push('/test?name=lenin')}>name:lenin</button>
            <button onClick={() => history.push('/test?name=sheikh')}>name:sheikh</button>
            <button onClick={() => history.push('/test')}>name:null</button>
        </>
    )
}
