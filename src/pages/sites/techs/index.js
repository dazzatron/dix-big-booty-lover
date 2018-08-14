import React from 'react';
import './styles.css';

// todo: proptypes

const Techs = (props) => {

    const { background, techs } = props;

    return (

        <ul className='site-techs'>

            {techs.map((tech, i) =>
                <li key={i}>
                    {tech.label}
                    <span style={{ width: tech.percentage + '%', background: background }} className='site-tech-bar' />
                </li>
            )}

        </ul>

    )

}

export default Techs;