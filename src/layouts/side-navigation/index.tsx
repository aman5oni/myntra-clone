import React from 'react'
import { Outlet } from "react-router-dom"
import "./style.scss";

const SideNavigation = () => {
    return (
        <div className='side-navigation'>
            <aside>
                <div className='card'>
                    <ul>
                        <li>
                            <label style={{
                                fontWeight: 'bold'
                            }}>
                                <input type='radio' />
                                Boys
                            </label>
                        </li>
                        <li>
                            <label style={{
                                fontWeight: 'bold'
                            }}>
                                <input type='radio' />
                                Girls
                            </label>
                        </li>
                    </ul>
                </div>
                <div className='card'>
                    <div className='header'>
                        <h3>Categories</h3>
                        <span>
                            <span className='icon'></span>
                        </span>
                    </div>
                    <ul>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Casual Shoes
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Flip Flops
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Sandals
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Sport Shoes
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Sport Sandals
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Booties
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Boots
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Formal Shoes
                            </label>
                        </li>
                    </ul>
                    <p>+ 1 More</p>
                </div>
                <div className='card'>
                    <div className='header'>
                        <h3>Brand</h3>
                        <span>
                            <span className='icon'></span>
                        </span>
                    </div>
                    <ul>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Hopscotch
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Campus
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Liberty
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Puma
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Toothless
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' />
                                YK
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Lil Lolipop
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Max
                            </label>
                        </li>
                    </ul>
                    <p>+ 91 More</p>
                </div>
                <div className='card'>
                    <div className='header'>
                        <h3>Price</h3>
                        <span>
                            <span className='icon'></span>
                        </span>
                    </div>
                    <ul>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Rs. 179 to Rs. 2383
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Rs. 2383 to Rs. 4587
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Rs. 4587 to Rs. 6791
                            </label>
                        </li>
                    </ul>
                </div>
                <div className='card'>
                    <div className='header'>
                        <h3>Color</h3>
                        <span>
                            <span className='icon'></span>
                        </span>
                    </div>
                    <ul>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Blue
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Black
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Navy Blue
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Grey
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' />
                                White
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Red
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' />
                                Pink
                            </label>
                        </li>
                    </ul>
                    <p>+ 30 More</p>
                </div>
                <div className='card '>
                    <div className='header'>
                        <h3>Discount Range</h3>
                    </div>
                    <ul>
                        <li>
                            <label>
                                <input type='radio' />
                                10% and above
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='radio' />
                                20% and above
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='radio' />
                                30% and above
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='radio' />
                                40% and above
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='radio' />
                                50% and above
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='radio' />
                                60% and above
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='radio' />
                                70% and above
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='radio' />
                                80% and above
                            </label>
                        </li>
                    </ul>
                </div>
            </aside>
            <div className='outlet'>
                <Outlet />
            </div>
        </div>
    )
}

export default SideNavigation