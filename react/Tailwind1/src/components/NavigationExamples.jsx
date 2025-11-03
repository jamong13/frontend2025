import React, { useState } from 'react'

export default function NavigationExamples() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4 text-gray-800">네비게이션 예제</h2>
        <p className="text-gray-600 mb-6">다양한 스타일의 네비게이션 컴포넌트들입니다.</p>
      </div>

      {/* 기본 네비게이션 바 */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">1. 기본 네비게이션 바</h3>
        <nav className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">Logo</div>
            <div className="hidden md:flex gap-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">홈</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">서비스</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">소개</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">연락처</a>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              로그인
            </button>
          </div>
        </nav>
      </section>

      {/* 그라디언트 네비게이션 */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">2. 그라디언트 네비게이션</h3>
        <nav className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-white">Brand</div>
            <div className="hidden md:flex gap-6">
              <a href="#" className="text-white hover:text-gray-200 transition font-medium">Features</a>
              <a href="#" className="text-white hover:text-gray-200 transition font-medium">Pricing</a>
              <a href="#" className="text-white hover:text-gray-200 transition font-medium">About</a>
              <a href="#" className="text-white hover:text-gray-200 transition font-medium">Contact</a>
            </div>
            <button className="px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition font-semibold">
              Get Started
            </button>
          </div>
        </nav>
      </section>

      {/* 모바일 메뉴 */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">3. 모바일 반응형 메뉴</h3>
        <nav className="bg-gray-800 rounded-lg shadow-lg">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-white">Mobile Nav</div>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white p-2 hover:bg-gray-700 rounded transition"
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
              <div className="hidden md:flex gap-6">
                <a href="#" className="text-white hover:text-gray-300 transition">Home</a>
                <a href="#" className="text-white hover:text-gray-300 transition">Products</a>
                <a href="#" className="text-white hover:text-gray-300 transition">Blog</a>
                <a href="#" className="text-white hover:text-gray-300 transition">Contact</a>
              </div>
            </div>
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 space-y-2 pb-2">
                <a href="#" className="block text-white hover:bg-gray-700 p-2 rounded transition">Home</a>
                <a href="#" className="block text-white hover:bg-gray-700 p-2 rounded transition">Products</a>
                <a href="#" className="block text-white hover:bg-gray-700 p-2 rounded transition">Blog</a>
                <a href="#" className="block text-white hover:bg-gray-700 p-2 rounded transition">Contact</a>
              </div>
            )}
          </div>
        </nav>
      </section>

      {/* 탭 네비게이션 */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">4. 탭 네비게이션</h3>
        <div className="border-b border-gray-200">
          <nav className="flex gap-2">
            <button className="px-6 py-3 border-b-2 border-blue-500 text-blue-600 font-semibold">
              Overview
            </button>
            <button className="px-6 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 transition">
              Analytics
            </button>
            <button className="px-6 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 transition">
              Reports
            </button>
            <button className="px-6 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 transition">
              Settings
            </button>
          </nav>
        </div>
      </section>

      {/* Breadcrumb */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">5. Breadcrumb</h3>
        <nav className="flex items-center gap-2 text-sm">
          <a href="#" className="text-blue-600 hover:underline">Home</a>
          <span className="text-gray-400">/</span>
          <a href="#" className="text-blue-600 hover:underline">Products</a>
          <span className="text-gray-400">/</span>
          <a href="#" className="text-blue-600 hover:underline">Category</a>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">Current Page</span>
        </nav>
      </section>

      {/* 수직 사이드바 네비게이션 */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">6. 수직 사이드바 네비게이션</h3>
        <div className="flex gap-4">
          <nav className="w-64 bg-white border border-gray-200 rounded-lg p-4">
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Main Menu</h4>
              <div className="space-y-1">
                <a href="#" className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium">
                  <span>📊</span> Dashboard
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition">
                  <span>👥</span> Users
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition">
                  <span>📁</span> Projects
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition">
                  <span>⚙️</span> Settings
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Other</h4>
              <div className="space-y-1">
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition">
                  <span>❓</span> Help
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition">
                  <span>🚪</span> Logout
                </a>
              </div>
            </div>
          </nav>
          <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="text-gray-600">사이드바 옆 메인 콘텐츠 영역</p>
          </div>
        </div>
      </section>

      {/* Pill 네비게이션 */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">7. Pill 네비게이션</h3>
        <nav className="flex flex-wrap gap-2 bg-gray-100 p-2 rounded-lg">
          <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-full font-medium shadow-sm">
            All
          </a>
          <a href="#" className="px-4 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-50 transition">
            Active
          </a>
          <a href="#" className="px-4 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-50 transition">
            Completed
          </a>
          <a href="#" className="px-4 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-50 transition">
            Archived
          </a>
        </nav>
      </section>
    </div>
  )
}


