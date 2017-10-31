import React from "react";
import isCallable from 'is-callable';

export default (thing, props) => {
  if (React.isValidElement(thing)) {
    return thing;
  } else if (
    React.Component.isPrototypeOf(thing) ||
    React.Component.prototype.isPrototypeOf(thing)
  ) {
    return React.createElement(thing, props);
  } else if (isCallable(thing)) {
    return thing(props);
  } else {
    return thing;
  }
};
