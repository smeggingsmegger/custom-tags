!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).FloatMenu={},e.vue)}(this,(function(e,n){"use strict";var t=n.defineComponent({name:"CloseIcon"}),a={class:"icon-wrapper"},l={id:"Capa_1",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 512.001 512.001",style:{"enable-background":"new 0 0 512.001 512.001"},"xml:space":"preserve"},o=[function(e){return n.pushScopeId("data-v-1a43cbde"),e=e(),n.popScopeId(),e}((function(){return n.createElementVNode("g",null,[n.createElementVNode("g",null,[n.createElementVNode("path",{d:"M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717\n        L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859\n        c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287\n        l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285\n        L284.286,256.002z"})])],-1)}))];t.render=function(e,t,r,u,i,c){return n.openBlock(),n.createElementBlock("div",a,[(n.openBlock(),n.createElementBlock("svg",l,o))])},t.__scopeId="data-v-1a43cbde",t.__file="src/components/CloseIcon.vue";var r=n.defineComponent({name:"SmartTag",components:{CloseIcon:t},props:{name:{type:String,default:""},onRemove:{type:Function,required:!0},onEdit:{type:Function,required:!0},editable:{type:Boolean,default:!1},id:{type:String,default:null},highlight:Boolean,readOnly:{type:Boolean,default:!1},tagStyle:{type:Object,default:function(){return{foreColor:"",backgroundColor:""}}}},setup:function(e){var t=n.ref(!1),a=n.ref(e.name),l=n.ref(),o=n.toRef(e,"highlight"),r=n.computed((function(){return e.editable&&t.value&&!e.readOnly})),u=n.computed((function(){return!e.readOnly})),i=n.computed((function(){return{background:o.value?"#b20000":e.tagStyle.backgroundColor,color:e.tagStyle.foreColor}}));return{handleRemove:function(n){return e.onRemove(n)},handleDoubleClick:function(){e.editable&&!e.readOnly&&(t.value=!t.value,n.nextTick((function(){l.value.focus()})))},handleSaveEdit:function(){t.value=!1,e.onEdit(e.id,a.value)},handleEscape:function(){t.value=!1},editMode:t,input:a,inputTextRef:l,canShowInputbox:r,canShowRemoveBtn:u,style:i}}});r.render=function(e,t,a,l,o,r){var u=n.resolveComponent("CloseIcon");return n.openBlock(),n.createElementBlock("div",{class:n.normalizeClass(["tag-container",{"no-remove":!e.canShowRemoveBtn}]),style:n.normalizeStyle(e.style)},[e.canShowInputbox?n.withDirectives((n.openBlock(),n.createElementBlock("input",{key:0,ref:"inputTextRef","onUpdate:modelValue":t[0]||(t[0]=function(n){return e.input=n}),type:"text",class:"tag-edit-input",onBlur:t[1]||(t[1]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleEscape&&e.handleEscape.apply(e,n)}),onKeyup:[t[2]||(t[2]=n.withKeys((function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleSaveEdit&&e.handleSaveEdit.apply(e,n)}),["enter"])),t[3]||(t[3]=n.withKeys((function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleEscape&&e.handleEscape.apply(e,n)}),["esc"]))]},null,544)),[[n.vModelText,e.input]]):(n.openBlock(),n.createElementBlock("span",{key:1,class:"tag-name",onDblclick:t[4]||(t[4]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleDoubleClick&&e.handleDoubleClick.apply(e,n)})},n.toDisplayString(e.name),33)),e.canShowRemoveBtn?(n.openBlock(),n.createElementBlock("button",{key:2,onClick:t[5]||(t[5]=function(n){return e.handleRemove(e.id)})},[n.createVNode(u)])):n.createCommentVNode("v-if",!0)],6)},r.__scopeId="data-v-bb7ceecc",r.__file="src/components/Tag.vue";var u=n.defineComponent({name:"SmartTags",components:{SmartTag:r},props:{readOnly:{type:Boolean,default:!1},tags:{type:Array,required:!0},onRemove:{type:Function,required:!0},onEdit:{type:Function,required:!0},editable:{type:Boolean,default:!1},tagStyle:{type:Object,default:function(){return{}}}},setup:function(e){var t=e.readOnly?e.tags.map((function(e){return Object.assign({},e,{editable:!1})})):e.tags,a=n.ref(t);return n.watch((function(){return e.tags}),(function(e){a.value=e})),{localTags:a,handleRemove:function(n){return e.onRemove(n)},handleEdit:function(n,t){return e.onEdit(n,t)}}}}),i={class:"tags-container"};u.render=function(e,t,a,l,o,r){var u=n.resolveComponent("SmartTag");return n.openBlock(),n.createElementBlock("div",i,[n.createVNode(n.TransitionGroup,{name:"tags-list"},{default:n.withCtx((function(){return[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(e.localTags,(function(t){return n.openBlock(),n.createBlock(u,{id:t.id,key:t.id,highlight:t.highlight,name:t.name,value:t.value,"on-remove":e.handleRemove,"on-edit":e.handleEdit,editable:e.editable,"read-only":e.readOnly,"tag-style":e.tagStyle},null,8,["id","highlight","name","value","on-remove","on-edit","editable","read-only","tag-style"])})),128))]})),_:1}),n.renderSlot(e.$slots,"default")])},u.__scopeId="data-v-acc9a86e",u.__file="src/components/Tags.vue";var c=n.defineComponent({name:"SuggestPane",props:{items:{type:Array,default:function(){return[]},required:!0},show:{type:Boolean,default:!1},onSelection:{type:Function},onPaneEsc:{type:Function},keyword:{type:String,required:!0},paneStyle:{type:Object,default:function(){return{bgColor:""}}},selectedIndex:{type:Number,default:-1}},setup:function(e){var t=n.ref(!1),a=function(n){return e.onSelection&&e.onSelection(n)},l=n.ref(null);return n.watch((function(){return e.show}),(function(e){t.value=!!e})),{handleSelection:a,showPane:t,paneRef:l,handleEnter:function(n){n.preventDefault(),n.stopImmediatePropagation();var t=e.items[e.selectedIndex];a(t)}}}}),d={key:0,class:"suggest-pane-container"},s=["onMousedown"];function f(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}c.render=function(e,t,a,l,o,r){return e.showPane?(n.openBlock(),n.createElementBlock("div",d,[n.createElementVNode("ul",{ref:"paneRef",class:"suggest-pane",style:n.normalizeStyle({background:e.paneStyle.bgColor}),tabindex:"0"},[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(e.items,(function(t,a){return n.openBlock(),n.createElementBlock("li",{key:t,class:n.normalizeClass(["suggest-pane-item",{selected:a===e.selectedIndex}]),onMousedown:function(n){return e.handleSelection(t)}},[n.createElementVNode("span",null,n.toDisplayString(t),1)],42,s)})),128))],4)])):n.createCommentVNode("v-if",!0)},c.__scopeId="data-v-f2c085e8",c.__file="src/components/SuggestPane.vue";function p(e){for(var n=void 0,t=e[0],a=1;a<e.length;){var l=e[a],o=e[a+1];if(a+=2,("optionalAccess"===l||"optionalCall"===l)&&null==t)return;"access"===l||"optionalAccess"===l?(n=t,t=o(t)):"call"!==l&&"optionalCall"!==l||(t=o((function(){for(var e=[],a=arguments.length;a--;)e[a]=arguments[a];return t.call.apply(t,[n].concat(e))})),n=void 0)}return t}var v=n.defineComponent({name:"SmartTagz",components:{SmartTags:u,SuggestionPane:c},props:{readOnly:{type:Boolean,default:!1},defaultTags:{type:Array,default:function(){return[]}},width:{type:String,default:"100%"},sources:{type:Array,default:function(){return[]}},autosuggest:{type:Boolean,default:!1},allowPaste:{type:Object,default:null},editable:{type:Boolean,default:!1},allowDuplicates:{type:Boolean,default:!0},maxTags:{type:Number,default:20},inputPlaceholder:{type:String,default:"Enter tag..."},quickDelete:{type:Boolean,default:!1},onChanged:{type:Function,default:null},theme:{type:Object,default:function(){return{primary:"#6093ca",background:"#eaf1f8",tagTextColor:"#fff"}}}},setup:function(e){var t=e.autosuggest,a=e.allowPaste;void 0===a&&(a={delimiter:","});var l=e.allowDuplicates,o=e.maxTags,r=e.defaultTags;void 0===r&&(r=[]);var u=e.sources,i=e.quickDelete,c=e.width,d=e.onChanged,s=n.ref(null),v=n.ref(r.slice(0,o).map((function(e){return{id:Math.random().toString(16).slice(2),name:e,value:e}}))),g=n.ref(null),h=n.ref(""),m=n.ref(r.length?Math.min(r.length,o):0),y=n.ref(!1),S=n.ref(!1),w=n.ref(-1),k=n.computed((function(){return{width:c}})),b=n.computed((function(){var e=new RegExp("^"+f(h.value),"i");return u.filter((function(n){return e.test(n)}))})),E=function(){try{g.value.focus()}catch(e){}};n.watch((function(){return v.value.length}),(function(){p([d,"optionalCall",function(e){return e(v.value.map((function(e){return e.value})))}])})),n.watch(h,(function(e){s.value&&(s.value=null,v.value=v.value.map((function(e){return delete e.highlight,e}))),e?(S.value=!1,t&&e.length>0?y.value=!0:t&&e.length<1&&(y.value=!1)):y.value=!1})),n.watch(S,(function(e){v.value=v.value.map((function(n){return Object.assign({},n,{highlight:e})}))}));var C=function(e){var t="",a=n.unref(w);if(function(e){var n=new RegExp("^"+f(e)+"$","ig"),t=l||!v.value.some((function(t){return t.name===e||n.test(t.name)})),a=m.value<o;return t&&a}(t=a>-1?b.value[a]:e)){var r=null;(r=y.value&&w.value>-1?b.value[w.value]:t)&&(v.value=v.value.concat({name:r,id:Math.random().toString(16).slice(2),value:r})),h.value="",y.value=!1,m.value=+m.value+1,w.value=-1,n.nextTick((function(){return E()}))}};return{tagsData:v,input:h,style:k,textInputRef:g,showSuggestions:y,selectedIndex:w,filteredItems:b,handleKeyUp:function(e){e.preventDefault();var t=n.unref(w);w.value=t>0?w.value-1:n.unref(b).length-1},handleKeydown:function(e){e.preventDefault(),n.unref(w)<n.unref(b).length-1?w.value=+w.value+1:w.value=0},handleAddTag:C,handleRemoveTag:function(e){v.value=v.value.filter((function(n){return n.id!==e})),m.value=+m.value-1},handleDelete:function(){if(!h.value){if(S.value)return v.value=[],S.value=!1,void(m.value=0);if(s.value){var e=s.value;v.value=v.value.filter((function(n){return n.id!==e.id})),s.value=null,m.value=+m.value-1}else if(v.value.length){var n=v.value[v.value.length-1];s.value={id:n.id},v.value=v.value.map((function(e){return e.id===n.id?Object.assign({},e,{highlight:!0}):e}))}}},handleEscape:function(){return v.value=v.value.map((function(e){return delete e.highlight,e})),y.value=!1,S.value=!1,void(w.value=-1)},handlePaste:function(e){e.stopPropagation(),e.preventDefault();var t=p([e,"access",function(e){return e.clipboardData},"optionalAccess",function(e){return e.getData},"call",function(e){return e("text")}]);if(t){var r=function(e,n,t,a,l,o){if(n){var r=t-a,u=l?n.split(l):[];if(!(u.length>1))return{newData:e.concat({name:n,value:n,id:Math.random().toString(16).slice(2)}),tagsCreated:a+1};if(u=u.slice(0,Math.min(u.length,r)),!o){var i=e.map((function(e){return e.name})),c=u.filter((function(e){return!1===i.includes(e)}));u=[].concat(new Set(c))}if(u.length)return{newData:e.concat(u.map((function(e){return{name:e,value:e,id:Math.random().toString(16).slice(2)}}))),tagsCreated:a+u.length}}}(n.unref(v),t,o,+n.unref(m),p([a,"optionalAccess",function(e){return e.delimiter}]),l);p([r,"optionalAccess",function(e){return e.newData}])&&(v.value=r.newData,m.value=r.tagsCreated)}},handleEditTag:function(e,n){v.value=v.value.map((function(t){return t.id===e?Object.assign({},t,{name:n,value:n}):t})),p([d,"optionalCall",function(e){return e(v.value.map((function(e){return e.value})))}])},handleSuggestSelection:function(e){y.value=!1,n.nextTick((function(){C(e)}))},handleSuggestEsc:function(){E(),y.value=!1},handleSelectAll:function(e){i&&(65!==e.keyCode||h.value||(S.value=!0,s.value=null))}}}}),g={key:0,class:"input-wrapper"},h=["placeholder"];v.render=function(e,t,a,l,o,r){var u=n.resolveComponent("SuggestionPane"),i=n.resolveComponent("SmartTags");return n.openBlock(),n.createElementBlock("div",{class:"tags-main",style:n.normalizeStyle({background:e.theme.background}),onKeyup:t[9]||(t[9]=n.withModifiers((function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleSelectAll&&e.handleSelectAll.apply(e,n)}),["ctrl"]))},[n.createVNode(i,{tags:e.tagsData,"on-remove":e.handleRemoveTag,"on-edit":e.handleEditTag,editable:e.editable,"read-only":e.readOnly,"tag-style":{foreColor:e.theme.tagTextColor,backgroundColor:e.theme.primary}},{default:n.withCtx((function(){return[e.tagsData.length<e.maxTags?(n.openBlock(),n.createElementBlock("div",g,[e.readOnly?n.createCommentVNode("v-if",!0):n.withDirectives((n.openBlock(),n.createElementBlock("input",{key:0,ref:"textInputRef","onUpdate:modelValue":t[0]||(t[0]=function(n){return e.input=n}),type:"text",placeholder:e.inputPlaceholder,onKeyup:[t[1]||(t[1]=n.withKeys((function(n){return e.handleAddTag(n.target.value.trim())}),["enter"])),t[2]||(t[2]=n.withKeys((function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleDelete&&e.handleDelete.apply(e,n)}),["delete"])),t[3]||(t[3]=n.withKeys((function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleEscape&&e.handleEscape.apply(e,n)}),["esc"]))],onKeydown:[t[4]||(t[4]=n.withKeys((function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleKeydown&&e.handleKeydown.apply(e,n)}),["down"])),t[5]||(t[5]=n.withKeys((function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleKeyUp&&e.handleKeyUp.apply(e,n)}),["up"])),t[6]||(t[6]=n.withModifiers((function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleSelectAll&&e.handleSelectAll.apply(e,n)}),["ctrl","exact"]))],onPaste:t[7]||(t[7]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handlePaste&&e.handlePaste.apply(e,n)}),onBlur:t[8]||(t[8]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleEscape&&e.handleEscape.apply(e,n)})},null,40,h)),[[n.vModelText,e.input]]),n.createElementVNode("div",{class:n.normalizeClass(["suggestion-wrapper",{hidden:!e.showSuggestions}])},[n.createVNode(u,{show:e.showSuggestions,items:e.filteredItems,keyword:e.input,"on-selection":e.handleSuggestSelection,"on-pane-esc":e.handleSuggestEsc,"pane-style":{bgColor:e.theme.primary},"selected-index":e.selectedIndex,focus:!1},null,8,["show","items","keyword","on-selection","on-pane-esc","pane-style","selected-index"])],2)])):n.createCommentVNode("v-if",!0)]})),_:1},8,["tags","on-remove","on-edit","editable","read-only","tag-style"])],36)},v.__scopeId="data-v-54d3a52e",v.__file="src/components/Main.vue",e.SmartTagz=v,Object.defineProperty(e,"__esModule",{value:!0})}));
