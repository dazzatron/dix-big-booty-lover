import React, { Component } from 'react';
import './styles.css';

class SiteImages extends Component {

    constructor () {

        super();

        this.state = {
            active: 0,
            showArrows: false
        }

    }

    handleNext () {
        let active = this.state.active;
        this.setState({ active: active +=1 });
        this.cancelTimer();
        this.startTimer();
    }

    handlePrevious () {
        let active = this.state.active;
        this.setState({ active: active -=1 });
        this.cancelTimer();
        this.startTimer();
    }

    componentDidMount () {

        if (this.props.images.length > 1) {
            this.startTimer(); 
            this.setState({ showArrows: true })
        }
        
    }

    componentWillUnmount () {
        this.cancelTimer();
    }

    startTimer () {
    
        this.timer = setInterval(() => {
            this.handleNext();
        }, 5000)

    }

    cancelTimer () {
        clearInterval(this.timer);
    }

    render() {

        const { images, alt } = this.props;
        const { active, showArrows } = this.state;

        return (

            <div className='site-images-wrapper'>

                <figure className='site-images'>

                    { showArrows &&

                        <button onClick={() => this.handleNext()} className='site-images-next'>
                            <span className='fas fa-angle-left' />
                        </button>

                    }

                    { images.map((image, i) => 
                        <img className={ i === Math.abs(active % images.length) ? 'active' : '' } key={i} src={image} alt={alt + ' ' + (i+1)} />
                    )}

                    { showArrows &&
                        
                        <button onClick={() => this.handlePrevious()} className='site-images-previous'>
                            <span className='fas fa-angle-right' />
                        </button>

                    }

                </figure>

            </div>

        )

    }

}

export default SiteImages;