<template>
  <h1>Sender 用于聊天的输入框组件。</h1>
  <div class="sender-demo">
    <contextHolder />
    <Flex
      vertical
      gap="middle"
    >
      <Sender
        v-model:value="value"
        :loading="loading"
        :auto-size="{ minRows: 2, maxRows: 6 }"
        @submit="() => {
          value = '';
          loading = true
          messageApi.info('Send message!');
        }"
        @cancel="() => {
          loading = false
          messageApi.error('Cancel sending!');
        }"
      />
      <Sender
        value="Force as loading"
        loading
        read-only
      />
      <Sender
        disabled
        value="Set to disabled"
      />
    </Flex>
    <hr>
    <span>提交用法</span>
    <context-holder />
    <Sender
      submit-type="shiftEnter"
      placeholder="Press Shift + Enter to send message"
      :on-submit="submit"
    />
    <hr />
    <span>语音输入</span>
    <context-holder />
    <Sender
      :allow-speech="true"
      :on-submit="submit"
    />
    <context-holder />
    <Sender
      :allow-speech="{
        audioIcon: h(SoundOutlined),
        audioDisabledIcon: h(SoundOutlined, { style: { color: 'gray' } }),
        audioRecordingIcon: h(EllipsisOutlined)
      }"
      :on-submit="submit"
    />
    <context-holder />
    <Sender
      :allow-speech="speechConfig"
      :on-submit="submit"
    />
    <hr />
    <span>自定义按钮</span>
    <context-holder />
    <Sender
      v-model:value1="value1"
      submit-type="shiftEnter"
      :loading="loading1"
      @change="(v) => {
        console.log('Sender onChange', v)
      }"
      @submit="() => {
        loading = true;
      }"
      @cancel="() => {
        loading = false;
      }"
    >
      <template #actions="{ info: { components: { SendButton, LoadingButton, ClearButton, SpeechButton } } }">
        <Space size="small">
          <Typography.Text type="secondary">
            <small>`Shift + Enter` to submit</small>
          </Typography.Text>
          <component :is="ClearButton" />
          <component :is="SpeechButton" />
          <component
            :is="LoadingButton"
            v-if="loading1"
            type="default"
            style="display: block;"
            :disabled="true"
          >
            <template #icon>
              <Spin size="small" />
            </template>
          </component>
          <component
            :is="SendButton"
            v-else
            type="primary"
            :disabled="false"
          />
        </Space>
      </template>
    </Sender>  
    <hr />
    <span>展开面板</span>
    <context-holder />
    <Flex
      style="height: 350px;"
      align="end"
    >
      <Sender
        placeholder="← Click to open123456789"
        @submit="senderSubmit"
      >
        <template #header>
          <Sender.Header
            title="Upload Sample"
            :open="open"
            @open-change="openChange"
          >
            <Flex
              vertical
              align="center"
              gap="small"
              :style="{ marginBlock: token.paddingLG }"
            >
              <CloudUploadOutlined style="font-size: 4em" />
              <Typography.Title
                :level="5"
                style="margin: 0"
              >
                Drag file here(just demo)
              </Typography.Title>
              <Typography.Text type="secondary">
                Support pdf, doc, xlsx, ppt, txt, image file types
              </Typography.Text>
              <Button @click="selectFileClick">
                Select File
              </Button>
            </Flex>
          </Sender.Header>
        </template>

        <template #prefix>
          <Button
            type="text"
            @click="triggerOpen"
          >
            <template #icon>
              <LinkOutlined />
            </template>
          </Button>
        </template>
      </Sender>
    </Flex>

    <hr />
    <span>引用</span>
    <context-holder />
    <Flex
      vertical
      gap="middle"
      align="flex-start"
    >
      <Switch
        :checked="hasRef"
        un-checked-children="With Reference"
        checked-children="With Reference"
        @change="toggleChecked"
      />
      <Sender
        :on-submit="() => {
          messageApi.success('Send message successfully!');
        }"
      >
        <template #header>
          <Sender.Header
            :open="hasRef"
            :title="headerTitle"
            :on-open-change="openChange1"
          />
        </template>
      </Sender>
    </Flex>
    <hr />
    <span>自定义底部内容 - TSX 语法</span>
    <SenderTsx />

    <hr />
    <span>调整样式</span>
    <contextHolder />
    <Flex
      vertical
      gap="middle"
    >
      <Sender
        v-model:value="value"
        :loading="loading"
        placeholder="Change button border radius"
        @submit="(msg) => {
          messageApi.success(`Send: ${msg}`);
          value = ''
          loading = true
        }"
        @cancel="() => {
          loading = false
        }"
      >
        <template #actions="{ info: { components: { SendButton, LoadingButton } } }">
          <Tooltip
            v-if="loading"
            title="Click to cancel"
          >
            <component :is="LoadingButton" />
          </Tooltip>
          <Tooltip
            v-else
            :title="value ? 'Send \u21B5' : 'Please type something'"
          >
            <component
              :is="SendButton"
              shape="default"
              :style="{ borderRadius: '12px' }"
            />
          </Tooltip>
        </template>
      </Sender>
      <Sender
        v-model:value="value"
        :loading="loading"
        placeholder="Change button icon"
        @submit="(msg) => {
          messageApi.success(`Send: ${msg}`);
          value = ''
          loading = true
        }"
        @cancel="() => {
          loading = false
        }"
      >
        <template #actions="{ info: { components: { SendButton, LoadingButton } } }">
          <Tooltip
            v-if="loading"
            title="Click to cancel"
          >
            <component :is="LoadingButton" />
          </Tooltip>
          <Tooltip
            v-else
            :title="value ? 'Send \u21B5' : 'Please type something'"
          >
            <component
              :is="SendButton"
              type="text"
              shape="default"
              :icon="h(SendOutlined)"
              :style="{ color: token.colorPrimary }"
            />
          </Tooltip>
        </template>
      </Sender>
      <Sender
        v-model:value="value"
        :loading="loading"
        placeholder="Loading not change button"
        @submit="(msg) => {
          messageApi.success(`Send: ${msg}`);
          value = ''
          loading = true
        }"
        @cancel="() => {
          loading = false
        }"
      >
        <template #actions="{ info: { components: { SendButton } } }">
          <component :is="SendButton" />
        </template>
      </Sender>
    </Flex>

    <hr />
    <span>黏贴文件</span>
    <Flex
      :style="{ height: '220px' }"
      align="end"
    >
      <Sender
        ref="senderRef"
        :value="text"
        :on-change="v => text = v"
        :on-submit="submit"
        :on-paste-file="pastFile"
      >
        <template #prefix>
          <Button
            type="text"
            :icon="h(LinkOutlined)"
            @click="() => {
              open = !open;
            }"
          />
        </template>
        <template #header>
          <Sender.Header
            title="Attachments"
            :styles="{
              content: {
                padding: 0,
              },
            }"
            :open="open"
            :on-open-change="v => open = v"
            force-render
          >
            <Attachments
              ref="attachmentsRef"
              :before-upload="() => false"
              :items="items"
              :on-change="fileChange"
              :placeholder="placeholder"
              :get-drop-container="getDropContainer"
            />
          </Sender.Header>
        </template>
      </Sender>
    </Flex>
    <hr />
    <span>聚焦</span>
    <Flex
      wrap="wrap"
      :gap="12"
    >
      <Button @click="focusStart">
        Focus at first
      </Button>
      <Button @click="focusEnd">
        Focus at last
      </Button>
      <Button @click="focusAll">
        Focus to select all
      </Button>
      <Button @click="focusPreventScroll">
        Focus prevent scroll
      </Button>
      <Button @click="blur">
        Blur
      </Button>
      <Sender
        ref="senderRef1"
        default-value="Hello, welcome to use Ant Design X!"
      />
    </Flex>
  </div>
