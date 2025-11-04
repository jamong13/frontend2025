import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [transparencyActive, setTransparencyActive] = useState(false);
  const [navOver, setNavOver] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mobile = width <= 850;
      setIsMobile(mobile);

      if (!mobile) {
        setMobileNavActive(false);
        setTransparencyActive(false);
      }
    };
    handleResize();
    //  최초한번 함수 실행
    window.addEventListener("resize", handleResize);
    //  화면이 리사이즈 될때마다 함수 실행

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMobileTabClick = (e) => {
    e.preventDefault();
    setMobileNavActive(true);
    setTransparencyActive(true);
  };

  const handleTransparencyClick = (e) => {
    e.preventDefault();
    setMobileNavActive(false);
    setTransparencyActive(false);
  };

  const handleNavMouseEnter = () => {
    setNavOver(true);
  };
  const handleNavMouseLeave = () => {
    setNavOver(false);
  };
  const handleMobileNavClick = (e) => {
    e.preventDefault();
    const subMenu = e.target.nextElementSibling;
    //지금클릭한 다음것(.sub)

    if (subMenu && subMenu.classList.contains("sub")) {
      const isDisplyed = subMenu.style.display === "block";
      const allSubs = document.querySelectorAll(".mobile_nav .sub");
      allSubs.forEach((sub) => {
        sub.style.display = "none";
      });
      if (!isDisplyed) {
        subMenu.style.display = "block";
      }
    }
  };

  return (
    <>
      <div
        className="container"
        style={{ left: mobileNavActive ? "-220px" : "0" }}
      >
        <div className="header">
          <div className="social">
            <ul>
              <li>
                <a href="">
                  <img src="images/social_icon1.gif" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="images/social_icon2.gif" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="images/social_icon3.gif" alt="" />
                </a>
              </li>
            </ul>
            <div className="mileage_btn">
              <a href="">
                <img src="images/btn_mileage.gif" alt="" />
              </a>
            </div>
          </div>
          <div className="signature">
            <a href="">
              <img src="images/signature.gif" alt="" />
            </a>
          </div>
          <div className="location">
            <ul>
              <li>
                <a href="">Login</a>
              </li>
              <li>
                <a href="">Join</a>
              </li>
              <li>
                <a href="">개인정보취급방침</a>
              </li>
            </ul>
          </div>
        </div>
        {/* header end */}
        <div className="mobile_tab">
          <a href="#" onClick={handleMobileTabClick}>
            <img src="images/gnb_btn.png" alt="Mobile Tab" />
          </a>
        </div>
        <div className={`mobile_nav ${mobileNavActive ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#" onClick={handleMobileNavClick}>
                ZISHEN
              </a>
              <ul className="sub">
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Lookbook</a>
                </li>
                <li>
                  <a href="">Catalogue</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={handleMobileNavClick}>
                ZISHEN HOMME
              </a>
              <ul className="sub">
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Lookbook</a>
                </li>
                <li>
                  <a href="">Catalogue</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={handleMobileNavClick}>
                MEDIA
              </a>
              <ul className="sub">
                <li>
                  <a href="">Movie</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
                <li>
                  <a href="">Event</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={handleMobileNavClick}>
                SERVICE
              </a>
              <ul className="sub">
                <li>
                  <a href="">Faq</a>
                </li>
                <li>
                  <a href="">1:1 Service</a>
                </li>
                <li>
                  <a href="">Group Order</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={handleMobileNavClick}>
                SHOP INFO
              </a>
              <ul className="sub">
                <li>
                  <a href="">Shop Info</a>
                </li>
                <li>
                  <a href="">Open Guide</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={handleMobileNavClick}>
                COMPANY
              </a>
              <ul className="sub">
                <li>
                  <a href="">Company</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* mobile end */}

        <div className="nav">
          <ul
            className={navOver ? "over" : ""}
            onMouseEnter={handleNavMouseEnter}
            onMouseLeave={handleNavMouseLeave}
          >
            <li>
              <a href="">ZISHEN</a>
              <ul className="sub">
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Lookbook</a>
                </li>
                <li>
                  <a href="">Catalogue</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">ZISHEN HOMME</a>
              <ul className="sub">
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Lookbook</a>
                </li>
                <li>
                  <a href="">Catalogue</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">MEDIA</a>
              <ul className="sub">
                <li>
                  <a href="">Movie</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
                <li>
                  <a href="">Event</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">SERVICE</a>
              <ul className="sub">
                <li>
                  <a href="">Faq</a>
                </li>
                <li>
                  <a href="">1:1 Service</a>
                </li>
                <li>
                  <a href="">Group Order</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">SHOP INFO</a>
              <ul className="sub">
                <li>
                  <a href="">Shop Info</a>
                </li>
                <li>
                  <a href="">Open Guide</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">COMPANY</a>
              <ul className="sub">
                <li>
                  <a href="">Company</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* nav end  */}
        <div className="hero">
          <img src="images/hero.jpg" alt="" />
        </div>
      </div>
      {/* container 끝 */}
      <div
        className={`transparency ${transparencyActive ? "active" : ""}`}
        onClick={handleTransparencyClick}
      ></div>

      <div className="main_content">
        {/* Best Items Section */}
        <section className="items_section">
          <div className="section_header">
            <h2>BEST ITEMS</h2>
            <p>가장 인기 있는 상품을 만나보세요</p>
          </div>
          <div className="items_grid">
            <div className="item_card">
              <div className="item_image">
                <img src="/images/best1.jpg" alt="Best Item1" />
                <div className="item_overlay">
                  <button className="view_btn">VIEW DETAIL</button>
                </div>
              </div>
              <div className="item_info">
                <h3>Premium Wool coat</h3>
                <div className="item_price">￦350,000</div>
                <div className="item_rating">★★★★★</div>
              </div>
            </div>
            <div className="item_card">
              <div className="item_image">
                <img src="/images/best2.jpg" alt="Best Item 2" />
                <div className="item_overlay">
                  <button className="view_btn">VIEW DETAIL</button>
                </div>
              </div>
              <div className="item_info">
                <h3>Cashmere Sweater</h3>
                <p className="item_price">₩280,000</p>
                <div className="item_rating">★★★★★</div>
              </div>
            </div>

            <div className="item_card">
              <div className="item_image">
                <img src="/images/best3.jpg" alt="Best Item 3" />
                <div className="item_overlay">
                  <button className="view_btn">VIEW DETAIL</button>
                </div>
              </div>
              <div className="item_info">
                <h3>Designer Handbag</h3>
                <p className="item_price">₩420,000</p>
                <div className="item_rating">★★★★★</div>
              </div>
            </div>
          </div>
        </section>
        {/* New Items Section */}
        <section className="items_section new_items">
          <div className="section_header">
            <h2>NEW ARRIVALS</h2>
            <p>새롭게 출시된 최신 상품</p>
          </div>
          <div className="items_grid">
            <div className="item_card">
              <div className="item_image">
                <span className="new_badge">NEW</span>
                <img src="/images/new1.jpg" alt="New Item 1" />
                <div className="item_overlay">
                  <button className="view_btn">VIEW DETAIL</button>
                </div>
              </div>
              <div className="item_info">
                <h3>Modern Blazer</h3>
                <p className="item_price">₩320,000</p>
                <p className="item_date">2025.11.01</p>
              </div>
            </div>

            <div className="item_card">
              <div className="item_image">
                <span className="new_badge">NEW</span>
                <img src="/images/new2.jpg" alt="New Item 2" />
                <div className="item_overlay">
                  <button className="view_btn">VIEW DETAIL</button>
                </div>
              </div>
              <div className="item_info">
                <h3>Leather Shoes</h3>
                <p className="item_price">₩260,000</p>
                <p className="item_date">2025.11.01</p>
              </div>
            </div>

            <div className="item_card">
              <div className="item_image">
                <span className="new_badge">NEW</span>
                <img src="/images/new3.jpg" alt="New Item 3" />
                <div className="item_overlay">
                  <button className="view_btn">VIEW DETAIL</button>
                </div>
              </div>
              <div className="item_info">
                <h3>Classic Watch</h3>
                <p className="item_price">₩580,000</p>
                <p className="item_date">2025.11.02</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="footer">
        <div className="footer_content">
          <div className="footer_section">
            <h3>ABOUT ZISHEN</h3>
            <p>
              지센은 현대적이고 세련된 패션을 추구하는
              <br />
              프리미엄 브랜드입니다.
            </p>
            <div className="footer_social">
              <a href="">
                <img src="/images/social_icon1.gif" alt="Facebook" />
              </a>
              <a href="">
                <img src="/images/social_icon2.gif" alt="Twitter" />
              </a>
              <a href="">
                <img src="/images/social_icon3.gif" alt="Instagram" />
              </a>
            </div>
          </div>

          <div className="footer_section">
            <h3>CUSTOMER SERVICE</h3>
            <ul>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">배송 안내</a>
              </li>
              <li>
                <a href="">교환 및 반품</a>
              </li>
              <li>
                <a href="">1:1 문의</a>
              </li>
            </ul>
          </div>

          <div className="footer_section">
            <h3>COMPANY INFO</h3>
            <ul>
              <li>
                <a href="">회사 소개</a>
              </li>
              <li>
                <a href="">매장 안내</a>
              </li>
              <li>
                <a href="">개인정보처리방침</a>
              </li>
              <li>
                <a href="">이용약관</a>
              </li>
            </ul>
          </div>

          <div className="footer_section">
            <h3>CONTACT</h3>
            <ul className="footer_contact">
              <li>
                <strong>고객센터</strong>
              </li>
              <li>1588-0000</li>
              <li>평일 10:00 - 18:00</li>
              <li className="footer_email">help@zishen.com</li>
            </ul>
          </div>
        </div>

        <div className="footer_bottom">
          <p className="footer_copyright">
            Copyright © 2025 ZISHEN. All rights reserved.
          </p>
          <p className="footer_info">
            상호: 주식회사 지센 | 대표: 홍길동 | 사업자등록번호: 123-45-67890
            <br />
            주소: 서울특별시 강남구 테헤란로 123 | 통신판매업신고:
            2025-서울강남-0000
          </p>
        </div>
      </footer>
    </>
  );
}
