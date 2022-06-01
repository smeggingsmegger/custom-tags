"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("vue"),n=e.defineComponent({name:"CloseIcon"}),t={class:"icon-wrapper"},a={id:"Capa_1",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 512.001 512.001",style:{"enable-background":"new 0 0 512.001 512.001"},"xml:space":"preserve"},l=[function(n){return e.pushScopeId("data-v-1a43cbde"),n=n(),e.popScopeId(),n}((function(){return e.createElementVNode("g",null,[e.createElementVNode("g",null,[e.createElementVNode("path",{d:"M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717\n        L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859\n        c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287\n        l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285\n        L284.286,256.002z"})])],-1)}))];n.render=function(n,o,r,u,i,c){return e.openBlock(),e.createElementBlock("div",t,[(e.openBlock(),e.createElementBlock("svg",a,l))])},n.__scopeId="data-v-1a43cbde",n.__file="src/components/CloseIcon.vue";var o=e.defineComponent({name:"SmartTag",components:{CloseIcon:n},props:{name:{type:String,default:""},onRemove:{type:Function,required:!0},onEdit:{type:Function,required:!0},editable:{type:Boolean,default:!1},id:{type:String,default:null},highlight:Boolean,readOnly:{type:Boolean,default:!1},tagStyle:{type:Object,default:function(){return{foreColor:"",backgroundColor:""}}}},setup:function(n){var t=e.ref(!1),a=e.ref(n.name),l=e.ref(),o=e.toRef(n,"highlight"),r=e.computed((function(){return n.editable&&t.value&&!n.readOnly})),u=e.computed((function(){return!n.readOnly})),i=e.computed((function(){return{background:o.value?"#b20000":n.tagStyle.backgroundColor,color:n.tagStyle.foreColor}}));return{handleRemove:function(e){return n.onRemove(e)},handleDoubleClick:function(){n.editable&&!n.readOnly&&(t.value=!t.value,e.nextTick((function(){l.value.focus()})))},handleSaveEdit:function(){t.value=!1,n.onEdit(n.id,a.value)},handleEscape:function(){t.value=!1},editMode:t,input:a,inputTextRef:l,canShowInputbox:r,canShowRemoveBtn:u,style:i}}});o.render=function(n,t,a,l,o,r){var u=e.resolveComponent("CloseIcon");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["tag-container",{"no-remove":!n.canShowRemoveBtn}]),style:e.normalizeStyle(n.style)},[n.canShowInputbox?e.withDirectives((e.openBlock(),e.createElementBlock("input",{key:0,ref:"inputTextRef","onUpdate:modelValue":t[0]||(t[0]=function(e){return n.input=e}),type:"text",class:"tag-edit-input",onBlur:t[1]||(t[1]=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return n.handleEscape&&n.handleEscape.apply(n,e)}),onKeyup:[t[2]||(t[2]=e.withKeys((function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return n.handleSaveEdit&&n.handleSaveEdit.apply(n,e)}),["enter"])),t[3]||(t[3]=e.withKeys((function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return n.handleEscape&&n.handleEscape.apply(n,e)}),["esc"]))]},null,544)),[[e.vModelText,n.input]]):(e.openBlock(),e.createElementBlock("span",{key:1,class:"tag-name",onDblclick:t[4]||(t[4]=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return n.handleDoubleClick&&n.handleDoubleClick.apply(n,e)})},e.toDisplayString(n.name),33)),n.canShowRemoveBtn?(e.openBlock(),e.createElementBlock("button",{key:2,onClick:t[5]||(t[5]=function(e){return n.handleRemove(n.id)})},[e.createVNode(u)])):e.createCommentVNode("v-if",!0)],6)},o.__scopeId="data-v-bb7ceecc",o.__file="src/components/Tag.vue";var r=e.defineComponent({name:"SmartTags",components:{SmartTag:o},props:{readOnly:{type:Boolean,default:!1},tags:{type:Array,required:!0},onRemove:{type:Function,required:!0},onEdit:{type:Function,required:!0},editable:{type:Boolean,default:!1},tagStyle:{type:Object,default:function(){return{}}}},setup:function(n){var t=n.readOnly?n.tags.map((function(e){return Object.assign({},e,{editable:!1})})):n.tags,a=e.ref(t);return e.watch((function(){return n.tags}),(function(e){a.value=e})),{localTags:a,handleRemove:function(e){return n.onRemove(e)},handleEdit:function(e,t){return n.onEdit(e,t)}}}}),u={class:"tags-container"};r.render=function(n,t,a,l,o,r){var i=e.resolveComponent("SmartTag");return e.openBlock(),e.createElementBlock("div",u,[e.createVNode(e.TransitionGroup,{name:"tags-list"},{default:e.withCtx((function(){return[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(n.localTags,(function(t){return e.openBlock(),e.createBlock(i,{id:t.id,key:t.id,highlight:t.highlight,name:t.name,value:t.value,"on-remove":n.handleRemove,"on-edit":n.handleEdit,editable:n.editable,"read-only":n.readOnly,"tag-style":n.tagStyle},null,8,["id","highlight","name","value","on-remove","on-edit","editable","read-only","tag-style"])})),128))]})),_:1}),e.renderSlot(n.$slots,"default")])},r.__scopeId="data-v-acc9a86e",r.__file="src/components/Tags.vue";var i=e.defineComponent({name:"SuggestPane",props:{items:{type:Array,default:function(){return[]},required:!0},show:{type:Boolean,default:!1},onSelection:{type:Function},onPaneEsc:{type:Function},keyword:{type:String,required:!0},paneStyle:{type:Object,default:function(){return{bgColor:""}}},selectedIndex:{type:Number,default:-1}},setup:function(n){var t=e.ref(!1),a=function(e){return n.onSelection&&n.onSelection(e)},l=e.ref(null);return e.watch((function(){return n.show}),(function(e){t.value=!!e})),{handleSelection:a,showPane:t,paneRef:l,handleEnter:function(e){e.preventDefault(),e.stopImmediatePropagation();var t=n.items[n.selectedIndex];a(t)}}}}),c={key:0,class:"suggest-pane-container"},d=["onMousedown"];function s(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}i.render=function(n,t,a,l,o,r){return n.showPane?(e.openBlock(),e.createElementBlock("div",c,[e.createElementVNode("ul",{ref:"paneRef",class:"suggest-pane",style:e.normalizeStyle({background:n.paneStyle.bgColor}),tabindex:"0"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(n.items,(function(t,a){return e.openBlock(),e.createElementBlock("li",{key:t,class:e.normalizeClass(["suggest-pane-item",{selected:a===n.selectedIndex}]),onMousedown:function(e){return n.handleSelection(t)}},[e.createElementVNode("span",null,e.toDisplayString(t),1)],42,d)})),128))],4)])):e.createCommentVNode("v-if",!0)},i.__scopeId="data-v-f2c085e8",i.__file="src/components/SuggestPane.vue";function p(e){for(var n=void 0,t=e[0],a=1;a<e.length;){var l=e[a],o=e[a+1];if(a+=2,("optionalAccess"===l||"optionalCall"===l)&&null==t)return;"access"===l||"optionalAccess"===l?(n=t,t=o(t)):"call"!==l&&"optionalCall"!==l||(t=o((function(){for(var e=[],a=arguments.length;a--;)e[a]=arguments[a];return t.call.apply(t,[n].concat(e))})),n=void 0)}return t}var f=e.defineComponent({name:"SmartTagz",components:{SmartTags:r,SuggestionPane:i},props:{readOnly:{type:Boolean,default:!1},defaultTags:{type:Array,default:function(){return[]}},width:{type:String,default:"100%"},sources:{type:Array,default:function(){return[]}},autosuggest:{type:Boolean,default:!1},allowPaste:{type:Object,default:null},editable:{type:Boolean,default:!1},allowDuplicates:{type:Boolean,default:!0},maxTags:{type:Number,default:20},inputPlaceholder:{type:String,default:"Enter tag..."},quickDelete:{type:Boolean,default:!1},onChanged:{type:Function,default:null},theme:{type:Object,default:function(){return{primary:"#6093ca",background:"#eaf1f8",tagTextColor:"#fff"}}}},setup:function(n){var t=n.autosuggest,a=n.allowPaste;void 0===a&&(a={delimiter:","});var l=n.allowDuplicates,o=n.maxTags,r=n.defaultTags;void 0===r&&(r=[]);var u=n.sources,i=n.quickDelete,c=n.width,d=n.onChanged,f=e.ref(null),v=e.ref(r.slice(0,o).map((function(e){return{id:Math.random().toString(16).slice(2),name:e,value:e}}))),g=e.ref("textInputRef"),h=e.ref(""),m=e.ref(r.length?Math.min(r.length,o):0),y=e.ref(!1),S=e.ref(!1),w=e.ref(-1),k=e.computed((function(){return{width:c}})),b=e.computed((function(){var e=new RegExp("^"+s(h.value),"i");return u.filter((function(n){return e.test(n)}))})),E=function(){try{g.value.focus()}catch(e){}};e.watch((function(){return v.value.length}),(function(){p([d,"optionalCall",function(e){return e(v.value.map((function(e){return e.value})))}])})),e.watch(h,(function(e){f.value&&(f.value=null,v.value=v.value.map((function(e){return delete e.highlight,e}))),e?(S.value=!1,t&&e.length>0?y.value=!0:t&&e.length<1&&(y.value=!1)):y.value=!1})),e.watch(S,(function(e){v.value=v.value.map((function(n){return Object.assign({},n,{highlight:e})}))}));var C=function(n){var t="",a=e.unref(w);if(function(e){var n=new RegExp("^"+s(e)+"$","ig"),t=l||!v.value.some((function(t){return t.name===e||n.test(t.name)})),a=m.value<o;return t&&a}(t=a>-1?b.value[a]:n)){var r=null;(r=y.value&&w.value>-1?b.value[w.value]:t)&&(v.value=v.value.concat({name:r,id:Math.random().toString(16).slice(2),value:r})),h.value="",y.value=!1,m.value=+m.value+1,w.value=-1,e.nextTick((function(){return E()}))}};return{tagsData:v,input:h,style:k,textInputRef:g,showSuggestions:y,selectedIndex:w,filteredItems:b,handleKeyUp:function(n){n.preventDefault();var t=e.unref(w);w.value=t>0?w.value-1:e.unref(b).length-1},handleKeydown:function(n){n.preventDefault(),e.unref(w)<e.unref(b).length-1?w.value=+w.value+1:w.value=0},handleAddTag:C,handleRemoveTag:function(e){v.value=v.value.filter((function(n){return n.id!==e})),m.value=+m.value-1},handleDelete:function(){if(!h.value){if(S.value)return v.value=[],S.value=!1,void(m.value=0);if(f.value){var e=f.value;v.value=v.value.filter((function(n){return n.id!==e.id})),f.value=null,m.value=+m.value-1}else if(v.value.length){var n=v.value[v.value.length-1];f.value={id:n.id},v.value=v.value.map((function(e){return e.id===n.id?Object.assign({},e,{highlight:!0}):e}))}}},handleEscape:function(){return v.value=v.value.map((function(e){return delete e.highlight,e})),y.value=!1,S.value=!1,void(w.value=-1)},handlePaste:function(n){n.stopPropagation(),n.preventDefault();var t=p([n,"access",function(e){return e.clipboardData},"optionalAccess",function(e){return e.getData},"call",function(e){return e("text")}]);if(t){var r=function(e,n,t,a,l,o){if(n){var r=t-a,u=l?n.split(l):[];if(!(u.length>1))return{newData:e.concat({name:n,value:n,id:Math.random().toString(16).slice(2)}),tagsCreated:a+1};if(u=u.slice(0,Math.min(u.length,r)),!o){var i=e.map((function(e){return e.name})),c=u.filter((function(e){return!1===i.includes(e)}));u=[].concat(new Set(c))}if(u.length)return{newData:e.concat(u.map((function(e){return{name:e,value:e,id:Math.random().toString(16).slice(2)}}))),tagsCreated:a+u.length}}}(e.unref(v),t,o,+e.unref(m),p([a,"optionalAccess",function(e){return e.delimiter}]),l);p([r,"optionalAccess",function(e){return e.newData}])&&(v.value=r.newData,m.value=r.tagsCreated)}},handleEditTag:function(e,n){v.value=v.value.map((function(t){return t.id===e?Object.assign({},t,{name:n,value:n}):t})),p([d,"optionalCall",function(e){return e(v.value.map((function(e){return e.value})))}])},handleSuggestSelection:function(n){y.value=!1,e.nextTick((function(){C(n)}))},handleSuggestEsc:function(){E(),y.value=!1},handleSelectAll:function(e){i&&(65!==e.keyCode||h.value||(S.value=!0,f.value=null))}}}}),v={key:0,class:"input-wrapper"},g=["placeholder"];f.render=function(n,t,a,l,o,r){var u=e.resolveComponent("SuggestionPane"),i=e.resolveComponent("SmartTags");return e.openBlock(),e.createElementBlock("div",{class:"tags-main",style:e.normalizeStyle({background:n.theme.background}),onKeyup:t[9]||(t[9]=e.withModifiers((function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return n.handleSelectAll&&n.handleSelectAll.apply(n,e)}),["ctrl"]))},[e.createVNode(i,{tags:n.tagsData,"on-remove":n.handleRemoveTag,"on-edit":n.handleEditTag,editable:n.editable,"read-only":n.readOnly,"tag-style":{foreColor:n.theme.tagTextColor,backgroundColor:n.theme.primary}},{default:e.withCtx((function(){return[n.tagsData.length<n.maxTags?(e.openBlock(),e.createElementBlock("div",v,[n.readOnly?e.createCommentVNode("v-if",!0):e.withDirectives((e.openBlock(),e.createElementBlock("input",{key:0,ref:"textInputRef","onUpdate:modelValue":t[0]||(t[0]=function(e){return n.input=e}),type:"text",placeholder:n.inputPlaceholder,onKeyup:[t[1]||(t[1]=e.withKeys((function(e){return n.handleAddTag(e.target.value.trim())}),["enter"])),t[2]||(t[2]=e.withKeys((function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return n.handleDelete&&n.handleDelete.apply(n,e)}),["delete"])),t[3]||(t[3]=e.withKeys((function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return n.handleEscape&&n.handleEscape.apply(n,e)}),["esc"]))],onKeydown:[t[4]||(t[4]=e.withKeys((function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return n.handleKeydown&&n.handleKeydown.apply(n,e)}),["down"])),t[5]||(t[5]=e.withKeys((function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return n.handleKeyUp&&n.handleKeyUp.apply(n,e)}),["up"])),t[6]||(t[6]=e.withModifiers((function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return n.handleSelectAll&&n.handleSelectAll.apply(n,e)}),["ctrl","exact"]))],onPaste:t[7]||(t[7]=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return n.handlePaste&&n.handlePaste.apply(n,e)}),onBlur:t[8]||(t[8]=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return n.handleEscape&&n.handleEscape.apply(n,e)})},null,40,g)),[[e.vModelText,n.input]]),e.createElementVNode("div",{class:e.normalizeClass(["suggestion-wrapper",{hidden:!n.showSuggestions}])},[e.createVNode(u,{show:n.showSuggestions,items:n.filteredItems,keyword:n.input,"on-selection":n.handleSuggestSelection,"on-pane-esc":n.handleSuggestEsc,"pane-style":{bgColor:n.theme.primary},"selected-index":n.selectedIndex,focus:!1},null,8,["show","items","keyword","on-selection","on-pane-esc","pane-style","selected-index"])],2)])):e.createCommentVNode("v-if",!0)]})),_:1},8,["tags","on-remove","on-edit","editable","read-only","tag-style"])],36)},f.__scopeId="data-v-54d3a52e",f.__file="src/components/Main.vue",exports.SmartTagz=f;
