import { useParams, useNavigate } from 'react-router-dom';
import './PageStyle.css';

const products = {
  '1': { name: '노트북', description: '고성능 노트북', price: 1500000 },
  '2': { name: '스마트폰', description: '최신 스마트폰', price: 1000000 },
  '3': { name: '태블릿', description: '프리미엄 태블릿', price: 800000 },
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products[id];

  if (!product) {
    return (
      <div className="page-container">
        <h1>상품을 찾을 수 없습니다</h1>
        <button onClick={() => navigate('/examples')} className="demo-button">
          목록으로 돌아가기
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    alert(`${product.name}이(가) 장바구니에 추가되었습니다!`);
    navigate('/examples');
  };

  return (
    <div className="page-container">
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <button 
          onClick={() => navigate(-1)} 
          className="demo-button"
          style={{ marginBottom: '2rem' }}
        >
          ← 뒤로 가기
        </button>
        
        <div className="product-card" style={{ padding: '2rem' }}>
          <h1>{product.name}</h1>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '1rem' }}>
            {product.description}
          </p>
          <h2 style={{ color: '#667eea', marginBottom: '2rem' }}>
            ₩{product.price.toLocaleString()}
          </h2>
          
          <button onClick={handleAddToCart} className="demo-button" style={{ width: '100%' }}>
            장바구니에 추가
          </button>
        </div>

        <div className="info-box" style={{ marginTop: '2rem' }}>
          <h3>상품 정보</h3>
          <p>이 예제는 useParams를 사용하여 URL에서 상품 ID를 받아와 상세 정보를 표시합니다.</p>
          <p>현재 URL: /product/{id}</p>
          <code>const {'{'} id {'}'} = useParams();</code>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

