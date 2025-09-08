import { message, Switch, Flex, Space, Spin, Typography, Button, theme } from 'ant-design-vue';
import { Sender, Attachments } from 'ant-design-x-vue';
import { onWatcherCleanup, ref, watch, h, computed } from 'vue';
import { SoundOutlined, EllipsisOutlined, CloudUploadOutlined, LinkOutlined, EnterOutlined, SendOutlined } from '@ant-design/icons-vue';
import SenderTsx from './SenderTsx.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const [messageApi, contextHolder] = message.useMessage();
const value = ref('Hello? this is X!');
const loading = ref(false);
// Mock send message
watch(loading, () => {
    if (loading.value) {
        const timer = setTimeout(() => {
            loading.value = false;
            messageApi.success('Send message successfully!');
        }, 3000);
        onWatcherCleanup(() => {
            clearTimeout(timer);
        });
    }
});
const submit = () => {
    messageApi.success('Send message successfully!');
};
const recording = ref(false);
const speechConfig = computed(() => ({
    // When setting `recording`, the built-in speech recognition feature will be disabled
    recording: recording.value,
    onRecordingChange: (nextRecording) => {
        messageApi.info(`Mock Customize Recording: ${nextRecording}`);
        recording.value = nextRecording;
    },
}));
// const [message, contextHolder] = message.useMessage();
const value1 = ref('');
const loading1 = ref(false);
// Mock send message
watch(loading1, () => {
    if (loading1.value) {
        const timer = setTimeout(() => {
            loading1.value = false;
            value1.value = '';
            message.success('Send message successfully!');
        }, 2000);
        onWatcherCleanup(() => {
            clearTimeout(timer);
        });
    }
});
const open = ref(false);
const { token } = theme.useToken();
const openChange = (v) => {
    open.value = v;
};
const triggerOpen = () => {
    open.value = !open.value;
};
const senderSubmit = () => {
    message.success('Send message successfully!');
};
const selectFileClick = () => {
    message.info('Mock select file');
};
const hasRef = ref(true);
const toggleChecked = () => {
    hasRef.value = !hasRef.value;
};
const openChange1 = (v) => {
    hasRef.value = v;
};
const headerTitle = h(Space, {}, () => [
    h(EnterOutlined),
    h(Typography.Text, { type: 'secondary' }, () => '"Tell more about Ant Design X"')
]);
const iconStyle = {
    fontSize: 18,
    color: token.value.colorText,
};
// Template 语法演示相关状态
const templateValue = ref('Template syntax example');
const templateLoading = ref(false);
// Template 语法演示方法
const handleTemplateSubmit = () => {
    templateLoading.value = true;
};
const handleTemplateCancel = () => {
    templateLoading.value = false;
};
// Mock send message for template
watch(templateLoading, () => {
    if (templateLoading.value) {
        const timer = setTimeout(() => {
            templateLoading.value = false;
            messageApi.success('Template message sent successfully!');
        }, 2000);
        onWatcherCleanup(() => {
            clearTimeout(timer);
        });
    }
});
const open1 = ref(false);
const items = ref([]);
const text = ref('');
const attachmentsRef = ref(null);
const senderRef = ref(null);
const placeholder = (type) => type === 'drop'
    ? {
        title: 'Drop file here',
    }
    : {
        icon: h(CloudUploadOutlined),
        title: 'Upload files',
        description: 'Click or drag files to this area to upload',
    };
