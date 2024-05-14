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
        <Input {...register('email')} />

        {type !== 'reset' && 
          <>
            <p>{input.password}</p>
            <Input {...register('password')} />
          </>
        }

        {type === 'register' && 
          <>
            <p>{input.repeatPassword}</p>
            <Input {...register('repeatPassword')} />
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