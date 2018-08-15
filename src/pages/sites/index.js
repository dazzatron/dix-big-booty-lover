import React, { Component, Fragment } from 'react';
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
            siteFilters: [],
            sites: SITES
        };

    }

    handleToggleSiteFilterMenu() {
        this.setState((prevState) => ({ showSiteFilter: !prevState.showSiteFilter }));
    }

    handleToggleSiteFilter(e) {

        const value = e.target.value;

        this.setState((prevState) => ({
            siteFilters: prevState.siteFilters.includes(value) ?
                prevState.siteFilters.filter(siteFilter => siteFilter !== value) :
                [...prevState.siteFilters, value]
        }));

    }

    handleSort() {

        this.setState((prevState) => ({
            reversed: !prevState.reversed
        }));

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevState.reversed !== this.state.reversed) {

            this.setState({
                sites: this.state.reversed ? [...this.state.sites].reverse() : [...this.state.sites]
            })

        }

        if (prevState.siteFilters !== this.state.siteFilters) {

            this.setState({

                sites: this.state.siteFilters.length ? 
                    SITES.filter(site => site.techs.find(tech => this.state.siteFilters.includes(tech.label))) : 
                    SITES

            })

        }

    }

    render() {

        const { reversed, showSiteFilter, siteFilters, sites } = this.state;

        return (

            <Fragment>

                <div className='sites-options'>

                    <button onClick={() => this.handleSort()} title='sort sites'>
                        <span className={reversed ? 'fas fa-sort-amount-down' : 'fas fa-sort-amount-up'} />
                    </button>

                    <button className={showSiteFilter ? 'active' : ''} onClick={() => this.handleToggleSiteFilterMenu()} title='filter sites'>
                        <span className={showSiteFilter ? 'fas fa-times' : 'fas fa-filter'} />
                        {!showSiteFilter && siteFilters.length ? <span>{siteFilters.length}</span> : undefined}
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

                {sites.map((site, i) =>

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