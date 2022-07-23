import React from 'react'
import styles from './center.module.css'
import classNames from "classnames";

const Center = ({
  children,
  vertical = true,
  horizontal = true,
  className,
}:any) => {
  // add one more className 'absolute' to the passed childnode
  const absoluteNode = (child:any) => {
    // const className = classNames("absolute", child.props.className);
    const className = classNames(styles.absolute, child.props.className);
   
    const props = {
      className,
    };
    
     return React.cloneElement(child,props);
    // return cloneElement(child, props);
  };

  // Position all childNodes into the center of the parent node
  const parentClasess = classNames(
    styles.flexwh,
    horizontal ? styles.horizontal : "",
    vertical ? styles.vertical : "",
    className
  );

  return (
    <div className={parentClasess}>
      {typeof children === "string"
        ? children
        : children.length
        ? [...children].map((child) => absoluteNode(child))
        : absoluteNode(children)}
    </div>
  );
};

export default Center;
