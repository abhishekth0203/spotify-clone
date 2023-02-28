import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <section className='header-block'>
            {/* <header>play</header> */}
            <article>
              
              <svg viewBox="0 0 290 590.58" aria-hidden="true" focusable="false" className='phone' ><path d="M36.28,0H253.72A36.28,36.28,0,0,1,290,36.27v518a36.28,36.28,0,0,1-36.28,36.27H36.28A36.28,36.28,0,0,1,0,554.31v-518A36.28,36.28,0,0,1,36.28,0Z" fill="#fff"></path><path d="M125,25h40a3,3,0,0,1,0,6H125a3,3,0,0,1,0-6Z" fill="#231f20"></path></svg>
             
              <div className="pimg">
              <img src="https://i.scdn.co/image/ab678e040000ed3aed58911aecc6dbc16949f40b" />
              </div>

              <div className='content1'>
                <h1>Play millions of songs <br/> and podcasts, for free.</h1>
                <div className='button'>
                  <span>GET SPOTIFY FREEE</span>
                </div>
              </div>
            
            </article>
        </section>


        <section className='header-block2'>
          <article>
             <header>
                <h1 className='why'>Why Spotify?</h1>
             </header>
            <ul className='play-sec'>

              <li className='fav1'>
                <div className='favorites'></div>
                <div> 
                  <p className='fav-content'>Play your favorites.</p>
                  <p>Listen to the songs you love, and discover new music and podcasts.</p>
                </div>
              </li>

              <li className='play1'>
                <div className='playlist'></div>
                <div >
                  <p className='fav-content'>Playlists made easy.</p>
                  <p>We'll help you make playlists. Or enjoy playlists made by music experts.</p>
                </div>
              </li>

              <li className='make1'>
              <div className='make'></div>
              <div >
                <p className='fav-content'>Make it yours.</p>
                <p>Tell us what you like, and we'll recommend music for you.</p>
              </div>
              </li>

              <li className='save1'>
              <div className='save'></div>
              <div >
                <p className='fav-content'>Save mobile data.</p>
                <p>To use less data when you play music, turn on Data Saver in Settings.</p>
              </div>
              </li>

            </ul>

          </article>
        </section>
      </div>
    )
  }
}
