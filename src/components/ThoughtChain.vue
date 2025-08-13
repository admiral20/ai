<script setup lang="tsx">
import { MoreOutlined, CheckCircleOutlined, InfoCircleOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { Button, Card, Radio, Typography, type ConfigProviderProps } from 'ant-design-vue';
import { ThoughtChain, type ThoughtChainProps, type ThoughtChainItem } from 'ant-design-x-vue';
import { ref, cloneVNode, isVNode } from 'vue';

const ThoughtChainDemo = () => {
  const items: ThoughtChainProps['items'] = [
    {
      title: 'Thought Chain Item Title',
      description: 'description',
      extra: <Button type="text" icon={<MoreOutlined />} />,
    },
    {
      title: 'Thought Chain Item Title',
      description: 'description',
      extra: <Button type="text" icon={<MoreOutlined />} />,
    },
    {
      title: 'Thought Chain Item Title',
      description: 'description',
      extra: <Button type="text" icon={<MoreOutlined />} />,
    },
  
    {
      title: 'Thought Chain Item Title',
      description: 'description',
      extra: <Button type="text" icon={<MoreOutlined />} />,
    },
  ];
  return (
    <Card style={{ width: '500px' }}>
        <ThoughtChain items={items} />
      </Card>
  )
}
const ThoughtChainDemo1 = () => {
  type SizeType = ConfigProviderProps['componentSize'];

  const items: ThoughtChainProps['items'] = [
    {
      title: 'Thought Chain Item Title',
      description: 'description',
      extra: <Button type="text" icon={<MoreOutlined />} />,
    },
    {
      title: 'Thought Chain Item Title',
      description: 'description',
      extra: <Button type="text" icon={<MoreOutlined />} />,
    },
    {
      title: 'Thought Chain Item Title',
      description: 'description',
      extra: <Button type="text" icon={<MoreOutlined />} />,
    },

    {
      title: 'Thought Chain Item Title',
      description: 'description',
      extra: <Button type="text" icon={<MoreOutlined />} />,
    },
  ];

  // default size is 'middle'
  const size = ref<SizeType>('middle'); // const size = ref<SizeType>('small');
  return (
    <Card style={{ width: '500px' }}>
      <Radio.Group
        value={size}
        onChange={(e) => {
          size.value = e.target.value;
        }}
        style={{ marginBottom: '16px' }}
      >
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="middle">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <ThoughtChain items={items} size={size.value} />
    </Card>
  )
}
const ThoughtChainDemo2 = () => {
  function getStatusIcon(status: ThoughtChainItem['status']) {
    switch (status) {
      case 'success':
        return <CheckCircleOutlined />;
      case 'error':
        return <InfoCircleOutlined />;
      case 'pending':
        return <LoadingOutlined />;
      default:
        return undefined;
    }
  }

  const mockServerResponseData: ThoughtChainItem[] = [
    {
      title: 'Thought Chain Item - 1',
      status: 'success',
      description: 'status: success',
      icon: getStatusIcon('success'),
    },
    {
      title: 'Thought Chain Item - 2',
      status: 'error',
      description: 'status: error',
      icon: getStatusIcon('error'),
    },
  ];

  const delay = (ms: number) => {
    return new Promise<void>((resolve) => {
      const timer: NodeJS.Timeout = setTimeout(() => {
        clearTimeout(timer);
        resolve();
      }, ms);
    });
  };

  function addChainItem() {
    mockServerResponseData.push({
      title: `Thought Chain Item - ${mockServerResponseData.length + 1}`,
      status: 'pending',
      icon: getStatusIcon('pending'),
      description: 'status: pending',
    });
  }

  async function updateChainItem(status: ThoughtChainItem['status']) {
    await delay(800);
    mockServerResponseData[mockServerResponseData.length - 1].status = status;
    mockServerResponseData[mockServerResponseData.length - 1].icon = getStatusIcon(status);
    mockServerResponseData[mockServerResponseData.length - 1].description = `status: ${status}`;
  }

  const items = ref<ThoughtChainItem[]>(mockServerResponseData);
  const loading = ref(false);

  const mockStatusChange = async () => {
    await updateChainItem('error');
    items.value = [...mockServerResponseData];
    await updateChainItem('pending');
    items.value = [...mockServerResponseData];
    await updateChainItem('success');
    items.value = [...mockServerResponseData];
  };

  const onClick = async () => {
    loading.value = true;
    addChainItem();
    items.value = [...mockServerResponseData];
    await mockStatusChange();
    loading.value = false;
  };


  return (
    <Card style={{ width: '500px' }}>
      <Button onClick={onClick} style={{ marginBottom: '16px' }} loading={loading.value}>
        {loading.value ? 'Running' : 'Run Next'}
      </Button>
      <ThoughtChain items={items.value} />
    </Card>
  )
}

const ThoughtChainDemo3 = () => {
  const { Paragraph, Text } = Typography;

  const mockContent = (
    <Typography>
      <Paragraph>
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved, which might cause designers and developers difficulties and
        duplication and reduce the efficiency of development.
      </Paragraph>
      <Paragraph>
        After massive project practice and summaries, Ant Design, a design language for background
        applications, is refined by Ant UED Team, which aims to{' '}
        <Text strong>
          uniform the user interface specs for internal background projects, lower the unnecessary
          cost of design differences and implementation and liberate the resources of design and
          front-end development
        </Text>
      </Paragraph>
    </Typography>
  );

  const items: ThoughtChainProps['items'] = [
    {
      title: 'Click me to expand the content',
      description: 'Collapsible',
      content: cloneVNode(mockContent),
    },
    {
      title: 'Click me to expand the content',
      description: 'Collapsible',
      content: cloneVNode(mockContent),
    },
  ];

  return (
    <Card style={{ width: '500px' }}>
      <ThoughtChain items={items} collapsible />
    </Card>
  )
}


const ThoughtChainDemo4 = () => {
  const { Paragraph, Text } = Typography;

  const mockContent = (
    <Typography>
      <Paragraph>
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved, which might cause designers and developers difficulties and
        duplication and reduce the efficiency of development.
      </Paragraph>
      <Paragraph>
        After massive project practice and summaries, Ant Design, a design language for background
        applications, is refined by Ant UED Team, which aims to{' '}
        <Text strong>
          uniform the user interface specs for internal background projects, lower the unnecessary
          cost of design differences and implementation and liberate the resources of design and
          front-end development
        </Text>
      </Paragraph>
    </Typography>
  );

  const expandedKeys = ref(['1']);

  const onExpand = (keys: string[]) => {
    expandedKeys.value = keys;
  };

  const items: ThoughtChainProps['items'] = [
    {
      key: '1',
      title: 'Click me to expand the content',
      description: 'Collapsible',
      content: cloneVNode(mockContent),
    },
    {
      key: '2',
      title: 'Click me to expand the content',
      description: 'Collapsible',
      content: cloneVNode(mockContent),
    },
  ];
  
  return (
    <Card style={{ width: '500px' }}>
      <Space direction="vertical" size="large">
        <CheckboxGroup
          v-model:value={expandedKeys.value}
          options={items.map((item) => ({
            label: `item ${item.key}`,
            value: item.key
          }))}
        />
        <ThoughtChain
          items={items}
          collapsible={{
            expandedKeys: expandedKeys.value,
            onExpand,
          }}
        />
      </Space>
    </Card>
  );
}

const ThoughtChainDemo5 = () => {
  const { Paragraph, Text } = Typography;

  const customizationProps: ThoughtChainItem = {
    title: 'Thought Chain Item Title',
    description: 'description',
    icon: <CheckCircleOutlined />,
    extra: <Button type="text" icon={<MoreOutlined />} />,
    footer: <Button block>Thought Chain Item Footer</Button>,
    content: (
      <Typography>
        <Paragraph>
          In the process of internal desktop applications development, many different design specs and
          implementations would be involved, which might cause designers and developers difficulties
          and duplication and reduce the efficiency of development.
        </Paragraph>
        <Paragraph>
          After massive project practice and summaries, Ant Design, a design language for background
          applications, is refined by Ant UED Team, which aims to{' '}
          <Text strong>
            uniform the user interface specs for internal background projects, lower the unnecessary
            cost of design differences and implementation and liberate the resources of design and
            front-end development
          </Text>
        </Paragraph>
      </Typography>
    ),
  };

  const cloneCustomizationProps = (op: ThoughtChainItem) => {
    return Object.fromEntries(Object.entries(op).map(([k, v]) => {
      return [k, isVNode(v) ? cloneVNode(v): v];
    }));
  }

  const items: ThoughtChainProps['items'] = [
    {
      ...cloneCustomizationProps(customizationProps),
      status: 'success',
    },
    {
      ...cloneCustomizationProps(customizationProps),
      status: 'error',
    },
    {
      ...cloneCustomizationProps(customizationProps),
      status: 'pending',
    },
  ];

  return (
    <Card style={{ width: '500px' }}>
      <ThoughtChain items={items} />
    </Card>
  )
}

const ThoughtChainDemo6 = () => {
  const items: ThoughtChainProps['items'] = [
    {
      title: '1 - Thought Chain Item',
      description: 'description',
      extra: <Button type="text" icon={<MoreOutlined />} />,
      footer: <Button>1 - Thought Chain Item Footer</Button>,
      content: (
        <ThoughtChain
          items={[
            {
              title: '1-1 Thought Chain Item',
              description: 'description',
              extra: <Button type="text" icon={<MoreOutlined />} />,
            },
            {
              title: '1-2 Thought Chain Item',
              description: 'description',
              extra: <Button type="text" icon={<MoreOutlined />} />,
            },
          ]}
        />
      ),
    },
    {
      title: '2 - Thought Chain Item',
      description: 'description',
      extra: <Button type="text" icon={<MoreOutlined />} />,
      footer: <Button>2 - Thought Chain Item Footer</Button>,
      content: (
        <ThoughtChain
          items={[
            {
              title: '2-1 Thought Chain Item',
              description: 'description',
              extra: <Button type="text" icon={<MoreOutlined />} />,
            },
            {
              title: '2-2 Thought Chain Item',
              description: 'description',
              extra: <Button type="text" icon={<MoreOutlined />} />,
            },
          ]}
        />
      ),
    },
  ];
  return (
    <Card style={{ width: '500px' }}>
      <ThoughtChain items={items} collapsible />
    </Card>
  )
}

const ThoughtChainDemo7 = () => {
  const items: ThoughtChainProps['items'] = [
    {
      title: 'Thought Chain Item Title',
      description: 'Description of the thought chain item',
      extra: <Button type="text" icon={<MoreOutlined />} />,
    },
    {
      title: 'Visible tooltip： Thought Chain Item Title',
      description: 'Description of the thought chain item',
      extra: <Button type="text" icon={<MoreOutlined />} />,
      tooltip: true,
    },
    {
      title: 'Thought Chain Item Title',
      description: 'Description of the thought chain item',
      extra: <Button type="text" icon={<MoreOutlined />} />,
      tooltip: {
        titleConfig: {
          title: 'Custom title tooltip',
        },
        descriptionConfig: {
          title: 'Custom description tooltip',
        },
      },
    },
    {
      title: 'Hidden description tooltip',
      description: 'Description of the thought chain item',
      extra: <Button type="text" icon={<MoreOutlined />} />,
      tooltip: {
        descriptionConfig: {
          open: false,
          title: 'This text does not display the description tooltip',
        },
      },
    },
  ];
  return (
    <Card style={{ width: '250px' }}>
      <ThoughtChain items={items} />
    </Card>
  );
}

defineRender(() => {
  return (
    <div>
      <h2>思维链组件用于可视化和追踪 Agent 对 Actions 和 Tools 的调用链。</h2>
      <h6>思维链组件用于可视化和追踪 Agent 对 Actions 和 Tools 的调用链。</h6>
      
      <p>基础用法</p>
      <ThoughtChainDemo/>
      <p>尺寸 ThoughtChain 有大、中、小三种尺寸。默认尺寸为中 - middle。</p>
      <ThoughtChainDemo1/>
      <p>节点状态 思维链节点支持配置 status 属性来明显的表明当前节点的执行状态</p>
      <ThoughtChainDemo2/>
      <p>可折叠的 配置 collapsible 可开启对思维链节点内容区域的折叠功能</p>
      <ThoughtChainDemo3/>
      <p>受控模式 collapsible 支持传入对象，开启受控模式</p>
      <ThoughtChainDemo4/>
      <p>客制化 items 属性支持灵活的客制化配置，详情参考 ThoughtChainItem 定义</p>
      <ThoughtChainDemo5/>
      <p>嵌套使用 ThoughtChain 组件支持嵌套使用</p>
      <ThoughtChainDemo6/>
      <p>tooltip 提示 配置 tooltip 可开启对思维链节点内容区域的 tooltip 提示功能</p>
      <ThoughtChainDemo7/>

    </div>
  )
});
</script>