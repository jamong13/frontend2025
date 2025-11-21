import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/subway.css";
import Slide from "./Slide";

const navMenus = [
  {
    label: "메뉴소개",
    items: ["샌드위치", "랩", "찹샐러드", "스마트 썹", "단체메뉴"],
  },
  {
    label: "이용방법",
    items: ["써브웨이 이용방법", "단체메뉴 이용방법", "신선한 재료 소개"],
  },
  {
    label: "새소식",
    items: ["이벤트·프로모션", "뉴스·공지사항", "광고영상"],
  },
  {
    label: "써브웨이",
    items: [
      "써브웨이 역사",
      "써브웨이 약속",
      "샌드위치 아티스트 지원",
      "매장찾기",
    ],
  },
  {
    label: "가맹점",
    items: [
      "써브웨이 프랜차이즈",
      "가맹관련 FAQ",
      "가맹신청·문의",
      "지사안내",
      "사업설명회",
    ],
  },
];
// 각메뉴는 label (메뉴명) items (하위메뉴 배열)

const heroSlides = ["i_01", "i_02", "i_03", "i_04"];
//메인슬라이더 이미지 클래스 배열명

//클래식, 프레쉬&라이트 , 프리미엄,아침메뉴 4개의 카테고리

//아이템테이터 ->각아이템 name, image, description(문자열 배열)
const menuCategories = [
  {
    label: "클래식",
    items: [
      {
        name: "에그마요",
        image: "/img/sandwich_cl06.jpg",
        description: [
          "친환경 인증 맏은 농장에서 생산된 달걀과",
          "고소한 마요네즈가 만나 더 부드러운",
          "스테디셀러",
        ],
      },
      {
        name: "이탈리안 비엠티",
        image: "/img/sandwich_cl01.jpg",
        description: [
          "7시간 숙성된 페퍼로니, 살라미",
          "그리고 햄이 만들어내는 최상의 조화!",
          "전세계가 사랑하는 No.1 베스트셀러!",
          "Biggest Meatiest Tastiest, It's B.M.T.!",
        ],
      },
      {
        name: "비엘티",
        image: "/img/sandwich_cl02.jpg",
        description: ["오리지널 아메리칸 베이컨의", "풍미와 바삭함 그대로~"],
      },
      {
        name: "미트볼",
        image: "/img/sandwich_cl03.jpg",
        description: [
          "이탈리안 스카일 비프 미트볼에",
          "써브웨이만의 풍부한 토마토 향이 살아있는",
          "마리나라소스를 듬뿍",
        ],
      },
      {
        name: "햄",
        image: "/img/sandwich_cl04.jpg",
        description: [
          "기본 중에 기본!",
          "풍부한 햄이 만들어내는",
          "입 안 가득 넘치는 맛의 향연",
        ],
      },
      {
        name: "참치",
        image: "/img/sandwich_cl05.jpg",
        description: [
          "남녀노소 누구나 좋아하는",
          "담백한 참치와 고소한 마요네즈의",
          "완벽한 조화",
        ],
      },
    ],
  },
  {
    label: "프레쉬&라이트",
    items: [
      {
        name: "로티세리 바비큐 치킨",
        image: "/img/sandwich_fl01.jpg",
        description: [
          "촉촉한 바비큐 치킨의 풍미가득.",
          "손으로 찢어 더욱 부드러운 치킨의 혁명",
        ],
      },
      {
        name: "로스트 치킨",
        image: "/img/sandwich_fl02.jpg",
        description: ["오븐에 구워 담백한 저칼로리", "닭가슴살의 건강한 풍미"],
      },
      {
        name: "써브웨이 클럽",
        image: "/img/sandwich_fl04.jpg",
        description: [
          "명실공히 시그니처 써브!",
          "터기, 비프, 포크 햄의 완벽한 앙상블",
        ],
      },
      {
        name: "터키",
        image: "/img/sandwich_fl05.jpg",
        description: ["280kcal로 슬림하게 즐기는", "오리지널 터키 샌드위치"],
      },
      {
        name: "베지",
        image: "/img/sandwich_fl06.jpg",
        description: ["갓 구운 빵과 신선한 7가지 야채로", "즐기는 깔끔한 한끼"],
      },
    ],
  },
  {
    label: "프리미엄",
    items: [
      {
        name: "쉬림프",
        image: "/img/sandwich_pm10.jpg",
        description: [
          "탱클한 식감이 그대로 살아있는 통새우가",
          "5마리 들어가 한 입 베어 먹을 때 마다",
          "진짜 새우의 풍미가 가득",
        ],
      },
      {
        name: "풀드포크",
        image: "/img/sandwich_pm08.jpg",
        description: [
          "7시간 저온 훈연한 미국 정통 스타일의",
          "리얼 바비큐 풀드포크는 오직 써브웨이에서",
        ],
      },
      {
        name: "스테이크&치즈",
        image: "/img/sandwich_pm01.jpg",
        description: [
          "육즙이 쫙~",
          "풍부한 비프 스테이크의 풍미가 입안 한가득",
        ],
      },
      {
        name: "터기 베이컨 아보카도",
        image: "/img/sandwich_pm02.jpg",
        description: [
          "담백한 터키와 바삭한 베이컨 환상조합에",
          "부드러운 아보카드는 신의 한수",
        ],
      },
      {
        name: "써브웨이 멜트",
        image: "/img/sandwich_pm04.jpg",
        description: [
          "자신있게 추천하는 터기, 햄, 베이컨의",
          "완벽한 맛의 밸런스",
        ],
      },
      {
        name: "스파이시 이탈리안",
        image: "/img/sandwich_pm06.jpg",
        description: [
          "살라미, 페퍼로니가 입안 한가득!",
          "쏘 핫한 이탈리아의 맛",
        ],
      },
      {
        name: "치킨 데리야끼",
        image: "/img/sandwich_pm07.jpg",
        description: [
          "담백한 치킨 스트립에 달콤짭쪼름한 써브웨이",
          "특제 데리야끼 소스와의 환상적인 만남",
        ],
      },
    ],
  },
  {
    label: "아침메뉴",
    items: [
      {
        name: "블랙 포레스트햄 & 에그, 치즈",
        image: "/img/sandwich_bf01.jpg",
        description: ["푹신한 오믈렛과 햄의 가장 클래식한 조화"],
      },
      {
        name: "웨이턴, 에그 & 치즈",
        image: "/img/sandwich_bf02.jpg",
        description: [
          "토마토, 피망, 양파 세가지 야채가 더해져",
          "더욱 신선한 하루의 시작",
        ],
      },
      {
        name: "베이컨, 에그 & 치즈",
        image: "/img/sandwich_bf03.jpg",
        description: ["오리지널 아메리칸 베이컨으로", "더욱 풍성한 아침 식사"],
      },
      {
        name: "스테이크, 에그 & 치즈",
        image: "/img/sandwich_bf04.jpg",
        description: ["육즙 가득 비프 스테이크로", "든든한 아침 식사"],
      },
    ],
  },
];

