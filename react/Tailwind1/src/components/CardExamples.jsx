import React from 'react'

export default function CardExamples() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4 text-gray-800">카드 예제</h2>
        <p className="text-gray-600 mb-6">다양한 스타일의 카드 컴포넌트들입니다.</p>
      </div>

      {/* 기본 카드 */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">1. 기본 카드</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-bold mb-2">Simple Card</h4>
            <p className="text-gray-600">기본적인 카드 디자인입니다.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-bold mb-2">Another Card</h4>
            <p className="text-gray-600">호버 효과가 있는 카드입니다.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-bold mb-2">Third Card</h4>
            <p className="text-gray-600">깔끔한 디자인의 카드입니다.</p>
          </div>
        </div>
      </section>

      {/* 이미지 카드 */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">2. 이미지 카드</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Product 1</h4>
              <p className="text-gray-600 mb-4">멋진 제품에 대한 설명입니다.</p>
              <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                자세히 보기
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500"></div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Product 2</h4>
              <p className="text-gray-600 mb-4">또 다른 멋진 제품입니다.</p>
              <button className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                자세히 보기
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="h-48 bg-gradient-to-br from-pink-400 to-orange-500"></div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Product 3</h4>
              <p className="text-gray-600 mb-4">최고의 제품입니다.</p>
              <button className="w-full py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition">
                자세히 보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 프로필 카드 */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">3. 프로필 카드</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4"></div>
            <h4 className="text-xl font-bold mb-1">홍길동</h4>
            <p className="text-gray-500 mb-4">Frontend Developer</p>
            <div className="flex justify-center gap-3">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                팔로우
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                메시지
              </button>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4"></div>
            <h4 className="text-xl font-bold mb-1">김철수</h4>
            <p className="text-gray-500 mb-4">Backend Developer</p>
            <div className="flex justify-center gap-3">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                팔로우
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                메시지
              </button>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full mx-auto mb-4"></div>
            <h4 className="text-xl font-bold mb-1">이영희</h4>
            <p className="text-gray-500 mb-4">UI/UX Designer</p>
            <div className="flex justify-center gap-3">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                팔로우
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                메시지
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 통계 카드 */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">4. 통계 카드</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white shadow-lg">
            <div className="text-3xl font-bold mb-2">1,234</div>
            <div className="text-blue-100">총 사용자</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white shadow-lg">
            <div className="text-3xl font-bold mb-2">567</div>
            <div className="text-green-100">신규 가입</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white shadow-lg">
            <div className="text-3xl font-bold mb-2">89</div>
            <div className="text-purple-100">진행 중</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-white shadow-lg">
            <div className="text-3xl font-bold mb-2">$12.5K</div>
            <div className="text-orange-100">매출</div>
          </div>
        </div>
      </section>
    </div>
  )
}


