<template>
    <h1>Conversations</h1>
    <Conversations
        :items="items"
        default-active-key="item1"
        :style="style"
        :groupable="groupable"
    />

    <contextHolder />
    <Conversations
        default-active-key="item1"
        :menu="menuConfig"
        :items="items"
        :style="style"
    />
    <Conversations
        default-active-key="item1"
        :active-key="activeKey"
        :menu="menuConfig1"
        :items="items"
        :on-active-change="(v) => updateActiveKey(v)"
        :style="style"
    />

    <Flex gap="small">
      <Button
        @click="() => {
          updateActiveKey('item1');
        }"
      >
        Active First
      </Button>
      <Button
        @click="() => {
          updateActiveKey('item3');
        }"
      >
        Active Last
      </Button>
    </Flex>
</template>
<script setup lang="ts">
import { theme, message, Space } from 'ant-design-vue';
import { DeleteOutlined, EditOutlined, StopOutlined, PlusSquareOutlined, CommentOutlined } from '@ant-design/icons-vue';
import { Conversations, type ConversationsProps } from "ant-design-x-vue"
import { computed, h, ref } from 'vue';


const items: ConversationsProps['items'] = Array.from({ length: 4 }).map((_, index) => ({
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

const menuConfig: ConversationsProps['menu'] = (conversation) => ({
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
const menuConfig1: ConversationsProps['menu'] = (conversation) => ({
  trigger: (menuInfo) => h(
    PlusSquareOutlined,
    {
      onClick: () => {
        console.log(`Click ${conversation.key} - ${menuInfo.key}`);
      } 
    }
  ),
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
const updateActiveKey = (v: string) => activeKey.value = v;

const groupable: ConversationsProps['groupable'] = {
  sort(a, b) {
    if (a === b) return 0;

    return a === 'Today' ? -1 : 1;
  },
  title: (group, { components: { GroupTitle } }) =>
    group ? h(
      GroupTitle,
      null,
      () => [h(Space, null, () => [h(CommentOutlined), h('span', null, group)])]
    ) : h(GroupTitle),
};
</script>