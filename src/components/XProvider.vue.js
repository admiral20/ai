import { ref, computed } from 'vue';
import { Switch, Select, SelectOption, Input, message } from 'ant-design-vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const isDark = ref(false);
const language = ref('zh-CN');
const apiEndpoint = ref('https://api.example.com');
const currentConfig = computed(() => ({
    theme: isDark.value ? 'dark' : 'light',
    language: language.value,
    apiEndpoint: apiEndpoint.value,
    timestamp: new Date().toISOString()
}));
const handleThemeChange = (checked) => {
    message.success(`主题已切换为${checked ? '暗色' : '亮色'}模式`);
};
const handleLanguageChange = (value) => {
    message.success(`语言已切换为${value === 'zh-CN' ? '中文' : '英文'}`);
};
const handleApiChange = () => {
    message.success('API 端点已更新');
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['demo-section'];
    __VLS_styleScopedClasses['config-demo'];
    __VLS_styleScopedClasses['config-preview'];
    __VLS_styleScopedClasses['config-preview'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("x-provider-demo") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("demo-section") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("demo-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("config-demo") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("config-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("config-label") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Switch;
    /** @type { [typeof __VLS_components.Switch, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onChange': {} }, checked: ((__VLS_ctx.isDark)), checkedChildren: ("暗色"), unCheckedChildren: ("亮色"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onChange': {} }, checked: ((__VLS_ctx.isDark)), checkedChildren: ("暗色"), unCheckedChildren: ("亮色"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onChange: (__VLS_ctx.handleThemeChange)
    };
    let __VLS_3;
    let __VLS_4;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("config-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("config-label") }, });
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.Select;
    /** @type { [typeof __VLS_components.Select, typeof __VLS_components.Select, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ 'onChange': {} }, value: ((__VLS_ctx.language)), ...{ style: ({}) }, }));
    const __VLS_10 = __VLS_9({ ...{ 'onChange': {} }, value: ((__VLS_ctx.language)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    let __VLS_14;
    const __VLS_15 = {
        onChange: (__VLS_ctx.handleLanguageChange)
    };
    let __VLS_11;
    let __VLS_12;
    const __VLS_16 = __VLS_resolvedLocalAndGlobalComponents.SelectOption;
    /** @type { [typeof __VLS_components.SelectOption, typeof __VLS_components.SelectOption, ] } */
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ value: ("zh-CN"), }));
    const __VLS_18 = __VLS_17({ value: ("zh-CN"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    __VLS_nonNullable(__VLS_21.slots).default;
    var __VLS_21;
    const __VLS_22 = __VLS_resolvedLocalAndGlobalComponents.SelectOption;
    /** @type { [typeof __VLS_components.SelectOption, typeof __VLS_components.SelectOption, ] } */
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({ value: ("en-US"), }));
    const __VLS_24 = __VLS_23({ value: ("en-US"), }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    __VLS_nonNullable(__VLS_27.slots).default;
    var __VLS_27;
    __VLS_nonNullable(__VLS_13.slots).default;
    var __VLS_13;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("config-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("config-label") }, });
    const __VLS_28 = __VLS_resolvedLocalAndGlobalComponents.Input;
    /** @type { [typeof __VLS_components.Input, ] } */
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({ ...{ 'onChange': {} }, value: ((__VLS_ctx.apiEndpoint)), placeholder: ("输入 API 端点"), ...{ style: ({}) }, }));
    const __VLS_30 = __VLS_29({ ...{ 'onChange': {} }, value: ((__VLS_ctx.apiEndpoint)), placeholder: ("输入 API 端点"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    let __VLS_34;
    const __VLS_35 = {
        onChange: (__VLS_ctx.handleApiChange)
    };
    let __VLS_31;
    let __VLS_32;
    var __VLS_33;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("config-preview") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)({});
    (JSON.stringify(__VLS_ctx.currentConfig, null, 2));
    __VLS_styleScopedClasses['x-provider-demo'];
    __VLS_styleScopedClasses['demo-section'];
    __VLS_styleScopedClasses['demo-content'];
    __VLS_styleScopedClasses['config-demo'];
    __VLS_styleScopedClasses['config-item'];
    __VLS_styleScopedClasses['config-label'];
    __VLS_styleScopedClasses['config-item'];
    __VLS_styleScopedClasses['config-label'];
    __VLS_styleScopedClasses['config-item'];
    __VLS_styleScopedClasses['config-label'];
    __VLS_styleScopedClasses['config-preview'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Switch: Switch,
            Select: Select,
            SelectOption: SelectOption,
            Input: Input,
            isDark: isDark,
            language: language,
            apiEndpoint: apiEndpoint,
            currentConfig: currentConfig,
            handleThemeChange: handleThemeChange,
            handleLanguageChange: handleLanguageChange,
            handleApiChange: handleApiChange,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
