import React from 'react'
import Slide from './Slide'
import './Main.css'

const products = [
    {
        img: "/images/2025-8-26_event(5).jpg",
        name: "밤이 통통 케이크",
        category: "Cake",
    },
    {
        img: "/images/2025-8-26_event(2).jpg",
        name: "카라멜부케",
        category: "Cake",
    },
    {
        img: "/images/2025-4-8_event(5).jpg",
        name: "스트로베리 퀸",
        category: "Cake",
    },
]
export default function Main1() {
  return (
    <div className='main-container'>
        <div className='main-section'>
            {/* 좌측 슬라이드 */}
            <div className='left-slide'>
                <Slide/>
            </div>
            {/* 우측 제품 */}
            <div className='right-products'>
                <div className='product-main'>
                    <img src={products[0].img} alt={products[0].name}/>
                    <h4>{products[0].category}</h4>
                    <span>{products[0].category}</span>
                </div>
                <div className='product-side'>
                    {products.slice(1).map((p, i)=>(
                        <div key={i} className='side-item'>
                            <img src={p.img} alt={p.name}/>
                            <h4>{p.category}</h4>
                            <span>{p.category}</span>
                        </div>
                    ))}
                    {/* <div className='side-item'>
                        <img src={products[2].img} alt={products[2].name}/>
                        <h4>{products[2].category}</h4>
                        <span>{products[2].category}</span>
                    </div> */}
                </div>
            </div>
        </div>
        {/* 하단배너 */}
        <div className='bottom-banner'>
            <div className='bottom-content'>
                <img src='./images/main_section_banner.jpg' />
            </div>
        </div>
    </div>
  )
}
