export default function Menu() {
  const menuCategories = [
    {
      title: "클래식",
      description: "누구나 좋아하는 스테디셀러 조합",
      items: ["에그마요", "이탈리안 비엠티", "비엘티", "햄", "참치"],
    },
    {
      title: "프리미엄",
      description: "특병한 날을 위한 한층 업그레이드 된 맛",
      items: [
        "로티세리 바비큐 치킨",
        "로스트 치킨",
        "써브웨이 클럽",
        "스테이크&치즈",
        "치킨 데리야끼",
      ],
    },
    {
      title: "프레쉬 & 라이트",
      description: "가볍게 즐기는 신선한 선택",
      items: ["베지", "쉬림프", "풀드 포크 바비큐"],
    },
    {
      title: "아침메뉴",
      description: "따뜻한 모닝 샌드위치로 시작하는 하루",
      items: ["햄, 에그&치즈", "웨스턴, 에그&치즈"],
    },
  ];
  return (
    <div className="page menu-page">
      <section className="page-hero">
        <div className="container">
          <h1>메뉴 소개</h1>
          <p>
            주문 즉시 구워낸 빵과 신선한 야채, 다채로운 토핑으로 완성되는
            써브웨이 샌드위치. 원하는 스타일로 커스터마이징해 보세요.
          </p>
        </div>
      </section>
      <section className="container menu-grid">
        {menuCategories.map((category) => (
          <article key={category.title} className="menu-card">
            <h2>{category.title}</h2>
            <p className="menu-description">{category.description}</p>
            <ul>
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <section className="menu-tips">
        <div className="container tips-inner">
          <div>
            <h3>맞춤 조합 TIP</h3>
            <p>
              원하는 빵, 치즈, 야채, 소스를 마음껏 선택해 나만의 샌드위치를
              완성하세요.
            </p>
          </div>
          <ul>
            <li>빵은 허니오트, 위트, 파마산 오레가노 등 6가지 중 선택</li>
            <li>야채는 기본 7가지에 추가 토핑으로 더 풍성하게</li>
            <li>소스는 클래식부터 스파이시까지 13가지</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
