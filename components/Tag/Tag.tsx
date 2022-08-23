import { TagProps } from "./Tag.props";
import classNames from "classnames";
import styles from './Tag.module.css';

export const Tag = ({ size = 'm', color = 'ghost', href, children, className, ...pProps }: TagProps) => {
  return (
    <div
      className={classNames(styles.tag, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.gray]: color === 'gray',
        [styles.green]: color === 'green',
        [styles.primary]: color === 'primary',
      })}
      {...pProps}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};