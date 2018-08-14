import React, { Component } from 'react';
import './styles.css';

class Techs extends Component {

    render() {

        return (

            <ul className='site-techs'>

                {this.props.techs.map((tech, i) =>
                    <li key={i}>
                        {tech.label}
                        <span style={{ width: tech.percentage + '%', background: this.props.background }} className='site-tech-bar' />
                    </li>
                )}

            </ul>

        )

    }

}

export default Techs;