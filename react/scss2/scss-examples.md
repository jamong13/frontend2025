# SCSS 예제 가이드

## 목차
1. [변수 (Variables)](#변수-variables)
2. [중첩 (Nesting)](#중첩-nesting)
3. [믹스인 (Mixins)](#믹스인-mixins)
4. [상속 (Extend/Inheritance)](#상속-extendinheritance)
5. [연산자 (Operators)](#연산자-operators)
6. [함수 (Functions)](#함수-functions)
7. [조건문 & 반복문](#조건문--반복문)
8. [파셜 & 임포트](#파셜--임포트)
9. [React에서 SCSS 사용하기](#react에서-scss-사용하기)

---

## 변수 (Variables)

SCSS에서는 `$` 기호를 사용하여 변수를 선언할 수 있습니다.

```scss
// 색상 변수
$primary-color: #3498db;
$secondary-color: #2ecc71;
$danger-color: #e74c3c;

// 폰트 변수
$font-stack: 'Helvetica Neue', Arial, sans-serif;
$font-size-base: 16px;
$font-size-large: 20px;

// 간격 변수
$spacing-unit: 8px;
$margin-base: $spacing-unit * 2;
$padding-base: $spacing-unit * 1.5;

// 사용 예제
.button {
  background-color: $primary-color;
  font-family: $font-stack;
  font-size: $font-size-base;
  padding: $padding-base;
  margin: $margin-base;
}

.button-danger {
  background-color: $danger-color;
}
```

---

## 중첩 (Nesting)

선택자를 중첩하여 HTML 구조와 유사하게 작성할 수 있습니다.

```scss
.navigation {
  background-color: #333;
  padding: 1rem;
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    
    li {
      display: inline-block;
      margin-right: 1rem;
      
      a {
        color: white;
        text-decoration: none;
        
        &:hover {
          color: #3498db;
          text-decoration: underline;
        }
        
        &:active {
          color: #2ecc71;
        }
      }
    }
  }
  
  // 부모 선택자 참조 (&)
  &.dark-theme {
    background-color: #000;
  }
  
  &__logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
}
```

---

## 믹스인 (Mixins)

재사용 가능한 스타일 블록을 정의할 수 있습니다.

```scss
// 기본 믹스인
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  border-radius: $radius;
}

.box {
  @include border-radius(10px);
}

// 기본값이 있는 믹스인
@mixin box-shadow($x: 0, $y: 2px, $blur: 4px, $color: rgba(0,0,0,0.1)) {
  box-shadow: $x $y $blur $color;
}

.card {
  @include box-shadow();
}

.card-elevated {
  @include box-shadow(0, 4px, 8px, rgba(0,0,0,0.2));
}

// 복잡한 믹스인 예제
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin responsive-font($mobile, $tablet, $desktop) {
  font-size: $mobile;
  
  @media (min-width: 768px) {
    font-size: $tablet;
  }
  
  @media (min-width: 1024px) {
    font-size: $desktop;
  }
}

.container {
  @include flex-center;
}

.heading {
  @include responsive-font(18px, 24px, 32px);
}
```

---

## 상속 (Extend/Inheritance)

`@extend`를 사용하여 다른 선택자의 스타일을 상속받을 수 있습니다.

```scss
// 기본 버튼 스타일
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

// 상속을 통한 확장
.button-primary {
  @extend .button;
  background-color: #3498db;
  color: white;
  
  &:hover {
    background-color: darken(#3498db, 10%);
  }
}

.button-secondary {
  @extend .button;
  background-color: #95a5a6;
  color: white;
  
  &:hover {
    background-color: darken(#95a5a6, 10%);
  }
}

// Placeholder 선택자 (%)
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
}

.message-success {
  @extend %message-shared;
  border-color: #2ecc71;
  background-color: lighten(#2ecc71, 40%);
}

.message-error {
  @extend %message-shared;
  border-color: #e74c3c;
  background-color: lighten(#e74c3c, 40%);
}
```

---

## 연산자 (Operators)

SCSS는 수학 연산자를 지원합니다.

```scss
$base-width: 100px;
$base-height: 60px;

.container {
  width: $base-width * 2; // 200px
  height: $base-height / 2; // 30px
  margin: $base-width + 10px; // 110px
  padding: $base-height - 20px; // 40px
}

// 색상 연산
$primary: #3498db;

.header {
  background-color: $primary;
  border-color: darken($primary, 10%);
}

.lighter-section {
  background-color: lighten($primary, 20%);
}

// 문자열 연산
$font-path: "/fonts";
$font-name: "NotoSans";

@font-face {
  font-family: $font-name;
  src: url($font-path + "/" + $font-name + ".woff");
}

// 퍼센트 계산
.column {
  width: 100% / 3; // 33.333%
}
```

---

## 함수 (Functions)

SCSS에는 내장 함수가 많이 있으며, 커스텀 함수도 만들 수 있습니다.

```scss
// 내장 색상 함수
$base-color: #3498db;

.element {
  color: darken($base-color, 10%);
  background: lighten($base-color, 20%);
  border-color: saturate($base-color, 20%);
  box-shadow: 0 0 10px rgba($base-color, 0.5);
}

// 커스텀 함수
@function calculate-rem($size) {
  $rem-size: $size / 16px;
  @return #{$rem-size}rem;
}

.text {
  font-size: calculate-rem(24px); // 1.5rem
  padding: calculate-rem(16px); // 1rem
}

// 리스트 함수
$colors: red, green, blue;

.first-color {
  color: nth($colors, 1); // red
}

.list-length {
  // length($colors) = 3
  width: length($colors) * 100px; // 300px
}

// 맵 함수
$theme-colors: (
  primary: #3498db,
  success: #2ecc71,
  danger: #e74c3c,
  warning: #f39c12
);

.alert-primary {
  background-color: map-get($theme-colors, primary);
}

@each $name, $color in $theme-colors {
  .text-#{$name} {
    color: $color;
  }
}
```

---

## 조건문 & 반복문

```scss
// @if, @else if, @else
@mixin theme-color($theme) {
  @if $theme == dark {
    background-color: #000;
    color: #fff;
  } @else if $theme == light {
    background-color: #fff;
    color: #000;
  } @else {
    background-color: #ccc;
    color: #333;
  }
}

.dark-mode {
  @include theme-color(dark);
}

// @for 반복문
@for $i from 1 through 5 {
  .col-#{$i} {
    width: 20% * $i;
  }
}

// @each 반복문
$social-colors: (
  facebook: #3b5998,
  twitter: #1da1f2,
  instagram: #e1306c,
  linkedin: #0077b5
);

@each $social, $color in $social-colors {
  .btn-#{$social} {
    background-color: $color;
    
    &:hover {
      background-color: darken($color, 10%);
    }
  }
}

// @while 반복문
$i: 1;
@while $i <= 6 {
  .h#{$i} {
    font-size: 32px - ($i * 4px);
  }
  $i: $i + 1;
}

// 그리드 시스템 예제
@for $i from 1 through 12 {
  .col-#{$i} {
    width: (100% / 12) * $i;
    float: left;
    padding: 0 15px;
  }
}
```

---

## 파셜 & 임포트

파일을 모듈화하여 관리할 수 있습니다.

### _variables.scss
```scss
// 색상
$primary-color: #3498db;
$secondary-color: #2ecc71;
$text-color: #333;
$background-color: #f5f5f5;

// 타이포그래피
$font-family-base: 'Roboto', sans-serif;
$font-size-base: 16px;
$line-height-base: 1.5;

// 간격
$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
$spacing-xl: 32px;
```

### _mixins.scss
```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin transition($property: all, $duration: 0.3s, $timing: ease) {
  transition: $property $duration $timing;
}

@mixin media-breakpoint($breakpoint) {
  @if $breakpoint == mobile {
    @media (max-width: 767px) { @content; }
  } @else if $breakpoint == tablet {
    @media (min-width: 768px) and (max-width: 1023px) { @content; }
  } @else if $breakpoint == desktop {
    @media (min-width: 1024px) { @content; }
  }
}
```

### main.scss
```scss
// 파셜 임포트 (언더스코어는 생략 가능)
@import 'variables';
@import 'mixins';

body {
  font-family: $font-family-base;
  font-size: $font-size-base;
  line-height: $line-height-base;
  color: $text-color;
  background-color: $background-color;
}

.container {
  @include flex-center;
  padding: $spacing-lg;
  
  @include media-breakpoint(mobile) {
    padding: $spacing-sm;
  }
  
  @include media-breakpoint(desktop) {
    padding: $spacing-xl;
  }
}
```

---

## 실전 예제: 카드 컴포넌트

```scss
// 변수 정의
$card-bg: #ffffff;
$card-border: #e0e0e0;
$card-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
$card-padding: 20px;
$card-radius: 8px;

// 믹스인 정의
@mixin card-hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

// 카드 컴포넌트
.card {
  background-color: $card-bg;
  border: 1px solid $card-border;
  border-radius: $card-radius;
  box-shadow: $card-shadow;
  padding: $card-padding;
  transition: all 0.3s ease;
  
  &:hover {
    @include card-hover;
  }
  
  &__header {
    border-bottom: 1px solid $card-border;
    padding-bottom: 12px;
    margin-bottom: 16px;
    
    h3 {
      margin: 0;
      font-size: 1.5rem;
      color: #333;
    }
  }
  
  &__body {
    color: #666;
    line-height: 1.6;
    
    p {
      margin: 0 0 12px 0;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  
  &__footer {
    border-top: 1px solid $card-border;
    padding-top: 12px;
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  // 카드 변형
  &--primary {
    border-color: #3498db;
    
    .card__header {
      background-color: #3498db;
      color: white;
      margin: (-$card-padding) (-$card-padding) 16px;
      padding: $card-padding;
      border-bottom: none;
      border-radius: $card-radius $card-radius 0 0;
    }
  }
  
  &--success {
    border-color: #2ecc71;
    background-color: lighten(#2ecc71, 45%);
  }
}
```

---

## 컴파일 방법

SCSS를 CSS로 컴파일하는 방법:

### Node.js 환경
```bash
npm install -g sass
sass input.scss output.css
sass --watch input.scss:output.css
```

### 프로젝트에 설치
```bash
npm install --save-dev sass
```

### package.json 스크립트
```json
{
  "scripts": {
    "sass": "sass --watch src/scss:dist/css"
  }
}
```

---

## 추가 팁

1. **파일 구조**: 프로젝트가 커지면 파일을 모듈화하세요
   - `_variables.scss` - 변수
   - `_mixins.scss` - 믹스인
   - `_functions.scss` - 함수
   - `_base.scss` - 기본 스타일
   - `components/_button.scss` - 컴포넌트별 스타일

2. **네이밍 규칙**: BEM (Block Element Modifier) 방법론 사용
   - `.block`
   - `.block__element`
   - `.block--modifier`

3. **성능**: `@extend` 남용 주의, 믹스인과 적절히 조합

4. **주석**: 복잡한 로직에는 주석 추가
   ```scss
   // 한 줄 주석
   /* 
    * 여러 줄 주석
    * CSS 출력에 포함됨
    */
   ```

---

## React에서 SCSS 사용하기

React 프로젝트에서 SCSS를 사용하는 다양한 방법을 소개합니다.

### 1. React 프로젝트에 SCSS 설정하기

#### Create React App 사용 시
```bash
# 새 프로젝트 생성
npx create-react-app my-app
cd my-app

# SCSS 패키지 설치
npm install sass
```

#### Vite 사용 시
```bash
# 새 프로젝트 생성
npm create vite@latest my-app -- --template react
cd my-app

# SCSS 패키지 설치
npm install -D sass
```

### 2. 일반 SCSS 파일 사용

가장 기본적인 방법으로, 컴포넌트에 직접 SCSS 파일을 임포트합니다.

#### Button.jsx
```jsx
import React from 'react';
import './Button.scss';

function Button({ children, variant = 'primary', size = 'medium', onClick }) {
  return (
    <button 
      className={`btn btn--${variant} btn--${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
```

#### Button.scss
```scss
// 변수 정의
$btn-primary: #3498db;
$btn-success: #2ecc71;
$btn-danger: #e74c3c;
$btn-warning: #f39c12;

// 믹스인
@mixin btn-size($padding-y, $padding-x, $font-size) {
  padding: $padding-y $padding-x;
  font-size: $font-size;
}

// 버튼 기본 스타일
.btn {
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  // 사이즈 변형
  &--small {
    @include btn-size(6px, 12px, 12px);
  }
  
  &--medium {
    @include btn-size(10px, 20px, 14px);
  }
  
  &--large {
    @include btn-size(14px, 28px, 16px);
  }
  
  // 색상 변형
  &--primary {
    background-color: $btn-primary;
    color: white;
    
    &:hover {
      background-color: darken($btn-primary, 10%);
    }
  }
  
  &--success {
    background-color: $btn-success;
    color: white;
    
    &:hover {
      background-color: darken($btn-success, 10%);
    }
  }
  
  &--danger {
    background-color: $btn-danger;
    color: white;
    
    &:hover {
      background-color: darken($btn-danger, 10%);
    }
  }
  
  &--warning {
    background-color: $btn-warning;
    color: white;
    
    &:hover {
      background-color: darken($btn-warning, 10%);
    }
  }
}
```

### 3. CSS Modules 사용

CSS Modules를 사용하면 스타일이 로컬 스코프로 제한되어 클래스명 충돌을 방지할 수 있습니다.

#### Card.jsx
```jsx
import React from 'react';
import styles from './Card.module.scss';

function Card({ title, description, imageUrl, tags }) {
  return (
    <div className={styles.card}>
      {imageUrl && (
        <div className={styles.cardImage}>
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        {tags && (
          <div className={styles.cardTags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
```

#### Card.module.scss
```scss
$card-bg: #ffffff;
$card-border: #e0e0e0;
$card-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
$primary-color: #3498db;

.card {
  background-color: $card-bg;
  border: 1px solid $card-border;
  border-radius: 8px;
  box-shadow: $card-shadow;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
}

.cardImage {
  width: 100%;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
}

.cardContent {
  padding: 20px;
}

.cardTitle {
  margin: 0 0 12px 0;
  font-size: 1.5rem;
  color: #333;
}

.cardDescription {
  margin: 0 0 16px 0;
  color: #666;
  line-height: 1.6;
}

.cardTags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  background-color: lighten($primary-color, 40%);
  color: darken($primary-color, 10%);
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
}
```

### 4. 전역 스타일 관리

#### styles/variables.scss
```scss
// 색상 팔레트
$color-primary: #3498db;
$color-secondary: #2ecc71;
$color-danger: #e74c3c;
$color-warning: #f39c12;
$color-info: #9b59b6;

$color-text-primary: #333333;
$color-text-secondary: #666666;
$color-text-light: #999999;

$color-bg-primary: #ffffff;
$color-bg-secondary: #f5f5f5;
$color-bg-dark: #2c3e50;

// 타이포그래피
$font-family-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
$font-family-monospace: 'Courier New', monospace;

$font-size-xs: 12px;
$font-size-sm: 14px;
$font-size-base: 16px;
$font-size-lg: 18px;
$font-size-xl: 24px;
$font-size-xxl: 32px;

// 간격
$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
$spacing-xl: 32px;
$spacing-xxl: 48px;

// 반응형 브레이크포인트
$breakpoint-mobile: 480px;
$breakpoint-tablet: 768px;
$breakpoint-desktop: 1024px;
$breakpoint-wide: 1440px;

// 그림자
$shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
$shadow-md: 0 4px 8px rgba(0, 0, 0, 0.1);
$shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.1);
$shadow-xl: 0 12px 24px rgba(0, 0, 0, 0.15);
```

#### styles/mixins.scss
```scss
@import './variables';

// Flexbox 믹스인
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

// 반응형 믹스인
@mixin responsive($breakpoint) {
  @if $breakpoint == mobile {
    @media (max-width: #{$breakpoint-mobile - 1px}) {
      @content;
    }
  } @else if $breakpoint == tablet {
    @media (min-width: $breakpoint-tablet) and (max-width: #{$breakpoint-desktop - 1px}) {
      @content;
    }
  } @else if $breakpoint == desktop {
    @media (min-width: $breakpoint-desktop) {
      @content;
    }
  } @else if $breakpoint == wide {
    @media (min-width: $breakpoint-wide) {
      @content;
    }
  }
}

// 텍스트 생략
@mixin text-ellipsis($lines: 1) {
  @if $lines == 1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  } @else {
    display: -webkit-box;
    -webkit-line-clamp: $lines;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

// 애니메이션
@mixin transition($property: all, $duration: 0.3s, $timing: ease) {
  transition: $property $duration $timing;
}

// 버튼 스타일
@mixin button-variant($bg-color, $text-color: white) {
  background-color: $bg-color;
  color: $text-color;
  
  &:hover {
    background-color: darken($bg-color, 10%);
  }
  
  &:active {
    background-color: darken($bg-color, 15%);
  }
  
  &:disabled {
    background-color: lighten($bg-color, 20%);
    cursor: not-allowed;
    opacity: 0.6;
  }
}
```

#### styles/global.scss
```scss
@import './variables';
@import './mixins';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: $font-family-primary;
  font-size: $font-size-base;
  color: $color-text-primary;
  background-color: $color-bg-secondary;
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: $spacing-md;
  font-weight: 600;
}

h1 { font-size: $font-size-xxl; }
h2 { font-size: $font-size-xl; }
h3 { font-size: $font-size-lg; }

p {
  margin-bottom: $spacing-md;
}

a {
  color: $color-primary;
  text-decoration: none;
  @include transition(color);
  
  &:hover {
    color: darken($color-primary, 15%);
  }
}

img {
  max-width: 100%;
  height: auto;
}
```

### 5. 실전 예제: Todo 앱

#### TodoApp.jsx
```jsx
import React, { useState } from 'react';
import styles from './TodoApp.module.scss';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className={styles.todoApp}>
      <div className={styles.container}>
        <h1 className={styles.title}>할 일 목록</h1>
        
        <div className={styles.inputGroup}>
          <input
            type="text"
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            placeholder="새로운 할 일을 입력하세요..."
          />
          <button className={styles.addButton} onClick={addTodo}>
            추가
          </button>
        </div>

        <div className={styles.filters}>
          <button 
            className={filter === 'all' ? styles.active : ''}
            onClick={() => setFilter('all')}
          >
            전체
          </button>
          <button 
            className={filter === 'active' ? styles.active : ''}
            onClick={() => setFilter('active')}
          >
            진행중
          </button>
          <button 
            className={filter === 'completed' ? styles.active : ''}
            onClick={() => setFilter('completed')}
          >
            완료
          </button>
        </div>

        <ul className={styles.todoList}>
          {filteredTodos.map(todo => (
            <li key={todo.id} className={styles.todoItem}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className={styles.checkbox}
              />
              <span className={todo.completed ? styles.completed : ''}>
                {todo.text}
              </span>
              <button 
                className={styles.deleteButton}
                onClick={() => deleteTodo(todo.id)}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>

        {filteredTodos.length === 0 && (
          <p className={styles.emptyMessage}>할 일이 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default TodoApp;
```

#### TodoApp.module.scss
```scss
$primary-color: #3498db;
$success-color: #2ecc71;
$danger-color: #e74c3c;
$gray-light: #f5f5f5;
$gray-medium: #ddd;
$gray-dark: #666;

@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.todoApp {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px 20px;
  @include flex-center;
}

.container {
  width: 100%;
  max-width: 600px;
  background-color: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.title {
  text-align: center;
  color: #333;
  margin-bottom: 32px;
  font-size: 2rem;
}

.inputGroup {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

.input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid $gray-medium;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: $primary-color;
  }
  
  &::placeholder {
    color: $gray-dark;
  }
}

.addButton {
  padding: 12px 24px;
  background-color: $primary-color;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: darken($primary-color, 10%);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
}

.filters {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  
  button {
    flex: 1;
    padding: 10px;
    background-color: $gray-light;
    border: 2px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: darken($gray-light, 5%);
    }
    
    &.active {
      background-color: $primary-color;
      color: white;
      border-color: darken($primary-color, 10%);
    }
  }
}

.todoList {
  list-style: none;
  margin-bottom: 16px;
}

.todoItem {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background-color: $gray-light;
  border-radius: 8px;
  margin-bottom: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: darken($gray-light, 3%);
    transform: translateX(4px);
  }
  
  span {
    flex: 1;
    font-size: 16px;
    
    &.completed {
      text-decoration: line-through;
      color: $gray-dark;
    }
  }
}

.checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: $success-color;
}

.deleteButton {
  padding: 6px 12px;
  background-color: $danger-color;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: darken($danger-color, 10%);
  }
}

.emptyMessage {
  text-align: center;
  color: $gray-dark;
  font-size: 16px;
  padding: 40px;
}

// 반응형 디자인
@media (max-width: 768px) {
  .container {
    padding: 24px;
  }
  
  .title {
    font-size: 1.5rem;
  }
  
  .inputGroup {
    flex-direction: column;
  }
  
  .addButton {
    width: 100%;
  }
}
```

### 6. 프로젝트 구조 예시

```
src/
├── styles/
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _functions.scss
│   └── global.scss
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   └── Button.module.scss
│   ├── Card/
│   │   ├── Card.jsx
│   │   └── Card.module.scss
│   └── Header/
│       ├── Header.jsx
│       └── Header.module.scss
├── pages/
│   ├── Home/
│   │   ├── Home.jsx
│   │   └── Home.module.scss
│   └── About/
│       ├── About.jsx
│       └── About.module.scss
├── App.jsx
├── App.scss
└── main.jsx
```

### 7. main.jsx에서 전역 스타일 임포트

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

이제 React 프로젝트에서 SCSS를 효과적으로 활용할 수 있습니다!

---

이 가이드가 SCSS 학습에 도움이 되기를 바랍니다!

