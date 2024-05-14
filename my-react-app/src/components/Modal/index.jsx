
import style from "./Modal.module.css";
import { Routes, Route} from "react-router-dom";

import FormElem from "../FormElem";
const Modal = ({ active, setActive }) => {
  return (
    <div className={`${style.modal} ${active && style.active}`}>
      <div className={`${style.modal_content} ${active && style.active}`}>
        
       
        
        <button onClick={() => setActive(false)}>X</button>
        
        
        
        <Routes>
          <Route
            path="/login"
            element={
              <FormElem
                type="login"
                title="Авторизация"
                link="/registration"
                buttons={{ submit: "Авторизация", redirect: "регистрация" }}
                input={{ email: "Email", password: "Пароль" }}
                infoText="Введите логин и пароль вашего аккаунта"
              />
            }
          />
          <Route
             path='/registration' 
             element={
             <FormElem
                     type='register'
                     title='Регистрация'
                     link='/login'
                     buttons={{submit: 'Зарегистрироваться', redirect: 'Авторизация'}}
                     input={{email: 'Почта', password: 'Пароль', repeatPassword: 'Повторить пароль'}}
                     infoText={'Регистрируясь на сайте, вы соглашетесь с нашими правилами и политикой конфиденциальности'}

                 />}/>
        <Route 
        path="/reset"
        element={
          <FormElem
            type="reset"
            title="Забыли пароль?"
            link="/login"
            buttons={{ submit: "Отправить", redirect: "login" }}
            input={{
              email: "Email",
              infoText:"Ведите email для восстановления пароля"
            }}
        
          />
        }
        />
        </Routes>
      </div>
    </div>
  );
};

export default Modal;
