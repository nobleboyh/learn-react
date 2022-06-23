import React from 'react'
import styles from './buttonStyle.module.scss'
import clsx from 'clsx';

const Button = ({children, onClick, primary}) => {
  return (
    <button 
    className={clsx(styles.btn,{
      [styles.primary]: primary
    })} 
    onClick ={onClick}>
      {children}
    </button>
  )
}

export default Button