const whatsNew = [
  "써브웨이 2020년 3월 가격 인상 안내",
  "써브웨이와 함께하는 tvN '금요일금요일밤에'",
  "세브웨이고객센터 2020년 설 연휴 휴뮤 안내",
];

const footerLinks = [
  "이용약관",
  "개인정보취급방침",
  "점주관리자",
  "Subway Listens",
];

export default function App() {
  const sliderRef = useRef(null);
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);
  //activeMenuIndex: 활성화된 탭메뉴 카테고리 인덱스

  const sliderSetting = {
    dots: true, //하단의 점 네비게이션 표시
    dotsClass: "dot-list", //커스텀 dots 클래스명
    arrows: false, //화살표버튼 비활성화
    infinite: true, //무한 루프
    autoplay: true, //자동재생
    autoplaySpeed: 3000, //3초마다 자동전환
    pauseOnHover: true, //호버시 일시정지
    slidesToShow: 1, // 한 번에 표시할 슬라이드 수
    slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 수
    customPaging: () => <button type="button" aria-hidden="true"></button>,
  };
  // 슬라디어 하단(dot) 네비게이션 버튼을 만드는 함수
  return (
    <div>
      <header>
        <div id="h_top">
          <a href="#" className="logo">
            <img src="/img/logo_w.png" alt="로고" />
          </a>
          <ul>
            <li>
              <a href="#">매장찾기</a>
            </li>
            <li>
              <a href="#">가맹신청·문의</a>
            </li>
            <li>
              <a href="#">고객센터</a>
            </li>
            <li>
              <a href="#" className="earth" aria-label="언어 변경"></a>
            </li>
          </ul>
        </div>
        <nav>
          <ul>
            {navMenus.map((menu) => (
              <li key={menu.label}>
                <a href="#">{menu.label}</a>
                <ul>
                  {menu.items.map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="shadow"></div>
        </nav>
      </header>
      <section id="section01">
        <div className="slide">
          <Slider ref={sliderRef} {...sliderSetting}>
            {/* <Slider> react-slick 슬라이더 컴포넌트 */}
            {/* ref={sliderRef} 슬라이드 인스턴스를 ref로 참조(prev/next 제어용 */}
            {/* {...sliderSetting} 모든 슬라이더 설정전달 */}
            {heroSlides.map((slideClass, index) => (
              <div key={slideClass}>
                <a
                  href="#"
                  className={`slide-item ${slideClass}`}
                  aria-label={`주요 프로모션 ${index + 1}`}
                  // 접근성용 레이블(스크린리더)
                ></a>
              </div>
              // className : slide-item i_01, slide-item i_02
            ))}
          </Slider>
        </div>
      </section>
      <div id="sub">
        <div className="sub_wrap">
          <a className="sw_left" href="#">
            <p>매장찾기</p>
          </a>
          <a className="sw_right" href="#">
            <p>가맹신청·문의</p>
          </a>
        </div>
      </div>
      <section id="section02">
        <div className="s02_wrap">
          <div className="menu_top cf">
            <h3>Subway&apos;s Menu</h3>
            <ul className="mt_right">
              {menuCategories.map((category, index) => (
                <li
                  key={category.label}
                  className={`${
                    index === menuCategories.length - 1 ? "last" : ""
                  } ${activeMenuIndex === index ? "on" : ""}`.trim()}
                >
                  <a
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      setActiveMenuIndex(index);
                      console.log(activeMenuIndex);
                    }}
                  >
                    {category.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="menu_wrap">
            {menuCategories.map((category, index) => (
              <div
                key={`menu-${category.label}`}
                className="menu"
                style={{
                  display: activeMenuIndex === index ? "block" : "none",
                }}
              >
                <ul className="cf">
                  {category.items.map((item) => (
                    <li key={item.name}>
                      <a href="#">
                        <div>
                          <img src={item.image} alt={item.name} />
                        </div>
                        <strong>{item.name}</strong>
                        <p>
                          {item.description.map((line, lineIndex) => (
                            <span key={`${item.name}-${lineIndex}`}>
                              {line}
                              {lineIndex !== item.description.length - 1 && (
                                <br />
                              )}
                            </span>
                          ))}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <a href="#" className="prev">
            prev
          </a>
          <a href="#" className="next">
            next
          </a>
        </div>
      </section>
      <section id="section03">
        <div className="s03_wrap">
          <div className="content con_top">
            <div className="cont_01">
              <h3>
                서브웨이를
                <br />
                제대로 즐기는 방법!
              </h3>
              <a href="#" className="con_a">
                이용방법
              </a>
            </div>
            <div className="cont_02">
              <h3>
                50년 역사를 가진
                <br />
                No.1 프랜차이즈의 성장기
              </h3>
              <a href="#" className="con_a">
                서브웨이 역사
              </a>
            </div>
          </div>
          <div className="content con_bott">
            <div className="cont_03">
              <div className="new">
                <h2>What&apos;s New</h2>
                <p>
                  써브웨이의 다양한 소식을
                  <br />
                  빠르게 전달해드립니다.
                </p>
              </div>
              <ul>
                {whatsNew.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
                <li className="more">
                  <a href="#">more</a>
                </li>
              </ul>
            </div>
            <div className="cont_04">
              <Slide />
            </div>
          </div>
        </div>
      </section>
      <section id="section04">
        <ul className="cf">
          <li>
            <a href="#">
              <div className="icon1"></div>
              <p className="tit">프렌차이즈</p>
              <p className="txt">개설절차/투자비용 정보</p>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon2"></div>
              <p className="tit">자사안내</p>
              <p className="txt">수도권/지방 지사정보</p>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon3"></div>
              <p className="tit">광고영상</p>
              <p className="txt">TV광고/동영상</p>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon4"></div>
              <p className="tit">1:1문의</p>
              <p className="txt">개선/문의사항</p>
            </a>
          </li>
        </ul>
      </section>
      <footer>
        <ul className="footer_wrap cf">
          {footerLinks.map((link, index) => (
            <li key={link}>
              <a href="#" className={index === 1 ? "sp" : undefined}>
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="copyright">
          <ul>
            <li>서울시 서초구 강남대로 535 프린스빌딩 15층</li>
            <li>대표: 콜린클락</li>
            <li>전화 : 02-797-5036</li>
            <li>사업자등록번호 : 101-84-04143</li>
          </ul>
          <p>
            SUBWAY® is a Registered Trademark of Subway IP LLC. © 2019 Subway IP
            LLC. All Rights Reserved.
          </p>
          <div className="instar"></div>
          <div className="facebook"></div>
        </div>
      </footer>
    </div>
  );
}
