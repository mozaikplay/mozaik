import React, { Component } from 'react';
import Slick from 'react-slick';
import _ from 'lodash';
import ReactModal from 'react-modal';

const customStyles = {
  overlay : {
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
};

export default class HeroApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      slides: [
        {
          heading: 'Mozaik Creative',
          text: "Deciding what to study is tricky. We'll help you find the right course in the creative industry.",
          background: 'https://res.cloudinary.com/mozaik/image/upload/v1507350623/slider1-compressor_qgn31w.png'
        },
        {
          heading: 'Mozaik Creative',
          text: "Deciding what to study is tricky. We'll help you find the right course in the creative industry.",
          background: 'https://res.cloudinary.com/mozaik/image/upload/v1507350623/slider1-compressor_qgn31w.png'
        },
        {
          background: 'https://res.cloudinary.com/mozaik/image/upload/v1507350977/slider2-compressor_zd4ufr.png'
        }
      ],
      settings: {
        className: 'home-slider',
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: false,
        afterChange: (i) => this.setState({ currentSlide: i })
      },
      isOpen: false
    };
  }

  changeSlide(i) {
    this.refs.slider.slickGoTo(i);
  }

  closeModal() {
    this.setState({isOpen: false});
  }

  openModal() {
    this.setState({isOpen: true});
  }

  updateCurrentSlide(i) {
    this.setState({ currentSlide: i });
  }

  render() {
    const { currentSlide, slides, settings, isOpen } = this.state;
    return (
      <div className='home-hero'>
        <Slick ref='slider' { ...settings }>
          { _.map(slides, (slide, i) => {
            return (
              <div key={ i } className='slide' style={{ backgroundImage: `url(${slide.background})` }}>
                <div className='slider-body'>
                  <ReactModal
                    isOpen={isOpen}
                    contentLabel="Modal"
                    onRequestClose={() => this.closeModal()}
                    style={customStyles}
                  >
                    <h1>Modal Content</h1>
                    <p>Etc.</p>
                  </ReactModal>
                  <h1>{ slide.heading }</h1>
                  <p>{ slide.text }</p>
                  <button onClick={() => this.openModal()}>Video</button>
                </div>
              </div>
            );
          }) }
        </Slick>
        <div className='slider-dots'>
          <ul className='slick-dots'>
            { _.map(slides, (slide, i) => {
              return (
                <li key={ i } className={ currentSlide == i ? 'slick-active' : '' }>
                  <div className='dot' onClick={ () => this.changeSlide(i) } />
                </li>
              );
            }) }
          </ul>
        </div>
        <div className='scroll-search'>
          <a className='scroll-search-link' href='#search'>
            <img src='/images/white-arrow-down.png' alt='arrow-down' />
          </a>
        </div>
      </div>
    );
  }
}
