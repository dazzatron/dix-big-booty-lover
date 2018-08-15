import React from 'react';
import './styles.css';
import SiteImages from '../site-images/';
import Techs from '../techs/';

const Site = ({ name, subTitle, techs, background, text, url, images }) => {

    return (

        <section className='site' style={{ borderColor: background }}>

            <article>
                { name && <h1>{name}</h1> }
                { subTitle && <h2>{subTitle}</h2> }
                { techs && <Techs techs={techs} background={background} /> }
                { text && <p>{text}</p> }
                { url && <a target='_blank' href={url}>{url}</a> }
            </article>

            <article style={{ backgroundColor: background }}>

                {images && images.length ?
                    <SiteImages images={images} alt={name} />
                : undefined}

            </article>

        </ section>

    );

}

export default Site;