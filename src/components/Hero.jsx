import './Hero.css'

function Hero() {
    return(
        <section id='hero' className='hero'>
            <div className='hero-container'>
                <div className='hero_content'>
                    <p className='hero_greeting'>Hello, i'm</p>
                    <h1 className='hero-title'></h1>
                    <p className='hero_bio'> </p>
                    <div className='hero_button'>
                        <a href='#contact'> Contact us</a>
                        <a href='#cv' className='btn btn--outline'>Download CV </a>
                    </div>

                </div>
                <div></div>

            </div>
        </section>
    )
}

export default Hero;