</template>

<script setup lang="ts">
import { message, Switch, Flex, Space, Spin, Typography, Button, theme } from 'ant-design-vue';
import { Sender, Attachments, AttachmentsProps, type SenderProps } from 'ant-design-x-vue';
import { onWatcherCleanup, ref, watch, h, computed } from 'vue';
import { SoundOutlined, EllipsisOutlined, CloudUploadOutlined, LinkOutlined, EnterOutlined, SendOutlined } from '@ant-design/icons-vue';
import SenderTsx from './SenderTsx.vue';

const [messageApi, contextHolder] = message.useMessage();

const value = ref('Hello? this is X!');
const loading = ref<boolean>(false);

// Mock send message
watch(loading, () => {
  if (loading.value) {
    const timer = setTimeout(() => {
      loading.value = false;
      messageApi.success('Send message successfully!');
    }, 3000);
    onWatcherCleanup(() => {
      clearTimeout(timer);
    })
  }
});


const submit = () => {
  messageApi.success('Send message successfully!'); 
}

type SpeechConfig = SenderProps['allowSpeech'];
const recording = ref(false);

const speechConfig = computed<SpeechConfig>(
  () => ({
    // When setting `recording`, the built-in speech recognition feature will be disabled
    recording: recording.value,
    onRecordingChange: (nextRecording) => {
      messageApi.info(`Mock Customize Recording: ${nextRecording}`);
      recording.value = nextRecording;
    },
  }
))


