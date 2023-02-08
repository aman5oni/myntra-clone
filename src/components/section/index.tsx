import React from "react"
import "./style.scss";
import { DATA } from "./data/items";

const Section = () => {
    return (
        <section className="grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" >
            {
                DATA && DATA.map((item: any, index: any) => {
                    return <div className="card" key={index}>
                        <div className="image">
                            <img src={item.image} alt="" />
                            <div className="rating">
                                {`${item.rating.actual} `}&nbsp;
                                <span><span className="icon"></span></span>
                                &nbsp;  |&nbsp; {` ${item.rating.outOf}`}
                            </div>
                        </div>
                        <div className="header">
                            <h3>{item.header}</h3>
                            <p>{item.subHeader}</p>
                            <h4><b>{`Rs. ${item.price.actual}`}</b><span>{`Rs. ${item.price.previous}`}</span>{`(${item.price.discount}% OFF)`}</h4>
                        </div>
                    </div>
                })
            }
        </section>
    )
}

export default Section;