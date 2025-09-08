import { RedditOutlined } from '@ant-design/icons-vue';
import { Sender, Suggestion } from 'ant-design-x-vue';
import { ref } from 'vue';
import { Select } from 'ant-design-vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const suggestions = [
    { label: 'Write a report', value: 'report' },
    { label: 'Draw a picture', value: 'draw' },
    {
        label: 'Check some knowledge',
        value: 'knowledge',
        icon: <RedditOutlined />,
        children: [
            {
                label: 'About React',
                value: 'react',
            },
            {
                label: 'About Ant Design',
                value: 'antd',
            },
        ],
    },
];
const Demo = () => {
    const value = ref('');
    const updateValue = (v) => {
        value.value = v;
    };
    return (<Suggestion items={suggestions} onSelect={(itemVal) => {
            updateValue(`[${itemVal}]:`);
        }} children={({ onTrigger, onKeyDown }) => {
            return (<Sender value={value.value} onChange={(nextVal) => {
                    if (nextVal === '/') {
                        onTrigger();
                    }
                    else if (!nextVal) {
                        onTrigger(false);
                    }
                    updateValue(nextVal);
                }} onKeyDown={onKeyDown} placeholder="输入 / 获取建议"/>);
        }}/>);
};
const Demo1 = () => {
    const value = ref('');
    const updateValue = (v) => {
        value.value = v;
    };
    return (<Suggestion block items={suggestions} onSelect={(itemVal) => {
            updateValue(`[${itemVal}]:`);
        }} children={({ onTrigger, onKeyDown }) => {
            return (<Sender value={value.value} onChange={(nextVal) => {
                    if (nextVal === '/') {
                        onTrigger();
                    }
                    else if (!nextVal) {
                        onTrigger(false);
                    }
                    updateValue(nextVal);
                }} onKeyDown={onKeyDown} placeholder="输入 / 获取建议"/>);
        }}/>);
};
const Demo2 = () => {
    const uuid = ref(0);
    const tags = ref([]);
    const value = ref('');
    return (<Suggestion items={(info) => [{ label: `Trigger by '${info}'`, value: String(info) }]} onSelect={(info) => {
            uuid.value += 1;
            tags.value = [...tags.value, `Cell_${uuid.value}`];
            value.value = value.value.replace(info, '');
        }} children={({ onTrigger, onKeyDown }) => {
            return (<Select value={tags.value} style={{ width: '100%' }} mode="tags" open={false} searchValue={value.value} onChange={(nextTags) => {
                    if (nextTags.length < tags.value.length) {
                        tags.value = nextTags;
                    }
                }} onSearch={(nextVal) => {
                    value.value = nextVal;
                }} onKeydown={(e) => {
                    if (e.key === '/' || e.key === '#') {
                        onTrigger(e.key);
                    }
                    onKeyDown(e);
                }} placeholder="可任意输入 / 与 # 多次获取建议"/>);
        }}/>);
};
defineRender(() => {
    return (<div>
      <p>基础用法，受控进行状态管理。自定义触发器。</p>
      <Demo />
      <p>整行宽度, 通过 block 改为整行展示，extra 可用于配置额外信息。</p>
      <Demo1 />
      <p>自定义, 根据输入动态展示建议项的多标签示例。</p>
      <Demo2 />
    </div>);
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
    // no template
    const __VLS_slots = {};
    const __VLS_inheritedAttrs = {};
    const $refs = {};
    const $el = {};
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
        return {};
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
