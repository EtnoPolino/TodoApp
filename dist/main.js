/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/vector.png */ "./src/images/vector.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&family=Sedgwick+Ave&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --black: #13131a;\n    --bg: #010103;\n    --border: .1rem solid rgba(255,255,255,.3);\n    --white : #fff;\n}\n\n*{\n    font-family: 'Sedgwick Ave', cursive;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    text-decoration: none;\n    text-transform: capitalize;\n}\n\nhtml{\n    font-size: 62.5%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    background-color: teal;\n}\n\nbody{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* ------------------------ app ---------------------------------- */\n.app{\n    width: 1200px;\n    height: 90vh;\n    display: flex;\n    background: var(--white);\n    overflow: hidden;\n    border-radius: 30px;\n    box-shadow: 0 20px 20px -10px rgba(0,0,0,.3);\n}\n\n.sidebar{\n    z-index: 1;\n    background: var(--white);\n    width: 20vw;\n    margin: 0;\n    box-shadow: 5px 0 5px rgba(0,0,0,.1);\n}\n\n/* ------------------------ sidebar et container -------------------- */\n.sidebar .projects{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.sidebar .projects .header{\n    background: var(--bg);\n    color:var(--white);\n    text-align: center; \n    padding: 1.6rem;\n    font-size: 1.6rem;\n}\n\n.sidebar .projects .header h1{\n    margin: 1.5rem 0;\n}\n\n.sidebar .projects .content{\n    flex: 1;\n    overflow: auto;\n    padding: 2rem;\n}\n\n.sidebar .projects .content .temporalityProject {\n    border-bottom: 1px solid var(--bg);\n    margin-bottom: 1rem;\n}\n\n\n.all,.today,.week,.month{\n    border-radius: 10px;\n    margin-bottom: 0.5rem;\n    padding: 0.9rem;\n    color: var(--white);\n    cursor: pointer;\n    font-size: 1.6rem;\n    font-weight: 900;\n    background: var(--bg);\n    text-align: center;\n}\n\n.sidebar .projects .content .temporalityProject > div:hover {\n    background: var(--white);\n    color: var(--bg);\n}\n\n.newProjectButton{\n    width: 100%;\n    padding: 0.7rem;\n    cursor: pointer;\n    border-radius: 10px;\n    border: none;\n}\n\n.newProjectButton:hover{\n    color: var(--white);\n    background: var(--bg);\n}\n\n.projectList{\n    padding: 1rem;\n}\n\n.projectList > li{\n    font-size: 1.4rem;\n    list-style: none;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 0.5rem;\n}\n\n.projectName{\n    cursor: pointer;\n    padding: 0.5rem;\n}\n\n.projectName:hover{\n    border-radius: 10px;\n    background: var(--bg);\n    color: var(--white);\n}\n\n\n.sidebar .projects .content .projectList .majProject .editProject:hover{\n    transform: scale(1.01);\n    font-size: 2rem;\n    color: #556b2f;\n}\n\n.sidebar .projects .content .projectList .majProject .deleteProject:hover{\n    transform: scale(1.01);\n    font-size: 2rem;\n    color: #3e0000;\n}\n\n.fa-solid{\n    cursor: pointer;\n    font-size: 1.5rem;\n}\n\n/* ------------------------ container -------------------- */\n.container{\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n\n.container .body{\n    padding: 3.2rem;\n    flex: 1;\n    overflow: auto;\n}\n\n.defaultView{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 50vh;\n    height: 70vh;\n}\n\n\n/* ------------------------ container header -------------------- */\n.container .header{\n    background: var(--bg);\n    color:var(--white);\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    padding: 1.6rem;\n    font-size: 1rem;\n    font-size: 1.6rem;\n}\n\n.container .header h1{\n    margin: 1.5rem 0;\n}\n\n.container .body .projectForm,\n.container .body .projectFormEdit{\n    padding: 1rem;\n    max-width: 500px;\n    margin: auto;\n}\n\n.container .body .projectForm .field,\n.container .body .projectFormEdit .field{\n    display: flex;\n    flex-direction: column;\n    border-radius: 30px;\n    position: relative;\n}\n\n.container .body .projectForm .field input,\n.container .body .projectFormEdit .field input{\n    height: 4rem;\n    border: 1px solid #f1f1f1;\n    font-size: 1.3rem;\n    border-radius: 30px;\n    padding: 1rem 5rem 1rem 1rem;\n}\n\n.container .body .projectForm .field button,\n.container .body .projectFormEdit .field button{\n    margin-top: 1rem;\n    padding: 1rem 1.5rem;\n    color: var(--bg);\n    font-size: 1.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n\n    border-radius: 50%;\n    border: none;\n    position: absolute;\n    top: -1rem;\n    right: 0;\n    font-size: 1.5rem;\n    width: 5rem;\n    height: 4rem;\n}\n\n.container .body .projectForm .field button > span,\n.container .body .projectFormEdit .field button > span{\n    margin-right: 0.5rem;\n}\n\n\n/*----------------------------- ACTIVE PROJECT -------------------------------------*/\n.activeProject{\n    color: var(--white);\n    background: var(--bg);\n    border-radius: 10px;\n}\n\n\n/*----------------------------- container and project clicked -------------------------------------*/\n.container .body form .field{\n    display: flex;\n    position: relative;\n    border-radius: 30px;\n    margin-bottom: 2rem;\n}\n\n.container .body form .field > input{\n    height: 4rem;\n    border: 1px solid #f1f1f1;\n    background: #f9f9f9;\n    border-radius: 30px;\n    flex: 1;\n    padding: 0 4rem 0 1rem;\n}\n\n.container .body form .field > button{\n    position: absolute;\n    top: 0;\n    right: 0;\n    font-size: 1.5rem;\n    width: 4rem;\n    height: 4rem;\n    border-radius: 50%;\n    border: none;\n}\n\n.container .body form .field > button:hover{\n    cursor: pointer;\n}\n\n/*----------------------------- container and todoList -------------------------------------*/\nul{\n    list-style: none;\n}\n\n.container .body .todoLists{\n    padding: 2rem 0;\n}\n\n.container .body .todoLists .todo{\n    margin: auto;\n    border-radius: 20px;\n    border-bottom: 1px solid #f1f1f1;\n    display: flex;\n    position: relative;\n    padding: 1rem;\n    overflow: hidden;\n}\n\n.container .body .todoLists .todo:hover{\n    background-color: #fff;\n    z-index: 3;\n    transform: scale(1.01);\n    transition: all 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1), 0 20px 5px -10px rgba(200, 200, 200, 0.1);\n}\n\n.container .body .todoLists .todo.checked{\n    background: #fefefe;\n    color: #ccc;\n}\n\n.container .body .todoLists .todo.checked .title{\n    text-decoration: line-through;\n}\n\n.container .body .todoLists .todo.checked:hover{\n    transform: none;\n    box-shadow: none;\n}\n\n.container .body .todoLists .todo input[type=\"checkbox\"]{\n    position: absolute;\n    left: -9999px;\n}\n\n.container .body .todoLists .todo input[type=\"checkbox\"] + label{\n    position: relative;\n    min-height: 30px;\n    min-width: 30px;\n    margin-right: 2rem;\n}\n\n.container .body .todoLists .todo input[type=\"checkbox\"] + label::before{\n    position: absolute;\n    content: '';\n    left: 0;\n    top: 0;\n    min-height: 25px;\n    min-width: 25px;\n    border: 2px solid #ccc;\n    border-radius: 50%;\n    z-index: 1;\n    cursor: pointer;\n    box-shadow: inset 0 0 2px rgba(0,0,0,.1);\n}\n\n.container .body .todoLists .todo input[type=\"checkbox\"] + label::after{\n    position: absolute;\n    content: '\\2713\\0020';\n    left: 0;\n    top: 0;\n    z-index: 2;\n    cursor: pointer;\n    border: 2px solid transparent;\n    min-height: 25px;\n    min-width: 25px;\n    font-size: 1rem;\n    line-height: 25px;\n    text-align: center;\n    color: #fff;\n    background: var(--bg);\n    border-radius: 50%;\n    transform: scale(0);\n    transition: all 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\n.container .body .todoLists .todo input[type=\"checkbox\"]:checked + label::after{\n    transform: scale(1);\n}\n\n.container .body .todoLists .todo .details{\n    font-size: 1rem;\n    flex: 1;\n    display: flex;\n    align-items: center;\n}\n\n.container .body .todoLists .todo .preview{\n    flex: 1;\n    font-size: 1.5rem;\n    line-height: 30px;\n}\n\n.container .body .todoLists .todo i{\n    padding: 0.5rem;\n    font-size: 1.5rem;\n}\n\n\n.container .body .todoLists .todo .editTodo:hover{\n    transform: scale(1.01);\n    font-size: 2rem;\n    color: #556b2f;\n}\n\n.container .body .todoLists .todo .deleteTodo:hover{\n    transform: scale(1.01);\n    font-size: 2rem;\n    color: #3e0000;\n}\n\n\n.container .body .todoLists .todo .preview .title{\n    text-transform: capitalize;\n}\n\n.container .body .todoLists .todo .preview .infotags{\n    font-size: 1.2rem;\n}\n\n.container .body .todoLists .todo .preview .infotags .iconCalendar{\n    margin-right: 1rem;\n    font-size: 1.2rem;\n    color: #ccc;\n}\n\n.container .body .todoLists .todo::after{\n    position: absolute;\n    content: '';\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: 5px;\n}\n\n.container .body .todoLists .todo.highPriority::after{\n    /* background: red; */\n    background: var(--afterBack, red);\n}\n\n.container .body .todoLists .todo.mediumPriority::after{\n    /* background: yellow; */\n    background: var(--afterBack, yellow);\n}\n\n\n.container .body .todoLists .todo.lowPriority::after{\n    /* background: green; */\n    background: var(--afterBack, green);\n}\n\n.container .body .todoLists .todo .others{\n    display: flex;\n    gap: 1rem;\n}\n\n\n.container .body .todoLists .todo.highPriority::after input[type=\"checkbox\"]:checked{\n    background: gray;\n}\n\n\n/*------------------ edittask page -----------------------*/\n\n.container .header .backToTaskPage{\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    height: 4rem;\n    width: 4rem;\n    margin-right: 2rem;\n    border: none;\n    color: var(--white);\n    background: var(--bg);\n}\n\n.container .header .backToTaskPage:hover{\n    background: lightgray;\n    color: var(--black);\n}\n\n.container .body .editTodoform .field textarea{\n    flex: 1;\n    border-radius: 30px;\n    border: 1px solid #f1f1f1;\n    padding: 1.5rem;\n    background: #f9f9f9;\n    font-size: 1.5rem;\n}\n\n.container .body .editTodoform .fields{\n    display: flex;\n    gap: 0.2rem;\n}\n\n.container .body .editTodoform .fields .field{\n    flex: 1;\n}\n\n.container .body .editTodoform .fields .field .todoDate,\n.container .body .editTodoform .fields .field .prioritySelection{\n    border-radius: 30px;\n    flex: 1;\n    background: #f9f9f9;\n    padding: 0 3.125rem 0 1rem;\n    border: 1px solid #f9f9f9;\n    font-size: 1.5rem;\n}\n\n.container .body .editTodoform .fieldButton{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.container .body .editTodoform .fieldButton button{\n    padding: 1rem;\n    border-radius: 50%;\n    border: 1px solid #f9f9f9;\n}\n\n.container .body .editTodoform .fieldButton button:hover{\n    transform: scale(1.05);\n    cursor: pointer;\n}\n\n.container .body .editTodoform .fieldButton i{\n    pointer-events: none;\n}", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&family=Sedgwick+Ave&display=swap');\n\n\n:root{\n    --black: #13131a;\n    --bg: #010103;\n    --border: .1rem solid rgba(255,255,255,.3);\n    --white : #fff;\n}\n\n*{\n    font-family: 'Sedgwick Ave', cursive;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    text-decoration: none;\n    text-transform: capitalize;\n}\n\nhtml{\n    font-size: 62.5%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    background-color: teal;\n}\n\nbody{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* ------------------------ app ---------------------------------- */\n.app{\n    width: 1200px;\n    height: 90vh;\n    display: flex;\n    background: var(--white);\n    overflow: hidden;\n    border-radius: 30px;\n    box-shadow: 0 20px 20px -10px rgba(0,0,0,.3);\n}\n\n.sidebar{\n    z-index: 1;\n    background: var(--white);\n    width: 20vw;\n    margin: 0;\n    box-shadow: 5px 0 5px rgba(0,0,0,.1);\n}\n\n/* ------------------------ sidebar et container -------------------- */\n.sidebar .projects{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.sidebar .projects .header{\n    background: var(--bg);\n    color:var(--white);\n    text-align: center; \n    padding: 1.6rem;\n    font-size: 1.6rem;\n}\n\n.sidebar .projects .header h1{\n    margin: 1.5rem 0;\n}\n\n.sidebar .projects .content{\n    flex: 1;\n    overflow: auto;\n    padding: 2rem;\n}\n\n.sidebar .projects .content .temporalityProject {\n    border-bottom: 1px solid var(--bg);\n    margin-bottom: 1rem;\n}\n\n\n.all,.today,.week,.month{\n    border-radius: 10px;\n    margin-bottom: 0.5rem;\n    padding: 0.9rem;\n    color: var(--white);\n    cursor: pointer;\n    font-size: 1.6rem;\n    font-weight: 900;\n    background: var(--bg);\n    text-align: center;\n}\n\n.sidebar .projects .content .temporalityProject > div:hover {\n    background: var(--white);\n    color: var(--bg);\n}\n\n.newProjectButton{\n    width: 100%;\n    padding: 0.7rem;\n    cursor: pointer;\n    border-radius: 10px;\n    border: none;\n}\n\n.newProjectButton:hover{\n    color: var(--white);\n    background: var(--bg);\n}\n\n.projectList{\n    padding: 1rem;\n}\n\n.projectList > li{\n    font-size: 1.4rem;\n    list-style: none;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 0.5rem;\n}\n\n.projectName{\n    cursor: pointer;\n    padding: 0.5rem;\n}\n\n.projectName:hover{\n    border-radius: 10px;\n    background: var(--bg);\n    color: var(--white);\n}\n\n\n.sidebar .projects .content .projectList .majProject .editProject:hover{\n    transform: scale(1.01);\n    font-size: 2rem;\n    color: #556b2f;\n}\n\n.sidebar .projects .content .projectList .majProject .deleteProject:hover{\n    transform: scale(1.01);\n    font-size: 2rem;\n    color: #3e0000;\n}\n\n.fa-solid{\n    cursor: pointer;\n    font-size: 1.5rem;\n}\n\n/* ------------------------ container -------------------- */\n.container{\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n\n.container .body{\n    padding: 3.2rem;\n    flex: 1;\n    overflow: auto;\n}\n\n.defaultView{\n    background-image: url(/src/images/vector.png);\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 50vh;\n    height: 70vh;\n}\n\n\n/* ------------------------ container header -------------------- */\n.container .header{\n    background: var(--bg);\n    color:var(--white);\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    padding: 1.6rem;\n    font-size: 1rem;\n    font-size: 1.6rem;\n}\n\n.container .header h1{\n    margin: 1.5rem 0;\n}\n\n.container .body .projectForm,\n.container .body .projectFormEdit{\n    padding: 1rem;\n    max-width: 500px;\n    margin: auto;\n}\n\n.container .body .projectForm .field,\n.container .body .projectFormEdit .field{\n    display: flex;\n    flex-direction: column;\n    border-radius: 30px;\n    position: relative;\n}\n\n.container .body .projectForm .field input,\n.container .body .projectFormEdit .field input{\n    height: 4rem;\n    border: 1px solid #f1f1f1;\n    font-size: 1.3rem;\n    border-radius: 30px;\n    padding: 1rem 5rem 1rem 1rem;\n}\n\n.container .body .projectForm .field button,\n.container .body .projectFormEdit .field button{\n    margin-top: 1rem;\n    padding: 1rem 1.5rem;\n    color: var(--bg);\n    font-size: 1.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n\n    border-radius: 50%;\n    border: none;\n    position: absolute;\n    top: -1rem;\n    right: 0;\n    font-size: 1.5rem;\n    width: 5rem;\n    height: 4rem;\n}\n\n.container .body .projectForm .field button > span,\n.container .body .projectFormEdit .field button > span{\n    margin-right: 0.5rem;\n}\n\n\n/*----------------------------- ACTIVE PROJECT -------------------------------------*/\n.activeProject{\n    color: var(--white);\n    background: var(--bg);\n    border-radius: 10px;\n}\n\n\n/*----------------------------- container and project clicked -------------------------------------*/\n.container .body form .field{\n    display: flex;\n    position: relative;\n    border-radius: 30px;\n    margin-bottom: 2rem;\n}\n\n.container .body form .field > input{\n    height: 4rem;\n    border: 1px solid #f1f1f1;\n    background: #f9f9f9;\n    border-radius: 30px;\n    flex: 1;\n    padding: 0 4rem 0 1rem;\n}\n\n.container .body form .field > button{\n    position: absolute;\n    top: 0;\n    right: 0;\n    font-size: 1.5rem;\n    width: 4rem;\n    height: 4rem;\n    border-radius: 50%;\n    border: none;\n}\n\n.container .body form .field > button:hover{\n    cursor: pointer;\n}\n\n/*----------------------------- container and todoList -------------------------------------*/\nul{\n    list-style: none;\n}\n\n.container .body .todoLists{\n    padding: 2rem 0;\n}\n\n.container .body .todoLists .todo{\n    margin: auto;\n    border-radius: 20px;\n    border-bottom: 1px solid #f1f1f1;\n    display: flex;\n    position: relative;\n    padding: 1rem;\n    overflow: hidden;\n}\n\n.container .body .todoLists .todo:hover{\n    background-color: #fff;\n    z-index: 3;\n    transform: scale(1.01);\n    transition: all 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1), 0 20px 5px -10px rgba(200, 200, 200, 0.1);\n}\n\n.container .body .todoLists .todo.checked{\n    background: #fefefe;\n    color: #ccc;\n}\n\n.container .body .todoLists .todo.checked .title{\n    text-decoration: line-through;\n}\n\n.container .body .todoLists .todo.checked:hover{\n    transform: none;\n    box-shadow: none;\n}\n\n.container .body .todoLists .todo input[type=\"checkbox\"]{\n    position: absolute;\n    left: -9999px;\n}\n\n.container .body .todoLists .todo input[type=\"checkbox\"] + label{\n    position: relative;\n    min-height: 30px;\n    min-width: 30px;\n    margin-right: 2rem;\n}\n\n.container .body .todoLists .todo input[type=\"checkbox\"] + label::before{\n    position: absolute;\n    content: '';\n    left: 0;\n    top: 0;\n    min-height: 25px;\n    min-width: 25px;\n    border: 2px solid #ccc;\n    border-radius: 50%;\n    z-index: 1;\n    cursor: pointer;\n    box-shadow: inset 0 0 2px rgba(0,0,0,.1);\n}\n\n.container .body .todoLists .todo input[type=\"checkbox\"] + label::after{\n    position: absolute;\n    content: '\\2713\\0020';\n    left: 0;\n    top: 0;\n    z-index: 2;\n    cursor: pointer;\n    border: 2px solid transparent;\n    min-height: 25px;\n    min-width: 25px;\n    font-size: 1rem;\n    line-height: 25px;\n    text-align: center;\n    color: #fff;\n    background: var(--bg);\n    border-radius: 50%;\n    transform: scale(0);\n    transition: all 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\n.container .body .todoLists .todo input[type=\"checkbox\"]:checked + label::after{\n    transform: scale(1);\n}\n\n.container .body .todoLists .todo .details{\n    font-size: 1rem;\n    flex: 1;\n    display: flex;\n    align-items: center;\n}\n\n.container .body .todoLists .todo .preview{\n    flex: 1;\n    font-size: 1.5rem;\n    line-height: 30px;\n}\n\n.container .body .todoLists .todo i{\n    padding: 0.5rem;\n    font-size: 1.5rem;\n}\n\n\n.container .body .todoLists .todo .editTodo:hover{\n    transform: scale(1.01);\n    font-size: 2rem;\n    color: #556b2f;\n}\n\n.container .body .todoLists .todo .deleteTodo:hover{\n    transform: scale(1.01);\n    font-size: 2rem;\n    color: #3e0000;\n}\n\n\n.container .body .todoLists .todo .preview .title{\n    text-transform: capitalize;\n}\n\n.container .body .todoLists .todo .preview .infotags{\n    font-size: 1.2rem;\n}\n\n.container .body .todoLists .todo .preview .infotags .iconCalendar{\n    margin-right: 1rem;\n    font-size: 1.2rem;\n    color: #ccc;\n}\n\n.container .body .todoLists .todo::after{\n    position: absolute;\n    content: '';\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: 5px;\n}\n\n.container .body .todoLists .todo.highPriority::after{\n    /* background: red; */\n    background: var(--afterBack, red);\n}\n\n.container .body .todoLists .todo.mediumPriority::after{\n    /* background: yellow; */\n    background: var(--afterBack, yellow);\n}\n\n\n.container .body .todoLists .todo.lowPriority::after{\n    /* background: green; */\n    background: var(--afterBack, green);\n}\n\n.container .body .todoLists .todo .others{\n    display: flex;\n    gap: 1rem;\n}\n\n\n.container .body .todoLists .todo.highPriority::after input[type=\"checkbox\"]:checked{\n    background: gray;\n}\n\n\n/*------------------ edittask page -----------------------*/\n\n.container .header .backToTaskPage{\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    height: 4rem;\n    width: 4rem;\n    margin-right: 2rem;\n    border: none;\n    color: var(--white);\n    background: var(--bg);\n}\n\n.container .header .backToTaskPage:hover{\n    background: lightgray;\n    color: var(--black);\n}\n\n.container .body .editTodoform .field textarea{\n    flex: 1;\n    border-radius: 30px;\n    border: 1px solid #f1f1f1;\n    padding: 1.5rem;\n    background: #f9f9f9;\n    font-size: 1.5rem;\n}\n\n.container .body .editTodoform .fields{\n    display: flex;\n    gap: 0.2rem;\n}\n\n.container .body .editTodoform .fields .field{\n    flex: 1;\n}\n\n.container .body .editTodoform .fields .field .todoDate,\n.container .body .editTodoform .fields .field .prioritySelection{\n    border-radius: 30px;\n    flex: 1;\n    background: #f9f9f9;\n    padding: 0 3.125rem 0 1rem;\n    border: 1px solid #f9f9f9;\n    font-size: 1.5rem;\n}\n\n.container .body .editTodoform .fieldButton{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.container .body .editTodoform .fieldButton button{\n    padding: 1rem;\n    border-radius: 50%;\n    border: 1px solid #f9f9f9;\n}\n\n.container .body .editTodoform .fieldButton button:hover{\n    transform: scale(1.05);\n    cursor: pointer;\n}\n\n.container .body .editTodoform .fieldButton i{\n    pointer-events: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/UIDesign.js":
/*!*********************************!*\
  !*** ./src/scripts/UIDesign.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIDesign": () => (/* binding */ UIDesign),
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "editProject": () => (/* binding */ editProject),
/* harmony export */   "renderApp": () => (/* binding */ renderApp),
/* harmony export */   "renderView": () => (/* binding */ renderView),
/* harmony export */   "selectEditTodo": () => (/* binding */ selectEditTodo),
/* harmony export */   "selectedProject": () => (/* binding */ selectedProject),
/* harmony export */   "unselecteAllProject": () => (/* binding */ unselecteAllProject),
/* harmony export */   "updateEditedProject": () => (/* binding */ updateEditedProject)
/* harmony export */ });
/* harmony import */ var _scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/elementCreation.js */ "./src/scripts/elementCreation.js");
/* harmony import */ var _images_vector_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/vector.png */ "./src/images/vector.png");



