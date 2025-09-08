import DefaultTheme from 'vitepress/theme'
import { App } from 'vue'
import Antd from 'ant-design-vue'
import AntdX from 'ant-design-x-vue'
import 'ant-design-vue/dist/reset.css'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(Antd)
    app.use(AntdX)
  }
}