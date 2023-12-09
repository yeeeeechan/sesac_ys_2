import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onVaild = (data) => {
    console.log("성공!", data);
  };

  const onInvaild = (err) => {
    console.log("실패!", err);
  };

  const genderRegister = register("gender", {
    required: "성별은 필수값입니다.",
  });

  // console.log(watch("ID")); // 실시간으로 인자로 넘겨준 값을 보고 있음

  // register("ID") => { name: id } 객체 형태로 나오기 때문에 스프레드 연산자로 전개시켜줘야 함.

  return (
    <>
      <h4>react hook form 테스트</h4>
      {/* handelSubmit(onVaild[ , onInvaild]) */}
      {/* inVaild : 폼을 정상적으로 제출할 수 있는 상태일 때 실행시킬 함수 */}
      {/* onInvaild : (선택값) 폼을 제출할 수 없을 때 실행시킬 함수 */}
      <form onSubmit={handleSubmit(onVaild, onInvaild)}>
        <input
          type="text"
          placeholder="id를 입력하세요."
          {...register("ID", {
            required: "아이디는 필수값입니다.",
          })}
        />
        {/* errors.ID가 존재한다면 errors.message를 보여주겠다. 존재하지 않으면 undefinde되어 안 보임 */}
        {errors.ID?.message}
        <br />
        <input
          type="text"
          placeholder="이름"
          {...register("username", {
            required: "이름은 필수값입니다.",
            // minLength: 2,
            minLength: {
              value: 2, // 유효성 검사할 최소값 지정
              message: "이름은 두 글자 이상 입력해야 합니다.", // 최소값을 만족하지 못했을 때 발생시키는 오류 메세지
            },
          })}
        />
        {errors.username?.message}
        <br />
        <input
          type="text"
          placeholder="이메일"
          {...register("email", {
            required: "이메일은 필수값입니다.",
            // pattern: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$^/,
            // pattern: {
            //   value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$^/,
            //   message: "올바른 형식의 이메일을 입력해 주세요.", // 정규식을 만족하지 못했을 때 발생시키는 오류 메세지
            // },
            validate: (v) =>
              v.includes("gmail.com") || "gmail로만 가입이 가능합니다.",
            // v는 해당 input에 입력되고 있는 값을 의미
          })}
        />
        {errors.email?.message}
        <br />
        <label htmlFor="gender-man">
          <input type="radio" value="남" id="gender-man" {...genderRegister} />{" "}
          남
        </label>
        <label htmlFor="gender-women">
          <input
            type="radio"
            value="여"
            id="gender-women"
            {...genderRegister}
          />{" "}
          여
        </label>{" "}
        {errors.gender?.message}
        <br />
        <select {...register("option", { required: "옵션은 필수값입니다." })}>
          <option value="">옵션</option>
          <option value="option-1">옵션1</option>
          <option value="option-2">옵션2</option>
          <option value="option-3">옵션3</option>
        </select>
        {errors.option?.message}
        <br />
        <button type="submit">회원가입</button>
      </form>
    </>
  );
}
