function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
var SvgCalendarIcon = React.forwardRef(function (_ref, svgRef) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Calendar Icon' : _ref$title,
      _ref$titleId = _ref.titleId,
      titleId = _ref$titleId === void 0 ? '' : _ref$titleId,
      size = _ref.size,
      color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      props = _objectWithoutProperties(_ref, ["title", "titleId", "size", "color", "width", "height"]);

  titleId = 'gamut-icon-U3ZnQ2FsZW5kYXJJY29u' + titleId;
  return React.createElement("svg", _extends({
    viewBox: "0 0 16 16",
    width: size || width || '16px',
    height: size || height || '16px',
    fill: color || 'currentColor',
    role: "img",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? React.createElement("title", {
    id: titleId
  }, title) : null, React.createElement("path", {
    fill: color || 'currentColor',
    d: "M15 6.8c0 .1-.1.2-.2.2h-3.6c-.1 0-.2-.1-.2-.2V4.2c0-.1.1-.2.2-.2h3.6c.1 0 .2.1.2.2v2.6zm0 4c0 .1-.1.2-.2.2h-3.6c-.1 0-.2-.1-.2-.2V8.2c0-.2.1-.2.2-.2h3.6c.1 0 .2 0 .2.2v2.6zm0 4c0 .1-.1.2-.2.2h-3.6c-.1 0-.2-.1-.2-.2v-2.5c0-.1.1-.2.2-.2h3.6c.1 0 .2.1.2.2v2.5zm-5-8c0 .1-.1.2-.2.2H6.2c-.1 0-.2-.1-.2-.2V4.2c0-.1.1-.2.2-.2h3.6c.1 0 .2.1.2.2v2.6zm0 4c0 .1-.1.2-.2.2H6.2c-.1 0-.2-.1-.2-.2V8.2c0-.2.1-.2.2-.2h3.6c.1 0 .2 0 .2.2v2.6zm0 4c0 .1-.1.2-.2.2H6.2c-.1 0-.2-.1-.2-.2v-2.5c0-.2.1-.3.2-.3h3.6c.1 0 .2.1.2.2v2.6zm-5-8c0 .1-.1.2-.2.2H1.2c-.1 0-.2-.1-.2-.2V4.2c0-.1.1-.2.2-.2h3.6c.1 0 .2.1.2.2v2.6zm0 4c0 .1-.1.2-.2.2H1.2c-.1 0-.2-.1-.2-.2V8.2c0-.2.1-.2.2-.2h3.6c.1 0 .2 0 .2.2v2.6zm0 4c0 .1-.1.2-.2.2H1.2c-.1 0-.2-.1-.2-.2v-2.5c0-.2.1-.3.2-.3h3.6c.1 0 .2.1.2.2v2.6zM15.8 0H.2C.1 0 0 .1 0 .2v15.5c0 .2.1.3.2.3h15.6c.1 0 .2-.1.2-.2V.2c0-.1-.1-.2-.2-.2z"
  }));
});
export default SvgCalendarIcon;