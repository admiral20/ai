import { BulbOutlined, InfoCircleOutlined, RocketOutlined, SmileOutlined, WarningOutlined, CoffeeOutlined, FireOutlined, CommentOutlined, HeartOutlined, ReadOutlined } from '@ant-design/icons-vue';
import { Card, ConfigProvider, theme, message as messageAnt, Space, } from 'ant-design-vue';
import { Prompts } from 'ant-design-x-vue';
import { h } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const [message, contextHolder] = messageAnt.useMessage();
const items = [
    {
        key: '1',
        disabled: true,
        icon: h(BulbOutlined, { style: { color: '#FFD700' } }),
        label: 'Ignite Your Creativity',
        description: 'Got any sparks for a new project?',
    },
    {
        key: '2',
        icon: h(InfoCircleOutlined, { style: { color: '#1890FF' } }),
        label: 'Uncover Background Info',
        description: 'Help me understand the background of this topic.',
    },
    {
        key: '3',
        icon: h(RocketOutlined, { style: { color: '#722ED1' } }),
        label: 'Efficiency Boost Battle',
        description: 'How can I work faster and better?',
    },
    {
        key: '4',
        icon: h(SmileOutlined, { style: { color: '#52C41A' } }),
        label: 'Tell me a Joke',
        description: 'Why do not ants get sick? Because they have tiny ant-bodies!',
    },
    {
        key: '5',
        icon: h(WarningOutlined, { style: { color: '#FF4D4F' } }),
        label: 'Common Issue Solutions',
        description: 'How to solve common issues? Share some tips!',
    },
];
const items1 = [
    {
        key: '6',
        icon: h(CoffeeOutlined, { style: { color: '#964B00' } }),
        description: 'How to rest effectively after long hours of work?How to rest effectively after long hours of work?How to rest effectively after long hours of work?How to rest effectively after long hours of work?How to rest effectively after long hours of work?How to rest effectively after long hours of work?',
        disabled: false,
    },
    {
        key: '7',
        icon: h(SmileOutlined, { style: { color: '#FAAD14' } }),
        description: 'What are the secrets to maintaining a positive mindset?',
        disabled: false,
    },
    {
        key: '8',
        icon: h(FireOutlined, { style: { color: '#FF4D4F' } }),
        description: 'How to stay calm under immense pressure?',
        disabled: false,
    },
];
const renderTitle = (icon, title) => {
    return h(Space, { align: 'start' }, () => [
        icon,
        h('span', null, title)
    ]);
};
const items2 = [
    {
        key: '1',
        label: renderTitle(h(FireOutlined, { style: { color: '#FF4D4F' } }), 'Hot Topics'),
        description: 'What are you interested in?',
        children: [
            {
                key: '1-1',
                description: `What's new in X?`,
            },
            {
                key: '1-2',
                description: `What's AGI?`,
            },
            {
                key: '1-3',
                description: `Where is the doc?`,
            },
        ],
    },
    {
        key: '2',
        label: renderTitle(h(ReadOutlined, { style: { color: '#1890FF' } }), 'Design Guide'),
        description: 'How to design a good product?',
        children: [
            {
                key: '2-1',
                icon: h(HeartOutlined),
                description: `Know the well`,
            },
            {
                key: '2-2',
                icon: h(SmileOutlined),
                description: `Set the AI role`,
            },
            {
                key: '2-3',
                icon: h(CommentOutlined),
                description: `Express the feeling`,
            },
        ],
    },
    {
        key: '3',
        label: renderTitle(h(RocketOutlined, { style: { color: '#722ED1' } }), 'Start Creating'),
        description: 'How to start a new project?',
        children: [
            {
                key: '3-1',
                label: 'Fast Start',
                description: `Install Ant Design X`,
            },
            {
                key: '3-2',
                label: 'Online Playground',
                description: `Play on the web without installing`,
            },
        ],
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
    __VLS_styleScopedClasses['demo-section'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ContextHolder;
    /** @type { [typeof __VLS_components.ContextHolder, typeof __VLS_components.contextHolder, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.Prompts;
    /** @type { [typeof __VLS_components.Prompts, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ wrap: (true), title: ("✨ Inspirational Sparks and Marvelous Tips"), items: ((__VLS_ctx.items)), onItemClick: (((info) => {
            __VLS_ctx.message.success(`You clicked a prompt: ${info.data.label}`);
        })), }));
    const __VLS_8 = __VLS_7({ wrap: (true), title: ("✨ Inspirational Sparks and Marvelous Tips"), items: ((__VLS_ctx.items)), onItemClick: (((info) => {
            __VLS_ctx.message.success(`You clicked a prompt: ${info.data.label}`);
        })), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.Prompts;
    /** @type { [typeof __VLS_components.Prompts, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ title: ("🤔 You might also want to ask:"), items: ((__VLS_ctx.items1)), vertical: (true), }));
    const __VLS_14 = __VLS_13({ title: ("🤔 You might also want to ask:"), items: ((__VLS_ctx.items1)), vertical: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.Prompts;
    /** @type { [typeof __VLS_components.Prompts, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ title: ("✨ Inspirational Sparks and Marvelous Tips666"), items: ((__VLS_ctx.items)), wrap: (true), styles: (({
            item: {
                flex: 'none',
                width: 'calc(30% - 6px)',
            },
        })), }));
    const __VLS_20 = __VLS_19({ title: ("✨ Inspirational Sparks and Marvelous Tips666"), items: ((__VLS_ctx.items)), wrap: (true), styles: (({
            item: {
                flex: 'none',
                width: 'calc(30% - 6px)',
            },
        })), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ConfigProvider;
    /** @type { [typeof __VLS_components.ConfigProvider, typeof __VLS_components.ConfigProvider, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ theme: (({
            algorithm: __VLS_ctx.theme.defaultAlgorithm,
        })), }));
    const __VLS_26 = __VLS_25({ theme: (({
            algorithm: __VLS_ctx.theme.defaultAlgorithm,
        })), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.Card;
    /** @type { [typeof __VLS_components.Card, typeof __VLS_components.Card, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ style: (({ borderRadius: 0, border: 0 })) }, }));
    const __VLS_32 = __VLS_31({ ...{ style: (({ borderRadius: 0, border: 0 })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.Prompts;
    /** @type { [typeof __VLS_components.Prompts, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ 'onItemClick': {} }, title: ("Do you want?"), items: ((__VLS_ctx.items2)), wrap: (true), styles: (({
            item: {
                flex: 'none',
                width: 'calc(30% - 6px)',
                backgroundImage: `linear-gradient(137deg, #e5f4ff 0%, #efe7ff 100%)`,
                border: 0,
            },
            subItem: {
                background: 'rgba(255,255,255,0.45)',
                border: '1px solid #FFF',
            },
        })), }));
    const __VLS_38 = __VLS_37({ ...{ 'onItemClick': {} }, title: ("Do you want?"), items: ((__VLS_ctx.items2)), wrap: (true), styles: (({
            item: {
                flex: 'none',
                width: 'calc(30% - 6px)',
                backgroundImage: `linear-gradient(137deg, #e5f4ff 0%, #efe7ff 100%)`,
                border: 0,
            },
            subItem: {
                background: 'rgba(255,255,255,0.45)',
                border: '1px solid #FFF',
            },
        })), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    let __VLS_42;
    const __VLS_43 = {
        onItemClick: ((info) => {
            __VLS_ctx.message.success(`You clicked: ${info.data.description}`);
        })
    };
    let __VLS_39;
    let __VLS_40;
    var __VLS_41;
    __VLS_nonNullable(__VLS_35.slots).default;
    var __VLS_35;
    __VLS_nonNullable(__VLS_29.slots).default;
    var __VLS_29;
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
            Card: Card,
            ConfigProvider: ConfigProvider,
            theme: theme,
            Prompts: Prompts,
            message: message,
            contextHolder: contextHolder,
            items: items,
            items1: items1,
            items2: items2,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
