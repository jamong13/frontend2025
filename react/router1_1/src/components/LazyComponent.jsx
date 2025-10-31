const LazyComponent = () => {
  return (
    <div
      style={{ padding: "20px", background: "#f0f0f0", borderRadius: "8px" }}
    >
      <h3>지연 로딩된 컴포넌트</h3>
      <p>이 컴포넌트는 lazy()를 사용하여 동적으로 로드되었습니다.</p>
    </div>
  );
};

export default LazyComponent;
