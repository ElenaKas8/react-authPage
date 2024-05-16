import { Link } from "react-router-dom";
import Button from "../../UI/Button"; // Путь к кнопке
import style from "../FormElem/FormElem.module.css"; // Путь к стилям
import Input from "../../UI/Input"; // Путь к инпуту
import { useForm } from "react-hook-form";

function FormElem(props) {
  const {
    title,
    link,
    buttons,
    input,
    type,
    infoText
  } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>{title}</h2>

        <p>{input.email}</p>
        <Input {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} />
        {errors.email && <p className={style.warning_text}>Введите свою почту</p>}
        {type !== 'reset' && 
          <>
            <p>{input.password}</p>
            <Input {...register('password', { required: true, minLength: 8, pattern: /^(?=.*[A-Z]).+$/ })} />
            {errors.password && <p className={style.warning_text}>Минимум 8 символов и 1 заглавная буква</p>}
          </>
        }

        {type === 'register' && 
          <>
            <p>{input.repeatPassword}</p>
            <Input {...register('repeatPassword', { required:('Пароли не совпадают') ,
             validate: value => value === watch('password') })} />
            {errors.repeatPassword && <p className={style.warning_text}>Пароли не совпадают</p>}
          </>
        }

        <p className={style.info_text}>{infoText}</p>

        {type === 'login' && (
          <Link to={'/reset'}>
            <p className={style.info_text}>Восстановить доступ</p>
          </Link>
        )}

        <Button text={buttons.submit} color={'yellow'} />
        <Link to={link}>
          <Button text={buttons.redirect} color={'white'} />
        </Link>
      </form>
    </div>
  );
}

export default FormElem;
