import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/BlogGraphic-Blockchains-01-1.png'
const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                <article className="portfolio_items">
                    <div className="portfolio_item-image"><img src={IMG1} alt = "portfolio1" /></div>
                    <h3>Title1</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="https://github.com" className='btn btn-primary' rel="noopener noreferrer" target='_blank'>Live Demo</a>
                    </div>

                </article>
                <article className="portfolio_items">
                    <div className="portfolio_item-image"><img src={IMG1} alt = "portfolio2" /></div>
                    <h3>Title1</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="https://github.com" className='btn btn-primary' rel="noopener noreferrer" target='_blank'>Live Demo</a>
                    </div>

                </article>
                <article className="portfolio_items">
                    <div className="portfolio_item-image"><img src={IMG1} alt = "portfolio2"/></div>
                    <h3>Title1</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="https://github.com" className='btn btn-primary' rel="noopener noreferrer" target='_blank'>Live Demo</a>
                    </div>

                </article>
                <article className="portfolio_items">
                    <div className="portfolio_item-image"><img src={IMG1} alt = "portfolio2" /></div>
                    <h3>Title1</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="https://github.com" className='btn btn-primary' rel="noopener noreferrer" target='_blank'>Live Demo</a>
                    </div>

                </article>


            </div>
        </section>
    )
}

export default Portfolio