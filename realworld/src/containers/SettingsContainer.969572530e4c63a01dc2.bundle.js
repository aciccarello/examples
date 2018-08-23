/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
dojoWebpackJsonprealworld_app(["src/containers/SettingsContainer"],{'./node_modules/umd-compat-loader/index.js?{}!./node_modules/ts-loader/index.js?{"onlyCompileBundledFiles":true,"instance":"dojo","compilerOptions":{}}!./node_modules/tslint-loader/index.js?{"configuration":{"rules":{"align":false,"ban":[],"class-name":true,"comment-format":[true,"check-space"],"curly":true,"eofline":true,"forin":false,"indent":[true,"tabs"],"interface-name":[true,"never-prefix"],"jsdoc-format":true,"label-position":true,"max-line-length":120,"member-access":false,"member-ordering":false,"no-any":false,"no-arg":true,"no-bitwise":false,"no-consecutive-blank-lines":true,"no-console":false,"no-construct":false,"no-debugger":true,"no-duplicate-variable":true,"no-empty":false,"no-eval":true,"no-inferrable-types":[true,"ignore-params"],"no-shadowed-variable":false,"no-string-literal":false,"no-switch-case-fall-through":false,"no-trailing-whitespace":true,"no-unused-expression":false,"no-use-before-declare":false,"no-var-keyword":true,"no-var-requires":false,"object-literal-sort-keys":false,"one-line":[true,"check-open-brace","check-whitespace"],"radix":true,"trailing-comma":[true,{"multiline":"never","singleline":"never"}],"triple-equals":[true,"allow-null-check"],"typedef":false,"typedef-whitespace":[true,{"call-signature":"nospace","index-signature":"nospace","parameter":"nospace","property-declaration":"nospace","variable-declaration":"nospace"},{"call-signature":"onespace","index-signature":"onespace","parameter":"onespace","property-declaration":"onespace","variable-declaration":"onespace"}],"variable-name":[true,"check-format","allow-leading-underscore","ban-keywords","allow-pascal-case"]}},"emitErrors":true,"failOnHint":true}!./node_modules/@dojo/webpack-contrib/css-module-dts-loader/index.js?type=ts&instanceName=0_dojo!./src/containers/SettingsContainer.ts':function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s("./src/widgets/Settings.ts"),n=s("./src/processes/settingsProcesses.ts"),r=s("./src/processes/loginProcesses.ts"),a=s("./src/containers/StoreContainer.ts");t.default=a.default(o.Settings,"state",{paths:[["settings"]],getProperties:function(e){var t=e.get,s=e.path;return{email:t(s("settings","email")),password:t(s("settings","password")),username:t(s("settings","username")),imageUrl:t(s("settings","image")),bio:t(s("settings","bio")),onEmailInput:n.emailInputProcess(e),onPasswordInput:n.passwordInputProcess(e),onUsernameInput:n.usernameInputProcess(e),onBioInput:n.bioInputProcess(e),onImageUrlInput:n.imageUrlInputProcess(e),onUpdateSettings:n.updateUserSettingsProcess(e),logout:r.logoutProcess(e)}}})},"./src/utils.ts":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s("./node_modules/@dojo/framework/widget-core/d.js");t.createInputNode=function(e,t,s){return o.v("fieldset",{classes:"form-group"},[o.v("input",{value:e,classes:["form-control","form-control-lg"],type:"text",placeholder:t,oninput:s})])}},"./src/widgets/Settings.ts":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s("./node_modules/tslib/tslib.es6.js"),n=s("./node_modules/@dojo/framework/widget-core/WidgetBase.js"),r=s("./node_modules/@dojo/framework/widget-core/d.js"),a=s("./src/utils.ts"),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype._onSubmit=function(e){e.preventDefault(),this.properties.onUpdateSettings({})},t.prototype._onImageUrlInput=function(e){var t=e.target.value;this.properties.onImageUrlInput({imageUrl:t})},t.prototype._onUsernameInput=function(e){var t=e.target.value;this.properties.onUsernameInput({username:t})},t.prototype._onBioInput=function(e){var t=e.target.value;this.properties.onBioInput({bio:t})},t.prototype._onEmailInput=function(e){var t=e.target.value;this.properties.onEmailInput({email:t})},t.prototype._onPasswordInput=function(e){var t=e.target.value;this.properties.onPasswordInput({password:t})},t.prototype._logout=function(){this.properties.logout({})},t.prototype.render=function(){var e=this.properties,t=e.email,s=e.password,o=e.bio,n=e.imageUrl,i=e.username;return r.v("div",{classes:"settings-page"},[r.v("div",{classes:["container","page"]},[r.v("div",{classes:"row"},[r.v("div",{classes:["col-md-6","offset-md-3","col-xs-12"]},[r.v("h1",{classes:"text-xs-center"},["Your Settings"]),r.v("form",[r.v("fieldset",[a.createInputNode(n,"URL of profile picture",this._onImageUrlInput),a.createInputNode(i,"Your Name",this._onUsernameInput),r.v("fieldset",{classes:"form-group"},[r.v("textarea",{value:o,classes:["form-control","form-control-lg"],rows:8,placeholder:"Short bio about you",oninput:this._onBioInput})]),a.createInputNode(t,"Email",this._onEmailInput),a.createInputNode(s,"Password",this._onPasswordInput),r.v("button",{onclick:this._onSubmit,type:"submit",classes:["btn","btn-lg","btn-primary","pull-xs-right"]},["Update Settings"])])]),r.v("hr"),r.v("button",{onclick:this._logout,classes:["btn","btn-outline-danger"]},["Or click here to logout"])])])])])},t}(n.WidgetBase);t.Settings=i}});
//# sourceMappingURL=SettingsContainer.969572530e4c63a01dc2.bundle.js.map