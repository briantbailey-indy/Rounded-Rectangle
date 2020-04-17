var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./RoundedRectangle/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./RoundedRectangle/index.ts":
/*!***********************************!*\
  !*** ./RoundedRectangle/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar RoundedRectangle =\n/** @class */\nfunction () {\n  /**\r\n   * Empty constructor.\r\n   */\n  function RoundedRectangle() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.\r\n   */\n\n\n  RoundedRectangle.prototype.init = function (context, notifyOutputChanged, state, container) {\n    this._transImg = \"transImg\"; // Add control initialization code\n\n    this._container = document.createElement(\"div\");\n    this._container.id = \"rounded\";\n    var imageUrl; // get image resource (see: https://docs.microsoft.com/en-us/powerapps/developer/component-framework/reference/resources/getresource ) \n    // this._imgElement = document.createElement(\"img\");\n    // this._imgElement.id = this._transImg;\n    // this._imgElement.height = Number(context.parameters.height.raw);\n    // context.resources.getResource(this._transImg, this.setImage.bind(this, false, \"jpg\"), this.showError.bind(this));\n    // this._container.appendChild(this._imgElement);\n\n    this.createRectangle(context);\n    container.appendChild(this._container);\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n\n\n  RoundedRectangle.prototype.updateView = function (context) {\n    this.createRectangle(context);\n  };\n\n  RoundedRectangle.prototype.createRectangle = function (context) {\n    // Add code to update control view\n    var width = Number(context.parameters.width.raw) - 2 * Number(context.parameters.borderWidth.raw);\n    var height = Number(context.parameters.height.raw) - 2 * Number(context.parameters.borderWidth.raw); // var imageElement = document.getElementById(\"transImg\");\n    // if (imageElement !== null){\n    // \timageElement.setAttribute(\"height\", height + \"px;\");\n    // \timageElement.setAttribute(\"border\", \"0\");\n    // \tthis._container.replaceChild(imageElement, imageElement);\n    // }\n    //Populate the style property for the DIV\n\n    var style = \"\";\n    style += \"background-color:\" + context.parameters.backgroundColor.raw + \";\";\n    style += \"border-color:\" + context.parameters.borderColor.raw + \";\";\n    style += \"border-style:\" + context.parameters.borderStyle.raw + \";\";\n    style += \"border-width:\" + context.parameters.borderWidth.raw + \"px;\"; //If the the border-width is not set (set to zero) then create the border radius for each corner from the input values\n\n    if (Number(context.parameters.borderRadius.raw) == 0) {\n      style += \"border-radius:\" + context.parameters.borderRadiusTopLeft.raw + \"px \";\n      style += \"\" + context.parameters.borderRadiusTopRight.raw + \"px \";\n      style += \"\" + context.parameters.borderRadiusBottomLeft.raw + \"px \";\n      style += \"\" + context.parameters.borderRadiusBottomRight.raw + \"px;\";\n    } else {\n      style += \"border-radius:\" + context.parameters.borderRadius.raw + \"px;\";\n    }\n\n    style += \"height:\" + height + \"px;\";\n    style += \"width:\" + width + \"px;\";\n\n    this._container.setAttribute(\"style\", style);\n  };\n\n  RoundedRectangle.prototype.setImage = function (shouldUpdateOutput, fileType, fileContent) {\n    var imageUrl = this.generateImageSrcUrl(fileType, fileContent);\n    this._imgElement.src = imageUrl;\n  };\n\n  RoundedRectangle.prototype.generateImageSrcUrl = function (fileType, fileContent) {\n    return \"data&colon;image/\" + fileType + \";base64, \" + fileContent;\n  };\n\n  RoundedRectangle.prototype.showError = function () {};\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n\n\n  RoundedRectangle.prototype.getOutputs = function () {\n    return {};\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n\n\n  RoundedRectangle.prototype.destroy = function () {// Add code to cleanup control if necessary\n  };\n\n  return RoundedRectangle;\n}();\n\nexports.RoundedRectangle = RoundedRectangle;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./RoundedRectangle/index.ts?");

/***/ })

/******/ });
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('brbai.RoundedRectangle', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.RoundedRectangle);
} else {
	var brbai = brbai || {};
	brbai.RoundedRectangle = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.RoundedRectangle;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}