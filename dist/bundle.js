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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/classes/Expense.js":
/*!***********************************!*\
  !*** ./src/js/classes/Expense.js ***!
  \***********************************/
/*! exports provided: Expense */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Expense\", function() { return Expense; });\n/* harmony import */ var _Month__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Month */ \"./src/js/classes/Month.js\");\n\r\n\r\nclass Expense extends _Month__WEBPACK_IMPORTED_MODULE_0__[\"Month\"] {\r\n    constructor(expenseName, value, month) {\r\n        super(month);\r\n        this.expenseName = expenseName;\r\n        this.value = this.SetValue(value);\r\n    }\r\n\r\n    SetValue(value) {\r\n        const valueStrArr = value.split(\" \");\r\n        const desiredIndex = valueStrArr[1].replace(/\\./g, \"\");\r\n        const finalValue = desiredIndex.replace(\",\", \".\");\r\n        return parseFloat(finalValue);\r\n    }\r\n\r\n    GetValue() {\r\n        return this.value;\r\n    }\r\n\r\n    GetExpenseName() {\r\n        return this.expenseName;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/classes/Expense.js?");

/***/ }),

/***/ "./src/js/classes/Month.js":
/*!*********************************!*\
  !*** ./src/js/classes/Month.js ***!
  \*********************************/
/*! exports provided: Month */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Month\", function() { return Month; });\n/* harmony import */ var _utils_monthsByName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/monthsByName */ \"./src/js/utils/monthsByName.js\");\n\r\n\r\nclass Month {\r\n    constructor(month) {\r\n        this.month = { \r\n            byNumber: parseInt(month),\r\n            byName: _utils_monthsByName__WEBPACK_IMPORTED_MODULE_0__[\"monthsByName\"][parseInt(month)]\r\n        }\r\n    }\r\n  \r\n    GetMonthByNumber() {\r\n        return this.month.byNumber;\r\n    }\r\n\r\n    GetMonthByName() {\r\n        return this.month.byName;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/classes/Month.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Expense__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Expense */ \"./src/js/classes/Expense.js\");\n/* harmony import */ var _utils_currencyFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/currencyFormatter */ \"./src/js/utils/currencyFormatter.js\");\n\r\n\r\n\r\n/*\r\n* Retorna objeto para popularmos com as despesas que recebemos da tabela\r\n*/\r\nfunction getExpensesObject() {\r\n    const expensesByMonth = {\r\n        \"Janeiro\": 0,\r\n        \"Fevereiro\": 0,\r\n        \"Março\": 0,\r\n        \"Abril\": 0,\r\n        \"Maio\": 0,\r\n        \"Junho\": 0,\r\n        \"Julho\": 0,\r\n        \"Agosto\": 0,\r\n        \"Setembro\": 0,\r\n        \"Outubro\": 0,\r\n        \"Novembro\": 0,\r\n        \"Dezembro\": 0,\r\n    }\r\n    return expensesByMonth;\r\n}\r\n\r\n/*\r\n* Através da Tbody da tabela, cria-se uma HTMLCollection com todas as Rows disponíveis\r\n*/\r\nfunction getTableRows() {\r\n    const tbody = document.getElementById(\"tbody_fatura\");\r\n    const tbodyRows = tbody.getElementsByTagName(\"tr\");\r\n    return tbodyRows;\r\n}\r\n\r\n/*\r\n* Pega as informações da célula da tabela e para cada row instancia-se uma classe Expense com essas informações\r\n* O retorno é um Array<Expense>\r\n*/\r\nfunction getExpenses() {\r\n    const monthlyExpenses = [];\r\n    const tableRows = getTableRows();\r\n    for (let i = 0; i < tableRows.length; i++) {\r\n        let innerData = tableRows[i].cells;\r\n        let dataArray = [];\r\n        for (let j = 0; j < innerData.length; j++) {\r\n            dataArray.push(innerData[j].innerText);\r\n        }\r\n        const monthlyExpense = new _classes_Expense__WEBPACK_IMPORTED_MODULE_0__[\"Expense\"](...dataArray);\r\n        monthlyExpenses.push(monthlyExpense);\r\n    }\r\n    return monthlyExpenses;\r\n}\r\n\r\n/*\r\n* Preenche o objeto expensesByMonth através de uma iteração por todas as instancias de Expense,\r\n* que através do mês pelo nome, os valores são incrementados\r\n*/\r\nfunction sortExpensesByMonth() {\r\n    const allExpenses = getExpenses();\r\n    const expensesByMonth = getExpensesObject();\r\n    \r\n    allExpenses.forEach(expense => {\r\n        expensesByMonth[expense.GetMonthByName()] += expense.value;  \r\n    })\r\n    return expensesByMonth;\r\n}\r\n\r\n/*\r\n* Pega-se a tbody da nova tabela requerida, instancia-se a formatação de moeda e cria-se as novas\r\n* rows para todos os valores que são maiores que zero, fazendo com que na tabela só apareçam os meses que tiveram lançamentos\r\n*/\r\nfunction createMonthlyExpenseTable() {\r\n    const newTableBody = document.getElementById(\"tbody_consolidadoMes\");\r\n    const monthlyExpenses = sortExpensesByMonth();\r\n    let formatter = Object(_utils_currencyFormatter__WEBPACK_IMPORTED_MODULE_1__[\"currencyFormatter\"])();\r\n\r\n    for (let month in monthlyExpenses){\r\n        if (monthlyExpenses[month] > 0) {\r\n            newTableBody.innerHTML += `\r\n                <tr>\r\n                    <td>${month}</td>\r\n                    <td>${formatter.format(monthlyExpenses[month])}</td>\r\n                </tr>\r\n            `\r\n        }\r\n    }\r\n}\r\n\r\n/*\r\n* E por fim, colocamos uma escuta para que quando o DOM terminar de carregar, toda a lógica da nova tabela via JavaScript seja realizada.\r\n*/\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    createMonthlyExpenseTable();\r\n})\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/utils/currencyFormatter.js":
/*!*******************************************!*\
  !*** ./src/js/utils/currencyFormatter.js ***!
  \*******************************************/
/*! exports provided: currencyFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currencyFormatter\", function() { return currencyFormatter; });\nfunction currencyFormatter() {\r\n    return new Intl.NumberFormat([], {\r\n        style: 'currency',\r\n        currency: 'BRL'\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/js/utils/currencyFormatter.js?");

/***/ }),

/***/ "./src/js/utils/monthsByName.js":
/*!**************************************!*\
  !*** ./src/js/utils/monthsByName.js ***!
  \**************************************/
/*! exports provided: monthsByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"monthsByName\", function() { return monthsByName; });\nconst monthsByName = {\r\n    1: \"Janeiro\",\r\n    2: \"Fevereiro\",\r\n    3: \"Março\",\r\n    4: \"Abril\",\r\n    5: \"Maio\",\r\n    6: \"Junho\",\r\n    7: \"Julho\",\r\n    8: \"Agosto\",\r\n    9: \"Setembro\",\r\n    10: \"Outubro\",\r\n    11: \"Novembro\",\r\n    12: \"Dezembro\",\r\n}\n\n//# sourceURL=webpack:///./src/js/utils/monthsByName.js?");

/***/ })

/******/ });