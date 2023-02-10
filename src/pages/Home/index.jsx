import React, { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios'

import image_hamburger from '../../images/hamburger.png'
import image_product1 from '../../images/1.png'
import image_product2 from '../../images/2.png'
import image_product3 from '../../images/3.png'
import image_product4 from '../../images/4.png'
import image_product5 from '../../images/5.png'
import image_product6 from '../../images/6.png'
import image_product7 from '../../images/7.png'
import image_product8 from '../../images/8.png'
import image_cowork1 from '../../images/cowork1.jpg'
import image_cowork2 from '../../images/cowork2.jpg'
import image_footer_left from '../../images/left.png'
import image_footer_right from '../../images/right.png'

export default function Index() {

    const [selected, setSelected] = useState({ header1: 0, header2: 5 })
    const [menu, setMenu] = useState(false)

    const header1Data = ['Home Furnitures', 'Corporate Furnitures', 'Hospital Furnitures', 'Sound Proofing']
    const header2Data = ['Chairs', 'Sofa', 'Occassional Tables', 'Coffee Tables', 'Book Shelves', 'Carpet', 'Curtain']

    const products1 = [
        {
            image: image_product1,
            title: 'CRESCENT SWIVEL CHAIR',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ratione.'
        },
        {
            image: image_product2,
            title: 'MILLIE CHAIR',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ratione.'
        },
        {
            image: image_product3,
            title: 'PLEATED SWIVEL CHAIR',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ratione.'
        },
        {
            image: image_product4,
            title: 'LEATHER ARM CHAIR',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ratione.'
        },
    ]
    const products2 = [
        {
            image: image_product5,
            title: 'LEATHER ARM CHAIR',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ratione.'
        },
        {
            image: image_product6,
            title: 'PLEATED SWIVEL CHAIR',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ratione.'
        },
        {
            image: image_product7,
            title: 'MILLIE CHAIR',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ratione.'
        },
        {
            image: image_product8,
            title: 'CRESCENT SWIVEL CHAIR',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ratione.'
        },
    ]

    return (
        <div className='Index'>
            <header className='header-lg'>
                <div>
                    <ul className='header1'>
                        <span className='sliding-arrow header1 left'><i className='fa fa-angle-left'></i></span>
                        {header1Data.map((item, i) => <li className={selected.header1 === i ? 'selected' : ''}>{item.toUpperCase()}</li>)}
                        <span className='sliding-arrow header1 right'><i className=' fa fa-angle-right'></i></span>
                    </ul>
                </div>
                <div>
                    <ul className='header2'>
                        <span className='sliding-arrow header2 left'><i className='fa fa-angle-left'></i></span>
                        {header2Data.map((item, i) =>
                            <span className='wrapper'>
                                <span className={selected.header2 === i ? 'show' : 'hide'}></span>
                                <li className={selected.header2 === i ? 'selected' : ''}>
                                    {item.toUpperCase()}
                                </li>
                            </span>
                        )}
                        <span className='sliding-arrow header2 right'><i className=' fa fa-angle-right'></i></span>
                    </ul>
                </div>
            </header>
            <header className='header-sm'>
                <span className='hamburger'><img src={image_hamburger} onClick={() => setMenu(!menu)} alt="" /></span>
                {menu && <div className='hamburger-menu'>
                    <div className="header1">
                        <ul>
                            {header1Data.map((item, i) => <li>{item.toUpperCase()}</li>)}
                        </ul>
                    </div>
                    <div className="header2">
                        <ul>
                            {header2Data.map((item, i) => <li>{item.toUpperCase()}</li>)}
                        </ul>
                    </div>
                </div>}
            </header>
            <main>
                <section className='catalog1'>
                    {
                        products1.map((product, i) => {
                            return (
                                <div className='crd'>
                                    <img src={product.image} alt="" />
                                    <h4>{product.title}</h4>
                                    <p>{product.description}</p>
                                </div>
                            )
                        })
                    }
                </section>
                <section className='catalog2'>
                    {
                        products2.map((product, i) => {
                            return (
                                <div className='crd'>
                                    <img src={product.image} alt="" />
                                    <h4>{product.title}</h4>
                                    <p>{product.description}</p>
                                </div>
                            )
                        })
                    }
                </section>
                <section className='designer-collection'>
                    <article>
                        <h2>Designer <br /> Collections</h2>
                        <p>
                            Coworking is an arrangement in which workers of different comapanies share an office space, allowing cost savings and convenience through the use of common infrastructure, such as equipment, utilities, and receptionist and custodial
                        </p>
                    </article>
                    <article>
                        <img src={image_cowork2} alt="" />
                    </article>
                    <article>
                        <img src={image_cowork1} alt="" />
                    </article>
                </section>
            </main>
            <footer>
                <img className='left' src={image_footer_left} alt="" />
                <img className='right' src={image_footer_right} alt="" />
                <div className='footer-content'>
                    <div className='quote'>
                        <q>Real comfort, visual and physical, <br /> is visual to every room.</q>
                        <p>- Mark Hampton</p>
                    </div>
                    <hr />
                    <article>
                        <ul>
                            <li>Sofas</li>
                            <li>Chairs</li>
                            <li>Benches</li>
                            <li>Cofee Tables</li>
                            <li>Side Tables</li>
                        </ul>
                        <ul>
                            <li>Console Tables</li>
                            <li>TV Stands</li>
                            <li>Shelving</li>
                            <li>Leather Furniture</li>
                            <li>Dining Chairs</li>
                        </ul>
                        <ul>
                            <li>Dining Tables</li>
                            <li>Dining Benches</li>
                            <li>Buffets & Bar Carts</li>
                            <li>Bar & Counter Stools</li>
                            <li>Beds</li>
                        </ul>
                        <ul>
                            <li>Bedside Tables</li>
                            <li>Dressers</li>
                            <li>Mattresses</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </article>
                    <div>
                        <p>Website Terms & Conditions </p>
                        <p> &copy; SMART HATCH TECHNOLOGIES FZE</p>
                    </div>
                </div>

            </footer>
        </div>
    )
}