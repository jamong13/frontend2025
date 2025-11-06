import React, { useState } from "react";

export default function App() {
  //폼데이터 상태관리 - 사용자 입력값 관리
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  //touched 상태 (사용자가 필드를 건드렸는지)
  // 처음부터 에러를 보여주지 않기 위해
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
    name: false,
  });

  //비밀번호 보기 /숨기기 상태 (보너스)
  const [showPassword, setShowPassword] = useState(false);

  //유효성 검사 함수들
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // username 은 공백이나 @를 포함할 수 없고, 하나이상의 문자가존재
    //domain도 공백과 @를 제외한 문자로 이루어져야 합니다.
    //extention 은 공백과 @를 제외한 문자로 이루어져야 하며, 마침표로 구분
    return emailRegex.test(email);
    //test 정규표현식 메서드 -> 일치하면 true 하지않으면 false
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateName = (name) => {
    return name.trim().length >= 2;
  };

  //에러메세지 생성
  const getErrors = () => {
    const errors = {};
    //빈객체 배열 생성 -> 에러발생시 {} 저장
    if (touched.email && !validateEmail(formData.email)) {
      errors.email = "올바른 이메일 형식이 아닙니다.";
    }

    if (touched.password && !validatePassword(formData.password)) {
      errors.password = "비밀번호는 8자 이상, 영문+숫자를 포함해야 합니다";
    }

    if (
      touched.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      errors.confirmPassword = "비밀번호가 일치하지 않습니다";
    }

    if (touched.name && !validateName(formData.name)) {
      errors.name = "이름은 2자 이상이어야 합니다";
    }
    return errors;
  };
  const errors = getErrors();

  //폼 유효성 검사(모든 필드가 유효한지)
  const isFormValid = () => {
    return (
      validateEmail(formData.email) &&
      validatePassword(formData.password) &&
      formData.password === formData.confirmPassword &&
      validateName(formData.name)
    );
  };

  //입력 변경 핸들러(입력창 여러개 실시간 입력 반영)
  const handleChange = (e) => {
    const { name, value } = e.target;
    //e.target 이벤트가 발생한 HTML 요소
    //name 속성과 value 속성을 구조 분해 할당
    setFormData({
      ...formData,
      // 기존에 있던 데이터 유지하면서 새로운 데이터 입력
      [name]: value,
    });
  };
  // 블러 핸들러 (필드에서 포커스가 벗어날 때)
  // 사용자가 이메일 필드에 입력하고 떠남 -> Touched.email =true
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      alert(
        `회원가입 성공!!\n\n이름: ${formData.name}\n이메일:${formData.email} `
      );
      console.log("회원가입 데이터", formData);
      // 폼 초기화
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
      });
      setTouched({
        email: false,
        password: false,
        confirmPassword: false,
        name: false,
      });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formCard}>
        <h1 style={styles.title}>회원가입</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          {/* 이메일 */}
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              이메일 *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                ...styles.input,
                borderColor: errors.email ? "#dc3545" : "#ddd",
              }}
              placeholder="exemple@email.com"
            />
            {errors.email && <p style={styles.errorText}> ❌ {errors.email}</p>}
            {touched.email && !errors.email && formData.email && (
              <p style={styles.successText}> ✅ 올바른 이메일 형식입니다</p>
            )}
          </div>
          {/* 비밀번호 */}
          <div style={styles.formGroup}>
            <label style={styles.label}>비밀번호 *</label>
            <div style={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  ...styles.input,
                  borderColor: errors.password ? "#dc3545" : "#ddd",
                }}
                placeholder="8자 이상, 영문+숫자"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.toggleButton}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {errors.password && (
              <p style={styles.errorText}>❌ {errors.password}</p>
            )}
            {touched.password && !errors.password && formData.password && (
              <p style={styles.successText}>✅ 안전한 비밀번호입니다</p>
            )}
          </div>
          {/* 비밀번호확인 */}
          <div style={styles.formGroup}>
            <label style={styles.label}>비밀번호 확인 *</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="비밀번호재입력"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                ...styles.input,
                borderColor: errors.password ? "#dc3545" : "#ddd",
              }}
            />
            {errors.confirmPassword && (
              <p style={styles.errorText}>❌ {errors.confirmPassword}</p>
            )}
            {touched.confirmPassword &&
              !errors.confirmPassword &&
              formData.confirmPassword && (
                <p style={styles.successText}>✅ 비밀번호가 일치합니다.</p>
              )}
          </div>
          {/* 이름 */}
          <div style={styles.formGroup}>
            <label style={styles.label}>이름 *</label>
            <input
              type="text"
              name="name"
              placeholder="홍길동"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.name}
              style={{
                ...styles.input,
                borderColor: errors.name ? "#dc3545" : "#ddd",
              }}
            />
            {errors.name && <p style={styles.errorText}>❌ {errors.name}</p>}
            {touched.name && !errors.name && formData.name && (
              <p style={styles.successText}>✅ 유효한 이름입니다</p>
            )}
          </div>
          {/* 제출버튼 */}
          <button
            type="submit"
            disabled={!isFormValid()}
            style={{
              ...styles.submitButton,
              backgroundColor: isFormValid() ? "#28a745" : "#ccc",
              cursor: isFormValid() ? "pointer" : "not-allowed",
            }}
          >
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
  formCard: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "2.5rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "500px",
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "2rem",
    fontSize: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "0.5rem",
    color: "#333",
    fontWeight: "bold",
    fontSize: "0.95rem",
  },
  input: {
    padding: "12px",
    fontSize: "1rem",
    border: "2px solid #ddd",
    borderRadius: "5px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  passwordContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  toggleButton: {
    position: "absolute",
    right: "10px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1.2rem",
  },
  errorText: {
    color: "#dc3545",
    fontSize: "0.875rem",
    marginTop: "0.5rem",
    margin: "0.5rem 0 0 0",
  },
  successText: {
    color: "#28a745",
    fontSize: "0.875rem",
    marginTop: "0.5rem",
    margin: "0.5rem 0 0 0",
  },
  submitButton: {
    padding: "14px",
    fontSize: "1.1rem",
    color: "white",
    border: "none",
    borderRadius: "5px",
    marginTop: "1rem",
    transition: "background-color 0.3s",
    fontWeight: "bold",
  },
};
