import React, { useState } from "react";

export default function FormExamples() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    category: "",
    agree: false,
    notifications: "email",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4 text-gray-800">폼 예제</h2>
        <p className="text-gray-600 mb-6">다양한 폼 입력 요소들입니다.</p>
      </div>

      {/* 기본 입력 */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          1. 기본 입력 필드
        </h3>
        <div className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              이름
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="이름을 입력하세요"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              이메일
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              비밀번호
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="••••••••"
            />
          </div>
        </div>
      </section>

      {/* Select & Textarea */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          2. Select & Textarea
        </h3>
        <div className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              카테고리
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
            >
              <option value="">선택하세요</option>
              <option value="tech">기술</option>
              <option value="design">디자인</option>
              <option value="business">비즈니스</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              메시지
            </label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
              placeholder="메시지를 입력하세요..."
            ></textarea>
          </div>
        </div>
      </section>

      {/* 체크박스 & 라디오 */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          3. 체크박스 & 라디오
        </h3>
        <div className="space-y-4 max-w-md">
          <div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="w-4 h-4 text-blue-500 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-gray-700">이용약관에 동의합니다</span>
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              알림 설정
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="notifications"
                  value="email"
                  checked={formData.notifications === "email"}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-500 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-gray-700">이메일</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="notifications"
                  value="sms"
                  checked={formData.notifications === "sms"}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-500 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-gray-700">SMS</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="notifications"
                  value="none"
                  checked={formData.notifications === "none"}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-500 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-gray-700">받지 않음</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* 로그인 폼 예제 */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          4. 로그인 폼 예제
        </h3>
        <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-xl shadow-lg p-8">
          <h4 className="text-2xl font-bold text-center mb-6">로그인</h4>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이메일
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                비밀번호
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-500 rounded"
                />
                <span className="text-sm text-gray-600">로그인 유지</span>
              </label>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                비밀번호 찾기
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition"
            >
              로그인
            </button>
            <div className="text-center text-sm text-gray-600">
              계정이 없으신가요?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                회원가입
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
