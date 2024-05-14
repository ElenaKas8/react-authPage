import style from './Button.module.css'
function Button(props){


  const {text, color,...otherProps} = props
  
  return (
    <button {...otherProps} className={`${style.button_elem} ${style[color]}`}>
      {text}
    </button>
  )
}

export default Button