# ParallaxImage 컴포넌트 개선 가이드

## 🛠️ 관련 도구 및 라이브러리

### 1. 이미지 최적화 도구

#### **Vite 플러그인**
- `vite-plugin-imagemin`: 이미지 자동 최적화
- `@vitejs/plugin-legacy`: 구형 브라우저 지원

#### **이미지 최적화 서비스**
- **Cloudinary**: 클라우드 기반 이미지 최적화 및 변환
- **ImageKit**: 실시간 이미지 최적화 및 CDN
- **Unsplash Source**: 고품질 무료 이미지 (현재 사용 중)

#### **로컬 이미지 최적화 도구**
- **Sharp**: Node.js 이미지 처리 라이브러리
- **Squoosh**: Google의 웹 기반 이미지 압축 도구
- **TinyPNG**: 온라인 이미지 압축 서비스

### 2. 이미지 로딩 최적화 라이브러리

#### **react-lazy-load-image-component**
```bash
npm install react-lazy-load-image-component
```
- 지연 로딩 (Lazy Loading) 구현
- 플레이스홀더 이미지 지원
- 스크롤 기반 로딩

#### **react-image**
```bash
npm install react-image
```
- 자동 이미지 최적화
- 에러 처리 및 재시도
- 플레이스홀더 지원

#### **next/image** (Next.js 전용)
- Next.js의 최적화된 이미지 컴포넌트
- 자동 WebP 변환
- 반응형 이미지

### 3. 패럴랙스 관련 도구

#### **현재 사용 중: react-scroll-parallax**
- ✅ 이미 구현됨
- 스크롤 기반 패럴랙스 효과

#### **대안 라이브러리**
- **AOS (Animate On Scroll)**: 스크롤 애니메이션
- **GSAP ScrollTrigger**: 고급 스크롤 애니메이션
- **Framer Motion**: React 애니메이션 라이브러리

### 4. 성능 모니터링 도구

- **Lighthouse**: Chrome DevTools의 성능 분석
- **WebPageTest**: 웹사이트 성능 테스트
- **Bundle Analyzer**: 번들 크기 분석

---

## 📦 개선된 ParallaxImage 컴포넌트

### 버전 1: 기본 개선 (Lazy Loading + 에러 처리)

```jsx
import { useState } from 'react'
import { useParallax } from 'react-scroll-parallax'

const ParallaxImage = ({ 
  src, 
  alt, 
  speed = -20, 
  className = '',
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg"%3E%3C/svg%3E'
}) => {
  const { ref } = useParallax({ speed })
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <div ref={ref} className={`overflow-hidden rounded-lg relative ${className}`}>
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400">Loading...</div>
        </div>
      )}
      {imageError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400">이미지를 불러올 수 없습니다</div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
      />
    </div>
  )
}

export default ParallaxImage
```

### 버전 2: 고급 개선 (IntersectionObserver + 반응형)

```jsx
import { useState, useEffect, useRef } from 'react'
import { useParallax } from 'react-scroll-parallax'

const ParallaxImage = ({ 
  src, 
  alt, 
  speed = -20, 
  className = '',
  srcSet,
  sizes = '100vw'
}) => {
  const { ref } = useParallax({ speed })
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`overflow-hidden rounded-lg relative ${className}`}>
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
      )}
      {imageError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-sm">이미지 로드 실패</div>
        </div>
      )}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      )}
    </div>
  )
}

export default ParallaxImage
```

---

## 🚀 설치 및 사용 방법

### 1. 기본 개선 버전 사용

현재 컴포넌트를 위의 "버전 1" 코드로 교체하면 됩니다.

**장점**:
- ✅ Lazy Loading 지원
- ✅ 에러 처리
- ✅ 로딩 상태 표시
- ✅ 추가 패키지 불필요

### 2. react-lazy-load-image-component 사용

```bash
npm install react-lazy-load-image-component
```

```jsx
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useParallax } from 'react-scroll-parallax'
import 'react-lazy-load-image-component/src/effects/blur.css'

const ParallaxImage = ({ src, alt, speed = -20, className = '' }) => {
  const { ref } = useParallax({ speed })

  return (
    <div ref={ref} className={`overflow-hidden rounded-lg ${className}`}>
      <LazyLoadImage
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        effect="blur"
        placeholderSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E"
      />
    </div>
  )
}
```

### 3. Vite 이미지 최적화 플러그인 추가

```bash
npm install -D vite-plugin-imagemin imagemin
```

`vite.config.js`:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9] },
      svgo: {
        plugins: [{ removeViewBox: false }],
      },
    }),
  ],
})
```

---

## 📊 성능 최적화 팁

### 1. 이미지 포맷 선택
- **WebP**: 최신 브라우저용 (최고 압축률)
- **AVIF**: 차세대 포맷 (더 작은 크기)
- **JPEG**: 호환성 우선
- **PNG**: 투명도 필요 시

### 2. 이미지 크기 최적화
```jsx
// 반응형 이미지 사용
<ParallaxImage
  src="image-800w.jpg"
  srcSet="image-400w.jpg 400w, image-800w.jpg 800w, image-1200w.jpg 1200w"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  alt="Description"
/>
```

### 3. CDN 사용
- Cloudinary, ImageKit 등 CDN 서비스 활용
- 자동 최적화 및 WebP 변환

### 4. 프리로딩
```html
<!-- index.html -->
<link rel="preload" as="image" href="/hero-image.jpg" />
```

---

## 🔍 디버깅 도구

### Chrome DevTools
1. Network 탭: 이미지 로딩 시간 확인
2. Lighthouse: 성능 점수 확인
3. Performance 탭: 렌더링 성능 분석

### React DevTools
- 컴포넌트 렌더링 시간 확인
- Props 변경 추적

---

## 📝 권장 사항

### 현재 프로젝트에 적용하기 좋은 개선:

1. **즉시 적용 가능**: 버전 1 (Lazy Loading + 에러 처리)
2. **추가 패키지 원할 때**: react-lazy-load-image-component
3. **프로덕션 최적화**: Vite 이미지 최적화 플러그인

### 이미지 최적화 체크리스트:
- [ ] 이미지 크기 최적화 (불필요한 픽셀 제거)
- [ ] 적절한 포맷 선택 (WebP 우선)
- [ ] Lazy Loading 적용
- [ ] 반응형 이미지 (srcset) 사용
- [ ] CDN 활용 고려
- [ ] 에러 처리 구현
- [ ] 로딩 상태 표시

---

## 🎯 결론

**가장 간단한 개선 방법**: 현재 컴포넌트에 Lazy Loading과 에러 처리만 추가하는 것만으로도 성능이 크게 향상됩니다.

**추가 패키지 없이 개선된 버전**을 사용하시겠습니까?


