<script setup lang="tsx">
import { RedditOutlined } from '@ant-design/icons-vue';
import { Sender, Suggestion, type SuggestionProps } from 'ant-design-x-vue';
import { ref } from 'vue';
import { Select } from 'ant-design-vue';

type SuggestionItems = Exclude<SuggestionProps['items'], () => void>;
const suggestions: SuggestionItems = [
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
  const value = ref('')

  const updateValue = (v: string) => {
    value.value = v
  }

  return (
    <Suggestion
      items={suggestions}
      onSelect={(itemVal) => {
        updateValue(`[${itemVal}]:`);
      }}
      children={({ onTrigger, onKeyDown }) => {
        return (
          <Sender
            value={value.value}
            onChange={(nextVal) => {
              if (nextVal === '/') {
                onTrigger();
              } else if (!nextVal) {
                onTrigger(false);
              }
              updateValue(nextVal);
            }}
            onKeyDown={onKeyDown}
            placeholder="输入 / 获取建议"
          />
        );
      }}
    />
  );
};
const Demo1 = () => {
  const value = ref('')

  const updateValue = (v: string) => {
    value.value = v
  }

  return (
    <Suggestion
      block
      items={suggestions}
      onSelect={(itemVal) => {
        updateValue(`[${itemVal}]:`);
      }}
      children={({ onTrigger, onKeyDown }) => {
        return (
          <Sender
            value={value.value}
            onChange={(nextVal) => {
              if (nextVal === '/') {
                onTrigger();
              } else if (!nextVal) {
                onTrigger(false);
              }
              updateValue(nextVal);
            }}
            onKeyDown={onKeyDown}
            placeholder="输入 / 获取建议"
          />
        );
      }}
    />
  );
};

const Demo2 = () => {
  const uuid = ref(0);
  const tags = ref<string[]>([]);
  const value = ref('');
  

  return (
    <Suggestion<string>
      items={(info) => [{ label: `Trigger by '${info}'`, value: String(info) }]}
      onSelect={(info) => {
        uuid.value += 1;
        tags.value = [...tags.value, `Cell_${uuid.value}`];
        value.value = value.value.replace(info, '');
      }}
      children={({ onTrigger, onKeyDown }) => {
        return (
          <Select
            value={tags.value}
            style={{ width: '100%' }}
            mode="tags"
            open={false}
            searchValue={value.value}
            onChange={(nextTags) => {
              if ((nextTags as string[]).length < tags.value.length) {
                tags.value = nextTags as string[];
              }
            }}
            onSearch={(nextVal) => {
              value.value = nextVal;
            }}
            onKeydown={(e) => {
              if (e.key === '/' || e.key === '#') {
                onTrigger(e.key);
              }
              onKeyDown(e);
            }}
            placeholder="可任意输入 / 与 # 多次获取建议"
          />
        );
      }}
    />
  )
}

defineRender(() => {
  return (
    <div>
      <p>基础用法，受控进行状态管理。自定义触发器。</p>
      <Demo />
      <p>整行宽度, 通过 block 改为整行展示，extra 可用于配置额外信息。</p>
      <Demo1 />
      <p>自定义, 根据输入动态展示建议项的多标签示例。</p>
      <Demo2 />
    </div>
  )
});
</script>