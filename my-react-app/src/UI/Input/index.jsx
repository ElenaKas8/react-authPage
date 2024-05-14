import { forwardRef } from 'react'
import style from './Input.module.css'


const Input = forwardRef((props, ref) => {

    return (
      <input ref={ref} {...props} className={style.input_elem}/>
    )
})



export default Input