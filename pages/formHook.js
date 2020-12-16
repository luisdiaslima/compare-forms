import React, { useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, watch, errors, handleSubmit } = useForm();
  const watchShowAge = watch("showAge", false); // you can supply default value as second argument
  const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
//   const watchFields = watch(["showAge", "number"]); // you can also target specific fields by their names

   useMemo(() => {
    console.log('(OnChange)requisição na API(OnChange)', watchAllFields)
  },[watchAllFields]);

  const handleOnBlur = useCallback(() => {
      console.log('(OnBlur)rquisição na API(OnBlur)', watchAllFields)
  },[watchAllFields]);

  return (
    <>
    <form>
      <label>Nome</label>
      <input
        type="text"
        name="name"
        onBlur={() => handleOnBlur()}
        ref={register({ required: true, maxLength: 50 })}
      />
      {errors.name && (
        <p>{"The Name Field is Required and must be > 49 characters"}</p>
      )}
      <label>Mostrar idade</label>
      <input type="checkbox" name="showAge" onBlur={() => handleOnBlur()} ref={register} />
      {watchShowAge && (
        <>
          <label>Age</label>
          <input type="number" name="age" onBlur={() => handleOnBlur()} ref={register({ min: 50 })} />
          {errors.name && <p>{"The number must be greater then 49"}</p>}
        </>
      )}
      {/* based on yes selection to display Age */}
    </form>
    <div>
      {watchAllFields.name ? (
        <>
          <label>Watched Fields:</label>nome: {watchAllFields.name}
        </>
      ) : (
        ""
      )}
    </div>
  </>
  );
}