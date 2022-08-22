import { ButtonProps } from "./Button.props";
import classNames from "classnames";
import styles from "./Button.module.css";
import ArrowIcon from './arrow.svg';

export const Button = ({ appearance, arrow = 'none', children, className, ...buttonProps }: ButtonProps): JSX.Element => {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...buttonProps}
    >
      {children}
      {arrow !== 'none' && (
        <span className={classNames(styles.arrow, {
          [styles.arrowDown]: arrow === 'down'
        })}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
 