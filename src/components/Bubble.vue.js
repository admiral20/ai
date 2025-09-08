import { CopyOutlined, SyncOutlined, UserOutlined, CoffeeOutlined, SmileOutlined, FireOutlined, FrownOutlined } from '@ant-design/icons-vue';
import { Avatar, Button, Space, theme, message as messageAnt, Switch, Flex, Image, Typography, Spin } from 'ant-design-vue';
import { Bubble, Prompts, BubbleList } from 'ant-design-x-vue';
import { h, ref, onWatcherCleanup, watchEffect } from 'vue';
import markdownit from 'markdown-it';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const fooAvatar = {
    color: '#f56a00',
    backgroundColor: '#fde3cf',
};
const barAvatar = {
    color: '#fff',
    backgroundColor: '#87d068',
};
const hideAvatar = {
    visibility: 'hidden',
};
const [message, contextHolder] = messageAnt.useMessage();
const { token } = theme.useToken();
const onCopy = (textToCopy) => {
    if (!textToCopy)
        return message.success('Text is empty');
    message.success(`Text copied successfully：${textToCopy}`);
};
const loading = ref(true);
setTimeout(() => {
    loading.value = false;
}, 1000);
const text1 = ref('Ant Design X love you! ');
const repeat = ref(1);
const MyBubble = (Bubble);
const contentState = ref({
    imageUrl: 'https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*eco6RrQhxbMAAAAAAAAAAAAADgCCAQ/original',
    text: 'Ant Design X Vue',
    actionNode: h('span', 'Click Me'),
});
// markdown
const md = markdownit({ html: true, breaks: true });
const text = `
> Render as markdown content to show rich text!

Link: [Ant Design X](https://x.ant.design)
`.trim();
const renderMarkdown = (content) => h(Typography, null, {
    default: () => h('div', { innerHTML: md.render(content) }),
});
const renderKey = ref(0);
watchEffect(() => {
    const id = setTimeout(() => {
        renderKey.value = renderKey.value + 1;
    }, text.length * 100 + 2000);
    onWatcherCleanup(() => {
        clearTimeout(id);
    });
});
const items = [
    {
        key: '6',
        icon: h(CoffeeOutlined, { style: { color: '#964B00' } }),
        description: 'How to rest effectively after long hours of work?',
    },
    {
        key: '7',
        icon: h(SmileOutlined, { style: { color: '#FAAD14' } }),
        description: 'What are the secrets to maintaining a positive mindset?',
    },
    {
        key: '8',
        icon: h(FireOutlined, { style: { color: '#FF4D4F' } }),
        description: 'How to stay calm under immense pressure?',
    },
];
const sharedLongTextProps = {
    placement: 'end',
    content: 'This is a long text message to show the multiline view of the bubble component. '.repeat(3),
    styles: { content: { maxWidth: 500 } },
};
const rolesAsObject = {
    ai: {
        placement: 'start',
        avatar: { icon: h(UserOutlined), style: { background: '#fde3cf' } },
        typing: { step: 5, interval: 20 },
        style: {
            maxWidth: '600px',
        },
    },
    user: {
        placement: 'end',
        avatar: { icon: h(UserOutlined), style: { background: '#87d068' } },
    },
};
const rolesAsFunction = (bubbleData, index) => {
    const RenderIndex = (content) => h(Flex, null, () => [h('text', null, `#${index}: ${content}`)]);
    switch (bubbleData.role) {
        case 'ai':
            return {
                placement: 'start',
                avatar: { icon: h(UserOutlined), style: { background: '#fde3cf' } },
                typing: { step: 5, interval: 20 },
                style: {
                    maxWidth: 600,
                },
                messageRender: RenderIndex,
            };
        case 'user':
            return {
                placement: 'end',
                avatar: { icon: h(UserOutlined), style: { background: '#87d068' } },
                messageRender: RenderIndex,
            };
        default:
            return { messageRender: RenderIndex };
    }
};
const count = ref(3);
const useRolesAsFunction = ref(false);
const listRef = ref(null);
const handleChange = (checked) => {
    useRolesAsFunction.value = checked;
};
const roles = {
    ai: {
        placement: 'start',
        avatar: { icon: h(UserOutlined), style: { background: '#fde3cf' } },
        typing: { step: 5, interval: 20 },
        style: {
            maxWidth: '600px',
            marginInlineEnd: '44px',
        },
        styles: {
            footer: {
                width: '100%',
            },
        },
        loadingRender: () => h(Space, null, () => [h(Spin, { size: 'small' }), 'Custom loading...']),
    },
    user: {
        placement: 'end',
        avatar: { icon: h(UserOutlined), style: { background: '#87d068' } },
    },
};
// const listRef = useTemplateRef<InstanceType<typeof BubbleList>>(null);
const listRef1 = ref(null);
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Flex;
    /** @type { [typeof __VLS_components.Flex, typeof __VLS_components.Flex, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ gap: ("middle"), vertical: (true), }));
    const __VLS_2 = __VLS_1({ gap: ("middle"), vertical: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.Bubble;
    /** @type { [typeof __VLS_components.Bubble, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ placement: ("start"), content: ("Good morning, how are you?"), avatar: (({ icon: __VLS_ctx.h(__VLS_ctx.UserOutlined), style: __VLS_ctx.fooAvatar })), }));
    const __VLS_8 = __VLS_7({ placement: ("start"), content: ("Good morning, how are you?"), avatar: (({ icon: __VLS_ctx.h(__VLS_ctx.UserOutlined), style: __VLS_ctx.fooAvatar })), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.Bubble;
    /** @type { [typeof __VLS_components.Bubble, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ placement: ("start"), content: ("What a beautiful day!"), styles: (({ avatar: __VLS_ctx.hideAvatar })), avatar: (({})), }));
    const __VLS_14 = __VLS_13({ placement: ("start"), content: ("What a beautiful day!"), styles: (({ avatar: __VLS_ctx.hideAvatar })), avatar: (({})), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.Bubble;
    /** @type { [typeof __VLS_components.Bubble, typeof __VLS_components.Bubble, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ placement: ("end"), content: ("Hi, good morning, I'm fine!"), }));
    const __VLS_20 = __VLS_19({ placement: ("end"), content: ("Hi, good morning, I'm fine!"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { avatar: __VLS_thisSlot } = __VLS_nonNullable(__VLS_23.slots);
        const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.Avatar;
        /** @type { [typeof __VLS_components.Avatar, ] } */
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ icon: ((__VLS_ctx.h(__VLS_ctx.UserOutlined))), ...{ style: ((__VLS_ctx.barAvatar)) }, }));
        const __VLS_26 = __VLS_25({ icon: ((__VLS_ctx.h(__VLS_ctx.UserOutlined))), ...{ style: ((__VLS_ctx.barAvatar)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    }
    var __VLS_23;
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.Bubble;
    /** @type { [typeof __VLS_components.Bubble, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ placement: ("end"), content: ("Thank you!"), styles: (({ avatar: __VLS_ctx.hideAvatar })), avatar: (({})), }));
    const __VLS_32 = __VLS_31({ placement: ("end"), content: ("Thank you!"), styles: (({ avatar: __VLS_ctx.hideAvatar })), avatar: (({})), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.Bubble;
    /** @type { [typeof __VLS_components.Bubble, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ loading: ((__VLS_ctx.loading)), content: ("hello world !"), avatar: (({ icon: __VLS_ctx.h(__VLS_ctx.UserOutlined) })), }));
    const __VLS_38 = __VLS_37({ loading: ((__VLS_ctx.loading)), content: ("hello world !"), avatar: (({ icon: __VLS_ctx.h(__VLS_ctx.UserOutlined) })), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.Switch;
    /** @type { [typeof __VLS_components.Switch, ] } */
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ checked: ((__VLS_ctx.loading)), }));
    const __VLS_44 = __VLS_43({ checked: ((__VLS_ctx.loading)), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.Bubble;
    /** @type { [typeof __VLS_components.Bubble, typeof __VLS_components.Bubble, ] } */
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ content: ("Hello, welcome to use Ant Design X! Just ask if you have any questions."), avatar: (({ icon: __VLS_ctx.h(__VLS_ctx.UserOutlined) })), }));
    const __VLS_50 = __VLS_49({ content: ("Hello, welcome to use Ant Design X! Just ask if you have any questions."), avatar: (({ icon: __VLS_ctx.h(__VLS_ctx.UserOutlined) })), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_53.slots);
        const [{ content }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.Space;
        /** @type { [typeof __VLS_components.Space, typeof __VLS_components.Space, ] } */
        // @ts-ignore
        const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ size: ((__VLS_ctx.token.paddingXXS)), }));
        const __VLS_56 = __VLS_55({ size: ((__VLS_ctx.token.paddingXXS)), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        (content);
        __VLS_nonNullable(__VLS_59.slots).default;
        var __VLS_59;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { footer: __VLS_thisSlot } = __VLS_nonNullable(__VLS_53.slots);
        const [{ content }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.Space;
        /** @type { [typeof __VLS_components.Space, typeof __VLS_components.Space, ] } */
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ size: ((__VLS_ctx.token.paddingXXS)), }));
        const __VLS_62 = __VLS_61({ size: ((__VLS_ctx.token.paddingXXS)), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
        const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.Button;
        /** @type { [typeof __VLS_components.Button, ] } */
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ type: ("text"), size: ("small"), icon: ((__VLS_ctx.h(__VLS_ctx.SyncOutlined))), }));
        const __VLS_68 = __VLS_67({ type: ("text"), size: ("small"), icon: ((__VLS_ctx.h(__VLS_ctx.SyncOutlined))), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
        const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.Button;
        /** @type { [typeof __VLS_components.Button, ] } */
        // @ts-ignore
        const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ ...{ 'onClick': {} }, type: ("text"), size: ("small"), icon: ((__VLS_ctx.h(__VLS_ctx.CopyOutlined))), }));
        const __VLS_74 = __VLS_73({ ...{ 'onClick': {} }, type: ("text"), size: ("small"), icon: ((__VLS_ctx.h(__VLS_ctx.CopyOutlined))), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
        let __VLS_78;
        const __VLS_79 = {
            onClick: (() => __VLS_ctx.onCopy(content))
        };
        let __VLS_75;
        let __VLS_76;
        var __VLS_77;
        __VLS_nonNullable(__VLS_65.slots).default;
        var __VLS_65;
    }
    var __VLS_53;
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    const __VLS_80 = __VLS_resolvedLocalAndGlobalComponents.Bubble;
    /** @type { [typeof __VLS_components.Bubble, ] } */
    // @ts-ignore
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ content: ((__VLS_ctx.text1.repeat(__VLS_ctx.repeat))), typing: (({ step: 2, interval: 50 })), avatar: (({ icon: __VLS_ctx.h(__VLS_ctx.UserOutlined) })), }));
    const __VLS_82 = __VLS_81({ content: ((__VLS_ctx.text1.repeat(__VLS_ctx.repeat))), typing: (({ step: 2, interval: 50 })), avatar: (({ icon: __VLS_ctx.h(__VLS_ctx.UserOutlined) })), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    const __VLS_86 = __VLS_resolvedLocalAndGlobalComponents.Bubble;
    /** @type { [typeof __VLS_components.Bubble, ] } */
    // @ts-ignore
    const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ content: ((__VLS_ctx.text1.repeat(__VLS_ctx.repeat))), typing: (({ step: 2, interval: 50, suffix: '💗' })), avatar: (({ icon: __VLS_ctx.h(__VLS_ctx.UserOutlined) })), }));
    const __VLS_88 = __VLS_87({ content: ((__VLS_ctx.text1.repeat(__VLS_ctx.repeat))), typing: (({ step: 2, interval: 50, suffix: '💗' })), avatar: (({ icon: __VLS_ctx.h(__VLS_ctx.UserOutlined) })), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
    const __VLS_92 = __VLS_resolvedLocalAndGlobalComponents.Button;
    /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
    // @ts-ignore
    const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({ ...{ 'onClick': {} }, ...{ style: (({ alignSelf: 'flex-end' })) }, }));
    const __VLS_94 = __VLS_93({ ...{ 'onClick': {} }, ...{ style: (({ alignSelf: 'flex-end' })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_93));
    let __VLS_98;
    const __VLS_99 = {
        onClick: (...[$event]) => {
            __VLS_ctx.repeat = __VLS_ctx.repeat < 5 ? __VLS_ctx.repeat + 1 : 1;
        }
    };
    let __VLS_95;
    let __VLS_96;
    (__VLS_ctx.repeat);
    __VLS_nonNullable(__VLS_97.slots).default;
    var __VLS_97;
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
    const __VLS_100 = __VLS_resolvedLocalAndGlobalComponents.MyBubble;
    /** @type { [typeof __VLS_components.MyBubble, typeof __VLS_components.MyBubble, ] } */
    // @ts-ignore
    const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({ typing: ((true)), content: ((__VLS_ctx.contentState)), avatar: (({ icon: __VLS_ctx.h(__VLS_ctx.UserOutlined) })), }));
    const __VLS_102 = __VLS_101({ typing: ((true)), content: ((__VLS_ctx.contentState)), avatar: (({ icon: __VLS_ctx.h(__VLS_ctx.UserOutlined) })), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { message: __VLS_thisSlot } = __VLS_nonNullable(__VLS_105.slots);
        const [{ content }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_106 = __VLS_resolvedLocalAndGlobalComponents.Flex;
        /** @type { [typeof __VLS_components.Flex, typeof __VLS_components.Flex, ] } */
        // @ts-ignore
        const __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106({ gap: ("middle"), align: ("center"), }));
        const __VLS_108 = __VLS_107({ gap: ("middle"), align: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_107));
        const __VLS_112 = __VLS_resolvedLocalAndGlobalComponents.Image;
        /** @type { [typeof __VLS_components.Image, ] } */
        // @ts-ignore
        const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({ height: ((50)), src: ((content.imageUrl)), }));
        const __VLS_114 = __VLS_113({ height: ((50)), src: ((content.imageUrl)), }, ...__VLS_functionalComponentArgsRest(__VLS_113));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ style: ({}) }, });
        (content.text);
        __VLS_nonNullable(__VLS_111.slots).default;
        var __VLS_111;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { footer: __VLS_thisSlot } = __VLS_nonNullable(__VLS_105.slots);
        const [{ content }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_118 = __VLS_resolvedLocalAndGlobalComponents.Button;
        /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
        // @ts-ignore
        const __VLS_119 = __VLS_asFunctionalComponent(__VLS_118, new __VLS_118({ ...{ 'onClick': {} }, type: ("text"), }));
        const __VLS_120 = __VLS_119({ ...{ 'onClick': {} }, type: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_119));
        let __VLS_124;
        const __VLS_125 = {
            onClick: (() => {
                __VLS_ctx.contentState = {
                    ...__VLS_ctx.contentState,
                    actionNode: __VLS_ctx.h('span', '🎉 Happy Ant Design X Vue !'),
                };
            })
        };
        let __VLS_121;
        let __VLS_122;
        const __VLS_126 = ((content?.actionNode));
        // @ts-ignore
        const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({}));
        const __VLS_128 = __VLS_127({}, ...__VLS_functionalComponentArgsRest(__VLS_127));
        __VLS_nonNullable(__VLS_123.slots).default;
        var __VLS_123;
    }
    var __VLS_105;
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: (({ height: 100 })) }, key: ((__VLS_ctx.renderKey)), });
    const __VLS_132 = __VLS_resolvedLocalAndGlobalComponents.Bubble;
    /** @type { [typeof __VLS_components.Bubble, ] } */
    // @ts-ignore
    const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({ typing: ((true)), content: ((__VLS_ctx.text)), messageRender: ((__VLS_ctx.renderMarkdown)), avatar: (({ icon: __VLS_ctx.h(__VLS_ctx.UserOutlined) })), }));
    const __VLS_134 = __VLS_133({ typing: ((true)), content: ((__VLS_ctx.text)), messageRender: ((__VLS_ctx.renderMarkdown)), avatar: (({ icon: __VLS_ctx.h(__VLS_ctx.UserOutlined) })), }, ...__VLS_functionalComponentArgsRest(__VLS_133));
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    const __VLS_138 = __VLS_resolvedLocalAndGlobalComponents.Flex;
    /** @type { [typeof __VLS_components.Flex, typeof __VLS_components.Flex, ] } */
    // @ts-ignore
    const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({ vertical: (true), gap: ("middle"), }));
    const __VLS_140 = __VLS_139({ vertical: (true), gap: ("middle"), }, ...__VLS_functionalComponentArgsRest(__VLS_139));
    const __VLS_144 = __VLS_resolvedLocalAndGlobalComponents.Bubble;
    /** @type { [typeof __VLS_components.Bubble, ] } */
    // @ts-ignore
    const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({ variant: ("filled"), avatar: (({ icon: __VLS_ctx.h(__VLS_ctx.UserOutlined) })), content: ("variant: filled"), }));
    const __VLS_146 = __VLS_145({ variant: ("filled"), avatar: (({ icon: __VLS_ctx.h(__VLS_ctx.UserOutlined) })), content: ("variant: filled"), }, ...__VLS_functionalComponentArgsRest(__VLS_145));
    const __VLS_150 = __VLS_resolvedLocalAndGlobalComponents.Bubble;
    /** @type { [typeof __VLS_components.Bubble, ] } */
    // @ts-ignore
    const __VLS_151 = __VLS_asFunctionalComponent(__VLS_150, new __VLS_150({ variant: ("outlined"), avatar: (({ icon: __VLS_ctx.h(__VLS_ctx.UserOutlined) })), content: ("variant: outlined"), }));
    const __VLS_152 = __VLS_151({ variant: ("outlined"), avatar: (({ icon: __VLS_ctx.h(__VLS_ctx.UserOutlined) })), content: ("variant: outlined"), }, ...__VLS_functionalComponentArgsRest(__VLS_151));
    const __VLS_156 = __VLS_resolvedLocalAndGlobalComponents.Bubble;
    /** @type { [typeof __VLS_components.Bubble, ] } */
    // @ts-ignore
    const __VLS_157 = __VLS_asFunctionalComponent(__VLS_156, new __VLS_156({ variant: ("shadow"), avatar: (({ icon: __VLS_ctx.h(__VLS_ctx.UserOutlined) })), content: ("variant: shadow"), }));
    const __VLS_158 = __VLS_157({ variant: ("shadow"), avatar: (({ icon: __VLS_ctx.h(__VLS_ctx.UserOutlined) })), content: ("variant: shadow"), }, ...__VLS_functionalComponentArgsRest(__VLS_157));
    const __VLS_162 = __VLS_resolvedLocalAndGlobalComponents.Bubble;
    /** @type { [typeof __VLS_components.Bubble, ] } */
    // @ts-ignore
    const __VLS_163 = __VLS_asFunctionalComponent(__VLS_162, new __VLS_162({ variant: ("borderless"), avatar: (({ icon: __VLS_ctx.h(__VLS_ctx.UserOutlined) })), content: ((__VLS_ctx.h(__VLS_ctx.Prompts, {
            title: 'variant: borderless to customize',
            items: __VLS_ctx.items,
            vertical: true,
        }))), }));
    const __VLS_164 = __VLS_163({ variant: ("borderless"), avatar: (({ icon: __VLS_ctx.h(__VLS_ctx.UserOutlined) })), content: ((__VLS_ctx.h(__VLS_ctx.Prompts, {
            title: 'variant: borderless to customize',
            items: __VLS_ctx.items,
            vertical: true,
        }))), }, ...__VLS_functionalComponentArgsRest(__VLS_163));
    __VLS_nonNullable(__VLS_143.slots).default;
    var __VLS_143;
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    const __VLS_168 = __VLS_resolvedLocalAndGlobalComponents.Flex;
    /** @type { [typeof __VLS_components.Flex, typeof __VLS_components.Flex, ] } */
    // @ts-ignore
    const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({ gap: ("middle"), vertical: (true), }));
    const __VLS_170 = __VLS_169({ gap: ("middle"), vertical: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_169));
    const __VLS_174 = __VLS_resolvedLocalAndGlobalComponents.Bubble;
    /** @type { [typeof __VLS_components.Bubble, ] } */
    // @ts-ignore
    const __VLS_175 = __VLS_asFunctionalComponent(__VLS_174, new __VLS_174({ content: ("shape: default"), }));
    const __VLS_176 = __VLS_175({ content: ("shape: default"), }, ...__VLS_functionalComponentArgsRest(__VLS_175));
    const __VLS_180 = __VLS_resolvedLocalAndGlobalComponents.Bubble;
    /** @type { [typeof __VLS_components.Bubble, ] } */
    // @ts-ignore
    const __VLS_181 = __VLS_asFunctionalComponent(__VLS_180, new __VLS_180({ ...(__VLS_ctx.sharedLongTextProps), }));
    const __VLS_182 = __VLS_181({ ...(__VLS_ctx.sharedLongTextProps), }, ...__VLS_functionalComponentArgsRest(__VLS_181));
    const __VLS_186 = __VLS_resolvedLocalAndGlobalComponents.Bubble;
    /** @type { [typeof __VLS_components.Bubble, ] } */
    // @ts-ignore
    const __VLS_187 = __VLS_asFunctionalComponent(__VLS_186, new __VLS_186({ content: ("shape: round"), shape: ("round"), }));
    const __VLS_188 = __VLS_187({ content: ("shape: round"), shape: ("round"), }, ...__VLS_functionalComponentArgsRest(__VLS_187));
    const __VLS_192 = __VLS_resolvedLocalAndGlobalComponents.Bubble;
    /** @type { [typeof __VLS_components.Bubble, ] } */
    // @ts-ignore
    const __VLS_193 = __VLS_asFunctionalComponent(__VLS_192, new __VLS_192({ ...(__VLS_ctx.sharedLongTextProps), shape: ("round"), }));
    const __VLS_194 = __VLS_193({ ...(__VLS_ctx.sharedLongTextProps), shape: ("round"), }, ...__VLS_functionalComponentArgsRest(__VLS_193));
    const __VLS_198 = __VLS_resolvedLocalAndGlobalComponents.Bubble;
    /** @type { [typeof __VLS_components.Bubble, ] } */
    // @ts-ignore
    const __VLS_199 = __VLS_asFunctionalComponent(__VLS_198, new __VLS_198({ content: ("shape: corner"), shape: ("corner"), }));
    const __VLS_200 = __VLS_199({ content: ("shape: corner"), shape: ("corner"), }, ...__VLS_functionalComponentArgsRest(__VLS_199));
    const __VLS_204 = __VLS_resolvedLocalAndGlobalComponents.Bubble;
    /** @type { [typeof __VLS_components.Bubble, ] } */
    // @ts-ignore
    const __VLS_205 = __VLS_asFunctionalComponent(__VLS_204, new __VLS_204({ ...(__VLS_ctx.sharedLongTextProps), shape: ("corner"), }));
    const __VLS_206 = __VLS_205({ ...(__VLS_ctx.sharedLongTextProps), shape: ("corner"), }, ...__VLS_functionalComponentArgsRest(__VLS_205));
    __VLS_nonNullable(__VLS_173.slots).default;
    var __VLS_173;
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    const __VLS_210 = __VLS_resolvedLocalAndGlobalComponents.Flex;
    /** @type { [typeof __VLS_components.Flex, typeof __VLS_components.Flex, ] } */
    // @ts-ignore
    const __VLS_211 = __VLS_asFunctionalComponent(__VLS_210, new __VLS_210({ vertical: (true), gap: ("small"), }));
    const __VLS_212 = __VLS_211({ vertical: (true), gap: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_211));
    const __VLS_216 = __VLS_resolvedLocalAndGlobalComponents.Flex;
    /** @type { [typeof __VLS_components.Flex, typeof __VLS_components.Flex, ] } */
    // @ts-ignore
    const __VLS_217 = __VLS_asFunctionalComponent(__VLS_216, new __VLS_216({ gap: ("large"), align: ("center"), }));
    const __VLS_218 = __VLS_217({ gap: ("large"), align: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_217));
    const __VLS_222 = __VLS_resolvedLocalAndGlobalComponents.Switch;
    /** @type { [typeof __VLS_components.Switch, ] } */
    // @ts-ignore
    const __VLS_223 = __VLS_asFunctionalComponent(__VLS_222, new __VLS_222({ ...{ 'onChange': {} }, checked: ((__VLS_ctx.useRolesAsFunction)), checkedChildren: ("Function"), unCheckedChildren: ("Object"), }));
    const __VLS_224 = __VLS_223({ ...{ 'onChange': {} }, checked: ((__VLS_ctx.useRolesAsFunction)), checkedChildren: ("Function"), unCheckedChildren: ("Object"), }, ...__VLS_functionalComponentArgsRest(__VLS_223));
    let __VLS_228;
    const __VLS_229 = {
        onChange: (__VLS_ctx.handleChange)
    };
    let __VLS_225;
    let __VLS_226;
    var __VLS_227;
    __VLS_nonNullable(__VLS_221.slots).default;
    var __VLS_221;
    const __VLS_230 = __VLS_resolvedLocalAndGlobalComponents.Flex;
    /** @type { [typeof __VLS_components.Flex, typeof __VLS_components.Flex, ] } */
    // @ts-ignore
    const __VLS_231 = __VLS_asFunctionalComponent(__VLS_230, new __VLS_230({ gap: ("small"), ...{ style: (({ alignSelf: 'flex-end' })) }, }));
    const __VLS_232 = __VLS_231({ gap: ("small"), ...{ style: (({ alignSelf: 'flex-end' })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_231));
    const __VLS_236 = __VLS_resolvedLocalAndGlobalComponents.Button;
    /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
    // @ts-ignore
    const __VLS_237 = __VLS_asFunctionalComponent(__VLS_236, new __VLS_236({ ...{ 'onClick': {} }, }));
    const __VLS_238 = __VLS_237({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_237));
    let __VLS_242;
    const __VLS_243 = {
        onClick: (() => {
            __VLS_ctx.count++;
        })
    };
    let __VLS_239;
    let __VLS_240;
    __VLS_nonNullable(__VLS_241.slots).default;
    var __VLS_241;
    const __VLS_244 = __VLS_resolvedLocalAndGlobalComponents.Button;
    /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
    // @ts-ignore
    const __VLS_245 = __VLS_asFunctionalComponent(__VLS_244, new __VLS_244({ ...{ 'onClick': {} }, }));
    const __VLS_246 = __VLS_245({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_245));
    let __VLS_250;
    const __VLS_251 = {
        onClick: (() => {
            __VLS_ctx.listRef?.scrollTo({ key: 0, block: 'nearest' });
        })
    };
    let __VLS_247;
    let __VLS_248;
    __VLS_nonNullable(__VLS_249.slots).default;
    var __VLS_249;
    __VLS_nonNullable(__VLS_235.slots).default;
    var __VLS_235;
    const __VLS_252 = __VLS_resolvedLocalAndGlobalComponents.BubbleList;
    /** @type { [typeof __VLS_components.BubbleList, ] } */
    // @ts-ignore
    const __VLS_253 = __VLS_asFunctionalComponent(__VLS_252, new __VLS_252({ ref: ("listRef"), ...{ style: (({ maxHeight: '300px', paddingInline: '16px' })) }, roles: ((__VLS_ctx.useRolesAsFunction ? __VLS_ctx.rolesAsFunction : __VLS_ctx.rolesAsObject)), items: ((Array.from({ length: __VLS_ctx.count }).map((_, i) => {
            const isAI = !!(i % 2);
            const content = isAI
                ? 'Mock AI content. '.repeat(20)
                : 'Mock user content.';
            return {
                key: i,
                role: isAI ? 'ai' : 'user',
                content,
            };
        }))), }));
    const __VLS_254 = __VLS_253({ ref: ("listRef"), ...{ style: (({ maxHeight: '300px', paddingInline: '16px' })) }, roles: ((__VLS_ctx.useRolesAsFunction ? __VLS_ctx.rolesAsFunction : __VLS_ctx.rolesAsObject)), items: ((Array.from({ length: __VLS_ctx.count }).map((_, i) => {
            const isAI = !!(i % 2);
            const content = isAI
                ? 'Mock AI content. '.repeat(20)
                : 'Mock user content.';
            return {
                key: i,
                role: isAI ? 'ai' : 'user',
                content,
            };
        }))), }, ...__VLS_functionalComponentArgsRest(__VLS_253));
    // @ts-ignore navigation for `const listRef = ref()`
    __VLS_ctx.listRef;
    var __VLS_258 = {};
    var __VLS_257;
    __VLS_nonNullable(__VLS_215.slots).default;
    var __VLS_215;
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    const __VLS_259 = __VLS_resolvedLocalAndGlobalComponents.BubbleList;
    /** @type { [typeof __VLS_components.BubbleList, ] } */
    // @ts-ignore
    const __VLS_260 = __VLS_asFunctionalComponent(__VLS_259, new __VLS_259({ ref: ("listRef1"), ...{ style: (({ maxHeight: '300px' })) }, roles: ((__VLS_ctx.roles)), items: (([
            {
                key: 'welcome',
                role: 'ai',
                content: 'Mock welcome content. '.repeat(10),
                footer: __VLS_ctx.h(__VLS_ctx.Flex, null, () => [
                    __VLS_ctx.h(__VLS_ctx.Button, {
                        size: 'small',
                        type: 'text',
                        icon: __VLS_ctx.h(__VLS_ctx.SyncOutlined),
                        style: { marginInlineEnd: 'auto' },
                    }),
                    __VLS_ctx.h(__VLS_ctx.Button, { size: 'small', type: 'text', icon: __VLS_ctx.h(__VLS_ctx.SmileOutlined) }),
                    __VLS_ctx.h(__VLS_ctx.Button, { size: 'small', type: 'text', icon: __VLS_ctx.h(__VLS_ctx.FrownOutlined) }),
                ]),
            },
            {
                key: 'ask',
                role: 'user',
                content: 'Mock user content.',
            },
            {
                key: 'ai',
                role: 'ai',
                loading: true,
            },
        ])), }));
    const __VLS_261 = __VLS_260({ ref: ("listRef1"), ...{ style: (({ maxHeight: '300px' })) }, roles: ((__VLS_ctx.roles)), items: (([
            {
                key: 'welcome',
                role: 'ai',
                content: 'Mock welcome content. '.repeat(10),
                footer: __VLS_ctx.h(__VLS_ctx.Flex, null, () => [
                    __VLS_ctx.h(__VLS_ctx.Button, {
                        size: 'small',
                        type: 'text',
                        icon: __VLS_ctx.h(__VLS_ctx.SyncOutlined),
                        style: { marginInlineEnd: 'auto' },
                    }),
                    __VLS_ctx.h(__VLS_ctx.Button, { size: 'small', type: 'text', icon: __VLS_ctx.h(__VLS_ctx.SmileOutlined) }),
                    __VLS_ctx.h(__VLS_ctx.Button, { size: 'small', type: 'text', icon: __VLS_ctx.h(__VLS_ctx.FrownOutlined) }),
                ]),
            },
            {
                key: 'ask',
                role: 'user',
                content: 'Mock user content.',
            },
            {
                key: 'ai',
                role: 'ai',
                loading: true,
            },
        ])), }, ...__VLS_functionalComponentArgsRest(__VLS_260));
    // @ts-ignore navigation for `const listRef1 = ref()`
    __VLS_ctx.listRef1;
    var __VLS_265 = {};
    var __VLS_264;
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "listRef": __VLS_258,
        "listRef1": __VLS_265,
    };
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
            CopyOutlined: CopyOutlined,
            SyncOutlined: SyncOutlined,
            UserOutlined: UserOutlined,
            SmileOutlined: SmileOutlined,
            FrownOutlined: FrownOutlined,
            Avatar: Avatar,
            Button: Button,
            Space: Space,
            Switch: Switch,
            Flex: Flex,
            Image: Image,
            Bubble: Bubble,
            Prompts: Prompts,
            BubbleList: BubbleList,
            h: h,
            fooAvatar: fooAvatar,
            barAvatar: barAvatar,
            hideAvatar: hideAvatar,
            token: token,
            onCopy: onCopy,
            loading: loading,
            text1: text1,
            repeat: repeat,
            MyBubble: MyBubble,
            contentState: contentState,
            text: text,
            renderMarkdown: renderMarkdown,
            renderKey: renderKey,
            items: items,
            sharedLongTextProps: sharedLongTextProps,
            rolesAsObject: rolesAsObject,
            rolesAsFunction: rolesAsFunction,
            count: count,
            useRolesAsFunction: useRolesAsFunction,
            listRef: listRef,
            handleChange: handleChange,
            roles: roles,
            listRef1: listRef1,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
