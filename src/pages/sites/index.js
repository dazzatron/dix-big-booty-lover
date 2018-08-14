import React, { Component } from 'react';
import Site from './site/';
import SITES from '../../data/sites.js';
import './styles.css';

class Sites extends Component {

    constructor() {

        super();

        this.techs = [...new Set([].concat(
            ...SITES.map(site => site.techs.map(tech => tech.label))
        ))].sort();

        this.state = {
            siteFilters: []
        };

    }

    handleToggleSiteFilterMenu() {
        this.setState((prevState) => ({ showSiteFilter: !prevState.showSiteFilter }));
    }

    // todo: https://medium.com/@baphemot/understanding-reactjs-setstate-a4640451865b
    handleToggleSiteFilter(e) {
        const { siteFilters } = this.state;
        const value = e.target.value;
        siteFilters.includes(value) ? siteFilters.splice(siteFilters.indexOf(value), 1) : siteFilters.push(value);
        this.setState({ siteFilters });
    }

    handleSort() {
        this.setState((prevState) => ({ reversed: !prevState.reversed }));
    }

    render() {

        const { reversed, showSiteFilter, siteFilters } = this.state;

        let sites = reversed ? [...SITES].reverse() : [...SITES];
        sites = siteFilters.length ? sites.filter(site => site.techs.find(tech => siteFilters.includes(tech.label))) : sites;

        return (

            <div>

                <div className='sites-options'>

                    <button onClick={() => this.handleSort()} title='sort sites'>
                        <span className={reversed ? 'fas fa-sort-amount-down' : 'fas fa-sort-amount-up'} />
                    </button>

                    <button className={showSiteFilter ? 'active' : ''} onClick={() => this.handleToggleSiteFilterMenu()} title='filter sites'>

                        <span className={showSiteFilter ? 'fas fa-times' : 'fas fa-filter'} />

                        {!showSiteFilter && siteFilters.length ?
                            <span>{siteFilters.length}</span>
                            : undefined}

                    </button>

                    {showSiteFilter &&

                        <div className='sites-filter'>

                            {this.techs.map((tech, i) =>

                                <label key={i}>
                                    <input onChange={(e) => this.handleToggleSiteFilter(e)} checked={siteFilters.includes(tech)} type='checkbox' value={tech} />
                                    {tech}
                                </label>

                            )}

                        </div>

                    }

                </div>

                {sites.map((site, i) =>
                    <Site site={site} key={site.id} />
                )}

            </ div>

        );

    }

}

export default Sites;