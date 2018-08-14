import React, { Component, Fragment } from 'react';
import './styles.css';

class SiteImages extends Component {

    constructor() {

        super();

        this.state = {
            active: 0,
            showArrows: false
        }

    }

    handleNext() {
        this.setState((prevState) => ({ active: prevState.active + 1 }));
        this.resetTimer();
    }

    handlePrevious() {
        this.setState((prevState) => ({ active: prevState.active - 1 }));
        this.resetTimer();
    }

    componentDidMount() {

        if (this.props.images.length > 1) {
            this.resetTimer();
            this.setState({ showArrows: true })
        }

    }

    componentWillUnmount() {
        this.cancelTimer();
    }

    resetTimer() {

        this.cancelTimer();

        this.timer = setInterval(() => {
            this.setState((prevState) => ({ active: prevState.active + 1 }));
        }, 5000)

    }

    cancelTimer() {
        clearInterval(this.timer);
    }

    render() {

        const { images, alt } = this.props;
        const { active, showArrows } = this.state;

        return (

            <div className='site-images-wrapper'>

                <figure className='site-images'>

                    {images.map((image, i) =>

                        <img
                            className={i === Math.abs(active % images.length) ? 'active' : ''}
                            key={i}
                            src={image}
                            alt={alt + ' ' + (i + 1)} />

                    )}

                    {showArrows &&

                        <Fragment>

                            <button onClick={() => this.handleNext()} className='site-images-next'>
                                <span className='fas fa-angle-left' />
                            </button>

                            <button onClick={() => this.handlePrevious()} className='site-images-previous'>
                                <span className='fas fa-angle-right' />
                            </button>

                        </Fragment>

                    }

                </figure>

            </div>

        )

    }

}

export default SiteImages;