import React, { Component } from 'react'

export default class Header2 extends Component {
  render() {
    return (
      <div>
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

