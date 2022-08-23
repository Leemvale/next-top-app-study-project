import { PProps } from "./P.props";
import classNames from "classnames";
import styles from './P.module.css';

export const P = ({ size = 'm', children, className, ...pProps }: PProps) => {
  return (
    <p
      className={classNames(styles.p, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}
      {...pProps}
    >
      {children}
    </p>
  );
};