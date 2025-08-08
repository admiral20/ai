<template>
  <Flex
    gap="middle"
    vertical
  >
    <Bubble
      placement="start"
      content="Good morning, how are you?"
      :avatar="{ icon: h(UserOutlined), style: fooAvatar }"
    />
    <Bubble
      placement="start"
      content="What a beautiful day!"
      :styles="{ avatar: hideAvatar }"
      :avatar="{}"
    />
    <Bubble
      placement="end"
      content="Hi, good morning, I'm fine!"
    >
      <template #avatar>
        <Avatar
          :icon="h(UserOutlined)"
          :style="barAvatar"
        />
      </template>
    </Bubble>
    <Bubble
      placement="end"
      content="Thank you!"
      :styles="{ avatar: hideAvatar }"
      :avatar="{}"
    />
  </Flex>
  <hr/>
  <Bubble
    :loading="loading"
    content="hello world !"
    :avatar="{ icon: h(UserOutlined) }"
  />
  <Switch v-model:checked="loading" />

  <hr/>
  <Bubble
    content="Hello, welcome to use Ant Design X! Just ask if you have any questions."
    :avatar="{ icon: h(UserOutlined) }"
  >
    <template #header="{ content }">
      <Space :size="token.paddingXXS">
        <div>{{ content }} </div>
      </Space>
    </template>
    <template #footer="{ content }">
      <Space :size="token.paddingXXS">
        <Button
          type="text"
          size="small"
          :icon="h(SyncOutlined)"
        />
        <Button
          type="text"
          size="small"
          :icon="h(CopyOutlined)"
          @click="() => onCopy(content)"
        />
      </Space>
    </template>
  </Bubble>

  <hr/>

  <Bubble
    :content="text1.repeat(repeat)"
    :typing="{ step: 2, interval: 50 }"
    :avatar="{ icon: h(UserOutlined) }"
  />
  <Bubble
    :content="text1.repeat(repeat)"
    :typing="{ step: 2, interval: 50, suffix: '💗' }"
    :avatar="{ icon: h(UserOutlined) }"
  />
  <Button
    :style="{ alignSelf: 'flex-end' }"
    @click="repeat = repeat < 5 ? repeat + 1 : 1"
  >
    Repeat {{ repeat }} Times
  </Button>

  <hr/>

  <div style="height: 100px">
    <MyBubble
      :typing="true"
      :content="contentState"
      :avatar="{ icon: h(UserOutlined) }"
    >
      <template #message="{ content }">
        <Flex
          gap="middle"
          align="center"
        >
          <Image
            :height="50"
            :src="content.imageUrl"
          />
          <span style="font-size: 18px; font-weight: bold;">{{ content.text }}</span>
        </Flex>
      </template>
      <template #footer="{ content }">
        <Button
          type="text"
          @click="() => {
            contentState = {
              ...contentState,
              actionNode: h('span', '🎉 Happy Ant Design X Vue !'),
            };
          }"
        >
          <component :is="content?.actionNode" />
        </Button>
      </template>
    </MyBubble>
  </div>

  <hr/>

  <div :style="{ height: 100 }" :key="renderKey">
    <Bubble
      :typing="true"
      :content="text"
      :messageRender="renderMarkdown"
      :avatar="{ icon: h(UserOutlined) }"
    />
  </div>

  <hr/>

  <Flex vertical gap="middle">
    <Bubble
      variant="filled"
      :avatar="{ icon: h(UserOutlined) }"
      content="variant: filled"
    />
    <Bubble
      variant="outlined"
      :avatar="{ icon: h(UserOutlined) }"
      content="variant: outlined"
    />
    <Bubble
      variant="shadow"
      :avatar="{ icon: h(UserOutlined) }"
      content="variant: shadow"
    />
    <Bubble
      variant="borderless"
      :avatar="{ icon: h(UserOutlined) }"
      :content="
        h(Prompts, {
          title: 'variant: borderless to customize',
          items,
          vertical: true,
        })
      "
    />
  </Flex>

  <hr />

  <Flex gap="middle" vertical>
    <Bubble content="shape: default" />
    <Bubble v-bind="sharedLongTextProps" />
    <Bubble content="shape: round" shape="round" />
    <Bubble v-bind="sharedLongTextProps" shape="round" />
    <Bubble content="shape: corner" shape="corner" />
    <Bubble v-bind="sharedLongTextProps" shape="corner" />
  </Flex>
  <hr />

  <Flex vertical gap="small">
    <Flex gap="large" align="center">
      Use roles as:
      <Switch
        :checked="useRolesAsFunction"
        @change="handleChange"
        checkedChildren="Function"
        unCheckedChildren="Object"
      />
    </Flex>

    <Flex gap="small" :style="{ alignSelf: 'flex-end' }">
      <Button
        @click="
          () => {
            count++;
          }
        "
      >
        Add Bubble
      </Button>

      <Button
        @click="
          () => {
            listRef?.scrollTo({ key: 0, block: 'nearest' });
          }
        "
      >
        Scroll To First
      </Button>
    </Flex>

    <BubbleList
      ref="listRef"
      :style="{ maxHeight: '300px', paddingInline: '16px' }"
      :roles="useRolesAsFunction ? rolesAsFunction : rolesAsObject"
      :items="
        Array.from({ length: count }).map((_, i) => {
          const isAI = !!(i % 2);
          const content = isAI
            ? 'Mock AI content. '.repeat(20)
            : 'Mock user content.';

          return {
            key: i,
            role: isAI ? 'ai' : 'user',
            content,
          };
        })
      "
    />
  </Flex>
  <hr />

  <BubbleList
    ref="listRef1"
    :style="{ maxHeight: '300px' }"
    :roles="roles"
    :items="[
      {
        key: 'welcome',
        role: 'ai',
        content: 'Mock welcome content. '.repeat(10),
        footer: h(Flex, null, () => [
          h(Button, {
            size: 'small',
            type: 'text',
            icon: h(SyncOutlined),
            style: { marginInlineEnd: 'auto' },
          }),
          h(Button, { size: 'small', type: 'text', icon: h(SmileOutlined) }),
          h(Button, { size: 'small', type: 'text', icon: h(FrownOutlined) }),
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
    ]"
  />
</template>

<script setup lang="ts">
import { CopyOutlined, SyncOutlined, UserOutlined, CoffeeOutlined, SmileOutlined, FireOutlined, FrownOutlined } from '@ant-design/icons-vue';
import { Avatar, Button, Space, theme, message as messageAnt, Switch, Flex, Image, Typography, Spin, type SwitchProps } from 'ant-design-vue';
import { Bubble, Prompts, BubbleList, type BubbleProps, PromptsProps, BubbleListProps }  from 'ant-design-x-vue';
import { h, ref, onWatcherCleanup, watchEffect, type VNode, CSSProperties } from 'vue';
import markdownit from 'markdown-it';


const fooAvatar: CSSProperties = {
  color: '#f56a00',
  backgroundColor: '#fde3cf',
};

const barAvatar: CSSProperties = {
  color: '#fff',
  backgroundColor: '#87d068',
};

const hideAvatar: CSSProperties = {
  visibility: 'hidden',
};

const [message, contextHolder] = messageAnt.useMessage();
const { token } = theme.useToken();

const onCopy = (textToCopy: any) => {
  if (!textToCopy) return message.success('Text is empty');
  message.success(`Text copied successfully：${textToCopy}`);
};

const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 1000);

const text1 = ref('Ant Design X love you! ');
const repeat = ref(1);


type ContentType = {
  imageUrl: string;
  text: string;
  actionNode: VNode;
};
const MyBubble = Bubble<ContentType>;

const contentState = ref<ContentType>({
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

const renderMarkdown: BubbleProps['messageRender'] = (content) =>
  h(Typography, null, {
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


const items: PromptsProps['items'] = [
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

const sharedLongTextProps: BubbleProps = {
  placement: 'end',
  content:
    'This is a long text message to show the multiline view of the bubble component. '.repeat(
      3,
    ),
  styles: { content: { maxWidth: 500 } },
};

const rolesAsObject: BubbleListProps['roles'] = {
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

const rolesAsFunction = (bubbleData: BubbleProps, index: number) => {
  const RenderIndex: BubbleProps['messageRender'] = (content) =>
    h(Flex, null, () => [h('text', null, `#${index}: ${content}`)]);
    switch (bubbleData.role) {
    case 'ai':
      return {
        placement: 'start' as const,
        avatar: { icon: h(UserOutlined), style: { background: '#fde3cf' } },
        typing: { step: 5, interval: 20 },
        style: {
          maxWidth: 600,
        },
        messageRender: RenderIndex,
      };
    case 'user':
      return {
        placement: 'end' as const,
        avatar: { icon: h(UserOutlined), style: { background: '#87d068' } },
        messageRender: RenderIndex,
      };
    default:
      return { messageRender: RenderIndex };
  }
};

const count = ref<number>(3);
const useRolesAsFunction = ref(false);
const listRef = ref<InstanceType<typeof BubbleList>>(null);

const handleChange = (checked: SwitchProps['checked']) => {
  useRolesAsFunction.value = checked as boolean;
};


const roles: BubbleListProps['roles'] = {
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
    loadingRender: () =>
      h(Space, null, () => [h(Spin, { size: 'small' }), 'Custom loading...']),
  },
  user: {
    placement: 'end',
    avatar: { icon: h(UserOutlined), style: { background: '#87d068' } },
  },
};

// const listRef = useTemplateRef<InstanceType<typeof BubbleList>>(null);
const listRef1 = ref<InstanceType<typeof BubbleList>>(null);

</script>