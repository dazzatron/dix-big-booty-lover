import React, { Component } from 'react';
import './styles.css';
import SiteImages from '../site-images/';
import Techs from '../techs/';

class Site extends Component {

    render() {

        const { site } = this.props;

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

                    {site.images &&
                        <SiteImages images={site.images} alt={site.name} />
                    }

                </article>

            </ section>

        );

    }

}

export default Site;