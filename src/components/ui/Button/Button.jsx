import styles from './Button.module.css';

function Button({ children, type = 'button', onClick, variant = 'solid', fullWidth = false }) {
  const className = [
    styles.button,
    variant === 'ghost' ? styles.ghost : '',
    fullWidth ? styles.full : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
