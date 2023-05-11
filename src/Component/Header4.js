import React, { Component } from 'react'

export default class Header4 extends Component {
  render() {
    return (
      <div>
      <section className='header4_block'>
        <article>
            <header>
                <h1>Got questions?</h1>
            </header>
            <ul className='create_playlist'>

                <li className='create_playlist1'>
                    <details open="">
                        <summary >
                             <div className='queston1'>How do I create a playlist?</div>
                                {/* <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" className='playlist_svg'>
                                   <polyline points="20 16 12 7 4 16" fill="none" stroke="#181818"></polyline></svg> */}
                        </summary>
                        <p className='playlist_p'> Playlists are a great way to save collections of music, either for your own listening or to share.
                            {/* <br/><br/>
                            To create one:
                            <br/><br/>
                            1.  Tap Your Library.
                            <br/>
                            2. Tap <strong>CREATE</strong>.
                            <br/>
                            3. Give your playlist a name.
                            <br/>
                            4. Start adding songs (and we'll help you along). */}
                            <ol> To create one:
                                <li>Tap Your Library.</li>
                                <li>Tap <span>CREATE</span>.</li>
                                <li>Give your playlist a name.</li>
                                <li>Start adding songs (and we'll help you along).</li>
                            </ol>
                        </p>
                    </details>
                </li>

                <li>
                 <details>
                    <summary>
                        <div className='question2'>How do I activate Data Saver mode?</div>
                    </summary>
                    <p>
                        <ol>
                            <li>Tap <span>Home</span>.</li>
                            <li>Tap <span>Settings</span>.</li>
                            <li>Tap <span>Data Saver</span>.</li>
                            <li>Switch on Data Saver.</li>
                        </ol>
                    </p>
                </details>
                </li>

                <li>
                    <details>
                        <summary>
                            <div className='question3'>Is it only possible to shuffle play music?</div>
                        </summary>
                        <p>
                           Any playlist with the shuffle icon will play on shuffle.
                           <br/>
                           Some playlists won't have the shuffle icon, so you can tap any song to play it.
                        </p>
                    </details>
                </li>

                <li>
                    <details>
                        <summary>
                            <div className='question4'>Where can I find Podcasts?</div>
                        </summary>
                        <p>Tap <span>Search.</span> Under<span> Browse All,</span> tap Podcasts.</p>
                    </details>
                </li>
            </ul>
        </article>
      </section>
       </div>
    )
  }
}
