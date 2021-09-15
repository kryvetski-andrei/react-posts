import React from "react";
import MyButton from "../components/UI/button/SimpleButton/Button";
import MyInput from "../components/UI/input/MyInput";

const Login = () => {
  return (
    <div>
      <h2>Стр для лгина</h2>
      <form action="">
        <MyInput type = "text" placeholder = "Введите логин"/>
        <MyInput type = "text" placeholder = "Введите логин"/>
        <MyButton>Войти</MyButton>
      </form>
    </div>
  )
}

export default Login;