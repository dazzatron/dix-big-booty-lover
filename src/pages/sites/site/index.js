import React from 'react';
import './styles.css';
import SiteImages from '../site-images/';
import Techs from '../techs/';

const Site = ({ site }) => {

    return (

        <section className='site' style={{ borderColor: site.background }}>

            <article>

                <h1>{site.name}</h1>
                <h2>{site.subTitle}</h2>

                {site.techs &&
                    <Techs techs={site.techs} background={site.background} />
                }

                <p>{site.text}</p>

                {site.url &&
                    <a target='_blank' href={site.url}>{site.url}</a>
                }

            </article>

            <article style={{ backgroundColor: site.background }}>

                {site.images && site.images.length ?
                    <SiteImages images={site.images} alt={site.name} />
                    : undefined}

            </article>

        </ section>

    );

}

export default Site;