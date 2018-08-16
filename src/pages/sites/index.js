import React, { Component, Fragment } from 'react';
import Site from './site/';
import SITES from '../../data/sites.js';
import './styles.css';

class Sites extends Component {

    constructor() {

        super();

        // get unique techs
        this.techs = [...new Set([].concat(
            ...SITES.map(site => site.techs.map(tech => tech.label))
        ))].sort();

        this.state = {
            siteFilters: []
        };

    }

    handleToggleSiteFilterMenu = () => {
        this.setState((prevState) => ({ showSiteFilter: !prevState.showSiteFilter }));
    }

    handleSort = () => {
        this.setState((prevState) => ({ reversed: !prevState.reversed }));
    }

    handleToggleSiteFilter(e) {

        const value = e.target.value;

        this.setState((prevState) => ({
            siteFilters: prevState.siteFilters.includes(value) ?
                prevState.siteFilters.filter(siteFilter => siteFilter !== value) :
                [...prevState.siteFilters, value]
        }));

    }

    render() {

        const { reversed, showSiteFilter, siteFilters } = this.state;

        return (

            <Fragment>

                <div className='sites-options'>

                    <button onClick={this.handleSort} title='sort sites'>
                        <span className={reversed ? 'fas fa-sort-amount-down' : 'fas fa-sort-amount-up'} />
                    </button>

                    <button className={showSiteFilter ? 'active' : ''} onClick={this.handleToggleSiteFilterMenu} title='filter sites'>
                        <span className={showSiteFilter ? 'fas fa-times' : 'fas fa-filter'} />
                        {!showSiteFilter && !!siteFilters.length && <span>{siteFilters.length}</span>}
                    </button>

                    {showSiteFilter &&

                        <div className='sites-filter'>

                            {this.techs.map((tech, i) =>

                                <label key={i}>

                                    <input
                                        onChange={(e) => this.handleToggleSiteFilter(e)}
                                        checked={siteFilters.includes(tech)}
                                        type='checkbox'
                                        value={tech} />

                                    {tech}

                                </label>

                            )}

                        </div>

                    }

                </div>

                { SITES
                    .filter(site => siteFilters.length ? site.techs.find(tech => this.state.siteFilters.includes(tech.label)) : SITES)
                    .sort((a, b) => reversed ? b.id - a.id : a.id - b.id)
                    .map(site =>

                        <Site
                            name={site.name}
                            subTitle={site.subTitle}
                            techs={site.techs}
                            text={site.text}
                            background={site.background}
                            url={site.url}
                            images={site.images}
                            key={site.id} />

                    )}

            </ Fragment>

        );

    }

}

export default Sites;