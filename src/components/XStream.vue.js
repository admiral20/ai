import { ref } from 'vue';
import { Button } from 'ant-design-vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const streamData = ref([]);
const streaming = ref(false);
const startStream = () => {
    streaming.value = true;
    streamData.value = [];
    let count = 0;
    const interval = setInterval(() => {
        count++;
        streamData.value.push({
            id: count,
            timestamp: new Date().toLocaleTimeString(),
            content: `流式数据 ${count}: 这是一条实时传输的消息`
        });
        if (count >= 10) {
            clearInterval(interval);
            streaming.value = false;
        }
    }, 500);
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
    __VLS_styleScopedClasses['stream-item'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("x-stream-demo") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("demo-section") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("demo-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stream-demo") }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.streamData))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stream-item") }, key: ((item.id)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("timestamp") }, });
        (item.timestamp);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("content") }, });
        (item.content);
    }
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Button;
    /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, loading: ((__VLS_ctx.streaming)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, loading: ((__VLS_ctx.streaming)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (__VLS_ctx.startStream)
    };
    let __VLS_3;
    let __VLS_4;
    (__VLS_ctx.streaming ? '流式传输中...' : '开始流式传输');
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['x-stream-demo'];
    __VLS_styleScopedClasses['demo-section'];
    __VLS_styleScopedClasses['demo-content'];
    __VLS_styleScopedClasses['stream-demo'];
    __VLS_styleScopedClasses['stream-item'];
    __VLS_styleScopedClasses['timestamp'];
    __VLS_styleScopedClasses['content'];
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
            Button: Button,
            streamData: streamData,
            streaming: streaming,
            startStream: startStream,
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
