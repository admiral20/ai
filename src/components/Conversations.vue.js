import { theme, message, Space } from 'ant-design-vue';
import { DeleteOutlined, EditOutlined, StopOutlined, PlusSquareOutlined, CommentOutlined } from '@ant-design/icons-vue';
import { Conversations } from "ant-design-x-vue";
import { computed, h, ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const items = Array.from({ length: 4 }).map((_, index) => ({
    key: `item${index + 1}`,
    label: `Conversation Item ${index + 1}`,
    disabled: index === 3,
    group: index < 3 ? 'today' : 'yesterday',
}));
const { token } = theme.useToken();
const style = computed(() => ({
    width: '256px',
    background: token.value.colorBgContainer,
    borderRadius: token.value.borderRadius,
}));
const [messageApi, contextHolder] = message.useMessage();
const menuConfig = (conversation) => ({
    items: [
        {
            label: 'Operation 1',
            key: 'operation1',
            icon: h(EditOutlined),
        },
        {
            label: 'Operation 2',
            key: 'operation2',
            icon: h(StopOutlined),
            disabled: true,
        },
        {
            label: 'Operation 3',
            key: 'operation3',
            icon: h(DeleteOutlined),
            danger: false,
        },
    ],
    onClick: (menuInfo) => {
        messageApi.info(`Click ${conversation.key} - ${menuInfo.key}`);
    },
});
const menuConfig1 = (conversation) => ({
    trigger: (menuInfo) => h(PlusSquareOutlined, {
        onClick: () => {
            console.log(`Click ${conversation.key} - ${menuInfo.key}`);
        }
    }),
    items: [
        {
            label: 'Operation 1',
            key: 'operation1',
            icon: h(EditOutlined),
        },
        {
            label: 'Operation 2',
            key: 'operation2',
            icon: h(StopOutlined),
            disabled: true,
        },
        {
            label: 'Operation 3',
            key: 'operation3',
            icon: h(DeleteOutlined),
            danger: false,
        },
    ],
    onClick: (menuInfo) => {
        menuInfo.domEvent.stopPropagation();
        messageApi.info(`Click ${conversation.key} - ${menuInfo.key}`);
    },
});
const activeKey = ref('item1');
const updateActiveKey = (v) => activeKey.value = v;
const groupable = {
    sort(a, b) {
        if (a === b)
            return 0;
        return a === 'Today' ? -1 : 1;
    },
    title: (group, { components: { GroupTitle } }) => group ? h(GroupTitle, null, () => [h(Space, null, () => [h(CommentOutlined), h('span', null, group)])]) : h(GroupTitle),
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Conversations;
    /** @type { [typeof __VLS_components.Conversations, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ items: ((__VLS_ctx.items)), defaultActiveKey: ("item1"), ...{ style: ((__VLS_ctx.style)) }, groupable: ((__VLS_ctx.groupable)), }));
    const __VLS_2 = __VLS_1({ items: ((__VLS_ctx.items)), defaultActiveKey: ("item1"), ...{ style: ((__VLS_ctx.style)) }, groupable: ((__VLS_ctx.groupable)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.contextHolder;
    /** @type { [typeof __VLS_components.ContextHolder, typeof __VLS_components.contextHolder, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.Conversations;
    /** @type { [typeof __VLS_components.Conversations, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ defaultActiveKey: ("item1"), menu: ((__VLS_ctx.menuConfig)), items: ((__VLS_ctx.items)), ...{ style: ((__VLS_ctx.style)) }, }));
    const __VLS_14 = __VLS_13({ defaultActiveKey: ("item1"), menu: ((__VLS_ctx.menuConfig)), items: ((__VLS_ctx.items)), ...{ style: ((__VLS_ctx.style)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.Conversations;
    /** @type { [typeof __VLS_components.Conversations, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ defaultActiveKey: ("item1"), activeKey: ((__VLS_ctx.activeKey)), menu: ((__VLS_ctx.menuConfig1)), items: ((__VLS_ctx.items)), onActiveChange: (((v) => __VLS_ctx.updateActiveKey(v))), ...{ style: ((__VLS_ctx.style)) }, }));
    const __VLS_20 = __VLS_19({ defaultActiveKey: ("item1"), activeKey: ((__VLS_ctx.activeKey)), menu: ((__VLS_ctx.menuConfig1)), items: ((__VLS_ctx.items)), onActiveChange: (((v) => __VLS_ctx.updateActiveKey(v))), ...{ style: ((__VLS_ctx.style)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.Flex;
    /** @type { [typeof __VLS_components.Flex, typeof __VLS_components.Flex, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ gap: ("small"), }));
    const __VLS_26 = __VLS_25({ gap: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.Button;
    /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ 'onClick': {} }, }));
    const __VLS_32 = __VLS_31({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    let __VLS_36;
    const __VLS_37 = {
        onClick: (() => {
            __VLS_ctx.updateActiveKey('item1');
        })
    };
    let __VLS_33;
    let __VLS_34;
    __VLS_nonNullable(__VLS_35.slots).default;
    var __VLS_35;
    const __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.Button;
    /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ ...{ 'onClick': {} }, }));
    const __VLS_40 = __VLS_39({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    let __VLS_44;
    const __VLS_45 = {
        onClick: (() => {
            __VLS_ctx.updateActiveKey('item3');
        })
    };
    let __VLS_41;
    let __VLS_42;
    __VLS_nonNullable(__VLS_43.slots).default;
    var __VLS_43;
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
            Conversations: Conversations,
            items: items,
            style: style,
            contextHolder: contextHolder,
            menuConfig: menuConfig,
            menuConfig1: menuConfig1,
            activeKey: activeKey,
            updateActiveKey: updateActiveKey,
            groupable: groupable,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
