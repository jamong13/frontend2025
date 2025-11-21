import { Element } from 'react-scroll'
import { useParallax } from 'react-scroll-parallax'
import SectionTitle from '../components/SectionTitle'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('메시지가 전송되었습니다! (데모)')
    setFormData({ name: '', email: '', message: '' })
  }

  const { ref } = useParallax({ speed: 10 })

  return (
    <Element name="contact">
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <SectionTitle>Contact</SectionTitle>
            <p className="text-gray-600 text-lg">
              프로젝트나 협업에 대해 이야기하고 싶으시다면 연락주세요
            </p>
          </div>
          <div
            ref={ref}
            className="bg-white rounded-lg shadow-xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="이름을 입력하세요"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="이메일을 입력하세요"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  메시지
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="메시지를 입력하세요"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300 font-medium text-lg"
              >
                메시지 보내기
              </button>
            </form>
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl mb-2">📧</div>
                  <div className="text-gray-600 font-medium">Email</div>
                  <div className="text-gray-800">contact@example.com</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">📱</div>
                  <div className="text-gray-600 font-medium">Phone</div>
                  <div className="text-gray-800">010-1234-5678</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">📍</div>
                  <div className="text-gray-600 font-medium">Location</div>
                  <div className="text-gray-800">Seoul, Korea</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  )
}

export default Contact

