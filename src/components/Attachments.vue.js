import { CloudUploadOutlined, LinkOutlined } from '@ant-design/icons-vue';
import { message, Button, Flex, Switch, Result, theme, Typography, Segmented } from 'ant-design-vue';
import { Attachments, Sender } from 'ant-design-x-vue';
import { computed, h, ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const fullScreenDrop = ref(false);
const customContent = ref(true);
const divRef = ref();
const [messageApi, contextHolder] = message.useMessage();
const handleChange = ({ file }) => {
    messageApi.info(`Mock upload: ${file.name}`);
};
const getDropContainer = () => (fullScreenDrop.value ? document.body : divRef.value);
const attachmentsNode = computed(() => h(Attachments, {
    beforeUpload: () => false,
    onChange: handleChange,
    placeholder: {
        icon: h(CloudUploadOutlined),
        title: 'Drag & Drop files here',
        description: 'Support file type: image, video, audio, document, etc.',
    },
    children: customContent.value && h(Button, { type: 'text', icon: h(LinkOutlined) }),
    getDropContainer,
}));
const presetFiles = [
    {
        uid: '1',
        name: 'uploading file.xlsx',
        status: 'uploading',
        url: 'http://www.baidu.com/xxx.png',
        percent: 93,
    },
    {
        uid: '2',
        name: 'uploaded file.docx',
        status: 'done',
        size: 123456,
        description: 'Customize description',
        url: 'http://www.baidu.com/yyy.png',
    },
    {
        uid: '3',
        name: 'upload error with long text file name.zip',
        status: 'error',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/zzz.png',
    },
    {
        uid: '4',
        name: 'image uploading preview.png',
        status: 'uploading',
        percent: 33,
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        uid: '5',
        name: 'image done preview.png',
        status: 'done',
        size: 123456,
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        uid: '6',
        name: 'image error preview.png',
        status: 'error',
        response: 'Server Error 500', // custom error message to show
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
];
const { token } = theme.useToken();
const items1 = ref([]);
const sharedBorderStyle = computed(() => ({
    borderRadius: token.value.borderRadius,
    overflow: 'hidden',
    background: token.value.colorBgContainer,
}));
const sharedAttachmentProps = computed(() => ({
    beforeUpload: () => false,
    items: items1.value,
    onChange: ({ fileList }) => {
        console.log('onChange:', fileList);
        items.value = fileList;
    },
}));
const fillFiles = () => {
    items1.value = presetFiles;
};
const resetFiles = () => {
    items1.value = [];
};
const presetFiles1 = Array.from({ length: 30 }).map((_, index) => ({
    uid: String(index),
    name: `file-${index}.jpg`,
    status: 'done',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}));
const overflow = ref('wrap');
const items = ref(presetFiles1);
const disabled = ref(false);
// 使用计算属性来处理 items.length !== 0
const hasItems = computed({
    get: () => items.value.length !== 0,
    set: (value) => {
        items.value = value ? presetFiles1 : [];
    }
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("attachments-demo") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("demo-section") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.contextHolder;
    /** @type { [typeof __VLS_components.ContextHolder, typeof __VLS_components.contextHolder, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("divRef"), });
    // @ts-ignore navigation for `const divRef = ref()`
    __VLS_ctx.divRef;
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.Flex;
    /** @type { [typeof __VLS_components.Flex, typeof __VLS_components.Flex, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ vertical: (true), gap: ("middle"), align: ("flex-start"), }));
    const __VLS_8 = __VLS_7({ vertical: (true), gap: ("middle"), align: ("flex-start"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.Sender;
    /** @type { [typeof __VLS_components.Sender, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ prefix: ((__VLS_ctx.attachmentsNode)), }));
    const __VLS_14 = __VLS_13({ prefix: ((__VLS_ctx.attachmentsNode)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.Switch;
    /** @type { [typeof __VLS_components.Switch, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ checked: ((__VLS_ctx.fullScreenDrop)), checkedChildren: ("Full screen drop"), unCheckedChildren: ("Full screen drop"), }));
    const __VLS_20 = __VLS_19({ checked: ((__VLS_ctx.fullScreenDrop)), checkedChildren: ("Full screen drop"), unCheckedChildren: ("Full screen drop"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.Switch;
    /** @type { [typeof __VLS_components.Switch, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ checked: ((__VLS_ctx.customContent)), checkedChildren: ("use default content"), unCheckedChildren: ("custom content"), }));
    const __VLS_26 = __VLS_25({ checked: ((__VLS_ctx.customContent)), checkedChildren: ("use default content"), unCheckedChildren: ("custom content"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("demo-section") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.Flex;
    /** @type { [typeof __VLS_components.Flex, typeof __VLS_components.Flex, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ vertical: (true), gap: ("middle"), ...{ style: (({
                padding: __VLS_ctx.token.padding,
                background: __VLS_ctx.token.colorBgContainerDisabled,
            })) }, }));
    const __VLS_32 = __VLS_31({ vertical: (true), gap: ("middle"), ...{ style: (({
                padding: __VLS_ctx.token.padding,
                background: __VLS_ctx.token.colorBgContainerDisabled,
            })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ((__VLS_ctx.sharedBorderStyle)) }, });
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.Attachments;
    /** @type { [typeof __VLS_components.Attachments, typeof __VLS_components.Attachments, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...(__VLS_ctx.sharedAttachmentProps), }));
    const __VLS_38 = __VLS_37({ ...(__VLS_ctx.sharedAttachmentProps), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { placeholder: __VLS_thisSlot } = __VLS_nonNullable(__VLS_41.slots);
        const [{ type }] = __VLS_getSlotParams(__VLS_thisSlot);
        if (type === 'inline') {
            const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.Flex;
            /** @type { [typeof __VLS_components.Flex, typeof __VLS_components.Flex, ] } */
            // @ts-ignore
            const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ align: ("center"), justify: ("center"), vertical: (true), gap: ("2"), }));
            const __VLS_44 = __VLS_43({ align: ("center"), justify: ("center"), vertical: (true), gap: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
            const __VLS_48 = ((__VLS_ctx.Typography.Text), (__VLS_ctx.Typography.Text));
            // @ts-ignore
            const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ style: ({}) }, }));
            const __VLS_50 = __VLS_49({ ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_49));
            const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.CloudUploadOutlined;
            /** @type { [typeof __VLS_components.CloudUploadOutlined, ] } */
            // @ts-ignore
            const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({}));
            const __VLS_56 = __VLS_55({}, ...__VLS_functionalComponentArgsRest(__VLS_55));
            __VLS_nonNullable(__VLS_53.slots).default;
            var __VLS_53;
            const __VLS_60 = ((__VLS_ctx.Typography.Title), (__VLS_ctx.Typography.Title));
            // @ts-ignore
            const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ level: ((5)), ...{ style: ({}) }, }));
            const __VLS_62 = __VLS_61({ level: ((5)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_61));
            __VLS_nonNullable(__VLS_65.slots).default;
            var __VLS_65;
            const __VLS_66 = ((__VLS_ctx.Typography.Text), (__VLS_ctx.Typography.Text));
            // @ts-ignore
            const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ type: ("secondary"), }));
            const __VLS_68 = __VLS_67({ type: ("secondary"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
            __VLS_nonNullable(__VLS_71.slots).default;
            var __VLS_71;
            __VLS_nonNullable(__VLS_47.slots).default;
            var __VLS_47;
        }
        if (type === 'drop') {
            const __VLS_72 = ((__VLS_ctx.Typography.Text), (__VLS_ctx.Typography.Text));
            // @ts-ignore
            const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({}));
            const __VLS_74 = __VLS_73({}, ...__VLS_functionalComponentArgsRest(__VLS_73));
            __VLS_nonNullable(__VLS_77.slots).default;
            var __VLS_77;
        }
    }
    var __VLS_41;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ((__VLS_ctx.sharedBorderStyle)) }, });
    const __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.Attachments;
    /** @type { [typeof __VLS_components.Attachments, typeof __VLS_components.Attachments, ] } */
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ ...(__VLS_ctx.sharedAttachmentProps), }));
    const __VLS_80 = __VLS_79({ ...(__VLS_ctx.sharedAttachmentProps), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { placeholder: __VLS_thisSlot } = __VLS_nonNullable(__VLS_83.slots);
        const [{ type }] = __VLS_getSlotParams(__VLS_thisSlot);
        if (type === 'inline') {
            const __VLS_84 = __VLS_resolvedLocalAndGlobalComponents.Result;
            /** @type { [typeof __VLS_components.Result, typeof __VLS_components.Result, ] } */
            // @ts-ignore
            const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ title: ("Custom Placeholder Node"), ...{ style: (({ padding: 0 })) }, }));
            const __VLS_86 = __VLS_85({ title: ("Custom Placeholder Node"), ...{ style: (({ padding: 0 })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_85));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { icon: __VLS_thisSlot } = __VLS_nonNullable(__VLS_89.slots);
                const __VLS_90 = __VLS_resolvedLocalAndGlobalComponents.CloudUploadOutlined;
                /** @type { [typeof __VLS_components.CloudUploadOutlined, ] } */
                // @ts-ignore
                const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({}));
                const __VLS_92 = __VLS_91({}, ...__VLS_functionalComponentArgsRest(__VLS_91));
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { extra: __VLS_thisSlot } = __VLS_nonNullable(__VLS_89.slots);
                const __VLS_96 = __VLS_resolvedLocalAndGlobalComponents.Button;
                /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
                // @ts-ignore
                const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ type: ("primary"), }));
                const __VLS_98 = __VLS_97({ type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_97));
                __VLS_nonNullable(__VLS_101.slots).default;
                var __VLS_101;
            }
            var __VLS_89;
        }
        if (type === 'drop') {
            const __VLS_102 = ((__VLS_ctx.Typography.Text), (__VLS_ctx.Typography.Text));
            // @ts-ignore
            const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({}));
            const __VLS_104 = __VLS_103({}, ...__VLS_functionalComponentArgsRest(__VLS_103));
            __VLS_nonNullable(__VLS_107.slots).default;
            var __VLS_107;
        }
    }
    var __VLS_83;
    const __VLS_108 = __VLS_resolvedLocalAndGlobalComponents.Flex;
    /** @type { [typeof __VLS_components.Flex, typeof __VLS_components.Flex, ] } */
    // @ts-ignore
    const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({ gap: ("middle"), }));
    const __VLS_110 = __VLS_109({ gap: ("middle"), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
    const __VLS_114 = __VLS_resolvedLocalAndGlobalComponents.Button;
    /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
    // @ts-ignore
    const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({ ...{ 'onClick': {} }, ...{ style: (({ flex: '1 1 50%' })) }, disabled: ((!!__VLS_ctx.items.length)), type: ("primary"), }));
    const __VLS_116 = __VLS_115({ ...{ 'onClick': {} }, ...{ style: (({ flex: '1 1 50%' })) }, disabled: ((!!__VLS_ctx.items.length)), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_115));
    let __VLS_120;
    const __VLS_121 = {
        onClick: (__VLS_ctx.fillFiles)
    };
    let __VLS_117;
    let __VLS_118;
    __VLS_nonNullable(__VLS_119.slots).default;
    var __VLS_119;
    const __VLS_122 = __VLS_resolvedLocalAndGlobalComponents.Button;
    /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
    // @ts-ignore
    const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({ ...{ 'onClick': {} }, ...{ style: (({ flex: '1 1 50%' })) }, disabled: ((!__VLS_ctx.items.length)), }));
    const __VLS_124 = __VLS_123({ ...{ 'onClick': {} }, ...{ style: (({ flex: '1 1 50%' })) }, disabled: ((!__VLS_ctx.items.length)), }, ...__VLS_functionalComponentArgsRest(__VLS_123));
    let __VLS_128;
    const __VLS_129 = {
        onClick: (__VLS_ctx.resetFiles)
    };
    let __VLS_125;
    let __VLS_126;
    __VLS_nonNullable(__VLS_127.slots).default;
    var __VLS_127;
    __VLS_nonNullable(__VLS_113.slots).default;
    var __VLS_113;
    __VLS_nonNullable(__VLS_35.slots).default;
    var __VLS_35;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("demo-section") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    const __VLS_130 = __VLS_resolvedLocalAndGlobalComponents.Flex;
    /** @type { [typeof __VLS_components.Flex, typeof __VLS_components.Flex, ] } */
    // @ts-ignore
    const __VLS_131 = __VLS_asFunctionalComponent(__VLS_130, new __VLS_130({ vertical: (true), gap: (('middle')), }));
    const __VLS_132 = __VLS_131({ vertical: (true), gap: (('middle')), }, ...__VLS_functionalComponentArgsRest(__VLS_131));
    const __VLS_136 = __VLS_resolvedLocalAndGlobalComponents.Flex;
    /** @type { [typeof __VLS_components.Flex, typeof __VLS_components.Flex, ] } */
    // @ts-ignore
    const __VLS_137 = __VLS_asFunctionalComponent(__VLS_136, new __VLS_136({ gap: (('middle')), align: (('center')), }));
    const __VLS_138 = __VLS_137({ gap: (('middle')), align: (('center')), }, ...__VLS_functionalComponentArgsRest(__VLS_137));
    const __VLS_142 = __VLS_resolvedLocalAndGlobalComponents.Segmented;
    /** @type { [typeof __VLS_components.Segmented, ] } */
    // @ts-ignore
    const __VLS_143 = __VLS_asFunctionalComponent(__VLS_142, new __VLS_142({ value: ((__VLS_ctx.overflow)), options: (([
            { value: 'wrap', label: 'Wrap' },
            { value: 'scrollX', label: 'Scroll X' },
            { value: 'scrollY', label: 'Scroll Y' },
        ])), ...{ style: ({}) }, }));
    const __VLS_144 = __VLS_143({ value: ((__VLS_ctx.overflow)), options: (([
            { value: 'wrap', label: 'Wrap' },
            { value: 'scrollX', label: 'Scroll X' },
            { value: 'scrollY', label: 'Scroll Y' },
        ])), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_143));
    const __VLS_148 = __VLS_resolvedLocalAndGlobalComponents.Switch;
    /** @type { [typeof __VLS_components.Switch, ] } */
    // @ts-ignore
    const __VLS_149 = __VLS_asFunctionalComponent(__VLS_148, new __VLS_148({ checked: ((__VLS_ctx.hasItems)), checkedChildren: ("Data"), unCheckedChildren: ("Data"), }));
    const __VLS_150 = __VLS_149({ checked: ((__VLS_ctx.hasItems)), checkedChildren: ("Data"), unCheckedChildren: ("Data"), }, ...__VLS_functionalComponentArgsRest(__VLS_149));
    const __VLS_154 = __VLS_resolvedLocalAndGlobalComponents.Switch;
    /** @type { [typeof __VLS_components.Switch, ] } */
    // @ts-ignore
    const __VLS_155 = __VLS_asFunctionalComponent(__VLS_154, new __VLS_154({ checked: ((__VLS_ctx.disabled)), checkedChildren: ("Disabled"), unCheckedChildren: ("Disabled"), }));
    const __VLS_156 = __VLS_155({ checked: ((__VLS_ctx.disabled)), checkedChildren: ("Disabled"), unCheckedChildren: ("Disabled"), }, ...__VLS_functionalComponentArgsRest(__VLS_155));
    __VLS_nonNullable(__VLS_141.slots).default;
    var __VLS_141;
    const __VLS_160 = __VLS_resolvedLocalAndGlobalComponents.Attachments;
    /** @type { [typeof __VLS_components.Attachments, ] } */
    // @ts-ignore
    const __VLS_161 = __VLS_asFunctionalComponent(__VLS_160, new __VLS_160({ ...{ 'onChange': {} }, overflow: ((__VLS_ctx.overflow)), items: ((__VLS_ctx.items)), beforeUpload: ((() => false)), placeholder: (({
            icon: __VLS_ctx.h(__VLS_ctx.CloudUploadOutlined),
            title: 'Click or Drop files here',
            description: 'Support file type: image, video, audio, document, etc.',
        })), disabled: ((__VLS_ctx.disabled)), }));
    const __VLS_162 = __VLS_161({ ...{ 'onChange': {} }, overflow: ((__VLS_ctx.overflow)), items: ((__VLS_ctx.items)), beforeUpload: ((() => false)), placeholder: (({
            icon: __VLS_ctx.h(__VLS_ctx.CloudUploadOutlined),
            title: 'Click or Drop files here',
            description: 'Support file type: image, video, audio, document, etc.',
        })), disabled: ((__VLS_ctx.disabled)), }, ...__VLS_functionalComponentArgsRest(__VLS_161));
    let __VLS_166;
    const __VLS_167 = {
        onChange: ((info) => __VLS_ctx.items = info.fileList)
    };
    let __VLS_163;
    let __VLS_164;
    var __VLS_165;
    __VLS_nonNullable(__VLS_135.slots).default;
    var __VLS_135;
    __VLS_styleScopedClasses['attachments-demo'];
    __VLS_styleScopedClasses['demo-section'];
    __VLS_styleScopedClasses['demo-section'];
    __VLS_styleScopedClasses['demo-section'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "divRef": __VLS_nativeElements['div'],
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
            CloudUploadOutlined: CloudUploadOutlined,
            Button: Button,
            Flex: Flex,
            Switch: Switch,
            Result: Result,
            Typography: Typography,
            Segmented: Segmented,
            Attachments: Attachments,
            Sender: Sender,
            h: h,
            fullScreenDrop: fullScreenDrop,
            customContent: customContent,
            divRef: divRef,
            contextHolder: contextHolder,
            attachmentsNode: attachmentsNode,
            token: token,
            sharedBorderStyle: sharedBorderStyle,
            sharedAttachmentProps: sharedAttachmentProps,
            fillFiles: fillFiles,
            resetFiles: resetFiles,
            overflow: overflow,
            items: items,
            disabled: disabled,
            hasItems: hasItems,
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
