import React from 'react'
import "./style.scss";

const NavigationBar = () => {
    return (
        <header>
            <div className='logo'>
                <img src='https://cdn.iconscout.com/icon/free/png-512/myntra-2709168-2249158.png' alt='' />
            </div>
            <nav className='navbar'>
                <div className='nav-links'>
                    <div className='nav-content'>
                        <div className='nav-link'>
                            <a href='#' className='main'>Men</a>
                            <div className='nav-backdrop'></div>
                        </div>
                    </div>
                    <div className='nav-content'>
                        <div className='nav-link'>
                            <a href='#' className='main'>Women</a>
                            <div className='nav-backdrop'></div>
                        </div>
                    </div>
                    <div className='nav-content'>
                        <div className='nav-link'>
                            <a href='#' className='main'>Kids</a>
                            <div className='nav-backdrop'></div>
                        </div>
                    </div>
                    <div className='nav-content'>
                        <div className='nav-link'>
                            <a href='#' className='main'>Home & Living</a>
                            <div className='nav-backdrop'></div>
                        </div>
                    </div>
                    <div className='nav-content'>
                        <div className='nav-link'>
                            <a href='#' className='main'>Beauty</a>
                            <div className='nav-backdrop'></div>
                        </div>
                    </div>
                    <div className='nav-content'>
                        <div className='nav-link'>
                            <a href='#' className='main'>Studio</a>
                            <div className='nav-backdrop'></div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='query'>
                <input type='text' className='search-bar' placeholder='Search for products,brands and more' />
                <a href='#' className='submit'>
                    <span className='icon'></span>
                </a>
            </div>
            <div className='actions'>
                <div className='user'>
                    <div className='icon-container'>
                        <span className='icon profile_icon'></span>
                        <span>Profile</span>
                    </div>
                    <div className='user-actions'>
                    </div>
                </div>
                <a href='#' className='wishlist'>
                    <span className='icon wishlist_icon'></span>
                    <span>Wishlist</span>
                </a>
                <a href='#' className='bag'>
                    <span className='icon bag_icon'></span>
                    <span>Bag</span>
                </a>
            </div>
        </header>
    )
}

export default NavigationBar