import React from "react";
import { useForm } from "react-hook-form";

export default function App1() {
  const {
    register, // 입력 필드 등록
    handleSubmit, // 제출 핸들러
    formState: { errors, touchedFields }, // 에러와 touched 상태
    watch, // 값 감시
  } = useForm({
    mode: "onBlur", // blur 시 검증
  });

  const password = watch("password"); // 비밀번호 확인용

  const onSubmit = (data) => {
    alert(`회원가입 성공!\n\n이름: ${data.name}\n이메일: ${data.email}`);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 이메일 */}
      <div>
        <label>이메일 *</label>
        <input
          {...register("email", {
            required: "이메일을 입력하세요",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "올바른 이메일 형식이 아닙니다",
            },
          })}
          placeholder="example@email.com"
        />
        {errors.email && <p>❌ {errors.email.message}</p>}
        {touchedFields.email && !errors.email && (
          <p>✅ 올바른 이메일 형식입니다</p>
        )}
      </div>

      {/* 비밀번호 */}
      <div>
        <label>비밀번호 *</label>
        <input
          type="password"
          {...register("password", {
            required: "비밀번호를 입력하세요",
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: "비밀번호는 8자 이상, 영문+숫자를 포함해야 합니다",
            },
          })}
          placeholder="8자 이상, 영문+숫자"
        />
        {errors.password && <p>❌ {errors.password.message}</p>}
      </div>

      {/* 비밀번호 확인 */}
      <div>
        <label>비밀번호 확인 *</label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: "비밀번호 확인을 입력하세요",
            validate: (value) =>
              value === password || "비밀번호가 일치하지 않습니다",
          })}
          placeholder="비밀번호 재입력"
        />
        {errors.confirmPassword && <p>❌ {errors.confirmPassword.message}</p>}
      </div>

      {/* 이름 */}
      <div>
        <label>이름 *</label>
        <input
          {...register("name", {
            required: "이름을 입력하세요",
            minLength: {
              value: 2,
              message: "이름은 2자 이상이어야 합니다",
            },
          })}
          placeholder="홍길동"
        />
        {errors.name && <p>❌ {errors.name.message}</p>}
      </div>

      <button type="submit">가입하기</button>
    </form>
  );
}
