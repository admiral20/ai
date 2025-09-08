import { ConfigProvider, theme } from 'ant-design-vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ConfigProvider;
    /** @type { [typeof __VLS_components.ConfigProvider, typeof __VLS_components.ConfigProvider, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ theme: (({ algorithm: __VLS_ctx.theme.defaultAlgorithm })), }));
    const __VLS_2 = __VLS_1({ theme: (({ algorithm: __VLS_ctx.theme.defaultAlgorithm })), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("app"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("app-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("nav") }, });
    const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ to: ("/"), ...{ class: ("logo") }, }));
    const __VLS_9 = __VLS_8({ to: ("/"), ...{ class: ("logo") }, }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    __VLS_nonNullable(__VLS_12.slots).default;
    var __VLS_12;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("nav-links") }, });
    const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ to: ("/"), ...{ class: ("nav-item") }, }));
    const __VLS_15 = __VLS_14({ to: ("/"), ...{ class: ("nav-item") }, }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    __VLS_nonNullable(__VLS_18.slots).default;
    var __VLS_18;
    const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({ to: ("/bubble"), ...{ class: ("nav-item") }, }));
    const __VLS_21 = __VLS_20({ to: ("/bubble"), ...{ class: ("nav-item") }, }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    __VLS_nonNullable(__VLS_24.slots).default;
    var __VLS_24;
    const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ to: ("/conversations"), ...{ class: ("nav-item") }, }));
    const __VLS_27 = __VLS_26({ to: ("/conversations"), ...{ class: ("nav-item") }, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    __VLS_nonNullable(__VLS_30.slots).default;
    var __VLS_30;
    const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ to: ("/welcome"), ...{ class: ("nav-item") }, }));
    const __VLS_33 = __VLS_32({ to: ("/welcome"), ...{ class: ("nav-item") }, }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    __VLS_nonNullable(__VLS_36.slots).default;
    var __VLS_36;
    const __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ to: ("/prompts"), ...{ class: ("nav-item") }, }));
    const __VLS_39 = __VLS_38({ to: ("/prompts"), ...{ class: ("nav-item") }, }, ...__VLS_functionalComponentArgsRest(__VLS_38));
    __VLS_nonNullable(__VLS_42.slots).default;
    var __VLS_42;
    const __VLS_43 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({ to: ("/sender"), ...{ class: ("nav-item") }, }));
    const __VLS_45 = __VLS_44({ to: ("/sender"), ...{ class: ("nav-item") }, }, ...__VLS_functionalComponentArgsRest(__VLS_44));
    __VLS_nonNullable(__VLS_48.slots).default;
    var __VLS_48;
    const __VLS_49 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({ to: ("/about"), ...{ class: ("nav-item") }, }));
    const __VLS_51 = __VLS_50({ to: ("/about"), ...{ class: ("nav-item") }, }, ...__VLS_functionalComponentArgsRest(__VLS_50));
    __VLS_nonNullable(__VLS_54.slots).default;
    var __VLS_54;
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("app-main") }, });
    const __VLS_55 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
    /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({}));
    const __VLS_57 = __VLS_56({}, ...__VLS_functionalComponentArgsRest(__VLS_56));
    __VLS_elementAsFunction(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)({ ...{ class: ("app-footer") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['app-header'];
    __VLS_styleScopedClasses['nav'];
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['nav-links'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['app-main'];
    __VLS_styleScopedClasses['app-footer'];
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
            ConfigProvider: ConfigProvider,
            theme: theme,
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
