"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/lib/getBaseRoute.js":
/*!*********************************!*\
  !*** ./src/lib/getBaseRoute.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBaseRoute\": () => (/* binding */ getBaseRoute)\n/* harmony export */ });\nconst getBaseRoute = `http://ec2-13-48-45-72.eu-north-1.compute.amazonaws.com:8080`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2dldEJhc2VSb3V0ZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsZUFBZSxDQUFDLDREQUE0RCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJtYW50by8uL3NyYy9saWIvZ2V0QmFzZVJvdXRlLmpzP2YzMzIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldEJhc2VSb3V0ZSA9IGBodHRwOi8vZWMyLTEzLTQ4LTQ1LTcyLmV1LW5vcnRoLTEuY29tcHV0ZS5hbWF6b25hd3MuY29tOjgwODBgO1xuIl0sIm5hbWVzIjpbImdldEJhc2VSb3V0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/lib/getBaseRoute.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _lib_getBaseRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/getBaseRoute */ \"(api)/./src/lib/getBaseRoute.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nlet res;\nconst authOptions = {\n    // Configure one or more authentication providers\n    secret: \"my-secret-string\",\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            name: \"Credentials\",\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\",\n                    placeholder: \"jsmith\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                try {\n                    console.log(credentials);\n                    let url = ` ${_lib_getBaseRoute__WEBPACK_IMPORTED_MODULE_3__.getBaseRoute}/login`;\n                    const data = {\n                        username: credentials.username,\n                        password: credentials.password\n                    };\n                    res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(url, data);\n                    let user = res?.data;\n                    if (credentials?.username * 1 !== 10002) {\n                        user.role = \"manager\";\n                    }\n                    user.id = credentials.username * 1;\n                    console.log(\"user\", user?.accessToken, {\n                        algorithm: \"HS256\"\n                    });\n                    let token = \"SomeRandomKey\";\n                    // let decoded = jwt.verify(user?.accessToken, token);\n                    // console.log(\"decoded\", decoded);\n                    console.log(res?.data);\n                    if (res?.status === 200) {\n                        return user;\n                    } else {\n                        throw new Error(res?.data?.msg || \"Something went wrong.Please try later\");\n                    }\n                } catch (error) {\n                    console.log(error, \"hlello\");\n                    throw new Error(res?.data?.msg || \"Something went wrong.Please try later\");\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token , user  }) {\n            return {\n                ...token,\n                ...user\n            };\n        },\n        async session ({ session , token , user  }) {\n            // here token is value returned from above callback jwt\n            session.user = token;\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/login\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNpQztBQUN4QztBQUN3QjtBQUVsRCxJQUFJSTtBQUNHLE1BQU1DLGNBQWM7SUFDekIsaURBQWlEO0lBQ2pEQyxRQUFRO0lBRVJDLFdBQVc7UUFDVE4sc0VBQW1CQSxDQUFDO1lBQ2xCTyxNQUFNO1lBRU5DLGFBQWE7Z0JBQ1hDLFVBQVU7b0JBQUVDLE9BQU87b0JBQVlDLE1BQU07b0JBQVFDLGFBQWE7Z0JBQVM7Z0JBQ25FQyxVQUFVO29CQUFFSCxPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUcsV0FBVU4sV0FBVyxFQUFFTyxHQUFHLEVBQUU7Z0JBQ2hDLElBQUk7b0JBQ0ZDLFFBQVFDLEdBQUcsQ0FBQ1Q7b0JBRVosSUFBSVUsTUFBTSxDQUFDLENBQUMsRUFBRWhCLDJEQUFZQSxDQUFDLE1BQU0sQ0FBQztvQkFDbEMsTUFBTWlCLE9BQU87d0JBQ1hWLFVBQVVELFlBQVlDLFFBQVE7d0JBQzlCSSxVQUFVTCxZQUFZSyxRQUFRO29CQUNoQztvQkFFQVYsTUFBTSxNQUFNRixrREFBVSxDQUFDaUIsS0FBS0M7b0JBRTVCLElBQUlFLE9BQU9sQixLQUFLZ0I7b0JBRWhCLElBQUlYLGFBQWFDLFdBQVcsTUFBTSxPQUFPO3dCQUN2Q1ksS0FBS0MsSUFBSSxHQUFHO29CQUNkLENBQUM7b0JBRURELEtBQUtFLEVBQUUsR0FBR2YsWUFBWUMsUUFBUSxHQUFHO29CQUNqQ08sUUFBUUMsR0FBRyxDQUFDLFFBQVFJLE1BQU1HLGFBQWE7d0JBQUVDLFdBQVc7b0JBQVE7b0JBQzVELElBQUlDLFFBQVE7b0JBQ1osc0RBQXNEO29CQUV0RCxtQ0FBbUM7b0JBRW5DVixRQUFRQyxHQUFHLENBQUNkLEtBQUtnQjtvQkFFakIsSUFBSWhCLEtBQUt3QixXQUFXLEtBQUs7d0JBQ3ZCLE9BQU9OO29CQUNULE9BQU87d0JBQ0wsTUFBTSxJQUFJTyxNQUNSekIsS0FBS2dCLE1BQU1VLE9BQU8seUNBQ2xCO29CQUNKLENBQUM7Z0JBQ0gsRUFBRSxPQUFPQyxPQUFPO29CQUNkZCxRQUFRQyxHQUFHLENBQUNhLE9BQU87b0JBQ25CLE1BQU0sSUFBSUYsTUFDUnpCLEtBQUtnQixNQUFNVSxPQUFPLHlDQUNsQjtnQkFDSjtZQUNGO1FBQ0Y7S0FDRDtJQUVERSxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFTixNQUFLLEVBQUVMLEtBQUksRUFBRSxFQUFFO1lBQ3pCLE9BQU87Z0JBQUUsR0FBR0ssS0FBSztnQkFBRSxHQUFHTCxJQUFJO1lBQUM7UUFDN0I7UUFDQSxNQUFNWSxTQUFRLEVBQUVBLFFBQU8sRUFBRVAsTUFBSyxFQUFFTCxLQUFJLEVBQUUsRUFBRTtZQUN0Qyx1REFBdUQ7WUFDdkRZLFFBQVFaLElBQUksR0FBR0s7WUFFZixPQUFPTztRQUNUO0lBQ0Y7SUFDQUMsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7QUFDRixFQUFFO0FBRUYsaUVBQWVwQyxnREFBUUEsQ0FBQ0ssWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Blcm1hbnRvLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NzhhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGdldEJhc2VSb3V0ZSB9IGZyb20gXCJAL2xpYi9nZXRCYXNlUm91dGVcIjtcblxubGV0IHJlcztcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xuICBzZWNyZXQ6IFwibXktc2VjcmV0LXN0cmluZ1wiLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxuXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICB1c2VybmFtZTogeyBsYWJlbDogXCJVc2VybmFtZVwiLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwianNtaXRoXCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjcmVkZW50aWFscyk7XG5cbiAgICAgICAgICBsZXQgdXJsID0gYCAke2dldEJhc2VSb3V0ZX0vbG9naW5gO1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICB1c2VybmFtZTogY3JlZGVudGlhbHMudXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCBkYXRhKTtcblxuICAgICAgICAgIGxldCB1c2VyID0gcmVzPy5kYXRhO1xuXG4gICAgICAgICAgaWYgKGNyZWRlbnRpYWxzPy51c2VybmFtZSAqIDEgIT09IDEwMDAyKSB7XG4gICAgICAgICAgICB1c2VyLnJvbGUgPSBcIm1hbmFnZXJcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1c2VyLmlkID0gY3JlZGVudGlhbHMudXNlcm5hbWUgKiAxO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlclwiLCB1c2VyPy5hY2Nlc3NUb2tlbiwgeyBhbGdvcml0aG06IFwiSFMyNTZcIiB9KTtcbiAgICAgICAgICBsZXQgdG9rZW4gPSBcIlNvbWVSYW5kb21LZXlcIjtcbiAgICAgICAgICAvLyBsZXQgZGVjb2RlZCA9IGp3dC52ZXJpZnkodXNlcj8uYWNjZXNzVG9rZW4sIHRva2VuKTtcblxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGVjb2RlZFwiLCBkZWNvZGVkKTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcz8uZGF0YSk7XG5cbiAgICAgICAgICBpZiAocmVzPy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgcmVzPy5kYXRhPy5tc2cgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZy5QbGVhc2UgdHJ5IGxhdGVyXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBcImhsZWxsb1wiKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICByZXM/LmRhdGE/Lm1zZyB8fCBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlBsZWFzZSB0cnkgbGF0ZXJcIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG5cbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgcmV0dXJuIHsgLi4udG9rZW4sIC4uLnVzZXIgfTtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiwgdXNlciB9KSB7XG4gICAgICAvLyBoZXJlIHRva2VuIGlzIHZhbHVlIHJldHVybmVkIGZyb20gYWJvdmUgY2FsbGJhY2sgand0XG4gICAgICBzZXNzaW9uLnVzZXIgPSB0b2tlbjtcblxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL2xvZ2luXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYXhpb3MiLCJnZXRCYXNlUm91dGUiLCJyZXMiLCJhdXRoT3B0aW9ucyIsInNlY3JldCIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInJlcSIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJkYXRhIiwicG9zdCIsInVzZXIiLCJyb2xlIiwiaWQiLCJhY2Nlc3NUb2tlbiIsImFsZ29yaXRobSIsInRva2VuIiwic3RhdHVzIiwiRXJyb3IiLCJtc2ciLCJlcnJvciIsImNhbGxiYWNrcyIsImp3dCIsInNlc3Npb24iLCJwYWdlcyIsInNpZ25JbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();