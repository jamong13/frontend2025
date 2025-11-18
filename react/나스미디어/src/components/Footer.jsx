import { useState } from 'react';

const FOOTER_PRIMARY = [
  { label: '개인정보처리방침', bold: true },
  { label: '영상정보처리방침' },
  { label: '이메일무단수집거부' },
  { label: '광고문의' },
  { label: '윤리위반신고' },
];

const FOOTER_SECONDARY = ['대표자 : 정기호', '사업자등록번호 : 220-81-80363'];

const FAMILY_SITES = [
  '[미디어/컨텐츠]kt skylife',
  '[미디어/컨텐츠]kth',
  '[미디어/컨텐츠]지니뮤직',
  '[미디어/컨텐츠]sktLifeTV',
  '[미디어/컨텐츠]kt mhows',
  '[ICT]kt telecop',
  '[ICT]kt is',
  '[ICT]kt cs',
  '[ICT]kt m&s',
  '[ICT]kt powertel',
  '[ICT]kt linkus',
  '[ICT]kt submarine',
  '[ICT]kt ds',
  '[ICT]INITECH',
  '[금융/Rental]BC Card',
  '[금융/Rental]Smartro',
  '[금융/Rental]H&C Network',
  '[금융/Rental]Rental',
  '[부동산]kt estate',
  '[Start-up/기타]kt commerce',
  '[Start-up/기타]kt sports',
  '[Start-up/기타]kt NexR',
];

function Footer() {
  const [isFamilyOpen, setIsFamilyOpen] = useState(false);

  return (
    <footer className="cf">
      <div className="foot-cover cf">
        <div className="footleft">
          <ul className="foot-first">
            {FOOTER_PRIMARY.map((item) => (
              <li key={item.label} className={item.bold ? 'foot-bold' : ''}>
                <a href="#">{item.label}</a>
              </li>
            ))}
          </ul>

          <ul className="foot-second cf">
            {FOOTER_SECONDARY.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <span>Copyright ⓒ NASMEDIA Co., LTD. All Rights Reserved.</span>
        </div>
        <div className="footright">
          <div className={`family-btn${isFamilyOpen ? ' open' : ''}`}>
            <button
              type="button"
              onClick={() => setIsFamilyOpen((prev) => !prev)}
              aria-expanded={isFamilyOpen}
            >
              <p>
                Family Site
                <i className="fa-solid fa-sort-up" aria-hidden="true" />
              </p>
            </button>
            <ul aria-hidden={!isFamilyOpen}>
              {FAMILY_SITES.map((site) => (
                <li key={site}>
                  <a href="#">{site}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