class UIDesign {
    constructor(){
        this.view = [];
        this.projectNames = [];      

        this.h1 = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', {}, 'todo app');
        this.header = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'header'}, this.h1);

        this.buttonNewProject = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {class:'newProjectButton'}, 'create project');
        this.projectList = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', {class:'projectList'}, '');

        this.content = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'content'}, this.buttonNewProject, this.projectList);
        this.projects = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'projects'}, this.header, this.content);
        this.sidebar = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'sidebar'}, this.projects);

        this.container = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'container'}, '');

        this.app = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'app'}, this.sidebar, this.container);
        
        this.showAllView();
    }

    showAllView(){
        this.view = [
            {
                name:'welcomeBackground',
                value: this.showWelcomeView(),
            },
            {
                name:'createProjectView',
                value: this.showNewProjectView(),
            },
            {
                name:'projectSelected',
                value: '',
            },
            {
                name:'editTodoView',
                value:'',
            }
        ];
    }

    showWelcomeView(){
        const h1 = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', {}, 'welcome to your todo app');
        const divDefaultView = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'defaultView'}, '');
        const bodyContainder = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'body'}, h1, divDefaultView);

        return bodyContainder;
    }

    showNewProjectView(){
        const h1 = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', {class:'title'}, 'create a new project');
        const header= (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'header'}, h1);
        this.inputProject = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {type:'text', class:'inputProject', id:'inputProject', placeholder:'project name', name:'project-name', required:'required'}, '');
    
        const logoAdd = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('i', {class:'fa-solid fa-plus'}, '');
        const span = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {}, 'Add')
        this.buttonAdd = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {type:'submit', class:'addNewProject'}, span, logoAdd);
    
        const divField = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'field'}, this.inputProject, this.buttonAdd);
    
        this.form = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('form', {class:'projectForm'}, divField);
        const bodyContainder = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'body'}, this.form);
    
        return [header, bodyContainder]; 
    }

    showProjectEditView(){
        const h1 = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', {class:'title'}, `Edit project ${this.projectToEdit.getProjectName()}`);
        const header= (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'header'}, h1);
        this.inputProject = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {type:'text', class:'inputProject', id:'inputProject', placeholder:'project name', name:'project-name', value:`${this.projectToEdit.getProjectName()}`}, `${this.projectToEdit.getProjectName()}`);

        const logoEdit = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('i', {class:'fa-solid fa-pen-to-square'}, '');
        const span = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {}, '');
        this.buttonEdit = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {type:'submit', class:'addNewProject'}, span, logoEdit);

        const divField = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'field'}, this.inputProject, this.buttonEdit);

        this.formEdit = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('form', {class:'projectFormEdit', id:`${this.projectToEdit.getIdProject()}`}, divField);
        const bodyContainder = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'body'}, this.formEdit);

        return [header, bodyContainder];
    }

    showProjectSelectedView(){
        this.h1 = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', {class:'title'}, `${this.projectSelected.getProjectName()}`);
        const header= (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'header'}, this.h1);

        this.inputTask = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {type:'text',id:'', name:'', class:'task', placeholder:'enter your task', required:'required'}, '');
        const icon = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('i', {class:'fa-solid fa-plus'}, '');
        this.buttonAddTast = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {type:'submit'}, icon);
        const divField = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'field'}, this.inputTask, this.buttonAddTast)
        this.formTask = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('form', {class:'formTask'}, divField);

        this.ulTodo = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', {class:'todoLists'}, '');


        const bodyContainder = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'body'}, this.formTask, this.ulTodo);

        return [header, bodyContainder];
    }

    showEditTodoView(){
        const iconBack = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('i', {class:'fa-solid fa-chevron-left'}, '');
        this.backButton = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'backToTaskPage'}, iconBack);
        const h1 = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', {class:'title'}, this.editTodoSelected.getTodoName());
        const header = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'header'}, this.backButton, h1);

        this.inputEditText = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {type:'text', name:'todoTitle', id:'todoTitle', class:'input', placeholder:'Enter Title', value:`${this.editTodoSelected.getTodoName()}`, required:'required'}, '');
        const fieldInput = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'field'}, this.inputEditText);
        this.textArea = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('textarea', {name:'taskDescription', id:'taskDescription', row:'15', placeholder:'enter tasks descriptions', value:`${this.editTodoSelected.getDescription()}`}, `${this.editTodoSelected.getDescription()}`);
        const fieldTextArea = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'field'}, this.textArea);

        this.inputDate = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {type:'date', class:'todoDate', name:'todoDate', required:'required', value:`${this.editTodoSelected.getDate()}`}, '');
        const fieldDate = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'field'}, this.inputDate);
        this.low = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('option', {value:'low'}, 'Low');
        this.medium = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('option', {value:'medium'}, 'Medium');
        this.high = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('option', {value:'high'}, 'High');
        this.prioritySelection = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('select', {name:'prioritySelection', class:'prioritySelection'}, this.low, this.medium, this.high); 
        
        _getPriorityForEdit(this.editTodoSelected.getPriority(), this.low, this.medium, this.high);

        const fieldTodoPriority = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'field'}, this.prioritySelection);
        const fieldDateSelect = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'fields'}, fieldDate, fieldTodoPriority);

        const iconEdit = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('i', {class:'fa-solid fa-pen-to-square editTodo'}, '');

        this.buttonValidEdit = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {type:'submit', class:'validateEditTodo'}, iconEdit);
        const fieldButton = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'fieldButton'}, this.buttonValidEdit);

        this.formEdit = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('form', {class:'editTodoform', id:`${this.editTodoSelected.getIdTodo()}`}, fieldInput, fieldTextArea, fieldDateSelect, fieldButton);
        const bodyContainder = (0,_scripts_elementCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'body'}, this.formEdit);

        return [header, bodyContainder];
    }

} /* end of class */

