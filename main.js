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
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxRQUFRLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsWUFBWSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxNQUFNLFlBQVksUUFBUSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsUUFBUSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FB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TkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9hcHAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9pbWFnZXMvdmVjdG9yLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGVhZ3VlK1NwYXJ0YW46d2dodEA3MDAmZmFtaWx5PVNlZGd3aWNrK0F2ZSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIC0tYmxhY2s6ICMxMzEzMWE7XFxuICAgIC0tYmc6ICMwMTAxMDM7XFxuICAgIC0tYm9yZGVyOiAuMXJlbSBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4zKTtcXG4gICAgLS13aGl0ZSA6ICNmZmY7XFxufVxcblxcbip7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2VkZ3dpY2sgQXZlJywgY3Vyc2l2ZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG5odG1se1xcbiAgICBmb250LXNpemU6IDYyLjUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGFwcCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLmFwcHtcXG4gICAgd2lkdGg6IDEyMDBweDtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMjBweCAyMHB4IC0xMHB4IHJnYmEoMCwwLDAsLjMpO1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgei1pbmRleDogMTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgICB3aWR0aDogMjB2dztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2hhZG93OiA1cHggMCA1cHggcmdiYSgwLDAsMCwuMSk7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzaWRlYmFyIGV0IGNvbnRhaW5lciAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi5zaWRlYmFyIC5wcm9qZWN0c3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc2lkZWJhciAucHJvamVjdHMgLmhlYWRlcntcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xcbiAgICBjb2xvcjp2YXIoLS13aGl0ZSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXFxuICAgIHBhZGRpbmc6IDEuNnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi5zaWRlYmFyIC5wcm9qZWN0cyAuaGVhZGVyIGgxe1xcbiAgICBtYXJnaW46IDEuNXJlbSAwO1xcbn1cXG5cXG4uc2lkZWJhciAucHJvamVjdHMgLmNvbnRlbnR7XFxuICAgIGZsZXg6IDE7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4uc2lkZWJhciAucHJvamVjdHMgLmNvbnRlbnQgLnRlbXBvcmFsaXR5UHJvamVjdCB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1iZyk7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcblxcbi5hbGwsLnRvZGF5LC53ZWVrLC5tb250aHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICBwYWRkaW5nOiAwLjlyZW07XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWJhciAucHJvamVjdHMgLmNvbnRlbnQgLnRlbXBvcmFsaXR5UHJvamVjdCA+IGRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gICAgY29sb3I6IHZhcigtLWJnKTtcXG59XFxuXFxuLm5ld1Byb2plY3RCdXR0b257XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjdyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubmV3UHJvamVjdEJ1dHRvbjpob3ZlcntcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xcbn1cXG5cXG4ucHJvamVjdExpc3R7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0TGlzdCA+IGxpe1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5wcm9qZWN0TmFtZXtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5wcm9qZWN0TmFtZTpob3ZlcntcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG5cXG4uc2lkZWJhciAucHJvamVjdHMgLmNvbnRlbnQgLnByb2plY3RMaXN0IC5tYWpQcm9qZWN0IC5lZGl0UHJvamVjdDpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogIzU1NmIyZjtcXG59XFxuXFxuLnNpZGViYXIgLnByb2plY3RzIC5jb250ZW50IC5wcm9qZWN0TGlzdCAubWFqUHJvamVjdCAuZGVsZXRlUHJvamVjdDpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogIzNlMDAwMDtcXG59XFxuXFxuLmZhLXNvbGlke1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29udGFpbmVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keXtcXG4gICAgcGFkZGluZzogMy4ycmVtO1xcbiAgICBmbGV4OiAxO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmRlZmF1bHRWaWV3e1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNTB2aDtcXG4gICAgaGVpZ2h0OiA3MHZoO1xcbn1cXG5cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29udGFpbmVyIGhlYWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi5jb250YWluZXIgLmhlYWRlcntcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xcbiAgICBjb2xvcjp2YXIoLS13aGl0ZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEuNnJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAuaGVhZGVyIGgxe1xcbiAgICBtYXJnaW46IDEuNXJlbSAwO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC5wcm9qZWN0Rm9ybSxcXG4uY29udGFpbmVyIC5ib2R5IC5wcm9qZWN0Rm9ybUVkaXR7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAucHJvamVjdEZvcm0gLmZpZWxkLFxcbi5jb250YWluZXIgLmJvZHkgLnByb2plY3RGb3JtRWRpdCAuZmllbGR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAucHJvamVjdEZvcm0gLmZpZWxkIGlucHV0LFxcbi5jb250YWluZXIgLmJvZHkgLnByb2plY3RGb3JtRWRpdCAuZmllbGQgaW5wdXR7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDFyZW0gNXJlbSAxcmVtIDFyZW07XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnByb2plY3RGb3JtIC5maWVsZCBidXR0b24sXFxuLmNvbnRhaW5lciAuYm9keSAucHJvamVjdEZvcm1FZGl0IC5maWVsZCBidXR0b257XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tYmcpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMXJlbTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC5wcm9qZWN0Rm9ybSAuZmllbGQgYnV0dG9uID4gc3BhbixcXG4uY29udGFpbmVyIC5ib2R5IC5wcm9qZWN0Rm9ybUVkaXQgLmZpZWxkIGJ1dHRvbiA+IHNwYW57XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFDVElWRSBQUk9KRUNUIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi5hY3RpdmVQcm9qZWN0e1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29udGFpbmVyIGFuZCBwcm9qZWN0IGNsaWNrZWQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLmNvbnRhaW5lciAuYm9keSBmb3JtIC5maWVsZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IGZvcm0gLmZpZWxkID4gaW5wdXR7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcXG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogMCA0cmVtIDAgMXJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSBmb3JtIC5maWVsZCA+IGJ1dHRvbntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgZm9ybSAuZmllbGQgPiBidXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjb250YWluZXIgYW5kIHRvZG9MaXN0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbnVse1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHN7XFxuICAgIHBhZGRpbmc6IDJyZW0gMDtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2Rve1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kbzpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgei1pbmRleDogMztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAyMHB4IDVweCAtMTBweCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMSk7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kby5jaGVja2Vke1xcbiAgICBiYWNrZ3JvdW5kOiAjZmVmZWZlO1xcbiAgICBjb2xvcjogI2NjYztcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvLmNoZWNrZWQgLnRpdGxle1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvLmNoZWNrZWQ6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl17XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTk5OTlweDtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0gKyBsYWJlbHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgICBtaW4td2lkdGg6IDMwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0gKyBsYWJlbDo6YmVmb3Jle1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XFxuICAgIG1pbi13aWR0aDogMjVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAycHggcmdiYSgwLDAsMCwuMSk7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kbyBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdICsgbGFiZWw6OmFmdGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6ICdcXFxcMjcxM1xcXFwwMDIwJztcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xcbiAgICBtaW4td2lkdGg6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kbyBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kbyAuZGV0YWlsc3tcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8gLnByZXZpZXd7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvIGl7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kbyAuZWRpdFRvZG86aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6ICM1NTZiMmY7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kbyAuZGVsZXRlVG9kbzpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogIzNlMDAwMDtcXG59XFxuXFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvIC5wcmV2aWV3IC50aXRsZXtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kbyAucHJldmlldyAuaW5mb3RhZ3N7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8gLnByZXZpZXcgLmluZm90YWdzIC5pY29uQ2FsZW5kYXJ7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiAjY2NjO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG86OmFmdGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDVweDtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvLmhpZ2hQcmlvcml0eTo6YWZ0ZXJ7XFxuICAgIC8qIGJhY2tncm91bmQ6IHJlZDsgKi9cXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWZ0ZXJCYWNrLCByZWQpO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8ubWVkaXVtUHJpb3JpdHk6OmFmdGVye1xcbiAgICAvKiBiYWNrZ3JvdW5kOiB5ZWxsb3c7ICovXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFmdGVyQmFjaywgeWVsbG93KTtcXG59XFxuXFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvLmxvd1ByaW9yaXR5OjphZnRlcntcXG4gICAgLyogYmFja2dyb3VuZDogZ3JlZW47ICovXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFmdGVyQmFjaywgZ3JlZW4pO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8gLm90aGVyc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8uaGlnaFByaW9yaXR5OjphZnRlciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWR7XFxuICAgIGJhY2tncm91bmQ6IGdyYXk7XFxufVxcblxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tIGVkaXR0YXNrIHBhZ2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5jb250YWluZXIgLmhlYWRlciAuYmFja1RvVGFza1BhZ2V7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcXG59XFxuXFxuLmNvbnRhaW5lciAuaGVhZGVyIC5iYWNrVG9UYXNrUGFnZTpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC5lZGl0VG9kb2Zvcm0gLmZpZWxkIHRleHRhcmVhe1xcbiAgICBmbGV4OiAxO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC5lZGl0VG9kb2Zvcm0gLmZpZWxkc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjJyZW07XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLmVkaXRUb2RvZm9ybSAuZmllbGRzIC5maWVsZHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAuZWRpdFRvZG9mb3JtIC5maWVsZHMgLmZpZWxkIC50b2RvRGF0ZSxcXG4uY29udGFpbmVyIC5ib2R5IC5lZGl0VG9kb2Zvcm0gLmZpZWxkcyAuZmllbGQgLnByaW9yaXR5U2VsZWN0aW9ue1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xcbiAgICBwYWRkaW5nOiAwIDMuMTI1cmVtIDAgMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y5ZjlmOTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLmVkaXRUb2RvZm9ybSAuZmllbGRCdXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC5lZGl0VG9kb2Zvcm0gLmZpZWxkQnV0dG9uIGJ1dHRvbntcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjlmOWY5O1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC5lZGl0VG9kb2Zvcm0gLmZpZWxkQnV0dG9uIGJ1dHRvbjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC5lZGl0VG9kb2Zvcm0gLmZpZWxkQnV0dG9uIGl7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJB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bUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksT0FBTztJQUNQLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxlYWd1ZStTcGFydGFuOndnaHRANzAwJmZhbWlseT1TZWRnd2ljaytBdmUmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuOnJvb3R7XFxuICAgIC0tYmxhY2s6ICMxMzEzMWE7XFxuICAgIC0tYmc6ICMwMTAxMDM7XFxuICAgIC0tYm9yZGVyOiAuMXJlbSBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4zKTtcXG4gICAgLS13aGl0ZSA6ICNmZmY7XFxufVxcblxcbip7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2VkZ3dpY2sgQXZlJywgY3Vyc2l2ZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG5odG1se1xcbiAgICBmb250LXNpemU6IDYyLjUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGFwcCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLmFwcHtcXG4gICAgd2lkdGg6IDEyMDBweDtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMjBweCAyMHB4IC0xMHB4IHJnYmEoMCwwLDAsLjMpO1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgei1pbmRleDogMTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgICB3aWR0aDogMjB2dztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2hhZG93OiA1cHggMCA1cHggcmdiYSgwLDAsMCwuMSk7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzaWRlYmFyIGV0IGNvbnRhaW5lciAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi5zaWRlYmFyIC5wcm9qZWN0c3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc2lkZWJhciAucHJvamVjdHMgLmhlYWRlcntcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xcbiAgICBjb2xvcjp2YXIoLS13aGl0ZSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXFxuICAgIHBhZGRpbmc6IDEuNnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi5zaWRlYmFyIC5wcm9qZWN0cyAuaGVhZGVyIGgxe1xcbiAgICBtYXJnaW46IDEuNXJlbSAwO1xcbn1cXG5cXG4uc2lkZWJhciAucHJvamVjdHMgLmNvbnRlbnR7XFxuICAgIGZsZXg6IDE7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4uc2lkZWJhciAucHJvamVjdHMgLmNvbnRlbnQgLnRlbXBvcmFsaXR5UHJvamVjdCB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1iZyk7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcblxcbi5hbGwsLnRvZGF5LC53ZWVrLC5tb250aHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICBwYWRkaW5nOiAwLjlyZW07XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWJhciAucHJvamVjdHMgLmNvbnRlbnQgLnRlbXBvcmFsaXR5UHJvamVjdCA+IGRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gICAgY29sb3I6IHZhcigtLWJnKTtcXG59XFxuXFxuLm5ld1Byb2plY3RCdXR0b257XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjdyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubmV3UHJvamVjdEJ1dHRvbjpob3ZlcntcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xcbn1cXG5cXG4ucHJvamVjdExpc3R7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0TGlzdCA+IGxpe1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5wcm9qZWN0TmFtZXtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5wcm9qZWN0TmFtZTpob3ZlcntcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG5cXG4uc2lkZWJhciAucHJvamVjdHMgLmNvbnRlbnQgLnByb2plY3RMaXN0IC5tYWpQcm9qZWN0IC5lZGl0UHJvamVjdDpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogIzU1NmIyZjtcXG59XFxuXFxuLnNpZGViYXIgLnByb2plY3RzIC5jb250ZW50IC5wcm9qZWN0TGlzdCAubWFqUHJvamVjdCAuZGVsZXRlUHJvamVjdDpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogIzNlMDAwMDtcXG59XFxuXFxuLmZhLXNvbGlke1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29udGFpbmVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keXtcXG4gICAgcGFkZGluZzogMy4ycmVtO1xcbiAgICBmbGV4OiAxO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmRlZmF1bHRWaWV3e1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9pbWFnZXMvdmVjdG9yLnBuZyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA1MHZoO1xcbiAgICBoZWlnaHQ6IDcwdmg7XFxufVxcblxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjb250YWluZXIgaGVhZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLmNvbnRhaW5lciAuaGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XFxuICAgIGNvbG9yOnZhcigtLXdoaXRlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMS42cmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIC5oZWFkZXIgaDF7XFxuICAgIG1hcmdpbjogMS41cmVtIDA7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnByb2plY3RGb3JtLFxcbi5jb250YWluZXIgLmJvZHkgLnByb2plY3RGb3JtRWRpdHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC5wcm9qZWN0Rm9ybSAuZmllbGQsXFxuLmNvbnRhaW5lciAuYm9keSAucHJvamVjdEZvcm1FZGl0IC5maWVsZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC5wcm9qZWN0Rm9ybSAuZmllbGQgaW5wdXQsXFxuLmNvbnRhaW5lciAuYm9keSAucHJvamVjdEZvcm1FZGl0IC5maWVsZCBpbnB1dHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMXJlbSA1cmVtIDFyZW0gMXJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAucHJvamVjdEZvcm0gLmZpZWxkIGJ1dHRvbixcXG4uY29udGFpbmVyIC5ib2R5IC5wcm9qZWN0Rm9ybUVkaXQgLmZpZWxkIGJ1dHRvbntcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1iZyk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0xcmVtO1xcbiAgICByaWdodDogMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnByb2plY3RGb3JtIC5maWVsZCBidXR0b24gPiBzcGFuLFxcbi5jb250YWluZXIgLmJvZHkgLnByb2plY3RGb3JtRWRpdCAuZmllbGQgYnV0dG9uID4gc3BhbntcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQUNUSVZFIFBST0pFQ1QgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLmFjdGl2ZVByb2plY3R7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjb250YWluZXIgYW5kIHByb2plY3QgY2xpY2tlZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4uY29udGFpbmVyIC5ib2R5IGZvcm0gLmZpZWxke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgZm9ybSAuZmllbGQgPiBpbnB1dHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiAwIDRyZW0gMCAxcmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IGZvcm0gLmZpZWxkID4gYnV0dG9ue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSBmb3JtIC5maWVsZCA+IGJ1dHRvbjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbnRhaW5lciBhbmQgdG9kb0xpc3QgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxudWx7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0c3tcXG4gICAgcGFkZGluZzogMnJlbSAwO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG97XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDIwcHggNXB4IC0xMHB4IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4xKTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvLmNoZWNrZWR7XFxuICAgIGJhY2tncm91bmQ6ICNmZWZlZmU7XFxuICAgIGNvbG9yOiAjY2NjO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8uY2hlY2tlZCAudGl0bGV7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8uY2hlY2tlZDpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtOTk5OXB4O1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSArIGxhYmVse1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICAgIG1pbi13aWR0aDogMzBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSArIGxhYmVsOjpiZWZvcmV7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgbWluLWhlaWdodDogMjVweDtcXG4gICAgbWluLXdpZHRoOiAyNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCByZ2JhKDAsMCwwLC4xKTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0gKyBsYWJlbDo6YWZ0ZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogJ1xcXFwyNzEzXFxcXDAwMjAnO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XFxuICAgIG1pbi13aWR0aDogMjVweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjphZnRlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvIC5kZXRhaWxze1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kbyAucHJldmlld3tcXG4gICAgZmxleDogMTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8gaXtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvIC5lZGl0VG9kbzpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogIzU1NmIyZjtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvIC5kZWxldGVUb2RvOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiAjM2UwMDAwO1xcbn1cXG5cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8gLnByZXZpZXcgLnRpdGxle1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3RzIC50b2RvIC5wcmV2aWV3IC5pbmZvdGFnc3tcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kbyAucHJldmlldyAuaW5mb3RhZ3MgLmljb25DYWxlbmRhcntcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6ICNjY2M7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kbzo6YWZ0ZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogNXB4O1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8uaGlnaFByaW9yaXR5OjphZnRlcntcXG4gICAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hZnRlckJhY2ssIHJlZCk7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kby5tZWRpdW1Qcmlvcml0eTo6YWZ0ZXJ7XFxuICAgIC8qIGJhY2tncm91bmQ6IHllbGxvdzsgKi9cXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWZ0ZXJCYWNrLCB5ZWxsb3cpO1xcbn1cXG5cXG5cXG4uY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdHMgLnRvZG8ubG93UHJpb3JpdHk6OmFmdGVye1xcbiAgICAvKiBiYWNrZ3JvdW5kOiBncmVlbjsgKi9cXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWZ0ZXJCYWNrLCBncmVlbik7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kbyAub3RoZXJze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcblxcbi5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0cyAudG9kby5oaWdoUHJpb3JpdHk6OmFmdGVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZHtcXG4gICAgYmFja2dyb3VuZDogZ3JheTtcXG59XFxuXFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0gZWRpdHRhc2sgcGFnZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLmNvbnRhaW5lciAuaGVhZGVyIC5iYWNrVG9UYXNrUGFnZXtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xcbn1cXG5cXG4uY29udGFpbmVyIC5oZWFkZXIgLmJhY2tUb1Rhc2tQYWdlOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLmVkaXRUb2RvZm9ybSAuZmllbGQgdGV4dGFyZWF7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLmVkaXRUb2RvZm9ybSAuZmllbGRze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuMnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAuZWRpdFRvZG9mb3JtIC5maWVsZHMgLmZpZWxke1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2R5IC5lZGl0VG9kb2Zvcm0gLmZpZWxkcyAuZmllbGQgLnRvZG9EYXRlLFxcbi5jb250YWluZXIgLmJvZHkgLmVkaXRUb2RvZm9ybSAuZmllbGRzIC5maWVsZCAucHJpb3JpdHlTZWxlY3Rpb257XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XFxuICAgIHBhZGRpbmc6IDAgMy4xMjVyZW0gMCAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjlmOWY5O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9keSAuZWRpdFRvZG9mb3JtIC5maWVsZEJ1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLmVkaXRUb2RvZm9ybSAuZmllbGRCdXR0b24gYnV0dG9ue1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmOWY5Zjk7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLmVkaXRUb2RvZm9ybSAuZmllbGRCdXR0b24gYnV0dG9uOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb250YWluZXIgLmJvZHkgLmVkaXRUb2RvZm9ybSAuZmllbGRCdXR0b24gaXtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9