import React from 'react'

export default function LayoutExamples() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4 text-gray-800">레이아웃 예제</h2>
        <p className="text-gray-600 mb-6">Flexbox와 Grid를 활용한 다양한 레이아웃입니다.</p>
      </div>

      {/* Flexbox 레이아웃 */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">1. Flexbox 레이아웃</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 bg-blue-100 border-2 border-blue-300 rounded-lg p-6 text-center">
              <p className="font-semibold text-blue-700">Flex 1</p>
            </div>
            <div className="flex-1 bg-blue-100 border-2 border-blue-300 rounded-lg p-6 text-center">
              <p className="font-semibold text-blue-700">Flex 1</p>
            </div>
            <div className="flex-1 bg-blue-100 border-2 border-blue-300 rounded-lg p-6 text-center">
              <p className="font-semibold text-blue-700">Flex 1</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 bg-green-100 border-2 border-green-300 rounded-lg p-6 text-center">
              <p className="font-semibold text-green-700">Flex 1</p>
            </div>
            <div className="flex-2 bg-green-100 border-2 border-green-300 rounded-lg p-6 text-center">
              <p className="font-semibold text-green-700">Flex 2</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid 레이아웃 */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">2. Grid 레이아웃</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div key={num} className="bg-purple-100 border-2 border-purple-300 rounded-lg p-6 text-center">
              <p className="font-semibold text-purple-700">Grid {num}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 반응형 레이아웃 */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">3. 반응형 레이아웃</h3>
        <p className="text-sm text-gray-500 mb-4">브라우저 크기를 조절해보세요!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="bg-pink-100 border-2 border-pink-300 rounded-lg p-6">
            <p className="font-semibold text-pink-700">Mobile: 1열</p>
            <p className="text-sm text-pink-600">Tablet: 2열</p>
            <p className="text-sm text-pink-600">Desktop: 3-4열</p>
          </div>
          <div className="bg-pink-100 border-2 border-pink-300 rounded-lg p-6">
            <p className="font-semibold text-pink-700">반응형</p>
            <p className="text-sm text-pink-600">레이아웃</p>
          </div>
          <div className="bg-pink-100 border-2 border-pink-300 rounded-lg p-6">
            <p className="font-semibold text-pink-700">자동</p>
            <p className="text-sm text-pink-600">조정</p>
          </div>
          <div className="bg-pink-100 border-2 border-pink-300 rounded-lg p-6">
            <p className="font-semibold text-pink-700">Grid</p>
            <p className="text-sm text-pink-600">시스템</p>
          </div>
        </div>
      </section>

      {/* 센터 정렬 */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">4. 센터 정렬</h3>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h4 className="text-2xl font-bold mb-2">완벽한 센터</h4>
            <p className="text-gray-600">수직 & 수평 정렬</p>
          </div>
        </div>
      </section>

      {/* 고정 사이드바 레이아웃 */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">5. 사이드바 레이아웃</h3>
        <div className="flex gap-4 h-64">
          <div className="w-64 bg-gray-800 text-white rounded-lg p-6">
            <h4 className="text-xl font-bold mb-4">사이드바</h4>
            <ul className="space-y-2">
              <li className="hover:bg-gray-700 p-2 rounded cursor-pointer transition">메뉴 1</li>
              <li className="hover:bg-gray-700 p-2 rounded cursor-pointer transition">메뉴 2</li>
              <li className="hover:bg-gray-700 p-2 rounded cursor-pointer transition">메뉴 3</li>
            </ul>
          </div>
          <div className="flex-1 bg-gray-100 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-2">메인 콘텐츠</h4>
            <p className="text-gray-600">여기에 메인 콘텐츠가 표시됩니다.</p>
          </div>
        </div>
      </section>

      {/* Holy Grail 레이아웃 */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">6. Holy Grail 레이아웃</h3>
        <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-blue-500 text-white p-4 text-center font-bold">Header</div>
          <div className="flex min-h-[200px]">
            <div className="w-48 bg-gray-200 p-4">
              <p className="font-semibold">Left Sidebar</p>
            </div>
            <div className="flex-1 bg-white p-4">
              <p className="font-semibold mb-2">Main Content</p>
              <p className="text-gray-600">중앙 컨텐츠 영역</p>
            </div>
            <div className="w-48 bg-gray-200 p-4">
              <p className="font-semibold">Right Sidebar</p>
            </div>
          </div>
          <div className="bg-gray-800 text-white p-4 text-center">Footer</div>
        </div>
      </section>
    </div>
  )
}


