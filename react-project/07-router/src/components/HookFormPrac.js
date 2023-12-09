import { useForm } from "react-hook-form";

export default function Sumbit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onVaild = (data) => {
    console.log("성공!", data);
  };

  const onInvaild = (err) => {
    console.log("실패!", err);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onVaild, onInvaild)}>
        <input
          type="text"
          placeholder="이름"
          {...register("username", { required: "이름은 필수 항목입니다." })}
        />
        {errors.username?.message}
        <br />
        <input
          type="number"
          placeholder="나이"
          {...register("age", {
            min: { value: 1, message: "0 이상의 숫자만 입력 가능합니다." },
          })}
        />
        {errors.age?.message}

        <button type="submit"> 제출 </button>
      </form>
    </>
  );
}