const getDropContainer = () => senderRef.value?.nativeElement;
const pastFile = (_, files) => {
    console.log("past");
    attachmentsRef.value?.upload(files);
    open.value = true;
};
const submit1 = () => {
    items.value = [];
    text.value = '';
};
const fileChange = ({ fileList }) => items.value = fileList;
const senderRef1 = ref(null);
const focusStart = () => {
    senderRef1.value?.focus({ cursor: 'start' });
};
const focusEnd = () => {
    senderRef1.value?.focus({ cursor: 'end' });
};
const focusAll = () => {
    senderRef1.value?.focus({ cursor: 'all' });
};
const focusPreventScroll = () => {
    senderRef1.value?.focus({ preventScroll: true });
};
const blur = () => {
    senderRef1.value?.blur();
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
    __VLS_styleScopedClasses['template-demo'];
    __VLS_styleScopedClasses['syntax-info'];
    __VLS_styleScopedClasses['syntax-info'];
    __VLS_styleScopedClasses['syntax-info'];
    __VLS_styleScopedClasses['syntax-info'];
    __VLS_styleScopedClasses['history-item'];
    __VLS_styleScopedClasses['sender-demo'];
    __VLS_styleScopedClasses['template-demo'];
    __VLS_styleScopedClasses['demo-section'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("sender-demo") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.contextHolder;
    /** @type { [typeof __VLS_components.ContextHolder, typeof __VLS_components.contextHolder, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.Flex;
    /** @type { [typeof __VLS_components.Flex, typeof __VLS_components.Flex, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ vertical: (true), gap: ("middle"), }));
    const __VLS_8 = __VLS_7({ vertical: (true), gap: ("middle"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.Sender;
    /** @type { [typeof __VLS_components.Sender, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onSubmit': {} }, ...{ 'onCancel': {} }, value: ((__VLS_ctx.value)), loading: ((__VLS_ctx.loading)), autoSize: (({ minRows: 2, maxRows: 6 })), }));
    const __VLS_14 = __VLS_13({ ...{ 'onSubmit': {} }, ...{ 'onCancel': {} }, value: ((__VLS_ctx.value)), loading: ((__VLS_ctx.loading)), autoSize: (({ minRows: 2, maxRows: 6 })), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    let __VLS_18;
    const __VLS_19 = {
        onSubmit: (() => {
            __VLS_ctx.value = '';
            __VLS_ctx.loading = true;
            __VLS_ctx.messageApi.info('Send message!');
        })
    };
    const __VLS_20 = {
        onCancel: (() => {
            __VLS_ctx.loading = false;
            __VLS_ctx.messageApi.error('Cancel sending!');
        })
    };
    let __VLS_15;
    let __VLS_16;
    var __VLS_17;
    const __VLS_21 = __VLS_resolvedLocalAndGlobalComponents.Sender;
    /** @type { [typeof __VLS_components.Sender, ] } */
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ value: ("Force as loading"), loading: (true), readOnly: (true), }));
    const __VLS_23 = __VLS_22({ value: ("Force as loading"), loading: (true), readOnly: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    const __VLS_27 = __VLS_resolvedLocalAndGlobalComponents.Sender;
    /** @type { [typeof __VLS_components.Sender, ] } */
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({ disabled: (true), value: ("Set to disabled"), }));
    const __VLS_29 = __VLS_28({ disabled: (true), value: ("Set to disabled"), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr, __VLS_intrinsicElements.hr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    const __VLS_33 = __VLS_resolvedLocalAndGlobalComponents.ContextHolder;
    /** @type { [typeof __VLS_components.ContextHolder, typeof __VLS_components.contextHolder, ] } */
    // @ts-ignore
    const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({}));
    const __VLS_35 = __VLS_34({}, ...__VLS_functionalComponentArgsRest(__VLS_34));
    const __VLS_39 = __VLS_resolvedLocalAndGlobalComponents.Sender;
    /** @type { [typeof __VLS_components.Sender, ] } */
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ submitType: ("shiftEnter"), placeholder: ("Press Shift + Enter to send message"), onSubmit: ((__VLS_ctx.submit)), }));
    const __VLS_41 = __VLS_40({ submitType: ("shiftEnter"), placeholder: ("Press Shift + Enter to send message"), onSubmit: ((__VLS_ctx.submit)), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    const __VLS_45 = __VLS_resolvedLocalAndGlobalComponents.ContextHolder;
    /** @type { [typeof __VLS_components.ContextHolder, typeof __VLS_components.contextHolder, ] } */
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({}));
    const __VLS_47 = __VLS_46({}, ...__VLS_functionalComponentArgsRest(__VLS_46));
    const __VLS_51 = __VLS_resolvedLocalAndGlobalComponents.Sender;
    /** @type { [typeof __VLS_components.Sender, ] } */
    // @ts-ignore
    const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ allowSpeech: ((true)), onSubmit: ((__VLS_ctx.submit)), }));
    const __VLS_53 = __VLS_52({ allowSpeech: ((true)), onSubmit: ((__VLS_ctx.submit)), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
    const __VLS_57 = __VLS_resolvedLocalAndGlobalComponents.ContextHolder;
    /** @type { [typeof __VLS_components.ContextHolder, typeof __VLS_components.contextHolder, ] } */
    // @ts-ignore
    const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({}));
    const __VLS_59 = __VLS_58({}, ...__VLS_functionalComponentArgsRest(__VLS_58));
    const __VLS_63 = __VLS_resolvedLocalAndGlobalComponents.Sender;
    /** @type { [typeof __VLS_components.Sender, ] } */
    // @ts-ignore
    const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({ allowSpeech: (({
            audioIcon: __VLS_ctx.h(__VLS_ctx.SoundOutlined),
            audioDisabledIcon: __VLS_ctx.h(__VLS_ctx.SoundOutlined, { style: { color: 'gray' } }),
            audioRecordingIcon: __VLS_ctx.h(__VLS_ctx.EllipsisOutlined)
        })), onSubmit: ((__VLS_ctx.submit)), }));
    const __VLS_65 = __VLS_64({ allowSpeech: (({
            audioIcon: __VLS_ctx.h(__VLS_ctx.SoundOutlined),
            audioDisabledIcon: __VLS_ctx.h(__VLS_ctx.SoundOutlined, { style: { color: 'gray' } }),
            audioRecordingIcon: __VLS_ctx.h(__VLS_ctx.EllipsisOutlined)
        })), onSubmit: ((__VLS_ctx.submit)), }, ...__VLS_functionalComponentArgsRest(__VLS_64));
    const __VLS_69 = __VLS_resolvedLocalAndGlobalComponents.ContextHolder;
    /** @type { [typeof __VLS_components.ContextHolder, typeof __VLS_components.contextHolder, ] } */
    // @ts-ignore
    const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({}));
    const __VLS_71 = __VLS_70({}, ...__VLS_functionalComponentArgsRest(__VLS_70));
    const __VLS_75 = __VLS_resolvedLocalAndGlobalComponents.Sender;
    /** @type { [typeof __VLS_components.Sender, ] } */
    // @ts-ignore
    const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({ allowSpeech: ((__VLS_ctx.speechConfig)), onSubmit: ((__VLS_ctx.submit)), }));
    const __VLS_77 = __VLS_76({ allowSpeech: ((__VLS_ctx.speechConfig)), onSubmit: ((__VLS_ctx.submit)), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    const __VLS_81 = __VLS_resolvedLocalAndGlobalComponents.ContextHolder;
    /** @type { [typeof __VLS_components.ContextHolder, typeof __VLS_components.contextHolder, ] } */
    // @ts-ignore
    const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({}));
    const __VLS_83 = __VLS_82({}, ...__VLS_functionalComponentArgsRest(__VLS_82));
    const __VLS_87 = __VLS_resolvedLocalAndGlobalComponents.Sender;
    /** @type { [typeof __VLS_components.Sender, typeof __VLS_components.Sender, ] } */
    // @ts-ignore
    const __VLS_88 = __VLS_asFunctionalComponent(__VLS_87, new __VLS_87({ ...{ 'onChange': {} }, ...{ 'onSubmit': {} }, ...{ 'onCancel': {} }, value1: ((__VLS_ctx.value1)), submitType: ("shiftEnter"), loading: ((__VLS_ctx.loading1)), }));
    const __VLS_89 = __VLS_88({ ...{ 'onChange': {} }, ...{ 'onSubmit': {} }, ...{ 'onCancel': {} }, value1: ((__VLS_ctx.value1)), submitType: ("shiftEnter"), loading: ((__VLS_ctx.loading1)), }, ...__VLS_functionalComponentArgsRest(__VLS_88));
    let __VLS_93;
    const __VLS_94 = {
        onChange: ((v) => {
            console.log('Sender onChange', v);
        })
    };
    const __VLS_95 = {
        onSubmit: (() => {
            __VLS_ctx.loading = true;
        })
    };
    const __VLS_96 = {
        onCancel: (() => {
            __VLS_ctx.loading = false;
        })
    };
    let __VLS_90;
    let __VLS_91;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { actions: __VLS_thisSlot } = __VLS_nonNullable(__VLS_92.slots);
        const { info: { components: { SendButton, LoadingButton, ClearButton, SpeechButton } } } = __VLS_getSlotParam(__VLS_thisSlot);
        const __VLS_97 = __VLS_resolvedLocalAndGlobalComponents.Space;
        /** @type { [typeof __VLS_components.Space, typeof __VLS_components.Space, ] } */
        // @ts-ignore
        const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({ size: ("small"), }));
        const __VLS_99 = __VLS_98({ size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_98));
        const __VLS_103 = ((__VLS_ctx.Typography.Text), (__VLS_ctx.Typography.Text));
        // @ts-ignore
        const __VLS_104 = __VLS_asFunctionalComponent(__VLS_103, new __VLS_103({ type: ("secondary"), }));
        const __VLS_105 = __VLS_104({ type: ("secondary"), }, ...__VLS_functionalComponentArgsRest(__VLS_104));
        __VLS_elementAsFunction(__VLS_intrinsicElements.small, __VLS_intrinsicElements.small)({});
        __VLS_nonNullable(__VLS_108.slots).default;
        var __VLS_108;
        const __VLS_109 = ((ClearButton));
        // @ts-ignore
        const __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, new __VLS_109({}));
        const __VLS_111 = __VLS_110({}, ...__VLS_functionalComponentArgsRest(__VLS_110));
        const __VLS_115 = ((SpeechButton));
        // @ts-ignore
        const __VLS_116 = __VLS_asFunctionalComponent(__VLS_115, new __VLS_115({}));
        const __VLS_117 = __VLS_116({}, ...__VLS_functionalComponentArgsRest(__VLS_116));
        if (__VLS_ctx.loading1) {
            const __VLS_121 = ((LoadingButton));
            // @ts-ignore
            const __VLS_122 = __VLS_asFunctionalComponent(__VLS_121, new __VLS_121({ type: ("default"), ...{ style: ({}) }, disabled: ((true)), }));
            const __VLS_123 = __VLS_122({ type: ("default"), ...{ style: ({}) }, disabled: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_122));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { icon: __VLS_thisSlot } = __VLS_nonNullable(__VLS_126.slots);
                const __VLS_127 = __VLS_resolvedLocalAndGlobalComponents.Spin;
                /** @type { [typeof __VLS_components.Spin, ] } */
                // @ts-ignore
                const __VLS_128 = __VLS_asFunctionalComponent(__VLS_127, new __VLS_127({ size: ("small"), }));
                const __VLS_129 = __VLS_128({ size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_128));
            }
            var __VLS_126;
        }
        else {
            const __VLS_133 = ((SendButton));
            // @ts-ignore
            const __VLS_134 = __VLS_asFunctionalComponent(__VLS_133, new __VLS_133({ type: ("primary"), disabled: ((false)), }));
            const __VLS_135 = __VLS_134({ type: ("primary"), disabled: ((false)), }, ...__VLS_functionalComponentArgsRest(__VLS_134));
        }
        __VLS_nonNullable(__VLS_102.slots).default;
        var __VLS_102;
    }
    var __VLS_92;
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    const __VLS_139 = __VLS_resolvedLocalAndGlobalComponents.ContextHolder;
    /** @type { [typeof __VLS_components.ContextHolder, typeof __VLS_components.contextHolder, ] } */
    // @ts-ignore
    const __VLS_140 = __VLS_asFunctionalComponent(__VLS_139, new __VLS_139({}));
    const __VLS_141 = __VLS_140({}, ...__VLS_functionalComponentArgsRest(__VLS_140));
    const __VLS_145 = __VLS_resolvedLocalAndGlobalComponents.Flex;
    /** @type { [typeof __VLS_components.Flex, typeof __VLS_components.Flex, ] } */
    // @ts-ignore
    const __VLS_146 = __VLS_asFunctionalComponent(__VLS_145, new __VLS_145({ ...{ style: ({}) }, align: ("end"), }));
    const __VLS_147 = __VLS_146({ ...{ style: ({}) }, align: ("end"), }, ...__VLS_functionalComponentArgsRest(__VLS_146));
    const __VLS_151 = __VLS_resolvedLocalAndGlobalComponents.Sender;
    /** @type { [typeof __VLS_components.Sender, typeof __VLS_components.Sender, ] } */
    // @ts-ignore
    const __VLS_152 = __VLS_asFunctionalComponent(__VLS_151, new __VLS_151({ ...{ 'onSubmit': {} }, placeholder: ("← Click to open123456789"), }));
    const __VLS_153 = __VLS_152({ ...{ 'onSubmit': {} }, placeholder: ("← Click to open123456789"), }, ...__VLS_functionalComponentArgsRest(__VLS_152));
    let __VLS_157;
    const __VLS_158 = {
        onSubmit: (__VLS_ctx.senderSubmit)
    };
    let __VLS_154;
    let __VLS_155;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_156.slots);
        const __VLS_159 = ((__VLS_ctx.Sender.Header), (__VLS_ctx.Sender.Header));
        // @ts-ignore
        const __VLS_160 = __VLS_asFunctionalComponent(__VLS_159, new __VLS_159({ ...{ 'onOpenChange': {} }, title: ("Upload Sample"), open: ((__VLS_ctx.open)), }));
        const __VLS_161 = __VLS_160({ ...{ 'onOpenChange': {} }, title: ("Upload Sample"), open: ((__VLS_ctx.open)), }, ...__VLS_functionalComponentArgsRest(__VLS_160));
        let __VLS_165;
        const __VLS_166 = {
            onOpenChange: (__VLS_ctx.openChange)
        };
        let __VLS_162;
        let __VLS_163;
        const __VLS_167 = __VLS_resolvedLocalAndGlobalComponents.Flex;
        /** @type { [typeof __VLS_components.Flex, typeof __VLS_components.Flex, ] } */
        // @ts-ignore
        const __VLS_168 = __VLS_asFunctionalComponent(__VLS_167, new __VLS_167({ vertical: (true), align: ("center"), gap: ("small"), ...{ style: (({ marginBlock: __VLS_ctx.token.paddingLG })) }, }));
        const __VLS_169 = __VLS_168({ vertical: (true), align: ("center"), gap: ("small"), ...{ style: (({ marginBlock: __VLS_ctx.token.paddingLG })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_168));
        const __VLS_173 = __VLS_resolvedLocalAndGlobalComponents.CloudUploadOutlined;
        /** @type { [typeof __VLS_components.CloudUploadOutlined, ] } */
        // @ts-ignore
        const __VLS_174 = __VLS_asFunctionalComponent(__VLS_173, new __VLS_173({ ...{ style: ({}) }, }));
        const __VLS_175 = __VLS_174({ ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_174));
        const __VLS_179 = ((__VLS_ctx.Typography.Title), (__VLS_ctx.Typography.Title));
        // @ts-ignore
        const __VLS_180 = __VLS_asFunctionalComponent(__VLS_179, new __VLS_179({ level: ((5)), ...{ style: ({}) }, }));
        const __VLS_181 = __VLS_180({ level: ((5)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_180));
        __VLS_nonNullable(__VLS_184.slots).default;
        var __VLS_184;
        const __VLS_185 = ((__VLS_ctx.Typography.Text), (__VLS_ctx.Typography.Text));
        // @ts-ignore
        const __VLS_186 = __VLS_asFunctionalComponent(__VLS_185, new __VLS_185({ type: ("secondary"), }));
        const __VLS_187 = __VLS_186({ type: ("secondary"), }, ...__VLS_functionalComponentArgsRest(__VLS_186));
        __VLS_nonNullable(__VLS_190.slots).default;
        var __VLS_190;
        const __VLS_191 = __VLS_resolvedLocalAndGlobalComponents.Button;
        /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
        // @ts-ignore
        const __VLS_192 = __VLS_asFunctionalComponent(__VLS_191, new __VLS_191({ ...{ 'onClick': {} }, }));
        const __VLS_193 = __VLS_192({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_192));
        let __VLS_197;
        const __VLS_198 = {
            onClick: (__VLS_ctx.selectFileClick)
        };
        let __VLS_194;
        let __VLS_195;
        __VLS_nonNullable(__VLS_196.slots).default;
        var __VLS_196;
        __VLS_nonNullable(__VLS_172.slots).default;
        var __VLS_172;
        __VLS_nonNullable(__VLS_164.slots).default;
        var __VLS_164;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { prefix: __VLS_thisSlot } = __VLS_nonNullable(__VLS_156.slots);
        const __VLS_199 = __VLS_resolvedLocalAndGlobalComponents.Button;
        /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
        // @ts-ignore
        const __VLS_200 = __VLS_asFunctionalComponent(__VLS_199, new __VLS_199({ ...{ 'onClick': {} }, type: ("text"), }));
        const __VLS_201 = __VLS_200({ ...{ 'onClick': {} }, type: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_200));
        let __VLS_205;
        const __VLS_206 = {
            onClick: (__VLS_ctx.triggerOpen)
        };
        let __VLS_202;
        let __VLS_203;
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { icon: __VLS_thisSlot } = __VLS_nonNullable(__VLS_204.slots);
            const __VLS_207 = __VLS_resolvedLocalAndGlobalComponents.LinkOutlined;
            /** @type { [typeof __VLS_components.LinkOutlined, ] } */
            // @ts-ignore
            const __VLS_208 = __VLS_asFunctionalComponent(__VLS_207, new __VLS_207({}));
            const __VLS_209 = __VLS_208({}, ...__VLS_functionalComponentArgsRest(__VLS_208));
        }
        var __VLS_204;
    }
    var __VLS_156;
    __VLS_nonNullable(__VLS_150.slots).default;
    var __VLS_150;
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    const __VLS_213 = __VLS_resolvedLocalAndGlobalComponents.ContextHolder;
    /** @type { [typeof __VLS_components.ContextHolder, typeof __VLS_components.contextHolder, ] } */
    // @ts-ignore
    const __VLS_214 = __VLS_asFunctionalComponent(__VLS_213, new __VLS_213({}));
    const __VLS_215 = __VLS_214({}, ...__VLS_functionalComponentArgsRest(__VLS_214));
    const __VLS_219 = __VLS_resolvedLocalAndGlobalComponents.Flex;
    /** @type { [typeof __VLS_components.Flex, typeof __VLS_components.Flex, ] } */
    // @ts-ignore
    const __VLS_220 = __VLS_asFunctionalComponent(__VLS_219, new __VLS_219({ vertical: (true), gap: ("middle"), align: ("flex-start"), }));
    const __VLS_221 = __VLS_220({ vertical: (true), gap: ("middle"), align: ("flex-start"), }, ...__VLS_functionalComponentArgsRest(__VLS_220));
    const __VLS_225 = __VLS_resolvedLocalAndGlobalComponents.Switch;
    /** @type { [typeof __VLS_components.Switch, ] } */
    // @ts-ignore
    const __VLS_226 = __VLS_asFunctionalComponent(__VLS_225, new __VLS_225({ ...{ 'onChange': {} }, checked: ((__VLS_ctx.hasRef)), unCheckedChildren: ("With Reference"), checkedChildren: ("With Reference"), }));
    const __VLS_227 = __VLS_226({ ...{ 'onChange': {} }, checked: ((__VLS_ctx.hasRef)), unCheckedChildren: ("With Reference"), checkedChildren: ("With Reference"), }, ...__VLS_functionalComponentArgsRest(__VLS_226));
    let __VLS_231;
    const __VLS_232 = {
        onChange: (__VLS_ctx.toggleChecked)
    };
    let __VLS_228;
    let __VLS_229;
    var __VLS_230;
    const __VLS_233 = __VLS_resolvedLocalAndGlobalComponents.Sender;
    /** @type { [typeof __VLS_components.Sender, typeof __VLS_components.Sender, ] } */
    // @ts-ignore
    const __VLS_234 = __VLS_asFunctionalComponent(__VLS_233, new __VLS_233({ onSubmit: ((() => {
            __VLS_ctx.messageApi.success('Send message successfully!');
        })), }));
    const __VLS_235 = __VLS_234({ onSubmit: ((() => {
            __VLS_ctx.messageApi.success('Send message successfully!');
        })), }, ...__VLS_functionalComponentArgsRest(__VLS_234));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_238.slots);
        const __VLS_239 = ((__VLS_ctx.Sender.Header));
        // @ts-ignore
        const __VLS_240 = __VLS_asFunctionalComponent(__VLS_239, new __VLS_239({ open: ((__VLS_ctx.hasRef)), title: ((__VLS_ctx.headerTitle)), onOpenChange: ((__VLS_ctx.openChange1)), }));
        const __VLS_241 = __VLS_240({ open: ((__VLS_ctx.hasRef)), title: ((__VLS_ctx.headerTitle)), onOpenChange: ((__VLS_ctx.openChange1)), }, ...__VLS_functionalComponentArgsRest(__VLS_240));
    }
    var __VLS_238;
    __VLS_nonNullable(__VLS_224.slots).default;
    var __VLS_224;
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    // @ts-ignore
    [SenderTsx,];
    // @ts-ignore
    const __VLS_245 = __VLS_asFunctionalComponent(SenderTsx, new SenderTsx({}));
    const __VLS_246 = __VLS_245({}, ...__VLS_functionalComponentArgsRest(__VLS_245));
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    const __VLS_250 = __VLS_resolvedLocalAndGlobalComponents.contextHolder;
    /** @type { [typeof __VLS_components.ContextHolder, typeof __VLS_components.contextHolder, ] } */
    // @ts-ignore
    const __VLS_251 = __VLS_asFunctionalComponent(__VLS_250, new __VLS_250({}));
    const __VLS_252 = __VLS_251({}, ...__VLS_functionalComponentArgsRest(__VLS_251));
    const __VLS_256 = __VLS_resolvedLocalAndGlobalComponents.Flex;
    /** @type { [typeof __VLS_components.Flex, typeof __VLS_components.Flex, ] } */
    // @ts-ignore
    const __VLS_257 = __VLS_asFunctionalComponent(__VLS_256, new __VLS_256({ vertical: (true), gap: ("middle"), }));
    const __VLS_258 = __VLS_257({ vertical: (true), gap: ("middle"), }, ...__VLS_functionalComponentArgsRest(__VLS_257));
    const __VLS_262 = __VLS_resolvedLocalAndGlobalComponents.Sender;
    /** @type { [typeof __VLS_components.Sender, typeof __VLS_components.Sender, ] } */
    // @ts-ignore
    const __VLS_263 = __VLS_asFunctionalComponent(__VLS_262, new __VLS_262({ ...{ 'onSubmit': {} }, ...{ 'onCancel': {} }, value: ((__VLS_ctx.value)), loading: ((__VLS_ctx.loading)), placeholder: ("Change button border radius"), }));
    const __VLS_264 = __VLS_263({ ...{ 'onSubmit': {} }, ...{ 'onCancel': {} }, value: ((__VLS_ctx.value)), loading: ((__VLS_ctx.loading)), placeholder: ("Change button border radius"), }, ...__VLS_functionalComponentArgsRest(__VLS_263));
    let __VLS_268;
    const __VLS_269 = {
        onSubmit: ((msg) => {
            __VLS_ctx.messageApi.success(`Send: ${msg}`);
            __VLS_ctx.value = '';
            __VLS_ctx.loading = true;
        })
    };
    const __VLS_270 = {
        onCancel: (() => {
            __VLS_ctx.loading = false;
        })
    };
    let __VLS_265;
    let __VLS_266;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { actions: __VLS_thisSlot } = __VLS_nonNullable(__VLS_267.slots);
        const { info: { components: { SendButton, LoadingButton } } } = __VLS_getSlotParam(__VLS_thisSlot);
        if (__VLS_ctx.loading) {
            const __VLS_271 = __VLS_resolvedLocalAndGlobalComponents.Tooltip;
            /** @type { [typeof __VLS_components.Tooltip, typeof __VLS_components.Tooltip, ] } */
            // @ts-ignore
            const __VLS_272 = __VLS_asFunctionalComponent(__VLS_271, new __VLS_271({ title: ("Click to cancel"), }));
            const __VLS_273 = __VLS_272({ title: ("Click to cancel"), }, ...__VLS_functionalComponentArgsRest(__VLS_272));
            const __VLS_277 = ((LoadingButton));
            // @ts-ignore
            const __VLS_278 = __VLS_asFunctionalComponent(__VLS_277, new __VLS_277({}));
            const __VLS_279 = __VLS_278({}, ...__VLS_functionalComponentArgsRest(__VLS_278));
            __VLS_nonNullable(__VLS_276.slots).default;
            var __VLS_276;
        }
        else {
            const __VLS_283 = __VLS_resolvedLocalAndGlobalComponents.Tooltip;
            /** @type { [typeof __VLS_components.Tooltip, typeof __VLS_components.Tooltip, ] } */
            // @ts-ignore
            const __VLS_284 = __VLS_asFunctionalComponent(__VLS_283, new __VLS_283({ title: ((__VLS_ctx.value ? 'Send \u21B5' : 'Please type something')), }));
            const __VLS_285 = __VLS_284({ title: ((__VLS_ctx.value ? 'Send \u21B5' : 'Please type something')), }, ...__VLS_functionalComponentArgsRest(__VLS_284));
            const __VLS_289 = ((SendButton));
            // @ts-ignore
            const __VLS_290 = __VLS_asFunctionalComponent(__VLS_289, new __VLS_289({ shape: ("default"), ...{ style: (({ borderRadius: '12px' })) }, }));
            const __VLS_291 = __VLS_290({ shape: ("default"), ...{ style: (({ borderRadius: '12px' })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_290));
            __VLS_nonNullable(__VLS_288.slots).default;
            var __VLS_288;
        }
    }
    var __VLS_267;
    const __VLS_295 = __VLS_resolvedLocalAndGlobalComponents.Sender;
    /** @type { [typeof __VLS_components.Sender, typeof __VLS_components.Sender, ] } */
    // @ts-ignore
    const __VLS_296 = __VLS_asFunctionalComponent(__VLS_295, new __VLS_295({ ...{ 'onSubmit': {} }, ...{ 'onCancel': {} }, value: ((__VLS_ctx.value)), loading: ((__VLS_ctx.loading)), placeholder: ("Change button icon"), }));
    const __VLS_297 = __VLS_296({ ...{ 'onSubmit': {} }, ...{ 'onCancel': {} }, value: ((__VLS_ctx.value)), loading: ((__VLS_ctx.loading)), placeholder: ("Change button icon"), }, ...__VLS_functionalComponentArgsRest(__VLS_296));
    let __VLS_301;
    const __VLS_302 = {
        onSubmit: ((msg) => {
            __VLS_ctx.messageApi.success(`Send: ${msg}`);
            __VLS_ctx.value = '';
            __VLS_ctx.loading = true;
        })
    };
    const __VLS_303 = {
        onCancel: (() => {
            __VLS_ctx.loading = false;
        })
    };
    let __VLS_298;
    let __VLS_299;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { actions: __VLS_thisSlot } = __VLS_nonNullable(__VLS_300.slots);
        const { info: { components: { SendButton, LoadingButton } } } = __VLS_getSlotParam(__VLS_thisSlot);
        if (__VLS_ctx.loading) {
            const __VLS_304 = __VLS_resolvedLocalAndGlobalComponents.Tooltip;
            /** @type { [typeof __VLS_components.Tooltip, typeof __VLS_components.Tooltip, ] } */
            // @ts-ignore
            const __VLS_305 = __VLS_asFunctionalComponent(__VLS_304, new __VLS_304({ title: ("Click to cancel"), }));
            const __VLS_306 = __VLS_305({ title: ("Click to cancel"), }, ...__VLS_functionalComponentArgsRest(__VLS_305));
            const __VLS_310 = ((LoadingButton));
            // @ts-ignore
            const __VLS_311 = __VLS_asFunctionalComponent(__VLS_310, new __VLS_310({}));
            const __VLS_312 = __VLS_311({}, ...__VLS_functionalComponentArgsRest(__VLS_311));
            __VLS_nonNullable(__VLS_309.slots).default;
            var __VLS_309;
        }
        else {
            const __VLS_316 = __VLS_resolvedLocalAndGlobalComponents.Tooltip;
            /** @type { [typeof __VLS_components.Tooltip, typeof __VLS_components.Tooltip, ] } */
            // @ts-ignore
            const __VLS_317 = __VLS_asFunctionalComponent(__VLS_316, new __VLS_316({ title: ((__VLS_ctx.value ? 'Send \u21B5' : 'Please type something')), }));
            const __VLS_318 = __VLS_317({ title: ((__VLS_ctx.value ? 'Send \u21B5' : 'Please type something')), }, ...__VLS_functionalComponentArgsRest(__VLS_317));
            const __VLS_322 = ((SendButton));
            // @ts-ignore
            const __VLS_323 = __VLS_asFunctionalComponent(__VLS_322, new __VLS_322({ type: ("text"), shape: ("default"), icon: ((__VLS_ctx.h(__VLS_ctx.SendOutlined))), ...{ style: (({ color: __VLS_ctx.token.colorPrimary })) }, }));
            const __VLS_324 = __VLS_323({ type: ("text"), shape: ("default"), icon: ((__VLS_ctx.h(__VLS_ctx.SendOutlined))), ...{ style: (({ color: __VLS_ctx.token.colorPrimary })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_323));
            __VLS_nonNullable(__VLS_321.slots).default;
            var __VLS_321;
        }
    }
    var __VLS_300;
    const __VLS_328 = __VLS_resolvedLocalAndGlobalComponents.Sender;
    /** @type { [typeof __VLS_components.Sender, typeof __VLS_components.Sender, ] } */
    // @ts-ignore
    const __VLS_329 = __VLS_asFunctionalComponent(__VLS_328, new __VLS_328({ ...{ 'onSubmit': {} }, ...{ 'onCancel': {} }, value: ((__VLS_ctx.value)), loading: ((__VLS_ctx.loading)), placeholder: ("Loading not change button"), }));
    const __VLS_330 = __VLS_329({ ...{ 'onSubmit': {} }, ...{ 'onCancel': {} }, value: ((__VLS_ctx.value)), loading: ((__VLS_ctx.loading)), placeholder: ("Loading not change button"), }, ...__VLS_functionalComponentArgsRest(__VLS_329));
    let __VLS_334;
    const __VLS_335 = {
        onSubmit: ((msg) => {
            __VLS_ctx.messageApi.success(`Send: ${msg}`);
            __VLS_ctx.value = '';
            __VLS_ctx.loading = true;
        })
    };
    const __VLS_336 = {
        onCancel: (() => {
            __VLS_ctx.loading = false;
        })
    };
    let __VLS_331;
    let __VLS_332;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { actions: __VLS_thisSlot } = __VLS_nonNullable(__VLS_333.slots);
        const { info: { components: { SendButton } } } = __VLS_getSlotParam(__VLS_thisSlot);
        const __VLS_337 = ((SendButton));
        // @ts-ignore
        const __VLS_338 = __VLS_asFunctionalComponent(__VLS_337, new __VLS_337({}));
        const __VLS_339 = __VLS_338({}, ...__VLS_functionalComponentArgsRest(__VLS_338));
    }
    var __VLS_333;
    __VLS_nonNullable(__VLS_261.slots).default;
    var __VLS_261;
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    const __VLS_343 = __VLS_resolvedLocalAndGlobalComponents.Flex;
    /** @type { [typeof __VLS_components.Flex, typeof __VLS_components.Flex, ] } */
    // @ts-ignore
    const __VLS_344 = __VLS_asFunctionalComponent(__VLS_343, new __VLS_343({ ...{ style: (({ height: '220px' })) }, align: ("end"), }));
    const __VLS_345 = __VLS_344({ ...{ style: (({ height: '220px' })) }, align: ("end"), }, ...__VLS_functionalComponentArgsRest(__VLS_344));
    const __VLS_349 = __VLS_resolvedLocalAndGlobalComponents.Sender;
    /** @type { [typeof __VLS_components.Sender, typeof __VLS_components.Sender, ] } */
    // @ts-ignore
    const __VLS_350 = __VLS_asFunctionalComponent(__VLS_349, new __VLS_349({ ref: ("senderRef"), value: ((__VLS_ctx.text)), onChange: ((v => __VLS_ctx.text = v)), onSubmit: ((__VLS_ctx.submit)), onPasteFile: ((__VLS_ctx.pastFile)), }));
    const __VLS_351 = __VLS_350({ ref: ("senderRef"), value: ((__VLS_ctx.text)), onChange: ((v => __VLS_ctx.text = v)), onSubmit: ((__VLS_ctx.submit)), onPasteFile: ((__VLS_ctx.pastFile)), }, ...__VLS_functionalComponentArgsRest(__VLS_350));
    // @ts-ignore navigation for `const senderRef = ref()`
    __VLS_ctx.senderRef;
    var __VLS_355 = {};
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { prefix: __VLS_thisSlot } = __VLS_nonNullable(__VLS_354.slots);
        const __VLS_356 = __VLS_resolvedLocalAndGlobalComponents.Button;
        /** @type { [typeof __VLS_components.Button, ] } */
        // @ts-ignore
        const __VLS_357 = __VLS_asFunctionalComponent(__VLS_356, new __VLS_356({ ...{ 'onClick': {} }, type: ("text"), icon: ((__VLS_ctx.h(__VLS_ctx.LinkOutlined))), }));
        const __VLS_358 = __VLS_357({ ...{ 'onClick': {} }, type: ("text"), icon: ((__VLS_ctx.h(__VLS_ctx.LinkOutlined))), }, ...__VLS_functionalComponentArgsRest(__VLS_357));
        let __VLS_362;
        const __VLS_363 = {
            onClick: (() => {
                __VLS_ctx.open = !__VLS_ctx.open;
            })
        };
        let __VLS_359;
        let __VLS_360;
        var __VLS_361;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_354.slots);
        const __VLS_364 = ((__VLS_ctx.Sender.Header), (__VLS_ctx.Sender.Header));
        // @ts-ignore
        const __VLS_365 = __VLS_asFunctionalComponent(__VLS_364, new __VLS_364({ title: ("Attachments"), styles: (({
                content: {
                    padding: 0,
                },
            })), open: ((__VLS_ctx.open)), onOpenChange: ((v => __VLS_ctx.open = v)), forceRender: (true), }));
        const __VLS_366 = __VLS_365({ title: ("Attachments"), styles: (({
                content: {
                    padding: 0,
                },
            })), open: ((__VLS_ctx.open)), onOpenChange: ((v => __VLS_ctx.open = v)), forceRender: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_365));
        const __VLS_370 = __VLS_resolvedLocalAndGlobalComponents.Attachments;
        /** @type { [typeof __VLS_components.Attachments, ] } */
        // @ts-ignore
        const __VLS_371 = __VLS_asFunctionalComponent(__VLS_370, new __VLS_370({ ref: ("attachmentsRef"), beforeUpload: ((() => false)), items: ((__VLS_ctx.items)), onChange: ((__VLS_ctx.fileChange)), placeholder: ((__VLS_ctx.placeholder)), getDropContainer: ((__VLS_ctx.getDropContainer)), }));
        const __VLS_372 = __VLS_371({ ref: ("attachmentsRef"), beforeUpload: ((() => false)), items: ((__VLS_ctx.items)), onChange: ((__VLS_ctx.fileChange)), placeholder: ((__VLS_ctx.placeholder)), getDropContainer: ((__VLS_ctx.getDropContainer)), }, ...__VLS_functionalComponentArgsRest(__VLS_371));
        // @ts-ignore navigation for `const attachmentsRef = ref()`
        __VLS_ctx.attachmentsRef;
        var __VLS_376 = {};
        var __VLS_375;
        __VLS_nonNullable(__VLS_369.slots).default;
        var __VLS_369;
    }
    var __VLS_354;
    __VLS_nonNullable(__VLS_348.slots).default;
    var __VLS_348;
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    const __VLS_377 = __VLS_resolvedLocalAndGlobalComponents.Flex;
    /** @type { [typeof __VLS_components.Flex, typeof __VLS_components.Flex, ] } */
    // @ts-ignore
    const __VLS_378 = __VLS_asFunctionalComponent(__VLS_377, new __VLS_377({ wrap: ("wrap"), gap: ((12)), }));
    const __VLS_379 = __VLS_378({ wrap: ("wrap"), gap: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_378));
    const __VLS_383 = __VLS_resolvedLocalAndGlobalComponents.Button;
    /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
    // @ts-ignore
    const __VLS_384 = __VLS_asFunctionalComponent(__VLS_383, new __VLS_383({ ...{ 'onClick': {} }, }));
    const __VLS_385 = __VLS_384({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_384));
    let __VLS_389;
    const __VLS_390 = {
        onClick: (__VLS_ctx.focusStart)
    };
    let __VLS_386;
    let __VLS_387;
    __VLS_nonNullable(__VLS_388.slots).default;
    var __VLS_388;
    const __VLS_391 = __VLS_resolvedLocalAndGlobalComponents.Button;
    /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
    // @ts-ignore
    const __VLS_392 = __VLS_asFunctionalComponent(__VLS_391, new __VLS_391({ ...{ 'onClick': {} }, }));
    const __VLS_393 = __VLS_392({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_392));
    let __VLS_397;
    const __VLS_398 = {
        onClick: (__VLS_ctx.focusEnd)
    };
    let __VLS_394;
    let __VLS_395;
    __VLS_nonNullable(__VLS_396.slots).default;
    var __VLS_396;
    const __VLS_399 = __VLS_resolvedLocalAndGlobalComponents.Button;
    /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
    // @ts-ignore
    const __VLS_400 = __VLS_asFunctionalComponent(__VLS_399, new __VLS_399({ ...{ 'onClick': {} }, }));
    const __VLS_401 = __VLS_400({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_400));
    let __VLS_405;
    const __VLS_406 = {
        onClick: (__VLS_ctx.focusAll)
    };
    let __VLS_402;
    let __VLS_403;
    __VLS_nonNullable(__VLS_404.slots).default;
    var __VLS_404;
    const __VLS_407 = __VLS_resolvedLocalAndGlobalComponents.Button;
    /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
    // @ts-ignore
    const __VLS_408 = __VLS_asFunctionalComponent(__VLS_407, new __VLS_407({ ...{ 'onClick': {} }, }));
    const __VLS_409 = __VLS_408({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_408));
    let __VLS_413;
    const __VLS_414 = {
        onClick: (__VLS_ctx.focusPreventScroll)
    };
    let __VLS_410;
    let __VLS_411;
    __VLS_nonNullable(__VLS_412.slots).default;
    var __VLS_412;
    const __VLS_415 = __VLS_resolvedLocalAndGlobalComponents.Button;
    /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
    // @ts-ignore
    const __VLS_416 = __VLS_asFunctionalComponent(__VLS_415, new __VLS_415({ ...{ 'onClick': {} }, }));
    const __VLS_417 = __VLS_416({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_416));
    let __VLS_421;
    const __VLS_422 = {
        onClick: (__VLS_ctx.blur)
    };
    let __VLS_418;
    let __VLS_419;
    __VLS_nonNullable(__VLS_420.slots).default;
    var __VLS_420;
    const __VLS_423 = __VLS_resolvedLocalAndGlobalComponents.Sender;
    /** @type { [typeof __VLS_components.Sender, ] } */
    // @ts-ignore
    const __VLS_424 = __VLS_asFunctionalComponent(__VLS_423, new __VLS_423({ ref: ("senderRef1"), defaultValue: ("Hello, welcome to use Ant Design X!"), }));
    const __VLS_425 = __VLS_424({ ref: ("senderRef1"), defaultValue: ("Hello, welcome to use Ant Design X!"), }, ...__VLS_functionalComponentArgsRest(__VLS_424));
    // @ts-ignore navigation for `const senderRef1 = ref()`
    __VLS_ctx.senderRef1;
    var __VLS_429 = {};
    var __VLS_428;
    __VLS_nonNullable(__VLS_382.slots).default;
    var __VLS_382;
    __VLS_styleScopedClasses['sender-demo'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "senderRef": __VLS_355,
        "attachmentsRef": __VLS_376,
        "senderRef1": __VLS_429,
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
            Switch: Switch,
            Flex: Flex,
            Space: Space,
            Spin: Spin,
            Typography: Typography,
            Button: Button,
            Sender: Sender,
            Attachments: Attachments,
            h: h,
            SoundOutlined: SoundOutlined,
            EllipsisOutlined: EllipsisOutlined,
            CloudUploadOutlined: CloudUploadOutlined,
            LinkOutlined: LinkOutlined,
            SendOutlined: SendOutlined,
            SenderTsx: SenderTsx,
            messageApi: messageApi,
            contextHolder: contextHolder,
            value: value,
            loading: loading,
            submit: submit,
            speechConfig: speechConfig,
            value1: value1,
            loading1: loading1,
            open: open,
            token: token,
            openChange: openChange,
            triggerOpen: triggerOpen,
            senderSubmit: senderSubmit,
            selectFileClick: selectFileClick,
            hasRef: hasRef,
            toggleChecked: toggleChecked,
            openChange1: openChange1,
            headerTitle: headerTitle,
            items: items,
            text: text,
            attachmentsRef: attachmentsRef,
            senderRef: senderRef,
            placeholder: placeholder,
            getDropContainer: getDropContainer,
            pastFile: pastFile,
            fileChange: fileChange,
            senderRef1: senderRef1,
            focusStart: focusStart,
            focusEnd: focusEnd,
            focusAll: focusAll,
            focusPreventScroll: focusPreventScroll,
            blur: blur,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
