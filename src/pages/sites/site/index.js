import React from 'react';
import PropTypes from 'prop-types';
import Images from '../images/';
import Techs from '../techs/';
import './styles.css';

const propTypes = {
    name: PropTypes.string,
    subTitle: PropTypes.string,
    techs: PropTypes.array,
    background: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string,
    images: PropTypes.array
}

const Site = ({ name, subTitle, techs, background, text, url, images }) => {

    return (

        <section className='site' style={{ borderColor: background }}>

            <article>
                { name && <h1>{name}</h1> }
                { subTitle && <h2>{subTitle}</h2> }
                { techs && !!techs.length && <Techs techs={techs} background={background} /> }
                { text && <p>{text}</p> }
                { url && <a target='_blank' href={url}>{url}</a> }
            </article>

            <article style={{ backgroundColor: background }}>
                { images && !!images.length && <Images images={images} alt={name} /> }
            </article>

        </ section>

    );

}

Site.propTypes = propTypes;

export default Site;