/** ----------------------------------------- functions -------------------------------------------------------- */

function renderApp(arg){
    return document.body.append(arg.app);
}

function renderView (arg, viewType){
    arg.container.innerHTML = '';

    const page = arg.view.find( v => {
        return v.name === viewType 
    });

    if(!page){
        return;
    }
    
    if(Array.isArray(page.value)){
        page.value.forEach( p =>{
            arg.container.appendChild(p)
        });
    }else{
        arg.container.appendChild(page.value);
    }
}

function addProject(arg, project){
    const text = `
                <li class="project">
                    <span class="projectName" id="${project.getIdProject()}">${project.getProjectName()}</span>
                    <div class="majProject">
                        <i class="fa-solid fa-pen-to-square editProject" id="${project.getIdProject()}"></i>
                        <i class="fa-solid fa-trash deleteProject" id="${project.getIdProject()}"></i>
                    </div>                
                </li> `;
        
    if(project.getProjectName()){
        if(!arg.projectNames.includes(`${project.getProjectName().toLowerCase()}`)){
            const position = 'beforeend';
            arg.projectList.insertAdjacentHTML(position, text);
            arg.projectNames.push(project.getProjectName().toLowerCase());
        }
    }
    arg.inputProject.value = '';
}

function editProject(arg, project){
    arg.projectToEdit = project;

    const views = arg.showProjectEditView();

    arg.container.innerHTML = '';

    views.forEach(view => {
        arg.container.append(view);
    })
}

function updateEditedProject(arg, project){
    const listProject = document.querySelectorAll('li');
    listProject.forEach(element => {
        if(element.firstElementChild.id === project.getIdProject()){
            if(!arg.projectNames.includes(`${project.getProjectName()}`)){
                element.firstElementChild.innerText = project.getProjectName();
            }
        }    
    });

    arg.inputProject.value = '';
}

function addTask(arg, todo){
    const text = `
            <li class="todo" data-id = "${todo.getIdTodo()}">
                        <input type="checkbox" name="todoToCheck" class="input" id="${todo.getIdTodo()}">
                        <label for="${todo.getIdTodo()}" class="todoToCheck" data-id ="${todo.getIdTodo()}"></label>
                        <div class="details">
                            <div class="preview">
                                <div class="title">${todo.getTodoName()}</div>
                                <div class="infotags">
                                    <span class="dateTag">
                                        <span class="iconCalendar"><i class="fa fa-calendar"></i></span>
                                        <span>${todo.getDate()}</span>
                                    </span>
                                </div>
                            </div>
                            <div class="others">
                                <i class="fa-solid fa-pen-to-square editTodo" id="${todo.getIdTodo()}"></i>
                                <i class="fa-solid fa-trash deleteTodo" id="${todo.getIdTodo()}"></i>
                            </div>
                        </div>
                    </li>
                `;

        const position = 'beforeend';
        arg.ulTodo.insertAdjacentHTML(position, text);    
        arg.inputTask.value = '';

        _getColorPriority(todo);
        _getChecked(todo);
}

function deleteTask(arg, todoElement){
    arg.ulTodo.removeChild(todoElement);
}

function deleteProject(arg, projectElement){    
    arg.projectList.removeChild(projectElement);
    const isActiveHere = projectElement.firstElementChild.classList.contains('activeProject');
    const spanTextContent = projectElement.firstElementChild.innerText.toLowerCase();
    
    if(isActiveHere){
        arg.container.innerHTML = '';
        renderView(arg, 'welcomeBackground');
    }
    
    arg.projectNames = arg.projectNames.filter(name => name !== spanTextContent);
}

function unselecteAllProject(){
    const elements =  document.querySelectorAll(".projectList .project .projectName");
    elements.forEach((e) => {
         e.classList.remove('activeProject');
    });
}

function selectedProject(arg, projectSelected){
    arg.projectSelected = projectSelected;
    unselecteAllProject();
    const selectedProjectElem = document.getElementById(`${projectSelected.getIdProject()}`);
    selectedProjectElem.classList.add('activeProject');
    arg.view[2].value = arg.showProjectSelectedView();  
}

function selectEditTodo(arg, todoSelected){
    arg.editTodoSelected = todoSelected;
    arg.view[3].value = arg.showEditTodoView();
}

function _getPriorityForEdit(property, ...element){
    const elements = [...element];

    for(let key in elements){
        elements[key].removeAttribute('selected');
        if(property === elements[key].value){
            elements[key].setAttribute('selected', 'true');
        }
    }
}

function _getColorPriority(todo){
    const priority = todo.getPriority();
        let color = document.querySelector(`[data-id="${todo.getIdTodo()}"]`);
        switch(priority){
            case 'high' :
                color.classList.add('highPriority');
                break;
            case 'medium' :
                color.classList.add('mediumPriority');
                break;
            case 'low' :
                color.classList.add('lowPriority');
                break;
        } 
}

function _getChecked(todo){
    const labelInput = document.getElementById(`${todo.getIdTodo()}`);
    const elementLi = labelInput.parentNode;

    if(todo.getChecked() === true){
        labelInput.setAttribute('checked', true);
        labelInput.classList.add('checked');
        elementLi.classList.add('checked');
        elementLi.style.setProperty('--afterBack', '#ccc');
    }
}



/***/ }),

/***/ "./src/scripts/elementCreation.js":
/*!****************************************!*\
  !*** ./src/scripts/elementCreation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
const createElement = (type, attributes, ...children) => {
    const element = document.createElement(type);

    for (let key in attributes) {
        element.setAttribute(key, attributes[key])
    }
    
    children.forEach(child => {
        if(typeof child === 'string'){
            element.appendChild(document.createTextNode(child));
        }else{
            element.appendChild(child);
        }
    });

    return element;
}



/***/ }),

/***/ "./src/scripts/middleManagement.js":
/*!*****************************************!*\
  !*** ./src/scripts/middleManagement.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiddleManagement": () => (/* binding */ MiddleManagement)
/* harmony export */ });
class MiddleManagement{
    constructor(){
       this.projects = [];
       this.projectNames = [];
    }


/* ---------------------------------------------- Local Storage ------------------------------------------------------ */
/*
    storeIntoLocalStorage = () => {
        const datas = [];
        this.projects.forEach(project => {
            datas.push({
                idProject : project.getIdProject(),
                nameProject : project.getProjectName(),         
                todos : project.getDatasTodos()
            });
        });

        localStorage.setItem('projects', JSON.stringify(datas));
    }
*/
/* ----------------------------------------------    project       --------------------------------------------------- */

    addProjectName(project){
       this.projectNames.push(project.getProjectName().toLowerCase());
    }

    addProject(project){
        if(!this.projectNames.includes(`${project.getProjectName().toLowerCase()}`)){
            this.projects.push(project);
            this.addProjectName(project);
        }    
    }

    getSelectedProjectT(){
        return this.selectedProject;
    }

    getSelectedProject(idProject){
        const idPro = this.projects.filter(project => idProject === project.getIdProject());
        return idPro[0];
    }

    setSelectedProject(project){
        this.selectedProject = project;  
    }

    deleteProject(idProject){
        this.projects = this.projects.filter(project => idProject !== project.getIdProject() )
    }

    deleteProjectNames(project){
        const nameProject = project.getProjectName().toLowerCase();
        this.projectNames = this.projectNames.filter(name => name !== nameProject);
    }

    editProject(idClicked, newName){
        const projectNameToEdit = this.getSelectedProject(idClicked);
        if(!this.projectNames.includes(`${newName}`)){
            projectNameToEdit.setProjectName(newName);
        }       
    }



/* ------------------------------------------      todo         ----------------------------------------------------- */

    addTodo(todo){
        if(this.selectedProject){
            const projetSelected = this.projects.filter( project => this.selectedProject.getIdProject() === project.getIdProject() )[0];
            projetSelected.addTodo(todo);
            this.setSelectedProject(projetSelected);
            return true;
        }
    }

    getTodo(idTodo){
        if(this.selectedProject){
            return this.selectedProject.todos.filter( element => idTodo === element.getIdTodo())[0];
        } 
    }
   
    setSelectedTodo(todo){
        this.selectedTodo = todo;
    }

    editTodo(id, ...data){
        const todoToEdit = this.selectedProject.todos.filter( todo => id === todo.getIdTodo())[0];
        const table = [...data];
        todoToEdit.edit(table);
        this.setSelectedProject(this.selectedProject);
    }

    deleteTodo(idTodo){
        this.selectedProject.todos = this.selectedProject.todos.filter(todo => idTodo !== todo.getIdTodo());
        this.setSelectedProject(this.selectedProject);
        return this.selectedProject.todos;
    }

}



/***/ }),

/***/ "./src/scripts/project.js":
/*!********************************!*\
  !*** ./src/scripts/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
class Project{
    constructor(projectName){
        this.projectName = projectName
        this.idProject = Date.now().toString();
        this.todos = []
    }

    getProjectName(){
        return this.projectName;
    } 

    getIdProject(){
        return this.idProject;
    }

    setProjectName(projectName){
        this.projectName = projectName
    }

    addTodo(todo){
        this.todos.push(todo);
    }

    getTodos(){
        return this.todos; /* no need to create this function since you can acces to it directly */
    }

    getDatasTodos(){ /* all todos */
        const datas = [];
        this.todos.forEach(element => {
            datas.push(element.getDatasTodo());
        });

        return datas;
    }

}



/***/ }),

/***/ "./src/scripts/todo.js":
/*!*****************************!*\
  !*** ./src/scripts/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
class Todo{
    constructor(todoName){
        this.todoName = todoName;
        this.description = '';
        this.date = '';
        this.priority = '';
        this.checked = false;
        this.idTodo = Date.now().toString();
    }

    getTodoName(){
        return this.todoName;
    }

    getIdTodo(){
        return this.idTodo;
    }

    getDate(){
        return this.date;
    }

    getPriority(){
        return this.priority;
    }

    getDescription(){
        return this.description;
    }

    getChecked(){
        return this.checked;
    }

    setChecked(check){
        this.checked = check;
    }

    edit([newName, newDescription, newDate, newPriority]){
        this.todoName = newName;
        this.description = newDescription;
        this.date = newDate;
        this.priority = newPriority;
    }

    getDatasTodo = () => ({
        idTodo : this.getIdTodo(),
        todoName : this.getTodoName(),
        description : this.getDescription(),
        date : this.getDate(),
        priority : this.getPriority(),
        checked : this.getChecked(),
    });

}



/***/ }),

/***/ "./src/images/vector.png":
/*!*******************************!*\
  !*** ./src/images/vector.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "adf769abfc3baae47894.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_scripts_UIDesign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/scripts/UIDesign.js */ "./src/scripts/UIDesign.js");
/* harmony import */ var _src_scripts_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/scripts/project.js */ "./src/scripts/project.js");
/* harmony import */ var _src_scripts_todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/scripts/todo.js */ "./src/scripts/todo.js");
/* harmony import */ var _src_scripts_middleManagement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/scripts/middleManagement */ "./src/scripts/middleManagement.js");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");






const ui = new _src_scripts_UIDesign_js__WEBPACK_IMPORTED_MODULE_0__.UIDesign();
const management = new _src_scripts_middleManagement__WEBPACK_IMPORTED_MODULE_3__.MiddleManagement();

(0,_src_scripts_UIDesign_js__WEBPACK_IMPORTED_MODULE_0__.renderApp)(ui);
(0,_src_scripts_UIDesign_js__WEBPACK_IMPORTED_MODULE_0__.renderView)(ui, 'welcomeBackground');



/*------------ Local storage ----------------------*/
/*
if(localStorage.getItem('projects')){
    const Ldatas = JSON.parse(localStorage.getItem('projects'));
    
    Ldatas.forEach( data => {
        const project = new Project(`${data.nameProject}`);
        data.todos.forEach( todo => {
            const currentTodo = new Todo(`${todo.todoName}`);
            const table = [currentTodo.nameTodo, currentTodo.description, currentTodo.date, currentTodo.priority];
            currentTodo.edit(table);
            project.addTodo(currentTodo);
        });
        management.addProject(project);
        addProject(ui, project);
    });
} */
/*-------------------------------------------------*/


ui.buttonNewProject.addEventListener('click', () =>{
    (0,_src_scripts_UIDesign_js__WEBPACK_IMPORTED_MODULE_0__.unselecteAllProject)();
    (0,_src_scripts_UIDesign_js__WEBPACK_IMPORTED_MODULE_0__.renderView)(ui, 'createProjectView');
});


ui.form.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    const newProject = new _src_scripts_project_js__WEBPACK_IMPORTED_MODULE_1__.Project(`${ui.inputProject.value}`);
    (0,_src_scripts_UIDesign_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(ui, newProject);
    management.addProject(newProject);
    management.storeIntoLocalStorage();
});


ui.projectList.addEventListener('click', (e) => {
    if(e.target.classList.contains('projectName')){
        const projectClicked = management.getSelectedProject(e.target.id);
        if(projectClicked){
            management.setSelectedProject(projectClicked);
            (0,_src_scripts_UIDesign_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject)(ui, projectClicked);
            (0,_src_scripts_UIDesign_js__WEBPACK_IMPORTED_MODULE_0__.renderView)(ui, 'projectSelected');      
        }
    }
});


ui.app.addEventListener('submit', (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    if(evt.target.classList.contains('formTask')){
        const newTodo = new _src_scripts_todo_js__WEBPACK_IMPORTED_MODULE_2__.Todo(`${ui.inputTask.value}`);
        const added = management.addTodo(newTodo);
        (0,_src_scripts_UIDesign_js__WEBPACK_IMPORTED_MODULE_0__.addTask)(ui, newTodo);
        management.storeIntoLocalStorage(); 
    }

    if(evt.target.classList.contains('editTodoform')){
        const todoName = ui.inputEditText.value;
        const description = ui.textArea.value;
        const date = ui.inputDate.value;
        const priority = ui.prioritySelection.value.toLowerCase();
  
        management.editTodo(evt.target.id, todoName, description, date, priority)
        const project = management.getSelectedProjectT();
        (0,_src_scripts_UIDesign_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject)(ui, project);
        (0,_src_scripts_UIDesign_js__WEBPACK_IMPORTED_MODULE_0__.renderView)(ui, 'projectSelected');
        project.todos.forEach(todo => {
            (0,_src_scripts_UIDesign_js__WEBPACK_IMPORTED_MODULE_0__.addTask)(ui, todo);
        });   
        management.storeIntoLocalStorage();
    }

    if(evt.target.classList.contains('projectFormEdit')){
        const idClicked = evt.target.id;
        const newName = ui.inputProject.value
        const projectNameToEdit = management.getSelectedProject(idClicked);
        management.editProject(idClicked, newName);
        (0,_src_scripts_UIDesign_js__WEBPACK_IMPORTED_MODULE_0__.updateEditedProject)(ui, projectNameToEdit);
        management.storeIntoLocalStorage();
    }
});


