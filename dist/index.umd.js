(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["rollup-build-react"] = {}, global.React));
})(this, (function (exports, React) { 'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$1 = ":root{--defaultColor:#12345678;--aquaColor:aqua;--secondaryColor:#deb887;--errorColor:red}.Button{align-items:center;background-color:#f0f8ff;border-radius:4px;cursor:pointer;display:flex;justify-content:center;min-height:32px;min-width:32px}.Button-primary{background-color:var(--aquaColor)}.Button-default{background-color:var(--defaultColor)}.Button-secondary{background-color:var(--secondaryColor)}.Button-error{background-color:var(--errorColor)}";
  styleInject(css_248z$1);

  var Button = function (_a) {
      var type = _a.type, text = _a.text, onClick = _a.onClick;
      return (React.createElement("button", { type: "button", className: "Button Button-".concat(type), onClick: onClick }, text));
  };

  var css_248z = ".Input{border-radius:5px;height:48px;outline:none;width:120px}.Input-default{border:1px solid #ccc}.Input-error{border:1px solid red}.Input-focus{-webkit-animation:borderBlink 1s step-end infinite;animation:borderBlink 1s step-end infinite;border:1px solid #000}@-webkit-keyframes borderBlink{0%,to{border-color:transparent}50%{border-color:#000}}@keyframes borderBlink{0%,to{border-color:transparent}50%{border-color:#000}}";
  styleInject(css_248z);

  var Input = function (_a) {
      var type = _a.type, onInput = _a.onInput;
      var _b = React.useState(false), focus = _b[0], setFocus = _b[1];
      var _c = React.useState('Input-default'), dtype = _c[0], setDtype = _c[1];
      var inputHandleChange = function (e) {
          setFocus(true);
          onInput(e);
      };
      React.useEffect(function () {
          focus ? setDtype('Input-focus') : setDtype("Input-".concat(type));
      }, [focus]);
      return (React.createElement("input", { type: "text", className: "Input ".concat(dtype), onBlur: function () { return setFocus(false); }, onInput: inputHandleChange }));
  };

  function Example() {
      // 声明一个新的叫做 “count” 的 state 变量
      var _a = React.useState(0), count = _a[0], setCount = _a[1];
      return (React.createElement("div", null,
          React.createElement("p", null,
              "You clicked ",
              count,
              " times"),
          React.createElement("button", { onClick: function () { return setCount(count + 1); } }, "Click me")));
  }

  exports.Button = Button;
  exports.Example = Example;
  exports.Input = Input;

}));
