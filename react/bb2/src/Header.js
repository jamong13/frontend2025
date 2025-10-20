import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
        <div className="logo">
            <h1>뚜레쥬르</h1>
        </div>
        <nav className="gnb">
            <ul className="main-menu">
            <li>
                <a href="#">브랜드 소식</a>
                <ul className="sub-menu">
                <li><a href="#">브랜드 스토리</a></li>
                <li><a href="#">글로벌 뚜레쥬르</a></li>
                <li><a href="#">뚜레쥬르 라뜰리에</a></li>
                <li><a href="#">뚜레쥬르 링크</a></li>
                <li><a href="#">뉴스 & 공지사항</a></li>
                </ul>
            </li>
            <li>
                <a href="#">제품</a>
                <ul className="sub-menu">
                    <li><a href="#">NEW</a></li>
                    <li><a href="#">빵</a></li>
                    <li><a href="#">케이크</a></li>
                    <li><a href="#">샌드위치</a></li>
                    <li><a href="#">디저트&스낵</a></li>
                    <li><a href="#">선물</a></li>
                    <li><a href="#">음료</a></li>
                </ul>
            </li>
            <li>
                <a href="#">이벤트&멤버십</a>
                <ul className="sub-menu">
                    <li><a href="#">진행중인 이벤트</a></li>
                    <li><a href="#">이벤트 당첨자</a></li>
                    <li><a href="#">CJ ONE 멤버십</a></li>
                </ul>
            </li>
            <li>
                <a href="#">제휴혜택&기프트카드</a>
                <ul className="sub-menu">
                    <li><a href="#">제휴혜택</a></li>
                    <li><a href="#">기프트카드</a></li>
                </ul>
            </li>
            <li>
                <a href="#">뚜레쥬르 앱&온라인 쇼핑몰</a>
                <ul className="sub-menu">
                    <li><a href="#">뚜레쥬르 앱</a></li>
                    <li><a href="#">홈페이지 전용 예약 배송</a></li>
                    <li><a href="#">꽃&케이크 택배 배송</a></li>
                    <li><a href="#">대량 구매 문의</a></li>
                </ul>
            </li>
            </ul>
        </nav>
    </header>
  )
}
