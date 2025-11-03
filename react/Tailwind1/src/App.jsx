import React, { useState } from 'react'
import ButtonExamples from './components/ButtonExamples'
import CardExamples from './components/CardExamples'
import FormExamples from './components/FormExamples'
import LayoutExamples from './components/LayoutExamples'
import NavigationExamples from './components/NavigationExamples'

function App() {
  const [activeTab, setActiveTab] = useState('buttons')

  const tabs = [
    { id: 'buttons', name: '버튼' },
    { id: 'cards', name: '카드' },
    { id: 'forms', name: '폼' },
    { id: 'layouts', name: '레이아웃' },
    { id: 'navigation', name: '네비게이션' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Tailwind CSS 예제 모음
          </h1>
          <p className="mt-2 text-gray-600">다양한 Tailwind CSS 컴포넌트 예제를 확인해보세요</p>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-wrap gap-2 bg-white p-2 rounded-lg shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {activeTab === 'buttons' && <ButtonExamples />}
          {activeTab === 'cards' && <CardExamples />}
          {activeTab === 'forms' && <FormExamples />}
          {activeTab === 'layouts' && <LayoutExamples />}
          {activeTab === 'navigation' && <NavigationExamples />}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-gray-300">Made with ❤️ using Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}

export default App


