import { ButtonProps } from "./Button.props";
import classNames from "classnames";
import styles from "./Button.module.css";

export const Button = ({ appearance, children }: ButtonProps): JSX.Element => {
  return (
    <button
      className={classNames(styles.button, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
    >
      {children}
    </button>
  );
};
 