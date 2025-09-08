import { ref, reactive } from 'vue';
import { Button, Space, message } from 'ant-design-vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const loading = reactive({
    get: false,
    post: false
});
const response = ref(null);
const sendGetRequest = async () => {
    loading.get = true;
    try {
        // 模拟 GET 请求
        await new Promise(resolve => setTimeout(resolve, 1000));
        response.value = {
            method: 'GET',
            status: 200,
            data: {
                message: '这是一个模拟的 GET 请求响应',
                timestamp: new Date().toISOString()
            }
        };
        message.success('GET 请求成功');
    }
    catch (error) {
        message.error('GET 请求失败');
    }
    finally {
        loading.get = false;
    }
};
const sendPostRequest = async () => {
    loading.post = true;
    try {
        // 模拟 POST 请求
        await new Promise(resolve => setTimeout(resolve, 1500));
        response.value = {
            method: 'POST',
            status: 201,
            data: {
                message: '这是一个模拟的 POST 请求响应',
                id: Math.random().toString(36).substr(2, 9),
                timestamp: new Date().toISOString()
            }
        };
        message.success('POST 请求成功');
    }
    catch (error) {
        message.error('POST 请求失败');
    }
    finally {
        loading.post = false;
    }
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
    __VLS_styleScopedClasses['response-area'];
    __VLS_styleScopedClasses['response-area'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("x-request-demo") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("demo-section") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("demo-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("request-demo") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Space;
    /** @type { [typeof __VLS_components.Space, typeof __VLS_components.Space, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.Button;
    /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onClick': {} }, loading: ((__VLS_ctx.loading.get)), }));
    const __VLS_8 = __VLS_7({ ...{ 'onClick': {} }, loading: ((__VLS_ctx.loading.get)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_12;
    const __VLS_13 = {
        onClick: (__VLS_ctx.sendGetRequest)
    };
    let __VLS_9;
    let __VLS_10;
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.Button;
    /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ ...{ 'onClick': {} }, loading: ((__VLS_ctx.loading.post)), }));
    const __VLS_16 = __VLS_15({ ...{ 'onClick': {} }, loading: ((__VLS_ctx.loading.post)), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    let __VLS_20;
    const __VLS_21 = {
        onClick: (__VLS_ctx.sendPostRequest)
    };
    let __VLS_17;
    let __VLS_18;
    __VLS_nonNullable(__VLS_19.slots).default;
    var __VLS_19;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    if (__VLS_ctx.response) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("response-area") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)({});
        (JSON.stringify(__VLS_ctx.response, null, 2));
    }
    __VLS_styleScopedClasses['x-request-demo'];
    __VLS_styleScopedClasses['demo-section'];
    __VLS_styleScopedClasses['demo-content'];
    __VLS_styleScopedClasses['request-demo'];
    __VLS_styleScopedClasses['response-area'];
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
            Space: Space,
            loading: loading,
            response: response,
            sendGetRequest: sendGetRequest,
            sendPostRequest: sendPostRequest,
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