ui.app.addEventListener('click', (evt) => {
    
    if(evt.target.classList.contains('editTodo')){
        const idTodoClicked = evt.target.id
        const todoToEdit = management.getTodo(idTodoClicked);
        management.setSelectedTodo(todoToEdit);
        (0,_src_scripts_UIDesign_js__WEBPACK_IMPORTED_MODULE_0__.selectEditTodo)(ui, todoToEdit);
        (0,_src_scripts_UIDesign_js__WEBPACK_IMPORTED_MODULE_0__.renderView)(ui, 'editTodoView');
    }

    if(evt.target.classList.contains('backToTaskPage') || evt.target.classList.contains('fa-chevron-left')){
        (0,_src_scripts_UIDesign_js__WEBPACK_IMPORTED_MODULE_0__.renderView)(ui, 'projectSelected');
    }

    if(evt.target.classList.contains('deleteTodo')){
        const idDeleteClicked = evt.target.id;
        const todoToDelete = document.querySelector(`[data-id="${idDeleteClicked}"]`);
        (0,_src_scripts_UIDesign_js__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(ui, todoToDelete);
        management.deleteTodo(idDeleteClicked);
        management.storeIntoLocalStorage();   
    }

    if(evt.target.classList.contains('todoToCheck')){
        const idClicked = evt.target.dataset.id;
        const todoToCheck = management.getTodo(idClicked);
        const elementLi = evt.target.parentNode;

        if(todoToCheck.getChecked() === true){
            todoToCheck.setChecked(false);
            elementLi.classList.remove('checked');
            elementLi.style = '';
        }else{
            todoToCheck.setChecked(true);
            elementLi.classList.add('checked');
            elementLi.style.setProperty('--afterBack', '#ccc');
        }
        management.setSelectedTodo(todoToCheck);
        management.storeIntoLocalStorage();
    }

    if(evt.target.classList.contains('deleteProject')){
        const idProjectClicked = evt.target.id;
        const projectClicked = management.getSelectedProject(idProjectClicked);
        const projectElementToDelete = document.getElementById(`${idProjectClicked}`).parentNode;
        management.deleteProjectNames(projectClicked);
        management.deleteProject(projectClicked);
        (0,_src_scripts_UIDesign_js__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(ui, projectElementToDelete);
        management.storeIntoLocalStorage();
    }

    if(evt.target.classList.contains('editProject')){
        const idProjectClicked = evt.target.id;
        const projectToEdit = management.getSelectedProject(idProjectClicked);
        (0,_src_scripts_UIDesign_js__WEBPACK_IMPORTED_MODULE_0__.editProject)(ui, projectToEdit);
        management.storeIntoLocalStorage();
    } 
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxRQUFRLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsWUFBWSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxNQUFNLFlBQVksUUFBUSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsUUFBUSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsaUJBQWlCO0FBQ25GO0FBQ0E7QUFDQSxRQUFRLHVFQUFhO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRUFBVztBQUNuQjtBQUNBO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3NjcmlwdHMvVUlEZXNpZ24uanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9zY3JpcHRzL2VsZW1lbnRDcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3NjcmlwdHMvbWlkZGxlTWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3NjcmlwdHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3NjcmlwdHMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvaW1hZ2VzL3ZlY3Rvci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxlYWd1ZStTcGFydGFuOndnaHRANzAwJmZhbWlseT1TZWRnd2ljaytBdmUmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICAtLWJsYWNrOiAjMTMxMzFhO1xcbiAgICAtLWJnOiAjMDEwMTAzO1xcbiAgICAtLWJvcmRlcjogLjFyZW0gc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMyk7XFxuICAgIC0td2hpdGUgOiAjZmZmO1xcbn1cXG5cXG4qe1xcbiAgICBmb250LWZhbWlseTogJ1NlZGd3aWNrIEF2ZScsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuaHRtbHtcXG4gICAgZm9udC1zaXplOiA2Mi41JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcXG59XFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBhcHAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi5hcHB7XFxuICAgIHdpZHRoOiAxMjAwcHg7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDIwcHggMjBweCAtMTBweCByZ2JhKDAsMCwwLC4zKTtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gICAgd2lkdGg6IDIwdnc7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNoYWRvdzogNXB4IDAgNXB4IHJnYmEoMCwwLDAsLjEpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc2lkZWJhciBldCBjb250YWluZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4uc2lkZWJhciAucHJvamVjdHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNpZGViYXIgLnByb2plY3RzIC5oZWFkZXJ7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcXG4gICAgY29sb3I6dmFyKC0td2hpdGUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxcbiAgICBwYWRkaW5nOiAxLjZyZW07XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4uc2lkZWJhciAucHJvamVjdHMgLmhlYWRlciBoMXtcXG4gICAgbWFyZ2luOiAxLjVyZW0gMDtcXG59XFxuXFxuLnNpZGViYXIgLnByb2plY3RzIC5jb250ZW50e1xcbiAgICBmbGV4OiAxO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLnNpZGViYXIgLnByb2plY3RzIC5jb250ZW50IC50ZW1wb3JhbGl0eVByb2plY3Qge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmcpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5cXG4uYWxsLC50b2RheSwud2VlaywubW9udGh7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgcGFkZGluZzogMC45cmVtO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNpZGViYXIgLnByb2plY3RzIC5jb250ZW50IC50ZW1wb3JhbGl0eVByb2plY3QgPiBkaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1iZyk7XFxufVxcblxcbi5uZXdQcm9qZWN0QnV0dG9ue1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMC43cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm5ld1Byb2plY3RCdXR0b246aG92ZXJ7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcXG59XFxuXFxuLnByb2plY3RMaXN0e1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdExpc3QgPiBsaXtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdE5hbWV7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdE5hbWU6aG92ZXJ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuXFxuLnNpZGViYXIgLnByb2plY3RzIC5jb250ZW50IC5wcm9qZWN0TGlzdCAubWFqUHJvamVjdCAuZWRpdFByb2plY3Q6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6ICM1NTZiMmY7XFxufVxcblxcbi5zaWRlYmFyIC5wcm9qZWN0cyAuY29udGVudCAucHJvamVjdExpc3QgLm1halByb2plY3QgLmRlbGV0ZVByb2plY3Q6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6ICMzZTAwMDA7XFxufVxcblxcbi5mYS1zb2xpZHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbnRhaW5lciAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHl7XFxuICAgIHBhZGRpbmc6IDMuMnJlbTtcXG4gICAgZmxleDogMTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5kZWZhdWx0Vmlld3tcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwdmg7XFxuICAgIGhlaWdodDogNzB2aDtcXG59XFxuXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbnRhaW5lciBoZWFkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4uY29udGFpbmVyIC5oZWFkZXJ7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcXG4gICAgY29sb3I6dmFyKC0td2hpdGUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxLjZyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi5jb250YWluZXIgLmhlYWRlciBoMXtcXG4gICAgbWFyZ2luOiAxLjVyZW0gMDtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAucHJvamVjdEZvcm0sXFxuLmNvbnRhaW5lciAuYm9keSAucHJvamVjdEZvcm1FZGl0e1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnByb2plY3RGb3JtIC5maWVsZCxcXG4uY29udGFpbmVyIC5ib2R5IC5wcm9qZWN0Rm9ybUVkaXQgLmZpZWxke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnByb2plY3RGb3JtIC5maWVsZCBpbnB1dCxcXG4uY29udGFpbmVyIC5ib2R5IC5wcm9qZWN0Rm9ybUVkaXQgLmZpZWxkIGlucHV0e1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAxcmVtIDVyZW0gMXJlbSAxcmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC5wcm9qZWN0Rm9ybSAuZmllbGQgYnV0dG9uLFxcbi5jb250YWluZXIgLmJvZHkgLnByb2plY3RGb3JtRWRpdCAuZmllbGQgYnV0dG9ue1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWJnKTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTFyZW07XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGhlaWdodDogNHJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAucHJvamVjdEZvcm0gLmZpZWxkIGJ1dHRvbiA+IHNwYW4sXFxuLmNvbnRhaW5lciAuYm9keSAucHJvamVjdEZvcm1FZGl0IC5maWVsZCBidXR0b24gPiBzcGFue1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBBQ1RJVkUgUFJPSkVDVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4uYWN0aXZlUHJvamVjdHtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbnRhaW5lciBhbmQgcHJvamVjdCBjbGlja2VkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi5jb250YWluZXIgLmJvZHkgZm9ybSAuZmllbGR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSBmb3JtIC5maWVsZCA+IGlucHV0e1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XFxuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDAgNHJlbSAwIDFyZW07XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgZm9ybSAuZmllbGQgPiBidXR0b257XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IGZvcm0gLmZpZWxkID4gYnV0dG9uOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29udGFpbmVyIGFuZCB0b2RvTGlzdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG51bHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3Rze1xcbiAgICBwYWRkaW5nOiAycmVtIDA7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kb3tcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG86aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMjBweCA1cHggLTEwcHggcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjEpO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8uY2hlY2tlZHtcXG4gICAgYmFja2dyb3VuZDogI2ZlZmVmZTtcXG4gICAgY29sb3I6ICNjY2M7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kby5jaGVja2VkIC50aXRsZXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kby5jaGVja2VkOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kbyBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJde1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC05OTk5cHg7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kbyBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdICsgbGFiZWx7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLWhlaWdodDogMzBweDtcXG4gICAgbWluLXdpZHRoOiAzMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kbyBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdICsgbGFiZWw6OmJlZm9yZXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xcbiAgICBtaW4td2lkdGg6IDI1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMnB4IHJnYmEoMCwwLDAsLjEpO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSArIGxhYmVsOjphZnRlcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiAnXFxcXDI3MTNcXFxcMDAyMCc7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgbWluLWhlaWdodDogMjVweDtcXG4gICAgbWluLXdpZHRoOiAyNXB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6OmFmdGVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8gLmRldGFpbHN7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvIC5wcmV2aWV3e1xcbiAgICBmbGV4OiAxO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kbyBpe1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8gLmVkaXRUb2RvOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiAjNTU2YjJmO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8gLmRlbGV0ZVRvZG86aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6ICMzZTAwMDA7XFxufVxcblxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kbyAucHJldmlldyAudGl0bGV7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8gLnByZXZpZXcgLmluZm90YWdze1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvIC5wcmV2aWV3IC5pbmZvdGFncyAuaWNvbkNhbGVuZGFye1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjogI2NjYztcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvOjphZnRlcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiA1cHg7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kby5oaWdoUHJpb3JpdHk6OmFmdGVye1xcbiAgICAvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFmdGVyQmFjaywgcmVkKTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvLm1lZGl1bVByaW9yaXR5OjphZnRlcntcXG4gICAgLyogYmFja2dyb3VuZDogeWVsbG93OyAqL1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hZnRlckJhY2ssIHllbGxvdyk7XFxufVxcblxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kby5sb3dQcmlvcml0eTo6YWZ0ZXJ7XFxuICAgIC8qIGJhY2tncm91bmQ6IGdyZWVuOyAqL1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hZnRlckJhY2ssIGdyZWVuKTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvIC5vdGhlcnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvLmhpZ2hQcmlvcml0eTo6YWZ0ZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2Vke1xcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xcbn1cXG5cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLSBlZGl0dGFzayBwYWdlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4uY29udGFpbmVyIC5oZWFkZXIgLmJhY2tUb1Rhc2tQYWdle1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XFxufVxcblxcbi5jb250YWluZXIgLmhlYWRlciAuYmFja1RvVGFza1BhZ2U6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAuZWRpdFRvZG9mb3JtIC5maWVsZCB0ZXh0YXJlYXtcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAuZWRpdFRvZG9mb3JtIC5maWVsZHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC4ycmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC5lZGl0VG9kb2Zvcm0gLmZpZWxkcyAuZmllbGR7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLmVkaXRUb2RvZm9ybSAuZmllbGRzIC5maWVsZCAudG9kb0RhdGUsXFxuLmNvbnRhaW5lciAuYm9keSAuZWRpdFRvZG9mb3JtIC5maWVsZHMgLmZpZWxkIC5wcmlvcml0eVNlbGVjdGlvbntcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcXG4gICAgcGFkZGluZzogMCAzLjEyNXJlbSAwIDFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmOWY5Zjk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC5lZGl0VG9kb2Zvcm0gLmZpZWxkQnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAuZWRpdFRvZG9mb3JtIC5maWVsZEJ1dHRvbiBidXR0b257XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y5ZjlmOTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAuZWRpdFRvZG9mb3JtIC5maWVsZEJ1dHRvbiBidXR0b246aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAuZWRpdFRvZG9mb3JtIC5maWVsZEJ1dHRvbiBpe1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUEsb0VBQW9FO0FBQ3BFO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsU0FBUztJQUNULG9DQUFvQztBQUN4Qzs7QUFFQSx1RUFBdUU7QUFDdkU7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUEsNERBQTREO0FBQzVEO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsT0FBTztJQUNQLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5REFBNkM7SUFDN0MsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7O0FBR0EsbUVBQW1FO0FBQ25FO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiw0QkFBNEI7QUFDaEM7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7O0lBRWYsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksb0JBQW9CO0FBQ3hCOzs7QUFHQSxxRkFBcUY7QUFDckY7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7O0FBR0Esb0dBQW9HO0FBQ3BHO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsNkZBQTZGO0FBQzdGO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLDREQUE0RDtJQUM1RCxvRkFBb0Y7QUFDeEY7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxPQUFPO0lBQ1AsTUFBTTtJQUNOLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtJQUNmLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsT0FBTztJQUNQLE1BQU07SUFDTixVQUFVO0lBQ1YsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw0REFBNEQ7QUFDaEU7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsT0FBTztJQUNQLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOzs7QUFHQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG9DQUFvQztBQUN4Qzs7O0FBR0E7SUFDSSx1QkFBdUI7SUFDdkIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7O0FBR0E7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUdBLDJEQUEyRDs7QUFFM0Q7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsT0FBTztJQUNQLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MZWFndWUrU3BhcnRhbjp3Z2h0QDcwMCZmYW1pbHk9U2VkZ3dpY2srQXZlJmRpc3BsYXk9c3dhcCcpO1xcblxcblxcbjpyb290e1xcbiAgICAtLWJsYWNrOiAjMTMxMzFhO1xcbiAgICAtLWJnOiAjMDEwMTAzO1xcbiAgICAtLWJvcmRlcjogLjFyZW0gc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMyk7XFxuICAgIC0td2hpdGUgOiAjZmZmO1xcbn1cXG5cXG4qe1xcbiAgICBmb250LWZhbWlseTogJ1NlZGd3aWNrIEF2ZScsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuaHRtbHtcXG4gICAgZm9udC1zaXplOiA2Mi41JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcXG59XFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBhcHAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi5hcHB7XFxuICAgIHdpZHRoOiAxMjAwcHg7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDIwcHggMjBweCAtMTBweCByZ2JhKDAsMCwwLC4zKTtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gICAgd2lkdGg6IDIwdnc7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNoYWRvdzogNXB4IDAgNXB4IHJnYmEoMCwwLDAsLjEpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc2lkZWJhciBldCBjb250YWluZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4uc2lkZWJhciAucHJvamVjdHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNpZGViYXIgLnByb2plY3RzIC5oZWFkZXJ7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcXG4gICAgY29sb3I6dmFyKC0td2hpdGUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxcbiAgICBwYWRkaW5nOiAxLjZyZW07XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4uc2lkZWJhciAucHJvamVjdHMgLmhlYWRlciBoMXtcXG4gICAgbWFyZ2luOiAxLjVyZW0gMDtcXG59XFxuXFxuLnNpZGViYXIgLnByb2plY3RzIC5jb250ZW50e1xcbiAgICBmbGV4OiAxO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLnNpZGViYXIgLnByb2plY3RzIC5jb250ZW50IC50ZW1wb3JhbGl0eVByb2plY3Qge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmcpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5cXG4uYWxsLC50b2RheSwud2VlaywubW9udGh7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgcGFkZGluZzogMC45cmVtO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNpZGViYXIgLnByb2plY3RzIC5jb250ZW50IC50ZW1wb3JhbGl0eVByb2plY3QgPiBkaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1iZyk7XFxufVxcblxcbi5uZXdQcm9qZWN0QnV0dG9ue1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMC43cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm5ld1Byb2plY3RCdXR0b246aG92ZXJ7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcXG59XFxuXFxuLnByb2plY3RMaXN0e1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdExpc3QgPiBsaXtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdE5hbWV7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdE5hbWU6aG92ZXJ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuXFxuLnNpZGViYXIgLnByb2plY3RzIC5jb250ZW50IC5wcm9qZWN0TGlzdCAubWFqUHJvamVjdCAuZWRpdFByb2plY3Q6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6ICM1NTZiMmY7XFxufVxcblxcbi5zaWRlYmFyIC5wcm9qZWN0cyAuY29udGVudCAucHJvamVjdExpc3QgLm1halByb2plY3QgLmRlbGV0ZVByb2plY3Q6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6ICMzZTAwMDA7XFxufVxcblxcbi5mYS1zb2xpZHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbnRhaW5lciAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHl7XFxuICAgIHBhZGRpbmc6IDMuMnJlbTtcXG4gICAgZmxleDogMTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5kZWZhdWx0Vmlld3tcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvaW1hZ2VzL3ZlY3Rvci5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNTB2aDtcXG4gICAgaGVpZ2h0OiA3MHZoO1xcbn1cXG5cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29udGFpbmVyIGhlYWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi5jb250YWluZXIgLmhlYWRlcntcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xcbiAgICBjb2xvcjp2YXIoLS13aGl0ZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEuNnJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAuaGVhZGVyIGgxe1xcbiAgICBtYXJnaW46IDEuNXJlbSAwO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC5wcm9qZWN0Rm9ybSxcXG4uY29udGFpbmVyIC5ib2R5IC5wcm9qZWN0Rm9ybUVkaXR7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAucHJvamVjdEZvcm0gLmZpZWxkLFxcbi5jb250YWluZXIgLmJvZHkgLnByb2plY3RGb3JtRWRpdCAuZmllbGR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAucHJvamVjdEZvcm0gLmZpZWxkIGlucHV0LFxcbi5jb250YWluZXIgLmJvZHkgLnByb2plY3RGb3JtRWRpdCAuZmllbGQgaW5wdXR7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDFyZW0gNXJlbSAxcmVtIDFyZW07XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnByb2plY3RGb3JtIC5maWVsZCBidXR0b24sXFxuLmNvbnRhaW5lciAuYm9keSAucHJvamVjdEZvcm1FZGl0IC5maWVsZCBidXR0b257XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tYmcpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMXJlbTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC5wcm9qZWN0Rm9ybSAuZmllbGQgYnV0dG9uID4gc3BhbixcXG4uY29udGFpbmVyIC5ib2R5IC5wcm9qZWN0Rm9ybUVkaXQgLmZpZWxkIGJ1dHRvbiA+IHNwYW57XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFDVElWRSBQUk9KRUNUIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi5hY3RpdmVQcm9qZWN0e1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29udGFpbmVyIGFuZCBwcm9qZWN0IGNsaWNrZWQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLmNvbnRhaW5lciAuYm9keSBmb3JtIC5maWVsZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IGZvcm0gLmZpZWxkID4gaW5wdXR7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcXG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogMCA0cmVtIDAgMXJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSBmb3JtIC5maWVsZCA+IGJ1dHRvbntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgZm9ybSAuZmllbGQgPiBidXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjb250YWluZXIgYW5kIHRvZG9MaXN0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbnVse1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHN7XFxuICAgIHBhZGRpbmc6IDJyZW0gMDtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2Rve1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kbzpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgei1pbmRleDogMztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAyMHB4IDVweCAtMTBweCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMSk7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kby5jaGVja2Vke1xcbiAgICBiYWNrZ3JvdW5kOiAjZmVmZWZlO1xcbiAgICBjb2xvcjogI2NjYztcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvLmNoZWNrZWQgLnRpdGxle1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvLmNoZWNrZWQ6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl17XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTk5OTlweDtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0gKyBsYWJlbHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgICBtaW4td2lkdGg6IDMwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0gKyBsYWJlbDo6YmVmb3Jle1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XFxuICAgIG1pbi13aWR0aDogMjVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAycHggcmdiYSgwLDAsMCwuMSk7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kbyBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdICsgbGFiZWw6OmFmdGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6ICdcXFxcMjcxM1xcXFwwMDIwJztcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xcbiAgICBtaW4td2lkdGg6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kbyBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kbyAuZGV0YWlsc3tcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8gLnByZXZpZXd7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvIGl7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kbyAuZWRpdFRvZG86aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6ICM1NTZiMmY7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kbyAuZGVsZXRlVG9kbzpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogIzNlMDAwMDtcXG59XFxuXFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvIC5wcmV2aWV3IC50aXRsZXtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kbyAucHJldmlldyAuaW5mb3RhZ3N7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8gLnByZXZpZXcgLmluZm90YWdzIC5pY29uQ2FsZW5kYXJ7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiAjY2NjO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG86OmFmdGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDVweDtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvLmhpZ2hQcmlvcml0eTo6YWZ0ZXJ7XFxuICAgIC8qIGJhY2tncm91bmQ6IHJlZDsgKi9cXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWZ0ZXJCYWNrLCByZWQpO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8ubWVkaXVtUHJpb3JpdHk6OmFmdGVye1xcbiAgICAvKiBiYWNrZ3JvdW5kOiB5ZWxsb3c7ICovXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFmdGVyQmFjaywgeWVsbG93KTtcXG59XFxuXFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvLmxvd1ByaW9yaXR5OjphZnRlcntcXG4gICAgLyogYmFja2dyb3VuZDogZ3JlZW47ICovXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFmdGVyQmFjaywgZ3JlZW4pO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8gLm90aGVyc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8uaGlnaFByaW9yaXR5OjphZnRlciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWR7XFxuICAgIGJhY2tncm91bmQ6IGdyYXk7XFxufVxcblxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tIGVkaXR0YXNrIHBhZ2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5jb250YWluZXIgLmhlYWRlciAuYmFja1RvVGFza1BhZ2V7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcXG59XFxuXFxuLmNvbnRhaW5lciAuaGVhZGVyIC5iYWNrVG9UYXNrUGFnZTpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC5lZGl0VG9kb2Zvcm0gLmZpZWxkIHRleHRhcmVhe1xcbiAgICBmbGV4OiAxO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC5lZGl0VG9kb2Zvcm0gLmZpZWxkc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjJyZW07XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLmVkaXRUb2RvZm9ybSAuZmllbGRzIC5maWVsZHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAuZWRpdFRvZG9mb3JtIC5maWVsZHMgLmZpZWxkIC50b2RvRGF0ZSxcXG4uY29udGFpbmVyIC5ib2R5IC5lZGl0VG9kb2Zvcm0gLmZpZWxkcyAuZmllbGQgLnByaW9yaXR5U2VsZWN0aW9ue1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xcbiAgICBwYWRkaW5nOiAwIDMuMTI1cmVtIDAgMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y5ZjlmOTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLmVkaXRUb2RvZm9ybSAuZmllbGRCdXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC5lZGl0VG9kb2Zvcm0gLmZpZWxkQnV0dG9uIGJ1dHRvbntcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjlmOWY5O1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC5lZGl0VG9kb2Zvcm0gLmZpZWxkQnV0dG9uIGJ1dHRvbjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC5lZGl0VG9kb2Zvcm0gLmZpZWxkQnV0dG9uIGl7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL3NjcmlwdHMvZWxlbWVudENyZWF0aW9uLmpzJztcbmltcG9ydCB3ZWxjb21lSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL3ZlY3Rvci5wbmcnO1xuXG5jbGFzcyBVSURlc2lnbiB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy52aWV3ID0gW107XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWVzID0gW107ICAgICAgXG5cbiAgICAgICAgdGhpcy5oMSA9IGNyZWF0ZUVsZW1lbnQoJ2gxJywge30sICd0b2RvIGFwcCcpO1xuICAgICAgICB0aGlzLmhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczonaGVhZGVyJ30sIHRoaXMuaDEpO1xuXG4gICAgICAgIHRoaXMuYnV0dG9uTmV3UHJvamVjdCA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtjbGFzczonbmV3UHJvamVjdEJ1dHRvbid9LCAnY3JlYXRlIHByb2plY3QnKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywge2NsYXNzOidwcm9qZWN0TGlzdCd9LCAnJyk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOidjb250ZW50J30sIHRoaXMuYnV0dG9uTmV3UHJvamVjdCwgdGhpcy5wcm9qZWN0TGlzdCk7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6J3Byb2plY3RzJ30sIHRoaXMuaGVhZGVyLCB0aGlzLmNvbnRlbnQpO1xuICAgICAgICB0aGlzLnNpZGViYXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6J3NpZGViYXInfSwgdGhpcy5wcm9qZWN0cyk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6J2NvbnRhaW5lcid9LCAnJyk7XG5cbiAgICAgICAgdGhpcy5hcHAgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6J2FwcCd9LCB0aGlzLnNpZGViYXIsIHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2hvd0FsbFZpZXcoKTtcbiAgICB9XG5cbiAgICBzaG93QWxsVmlldygpe1xuICAgICAgICB0aGlzLnZpZXcgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTond2VsY29tZUJhY2tncm91bmQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNob3dXZWxjb21lVmlldygpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOidjcmVhdGVQcm9qZWN0VmlldycsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc2hvd05ld1Byb2plY3RWaWV3KCksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6J3Byb2plY3RTZWxlY3RlZCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOidlZGl0VG9kb1ZpZXcnLFxuICAgICAgICAgICAgICAgIHZhbHVlOicnLFxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIHNob3dXZWxjb21lVmlldygpe1xuICAgICAgICBjb25zdCBoMSA9IGNyZWF0ZUVsZW1lbnQoJ2gxJywge30sICd3ZWxjb21lIHRvIHlvdXIgdG9kbyBhcHAnKTtcbiAgICAgICAgY29uc3QgZGl2RGVmYXVsdFZpZXcgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6J2RlZmF1bHRWaWV3J30sICcnKTtcbiAgICAgICAgY29uc3QgYm9keUNvbnRhaW5kZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6J2JvZHknfSwgaDEsIGRpdkRlZmF1bHRWaWV3KTtcblxuICAgICAgICByZXR1cm4gYm9keUNvbnRhaW5kZXI7XG4gICAgfVxuXG4gICAgc2hvd05ld1Byb2plY3RWaWV3KCl7XG4gICAgICAgIGNvbnN0IGgxID0gY3JlYXRlRWxlbWVudCgnaDEnLCB7Y2xhc3M6J3RpdGxlJ30sICdjcmVhdGUgYSBuZXcgcHJvamVjdCcpO1xuICAgICAgICBjb25zdCBoZWFkZXI9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczonaGVhZGVyJ30sIGgxKTtcbiAgICAgICAgdGhpcy5pbnB1dFByb2plY3QgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHt0eXBlOid0ZXh0JywgY2xhc3M6J2lucHV0UHJvamVjdCcsIGlkOidpbnB1dFByb2plY3QnLCBwbGFjZWhvbGRlcjoncHJvamVjdCBuYW1lJywgbmFtZToncHJvamVjdC1uYW1lJywgcmVxdWlyZWQ6J3JlcXVpcmVkJ30sICcnKTtcbiAgICBcbiAgICAgICAgY29uc3QgbG9nb0FkZCA9IGNyZWF0ZUVsZW1lbnQoJ2knLCB7Y2xhc3M6J2ZhLXNvbGlkIGZhLXBsdXMnfSwgJycpO1xuICAgICAgICBjb25zdCBzcGFuID0gY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAnQWRkJylcbiAgICAgICAgdGhpcy5idXR0b25BZGQgPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7dHlwZTonc3VibWl0JywgY2xhc3M6J2FkZE5ld1Byb2plY3QnfSwgc3BhbiwgbG9nb0FkZCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGRpdkZpZWxkID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOidmaWVsZCd9LCB0aGlzLmlucHV0UHJvamVjdCwgdGhpcy5idXR0b25BZGQpO1xuICAgIFxuICAgICAgICB0aGlzLmZvcm0gPSBjcmVhdGVFbGVtZW50KCdmb3JtJywge2NsYXNzOidwcm9qZWN0Rm9ybSd9LCBkaXZGaWVsZCk7XG4gICAgICAgIGNvbnN0IGJvZHlDb250YWluZGVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOidib2R5J30sIHRoaXMuZm9ybSk7XG4gICAgXG4gICAgICAgIHJldHVybiBbaGVhZGVyLCBib2R5Q29udGFpbmRlcl07IFxuICAgIH1cblxuICAgIHNob3dQcm9qZWN0RWRpdFZpZXcoKXtcbiAgICAgICAgY29uc3QgaDEgPSBjcmVhdGVFbGVtZW50KCdoMScsIHtjbGFzczondGl0bGUnfSwgYEVkaXQgcHJvamVjdCAke3RoaXMucHJvamVjdFRvRWRpdC5nZXRQcm9qZWN0TmFtZSgpfWApO1xuICAgICAgICBjb25zdCBoZWFkZXI9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczonaGVhZGVyJ30sIGgxKTtcbiAgICAgICAgdGhpcy5pbnB1dFByb2plY3QgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHt0eXBlOid0ZXh0JywgY2xhc3M6J2lucHV0UHJvamVjdCcsIGlkOidpbnB1dFByb2plY3QnLCBwbGFjZWhvbGRlcjoncHJvamVjdCBuYW1lJywgbmFtZToncHJvamVjdC1uYW1lJywgdmFsdWU6YCR7dGhpcy5wcm9qZWN0VG9FZGl0LmdldFByb2plY3ROYW1lKCl9YH0sIGAke3RoaXMucHJvamVjdFRvRWRpdC5nZXRQcm9qZWN0TmFtZSgpfWApO1xuXG4gICAgICAgIGNvbnN0IGxvZ29FZGl0ID0gY3JlYXRlRWxlbWVudCgnaScsIHtjbGFzczonZmEtc29saWQgZmEtcGVuLXRvLXNxdWFyZSd9LCAnJyk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcnKTtcbiAgICAgICAgdGhpcy5idXR0b25FZGl0ID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge3R5cGU6J3N1Ym1pdCcsIGNsYXNzOidhZGROZXdQcm9qZWN0J30sIHNwYW4sIGxvZ29FZGl0KTtcblxuICAgICAgICBjb25zdCBkaXZGaWVsZCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczonZmllbGQnfSwgdGhpcy5pbnB1dFByb2plY3QsIHRoaXMuYnV0dG9uRWRpdCk7XG5cbiAgICAgICAgdGhpcy5mb3JtRWRpdCA9IGNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCB7Y2xhc3M6J3Byb2plY3RGb3JtRWRpdCcsIGlkOmAke3RoaXMucHJvamVjdFRvRWRpdC5nZXRJZFByb2plY3QoKX1gfSwgZGl2RmllbGQpO1xuICAgICAgICBjb25zdCBib2R5Q29udGFpbmRlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczonYm9keSd9LCB0aGlzLmZvcm1FZGl0KTtcblxuICAgICAgICByZXR1cm4gW2hlYWRlciwgYm9keUNvbnRhaW5kZXJdO1xuICAgIH1cblxuICAgIHNob3dQcm9qZWN0U2VsZWN0ZWRWaWV3KCl7XG4gICAgICAgIHRoaXMuaDEgPSBjcmVhdGVFbGVtZW50KCdoMScsIHtjbGFzczondGl0bGUnfSwgYCR7dGhpcy5wcm9qZWN0U2VsZWN0ZWQuZ2V0UHJvamVjdE5hbWUoKX1gKTtcbiAgICAgICAgY29uc3QgaGVhZGVyPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6J2hlYWRlcid9LCB0aGlzLmgxKTtcblxuICAgICAgICB0aGlzLmlucHV0VGFzayA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge3R5cGU6J3RleHQnLGlkOicnLCBuYW1lOicnLCBjbGFzczondGFzaycsIHBsYWNlaG9sZGVyOidlbnRlciB5b3VyIHRhc2snLCByZXF1aXJlZDoncmVxdWlyZWQnfSwgJycpO1xuICAgICAgICBjb25zdCBpY29uID0gY3JlYXRlRWxlbWVudCgnaScsIHtjbGFzczonZmEtc29saWQgZmEtcGx1cyd9LCAnJyk7XG4gICAgICAgIHRoaXMuYnV0dG9uQWRkVGFzdCA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHt0eXBlOidzdWJtaXQnfSwgaWNvbik7XG4gICAgICAgIGNvbnN0IGRpdkZpZWxkID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOidmaWVsZCd9LCB0aGlzLmlucHV0VGFzaywgdGhpcy5idXR0b25BZGRUYXN0KVxuICAgICAgICB0aGlzLmZvcm1UYXNrID0gY3JlYXRlRWxlbWVudCgnZm9ybScsIHtjbGFzczonZm9ybVRhc2snfSwgZGl2RmllbGQpO1xuXG4gICAgICAgIHRoaXMudWxUb2RvID0gY3JlYXRlRWxlbWVudCgndWwnLCB7Y2xhc3M6J3RvZG9MaXN0cyd9LCAnJyk7XG5cblxuICAgICAgICBjb25zdCBib2R5Q29udGFpbmRlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczonYm9keSd9LCB0aGlzLmZvcm1UYXNrLCB0aGlzLnVsVG9kbyk7XG5cbiAgICAgICAgcmV0dXJuIFtoZWFkZXIsIGJvZHlDb250YWluZGVyXTtcbiAgICB9XG5cbiAgICBzaG93RWRpdFRvZG9WaWV3KCl7XG4gICAgICAgIGNvbnN0IGljb25CYWNrID0gY3JlYXRlRWxlbWVudCgnaScsIHtjbGFzczonZmEtc29saWQgZmEtY2hldnJvbi1sZWZ0J30sICcnKTtcbiAgICAgICAgdGhpcy5iYWNrQnV0dG9uID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOidiYWNrVG9UYXNrUGFnZSd9LCBpY29uQmFjayk7XG4gICAgICAgIGNvbnN0IGgxID0gY3JlYXRlRWxlbWVudCgnaDEnLCB7Y2xhc3M6J3RpdGxlJ30sIHRoaXMuZWRpdFRvZG9TZWxlY3RlZC5nZXRUb2RvTmFtZSgpKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOidoZWFkZXInfSwgdGhpcy5iYWNrQnV0dG9uLCBoMSk7XG5cbiAgICAgICAgdGhpcy5pbnB1dEVkaXRUZXh0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7dHlwZTondGV4dCcsIG5hbWU6J3RvZG9UaXRsZScsIGlkOid0b2RvVGl0bGUnLCBjbGFzczonaW5wdXQnLCBwbGFjZWhvbGRlcjonRW50ZXIgVGl0bGUnLCB2YWx1ZTpgJHt0aGlzLmVkaXRUb2RvU2VsZWN0ZWQuZ2V0VG9kb05hbWUoKX1gLCByZXF1aXJlZDoncmVxdWlyZWQnfSwgJycpO1xuICAgICAgICBjb25zdCBmaWVsZElucHV0ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOidmaWVsZCd9LCB0aGlzLmlucHV0RWRpdFRleHQpO1xuICAgICAgICB0aGlzLnRleHRBcmVhID0gY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnLCB7bmFtZTondGFza0Rlc2NyaXB0aW9uJywgaWQ6J3Rhc2tEZXNjcmlwdGlvbicsIHJvdzonMTUnLCBwbGFjZWhvbGRlcjonZW50ZXIgdGFza3MgZGVzY3JpcHRpb25zJywgdmFsdWU6YCR7dGhpcy5lZGl0VG9kb1NlbGVjdGVkLmdldERlc2NyaXB0aW9uKCl9YH0sIGAke3RoaXMuZWRpdFRvZG9TZWxlY3RlZC5nZXREZXNjcmlwdGlvbigpfWApO1xuICAgICAgICBjb25zdCBmaWVsZFRleHRBcmVhID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOidmaWVsZCd9LCB0aGlzLnRleHRBcmVhKTtcblxuICAgICAgICB0aGlzLmlucHV0RGF0ZSA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge3R5cGU6J2RhdGUnLCBjbGFzczondG9kb0RhdGUnLCBuYW1lOid0b2RvRGF0ZScsIHJlcXVpcmVkOidyZXF1aXJlZCcsIHZhbHVlOmAke3RoaXMuZWRpdFRvZG9TZWxlY3RlZC5nZXREYXRlKCl9YH0sICcnKTtcbiAgICAgICAgY29uc3QgZmllbGREYXRlID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOidmaWVsZCd9LCB0aGlzLmlucHV0RGF0ZSk7XG4gICAgICAgIHRoaXMubG93ID0gY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge3ZhbHVlOidsb3cnfSwgJ0xvdycpO1xuICAgICAgICB0aGlzLm1lZGl1bSA9IGNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHt2YWx1ZTonbWVkaXVtJ30sICdNZWRpdW0nKTtcbiAgICAgICAgdGhpcy5oaWdoID0gY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge3ZhbHVlOidoaWdoJ30sICdIaWdoJyk7XG4gICAgICAgIHRoaXMucHJpb3JpdHlTZWxlY3Rpb24gPSBjcmVhdGVFbGVtZW50KCdzZWxlY3QnLCB7bmFtZToncHJpb3JpdHlTZWxlY3Rpb24nLCBjbGFzczoncHJpb3JpdHlTZWxlY3Rpb24nfSwgdGhpcy5sb3csIHRoaXMubWVkaXVtLCB0aGlzLmhpZ2gpOyBcbiAgICAgICAgXG4gICAgICAgIF9nZXRQcmlvcml0eUZvckVkaXQodGhpcy5lZGl0VG9kb1NlbGVjdGVkLmdldFByaW9yaXR5KCksIHRoaXMubG93LCB0aGlzLm1lZGl1bSwgdGhpcy5oaWdoKTtcblxuICAgICAgICBjb25zdCBmaWVsZFRvZG9Qcmlvcml0eSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczonZmllbGQnfSwgdGhpcy5wcmlvcml0eVNlbGVjdGlvbik7XG4gICAgICAgIGNvbnN0IGZpZWxkRGF0ZVNlbGVjdCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczonZmllbGRzJ30sIGZpZWxkRGF0ZSwgZmllbGRUb2RvUHJpb3JpdHkpO1xuXG4gICAgICAgIGNvbnN0IGljb25FZGl0ID0gY3JlYXRlRWxlbWVudCgnaScsIHtjbGFzczonZmEtc29saWQgZmEtcGVuLXRvLXNxdWFyZSBlZGl0VG9kbyd9LCAnJyk7XG5cbiAgICAgICAgdGhpcy5idXR0b25WYWxpZEVkaXQgPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7dHlwZTonc3VibWl0JywgY2xhc3M6J3ZhbGlkYXRlRWRpdFRvZG8nfSwgaWNvbkVkaXQpO1xuICAgICAgICBjb25zdCBmaWVsZEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczonZmllbGRCdXR0b24nfSwgdGhpcy5idXR0b25WYWxpZEVkaXQpO1xuXG4gICAgICAgIHRoaXMuZm9ybUVkaXQgPSBjcmVhdGVFbGVtZW50KCdmb3JtJywge2NsYXNzOidlZGl0VG9kb2Zvcm0nLCBpZDpgJHt0aGlzLmVkaXRUb2RvU2VsZWN0ZWQuZ2V0SWRUb2RvKCl9YH0sIGZpZWxkSW5wdXQsIGZpZWxkVGV4dEFyZWEsIGZpZWxkRGF0ZVNlbGVjdCwgZmllbGRCdXR0b24pO1xuICAgICAgICBjb25zdCBib2R5Q29udGFpbmRlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczonYm9keSd9LCB0aGlzLmZvcm1FZGl0KTtcblxuICAgICAgICByZXR1cm4gW2hlYWRlciwgYm9keUNvbnRhaW5kZXJdO1xuICAgIH1cblxufSAvKiBlbmQgb2YgY2xhc3MgKi9cblxuLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZ1bmN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5mdW5jdGlvbiByZW5kZXJBcHAoYXJnKXtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5hcHBlbmQoYXJnLmFwcCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclZpZXcgKGFyZywgdmlld1R5cGUpe1xuICAgIGFyZy5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBwYWdlID0gYXJnLnZpZXcuZmluZCggdiA9PiB7XG4gICAgICAgIHJldHVybiB2Lm5hbWUgPT09IHZpZXdUeXBlIFxuICAgIH0pO1xuXG4gICAgaWYoIXBhZ2Upe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGlmKEFycmF5LmlzQXJyYXkocGFnZS52YWx1ZSkpe1xuICAgICAgICBwYWdlLnZhbHVlLmZvckVhY2goIHAgPT57XG4gICAgICAgICAgICBhcmcuY29udGFpbmVyLmFwcGVuZENoaWxkKHApXG4gICAgICAgIH0pO1xuICAgIH1lbHNle1xuICAgICAgICBhcmcuY29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2UudmFsdWUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdChhcmcsIHByb2plY3Qpe1xuICAgIGNvbnN0IHRleHQgPSBgXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicHJvamVjdFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2plY3ROYW1lXCIgaWQ9XCIke3Byb2plY3QuZ2V0SWRQcm9qZWN0KCl9XCI+JHtwcm9qZWN0LmdldFByb2plY3ROYW1lKCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFqUHJvamVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wZW4tdG8tc3F1YXJlIGVkaXRQcm9qZWN0XCIgaWQ9XCIke3Byb2plY3QuZ2V0SWRQcm9qZWN0KCl9XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaCBkZWxldGVQcm9qZWN0XCIgaWQ9XCIke3Byb2plY3QuZ2V0SWRQcm9qZWN0KCl9XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9saT4gYDtcbiAgICAgICAgXG4gICAgaWYocHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpKXtcbiAgICAgICAgaWYoIWFyZy5wcm9qZWN0TmFtZXMuaW5jbHVkZXMoYCR7cHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpLnRvTG93ZXJDYXNlKCl9YCkpe1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSAnYmVmb3JlZW5kJztcbiAgICAgICAgICAgIGFyZy5wcm9qZWN0TGlzdC5pbnNlcnRBZGphY2VudEhUTUwocG9zaXRpb24sIHRleHQpO1xuICAgICAgICAgICAgYXJnLnByb2plY3ROYW1lcy5wdXNoKHByb2plY3QuZ2V0UHJvamVjdE5hbWUoKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhcmcuaW5wdXRQcm9qZWN0LnZhbHVlID0gJyc7XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0KGFyZywgcHJvamVjdCl7XG4gICAgYXJnLnByb2plY3RUb0VkaXQgPSBwcm9qZWN0O1xuXG4gICAgY29uc3Qgdmlld3MgPSBhcmcuc2hvd1Byb2plY3RFZGl0VmlldygpO1xuXG4gICAgYXJnLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIHZpZXdzLmZvckVhY2godmlldyA9PiB7XG4gICAgICAgIGFyZy5jb250YWluZXIuYXBwZW5kKHZpZXcpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUVkaXRlZFByb2plY3QoYXJnLCBwcm9qZWN0KXtcbiAgICBjb25zdCBsaXN0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgbGlzdFByb2plY3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5pZCA9PT0gcHJvamVjdC5nZXRJZFByb2plY3QoKSl7XG4gICAgICAgICAgICBpZighYXJnLnByb2plY3ROYW1lcy5pbmNsdWRlcyhgJHtwcm9qZWN0LmdldFByb2plY3ROYW1lKCl9YCkpe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0ID0gcHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgIFxuICAgIH0pO1xuXG4gICAgYXJnLmlucHV0UHJvamVjdC52YWx1ZSA9ICcnO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrKGFyZywgdG9kbyl7XG4gICAgY29uc3QgdGV4dCA9IGBcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInRvZG9cIiBkYXRhLWlkID0gXCIke3RvZG8uZ2V0SWRUb2RvKCl9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInRvZG9Ub0NoZWNrXCIgY2xhc3M9XCJpbnB1dFwiIGlkPVwiJHt0b2RvLmdldElkVG9kbygpfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIiR7dG9kby5nZXRJZFRvZG8oKX1cIiBjbGFzcz1cInRvZG9Ub0NoZWNrXCIgZGF0YS1pZCA9XCIke3RvZG8uZ2V0SWRUb2RvKCl9XCI+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+JHt0b2RvLmdldFRvZG9OYW1lKCl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvdGFnc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlVGFnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uQ2FsZW5kYXJcIj48aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke3RvZG8uZ2V0RGF0ZSgpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm90aGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBlbi10by1zcXVhcmUgZWRpdFRvZG9cIiBpZD1cIiR7dG9kby5nZXRJZFRvZG8oKX1cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2ggZGVsZXRlVG9kb1wiIGlkPVwiJHt0b2RvLmdldElkVG9kbygpfVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIGA7XG5cbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSAnYmVmb3JlZW5kJztcbiAgICAgICAgYXJnLnVsVG9kby5pbnNlcnRBZGphY2VudEhUTUwocG9zaXRpb24sIHRleHQpOyAgICBcbiAgICAgICAgYXJnLmlucHV0VGFzay52YWx1ZSA9ICcnO1xuXG4gICAgICAgIF9nZXRDb2xvclByaW9yaXR5KHRvZG8pO1xuICAgICAgICBfZ2V0Q2hlY2tlZCh0b2RvKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhhcmcsIHRvZG9FbGVtZW50KXtcbiAgICBhcmcudWxUb2RvLnJlbW92ZUNoaWxkKHRvZG9FbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChhcmcsIHByb2plY3RFbGVtZW50KXsgICAgXG4gICAgYXJnLnByb2plY3RMaXN0LnJlbW92ZUNoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgICBjb25zdCBpc0FjdGl2ZUhlcmUgPSBwcm9qZWN0RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZVByb2plY3QnKTtcbiAgICBjb25zdCBzcGFuVGV4dENvbnRlbnQgPSBwcm9qZWN0RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQudG9Mb3dlckNhc2UoKTtcbiAgICBcbiAgICBpZihpc0FjdGl2ZUhlcmUpe1xuICAgICAgICBhcmcuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZW5kZXJWaWV3KGFyZywgJ3dlbGNvbWVCYWNrZ3JvdW5kJyk7XG4gICAgfVxuICAgIFxuICAgIGFyZy5wcm9qZWN0TmFtZXMgPSBhcmcucHJvamVjdE5hbWVzLmZpbHRlcihuYW1lID0+IG5hbWUgIT09IHNwYW5UZXh0Q29udGVudCk7XG59XG5cbmZ1bmN0aW9uIHVuc2VsZWN0ZUFsbFByb2plY3QoKXtcbiAgICBjb25zdCBlbGVtZW50cyA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RMaXN0IC5wcm9qZWN0IC5wcm9qZWN0TmFtZVwiKTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZVByb2plY3QnKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0ZWRQcm9qZWN0KGFyZywgcHJvamVjdFNlbGVjdGVkKXtcbiAgICBhcmcucHJvamVjdFNlbGVjdGVkID0gcHJvamVjdFNlbGVjdGVkO1xuICAgIHVuc2VsZWN0ZUFsbFByb2plY3QoKTtcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3RFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cHJvamVjdFNlbGVjdGVkLmdldElkUHJvamVjdCgpfWApO1xuICAgIHNlbGVjdGVkUHJvamVjdEVsZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlUHJvamVjdCcpO1xuICAgIGFyZy52aWV3WzJdLnZhbHVlID0gYXJnLnNob3dQcm9qZWN0U2VsZWN0ZWRWaWV3KCk7ICBcbn1cblxuZnVuY3Rpb24gc2VsZWN0RWRpdFRvZG8oYXJnLCB0b2RvU2VsZWN0ZWQpe1xuICAgIGFyZy5lZGl0VG9kb1NlbGVjdGVkID0gdG9kb1NlbGVjdGVkO1xuICAgIGFyZy52aWV3WzNdLnZhbHVlID0gYXJnLnNob3dFZGl0VG9kb1ZpZXcoKTtcbn1cblxuZnVuY3Rpb24gX2dldFByaW9yaXR5Rm9yRWRpdChwcm9wZXJ0eSwgLi4uZWxlbWVudCl7XG4gICAgY29uc3QgZWxlbWVudHMgPSBbLi4uZWxlbWVudF07XG5cbiAgICBmb3IobGV0IGtleSBpbiBlbGVtZW50cyl7XG4gICAgICAgIGVsZW1lbnRzW2tleV0ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuICAgICAgICBpZihwcm9wZXJ0eSA9PT0gZWxlbWVudHNba2V5XS52YWx1ZSl7XG4gICAgICAgICAgICBlbGVtZW50c1trZXldLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfZ2V0Q29sb3JQcmlvcml0eSh0b2RvKXtcbiAgICBjb25zdCBwcmlvcml0eSA9IHRvZG8uZ2V0UHJpb3JpdHkoKTtcbiAgICAgICAgbGV0IGNvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke3RvZG8uZ2V0SWRUb2RvKCl9XCJdYCk7XG4gICAgICAgIHN3aXRjaChwcmlvcml0eSl7XG4gICAgICAgICAgICBjYXNlICdoaWdoJyA6XG4gICAgICAgICAgICAgICAgY29sb3IuY2xhc3NMaXN0LmFkZCgnaGlnaFByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtZWRpdW0nIDpcbiAgICAgICAgICAgICAgICBjb2xvci5jbGFzc0xpc3QuYWRkKCdtZWRpdW1Qcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbG93JyA6XG4gICAgICAgICAgICAgICAgY29sb3IuY2xhc3NMaXN0LmFkZCgnbG93UHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBcbn1cblxuZnVuY3Rpb24gX2dldENoZWNrZWQodG9kbyl7XG4gICAgY29uc3QgbGFiZWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RvZG8uZ2V0SWRUb2RvKCl9YCk7XG4gICAgY29uc3QgZWxlbWVudExpID0gbGFiZWxJbnB1dC5wYXJlbnROb2RlO1xuXG4gICAgaWYodG9kby5nZXRDaGVja2VkKCkgPT09IHRydWUpe1xuICAgICAgICBsYWJlbElucHV0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICBsYWJlbElucHV0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgZWxlbWVudExpLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgZWxlbWVudExpLnN0eWxlLnNldFByb3BlcnR5KCctLWFmdGVyQmFjaycsICcjY2NjJyk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBVSURlc2lnbiwgcmVuZGVyVmlldywgcmVuZGVyQXBwLCBhZGRQcm9qZWN0LCBzZWxlY3RlZFByb2plY3QsIGFkZFRhc2ssIHNlbGVjdEVkaXRUb2RvLCBkZWxldGVUYXNrLCBkZWxldGVQcm9qZWN0LCBlZGl0UHJvamVjdCwgdXBkYXRlRWRpdGVkUHJvamVjdCwgdW5zZWxlY3RlQWxsUHJvamVjdCB9OyIsImNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodHlwZSwgYXR0cmlidXRlcywgLi4uY2hpbGRyZW4pID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblxuICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKVxuICAgIH1cbiAgICBcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgaWYodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyl7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnR7IGNyZWF0ZUVsZW1lbnQgfTsiLCJjbGFzcyBNaWRkbGVNYW5hZ2VtZW50e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgICAgIHRoaXMucHJvamVjdE5hbWVzID0gW107XG4gICAgfVxuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gTG9jYWwgU3RvcmFnZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qXG4gICAgc3RvcmVJbnRvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhcyA9IFtdO1xuICAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBkYXRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZFByb2plY3QgOiBwcm9qZWN0LmdldElkUHJvamVjdCgpLFxuICAgICAgICAgICAgICAgIG5hbWVQcm9qZWN0IDogcHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpLCAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRvZG9zIDogcHJvamVjdC5nZXREYXRhc1RvZG9zKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShkYXRhcykpO1xuICAgIH1cbiovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgIHByb2plY3QgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBhZGRQcm9qZWN0TmFtZShwcm9qZWN0KXtcbiAgICAgICB0aGlzLnByb2plY3ROYW1lcy5wdXNoKHByb2plY3QuZ2V0UHJvamVjdE5hbWUoKS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KHByb2plY3Qpe1xuICAgICAgICBpZighdGhpcy5wcm9qZWN0TmFtZXMuaW5jbHVkZXMoYCR7cHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpLnRvTG93ZXJDYXNlKCl9YCkpe1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgICAgICAgdGhpcy5hZGRQcm9qZWN0TmFtZShwcm9qZWN0KTtcbiAgICAgICAgfSAgICBcbiAgICB9XG5cbiAgICBnZXRTZWxlY3RlZFByb2plY3RUKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkUHJvamVjdDtcbiAgICB9XG5cbiAgICBnZXRTZWxlY3RlZFByb2plY3QoaWRQcm9qZWN0KXtcbiAgICAgICAgY29uc3QgaWRQcm8gPSB0aGlzLnByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IGlkUHJvamVjdCA9PT0gcHJvamVjdC5nZXRJZFByb2plY3QoKSk7XG4gICAgICAgIHJldHVybiBpZFByb1swXTtcbiAgICB9XG5cbiAgICBzZXRTZWxlY3RlZFByb2plY3QocHJvamVjdCl7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdDsgIFxuICAgIH1cblxuICAgIGRlbGV0ZVByb2plY3QoaWRQcm9qZWN0KXtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gaWRQcm9qZWN0ICE9PSBwcm9qZWN0LmdldElkUHJvamVjdCgpIClcbiAgICB9XG5cbiAgICBkZWxldGVQcm9qZWN0TmFtZXMocHJvamVjdCl7XG4gICAgICAgIGNvbnN0IG5hbWVQcm9qZWN0ID0gcHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWVzID0gdGhpcy5wcm9qZWN0TmFtZXMuZmlsdGVyKG5hbWUgPT4gbmFtZSAhPT0gbmFtZVByb2plY3QpO1xuICAgIH1cblxuICAgIGVkaXRQcm9qZWN0KGlkQ2xpY2tlZCwgbmV3TmFtZSl7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lVG9FZGl0ID0gdGhpcy5nZXRTZWxlY3RlZFByb2plY3QoaWRDbGlja2VkKTtcbiAgICAgICAgaWYoIXRoaXMucHJvamVjdE5hbWVzLmluY2x1ZGVzKGAke25ld05hbWV9YCkpe1xuICAgICAgICAgICAgcHJvamVjdE5hbWVUb0VkaXQuc2V0UHJvamVjdE5hbWUobmV3TmFtZSk7XG4gICAgICAgIH0gICAgICAgXG4gICAgfVxuXG5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgICAgdG9kbyAgICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBhZGRUb2RvKHRvZG8pe1xuICAgICAgICBpZih0aGlzLnNlbGVjdGVkUHJvamVjdCl7XG4gICAgICAgICAgICBjb25zdCBwcm9qZXRTZWxlY3RlZCA9IHRoaXMucHJvamVjdHMuZmlsdGVyKCBwcm9qZWN0ID0+IHRoaXMuc2VsZWN0ZWRQcm9qZWN0LmdldElkUHJvamVjdCgpID09PSBwcm9qZWN0LmdldElkUHJvamVjdCgpIClbMF07XG4gICAgICAgICAgICBwcm9qZXRTZWxlY3RlZC5hZGRUb2RvKHRvZG8pO1xuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZFByb2plY3QocHJvamV0U2VsZWN0ZWQpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUb2RvKGlkVG9kbyl7XG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRQcm9qZWN0KXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkUHJvamVjdC50b2Rvcy5maWx0ZXIoIGVsZW1lbnQgPT4gaWRUb2RvID09PSBlbGVtZW50LmdldElkVG9kbygpKVswXTtcbiAgICAgICAgfSBcbiAgICB9XG4gICBcbiAgICBzZXRTZWxlY3RlZFRvZG8odG9kbyl7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUb2RvID0gdG9kbztcbiAgICB9XG5cbiAgICBlZGl0VG9kbyhpZCwgLi4uZGF0YSl7XG4gICAgICAgIGNvbnN0IHRvZG9Ub0VkaXQgPSB0aGlzLnNlbGVjdGVkUHJvamVjdC50b2Rvcy5maWx0ZXIoIHRvZG8gPT4gaWQgPT09IHRvZG8uZ2V0SWRUb2RvKCkpWzBdO1xuICAgICAgICBjb25zdCB0YWJsZSA9IFsuLi5kYXRhXTtcbiAgICAgICAgdG9kb1RvRWRpdC5lZGl0KHRhYmxlKTtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZFByb2plY3QodGhpcy5zZWxlY3RlZFByb2plY3QpO1xuICAgIH1cblxuICAgIGRlbGV0ZVRvZG8oaWRUb2RvKXtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFByb2plY3QudG9kb3MgPSB0aGlzLnNlbGVjdGVkUHJvamVjdC50b2Rvcy5maWx0ZXIodG9kbyA9PiBpZFRvZG8gIT09IHRvZG8uZ2V0SWRUb2RvKCkpO1xuICAgICAgICB0aGlzLnNldFNlbGVjdGVkUHJvamVjdCh0aGlzLnNlbGVjdGVkUHJvamVjdCk7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkUHJvamVjdC50b2RvcztcbiAgICB9XG5cbn1cblxuZXhwb3J0eyBNaWRkbGVNYW5hZ2VtZW50IH07IiwiY2xhc3MgUHJvamVjdHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSl7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZVxuICAgICAgICB0aGlzLmlkUHJvamVjdCA9IERhdGUubm93KCkudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdXG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdE5hbWU7XG4gICAgfSBcblxuICAgIGdldElkUHJvamVjdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5pZFByb2plY3Q7XG4gICAgfVxuXG4gICAgc2V0UHJvamVjdE5hbWUocHJvamVjdE5hbWUpe1xuICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWVcbiAgICB9XG5cbiAgICBhZGRUb2RvKHRvZG8pe1xuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gICAgfVxuXG4gICAgZ2V0VG9kb3MoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb3M7IC8qIG5vIG5lZWQgdG8gY3JlYXRlIHRoaXMgZnVuY3Rpb24gc2luY2UgeW91IGNhbiBhY2NlcyB0byBpdCBkaXJlY3RseSAqL1xuICAgIH1cblxuICAgIGdldERhdGFzVG9kb3MoKXsgLyogYWxsIHRvZG9zICovXG4gICAgICAgIGNvbnN0IGRhdGFzID0gW107XG4gICAgICAgIHRoaXMudG9kb3MuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGRhdGFzLnB1c2goZWxlbWVudC5nZXREYXRhc1RvZG8oKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkYXRhcztcbiAgICB9XG5cbn1cblxuZXhwb3J0eyBQcm9qZWN0IH07IiwiY2xhc3MgVG9kb3tcbiAgICBjb25zdHJ1Y3Rvcih0b2RvTmFtZSl7XG4gICAgICAgIHRoaXMudG9kb05hbWUgPSB0b2RvTmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmRhdGUgPSAnJztcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9ICcnO1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pZFRvZG8gPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgZ2V0VG9kb05hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb05hbWU7XG4gICAgfVxuXG4gICAgZ2V0SWRUb2RvKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmlkVG9kbztcbiAgICB9XG5cbiAgICBnZXREYXRlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGU7XG4gICAgfVxuXG4gICAgZ2V0UHJpb3JpdHkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0Q2hlY2tlZCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja2VkO1xuICAgIH1cblxuICAgIHNldENoZWNrZWQoY2hlY2spe1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBjaGVjaztcbiAgICB9XG5cbiAgICBlZGl0KFtuZXdOYW1lLCBuZXdEZXNjcmlwdGlvbiwgbmV3RGF0ZSwgbmV3UHJpb3JpdHldKXtcbiAgICAgICAgdGhpcy50b2RvTmFtZSA9IG5ld05hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kYXRlID0gbmV3RGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH1cblxuICAgIGdldERhdGFzVG9kbyA9ICgpID0+ICh7XG4gICAgICAgIGlkVG9kbyA6IHRoaXMuZ2V0SWRUb2RvKCksXG4gICAgICAgIHRvZG9OYW1lIDogdGhpcy5nZXRUb2RvTmFtZSgpLFxuICAgICAgICBkZXNjcmlwdGlvbiA6IHRoaXMuZ2V0RGVzY3JpcHRpb24oKSxcbiAgICAgICAgZGF0ZSA6IHRoaXMuZ2V0RGF0ZSgpLFxuICAgICAgICBwcmlvcml0eSA6IHRoaXMuZ2V0UHJpb3JpdHkoKSxcbiAgICAgICAgY2hlY2tlZCA6IHRoaXMuZ2V0Q2hlY2tlZCgpLFxuICAgIH0pO1xuXG59XG5cbmV4cG9ydHsgVG9kbyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBVSURlc2lnbiwgcmVuZGVyVmlldywgcmVuZGVyQXBwLCBhZGRQcm9qZWN0LCBzZWxlY3RlZFByb2plY3QsIGFkZFRhc2ssIHNlbGVjdEVkaXRUb2RvLCBkZWxldGVUYXNrLCBkZWxldGVQcm9qZWN0LCBlZGl0UHJvamVjdCwgdXBkYXRlRWRpdGVkUHJvamVjdCwgdW5zZWxlY3RlQWxsUHJvamVjdCB9IGZyb20gJy4uL3NyYy9zY3JpcHRzL1VJRGVzaWduLmpzJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9zcmMvc2NyaXB0cy9wcm9qZWN0LmpzJztcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi9zcmMvc2NyaXB0cy90b2RvLmpzJztcbmltcG9ydCB7IE1pZGRsZU1hbmFnZW1lbnQgfSBmcm9tICcuLi9zcmMvc2NyaXB0cy9taWRkbGVNYW5hZ2VtZW50JztcbmltcG9ydCAnLi9zdHlsZS9zdHlsZS5jc3MnO1xuXG5jb25zdCB1aSA9IG5ldyBVSURlc2lnbigpO1xuY29uc3QgbWFuYWdlbWVudCA9IG5ldyBNaWRkbGVNYW5hZ2VtZW50KCk7XG5cbnJlbmRlckFwcCh1aSk7XG5yZW5kZXJWaWV3KHVpLCAnd2VsY29tZUJhY2tncm91bmQnKTtcblxuXG5cbi8qLS0tLS0tLS0tLS0tIExvY2FsIHN0b3JhZ2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKlxuaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpe1xuICAgIGNvbnN0IExkYXRhcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICAgIFxuICAgIExkYXRhcy5mb3JFYWNoKCBkYXRhID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KGAke2RhdGEubmFtZVByb2plY3R9YCk7XG4gICAgICAgIGRhdGEudG9kb3MuZm9yRWFjaCggdG9kbyA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VG9kbyA9IG5ldyBUb2RvKGAke3RvZG8udG9kb05hbWV9YCk7XG4gICAgICAgICAgICBjb25zdCB0YWJsZSA9IFtjdXJyZW50VG9kby5uYW1lVG9kbywgY3VycmVudFRvZG8uZGVzY3JpcHRpb24sIGN1cnJlbnRUb2RvLmRhdGUsIGN1cnJlbnRUb2RvLnByaW9yaXR5XTtcbiAgICAgICAgICAgIGN1cnJlbnRUb2RvLmVkaXQodGFibGUpO1xuICAgICAgICAgICAgcHJvamVjdC5hZGRUb2RvKGN1cnJlbnRUb2RvKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG1hbmFnZW1lbnQuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgYWRkUHJvamVjdCh1aSwgcHJvamVjdCk7XG4gICAgfSk7XG59ICovXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbnVpLmJ1dHRvbk5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICB1bnNlbGVjdGVBbGxQcm9qZWN0KCk7XG4gICAgcmVuZGVyVmlldyh1aSwgJ2NyZWF0ZVByb2plY3RWaWV3Jyk7XG59KTtcblxuXG51aS5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpPT57XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGAke3VpLmlucHV0UHJvamVjdC52YWx1ZX1gKTtcbiAgICBhZGRQcm9qZWN0KHVpLCBuZXdQcm9qZWN0KTtcbiAgICBtYW5hZ2VtZW50LmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgbWFuYWdlbWVudC5zdG9yZUludG9Mb2NhbFN0b3JhZ2UoKTtcbn0pO1xuXG5cbnVpLnByb2plY3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3ROYW1lJykpe1xuICAgICAgICBjb25zdCBwcm9qZWN0Q2xpY2tlZCA9IG1hbmFnZW1lbnQuZ2V0U2VsZWN0ZWRQcm9qZWN0KGUudGFyZ2V0LmlkKTtcbiAgICAgICAgaWYocHJvamVjdENsaWNrZWQpe1xuICAgICAgICAgICAgbWFuYWdlbWVudC5zZXRTZWxlY3RlZFByb2plY3QocHJvamVjdENsaWNrZWQpO1xuICAgICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0KHVpLCBwcm9qZWN0Q2xpY2tlZCk7XG4gICAgICAgICAgICByZW5kZXJWaWV3KHVpLCAncHJvamVjdFNlbGVjdGVkJyk7ICAgICAgXG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG51aS5hcHAuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2dCkgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtVGFzaycpKXtcbiAgICAgICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKGAke3VpLmlucHV0VGFzay52YWx1ZX1gKTtcbiAgICAgICAgY29uc3QgYWRkZWQgPSBtYW5hZ2VtZW50LmFkZFRvZG8obmV3VG9kbyk7XG4gICAgICAgIGFkZFRhc2sodWksIG5ld1RvZG8pO1xuICAgICAgICBtYW5hZ2VtZW50LnN0b3JlSW50b0xvY2FsU3RvcmFnZSgpOyBcbiAgICB9XG5cbiAgICBpZihldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdFRvZG9mb3JtJykpe1xuICAgICAgICBjb25zdCB0b2RvTmFtZSA9IHVpLmlucHV0RWRpdFRleHQudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdWkudGV4dEFyZWEudmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGUgPSB1aS5pbnB1dERhdGUudmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gdWkucHJpb3JpdHlTZWxlY3Rpb24udmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgXG4gICAgICAgIG1hbmFnZW1lbnQuZWRpdFRvZG8oZXZ0LnRhcmdldC5pZCwgdG9kb05hbWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSlcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG1hbmFnZW1lbnQuZ2V0U2VsZWN0ZWRQcm9qZWN0VCgpO1xuICAgICAgICBzZWxlY3RlZFByb2plY3QodWksIHByb2plY3QpO1xuICAgICAgICByZW5kZXJWaWV3KHVpLCAncHJvamVjdFNlbGVjdGVkJyk7XG4gICAgICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgIGFkZFRhc2sodWksIHRvZG8pO1xuICAgICAgICB9KTsgICBcbiAgICAgICAgbWFuYWdlbWVudC5zdG9yZUludG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBpZihldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdEZvcm1FZGl0Jykpe1xuICAgICAgICBjb25zdCBpZENsaWNrZWQgPSBldnQudGFyZ2V0LmlkO1xuICAgICAgICBjb25zdCBuZXdOYW1lID0gdWkuaW5wdXRQcm9qZWN0LnZhbHVlXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lVG9FZGl0ID0gbWFuYWdlbWVudC5nZXRTZWxlY3RlZFByb2plY3QoaWRDbGlja2VkKTtcbiAgICAgICAgbWFuYWdlbWVudC5lZGl0UHJvamVjdChpZENsaWNrZWQsIG5ld05hbWUpO1xuICAgICAgICB1cGRhdGVFZGl0ZWRQcm9qZWN0KHVpLCBwcm9qZWN0TmFtZVRvRWRpdCk7XG4gICAgICAgIG1hbmFnZW1lbnQuc3RvcmVJbnRvTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxufSk7XG5cblxudWkuYXBwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xuICAgIFxuICAgIGlmKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0VG9kbycpKXtcbiAgICAgICAgY29uc3QgaWRUb2RvQ2xpY2tlZCA9IGV2dC50YXJnZXQuaWRcbiAgICAgICAgY29uc3QgdG9kb1RvRWRpdCA9IG1hbmFnZW1lbnQuZ2V0VG9kbyhpZFRvZG9DbGlja2VkKTtcbiAgICAgICAgbWFuYWdlbWVudC5zZXRTZWxlY3RlZFRvZG8odG9kb1RvRWRpdCk7XG4gICAgICAgIHNlbGVjdEVkaXRUb2RvKHVpLCB0b2RvVG9FZGl0KTtcbiAgICAgICAgcmVuZGVyVmlldyh1aSwgJ2VkaXRUb2RvVmlldycpO1xuICAgIH1cblxuICAgIGlmKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdiYWNrVG9UYXNrUGFnZScpIHx8IGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1jaGV2cm9uLWxlZnQnKSl7XG4gICAgICAgIHJlbmRlclZpZXcodWksICdwcm9qZWN0U2VsZWN0ZWQnKTtcbiAgICB9XG5cbiAgICBpZihldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlVG9kbycpKXtcbiAgICAgICAgY29uc3QgaWREZWxldGVDbGlja2VkID0gZXZ0LnRhcmdldC5pZDtcbiAgICAgICAgY29uc3QgdG9kb1RvRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2lkRGVsZXRlQ2xpY2tlZH1cIl1gKTtcbiAgICAgICAgZGVsZXRlVGFzayh1aSwgdG9kb1RvRGVsZXRlKTtcbiAgICAgICAgbWFuYWdlbWVudC5kZWxldGVUb2RvKGlkRGVsZXRlQ2xpY2tlZCk7XG4gICAgICAgIG1hbmFnZW1lbnQuc3RvcmVJbnRvTG9jYWxTdG9yYWdlKCk7ICAgXG4gICAgfVxuXG4gICAgaWYoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG9Ub0NoZWNrJykpe1xuICAgICAgICBjb25zdCBpZENsaWNrZWQgPSBldnQudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgIGNvbnN0IHRvZG9Ub0NoZWNrID0gbWFuYWdlbWVudC5nZXRUb2RvKGlkQ2xpY2tlZCk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRMaSA9IGV2dC50YXJnZXQucGFyZW50Tm9kZTtcblxuICAgICAgICBpZih0b2RvVG9DaGVjay5nZXRDaGVja2VkKCkgPT09IHRydWUpe1xuICAgICAgICAgICAgdG9kb1RvQ2hlY2suc2V0Q2hlY2tlZChmYWxzZSk7XG4gICAgICAgICAgICBlbGVtZW50TGkuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xuICAgICAgICAgICAgZWxlbWVudExpLnN0eWxlID0gJyc7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdG9kb1RvQ2hlY2suc2V0Q2hlY2tlZCh0cnVlKTtcbiAgICAgICAgICAgIGVsZW1lbnRMaS5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gICAgICAgICAgICBlbGVtZW50TGkuc3R5bGUuc2V0UHJvcGVydHkoJy0tYWZ0ZXJCYWNrJywgJyNjY2MnKTtcbiAgICAgICAgfVxuICAgICAgICBtYW5hZ2VtZW50LnNldFNlbGVjdGVkVG9kbyh0b2RvVG9DaGVjayk7XG4gICAgICAgIG1hbmFnZW1lbnQuc3RvcmVJbnRvTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgaWYoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZVByb2plY3QnKSl7XG4gICAgICAgIGNvbnN0IGlkUHJvamVjdENsaWNrZWQgPSBldnQudGFyZ2V0LmlkO1xuICAgICAgICBjb25zdCBwcm9qZWN0Q2xpY2tlZCA9IG1hbmFnZW1lbnQuZ2V0U2VsZWN0ZWRQcm9qZWN0KGlkUHJvamVjdENsaWNrZWQpO1xuICAgICAgICBjb25zdCBwcm9qZWN0RWxlbWVudFRvRGVsZXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWRQcm9qZWN0Q2xpY2tlZH1gKS5wYXJlbnROb2RlO1xuICAgICAgICBtYW5hZ2VtZW50LmRlbGV0ZVByb2plY3ROYW1lcyhwcm9qZWN0Q2xpY2tlZCk7XG4gICAgICAgIG1hbmFnZW1lbnQuZGVsZXRlUHJvamVjdChwcm9qZWN0Q2xpY2tlZCk7XG4gICAgICAgIGRlbGV0ZVByb2plY3QodWksIHByb2plY3RFbGVtZW50VG9EZWxldGUpO1xuICAgICAgICBtYW5hZ2VtZW50LnN0b3JlSW50b0xvY2FsU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIGlmKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0UHJvamVjdCcpKXtcbiAgICAgICAgY29uc3QgaWRQcm9qZWN0Q2xpY2tlZCA9IGV2dC50YXJnZXQuaWQ7XG4gICAgICAgIGNvbnN0IHByb2plY3RUb0VkaXQgPSBtYW5hZ2VtZW50LmdldFNlbGVjdGVkUHJvamVjdChpZFByb2plY3RDbGlja2VkKTtcbiAgICAgICAgZWRpdFByb2plY3QodWksIHByb2plY3RUb0VkaXQpO1xuICAgICAgICBtYW5hZ2VtZW50LnN0b3JlSW50b0xvY2FsU3RvcmFnZSgpO1xuICAgIH0gXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=