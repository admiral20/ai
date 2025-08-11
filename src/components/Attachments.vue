<template>
  <div class="attachments-demo">
    <h1>Attachments 附件组件</h1>
    <p>用于需要展示一组附件信息集合的场景</p>
    <div class="demo-section">
      <contextHolder />
      <div ref="divRef">
        <Flex
          vertical
          gap="middle"
          align="flex-start"
        >
          <Sender
            :prefix="attachmentsNode"
          />
          <Switch
            v-model:checked="fullScreenDrop"
            checked-children="Full screen drop"
            un-checked-children="Full screen drop"
          />

          <Switch
            v-model:checked="customContent"
            checked-children="use default content"
            un-checked-children="custom content"
          />
        </Flex>
      </div>  
    </div>
    <div class="demo-section">
      <p>占位信息</p>
      <Flex
        vertical
        gap="middle"
        :style="{
          padding: token.padding,
          background: token.colorBgContainerDisabled,
        }"
      >
        <div :style="sharedBorderStyle">
          <Attachments
            v-bind="sharedAttachmentProps"
          >
            <template #placeholder="{ type }">
              <Flex
                v-if="type === 'inline'"
                align="center"
                justify="center"
                vertical
                gap="2"
              >
                <Typography.Text style="font-size: 30px; line-height: 1;">
                  <CloudUploadOutlined />
                </Typography.Text>
                <Typography.Title
                  :level="5"
                  style="margin: 0; font-size: 14px; line-height: 1.5;"
                >
                  Click or Drop files here
                </Typography.Title>
                <Typography.Text type="secondary">
                  Support file type: image, video, audio, document, etc.
                </Typography.Text>
              </Flex>
              <Typography.Text v-if="type === 'drop'">
                Drop file here
              </Typography.Text>
            </template>
          </Attachments>
        </div>

        <div :style="sharedBorderStyle">
          <Attachments
            v-bind="sharedAttachmentProps"
          >
            <template #placeholder="{ type }">
              <Result
                v-if="type === 'inline'"
                title="Custom Placeholder Node"
                :style="{ padding: 0 }"
              >
                <template #icon>
                  <CloudUploadOutlined />
                </template>
                <template #extra>
                  <Button type="primary">
                    Do Upload
                  </Button>
                </template>
              </Result>
              <Typography.Text v-if="type === 'drop'">
                Drop file here
              </Typography.Text>
            </template>
          </Attachments>
        </div>

        <Flex gap="middle">
          <Button
            :style="{ flex: '1 1 50%' }"
            :disabled="!!items.length"
            type="primary"
            @click="fillFiles"
          >
            Fill Files
          </Button>
          <Button
            :style="{ flex: '1 1 50%' }"
            :disabled="!items.length"
            @click="resetFiles"
          >
            Reset Files
          </Button>
        </Flex>
      </Flex>
    </div>

    <div class="demo-section">
      <p>超出样式</p>
      <Flex
        vertical
        :gap="'middle'"
      >
        <Flex
          :gap="'middle'"
          :align="'center'"
        >
          <Segmented
            v-model:value="overflow"
            :options="[
              { value: 'wrap', label: 'Wrap' },
              { value: 'scrollX', label: 'Scroll X' },
              { value: 'scrollY', label: 'Scroll Y' },
            ]"
            style="margin-inline-end: auto"
          />
          <Switch
            v-model:checked="hasItems"
            checked-children="Data"
            un-checked-children="Data"
          />
          <Switch
            v-model:checked="disabled"
            checked-children="Disabled"
            un-checked-children="Disabled"
          />
        </Flex>
        <Attachments
          :overflow="overflow"
          :items="items"
          :before-upload="() => false"
          :placeholder="{
            icon: h(CloudUploadOutlined),
            title: 'Click or Drop files here',
            description: 'Support file type: image, video, audio, document, etc.',
          }"
          :disabled="disabled"
          @change="(info) => items = info.fileList"
        />
      </Flex>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CloudUploadOutlined, LinkOutlined } from '@ant-design/icons-vue';
import { message, Button, Flex, Switch, Result, theme, Typography, Segmented, type UploadFile } from 'ant-design-vue';
import { Attachments, Sender, type AttachmentsProps } from 'ant-design-x-vue';
import { computed, h, ref, type CSSProperties } from 'vue';


const fullScreenDrop = ref(false);
const customContent = ref(true);
const divRef = ref<HTMLDivElement>();
const [messageApi, contextHolder] = message.useMessage();
const handleChange = ({ file }: { file: UploadFile }) => {
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



const presetFiles: AttachmentsProps['items'] = [
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
const items1 = ref<AttachmentsProps['items']>([]);

const sharedBorderStyle = computed<CSSProperties>(() => ({
  borderRadius: token.value.borderRadius,
  overflow: 'hidden',
  background: token.value.colorBgContainer,
}));

const sharedAttachmentProps = computed<AttachmentsProps>(() => ({
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



const presetFiles1: AttachmentsProps['items'] = Array.from({ length: 30 }).map((_, index) => ({
  uid: String(index),
  name: `file-${index}.jpg`,
  status: 'done',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}));

const overflow = ref<AttachmentsProps['overflow']>('wrap');
const items = ref<AttachmentsProps['items']>(presetFiles1);
const disabled = ref(false);

// 使用计算属性来处理 items.length !== 0
const hasItems = computed({
  get: () => items.value.length !== 0,
  set: (value) => {
    items.value = value ? presetFiles1 : [];
  }
});
</script>

<style scoped>
.attachments-demo {
  padding: 24px;
  max-width: 800px;
  margin: 0 auto;
}
</style>