// const [message, contextHolder] = message.useMessage();
const value1 = ref('');
const loading1 = ref<boolean>(false);
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
const openChange = (v: boolean) => {
  open.value = v;
}

const triggerOpen = () => {
  open.value = !open.value;
}

const senderSubmit = () => {
  message.success('Send message successfully!');
}

const selectFileClick = () => {
  message.info('Mock select file');
}

const hasRef = ref(true);


const toggleChecked = () => {
  hasRef.value =!hasRef.value;
}

const openChange1 = (v: boolean) => {
  hasRef.value = v;
}

const headerTitle = h(Space, {}, () => [
  h(EnterOutlined),
  h(Typography.Text, { type: 'secondary' }, () => '"Tell more about Ant Design X"')
])

const iconStyle = {
  fontSize: 18,
  color: token.value.colorText,
}

// Template 语法演示相关状态
const templateValue = ref('Template syntax example');
const templateLoading = ref<boolean>(false);

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
    })
  }
});


type GetFunction<T> = T extends (...args: any[]) => any ? T : never;
type PlaceholderType = Parameters<GetFunction<AttachmentsProps['placeholder']>>[0];
type PastFile = SenderProps['onPasteFile'];
type FileChange = AttachmentsProps['onChange'];

const open1 = ref(false);
const items = ref([]);
const text = ref('');

const attachmentsRef = ref<InstanceType<typeof Attachments>>(null);
const senderRef = ref<InstanceType<typeof Sender>>(null);

const placeholder = (type: PlaceholderType) =>
  type === 'drop'
    ? {
      title: 'Drop file here',
    }
    : {
      icon: h(CloudUploadOutlined),
      title: 'Upload files',
      description: 'Click or drag files to this area to upload',
    }

const getDropContainer = () => senderRef.value?.nativeElement;

const pastFile: PastFile = (_, files) => {
  console.log("past")
  attachmentsRef.value?.upload(files);
  open.value = true;
}

const submit1 = () => {
  items.value = [];
  text.value = '';
}

const fileChange: FileChange = ({ fileList }) => items.value = fileList



const senderRef1 = ref<InstanceType<typeof Sender> | null>(null);

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
</script>

<style scoped>
.sender-demo {
  padding: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.demo-section {
  margin-bottom: 32px;
  padding: 16px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
}

.demo-section h2 {
  margin-top: 0;
  margin-bottom: 16px;
  color: #1890ff;
}

.template-demo {
  padding: 20px;
  border: 2px solid #52c41a;
  border-radius: 8px;
  background: #f6ffed;
  margin-bottom: 24px;
}

.template-demo h2 {
  color: #52c41a;
  margin-top: 0;
  margin-bottom: 20px;
}

.syntax-info {
  margin-top: 20px;
  padding: 16px;
  background: #f6f8fa;
  border-radius: 8px;
}

.syntax-info h3 {
  color: #333;
  margin-top: 0;
  margin-bottom: 12px;
}

.syntax-info ul {
  margin: 0;
  padding-left: 20px;
}

.syntax-info li {
  margin-bottom: 8px;
  color: #666;
}

.syntax-info code {
  background: #f1f3f4;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  color: #d73a49;
}

.message-history {
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 12px;
  background: #fafafa;
}

.history-item {
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.history-item:last-child {
  border-bottom: none;
}

.empty-history {
  text-align: center;
  color: #999;
  font-style: italic;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .sender-demo {
    padding: 16px;
  }
  
  .template-demo {
    padding: 16px;
  }
  
  .demo-section {
    padding: 12px;
  }
}
</style>