<script setup lang="tsx">
import { ApiOutlined, LinkOutlined, SearchOutlined } from '@ant-design/icons-vue';
import { Button, Divider, Flex, Switch, theme } from 'ant-design-vue';
import { Sender } from 'ant-design-x-vue';
import { ref, watch } from 'vue';
import { Input } from 'ant-design-vue';
import { textAreaProps } from 'ant-design-vue/es/input/inputProps';
import { triggerFocus } from 'ant-design-vue/es/vc-input/utils/commonUtils';
import type { InputFocusOptions } from 'ant-design-x-vue/sender/interface';
import { defineComponent, shallowRef } from 'vue';

const { token } = theme.useToken();
const loading = ref<boolean>(false);
const value = ref<string>('');

const iconStyle = {
  fontSize: 18,
  color: token.value.colorText,
}

watch(loading, () => {
  if (loading.value) {
    const timer = setTimeout(() => {
      loading.value = false;
      value.value = '';

      console.log('Send message successfully!');
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }
});


const MyInputTextArea = defineComponent({
  name: 'MyInputTextArea',
  props: textAreaProps(),
  setup(props, { attrs, expose }) {
    const textAreaRef = shallowRef();

    const focus = (option?: InputFocusOptions) => {
      triggerFocus(textAreaRef.value, option);
    };

    const blur = () => {
      textAreaRef.value?.blur();
    };

    expose({
      focus,
      blur,
    });

    return () => (
      <Input.TextArea
        {...attrs}
        {...props}
        ref={textAreaRef}
        style={{ minHeight: 100 }}
        autoSize={{ minRows: 3, maxRows: 6 }}
        showCount
        maxlength={20}
        placeholder="Type your message here..."
      />
    );
  },
});

defineRender(() => {
  return (
    <div>
        <Sender
            value={value.value}
            onChange={(v) => {
                value.value = v;
            }}
            // autoSize={{ minRows: 2, maxRows: 6 }}
            placeholder="Press Enter to send message"
            footer={({ components }) => {
                const { SendButton, LoadingButton, SpeechButton } = components;
                return (
                    <Flex justify="space-between" align="center">
                        <Flex gap="small" align="center">
                        <Button style={iconStyle} type="text" icon={<LinkOutlined />} />
                        <Divider type="vertical" />
                        Deep Thinking
                        <Switch size="small" />
                        <Divider type="vertical" />
                        <Button icon={<SearchOutlined />}>Global Search</Button>
                        </Flex>
                        <Flex align="center">
                        <Button type="text" style={iconStyle} icon={<ApiOutlined />} />
                        <Divider type="vertical" />
                        <SpeechButton style={iconStyle} />
                        <Divider type="vertical" />
                        {loading.value ? (
                            <LoadingButton type="default" />
                        ) : (
                            <SendButton type="primary" disabled={false} />
                        )}
                        </Flex>
                    </Flex>
                );
            }}
            onSubmit={() => {
                loading.value = true;
            }}
            onCancel={() => {
                loading.value = false;
            }}
            actions={false}
        />

        <Sender
           value={value.value}
           onChange={(v) => {
             value.value = v;
           }}
           placeholder="Press Enter to send message"
           components={{
             input: MyInputTextArea,
           }}
           onSubmit={(message) => {
             console.log('Submitted:', message);
             value.value = '';
           }}
         />
    </div>
  );
})
</script>