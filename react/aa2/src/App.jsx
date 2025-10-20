import React from 'react'
import Card from './Card'
import './App.css'

const cardsData = [
  {
    id: 1,
    title: '첫 번째 카드',
    content: '이것은 첫 번째 카드입니다. 아름다운 디자인과 함께 내용을 담고 있습니다.',
    imageUrl: 'https://picsum.photos/300/200?random=1',
    backgroundColor: '#ffebee'
  },
  {
    id: 2,
    title: '두 번째 카드',
    content: '두 번째 카드는 다른 스타일과 색상을 가지고 있습니다.',
    imageUrl: 'https://picsum.photos/300/200?random=2',
    backgroundColor: '#e8f5e8'
  },
  {
    id: 3,
    title: '세 번째 카드',
    content: '세 번째 카드는 파란색 계열의 배경을 가지고 있습니다.',
    imageUrl: 'https://picsum.photos/300/200?random=3',
    backgroundColor: '#e3f2fd'
  },
  {
    id: 4,
    title: '네 번째 카드',
    content: '네 번째 카드는 보라색 계열의 배경색을 사용합니다.',
    imageUrl: 'https://picsum.photos/300/200?random=4',
    backgroundColor: '#f3e5f5'
  },
  {
    id: 5,
    title: '다섯 번째 카드',
    content: '다섯 번째 카드는 주황색 계열의 따뜻한 느낌을 줍니다.',
    imageUrl: 'https://picsum.photos/300/200?random=5',
    backgroundColor: '#fff3e0'
  },
  {
    id: 6,
    title: '여섯 번째 카드',
    content: '여섯 번째 카드는 청록색 계열의 신선한 색상을 사용합니다.',
    imageUrl: 'https://picsum.photos/300/200?random=6',
    backgroundColor: '#e0f2f1'
  },
  {
    id: 7,
    title: '일곱 번째 카드',
    content: '일곱 번째 카드는 분홍색 계열의 부드러운 색상을 가지고 있습니다.',
    imageUrl: 'https://picsum.photos/300/200?random=7',
    backgroundColor: '#fce4ec'
  },
  {
    id: 8,
    title: '여덟 번째 카드',
    content: '여덟 번째 카드는 회색 계열의 모던한 느낌을 줍니다.',
    imageUrl: 'https://picsum.photos/300/200?random=8',
    backgroundColor: '#f5f5f5'
  },
  {
    id: 9,
    title: '아홉 번째 카드',
    content: '아홉 번째 카드는 마지막 카드로, 노란색 계열의 밝은 색상을 사용합니다.',
    imageUrl: 'https://picsum.photos/300/200?random=9',
    backgroundColor: '#fffde7'
  }
];

export default function App() {
  return (
   <div className='App'>
        <header className="App-header">
            <h1>9장의 카드</h1>
            <p>아름다운 카드 디자인 모음</p>
        </header>
        <main className='App-main'>
            <div className='cards-container'>
                {cardsData.map((card)=>(
                    <Card 
                      key={card.id} 
                      title={card.title}
                      content={card.content}
                      imageUrl={card.imageUrl}
                      backgroundColor={card.backgroundColor}
                    />
                ))}
            </div>
        </main>
   </div>
  )
}
