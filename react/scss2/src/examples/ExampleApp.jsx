import React from 'react';
import Button from './Button';
import Card from './Card';
import TodoApp from './TodoApp';
import './ExampleApp.scss';

function ExampleApp() {
  const [activeTab, setActiveTab] = React.useState('buttons');

  const handleButtonClick = (variant) => {
    alert(`${variant} 버튼이 클릭되었습니다!`);
  };

  return (
    <div className="example-app">
      <header className="header">
        <h1>React + SCSS 예제 모음</h1>
        <nav className="nav">
          <button 
            className={activeTab === 'buttons' ? 'active' : ''}
            onClick={() => setActiveTab('buttons')}
          >
            버튼
          </button>
          <button 
            className={activeTab === 'cards' ? 'active' : ''}
            onClick={() => setActiveTab('cards')}
          >
            카드
          </button>
          <button 
            className={activeTab === 'todo' ? 'active' : ''}
            onClick={() => setActiveTab('todo')}
          >
            Todo 앱
          </button>
        </nav>
      </header>

      <main className="main">
        {activeTab === 'buttons' && (
          <section className="section">
            <h2>버튼 컴포넌트</h2>
            
            <div className="demo-group">
              <h3>색상 변형</h3>
              <div className="button-group">
                <Button variant="primary" onClick={() => handleButtonClick('Primary')}>
                  Primary
                </Button>
                <Button variant="success" onClick={() => handleButtonClick('Success')}>
                  Success
                </Button>
                <Button variant="danger" onClick={() => handleButtonClick('Danger')}>
                  Danger
                </Button>
                <Button variant="warning" onClick={() => handleButtonClick('Warning')}>
                  Warning
                </Button>
                <Button variant="secondary" onClick={() => handleButtonClick('Secondary')}>
                  Secondary
                </Button>
              </div>
            </div>

            <div className="demo-group">
              <h3>크기 변형</h3>
              <div className="button-group">
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
              </div>
            </div>

            <div className="demo-group">
              <h3>비활성화 상태</h3>
              <div className="button-group">
                <Button variant="primary" disabled>Disabled</Button>
                <Button variant="success" disabled>Disabled</Button>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'cards' && (
          <section className="section">
            <h2>카드 컴포넌트</h2>
            <div className="card-grid">
              <Card
                title="React 배우기"
                description="React는 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리입니다. 컴포넌트 기반으로 재사용 가능한 UI를 만들 수 있습니다."
                tags={['React', 'JavaScript', 'Frontend']}
                imageUrl="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop"
                footer={
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>2024-11-03</span>
                    <a href="#">더 보기 →</a>
                  </div>
                }
              />
              
              <Card
                title="SCSS 마스터하기"
                description="SCSS는 CSS의 확장 기능으로, 변수, 중첩, 믹스인 등 강력한 기능을 제공합니다."
                tags={['SCSS', 'CSS', 'Style']}
                imageUrl="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=200&fit=crop"
              />
              
              <Card
                title="웹 개발 가이드"
                description="현대적인 웹 개발을 위한 필수 도구와 기술을 배워보세요."
                tags={['Web', 'Development', 'Guide']}
                imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop"
                footer={
                  <button style={{ 
                    padding: '8px 16px', 
                    background: '#3498db', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}>
                    시작하기
                  </button>
                }
              />
            </div>
          </section>
        )}

        {activeTab === 'todo' && (
          <section className="section-full">
            <TodoApp />
          </section>
        )}
      </main>
    </div>
  );
}

export default ExampleApp;

