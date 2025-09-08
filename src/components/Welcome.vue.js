import { Welcome } from 'ant-design-x-vue';
import { EllipsisOutlined, ShareAltOutlined } from '@ant-design/icons-vue';
import { Button, Space, Card, ConfigProvider, Flex, theme } from 'ant-design-vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const items = [
    {
        algorithm: theme.defaultAlgorithm,
        background: 'linear-gradient(97deg, #f2f9fe 0%, #f7f3ff 100%)',
    },
    {
        algorithm: theme.darkAlgorithm,
        background: 'linear-gradient(97deg, rgba(90,196,255,0.12) 0%, rgba(174,136,255,0.12) 100%)',
    },
];
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
    __VLS_styleScopedClasses['theme-demo-item'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("welcome-container") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ConfigProvider;
    /** @type { [typeof __VLS_components.ConfigProvider, typeof __VLS_components.ConfigProvider, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ theme: (({ algorithm: __VLS_ctx.theme.defaultAlgorithm })), }));
    const __VLS_2 = __VLS_1({ theme: (({ algorithm: __VLS_ctx.theme.defaultAlgorithm })), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.Welcome;
    /** @type { [typeof __VLS_components.Welcome, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ style: (({ backgroundImage: 'linear-gradient(7deg, rgba(90,196,255,0.8) 0%, rgba(174,136,255,1) 100%)', borderStartStartRadius: 14 })) }, icon: ("https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp"), title: ("Hello, I'm Ant Design X"), description: ("Base on Ant Design, AGI product interface solution, create a better intelligent vision~"), }));
    const __VLS_8 = __VLS_7({ ...{ style: (({ backgroundImage: 'linear-gradient(7deg, rgba(90,196,255,0.8) 0%, rgba(174,136,255,1) 100%)', borderStartStartRadius: 14 })) }, icon: ("https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp"), title: ("Hello, I'm Ant Design X"), description: ("Base on Ant Design, AGI product interface solution, create a better intelligent vision~"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ConfigProvider;
    /** @type { [typeof __VLS_components.ConfigProvider, typeof __VLS_components.ConfigProvider, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ theme: (({ algorithm: __VLS_ctx.theme.defaultAlgorithm })), }));
    const __VLS_14 = __VLS_13({ theme: (({ algorithm: __VLS_ctx.theme.defaultAlgorithm })), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.Welcome;
    /** @type { [typeof __VLS_components.Welcome, typeof __VLS_components.Welcome, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ style: (({ backgroundImage: 'linear-gradient(70deg, rgba(10,196,25,0.8) 0%, rgba(174,136,255,1) 100%)', borderStartStartRadius: 14 })) }, variant: ("borderless"), icon: ("https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp"), title: ("Hello, I'm Ant Design X"), description: ("Base on Ant Design, AGI product interface solution, create a better intelligent vision~"), }));
    const __VLS_20 = __VLS_19({ ...{ style: (({ backgroundImage: 'linear-gradient(70deg, rgba(10,196,25,0.8) 0%, rgba(174,136,255,1) 100%)', borderStartStartRadius: 14 })) }, variant: ("borderless"), icon: ("https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp"), title: ("Hello, I'm Ant Design X"), description: ("Base on Ant Design, AGI product interface solution, create a better intelligent vision~"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { extra: __VLS_thisSlot } = __VLS_nonNullable(__VLS_23.slots);
        const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.Space;
        /** @type { [typeof __VLS_components.Space, typeof __VLS_components.Space, ] } */
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
        const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
        const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.Button;
        /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
        const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { icon: __VLS_thisSlot } = __VLS_nonNullable(__VLS_35.slots);
            const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ShareAltOutlined;
            /** @type { [typeof __VLS_components.ShareAltOutlined, ] } */
            // @ts-ignore
            const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
            const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
        }
        var __VLS_35;
        const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.Button;
        /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
        const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { icon: __VLS_thisSlot } = __VLS_nonNullable(__VLS_47.slots);
            const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.EllipsisOutlined;
            /** @type { [typeof __VLS_components.EllipsisOutlined, ] } */
            // @ts-ignore
            const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
            const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
        }
        var __VLS_47;
        __VLS_nonNullable(__VLS_29.slots).default;
        var __VLS_29;
    }
    var __VLS_23;
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17;
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.Flex;
    /** @type { [typeof __VLS_components.Flex, typeof __VLS_components.Flex, ] } */
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ vertical: (true), }));
    const __VLS_56 = __VLS_55({ vertical: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    for (const [{ algorithm, background }, index] of __VLS_getVForSourceType((__VLS_ctx.items))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("theme-demo-item") }, });
        const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ConfigProvider;
        /** @type { [typeof __VLS_components.ConfigProvider, typeof __VLS_components.ConfigProvider, ] } */
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ theme: (({ algorithm })), }));
        const __VLS_62 = __VLS_61({ theme: (({ algorithm })), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
        const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.Card;
        /** @type { [typeof __VLS_components.Card, typeof __VLS_components.Card, ] } */
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ ...{ style: (({ borderRadius: 0 })) }, }));
        const __VLS_68 = __VLS_67({ ...{ style: (({ borderRadius: 0 })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_67));
        const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.Welcome;
        /** @type { [typeof __VLS_components.Welcome, ] } */
        // @ts-ignore
        const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ ...{ style: (({ backgroundImage: background, borderStartStartRadius: 4 })) }, icon: ("https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp"), title: ("Hello, I'm Ant Design X"), description: ("Base on Ant Design, AGI product interface solution, create a better intelligent vision~"), }));
        const __VLS_74 = __VLS_73({ ...{ style: (({ backgroundImage: background, borderStartStartRadius: 4 })) }, icon: ("https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp"), title: ("Hello, I'm Ant Design X"), description: ("Base on Ant Design, AGI product interface solution, create a better intelligent vision~"), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
        __VLS_nonNullable(__VLS_71.slots).default;
        var __VLS_71;
        __VLS_nonNullable(__VLS_65.slots).default;
        var __VLS_65;
    }
    __VLS_nonNullable(__VLS_59.slots).default;
    var __VLS_59;
    __VLS_styleScopedClasses['welcome-container'];
    __VLS_styleScopedClasses['theme-demo-item'];
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
            Welcome: Welcome,
            EllipsisOutlined: EllipsisOutlined,
            ShareAltOutlined: ShareAltOutlined,
            Button: Button,
            Space: Space,
            Card: Card,
            ConfigProvider: ConfigProvider,
            Flex: Flex,
            theme: theme,
            items: items,
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
