import React from "react";
import "./Products.css";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "프리미엄 플랜",
      price: "₩19,900",
      description: "모든 기능을 포함한 완전한 솔루션",
      features: ["24/7 지원", "우선 대기열", "고급 분석", "API 액세스"],
    },
    {
      id: 2,
      name: "표준 플랜",
      price: "₩9,900",
      description: "일반 사용자에게 이상적인 선택",
      features: ["일반 지원", "표준 대기열", "기본 분석"],
    },
    {
      id: 3,
      name: "베이직 플랜",
      price: "₩4,900",
      description: "작은 프로젝트에 적합한 시작 플랜",
      features: ["이메일 지원", "제한된 기능"],
    },
  ];
  return (
    <div className="products">
      <h1>상품 및 요금제</h1>
      <p className="products-intro">나에게 맞는 플랜을 선택하세요.</p>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-header">
              <h3>{product.name}</h3>
              <div className="product-price">{product.price} /월</div>
            </div>
            <p className="product-description">{product.description}</p>
            <ul className="product-features">
              {product.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="product-button">선택하기</button>
          </div>
        ))}
      </div>
    </div>
  );
}
