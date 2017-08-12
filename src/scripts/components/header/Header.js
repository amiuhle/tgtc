import React from 'react'

import Hero from './Hero'
import Nav from './Nav'

const background = children => `url(${children[0].props.src})`

const MapleLeaf = props => (
  <span className='c-maple-leaf'>
    <span className='c-maple-leaf__border'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        version='1.1' viewBox='0 0 390.625 421.875'>
        <path d='m 195.30478,0 -34.11312,63.62529 c -3.87086,6.91501 -10.80627,6.27363 -17.74169,2.41138 l -24.69699,-12.78858 18.40705,97.72711 c 3.87086,17.85419 -8.54859,17.85419 -14.67765,10.13435 l -43.10105,-48.25099 -6.99738,24.503 c -0.80692,3.21777 -4.35481,6.59744 -9.67748,5.79261 L 8.2047,131.69505 22.51994,183.7398 c 3.06451,11.58054 5.4549,16.37528 -3.09375,19.42959 L 0,212.29964 93.82127,288.50802 c 3.7135,2.88151 5.58971,8.067 4.26768,12.7621 l -8.21136,26.94707 c 32.30405,-3.72371 61.24898,-9.32594 93.56939,-12.77619 2.85323,-0.30459 7.62988,4.40408 7.61029,7.71058 l -4.28024,98.72342 h 15.70639 l -2.47237,-98.5117 c -0.0197,-3.3065 4.31372,-8.22689 7.16695,-7.9223 32.32041,3.45026 61.26538,9.05248 93.56942,12.77619 l -8.21134,-26.94707 c -1.32203,-4.6951 0.55417,-9.88059 4.26767,-12.7621 l 93.82125,-76.20838 -19.42617,-9.13025 c -8.54867,-3.05431 -6.15828,-7.84905 -3.09377,-19.42959 l 14.31527,-52.04475 -54.5018,11.45912 c -5.32267,0.80483 -8.87056,-2.57484 -9.6775,-5.79261 l -6.99737,-24.503 -43.10103,48.25099 c -6.12908,7.71984 -18.54854,7.71984 -14.67768,-10.13435 l 18.40702,-97.72711 -24.69694,12.78858 c -6.93559,3.86225 -13.87083,4.50363 -17.7417,-2.41138' />
      </svg>
    </span>
  </span>
)

const Title = () => (
  <svg className='c-title' viewBox='0 0 200 200'>
    <defs>
      <path id='semi-circle' d='M 25 100 A 75 75 0 0 1 175 100' />
    </defs>
    <use xlinkHref='#semi-circle' stroke='none' fill='none' />
    <text>
      <textPath startOffset='14.8%' xlinkHref='#semi-circle'>
        Timo <tspan className='u-brand-color'>Goes</tspan> To Canada
      </textPath>
    </text>
  </svg>
)

export default ({className, children}) => (
  <header className={`${className || ''} c-header`}
    style={{ backgroundImage: background(children) }}>
    <Hero>
      {children}
    </Hero>
    <div className='c-header__spacer c-header__spacer--left' />
    <div className='c-header__brand'>
      <Title />
      <MapleLeaf />
    </div>
    <Nav />
    <div className='c-header__spacer c-header__spacer--right' />
  </header>
)