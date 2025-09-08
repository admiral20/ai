import {
  StyleProvider,
  avatar_default,
  button_default,
  cascader_default,
  config_provider_default,
  dropdown_default,
  flex_default,
  formatToken,
  image_default,
  input_default,
  menu_default,
  progress_default,
  theme_default,
  tooltip_default,
  typography_default,
  upload_default,
  useConfigContextInject
} from "./chunk-3UYAQF32.js";
import "./chunk-BBRRIYYZ.js";
import {
  Fragment,
  Teleport,
  Transition,
  computed,
  createBaseVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  h,
  inject,
  isVNode,
  mergeDefaults,
  mergeProps,
  nextTick,
  onBeforeUnmount,
  onMounted,
  onScopeDispose,
  onWatcherCleanup,
  openBlock,
  provide,
  reactive,
  ref,
  renderList,
  shallowRef,
  toRaw,
  toRef,
  toValue,
  triggerRef,
  unref,
  useAttrs,
  useId,
  useSlots,
  useTemplateRef,
  vShow,
  watch,
  watchEffect,
  watchPostEffect,
  withDirectives
} from "./chunk-HVR2FF6M.js";
import "./chunk-G3PMV62Z.js";

// node_modules/ant-design-x-vue/es/x-provider/hooks/use-x-provider-context.mjs
var f = "ant";
function c() {
  const { getPrefixCls: e10, direction: t14, csp: n10, iconPrefixCls: o11, theme: r4 } = useConfigContextInject();
  return {
    theme: r4,
    getPrefixCls: e10,
    direction: t14,
    csp: n10,
    iconPrefixCls: o11
  };
}

// node_modules/ant-design-x-vue/es/chunks/helper-chunk.mjs
function c2(e10, o11) {
  const t14 = /* @__PURE__ */ Object.create(null);
  for (const r4 in e10)
    o11.includes(r4) || Object.defineProperty(t14, r4, { enumerable: true, get: () => e10[r4] });
  return t14;
}
function s(e10) {
  return e10 && e10.__esModule && Object.prototype.hasOwnProperty.call(e10, "default") ? e10.default : e10;
}
var a = (e10, o11) => {
  const t14 = e10.__vccOpts || e10;
  for (const [r4, n10] of o11)
    t14[r4] = n10;
  return t14;
};

// node_modules/ant-design-x-vue/es/_util/type.mjs
var a2 = (t14) => {
  const n10 = t14;
  return n10.install = function(e10) {
    e10.component(n10.displayName || n10.name, t14);
  }, t14;
};
function c3(t14) {
  return { type: Object, default: t14 };
}
function i(t14) {
  return { type: Boolean, default: t14 };
}
function u(t14, n10) {
  const e10 = { validator: () => true, default: t14 };
  return e10;
}
function l(t14) {
  return { type: Array, default: t14 };
}
function d(t14) {
  return { type: String, default: t14 };
}
function s2(t14, n10) {
  return t14 ? { type: t14, default: n10 } : u(n10);
}

// node_modules/ant-design-x-vue/es/x-provider/context.mjs
var i2 = Symbol("XProviderContext");
var t = shallowRef();
var P = (e10) => {
  provide(i2, e10), watch(
    e10,
    () => {
      t.value = unref(e10), triggerRef(t);
    },
    { immediate: true, deep: true }
  );
};
var X = () => inject(
  i2,
  computed(() => t.value || {})
);
var l2 = defineComponent({
  props: {
    value: c3()
  },
  setup(e10, { slots: r4 }) {
    return P(computed(() => e10.value)), () => {
      var o11;
      return (o11 = r4.default) == null ? void 0 : o11.call(r4);
    };
  }
});

// node_modules/ant-design-x-vue/es/x-provider/index-chunk.mjs
var w = defineComponent({
  name: "AXProvider",
  inheritAttrs: false,
  __name: "index",
  props: {
    bubble: {},
    conversations: {},
    prompts: {},
    sender: {},
    suggestion: {},
    thoughtChain: {},
    attachments: {},
    welcome: {},
    iconPrefixCls: {},
    getTargetContainer: {},
    getPopupContainer: {},
    prefixCls: {},
    getPrefixCls: {},
    renderEmpty: {},
    transformCellText: {},
    csp: {},
    input: {},
    autoInsertSpaceInButton: {
      type: Boolean
    },
    locale: {},
    pageHeader: {},
    componentSize: {},
    componentDisabled: {
      type: Boolean
    },
    direction: {},
    space: {},
    virtual: {
      type: Boolean
    },
    dropdownMatchSelectWidth: {},
    form: {},
    pagination: {},
    theme: {},
    select: {},
    wave: {}
  },
  setup(e10) {
    const r4 = c2(e10, ["attachments", "bubble", "conversations", "prompts", "sender", "suggestion", "thoughtChain", "welcome"]), t14 = useSlots(), i22 = computed(() => ({
      attachments: e10.attachments,
      bubble: e10.bubble,
      conversations: e10.conversations,
      prompts: e10.prompts,
      sender: e10.sender,
      suggestion: e10.suggestion,
      thoughtChain: e10.thoughtChain,
      welcome: e10.welcome
    })), {
      theme: o11
    } = c(), m13 = computed(() => ({
      ...(o11 == null ? void 0 : o11.value) || {},
      ...r4.theme
    })), c16 = computed(() => {
      var a18;
      return (a18 = t14.default) == null ? void 0 : a18.call(t14);
    });
    return () => createVNode(l2, {
      value: i22.value
    }, {
      default: () => [createVNode(config_provider_default, mergeProps(r4, {
        theme: m13.value
      }), {
        default: () => [c16.value]
      })]
    });
  }
});

// node_modules/ant-design-x-vue/es/x-provider/index.mjs
w.install = function(o11) {
  return o11.component(w.name, w), o11.component("AXConfigProvider", w), o11;
};

// node_modules/ant-design-x-vue/es/_util/hooks/use-x-component-config.mjs
var r = {
  classNames: {},
  styles: {},
  className: "",
  style: {}
};
var c4 = (e10) => {
  const t14 = X();
  return computed(() => ({
    ...r,
    ...unref(t14)[e10]
  }));
};

// node_modules/ant-design-x-vue/es/_util/hooks/use-state.mjs
function f2(n10) {
  const r4 = typeof n10 == "function" ? n10() : n10, o11 = ref(r4);
  function i22(t14) {
    o11.value = t14;
  }
  return [o11, i22];
}

// node_modules/ant-design-x-vue/es/bubble/hooks/useTypedEffect.mjs
function u2(e10) {
  return typeof e10 == "string";
}
var h2 = (e10, t14, d11, f12) => {
  const [g8, o11] = f2(""), [a18, r4] = f2(1), v10 = computed(() => t14.value && u2(e10.value));
  return watch(e10, () => {
    const i22 = unref(g8);
    o11(e10.value), !v10.value && u2(e10.value) ? r4(e10.value.length) : u2(e10.value) && u2(i22) && e10.value.indexOf(i22) !== 0 && r4(1);
  }, { immediate: true }), watch([a18, t14, e10], () => {
    if (v10.value && u2(e10.value) && unref(a18) < e10.value.length) {
      const i22 = setTimeout(() => {
        r4(unref(a18) + d11.value);
      }, f12.value);
      onWatcherCleanup(() => {
        clearTimeout(i22);
      });
    }
  }, { immediate: true }), [computed(() => v10.value && u2(e10.value) ? e10.value.slice(0, unref(a18)) : e10.value), computed(() => v10.value && u2(e10.value) && unref(a18) < e10.value.length)];
};

// node_modules/ant-design-x-vue/es/bubble/hooks/useTypingConfig.mjs
function i3(n10) {
  const r4 = computed(() => !!toValue(n10)), f12 = {
    step: 1,
    interval: 50,
    // set default suffix is empty
    suffix: null
  }, t14 = computed(() => {
    const u16 = toValue(n10);
    return {
      ...f12,
      ...typeof u16 == "object" ? u16 : {}
    };
  });
  return [
    r4,
    computed(() => t14.value.step),
    computed(() => t14.value.interval),
    computed(() => t14.value.suffix)
  ];
}

// node_modules/ant-design-x-vue/es/bubble/loading.mjs
var n = defineComponent({
  name: "AXBubbleLoading",
  __name: "loading",
  props: {
    prefixCls: null
  },
  setup(e10) {
    return () => createVNode("span", {
      class: `${e10.prefixCls}-dot`
    }, [createVNode("i", {
      class: `${e10.prefixCls}-dot-item`,
      key: "item-1"
    }, null), createVNode("i", {
      class: `${e10.prefixCls}-dot-item`,
      key: "item-2"
    }, null), createVNode("i", {
      class: `${e10.prefixCls}-dot-item`,
      key: "item-3"
    }, null)]);
  }
});

// node_modules/ant-design-x-vue/es/_util/cssinjs/Cache.mjs
var c5 = "%";
var i4 = class {
  constructor(t14) {
    this.cache = /* @__PURE__ */ new Map(), this.instanceId = t14;
  }
  get(t14) {
    return this.cache.get(Array.isArray(t14) ? t14.join(c5) : t14) || null;
  }
  update(t14, n10) {
    const e10 = Array.isArray(t14) ? t14.join(c5) : t14, s16 = this.cache.get(e10), a18 = n10(s16);
    a18 === null ? this.cache.delete(e10) : this.cache.set(e10, a18);
  }
};

// node_modules/ant-design-x-vue/es/_util/cssinjs/StyleContext.mjs
var q = "data-token-hash";
var h3 = "data-css-hash";
var i5 = "__cssinjs_instance__";
function s3() {
  const e10 = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    const o11 = document.body.querySelectorAll(`style[${h3}]`) || [], {
      firstChild: n10
    } = document.head;
    Array.from(o11).forEach((t14) => {
      t14[i5] = t14[i5] || e10, t14[i5] === e10 && document.head.insertBefore(t14, n10);
    });
    const r4 = {};
    Array.from(document.querySelectorAll(`style[${h3}]`)).forEach((t14) => {
      var a18;
      const c16 = t14.getAttribute(h3);
      r4[c16] ? t14[i5] === e10 && ((a18 = t14.parentNode) == null || a18.removeChild(t14)) : r4[c16] = true;
    });
  }
  return new i4(e10);
}
var p = Symbol("StyleContextKey");
var w2 = () => {
  var n10, r4, t14;
  const e10 = getCurrentInstance();
  let o11;
  if (e10 && e10.appContext) {
    const c16 = (t14 = (r4 = (n10 = e10.appContext) == null ? void 0 : n10.config) == null ? void 0 : r4.globalProperties) == null ? void 0 : t14.__ANTDV_CSSINJS_CACHE__;
    c16 ? o11 = c16 : (o11 = s3(), e10.appContext.config.globalProperties && (e10.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = o11));
  } else
    o11 = s3();
  return o11;
};
var m = {
  cache: s3(),
  defaultCache: true,
  hashPriority: "low"
};
var y = () => {
  const e10 = w2();
  return inject(p, shallowRef({
    ...m,
    cache: e10
  }));
};
var S = (e10) => {
  const o11 = y(), n10 = shallowRef({
    ...m,
    cache: s3()
  });
  return watch([() => unref(e10), o11], () => {
    const r4 = {
      ...o11.value
    }, t14 = unref(e10);
    Object.keys(t14).forEach((a18) => {
      const _8 = t14[a18];
      t14[a18] !== void 0 && (r4[a18] = _8);
    });
    const {
      cache: c16
    } = t14;
    r4.cache = r4.cache || s3(), r4.defaultCache = !c16 && o11.value.defaultCache, n10.value = r4;
  }, {
    immediate: true
  }), provide(p, n10), n10;
};
var H = () => ({
  autoClear: i(),
  /** @private Test only. Not work in production. */
  mock: d(),
  /**
   * Only set when you need ssr to extract style on you own.
   * If not provided, it will auto create <style /> on the end of Provider in server side.
   */
  cache: c3(),
  /** Tell children that this context is default generated context */
  defaultCache: i(),
  /** Use `:where` selector to reduce hashId css selector priority */
  hashPriority: d(),
  /** Tell cssinjs where to inject style in */
  container: s2(),
  /** Component wil render inline  `<style />` for fallback in SSR. Not recommend. */
  ssrInline: i(),
  /** Transform css before inject in document. Please note that `transformers` do not support dynamic update */
  transformers: l(),
  /**
   * Linters to lint css before inject in document.
   * Styles will be linted after transforming.
   * Please note that `linters` do not support dynamic update.
   */
  linters: l()
});
var R = a2(defineComponent({
  name: "AXStyleProvider",
  inheritAttrs: false,
  props: H(),
  setup(e10, {
    slots: o11
  }) {
    return S(e10), () => h(
      StyleProvider,
      // @ts-ignore
      e10,
      () => {
        var n10;
        return (n10 = o11.default) == null ? void 0 : n10.call(o11);
      }
    );
  }
}));
var M = {
  useStyleInject: y,
  useStyleProvider: S,
  StyleProvider: R
};

// node_modules/ant-design-x-vue/es/chunks/module-chunk.mjs
function fa(e10) {
  for (var t14 = 0, r4, n10 = 0, a18 = e10.length; a18 >= 4; ++n10, a18 -= 4)
    r4 = e10.charCodeAt(n10) & 255 | (e10.charCodeAt(++n10) & 255) << 8 | (e10.charCodeAt(++n10) & 255) << 16 | (e10.charCodeAt(++n10) & 255) << 24, r4 = /* Math.imul(k, m): */
    (r4 & 65535) * 1540483477 + ((r4 >>> 16) * 59797 << 16), r4 ^= /* k >>> r: */
    r4 >>> 24, t14 = /* Math.imul(k, m): */
    (r4 & 65535) * 1540483477 + ((r4 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t14 & 65535) * 1540483477 + ((t14 >>> 16) * 59797 << 16);
  switch (a18) {
    case 3:
      t14 ^= (e10.charCodeAt(n10 + 2) & 255) << 16;
    case 2:
      t14 ^= (e10.charCodeAt(n10 + 1) & 255) << 8;
    case 1:
      t14 ^= e10.charCodeAt(n10) & 255, t14 = /* Math.imul(h, m): */
      (t14 & 65535) * 1540483477 + ((t14 >>> 16) * 59797 << 16);
  }
  return t14 ^= t14 >>> 13, t14 = /* Math.imul(h, m): */
  (t14 & 65535) * 1540483477 + ((t14 >>> 16) * 59797 << 16), ((t14 ^ t14 >>> 15) >>> 0).toString(36);
}
var ua = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var bt = "comm";
var pt = "rule";
var mt = "decl";
var nr = "@import";
var ar = "@keyframes";
var ir = "@layer";
var vt = Math.abs;
var Ce = String.fromCharCode;
function yt(e10) {
  return e10.trim();
}
function ee(e10, t14, r4) {
  return e10.replace(t14, r4);
}
function or(e10, t14, r4) {
  return e10.indexOf(t14, r4);
}
function U(e10, t14) {
  return e10.charCodeAt(t14) | 0;
}
function L(e10, t14, r4) {
  return e10.slice(t14, r4);
}
function T(e10) {
  return e10.length;
}
function cr(e10) {
  return e10.length;
}
function Q(e10, t14) {
  return t14.push(e10), e10;
}
var ie = 1;
var N = 1;
var Ot = 0;
var j = 0;
var v = 0;
var B = "";
function Pe(e10, t14, r4, n10, a18, i22, c16, o11) {
  return { value: e10, root: t14, parent: r4, type: n10, props: a18, children: i22, line: ie, column: N, length: c16, return: "", siblings: o11 };
}
function lr() {
  return v;
}
function sr() {
  return v = j > 0 ? U(B, --j) : 0, N--, v === 10 && (N = 1, ie--), v;
}
function A() {
  return v = j < Ot ? U(B, j++) : 0, N++, v === 10 && (N = 1, ie++), v;
}
function H2() {
  return U(B, j);
}
function te() {
  return j;
}
function oe(e10, t14) {
  return L(B, e10, t14);
}
function Z(e10) {
  switch (e10) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function fr(e10) {
  return ie = N = 1, Ot = T(B = e10), j = 0, [];
}
function ur(e10) {
  return B = "", e10;
}
function le(e10) {
  return yt(oe(j - 1, ve(e10 === 91 ? e10 + 2 : e10 === 40 ? e10 + 1 : e10)));
}
function hr(e10) {
  for (; (v = H2()) && v < 33; )
    A();
  return Z(e10) > 2 || Z(v) > 3 ? "" : " ";
}
function dr(e10, t14) {
  for (; --t14 && A() && !(v < 48 || v > 102 || v > 57 && v < 65 || v > 70 && v < 97); )
    ;
  return oe(e10, te() + (t14 < 6 && H2() == 32 && A() == 32));
}
function ve(e10) {
  for (; A(); )
    switch (v) {
      case e10:
        return j;
      case 34:
      case 39:
        e10 !== 34 && e10 !== 39 && ve(v);
        break;
      case 40:
        e10 === 41 && ve(e10);
        break;
      case 92:
        A();
        break;
    }
  return j;
}
function gr(e10, t14) {
  for (; A() && e10 + v !== 57; )
    if (e10 + v === 84 && H2() === 47)
      break;
  return "/*" + oe(t14, j - 1) + "*" + Ce(e10 === 47 ? e10 : A());
}
function br(e10) {
  for (; !Z(H2()); )
    A();
  return oe(e10, j);
}
function ha(e10) {
  return ur(re("", null, null, null, [""], e10 = fr(e10), 0, [0], e10));
}
function re(e10, t14, r4, n10, a18, i22, c16, o11, l20) {
  for (var f12 = 0, u16 = 0, s16 = c16, d11 = 0, y9 = 0, p9 = 0, m13 = 1, I5 = 1, S5 = 1, O4 = 0, F = "", $3 = a18, z2 = i22, C6 = n10, h16 = F; I5; )
    switch (p9 = O4, O4 = A()) {
      case 40:
        if (p9 != 108 && U(h16, s16 - 1) == 58) {
          or(h16 += ee(le(O4), "&", "&\f"), "&\f", vt(f12 ? o11[f12 - 1] : 0)) != -1 && (S5 = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        h16 += le(O4);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        h16 += hr(p9);
        break;
      case 92:
        h16 += dr(te() - 1, 7);
        continue;
      case 47:
        switch (H2()) {
          case 42:
          case 47:
            Q(pr(gr(A(), te()), t14, r4, l20), l20), (Z(p9 || 1) == 5 || Z(H2() || 1) == 5) && T(h16) && L(h16, -1, void 0) !== " " && (h16 += " ");
            break;
          default:
            h16 += "/";
        }
        break;
      case 123 * m13:
        o11[f12++] = T(h16) * S5;
      case 125 * m13:
      case 59:
      case 0:
        switch (O4) {
          case 0:
          case 125:
            I5 = 0;
          case 59 + u16:
            S5 == -1 && (h16 = ee(h16, /\f/g, "")), y9 > 0 && (T(h16) - s16 || m13 === 0 && p9 === 47) && Q(y9 > 32 ? Fe(h16 + ";", n10, r4, s16 - 1, l20) : Fe(ee(h16, " ", "") + ";", n10, r4, s16 - 2, l20), l20);
            break;
          case 59:
            h16 += ";";
          default:
            if (Q(C6 = Ae(h16, t14, r4, f12, u16, a18, o11, F, $3 = [], z2 = [], s16, i22), i22), O4 === 123)
              if (u16 === 0)
                re(h16, t14, C6, C6, $3, i22, s16, o11, z2);
              else
                switch (d11 === 99 && U(h16, 3) === 110 ? 100 : d11) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    re(e10, C6, C6, n10 && Q(Ae(e10, C6, C6, 0, 0, a18, o11, F, a18, $3 = [], s16, z2), z2), a18, z2, s16, o11, n10 ? $3 : z2);
                    break;
                  default:
                    re(h16, C6, C6, C6, [""], z2, 0, o11, z2);
                }
        }
        f12 = u16 = y9 = 0, m13 = S5 = 1, F = h16 = "", s16 = c16;
        break;
      case 58:
        s16 = 1 + T(h16), y9 = p9;
      default:
        if (m13 < 1) {
          if (O4 == 123)
            --m13;
          else if (O4 == 125 && m13++ == 0 && sr() == 125)
            continue;
        }
        switch (h16 += Ce(O4), O4 * m13) {
          case 38:
            S5 = u16 > 0 ? 1 : (h16 += "\f", -1);
            break;
          case 44:
            o11[f12++] = (T(h16) - 1) * S5, S5 = 1;
            break;
          case 64:
            H2() === 45 && (h16 += le(A())), d11 = H2(), u16 = s16 = T(F = h16 += br(te())), O4++;
            break;
          case 45:
            p9 === 45 && T(h16) == 2 && (m13 = 0);
        }
    }
  return i22;
}
function Ae(e10, t14, r4, n10, a18, i22, c16, o11, l20, f12, u16, s16) {
  for (var d11 = a18 - 1, y9 = a18 === 0 ? i22 : [""], p9 = cr(y9), m13 = 0, I5 = 0, S5 = 0; m13 < n10; ++m13)
    for (var O4 = 0, F = L(e10, d11 + 1, d11 = vt(I5 = c16[m13])), $3 = e10; O4 < p9; ++O4)
      ($3 = yt(I5 > 0 ? y9[O4] + " " + F : ee(F, /&\f/g, y9[O4]))) && (l20[S5++] = $3);
  return Pe(e10, t14, r4, a18 === 0 ? pt : o11, l20, f12, u16, s16);
}
function pr(e10, t14, r4, n10) {
  return Pe(e10, t14, r4, bt, Ce(lr()), L(e10, 2, -2), 0, n10);
}
function Fe(e10, t14, r4, n10, a18) {
  return Pe(e10, t14, r4, mt, L(e10, 0, n10), L(e10, n10 + 1, -1), n10, a18);
}
function $e(e10, t14) {
  for (var r4 = "", n10 = 0; n10 < e10.length; n10++)
    r4 += t14(e10[n10], n10, e10, t14) || "";
  return r4;
}
function da(e10, t14, r4, n10) {
  switch (e10.type) {
    case ir:
      if (e10.children.length) break;
    case nr:
    case mt:
      return e10.return = e10.return || e10.value;
    case bt:
      return "";
    case ar:
      return e10.return = e10.value + "{" + $e(e10.children, n10) + "}";
    case pt:
      if (!T(e10.value = e10.props.join(","))) return "";
  }
  return T(r4 = $e(e10.children, n10)) ? e10.return = e10.value + "{" + r4 + "}" : "";
}
var se = { exports: {} };
var ze;
function mr() {
  return ze || (ze = 1, function(e10) {
    (function() {
      var t14 = {}.hasOwnProperty;
      function r4() {
        for (var i22 = "", c16 = 0; c16 < arguments.length; c16++) {
          var o11 = arguments[c16];
          o11 && (i22 = a18(i22, n10(o11)));
        }
        return i22;
      }
      function n10(i22) {
        if (typeof i22 == "string" || typeof i22 == "number")
          return i22;
        if (typeof i22 != "object")
          return "";
        if (Array.isArray(i22))
          return r4.apply(null, i22);
        if (i22.toString !== Object.prototype.toString && !i22.toString.toString().includes("[native code]"))
          return i22.toString();
        var c16 = "";
        for (var o11 in i22)
          t14.call(i22, o11) && i22[o11] && (c16 = a18(c16, o11));
        return c16;
      }
      function a18(i22, c16) {
        return c16 ? i22 ? i22 + " " + c16 : i22 + c16 : i22;
      }
      e10.exports ? (r4.default = r4, e10.exports = r4) : window.classNames = r4;
    })();
  }(se)), se.exports;
}
var vr = mr();
var ga = s(vr);
function _(e10, t14) {
  yr(e10) && (e10 = "100%");
  var r4 = Or(e10);
  return e10 = t14 === 360 ? e10 : Math.min(t14, Math.max(0, parseFloat(e10))), r4 && (e10 = parseInt(String(e10 * t14), 10) / 100), Math.abs(e10 - t14) < 1e-6 ? 1 : (t14 === 360 ? e10 = (e10 < 0 ? e10 % t14 + t14 : e10 % t14) / parseFloat(String(t14)) : e10 = e10 % t14 / parseFloat(String(t14)), e10);
}
function yr(e10) {
  return typeof e10 == "string" && e10.indexOf(".") !== -1 && parseFloat(e10) === 1;
}
function Or(e10) {
  return typeof e10 == "string" && e10.indexOf("%") !== -1;
}
function wr(e10) {
  return e10 = parseFloat(e10), (isNaN(e10) || e10 < 0 || e10 > 1) && (e10 = 1), e10;
}
function J(e10) {
  return e10 <= 1 ? "".concat(Number(e10) * 100, "%") : e10;
}
function fe(e10) {
  return e10.length === 1 ? "0" + e10 : String(e10);
}
function Sr(e10, t14, r4) {
  return {
    r: _(e10, 255) * 255,
    g: _(t14, 255) * 255,
    b: _(r4, 255) * 255
  };
}
function ue(e10, t14, r4) {
  return r4 < 0 && (r4 += 1), r4 > 1 && (r4 -= 1), r4 < 1 / 6 ? e10 + (t14 - e10) * (6 * r4) : r4 < 1 / 2 ? t14 : r4 < 2 / 3 ? e10 + (t14 - e10) * (2 / 3 - r4) * 6 : e10;
}
function xr(e10, t14, r4) {
  var n10, a18, i22;
  if (e10 = _(e10, 360), t14 = _(t14, 100), r4 = _(r4, 100), t14 === 0)
    a18 = r4, i22 = r4, n10 = r4;
  else {
    var c16 = r4 < 0.5 ? r4 * (1 + t14) : r4 + t14 - r4 * t14, o11 = 2 * r4 - c16;
    n10 = ue(o11, c16, e10 + 1 / 3), a18 = ue(o11, c16, e10), i22 = ue(o11, c16, e10 - 1 / 3);
  }
  return { r: n10 * 255, g: a18 * 255, b: i22 * 255 };
}
function Cr(e10, t14, r4) {
  e10 = _(e10, 255), t14 = _(t14, 255), r4 = _(r4, 255);
  var n10 = Math.max(e10, t14, r4), a18 = Math.min(e10, t14, r4), i22 = 0, c16 = n10, o11 = n10 - a18, l20 = n10 === 0 ? 0 : o11 / n10;
  if (n10 === a18)
    i22 = 0;
  else {
    switch (n10) {
      case e10:
        i22 = (t14 - r4) / o11 + (t14 < r4 ? 6 : 0);
        break;
      case t14:
        i22 = (r4 - e10) / o11 + 2;
        break;
      case r4:
        i22 = (e10 - t14) / o11 + 4;
        break;
    }
    i22 /= 6;
  }
  return { h: i22, s: l20, v: c16 };
}
function Pr(e10, t14, r4) {
  e10 = _(e10, 360) * 6, t14 = _(t14, 100), r4 = _(r4, 100);
  var n10 = Math.floor(e10), a18 = e10 - n10, i22 = r4 * (1 - t14), c16 = r4 * (1 - a18 * t14), o11 = r4 * (1 - (1 - a18) * t14), l20 = n10 % 6, f12 = [r4, c16, i22, i22, o11, r4][l20], u16 = [o11, r4, r4, c16, i22, i22][l20], s16 = [i22, i22, o11, r4, r4, c16][l20];
  return { r: f12 * 255, g: u16 * 255, b: s16 * 255 };
}
function _r(e10, t14, r4, n10) {
  var a18 = [
    fe(Math.round(e10).toString(16)),
    fe(Math.round(t14).toString(16)),
    fe(Math.round(r4).toString(16))
  ];
  return a18.join("");
}
function Te(e10) {
  return x(e10) / 255;
}
function x(e10) {
  return parseInt(e10, 16);
}
var Ee = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function D(e10) {
  var t14 = { r: 0, g: 0, b: 0 }, r4 = 1, n10 = null, a18 = null, i22 = null, c16 = false, o11 = false;
  return typeof e10 == "string" && (e10 = Ar(e10)), typeof e10 == "object" && (E(e10.r) && E(e10.g) && E(e10.b) ? (t14 = Sr(e10.r, e10.g, e10.b), c16 = true, o11 = String(e10.r).substr(-1) === "%" ? "prgb" : "rgb") : E(e10.h) && E(e10.s) && E(e10.v) ? (n10 = J(e10.s), a18 = J(e10.v), t14 = Pr(e10.h, n10, a18), c16 = true, o11 = "hsv") : E(e10.h) && E(e10.s) && E(e10.l) && (n10 = J(e10.s), i22 = J(e10.l), t14 = xr(e10.h, n10, i22), c16 = true, o11 = "hsl"), Object.prototype.hasOwnProperty.call(e10, "a") && (r4 = e10.a)), r4 = wr(r4), {
    ok: c16,
    format: e10.format || o11,
    r: Math.min(255, Math.max(t14.r, 0)),
    g: Math.min(255, Math.max(t14.g, 0)),
    b: Math.min(255, Math.max(t14.b, 0)),
    a: r4
  };
}
var jr = "[-\\+]?\\d+%?";
var Mr = "[-\\+]?\\d*\\.\\d+%?";
var k = "(?:".concat(Mr, ")|(?:").concat(jr, ")");
var he = "[\\s|\\(]+(".concat(k, ")[,|\\s]+(").concat(k, ")[,|\\s]+(").concat(k, ")\\s*\\)?");
var de = "[\\s|\\(]+(".concat(k, ")[,|\\s]+(").concat(k, ")[,|\\s]+(").concat(k, ")[,|\\s]+(").concat(k, ")\\s*\\)?");
var M2 = {
  CSS_UNIT: new RegExp(k),
  rgb: new RegExp("rgb" + he),
  rgba: new RegExp("rgba" + de),
  hsl: new RegExp("hsl" + he),
  hsla: new RegExp("hsla" + de),
  hsv: new RegExp("hsv" + he),
  hsva: new RegExp("hsva" + de),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Ar(e10) {
  if (e10 = e10.trim().toLowerCase(), e10.length === 0)
    return false;
  var t14 = false;
  if (Ee[e10])
    e10 = Ee[e10], t14 = true;
  else if (e10 === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r4 = M2.rgb.exec(e10);
  return r4 ? { r: r4[1], g: r4[2], b: r4[3] } : (r4 = M2.rgba.exec(e10), r4 ? { r: r4[1], g: r4[2], b: r4[3], a: r4[4] } : (r4 = M2.hsl.exec(e10), r4 ? { h: r4[1], s: r4[2], l: r4[3] } : (r4 = M2.hsla.exec(e10), r4 ? { h: r4[1], s: r4[2], l: r4[3], a: r4[4] } : (r4 = M2.hsv.exec(e10), r4 ? { h: r4[1], s: r4[2], v: r4[3] } : (r4 = M2.hsva.exec(e10), r4 ? { h: r4[1], s: r4[2], v: r4[3], a: r4[4] } : (r4 = M2.hex8.exec(e10), r4 ? {
    r: x(r4[1]),
    g: x(r4[2]),
    b: x(r4[3]),
    a: Te(r4[4]),
    format: t14 ? "name" : "hex8"
  } : (r4 = M2.hex6.exec(e10), r4 ? {
    r: x(r4[1]),
    g: x(r4[2]),
    b: x(r4[3]),
    format: t14 ? "name" : "hex"
  } : (r4 = M2.hex4.exec(e10), r4 ? {
    r: x(r4[1] + r4[1]),
    g: x(r4[2] + r4[2]),
    b: x(r4[3] + r4[3]),
    a: Te(r4[4] + r4[4]),
    format: t14 ? "name" : "hex8"
  } : (r4 = M2.hex3.exec(e10), r4 ? {
    r: x(r4[1] + r4[1]),
    g: x(r4[2] + r4[2]),
    b: x(r4[3] + r4[3]),
    format: t14 ? "name" : "hex"
  } : false)))))))));
}
function E(e10) {
  return !!M2.CSS_UNIT.exec(String(e10));
}
var X2 = 2;
var He = 0.16;
var Fr = 0.05;
var $r = 0.05;
var zr = 0.15;
var wt = 5;
var St = 4;
var Tr = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function ke(e10) {
  var t14 = e10.r, r4 = e10.g, n10 = e10.b, a18 = Cr(t14, r4, n10);
  return {
    h: a18.h * 360,
    s: a18.s,
    v: a18.v
  };
}
function K(e10) {
  var t14 = e10.r, r4 = e10.g, n10 = e10.b;
  return "#".concat(_r(t14, r4, n10));
}
function Er(e10, t14, r4) {
  var n10 = r4 / 100, a18 = {
    r: (t14.r - e10.r) * n10 + e10.r,
    g: (t14.g - e10.g) * n10 + e10.g,
    b: (t14.b - e10.b) * n10 + e10.b
  };
  return a18;
}
function Re(e10, t14, r4) {
  var n10;
  return Math.round(e10.h) >= 60 && Math.round(e10.h) <= 240 ? n10 = r4 ? Math.round(e10.h) - X2 * t14 : Math.round(e10.h) + X2 * t14 : n10 = r4 ? Math.round(e10.h) + X2 * t14 : Math.round(e10.h) - X2 * t14, n10 < 0 ? n10 += 360 : n10 >= 360 && (n10 -= 360), n10;
}
function Ie(e10, t14, r4) {
  if (e10.h === 0 && e10.s === 0)
    return e10.s;
  var n10;
  return r4 ? n10 = e10.s - He * t14 : t14 === St ? n10 = e10.s + He : n10 = e10.s + Fr * t14, n10 > 1 && (n10 = 1), r4 && t14 === wt && n10 > 0.1 && (n10 = 0.1), n10 < 0.06 && (n10 = 0.06), Number(n10.toFixed(2));
}
function Ve(e10, t14, r4) {
  var n10;
  return r4 ? n10 = e10.v + $r * t14 : n10 = e10.v - zr * t14, n10 > 1 && (n10 = 1), Number(n10.toFixed(2));
}
function ye(e10) {
  for (var t14 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r4 = [], n10 = D(e10), a18 = wt; a18 > 0; a18 -= 1) {
    var i22 = ke(n10), c16 = K(D({
      h: Re(i22, a18, true),
      s: Ie(i22, a18, true),
      v: Ve(i22, a18, true)
    }));
    r4.push(c16);
  }
  r4.push(K(n10));
  for (var o11 = 1; o11 <= St; o11 += 1) {
    var l20 = ke(n10), f12 = K(D({
      h: Re(l20, o11),
      s: Ie(l20, o11),
      v: Ve(l20, o11)
    }));
    r4.push(f12);
  }
  return t14.theme === "dark" ? Tr.map(function(u16) {
    var s16 = u16.index, d11 = u16.opacity, y9 = K(Er(D(t14.backgroundColor || "#141414"), D(r4[s16]), d11 * 100));
    return y9;
  }) : r4;
}
var ge = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
};
var ne = {};
var be = {};
Object.keys(ge).forEach(function(e10) {
  ne[e10] = ye(ge[e10]), ne[e10].primary = ne[e10][5], be[e10] = ye(ge[e10], {
    theme: "dark",
    backgroundColor: "#141414"
  }), be[e10].primary = be[e10][5];
});
var Hr = ne.blue;
var kr = Symbol("iconContext");
var xt = function() {
  return inject(kr, {
    prefixCls: ref("anticon"),
    rootClassName: ref(""),
    csp: ref()
  });
};
function _e() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Rr(e10, t14) {
  return e10 && e10.contains ? e10.contains(t14) : false;
}
var Le = "data-vc-order";
var Ir = "vc-icon-key";
var Oe = /* @__PURE__ */ new Map();
function Ct() {
  var e10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t14 = e10.mark;
  return t14 ? t14.startsWith("data-") ? t14 : "data-".concat(t14) : Ir;
}
function je(e10) {
  if (e10.attachTo)
    return e10.attachTo;
  var t14 = document.querySelector("head");
  return t14 || document.body;
}
function Vr(e10) {
  return e10 === "queue" ? "prependQueue" : e10 ? "prepend" : "append";
}
function Pt(e10) {
  return Array.from((Oe.get(e10) || e10).children).filter(function(t14) {
    return t14.tagName === "STYLE";
  });
}
function _t(e10) {
  var t14 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!_e())
    return null;
  var r4 = t14.csp, n10 = t14.prepend, a18 = document.createElement("style");
  a18.setAttribute(Le, Vr(n10)), r4 && r4.nonce && (a18.nonce = r4.nonce), a18.innerHTML = e10;
  var i22 = je(t14), c16 = i22.firstChild;
  if (n10) {
    if (n10 === "queue") {
      var o11 = Pt(i22).filter(function(l20) {
        return ["prepend", "prependQueue"].includes(l20.getAttribute(Le));
      });
      if (o11.length)
        return i22.insertBefore(a18, o11[o11.length - 1].nextSibling), a18;
    }
    i22.insertBefore(a18, c16);
  } else
    i22.appendChild(a18);
  return a18;
}
function Lr(e10) {
  var t14 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r4 = je(t14);
  return Pt(r4).find(function(n10) {
    return n10.getAttribute(Ct(t14)) === e10;
  });
}
function Nr(e10, t14) {
  var r4 = Oe.get(e10);
  if (!r4 || !Rr(document, r4)) {
    var n10 = _t("", t14), a18 = n10.parentNode;
    Oe.set(e10, a18), e10.removeChild(n10);
  }
}
function Br(e10, t14) {
  var r4 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n10 = je(r4);
  Nr(n10, r4);
  var a18 = Lr(t14, r4);
  if (a18)
    return r4.csp && r4.csp.nonce && a18.nonce !== r4.csp.nonce && (a18.nonce = r4.csp.nonce), a18.innerHTML !== e10 && (a18.innerHTML = e10), a18;
  var i22 = _t(e10, r4);
  return i22.setAttribute(Ct(r4), t14), i22;
}
function Ne(e10) {
  for (var t14 = 1; t14 < arguments.length; t14++) {
    var r4 = arguments[t14] != null ? Object(arguments[t14]) : {}, n10 = Object.keys(r4);
    typeof Object.getOwnPropertySymbols == "function" && (n10 = n10.concat(Object.getOwnPropertySymbols(r4).filter(function(a18) {
      return Object.getOwnPropertyDescriptor(r4, a18).enumerable;
    }))), n10.forEach(function(a18) {
      Dr(e10, a18, r4[a18]);
    });
  }
  return e10;
}
function Dr(e10, t14, r4) {
  return t14 in e10 ? Object.defineProperty(e10, t14, { value: r4, enumerable: true, configurable: true, writable: true }) : e10[t14] = r4, e10;
}
function Be(e10) {
  return typeof e10 == "object" && typeof e10.name == "string" && typeof e10.theme == "string" && (typeof e10.icon == "object" || typeof e10.icon == "function");
}
function we(e10, t14, r4) {
  return r4 ? h(e10.tag, Ne({
    key: t14
  }, r4, e10.attrs), (e10.children || []).map(function(n10, a18) {
    return we(n10, "".concat(t14, "-").concat(e10.tag, "-").concat(a18));
  })) : h(e10.tag, Ne({
    key: t14
  }, e10.attrs), (e10.children || []).map(function(n10, a18) {
    return we(n10, "".concat(t14, "-").concat(e10.tag, "-").concat(a18));
  }));
}
function jt(e10) {
  return ye(e10)[0];
}
function Mt(e10) {
  return e10 ? Array.isArray(e10) ? e10 : [e10] : [];
}
var Wr = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
function At(e10) {
  return e10 && e10.getRootNode && e10.getRootNode();
}
function qr(e10) {
  return _e() ? At(e10) instanceof ShadowRoot : false;
}
function Gr(e10) {
  return qr(e10) ? At(e10) : null;
}
var Ur = function() {
  var t14 = xt(), r4 = t14.prefixCls, n10 = t14.csp, a18 = getCurrentInstance(), i22 = Wr;
  r4 && (i22 = i22.replace(/anticon/g, r4.value)), nextTick(function() {
    if (_e()) {
      var c16 = a18.vnode.el, o11 = Gr(c16);
      Br(i22, "@ant-design-vue-icons", {
        prepend: true,
        csp: n10.value,
        attachTo: o11
      });
    }
  });
};
var Zr = ["icon", "primaryColor", "secondaryColor"];
function Yr(e10, t14) {
  if (e10 == null) return {};
  var r4 = Qr(e10, t14), n10, a18;
  if (Object.getOwnPropertySymbols) {
    var i22 = Object.getOwnPropertySymbols(e10);
    for (a18 = 0; a18 < i22.length; a18++)
      n10 = i22[a18], !(t14.indexOf(n10) >= 0) && Object.prototype.propertyIsEnumerable.call(e10, n10) && (r4[n10] = e10[n10]);
  }
  return r4;
}
function Qr(e10, t14) {
  if (e10 == null) return {};
  var r4 = {}, n10 = Object.keys(e10), a18, i22;
  for (i22 = 0; i22 < n10.length; i22++)
    a18 = n10[i22], !(t14.indexOf(a18) >= 0) && (r4[a18] = e10[a18]);
  return r4;
}
function ae(e10) {
  for (var t14 = 1; t14 < arguments.length; t14++) {
    var r4 = arguments[t14] != null ? Object(arguments[t14]) : {}, n10 = Object.keys(r4);
    typeof Object.getOwnPropertySymbols == "function" && (n10 = n10.concat(Object.getOwnPropertySymbols(r4).filter(function(a18) {
      return Object.getOwnPropertyDescriptor(r4, a18).enumerable;
    }))), n10.forEach(function(a18) {
      Jr(e10, a18, r4[a18]);
    });
  }
  return e10;
}
function Jr(e10, t14, r4) {
  return t14 in e10 ? Object.defineProperty(e10, t14, { value: r4, enumerable: true, configurable: true, writable: true }) : e10[t14] = r4, e10;
}
var G = reactive({
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: false
});
function Xr(e10) {
  var t14 = e10.primaryColor, r4 = e10.secondaryColor;
  G.primaryColor = t14, G.secondaryColor = r4 || jt(t14), G.calculated = !!r4;
}
function Kr() {
  return ae({}, G);
}
var R2 = function(t14, r4) {
  var n10 = ae({}, t14, r4.attrs), a18 = n10.icon, i22 = n10.primaryColor, c16 = n10.secondaryColor, o11 = Yr(n10, Zr), l20 = G;
  if (i22 && (l20 = {
    primaryColor: i22,
    secondaryColor: c16 || jt(i22)
  }), Be(a18), !Be(a18))
    return null;
  var f12 = a18;
  return f12 && typeof f12.icon == "function" && (f12 = ae({}, f12, {
    icon: f12.icon(l20.primaryColor, l20.secondaryColor)
  })), we(f12.icon, "svg-".concat(f12.name), ae({}, o11, {
    "data-icon": f12.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
R2.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
R2.inheritAttrs = false;
R2.displayName = "IconBase";
R2.getTwoToneColors = Kr;
R2.setTwoToneColors = Xr;
function en(e10, t14) {
  return an(e10) || nn(e10, t14) || rn(e10, t14) || tn();
}
function tn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rn(e10, t14) {
  if (e10) {
    if (typeof e10 == "string") return De(e10, t14);
    var r4 = Object.prototype.toString.call(e10).slice(8, -1);
    if (r4 === "Object" && e10.constructor && (r4 = e10.constructor.name), r4 === "Map" || r4 === "Set") return Array.from(e10);
    if (r4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4)) return De(e10, t14);
  }
}
function De(e10, t14) {
  (t14 == null || t14 > e10.length) && (t14 = e10.length);
  for (var r4 = 0, n10 = new Array(t14); r4 < t14; r4++)
    n10[r4] = e10[r4];
  return n10;
}
function nn(e10, t14) {
  var r4 = e10 == null ? null : typeof Symbol < "u" && e10[Symbol.iterator] || e10["@@iterator"];
  if (r4 != null) {
    var n10 = [], a18 = true, i22 = false, c16, o11;
    try {
      for (r4 = r4.call(e10); !(a18 = (c16 = r4.next()).done) && (n10.push(c16.value), !(t14 && n10.length === t14)); a18 = true)
        ;
    } catch (l20) {
      i22 = true, o11 = l20;
    } finally {
      try {
        !a18 && r4.return != null && r4.return();
      } finally {
        if (i22) throw o11;
      }
    }
    return n10;
  }
}
function an(e10) {
  if (Array.isArray(e10)) return e10;
}
function Ft(e10) {
  var t14 = Mt(e10), r4 = en(t14, 2), n10 = r4[0], a18 = r4[1];
  return R2.setTwoToneColors({
    primaryColor: n10,
    secondaryColor: a18
  });
}
function on() {
  var e10 = R2.getTwoToneColors();
  return e10.calculated ? [e10.primaryColor, e10.secondaryColor] : e10.primaryColor;
}
var cn = defineComponent({
  name: "InsertStyles",
  setup: function() {
    return Ur(), function() {
      return null;
    };
  }
});
var ln = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function sn(e10, t14) {
  return dn(e10) || hn(e10, t14) || un(e10, t14) || fn();
}
function fn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function un(e10, t14) {
  if (e10) {
    if (typeof e10 == "string") return We(e10, t14);
    var r4 = Object.prototype.toString.call(e10).slice(8, -1);
    if (r4 === "Object" && e10.constructor && (r4 = e10.constructor.name), r4 === "Map" || r4 === "Set") return Array.from(e10);
    if (r4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4)) return We(e10, t14);
  }
}
function We(e10, t14) {
  (t14 == null || t14 > e10.length) && (t14 = e10.length);
  for (var r4 = 0, n10 = new Array(t14); r4 < t14; r4++)
    n10[r4] = e10[r4];
  return n10;
}
function hn(e10, t14) {
  var r4 = e10 == null ? null : typeof Symbol < "u" && e10[Symbol.iterator] || e10["@@iterator"];
  if (r4 != null) {
    var n10 = [], a18 = true, i22 = false, c16, o11;
    try {
      for (r4 = r4.call(e10); !(a18 = (c16 = r4.next()).done) && (n10.push(c16.value), !(t14 && n10.length === t14)); a18 = true)
        ;
    } catch (l20) {
      i22 = true, o11 = l20;
    } finally {
      try {
        !a18 && r4.return != null && r4.return();
      } finally {
        if (i22) throw o11;
      }
    }
    return n10;
  }
}
function dn(e10) {
  if (Array.isArray(e10)) return e10;
}
function qe(e10) {
  for (var t14 = 1; t14 < arguments.length; t14++) {
    var r4 = arguments[t14] != null ? Object(arguments[t14]) : {}, n10 = Object.keys(r4);
    typeof Object.getOwnPropertySymbols == "function" && (n10 = n10.concat(Object.getOwnPropertySymbols(r4).filter(function(a18) {
      return Object.getOwnPropertyDescriptor(r4, a18).enumerable;
    }))), n10.forEach(function(a18) {
      q2(e10, a18, r4[a18]);
    });
  }
  return e10;
}
function q2(e10, t14, r4) {
  return t14 in e10 ? Object.defineProperty(e10, t14, { value: r4, enumerable: true, configurable: true, writable: true }) : e10[t14] = r4, e10;
}
function gn(e10, t14) {
  if (e10 == null) return {};
  var r4 = bn(e10, t14), n10, a18;
  if (Object.getOwnPropertySymbols) {
    var i22 = Object.getOwnPropertySymbols(e10);
    for (a18 = 0; a18 < i22.length; a18++)
      n10 = i22[a18], !(t14.indexOf(n10) >= 0) && Object.prototype.propertyIsEnumerable.call(e10, n10) && (r4[n10] = e10[n10]);
  }
  return r4;
}
function bn(e10, t14) {
  if (e10 == null) return {};
  var r4 = {}, n10 = Object.keys(e10), a18, i22;
  for (i22 = 0; i22 < n10.length; i22++)
    a18 = n10[i22], !(t14.indexOf(a18) >= 0) && (r4[a18] = e10[a18]);
  return r4;
}
Ft(Hr.primary);
var g = function(t14, r4) {
  var n10, a18 = qe({}, t14, r4.attrs), i22 = a18.class, c16 = a18.icon, o11 = a18.spin, l20 = a18.rotate, f12 = a18.tabindex, u16 = a18.twoToneColor, s16 = a18.onClick, d11 = gn(a18, ln), y9 = xt(), p9 = y9.prefixCls, m13 = y9.rootClassName, I5 = (n10 = {}, q2(n10, m13.value, !!m13.value), q2(n10, p9.value, true), q2(n10, "".concat(p9.value, "-").concat(c16.name), !!c16.name), q2(n10, "".concat(p9.value, "-spin"), !!o11 || c16.name === "loading"), n10), S5 = f12;
  S5 === void 0 && s16 && (S5 = -1);
  var O4 = l20 ? {
    msTransform: "rotate(".concat(l20, "deg)"),
    transform: "rotate(".concat(l20, "deg)")
  } : void 0, F = Mt(u16), $3 = sn(F, 2), z2 = $3[0], C6 = $3[1];
  return createVNode("span", qe({
    role: "img",
    "aria-label": c16.name
  }, d11, {
    onClick: s16,
    class: [I5, i22],
    tabindex: S5
  }), [createVNode(R2, {
    icon: c16,
    primaryColor: z2,
    secondaryColor: C6,
    style: O4
  }, null), createVNode(cn, null, null)]);
};
g.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
g.displayName = "AntdIcon";
g.inheritAttrs = false;
g.getTwoToneColor = on;
g.setTwoToneColor = Ft;
var pn = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z" } }] }, name: "arrow-up", theme: "outlined" };
function Ge(e10) {
  for (var t14 = 1; t14 < arguments.length; t14++) {
    var r4 = arguments[t14] != null ? Object(arguments[t14]) : {}, n10 = Object.keys(r4);
    typeof Object.getOwnPropertySymbols == "function" && (n10 = n10.concat(Object.getOwnPropertySymbols(r4).filter(function(a18) {
      return Object.getOwnPropertyDescriptor(r4, a18).enumerable;
    }))), n10.forEach(function(a18) {
      mn(e10, a18, r4[a18]);
    });
  }
  return e10;
}
function mn(e10, t14, r4) {
  return t14 in e10 ? Object.defineProperty(e10, t14, { value: r4, enumerable: true, configurable: true, writable: true }) : e10[t14] = r4, e10;
}
var $t = function(t14, r4) {
  var n10 = Ge({}, t14, r4.attrs);
  return createVNode(g, Ge({}, n10, {
    icon: pn
  }), null);
};
$t.displayName = "ArrowUpOutlined";
$t.inheritAttrs = false;
var vn = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M682 455V311l-76 76v68c-.1 50.7-42 92.1-94 92a95.8 95.8 0 01-52-15l-54 55c29.1 22.4 65.9 36 106 36 93.8 0 170-75.1 170-168z" } }, { tag: "path", attrs: { d: "M833 446h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254-63 0-120.7-23-165-61l-54 54a334.01 334.01 0 00179 81v102H326c-13.9 0-24.9 14.3-25 32v36c.1 4.4 2.9 8 6 8h408c3.2 0 6-3.6 6-8v-36c0-17.7-11-32-25-32H547V782c165.3-17.9 294-157.9 294-328 0-4.4-3.6-8-8-8zm13.1-377.7l-43.5-41.9a8 8 0 00-11.2.1l-129 129C634.3 101.2 577 64 511 64c-93.9 0-170 75.3-170 168v224c0 6.7.4 13.3 1.2 19.8l-68 68A252.33 252.33 0 01258 454c-.2-4.4-3.8-8-8-8h-60c-4.4 0-8 3.6-8 8 0 53 12.5 103 34.6 147.4l-137 137a8.03 8.03 0 000 11.3l42.7 42.7c3.1 3.1 8.2 3.1 11.3 0L846.2 79.8l.1-.1c3.1-3.2 3-8.3-.2-11.4zM417 401V232c0-50.6 41.9-92 94-92 46 0 84.1 32.3 92.3 74.7L417 401z" } }] }, name: "audio-muted", theme: "outlined" };
function Ue(e10) {
  for (var t14 = 1; t14 < arguments.length; t14++) {
    var r4 = arguments[t14] != null ? Object(arguments[t14]) : {}, n10 = Object.keys(r4);
    typeof Object.getOwnPropertySymbols == "function" && (n10 = n10.concat(Object.getOwnPropertySymbols(r4).filter(function(a18) {
      return Object.getOwnPropertyDescriptor(r4, a18).enumerable;
    }))), n10.forEach(function(a18) {
      yn(e10, a18, r4[a18]);
    });
  }
  return e10;
}
function yn(e10, t14, r4) {
  return t14 in e10 ? Object.defineProperty(e10, t14, { value: r4, enumerable: true, configurable: true, writable: true }) : e10[t14] = r4, e10;
}
var zt = function(t14, r4) {
  var n10 = Ue({}, t14, r4.attrs);
  return createVNode(g, Ue({}, n10, {
    icon: vn
  }), null);
};
zt.displayName = "AudioMutedOutlined";
zt.inheritAttrs = false;
var On = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z" } }] }, name: "audio", theme: "outlined" };
function Ze(e10) {
  for (var t14 = 1; t14 < arguments.length; t14++) {
    var r4 = arguments[t14] != null ? Object(arguments[t14]) : {}, n10 = Object.keys(r4);
    typeof Object.getOwnPropertySymbols == "function" && (n10 = n10.concat(Object.getOwnPropertySymbols(r4).filter(function(a18) {
      return Object.getOwnPropertyDescriptor(r4, a18).enumerable;
    }))), n10.forEach(function(a18) {
      wn(e10, a18, r4[a18]);
    });
  }
  return e10;
}
function wn(e10, t14, r4) {
  return t14 in e10 ? Object.defineProperty(e10, t14, { value: r4, enumerable: true, configurable: true, writable: true }) : e10[t14] = r4, e10;
}
var Tt = function(t14, r4) {
  var n10 = Ze({}, t14, r4.attrs);
  return createVNode(g, Ze({}, n10, {
    icon: On
  }), null);
};
Tt.displayName = "AudioOutlined";
Tt.inheritAttrs = false;
var Sn = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6a25.95 25.95 0 0025.6 30.4h723c1.5 0 3-.1 4.4-.4a25.88 25.88 0 0021.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z" } }] }, name: "clear", theme: "outlined" };
function Ye(e10) {
  for (var t14 = 1; t14 < arguments.length; t14++) {
    var r4 = arguments[t14] != null ? Object(arguments[t14]) : {}, n10 = Object.keys(r4);
    typeof Object.getOwnPropertySymbols == "function" && (n10 = n10.concat(Object.getOwnPropertySymbols(r4).filter(function(a18) {
      return Object.getOwnPropertyDescriptor(r4, a18).enumerable;
    }))), n10.forEach(function(a18) {
      xn(e10, a18, r4[a18]);
    });
  }
  return e10;
}
function xn(e10, t14, r4) {
  return t14 in e10 ? Object.defineProperty(e10, t14, { value: r4, enumerable: true, configurable: true, writable: true }) : e10[t14] = r4, e10;
}
var Et = function(t14, r4) {
  var n10 = Ye({}, t14, r4.attrs);
  return createVNode(g, Ye({}, n10, {
    icon: Sn
  }), null);
};
Et.displayName = "ClearOutlined";
Et.inheritAttrs = false;
var Cn = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
function Qe(e10) {
  for (var t14 = 1; t14 < arguments.length; t14++) {
    var r4 = arguments[t14] != null ? Object(arguments[t14]) : {}, n10 = Object.keys(r4);
    typeof Object.getOwnPropertySymbols == "function" && (n10 = n10.concat(Object.getOwnPropertySymbols(r4).filter(function(a18) {
      return Object.getOwnPropertyDescriptor(r4, a18).enumerable;
    }))), n10.forEach(function(a18) {
      Pn(e10, a18, r4[a18]);
    });
  }
  return e10;
}
function Pn(e10, t14, r4) {
  return t14 in e10 ? Object.defineProperty(e10, t14, { value: r4, enumerable: true, configurable: true, writable: true }) : e10[t14] = r4, e10;
}
var Ht = function(t14, r4) {
  var n10 = Qe({}, t14, r4.attrs);
  return createVNode(g, Qe({}, n10, {
    icon: Cn
  }), null);
};
Ht.displayName = "CloseCircleFilled";
Ht.inheritAttrs = false;
var _n = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
function Je(e10) {
  for (var t14 = 1; t14 < arguments.length; t14++) {
    var r4 = arguments[t14] != null ? Object(arguments[t14]) : {}, n10 = Object.keys(r4);
    typeof Object.getOwnPropertySymbols == "function" && (n10 = n10.concat(Object.getOwnPropertySymbols(r4).filter(function(a18) {
      return Object.getOwnPropertyDescriptor(r4, a18).enumerable;
    }))), n10.forEach(function(a18) {
      jn(e10, a18, r4[a18]);
    });
  }
  return e10;
}
function jn(e10, t14, r4) {
  return t14 in e10 ? Object.defineProperty(e10, t14, { value: r4, enumerable: true, configurable: true, writable: true }) : e10[t14] = r4, e10;
}
var kt = function(t14, r4) {
  var n10 = Je({}, t14, r4.attrs);
  return createVNode(g, Je({}, n10, {
    icon: _n
  }), null);
};
kt.displayName = "CloseOutlined";
kt.inheritAttrs = false;
var Mn = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "ellipsis", theme: "outlined" };
function Xe(e10) {
  for (var t14 = 1; t14 < arguments.length; t14++) {
    var r4 = arguments[t14] != null ? Object(arguments[t14]) : {}, n10 = Object.keys(r4);
    typeof Object.getOwnPropertySymbols == "function" && (n10 = n10.concat(Object.getOwnPropertySymbols(r4).filter(function(a18) {
      return Object.getOwnPropertyDescriptor(r4, a18).enumerable;
    }))), n10.forEach(function(a18) {
      An(e10, a18, r4[a18]);
    });
  }
  return e10;
}
function An(e10, t14, r4) {
  return t14 in e10 ? Object.defineProperty(e10, t14, { value: r4, enumerable: true, configurable: true, writable: true }) : e10[t14] = r4, e10;
}
var Rt = function(t14, r4) {
  var n10 = Xe({}, t14, r4.attrs);
  return createVNode(g, Xe({}, n10, {
    icon: Mn
  }), null);
};
Rt.displayName = "EllipsisOutlined";
Rt.inheritAttrs = false;
var Fn = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM575.34 477.84l-61.22 102.3L452.3 477.8a12 12 0 00-10.27-5.79h-38.44a12 12 0 00-6.4 1.85 12 12 0 00-3.75 16.56l82.34 130.42-83.45 132.78a12 12 0 00-1.84 6.39 12 12 0 0012 12h34.46a12 12 0 0010.21-5.7l62.7-101.47 62.3 101.45a12 12 0 0010.23 5.72h37.48a12 12 0 006.48-1.9 12 12 0 003.62-16.58l-83.83-130.55 85.3-132.47a12 12 0 001.9-6.5 12 12 0 00-12-12h-35.7a12 12 0 00-10.29 5.84z" } }] }, name: "file-excel", theme: "filled" };
function Ke(e10) {
  for (var t14 = 1; t14 < arguments.length; t14++) {
    var r4 = arguments[t14] != null ? Object(arguments[t14]) : {}, n10 = Object.keys(r4);
    typeof Object.getOwnPropertySymbols == "function" && (n10 = n10.concat(Object.getOwnPropertySymbols(r4).filter(function(a18) {
      return Object.getOwnPropertyDescriptor(r4, a18).enumerable;
    }))), n10.forEach(function(a18) {
      $n(e10, a18, r4[a18]);
    });
  }
  return e10;
}
function $n(e10, t14, r4) {
  return t14 in e10 ? Object.defineProperty(e10, t14, { value: r4, enumerable: true, configurable: true, writable: true }) : e10[t14] = r4, e10;
}
var It = function(t14, r4) {
  var n10 = Ke({}, t14, r4.attrs);
  return createVNode(g, Ke({}, n10, {
    icon: Fn
  }), null);
};
It.displayName = "FileExcelFilled";
It.inheritAttrs = false;
var zn = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M854.6 288.7L639.4 73.4c-6-6-14.2-9.4-22.7-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.6-9.4-22.6zM400 402c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm296 294H328c-6.7 0-10.4-7.7-6.3-12.9l99.8-127.2a8 8 0 0112.6 0l41.1 52.4 77.8-99.2a8 8 0 0112.6 0l136.5 174c4.3 5.2.5 12.9-6.1 12.9zm-94-370V137.8L790.2 326H602z" } }] }, name: "file-image", theme: "filled" };
function et(e10) {
  for (var t14 = 1; t14 < arguments.length; t14++) {
    var r4 = arguments[t14] != null ? Object(arguments[t14]) : {}, n10 = Object.keys(r4);
    typeof Object.getOwnPropertySymbols == "function" && (n10 = n10.concat(Object.getOwnPropertySymbols(r4).filter(function(a18) {
      return Object.getOwnPropertyDescriptor(r4, a18).enumerable;
    }))), n10.forEach(function(a18) {
      Tn(e10, a18, r4[a18]);
    });
  }
  return e10;
}
function Tn(e10, t14, r4) {
  return t14 in e10 ? Object.defineProperty(e10, t14, { value: r4, enumerable: true, configurable: true, writable: true }) : e10[t14] = r4, e10;
}
var Vt = function(t14, r4) {
  var n10 = et({}, t14, r4.attrs);
  return createVNode(g, et({}, n10, {
    icon: zn
  }), null);
};
Vt.displayName = "FileImageFilled";
Vt.inheritAttrs = false;
var En = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM426.13 600.93l59.11 132.97a16 16 0 0014.62 9.5h24.06a16 16 0 0014.63-9.51l59.1-133.35V758a16 16 0 0016.01 16H641a16 16 0 0016-16V486a16 16 0 00-16-16h-34.75a16 16 0 00-14.67 9.62L512.1 662.2l-79.48-182.59a16 16 0 00-14.67-9.61H383a16 16 0 00-16 16v272a16 16 0 0016 16h27.13a16 16 0 0016-16V600.93z" } }] }, name: "file-markdown", theme: "filled" };
function tt(e10) {
  for (var t14 = 1; t14 < arguments.length; t14++) {
    var r4 = arguments[t14] != null ? Object(arguments[t14]) : {}, n10 = Object.keys(r4);
    typeof Object.getOwnPropertySymbols == "function" && (n10 = n10.concat(Object.getOwnPropertySymbols(r4).filter(function(a18) {
      return Object.getOwnPropertyDescriptor(r4, a18).enumerable;
    }))), n10.forEach(function(a18) {
      Hn(e10, a18, r4[a18]);
    });
  }
  return e10;
}
function Hn(e10, t14, r4) {
  return t14 in e10 ? Object.defineProperty(e10, t14, { value: r4, enumerable: true, configurable: true, writable: true }) : e10[t14] = r4, e10;
}
var Lt = function(t14, r4) {
  var n10 = tt({}, t14, r4.attrs);
  return createVNode(g, tt({}, n10, {
    icon: En
  }), null);
};
Lt.displayName = "FileMarkdownFilled";
Lt.inheritAttrs = false;
var kn = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM633.22 637.26c-15.18-.5-31.32.67-49.65 2.96-24.3-14.99-40.66-35.58-52.28-65.83l1.07-4.38 1.24-5.18c4.3-18.13 6.61-31.36 7.3-44.7.52-10.07-.04-19.36-1.83-27.97-3.3-18.59-16.45-29.46-33.02-30.13-15.45-.63-29.65 8-33.28 21.37-5.91 21.62-2.45 50.07 10.08 98.59-15.96 38.05-37.05 82.66-51.2 107.54-18.89 9.74-33.6 18.6-45.96 28.42-16.3 12.97-26.48 26.3-29.28 40.3-1.36 6.49.69 14.97 5.36 21.92 5.3 7.88 13.28 13 22.85 13.74 24.15 1.87 53.83-23.03 86.6-79.26 3.29-1.1 6.77-2.26 11.02-3.7l11.9-4.02c7.53-2.54 12.99-4.36 18.39-6.11 23.4-7.62 41.1-12.43 57.2-15.17 27.98 14.98 60.32 24.8 82.1 24.8 17.98 0 30.13-9.32 34.52-23.99 3.85-12.88.8-27.82-7.48-36.08-8.56-8.41-24.3-12.43-45.65-13.12zM385.23 765.68v-.36l.13-.34a54.86 54.86 0 015.6-10.76c4.28-6.58 10.17-13.5 17.47-20.87 3.92-3.95 8-7.8 12.79-12.12 1.07-.96 7.91-7.05 9.19-8.25l11.17-10.4-8.12 12.93c-12.32 19.64-23.46 33.78-33 43-3.51 3.4-6.6 5.9-9.1 7.51a16.43 16.43 0 01-2.61 1.42c-.41.17-.77.27-1.13.3a2.2 2.2 0 01-1.12-.15 2.07 2.07 0 01-1.27-1.91zM511.17 547.4l-2.26 4-1.4-4.38c-3.1-9.83-5.38-24.64-6.01-38-.72-15.2.49-24.32 5.29-24.32 6.74 0 9.83 10.8 10.07 27.05.22 14.28-2.03 29.14-5.7 35.65zm-5.81 58.46l1.53-4.05 2.09 3.8c11.69 21.24 26.86 38.96 43.54 51.31l3.6 2.66-4.39.9c-16.33 3.38-31.54 8.46-52.34 16.85 2.17-.88-21.62 8.86-27.64 11.17l-5.25 2.01 2.8-4.88c12.35-21.5 23.76-47.32 36.05-79.77zm157.62 76.26c-7.86 3.1-24.78.33-54.57-12.39l-7.56-3.22 8.2-.6c23.3-1.73 39.8-.45 49.42 3.07 4.1 1.5 6.83 3.39 8.04 5.55a4.64 4.64 0 01-1.36 6.31 6.7 6.7 0 01-2.17 1.28z" } }] }, name: "file-pdf", theme: "filled" };
function rt(e10) {
  for (var t14 = 1; t14 < arguments.length; t14++) {
    var r4 = arguments[t14] != null ? Object(arguments[t14]) : {}, n10 = Object.keys(r4);
    typeof Object.getOwnPropertySymbols == "function" && (n10 = n10.concat(Object.getOwnPropertySymbols(r4).filter(function(a18) {
      return Object.getOwnPropertyDescriptor(r4, a18).enumerable;
    }))), n10.forEach(function(a18) {
      Rn(e10, a18, r4[a18]);
    });
  }
  return e10;
}
function Rn(e10, t14, r4) {
  return t14 in e10 ? Object.defineProperty(e10, t14, { value: r4, enumerable: true, configurable: true, writable: true }) : e10[t14] = r4, e10;
}
var Nt = function(t14, r4) {
  var n10 = rt({}, t14, r4.attrs);
  return createVNode(g, rt({}, n10, {
    icon: kn
  }), null);
};
Nt.displayName = "FilePdfFilled";
Nt.inheritAttrs = false;
var In = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM468.53 760v-91.54h59.27c60.57 0 100.2-39.65 100.2-98.12 0-58.22-39.58-98.34-99.98-98.34H424a12 12 0 00-12 12v276a12 12 0 0012 12h32.53a12 12 0 0012-12zm0-139.33h34.9c47.82 0 67.19-12.93 67.19-50.33 0-32.05-18.12-50.12-49.87-50.12h-52.22v100.45z" } }] }, name: "file-ppt", theme: "filled" };
function nt(e10) {
  for (var t14 = 1; t14 < arguments.length; t14++) {
    var r4 = arguments[t14] != null ? Object(arguments[t14]) : {}, n10 = Object.keys(r4);
    typeof Object.getOwnPropertySymbols == "function" && (n10 = n10.concat(Object.getOwnPropertySymbols(r4).filter(function(a18) {
      return Object.getOwnPropertyDescriptor(r4, a18).enumerable;
    }))), n10.forEach(function(a18) {
      Vn(e10, a18, r4[a18]);
    });
  }
  return e10;
}
function Vn(e10, t14, r4) {
  return t14 in e10 ? Object.defineProperty(e10, t14, { value: r4, enumerable: true, configurable: true, writable: true }) : e10[t14] = r4, e10;
}
var Bt = function(t14, r4) {
  var n10 = nt({}, t14, r4.attrs);
  return createVNode(g, nt({}, n10, {
    icon: In
  }), null);
};
Bt.displayName = "FilePptFilled";
Bt.inheritAttrs = false;
var Ln = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM320 482a8 8 0 00-8 8v48a8 8 0 008 8h384a8 8 0 008-8v-48a8 8 0 00-8-8H320zm0 136a8 8 0 00-8 8v48a8 8 0 008 8h184a8 8 0 008-8v-48a8 8 0 00-8-8H320z" } }] }, name: "file-text", theme: "filled" };
function at(e10) {
  for (var t14 = 1; t14 < arguments.length; t14++) {
    var r4 = arguments[t14] != null ? Object(arguments[t14]) : {}, n10 = Object.keys(r4);
    typeof Object.getOwnPropertySymbols == "function" && (n10 = n10.concat(Object.getOwnPropertySymbols(r4).filter(function(a18) {
      return Object.getOwnPropertyDescriptor(r4, a18).enumerable;
    }))), n10.forEach(function(a18) {
      Nn(e10, a18, r4[a18]);
    });
  }
  return e10;
}
function Nn(e10, t14, r4) {
  return t14 in e10 ? Object.defineProperty(e10, t14, { value: r4, enumerable: true, configurable: true, writable: true }) : e10[t14] = r4, e10;
}
var Dt = function(t14, r4) {
  var n10 = at({}, t14, r4.attrs);
  return createVNode(g, at({}, n10, {
    icon: Ln
  }), null);
};
Dt.displayName = "FileTextFilled";
Dt.inheritAttrs = false;
var Bn = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM512 566.1l52.81 197a12 12 0 0011.6 8.9h31.77a12 12 0 0011.6-8.88l74.37-276a12 12 0 00.4-3.12 12 12 0 00-12-12h-35.57a12 12 0 00-11.7 9.31l-45.78 199.1-49.76-199.32A12 12 0 00528.1 472h-32.2a12 12 0 00-11.64 9.1L434.6 680.01 388.5 481.3a12 12 0 00-11.68-9.29h-35.39a12 12 0 00-3.11.41 12 12 0 00-8.47 14.7l74.17 276A12 12 0 00415.6 772h31.99a12 12 0 0011.59-8.9l52.81-197z" } }] }, name: "file-word", theme: "filled" };
function it(e10) {
  for (var t14 = 1; t14 < arguments.length; t14++) {
    var r4 = arguments[t14] != null ? Object(arguments[t14]) : {}, n10 = Object.keys(r4);
    typeof Object.getOwnPropertySymbols == "function" && (n10 = n10.concat(Object.getOwnPropertySymbols(r4).filter(function(a18) {
      return Object.getOwnPropertyDescriptor(r4, a18).enumerable;
    }))), n10.forEach(function(a18) {
      Dn(e10, a18, r4[a18]);
    });
  }
  return e10;
}
function Dn(e10, t14, r4) {
  return t14 in e10 ? Object.defineProperty(e10, t14, { value: r4, enumerable: true, configurable: true, writable: true }) : e10[t14] = r4, e10;
}
var Wt = function(t14, r4) {
  var n10 = it({}, t14, r4.attrs);
  return createVNode(g, it({}, n10, {
    icon: Bn
  }), null);
};
Wt.displayName = "FileWordFilled";
Wt.inheritAttrs = false;
var Wn = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM296 136v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm0 64v160h128V584H296zm48 48h32v64h-32v-64z" } }] }, name: "file-zip", theme: "filled" };
function ot(e10) {
  for (var t14 = 1; t14 < arguments.length; t14++) {
    var r4 = arguments[t14] != null ? Object(arguments[t14]) : {}, n10 = Object.keys(r4);
    typeof Object.getOwnPropertySymbols == "function" && (n10 = n10.concat(Object.getOwnPropertySymbols(r4).filter(function(a18) {
      return Object.getOwnPropertyDescriptor(r4, a18).enumerable;
    }))), n10.forEach(function(a18) {
      qn(e10, a18, r4[a18]);
    });
  }
  return e10;
}
function qn(e10, t14, r4) {
  return t14 in e10 ? Object.defineProperty(e10, t14, { value: r4, enumerable: true, configurable: true, writable: true }) : e10[t14] = r4, e10;
}
var qt = function(t14, r4) {
  var n10 = ot({}, t14, r4.attrs);
  return createVNode(g, ot({}, n10, {
    icon: Wn
  }), null);
};
qt.displayName = "FileZipFilled";
qt.inheritAttrs = false;
var Gn = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" };
function ct(e10) {
  for (var t14 = 1; t14 < arguments.length; t14++) {
    var r4 = arguments[t14] != null ? Object(arguments[t14]) : {}, n10 = Object.keys(r4);
    typeof Object.getOwnPropertySymbols == "function" && (n10 = n10.concat(Object.getOwnPropertySymbols(r4).filter(function(a18) {
      return Object.getOwnPropertyDescriptor(r4, a18).enumerable;
    }))), n10.forEach(function(a18) {
      Un(e10, a18, r4[a18]);
    });
  }
  return e10;
}
function Un(e10, t14, r4) {
  return t14 in e10 ? Object.defineProperty(e10, t14, { value: r4, enumerable: true, configurable: true, writable: true }) : e10[t14] = r4, e10;
}
var Gt = function(t14, r4) {
  var n10 = ct({}, t14, r4.attrs);
  return createVNode(g, ct({}, n10, {
    icon: Gn
  }), null);
};
Gt.displayName = "LeftOutlined";
Gt.inheritAttrs = false;
var Zn = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { tag: "path", attrs: { d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, name: "plus", theme: "outlined" };
function lt(e10) {
  for (var t14 = 1; t14 < arguments.length; t14++) {
    var r4 = arguments[t14] != null ? Object(arguments[t14]) : {}, n10 = Object.keys(r4);
    typeof Object.getOwnPropertySymbols == "function" && (n10 = n10.concat(Object.getOwnPropertySymbols(r4).filter(function(a18) {
      return Object.getOwnPropertyDescriptor(r4, a18).enumerable;
    }))), n10.forEach(function(a18) {
      Yn(e10, a18, r4[a18]);
    });
  }
  return e10;
}
function Yn(e10, t14, r4) {
  return t14 in e10 ? Object.defineProperty(e10, t14, { value: r4, enumerable: true, configurable: true, writable: true }) : e10[t14] = r4, e10;
}
var Ut = function(t14, r4) {
  var n10 = lt({}, t14, r4.attrs);
  return createVNode(g, lt({}, n10, {
    icon: Zn
  }), null);
};
Ut.displayName = "PlusOutlined";
Ut.inheritAttrs = false;
var Qn = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" };
function st(e10) {
  for (var t14 = 1; t14 < arguments.length; t14++) {
    var r4 = arguments[t14] != null ? Object(arguments[t14]) : {}, n10 = Object.keys(r4);
    typeof Object.getOwnPropertySymbols == "function" && (n10 = n10.concat(Object.getOwnPropertySymbols(r4).filter(function(a18) {
      return Object.getOwnPropertyDescriptor(r4, a18).enumerable;
    }))), n10.forEach(function(a18) {
      Jn(e10, a18, r4[a18]);
    });
  }
  return e10;
}
function Jn(e10, t14, r4) {
  return t14 in e10 ? Object.defineProperty(e10, t14, { value: r4, enumerable: true, configurable: true, writable: true }) : e10[t14] = r4, e10;
}
var Zt = function(t14, r4) {
  var n10 = st({}, t14, r4.attrs);
  return createVNode(g, st({}, n10, {
    icon: Qn
  }), null);
};
Zt.displayName = "RightOutlined";
Zt.inheritAttrs = false;
function Xn(e10) {
  return getCurrentScope() ? (onScopeDispose(e10), true) : false;
}
var Kn = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
function ea(e10) {
  return Array.isArray(e10) ? e10 : [e10];
}
function ta(e10) {
  return getCurrentInstance();
}
function ra(e10, t14 = true, r4) {
  ta() ? onMounted(e10, r4) : t14 ? e10() : nextTick(e10);
}
var Yt = Kn ? window : void 0;
function V(e10) {
  var t14;
  const r4 = toValue(e10);
  return (t14 = r4 == null ? void 0 : r4.$el) != null ? t14 : r4;
}
function na() {
  const e10 = shallowRef(false), t14 = getCurrentInstance();
  return t14 && onMounted(() => {
    e10.value = true;
  }, t14), e10;
}
function aa(e10) {
  const t14 = na();
  return computed(() => (t14.value, !!e10()));
}
function ia(e10, t14, r4 = {}) {
  const { window: n10 = Yt, ...a18 } = r4;
  let i22;
  const c16 = aa(() => n10 && "ResizeObserver" in n10), o11 = () => {
    i22 && (i22.disconnect(), i22 = void 0);
  }, l20 = computed(() => {
    const s16 = toValue(e10);
    return Array.isArray(s16) ? s16.map((d11) => V(d11)) : [V(s16)];
  }), f12 = watch(
    l20,
    (s16) => {
      if (o11(), c16.value && n10) {
        i22 = new ResizeObserver(t14);
        for (const d11 of s16)
          d11 && i22.observe(d11, a18);
      }
    },
    { immediate: true, flush: "post" }
  ), u16 = () => {
    o11(), f12();
  };
  return Xn(u16), {
    isSupported: c16,
    stop: u16
  };
}
function ba(e10, t14 = { width: 0, height: 0 }, r4 = {}) {
  const { window: n10 = Yt, box: a18 = "content-box" } = r4, i22 = computed(() => {
    var s16, d11;
    return (d11 = (s16 = V(e10)) == null ? void 0 : s16.namespaceURI) == null ? void 0 : d11.includes("svg");
  }), c16 = shallowRef(t14.width), o11 = shallowRef(t14.height), { stop: l20 } = ia(
    e10,
    ([s16]) => {
      const d11 = a18 === "border-box" ? s16.borderBoxSize : a18 === "content-box" ? s16.contentBoxSize : s16.devicePixelContentBoxSize;
      if (n10 && i22.value) {
        const y9 = V(e10);
        if (y9) {
          const p9 = y9.getBoundingClientRect();
          c16.value = p9.width, o11.value = p9.height;
        }
      } else if (d11) {
        const y9 = ea(d11);
        c16.value = y9.reduce((p9, { inlineSize: m13 }) => p9 + m13, 0), o11.value = y9.reduce((p9, { blockSize: m13 }) => p9 + m13, 0);
      } else
        c16.value = s16.contentRect.width, o11.value = s16.contentRect.height;
    },
    r4
  );
  ra(() => {
    const s16 = V(e10);
    s16 && (c16.value = "offsetWidth" in s16 ? s16.offsetWidth : t14.width, o11.value = "offsetHeight" in s16 ? s16.offsetHeight : t14.height);
  });
  const f12 = watch(
    () => V(e10),
    (s16) => {
      c16.value = s16 ? t14.width : 0, o11.value = s16 ? t14.height : 0;
    }
  );
  function u16() {
    l20(), f12();
  }
  return {
    width: c16,
    height: o11,
    stop: u16
  };
}
function Y(e10) {
  "@babel/helpers - typeof";
  return Y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t14) {
    return typeof t14;
  } : function(t14) {
    return t14 && typeof Symbol == "function" && t14.constructor === Symbol && t14 !== Symbol.prototype ? "symbol" : typeof t14;
  }, Y(e10);
}
function oa(e10, t14) {
  if (Y(e10) != "object" || !e10) return e10;
  var r4 = e10[Symbol.toPrimitive];
  if (r4 !== void 0) {
    var n10 = r4.call(e10, t14);
    if (Y(n10) != "object") return n10;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t14 === "string" ? String : Number)(e10);
}
function ca(e10) {
  var t14 = oa(e10, "string");
  return Y(t14) == "symbol" ? t14 : t14 + "";
}
function P2(e10, t14, r4) {
  return (t14 = ca(t14)) in e10 ? Object.defineProperty(e10, t14, {
    value: r4,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e10[t14] = r4, e10;
}
var w3 = Math.round;
function pe(e10, t14) {
  const r4 = e10.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], n10 = r4.map((a18) => parseFloat(a18));
  for (let a18 = 0; a18 < 3; a18 += 1)
    n10[a18] = t14(n10[a18] || 0, r4[a18] || "", a18);
  return r4[3] ? n10[3] = r4[3].includes("%") ? n10[3] / 100 : n10[3] : n10[3] = 1, n10;
}
var ft = (e10, t14, r4) => r4 === 0 ? e10 : e10 / 100;
function W(e10, t14) {
  const r4 = t14 || 255;
  return e10 > r4 ? r4 : e10 < 0 ? 0 : e10;
}
var Qt = class _Qt {
  constructor(t14) {
    P2(this, "isValid", true), P2(this, "r", 0), P2(this, "g", 0), P2(this, "b", 0), P2(this, "a", 1), P2(this, "_h", void 0), P2(this, "_s", void 0), P2(this, "_l", void 0), P2(this, "_v", void 0), P2(this, "_max", void 0), P2(this, "_min", void 0), P2(this, "_brightness", void 0);
    function r4(n10) {
      return n10[0] in t14 && n10[1] in t14 && n10[2] in t14;
    }
    if (t14) if (typeof t14 == "string") {
      let a18 = function(i22) {
        return n10.startsWith(i22);
      };
      const n10 = t14.trim();
      /^#?[A-F\d]{3,8}$/i.test(n10) ? this.fromHexString(n10) : a18("rgb") ? this.fromRgbString(n10) : a18("hsl") ? this.fromHslString(n10) : (a18("hsv") || a18("hsb")) && this.fromHsvString(n10);
    } else if (t14 instanceof _Qt)
      this.r = t14.r, this.g = t14.g, this.b = t14.b, this.a = t14.a, this._h = t14._h, this._s = t14._s, this._l = t14._l, this._v = t14._v;
    else if (r4("rgb"))
      this.r = W(t14.r), this.g = W(t14.g), this.b = W(t14.b), this.a = typeof t14.a == "number" ? W(t14.a, 1) : 1;
    else if (r4("hsl"))
      this.fromHsl(t14);
    else if (r4("hsv"))
      this.fromHsv(t14);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(t14));
  }
  // ======================= Setter =======================
  setR(t14) {
    return this._sc("r", t14);
  }
  setG(t14) {
    return this._sc("g", t14);
  }
  setB(t14) {
    return this._sc("b", t14);
  }
  setA(t14) {
    return this._sc("a", t14, 1);
  }
  setHue(t14) {
    const r4 = this.toHsv();
    return r4.h = t14, this._c(r4);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function t14(i22) {
      const c16 = i22 / 255;
      return c16 <= 0.03928 ? c16 / 12.92 : Math.pow((c16 + 0.055) / 1.055, 2.4);
    }
    const r4 = t14(this.r), n10 = t14(this.g), a18 = t14(this.b);
    return 0.2126 * r4 + 0.7152 * n10 + 0.0722 * a18;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t14 = this.getMax() - this.getMin();
      t14 === 0 ? this._h = 0 : this._h = w3(60 * (this.r === this.getMax() ? (this.g - this.b) / t14 + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t14 + 2 : (this.r - this.g) / t14 + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const t14 = this.getMax() - this.getMin();
      t14 === 0 ? this._s = 0 : this._s = t14 / this.getMax();
    }
    return this._s;
  }
  getLightness() {
    return typeof this._l > "u" && (this._l = (this.getMax() + this.getMin()) / 510), this._l;
  }
  getValue() {
    return typeof this._v > "u" && (this._v = this.getMax() / 255), this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    return typeof this._brightness > "u" && (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3), this._brightness;
  }
  // ======================== Func ========================
  darken(t14 = 10) {
    const r4 = this.getHue(), n10 = this.getSaturation();
    let a18 = this.getLightness() - t14 / 100;
    return a18 < 0 && (a18 = 0), this._c({
      h: r4,
      s: n10,
      l: a18,
      a: this.a
    });
  }
  lighten(t14 = 10) {
    const r4 = this.getHue(), n10 = this.getSaturation();
    let a18 = this.getLightness() + t14 / 100;
    return a18 > 1 && (a18 = 1), this._c({
      h: r4,
      s: n10,
      l: a18,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t14, r4 = 50) {
    const n10 = this._c(t14), a18 = r4 / 100, i22 = (o11) => (n10[o11] - this[o11]) * a18 + this[o11], c16 = {
      r: w3(i22("r")),
      g: w3(i22("g")),
      b: w3(i22("b")),
      a: w3(i22("a") * 100) / 100
    };
    return this._c(c16);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(t14 = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, t14);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(t14 = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, t14);
  }
  onBackground(t14) {
    const r4 = this._c(t14), n10 = this.a + r4.a * (1 - this.a), a18 = (i22) => w3((this[i22] * this.a + r4[i22] * r4.a * (1 - this.a)) / n10);
    return this._c({
      r: a18("r"),
      g: a18("g"),
      b: a18("b"),
      a: n10
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(t14) {
    return this.r === t14.r && this.g === t14.g && this.b === t14.b && this.a === t14.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let t14 = "#";
    const r4 = (this.r || 0).toString(16);
    t14 += r4.length === 2 ? r4 : "0" + r4;
    const n10 = (this.g || 0).toString(16);
    t14 += n10.length === 2 ? n10 : "0" + n10;
    const a18 = (this.b || 0).toString(16);
    if (t14 += a18.length === 2 ? a18 : "0" + a18, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i22 = w3(this.a * 255).toString(16);
      t14 += i22.length === 2 ? i22 : "0" + i22;
    }
    return t14;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const t14 = this.getHue(), r4 = w3(this.getSaturation() * 100), n10 = w3(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t14},${r4}%,${n10}%,${this.a})` : `hsl(${t14},${r4}%,${n10}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(t14, r4, n10) {
    const a18 = this.clone();
    return a18[t14] = W(r4, n10), a18;
  }
  _c(t14) {
    return new this.constructor(t14);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(t14) {
    const r4 = t14.replace("#", "");
    function n10(a18, i22) {
      return parseInt(r4[a18] + r4[i22 || a18], 16);
    }
    r4.length < 6 ? (this.r = n10(0), this.g = n10(1), this.b = n10(2), this.a = r4[3] ? n10(3) / 255 : 1) : (this.r = n10(0, 1), this.g = n10(2, 3), this.b = n10(4, 5), this.a = r4[6] ? n10(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t14,
    s: r4,
    l: n10,
    a: a18
  }) {
    if (this._h = t14 % 360, this._s = r4, this._l = n10, this.a = typeof a18 == "number" ? a18 : 1, r4 <= 0) {
      const d11 = w3(n10 * 255);
      this.r = d11, this.g = d11, this.b = d11;
    }
    let i22 = 0, c16 = 0, o11 = 0;
    const l20 = t14 / 60, f12 = (1 - Math.abs(2 * n10 - 1)) * r4, u16 = f12 * (1 - Math.abs(l20 % 2 - 1));
    l20 >= 0 && l20 < 1 ? (i22 = f12, c16 = u16) : l20 >= 1 && l20 < 2 ? (i22 = u16, c16 = f12) : l20 >= 2 && l20 < 3 ? (c16 = f12, o11 = u16) : l20 >= 3 && l20 < 4 ? (c16 = u16, o11 = f12) : l20 >= 4 && l20 < 5 ? (i22 = u16, o11 = f12) : l20 >= 5 && l20 < 6 && (i22 = f12, o11 = u16);
    const s16 = n10 - f12 / 2;
    this.r = w3((i22 + s16) * 255), this.g = w3((c16 + s16) * 255), this.b = w3((o11 + s16) * 255);
  }
  fromHsv({
    h: t14,
    s: r4,
    v: n10,
    a: a18
  }) {
    this._h = t14 % 360, this._s = r4, this._v = n10, this.a = typeof a18 == "number" ? a18 : 1;
    const i22 = w3(n10 * 255);
    if (this.r = i22, this.g = i22, this.b = i22, r4 <= 0)
      return;
    const c16 = t14 / 60, o11 = Math.floor(c16), l20 = c16 - o11, f12 = w3(n10 * (1 - r4) * 255), u16 = w3(n10 * (1 - r4 * l20) * 255), s16 = w3(n10 * (1 - r4 * (1 - l20)) * 255);
    switch (o11) {
      case 0:
        this.g = s16, this.b = f12;
        break;
      case 1:
        this.r = u16, this.b = f12;
        break;
      case 2:
        this.r = f12, this.b = s16;
        break;
      case 3:
        this.r = f12, this.g = u16;
        break;
      case 4:
        this.r = s16, this.g = f12;
        break;
      case 5:
      default:
        this.g = f12, this.b = u16;
        break;
    }
  }
  fromHsvString(t14) {
    const r4 = pe(t14, ft);
    this.fromHsv({
      h: r4[0],
      s: r4[1],
      v: r4[2],
      a: r4[3]
    });
  }
  fromHslString(t14) {
    const r4 = pe(t14, ft);
    this.fromHsl({
      h: r4[0],
      s: r4[1],
      l: r4[2],
      a: r4[3]
    });
  }
  fromRgbString(t14) {
    const r4 = pe(t14, (n10, a18) => (
      // Convert percentage to number. e.g. 50% -> 128
      a18.includes("%") ? w3(n10 / 100 * 255) : n10
    ));
    this.r = r4[0], this.g = r4[1], this.b = r4[2], this.a = r4[3];
  }
};

// node_modules/ant-design-x-vue/es/vc-util/Dom/canUseDom.mjs
function e() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}

// node_modules/ant-design-x-vue/es/vc-util/Dom/contains.mjs
function e2(n10, a18) {
  return n10 && n10.contains ? n10.contains(a18) : false;
}

// node_modules/ant-design-x-vue/es/vc-util/Dom/dynamicCSS.mjs
var s4 = "data-vc-order";
var y2 = "vc-util-key";
var d2 = /* @__PURE__ */ new Map();
function l3({ mark: e10 } = {}) {
  return e10 ? e10.startsWith("data-") ? e10 : `data-${e10}` : y2;
}
function f3(e10) {
  return e10.attachTo ? e10.attachTo : document.querySelector("head") || document.body;
}
function p2(e10) {
  return e10 === "queue" ? "prependQueue" : e10 ? "prepend" : "append";
}
function h4(e10) {
  return Array.from((d2.get(e10) || e10).children).filter(
    (r4) => r4.tagName === "STYLE"
  );
}
function C(e10, r4 = {}) {
  if (!e())
    return null;
  const { csp: n10, prepend: c16 } = r4, t14 = document.createElement("style");
  t14.setAttribute(s4, p2(c16)), n10 != null && n10.nonce && (t14.nonce = n10 == null ? void 0 : n10.nonce), t14.innerHTML = e10;
  const i22 = f3(r4), { firstChild: u16 } = i22;
  if (c16) {
    if (c16 === "queue") {
      const o11 = h4(i22).filter(
        (a18) => ["prepend", "prependQueue"].includes(a18.getAttribute(s4))
      );
      if (o11.length)
        return i22.insertBefore(t14, o11[o11.length - 1].nextSibling), t14;
    }
    i22.insertBefore(t14, u16);
  } else
    i22.appendChild(t14);
  return t14;
}
function m2(e10, r4 = {}) {
  const n10 = f3(r4);
  return h4(n10).find((c16) => c16.getAttribute(l3(r4)) === e10);
}
function x2(e10, r4 = {}) {
  const n10 = m2(e10, r4);
  n10 && f3(r4).removeChild(n10);
}
function N2(e10, r4) {
  const n10 = d2.get(e10);
  if (!n10 || !e2(document, n10)) {
    const c16 = C("", r4), { parentNode: t14 } = c16;
    d2.set(e10, t14), e10.removeChild(c16);
  }
}
function M3(e10, r4, n10 = {}) {
  var u16, o11, a18;
  const c16 = f3(n10);
  N2(c16, n10);
  const t14 = m2(r4, n10);
  if (t14)
    return (u16 = n10.csp) != null && u16.nonce && t14.nonce !== ((o11 = n10.csp) == null ? void 0 : o11.nonce) && (t14.nonce = (a18 = n10.csp) == null ? void 0 : a18.nonce), t14.innerHTML !== e10 && (t14.innerHTML = e10), t14;
  const i22 = C(e10, n10);
  return i22.setAttribute(l3(n10), r4), i22;
}

// node_modules/ant-design-x-vue/es/_util/cssinjs/theme/ThemeCache.mjs
function f4(n10, e10) {
  if (n10.length !== e10.length)
    return false;
  for (let s16 = 0; s16 < n10.length; s16++)
    if (n10[s16] !== e10[s16])
      return false;
  return true;
}
var i6 = class i7 {
  constructor() {
    this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  size() {
    return this.keys.length;
  }
  internalGet(e10, s16 = false) {
    let t14 = { map: this.cache };
    return e10.forEach((l20) => {
      var a18;
      t14 ? t14 = (a18 = t14 == null ? void 0 : t14.map) == null ? void 0 : a18.get(l20) : t14 = void 0;
    }), t14 != null && t14.value && s16 && (t14.value[1] = this.cacheCallTimes++), t14 == null ? void 0 : t14.value;
  }
  get(e10) {
    var s16;
    return (s16 = this.internalGet(e10, true)) == null ? void 0 : s16[0];
  }
  has(e10) {
    return !!this.internalGet(e10);
  }
  set(e10, s16) {
    if (!this.has(e10)) {
      if (this.size() + 1 > i7.MAX_CACHE_SIZE + i7.MAX_CACHE_OFFSET) {
        const [l20] = this.keys.reduce(
          (a18, h16) => {
            const [, r4] = a18;
            return this.internalGet(h16)[1] < r4 ? [h16, this.internalGet(h16)[1]] : a18;
          },
          [this.keys[0], this.cacheCallTimes]
        );
        this.delete(l20);
      }
      this.keys.push(e10);
    }
    let t14 = this.cache;
    e10.forEach((l20, a18) => {
      if (a18 === e10.length - 1)
        t14.set(l20, { value: [s16, this.cacheCallTimes++] });
      else {
        const h16 = t14.get(l20);
        h16 ? h16.map || (h16.map = /* @__PURE__ */ new Map()) : t14.set(l20, { map: /* @__PURE__ */ new Map() }), t14 = t14.get(l20).map;
      }
    });
  }
  deleteByPath(e10, s16) {
    var a18;
    const t14 = e10.get(s16[0]);
    if (s16.length === 1)
      return t14.map ? e10.set(s16[0], { map: t14.map }) : e10.delete(s16[0]), (a18 = t14.value) == null ? void 0 : a18[0];
    const l20 = this.deleteByPath(t14.map, s16.slice(1));
    return (!t14.map || t14.map.size === 0) && !t14.value && e10.delete(s16[0]), l20;
  }
  delete(e10) {
    if (this.has(e10))
      return this.keys = this.keys.filter((s16) => !f4(s16, e10)), this.deleteByPath(this.cache, e10);
  }
};
i6.MAX_CACHE_SIZE = 20, i6.MAX_CACHE_OFFSET = 5;
var u3 = i6;

// node_modules/ant-design-x-vue/es/vc-util/warning.mjs
var i8 = {};
function c6(n10, e10) {
}
function a3(n10, e10, t14) {
  !e10 && !i8[t14] && (n10(false, t14), i8[t14] = true);
}
function u4(n10, e10) {
  a3(c6, n10, e10);
}

// node_modules/ant-design-x-vue/es/_util/warning.mjs
function a4() {
}
var j2 = a4;
var i9 = Symbol("WarningContext");
var t2 = shallowRef();
var x3 = (e10) => {
  provide(i9, e10), watch(
    e10,
    () => {
      t2.value = unref(e10), triggerRef(t2);
    },
    { immediate: true, deep: true }
  );
};
var y3 = defineComponent({
  props: {
    value: c3()
  },
  setup(e10, { slots: n10 }) {
    return x3(computed(() => e10.value)), () => {
      var r4;
      return (r4 = n10.default) == null ? void 0 : r4.call(n10);
    };
  }
});

// node_modules/ant-design-x-vue/es/_util/cssinjs/theme/Theme.mjs
var t3 = 0;
var s5 = class {
  constructor(r4) {
    this.derivatives = Array.isArray(r4) ? r4 : [r4], this.id = t3, r4.length === 0 && j2(
      r4.length > 0
    ), t3 += 1;
  }
  getDerivativeToken(r4) {
    return this.derivatives.reduce(
      (e10, i22) => i22(r4, e10),
      void 0
    );
  }
};

// node_modules/ant-design-x-vue/es/_util/cssinjs/util.mjs
var y4 = /* @__PURE__ */ new WeakMap();
function h5(t14) {
  let r4 = y4.get(t14) || "";
  return r4 || (Object.keys(t14).forEach((e10) => {
    const s16 = t14[e10];
    r4 += e10, s16 instanceof s5 ? r4 += s16.id : s16 && typeof s16 == "object" ? r4 += h5(s16) : r4 += s16;
  }), y4.set(t14, r4)), r4;
}
function k2(t14, r4) {
  return fa(`${r4}_${h5(t14)}`);
}
var c7 = `random-${Date.now()}-${Math.random()}`.replace(/\./g, "");
var $ = "_bAmBoO_";
function d3(t14, r4, e10) {
  var s16, n10;
  if (e()) {
    M3(t14, c7);
    const o11 = document.createElement("div");
    o11.style.position = "fixed", o11.style.left = "0", o11.style.top = "0", r4 == null || r4(o11), document.body.appendChild(o11);
    const a18 = e10 ? e10(o11) : (s16 = getComputedStyle(o11).content) == null ? void 0 : s16.includes($);
    return (n10 = o11.parentNode) == null || n10.removeChild(o11), x2(c7), a18;
  }
  return false;
}
var i10;
function K2() {
  return i10 === void 0 && (i10 = d3(
    `@layer ${c7} { .${c7} { content: "${$}"!important; } }`,
    (t14) => {
      t14.className = c7;
    }
  )), i10;
}
var l4;
function M4() {
  return l4 === void 0 && (l4 = d3(
    `:where(.${c7}) { content: "${$}"!important; }`,
    (t14) => {
      t14.className = c7;
    }
  )), l4;
}
var m3;
function V2() {
  return m3 === void 0 && (m3 = d3(
    `.${c7} { inset-block: 93px !important; }`,
    (t14) => {
      t14.className = c7;
    },
    (t14) => getComputedStyle(t14).bottom === "93px"
  )), m3;
}
var W2 = e();
function D2(t14) {
  return typeof t14 == "number" ? `${t14}px` : t14;
}
var _2 = (t14, r4 = "") => `--${r4 ? `${r4}-` : ""}${t14}`.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
var x4 = (t14, r4, e10) => Object.keys(t14).length ? `.${r4}${e10 != null && e10.scope ? `.${e10.scope}` : ""}{${Object.entries(t14).map(([s16, n10]) => `${s16}:${n10};`).join("")}}` : "";
var P3 = (t14, r4, e10) => {
  const s16 = {}, n10 = {};
  return Object.entries(t14).forEach(([o11, a18]) => {
    var p9, u16, S5;
    if ((p9 = e10 == null ? void 0 : e10.preserve) != null && p9[o11])
      n10[o11] = a18;
    else if ((typeof a18 == "string" || typeof a18 == "number") && !((u16 = e10 == null ? void 0 : e10.ignore) != null && u16[o11])) {
      const f12 = _2(o11, e10 == null ? void 0 : e10.prefix);
      s16[f12] = typeof a18 == "number" && !((S5 = e10 == null ? void 0 : e10.unitless) != null && S5[o11]) ? `${a18}px` : String(a18), n10[o11] = `var(${f12})`;
    }
  }), [n10, x4(s16, r4, { scope: e10 == null ? void 0 : e10.scope })];
};

// node_modules/ant-design-x-vue/es/_util/cssinjs/Keyframes.mjs
var a5 = class {
  constructor(e10, t14) {
    this._keyframe = true, this.name = e10, this.style = t14;
  }
  getName(e10 = "") {
    return e10 ? `${e10}-${this.name}` : this.name;
  }
};

// node_modules/ant-design-x-vue/es/_util/cssinjs/transformers/legacyLogicalProperties.mjs
function g2(e10) {
  if (typeof e10 == "number")
    return [e10];
  const n10 = String(e10).split(/\s+/);
  let d11 = "", t14 = 0;
  return n10.reduce((r4, o11) => (o11.includes("(") ? (d11 += o11, t14 += o11.split("(").length - 1) : o11.includes(")") ? (d11 += ` ${o11}`, t14 -= o11.split(")").length - 1, t14 === 0 && (r4.push(d11), d11 = "")) : t14 > 0 ? d11 += ` ${o11}` : r4.push(o11), r4), []);
}
function i11(e10) {
  return e10.notSplit = true, e10;
}
var p3 = {
  // Inset
  inset: ["top", "right", "bottom", "left"],
  insetBlock: ["top", "bottom"],
  insetBlockStart: ["top"],
  insetBlockEnd: ["bottom"],
  insetInline: ["left", "right"],
  insetInlineStart: ["left"],
  insetInlineEnd: ["right"],
  // Margin
  marginBlock: ["marginTop", "marginBottom"],
  marginBlockStart: ["marginTop"],
  marginBlockEnd: ["marginBottom"],
  marginInline: ["marginLeft", "marginRight"],
  marginInlineStart: ["marginLeft"],
  marginInlineEnd: ["marginRight"],
  // Padding
  paddingBlock: ["paddingTop", "paddingBottom"],
  paddingBlockStart: ["paddingTop"],
  paddingBlockEnd: ["paddingBottom"],
  paddingInline: ["paddingLeft", "paddingRight"],
  paddingInlineStart: ["paddingLeft"],
  paddingInlineEnd: ["paddingRight"],
  // Border
  borderBlock: i11(["borderTop", "borderBottom"]),
  borderBlockStart: i11(["borderTop"]),
  borderBlockEnd: i11(["borderBottom"]),
  borderInline: i11(["borderLeft", "borderRight"]),
  borderInlineStart: i11(["borderLeft"]),
  borderInlineEnd: i11(["borderRight"]),
  // Border width
  borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
  borderBlockStartWidth: ["borderTopWidth"],
  borderBlockEndWidth: ["borderBottomWidth"],
  borderInlineWidth: ["borderLeftWidth", "borderRightWidth"],
  borderInlineStartWidth: ["borderLeftWidth"],
  borderInlineEndWidth: ["borderRightWidth"],
  // Border style
  borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
  borderBlockStartStyle: ["borderTopStyle"],
  borderBlockEndStyle: ["borderBottomStyle"],
  borderInlineStyle: ["borderLeftStyle", "borderRightStyle"],
  borderInlineStartStyle: ["borderLeftStyle"],
  borderInlineEndStyle: ["borderRightStyle"],
  // Border color
  borderBlockColor: ["borderTopColor", "borderBottomColor"],
  borderBlockStartColor: ["borderTopColor"],
  borderBlockEndColor: ["borderBottomColor"],
  borderInlineColor: ["borderLeftColor", "borderRightColor"],
  borderInlineStartColor: ["borderLeftColor"],
  borderInlineEndColor: ["borderRightColor"],
  // Border radius
  borderStartStartRadius: ["borderTopLeftRadius"],
  borderStartEndRadius: ["borderTopRightRadius"],
  borderEndStartRadius: ["borderBottomLeftRadius"],
  borderEndEndRadius: ["borderBottomRightRadius"]
};
function a6(e10) {
  return { _skip_check_: true, value: e10 };
}
var h6 = {
  visit: (e10) => {
    const n10 = {};
    return Object.keys(e10).forEach((d11) => {
      const t14 = e10[d11], r4 = p3[d11];
      if (r4 && (typeof t14 == "number" || typeof t14 == "string")) {
        const o11 = g2(t14);
        r4.length && r4.notSplit ? r4.forEach((l20) => {
          n10[l20] = a6(t14);
        }) : r4.length === 1 ? n10[r4[0]] = a6(t14) : r4.length === 2 ? r4.forEach((l20, b5) => {
          n10[l20] = a6(o11[b5] ?? o11[0]);
        }) : r4.length === 4 ? r4.forEach((l20, b5) => {
          n10[l20] = a6(o11[b5] ?? o11[b5 - 2] ?? o11[0]);
        }) : n10[d11] = t14;
      } else
        n10[d11] = t14;
    }), n10;
  }
};

// node_modules/ant-design-x-vue/es/_util/cssinjs-utils/util/statistic.mjs
var u5 = typeof CSSINJS_STATISTIC < "u";
var i12 = true;
function l5(...r4) {
  if (!u5)
    return Object.assign({}, ...r4);
  i12 = false;
  const e10 = {};
  return r4.forEach((n10) => {
    if (typeof n10 != "object")
      return;
    Object.keys(n10).forEach((t14) => {
      Object.defineProperty(e10, t14, {
        configurable: true,
        enumerable: true,
        get: () => n10[t14]
      });
    });
  }), i12 = true, e10;
}
var f5 = {};
function a7() {
}
var y5 = (r4) => {
  let e10, n10 = r4, c16 = a7;
  return u5 && typeof Proxy < "u" && (e10 = /* @__PURE__ */ new Set(), n10 = new Proxy(r4, {
    get(t14, o11) {
      return i12 && (e10 == null || e10.add(o11)), t14[o11];
    }
  }), c16 = (t14, o11) => {
    var s16;
    f5[t14] = {
      global: Array.from(e10),
      component: {
        ...(s16 = f5[t14]) == null ? void 0 : s16.component,
        ...o11
      }
    };
  }), { token: n10, keys: e10, flush: c16 };
};

// node_modules/ant-design-x-vue/es/_util/cssinjs/hooks/useGlobalCache.mjs
function y6(i22, h16, m13, u16) {
  const n10 = y(), t14 = shallowRef(""), r4 = shallowRef();
  watchEffect(() => {
    t14.value = [i22, ...h16.value].join("%");
  });
  const s16 = (l20) => {
    n10.value.cache.update(l20, (e10) => {
      const [a18 = 0, c16] = e10 || [];
      return a18 - 1 === 0 ? (u16 == null || u16(c16, false), null) : [a18 - 1, c16];
    });
  };
  return watch(t14, (l20, e10) => {
    e10 && s16(e10), n10.value.cache.update(l20, (a18) => {
      const [c16 = 0, o11] = a18 || [], p9 = o11 || m13();
      return [c16 + 1, p9];
    }), r4.value = n10.value.cache.get(t14.value)[1];
  }, {
    immediate: true
  }), onBeforeUnmount(() => {
    s16(t14.value);
  }), r4;
}

// node_modules/ant-design-x-vue/es/_util/cssinjs/hooks/useStyleRegister/cacheMapUtil.mjs
var l6 = "data-ant-cssinjs-cache-path";
var f6 = "_FILE_STYLE__";
function h7(t14) {
  return Object.keys(t14).map((e10) => {
    const n10 = t14[e10];
    return `${e10}:${n10}`;
  }).join(";");
}
var o2;
var s6 = true;
function m4() {
  var t14;
  if (!o2 && (o2 = {}, e())) {
    const e10 = document.createElement("div");
    e10.className = l6, e10.style.position = "fixed", e10.style.visibility = "hidden", e10.style.top = "-9999px", document.body.appendChild(e10);
    let n10 = getComputedStyle(e10).content || "";
    n10 = n10.replace(/^"/, "").replace(/"$/, ""), n10.split(";").forEach((c16) => {
      const [a18, d11] = c16.split(":");
      o2[a18] = d11;
    });
    const i22 = document.querySelector(`style[${l6}]`);
    i22 && (s6 = false, (t14 = i22.parentNode) == null || t14.removeChild(i22)), document.body.removeChild(e10);
  }
}
function _3(t14) {
  return m4(), !!o2[t14];
}
function C2(t14) {
  const e10 = o2[t14];
  let n10 = null;
  if (e10 && e())
    if (s6)
      n10 = f6;
    else {
      const i22 = document.querySelector(`style[${h3}="${o2[t14]}"]`);
      i22 ? n10 = i22.innerHTML : delete o2[t14];
    }
  return [n10, e10];
}

// node_modules/ant-design-x-vue/es/_util/cssinjs/hooks/useStyleRegister/index.mjs
var H3 = e();
var Y2 = "_skip_check_";
var R3 = "_multi_value_";
function k3(t14) {
  return $e(ha(t14), da).replace(/\{%%%\:[^;];}/g, ";");
}
function V3(t14) {
  return typeof t14 == "object" && t14 && (Y2 in t14 || R3 in t14);
}
function ee2(t14, c16, m13) {
  if (!c16)
    return t14;
  const $3 = `.${c16}`, _8 = m13 === "low" ? `:where(${$3})` : $3;
  return t14.split(",").map((s16) => {
    var p9;
    const C6 = s16.trim().split(/\s+/);
    let v10 = C6[0] || "";
    const r4 = ((p9 = v10.match(/^\w+/)) == null ? void 0 : p9[0]) || "";
    return v10 = `${r4}${_8}${v10.slice(r4.length)}`, [v10, ...C6.slice(1)].join(" ");
  }).join(",");
}
var O = /* @__PURE__ */ new Set();
var N3 = (t14, c16 = {}, {
  root: m13,
  injectHash: $3,
  parentSelectors: _8
} = {
  root: true,
  parentSelectors: []
}) => {
  const {
    hashId: h16,
    layer: s16,
    path: C6,
    hashPriority: v10,
    transformers: r4 = [],
    linters: p9 = []
  } = c16;
  let f12 = "", y9 = {};
  function j4(o11) {
    const n10 = o11.getName(h16);
    if (!y9[n10]) {
      const [a18] = N3(o11.style, c16, {
        root: false,
        parentSelectors: _8
      });
      y9[n10] = `@keyframes ${o11.getName(h16)}${a18}`;
    }
  }
  function g8(o11, n10 = []) {
    return o11.forEach((a18) => {
      Array.isArray(a18) ? g8(a18, n10) : a18 && n10.push(a18);
    }), n10;
  }
  return g8(Array.isArray(t14) ? t14 : [t14]).forEach((o11) => {
    const n10 = typeof o11 == "string" && !m13 ? {} : o11;
    if (typeof n10 == "string")
      f12 += `${n10}
`;
    else if (n10._keyframe)
      j4(n10);
    else {
      const a18 = r4.reduce((S5, e10) => {
        var d11;
        return ((d11 = e10 == null ? void 0 : e10.visit) == null ? void 0 : d11.call(e10, S5)) || S5;
      }, n10);
      Object.keys(a18).forEach((S5) => {
        const e10 = a18[S5];
        if (typeof e10 == "object" && e10 && (S5 !== "animationName" || !e10._keyframe) && !V3(e10)) {
          let d11 = false, i22 = S5.trim(), l20 = false;
          (m13 || $3) && h16 ? i22.startsWith("@") ? d11 = true : i22 = ee2(S5, h16, v10) : m13 && !h16 && (i22 === "&" || i22 === "") && (i22 = "", l20 = true);
          const [u16, P5] = N3(e10, c16, {
            root: l20,
            injectHash: d11,
            parentSelectors: [..._8, i22]
          });
          y9 = {
            ...y9,
            ...P5
          }, f12 += `${i22}${u16}`;
        } else {
          let d11 = function(l20, u16) {
            const P5 = l20.replace(/[A-Z]/g, (w4) => `-${w4.toLowerCase()}`);
            let A7 = u16;
            !ua[l20] && typeof A7 == "number" && A7 !== 0 && (A7 = `${A7}px`), l20 === "animationName" && (u16 != null && u16._keyframe) && (j4(u16), A7 = u16.getName(h16)), f12 += `${P5}:${A7};`;
          };
          const i22 = (e10 == null ? void 0 : e10.value) ?? e10;
          typeof e10 == "object" && (e10 != null && e10[R3]) && Array.isArray(i22) ? i22.forEach((l20) => {
            d11(S5, l20);
          }) : d11(S5, i22);
        }
      });
    }
  }), m13 ? s16 && K2() : f12 = `{${f12}}`, [f12, y9];
};
function te2(t14, c16) {
  return fa(`${t14.join("%")}${c16}`);
}
function ye2(t14, c16) {
  const m13 = y(), $3 = computed(() => {
    var s16;
    return (s16 = t14.value) == null ? void 0 : s16.token._tokenKey;
  }), _8 = computed(() => {
    var s16;
    return [$3.value, ...((s16 = t14.value) == null ? void 0 : s16.path) || []];
  });
  let h16 = H3;
  return y6(
    "style",
    _8,
    // Create cache if needed
    () => {
      const {
        path: s16,
        hashId: C6,
        layer: v10,
        nonce: r4,
        clientOnly: p9,
        order: f12 = 0
      } = t14.value || {}, y9 = _8.value.join("|");
      if (_3(y9)) {
        const [l20, u16] = C2(y9);
        if (l20)
          return [l20, $3.value, u16, {}, p9, f12];
      }
      const j4 = c16(), {
        hashPriority: g8,
        container: E4,
        transformers: o11,
        linters: n10,
        cache: a18
      } = m13.value, [S5, e10] = N3(j4, {
        hashId: C6,
        hashPriority: g8,
        layer: v10,
        path: s16 == null ? void 0 : s16.join("-"),
        transformers: o11,
        linters: n10
      }), d11 = k3(S5), i22 = te2(_8.value, d11);
      if (h16) {
        const l20 = {
          mark: h3,
          prepend: "queue",
          attachTo: E4
        }, u16 = typeof r4 == "function" ? r4() : r4;
        u16 && (l20.csp = {
          nonce: u16
        });
        const P5 = M3(d11, i22, l20);
        P5[i5] = a18.instanceId, P5.setAttribute(q, $3.value), Object.keys(e10).forEach((A7) => {
          O.has(A7) || (O.add(A7), M3(k3(e10[A7]), `_effect-${A7}`, {
            mark: h3,
            prepend: "queue",
            attachTo: E4
          }));
        });
      }
      return [d11, $3.value, i22, e10, p9, f12];
    },
    // Remove cache if no need
    ([, , s16], C6) => {
      (C6 || m13.value.autoClear) && H3 && x2(s16, {
        mark: h3
      });
    }
  ), (s16) => s16;
}
function ue2(t14, c16 = false) {
  const m13 = "style%", $3 = Array.from(t14.cache.keys()).filter((r4) => r4.startsWith(m13)), _8 = {}, h16 = {};
  let s16 = "";
  function C6(r4, p9, f12, y9 = {}) {
    const j4 = {
      ...y9,
      [q]: p9,
      [h3]: f12
    }, g8 = Object.keys(j4).map((E4) => {
      const o11 = j4[E4];
      return o11 ? `${E4}="${o11}"` : null;
    }).filter((E4) => E4).join(" ");
    return c16 ? r4 : `<style ${g8}>${r4}</style>`;
  }
  return $3.map((r4) => {
    const p9 = r4.slice(m13.length).replace(/%/g, "|"), [f12, y9, j4, g8, E4, o11] = t14.cache.get(r4)[1];
    if (E4)
      return null;
    const n10 = {
      "data-vc-order": "prependQueue",
      "data-vc-priority": `${o11}`
    };
    let a18 = C6(f12, y9, j4, n10);
    return h16[p9] = j4, g8 && Object.keys(g8).forEach((e10) => {
      _8[e10] || (_8[e10] = true, a18 += C6(k3(g8[e10]), y9, `_effect-${e10}`, n10));
    }), [o11, a18];
  }).filter((r4) => r4).sort((r4, p9) => r4[0] - p9[0]).forEach(([, r4]) => {
    s16 += r4;
  }), s16 += C6(`.${l6}{content:"${h7(h16)}";}`, void 0, void 0, {
    [l6]: l6
  }), s16;
}

// node_modules/ant-design-x-vue/es/_util/cssinjs/hooks/useCSSVarRegister.mjs
var A2 = "cssVar";
var v2 = (r4, i22) => {
  const { key: t14, prefix: o11, unitless: s16, ignore: n10, token: c16, scope: e10 = "" } = r4, {
    cache: { instanceId: l20 },
    container: m13
  } = useContext(M), { _tokenKey: y9 } = c16, u16 = [...r4.path, t14, e10, y9];
  return y6(
    A2,
    u16,
    () => {
      const a18 = i22(), [S5, p9] = P3(a18, t14, {
        prefix: o11,
        unitless: s16,
        ignore: n10,
        scope: e10
      }), d11 = te2(u16, p9);
      return [S5, p9, d11, t14];
    },
    ([, , a18]) => {
      W2 && x2(a18, { mark: h3 });
    }
  );
};

// node_modules/ant-design-x-vue/es/_util/cssinjs-utils/util/calc/calculator.mjs
var t4 = class {
};

// node_modules/ant-design-x-vue/es/_util/cssinjs-utils/util/calc/CSSCalculator.mjs
var u6 = "CALC_UNIT";
var f7 = new RegExp(u6, "g");
function l7(r4) {
  return typeof r4 == "number" ? `${r4}${u6}` : r4;
}
var e3 = class _e2 extends t4 {
  constructor(t14, i22) {
    super(), this.result = "";
    const s16 = typeof t14;
    this.unitlessCssVar = i22, t14 instanceof _e2 ? this.result = `(${t14.result})` : s16 === "number" ? this.result = l7(t14) : s16 === "string" && (this.result = t14);
  }
  add(t14) {
    return t14 instanceof _e2 ? this.result = `${this.result} + ${t14.getResult()}` : (typeof t14 == "number" || typeof t14 == "string") && (this.result = `${this.result} + ${l7(t14)}`), this.lowPriority = true, this;
  }
  sub(t14) {
    return t14 instanceof _e2 ? this.result = `${this.result} - ${t14.getResult()}` : (typeof t14 == "number" || typeof t14 == "string") && (this.result = `${this.result} - ${l7(t14)}`), this.lowPriority = true, this;
  }
  mul(t14) {
    return this.lowPriority && (this.result = `(${this.result})`), t14 instanceof _e2 ? this.result = `${this.result} * ${t14.getResult(true)}` : (typeof t14 == "number" || typeof t14 == "string") && (this.result = `${this.result} * ${t14}`), this.lowPriority = false, this;
  }
  div(t14) {
    return this.lowPriority && (this.result = `(${this.result})`), t14 instanceof _e2 ? this.result = `${this.result} / ${t14.getResult(true)}` : (typeof t14 == "number" || typeof t14 == "string") && (this.result = `${this.result} / ${t14}`), this.lowPriority = false, this;
  }
  getResult(t14) {
    return this.lowPriority || t14 ? `(${this.result})` : this.result;
  }
  equal(t14) {
    const { unit: i22 } = t14 || {};
    let s16 = true;
    return typeof i22 == "boolean" ? s16 = i22 : Array.from(this.unitlessCssVar).some((h16) => this.result.includes(h16)) && (s16 = false), this.result = this.result.replace(f7, s16 ? "px" : ""), typeof this.lowPriority < "u" ? `calc(${this.result})` : this.result;
  }
};

// node_modules/ant-design-x-vue/es/_util/cssinjs-utils/util/calc/NumCalculator.mjs
var t5 = class _t2 extends t4 {
  constructor(e10) {
    super(), this.result = 0, e10 instanceof _t2 ? this.result = e10.result : typeof e10 == "number" && (this.result = e10);
  }
  add(e10) {
    return e10 instanceof _t2 ? this.result += e10.result : typeof e10 == "number" && (this.result += e10), this;
  }
  sub(e10) {
    return e10 instanceof _t2 ? this.result -= e10.result : typeof e10 == "number" && (this.result -= e10), this;
  }
  mul(e10) {
    return e10 instanceof _t2 ? this.result *= e10.result : typeof e10 == "number" && (this.result *= e10), this;
  }
  div(e10) {
    return e10 instanceof _t2 ? this.result /= e10.result : typeof e10 == "number" && (this.result /= e10), this;
  }
  equal() {
    return this.result;
  }
};

// node_modules/ant-design-x-vue/es/_util/cssinjs-utils/util/calc/index.mjs
var m5 = (o11, r4) => {
  const t14 = o11 === "css" ? e3 : t5;
  return (a18) => new t14(a18, r4);
};

// node_modules/ant-design-x-vue/es/_util/cssinjs-utils/util/getCompVarPrefix.mjs
var o3 = (e10, a18) => `${[
  a18,
  e10.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")
].filter(Boolean).join("-")}`;

// node_modules/ant-design-x-vue/es/_util/cssinjs-utils/util/getComponentToken.mjs
function j3(E4, g8 = {}, b5, a18) {
  const r4 = {
    ...g8[E4]
  };
  if (a18 != null && a18.deprecatedTokens) {
    const { deprecatedTokens: f12 } = a18;
    f12.forEach(([h16, c16]) => {
      (r4 != null && r4[h16] || r4 != null && r4[c16]) && (r4[c16] ?? (r4[c16] = r4 == null ? void 0 : r4[h16]));
    });
  }
  const d11 = { ...b5, ...r4 };
  return Object.keys(d11).forEach((f12) => {
    d11[f12] === g8[f12] && delete d11[f12];
  }), d11;
}

// node_modules/ant-design-x-vue/es/_util/cssinjs-utils/util/getDefaultComponentToken.mjs
function e4(o11, n10 = {}, r4) {
  return typeof r4 == "function" ? r4(
    l5(n10, n10[o11] ?? {})
  ) : r4 ?? {};
}

// node_modules/ant-design-x-vue/es/_util/cssinjs-utils/util/maxmin.mjs
function u7(n10) {
  return n10 === "js" ? { max: Math.max, min: Math.min } : {
    max: (...m13) => `max(${m13.map((i22) => D2(i22)).join(",")})`,
    min: (...m13) => `min(${m13.map((i22) => D2(i22)).join(",")})`
  };
}

// node_modules/ant-design-x-vue/es/_util/cssinjs-utils/_util/hooks/useUniqueMemo.mjs
var i13 = Object.defineProperty;
var n2 = (a18, t14, e10) => t14 in a18 ? i13(a18, t14, { enumerable: true, configurable: true, writable: true, value: e10 }) : a18[t14] = e10;
var c8 = (a18, t14, e10) => n2(a18, typeof t14 != "symbol" ? t14 + "" : t14, e10);
var h8 = 1e3 * 60 * 10;
var p4 = class {
  constructor() {
    c8(this, "map", /* @__PURE__ */ new Map());
    c8(this, "objectIDMap", /* @__PURE__ */ new WeakMap());
    c8(this, "nextID", 0);
    c8(this, "lastAccessBeat", /* @__PURE__ */ new Map());
    c8(this, "accessBeat", 0);
  }
  set(t14, e10) {
    this.clear();
    const s16 = this.getCompositeKey(t14);
    this.map.set(s16, e10), this.lastAccessBeat.set(s16, Date.now());
  }
  get(t14) {
    const e10 = this.getCompositeKey(t14), s16 = this.map.get(e10);
    return this.lastAccessBeat.set(e10, Date.now()), this.accessBeat += 1, s16;
  }
  getCompositeKey(t14) {
    return t14.map((s16) => s16 && typeof s16 == "object" ? `obj_${this.getObjectID(s16)}` : `${typeof s16}_${s16}`).join("|");
  }
  getObjectID(t14) {
    if (this.objectIDMap.has(t14))
      return this.objectIDMap.get(t14);
    const e10 = this.nextID;
    return this.objectIDMap.set(t14, e10), this.nextID += 1, e10;
  }
  clear() {
    if (this.accessBeat > 1e4) {
      const t14 = Date.now();
      this.lastAccessBeat.forEach((e10, s16) => {
        t14 - e10 > h8 && (this.map.delete(s16), this.lastAccessBeat.delete(s16));
      }), this.accessBeat = 0;
    }
  }
};
var o4 = new p4();
function l8(a18, t14) {
  return computed(() => {
    const e10 = o4.get(t14);
    if (e10)
      return e10;
    const s16 = a18();
    return o4.set(t14, s16), s16;
  });
}

// node_modules/ant-design-x-vue/es/_util/cssinjs-utils/hooks/useCSP.mjs
var e5 = () => ({});

// node_modules/ant-design-x-vue/es/_util/cssinjs-utils/util/genStyleUtils.mjs
function xe(j4) {
  const {
    useCSP: z2 = e5,
    useToken: T4,
    usePrefix: D6,
    getResetStyles: U2,
    getCommonStyle: O4,
    getCompUnitless: P5
  } = j4;
  function L5(e10, S5, c16, t14) {
    const i22 = Array.isArray(e10) ? e10[0] : e10;
    function o11(r4) {
      return `${String(i22)}${r4.slice(0, 1).toUpperCase()}${r4.slice(1)}`;
    }
    const m13 = (t14 == null ? void 0 : t14.unitless) || {}, u16 = {
      ...typeof P5 == "function" ? P5(e10) : {},
      [o11("zIndexPopup")]: true
    };
    Object.keys(m13).forEach((r4) => {
      u16[o11(r4)] = m13[r4];
    });
    const f12 = {
      ...t14,
      unitless: u16,
      prefixToken: o11
    }, s16 = v10(e10, S5, c16, f12), l20 = B4(i22, c16, f12);
    return (r4, a18 = toValue(r4)) => {
      const [, n10] = s16(toValue(r4), a18), [y9, d11] = l20(a18);
      return [y9, n10, d11];
    };
  }
  function B4(e10, S5, c16) {
    const {
      unitless: t14,
      injectStyle: i22 = true,
      prefixToken: o11,
      ignore: m13
    } = c16, p9 = ({
      rootCls: f12,
      cssVar: s16 = {}
    }) => {
      const {
        realToken: l20
      } = T4();
      return v2({
        path: [e10],
        prefix: s16.prefix,
        key: s16.key,
        unitless: t14,
        ignore: m13,
        token: l20,
        scope: f12
      }, () => {
        const r4 = e4(e10, l20, S5), a18 = j3(e10, l20, r4, {
          deprecatedTokens: c16 == null ? void 0 : c16.deprecatedTokens
        });
        return Object.keys(r4).forEach((n10) => {
          a18[o11(n10)] = a18[n10], delete a18[n10];
        }), a18;
      }), null;
    };
    return (f12) => {
      const {
        cssVar: s16
      } = T4();
      return [(l20) => i22 && s16 ? createVNode(Fragment, null, [createVNode(p9, {
        rootCls: f12,
        cssVar: s16,
        component: e10
      }, null), l20]) : l20, s16 == null ? void 0 : s16.key];
    };
  }
  function v10(e10, S5, c16, t14 = {}) {
    const i22 = Array.isArray(e10) ? e10 : [e10, e10], [o11] = i22, m13 = i22.join("-"), p9 = j4.layer || {
      name: "antd"
    };
    return (u16, f12 = u16) => {
      const {
        theme: s16,
        realToken: l20,
        hashId: r4,
        token: a18,
        cssVar: n10
      } = T4(), {
        rootPrefixCls: y9,
        iconPrefixCls: d11
      } = D6(), R7 = z2(), x8 = n10 ? "css" : "js", J2 = unref(l8(() => {
        const C6 = /* @__PURE__ */ new Set();
        return n10 && Object.keys(t14.unitless || {}).forEach((h16) => {
          C6.add(_2(h16, n10.prefix)), C6.add(_2(h16, o3(o11, n10.prefix)));
        }), m5(x8, C6);
      }, [x8, o11, n10 == null ? void 0 : n10.prefix])), {
        max: K4,
        min: Q2
      } = u7(x8), $3 = computed(() => ({
        theme: s16.value,
        token: a18.value,
        hashId: r4.value,
        nonce: () => R7.nonce,
        clientOnly: t14.clientOnly,
        layer: p9,
        // antd is always at top of styles
        order: t14.order || -999
      }));
      return typeof U2 == "function" && ye2(computed(() => ({
        ...$3.value,
        clientOnly: false,
        path: ["Shared", y9]
      })), () => U2(a18.value, {
        prefix: {
          rootPrefixCls: y9,
          iconPrefixCls: d11
        },
        csp: R7
      })), [ye2(computed(() => ({
        ...$3.value,
        path: [m13, u16, d11]
      })), () => {
        if (t14.injectStyle === false)
          return [];
        const {
          token: C6,
          flush: h16
        } = y5(a18), g8 = e4(o11, l20, c16), W4 = `.${u16}`, b5 = j3(o11, l20, g8, {
          deprecatedTokens: t14.deprecatedTokens
        });
        n10 && g8 && typeof g8 == "object" && Object.keys(g8).forEach((w4) => {
          g8[w4] = `var(${_2(w4, o3(o11, n10.prefix))})`;
        });
        const I5 = computed(() => l5(C6.value, {
          componentCls: W4,
          prefixCls: u16,
          iconCls: `.${d11}`,
          antCls: `.${y9}`,
          calc: J2,
          // @ts-ignore
          max: K4,
          // @ts-ignore
          min: Q2
        }, n10 ? g8 : b5)), X5 = computed(() => S5(I5.value, {
          hashId: r4.value,
          prefixCls: u16,
          rootPrefixCls: y9,
          iconPrefixCls: d11
        }));
        h16(o11, b5);
        const Y4 = typeof O4 == "function" ? O4(I5.value, u16, f12, t14.resetFont) : null;
        return [t14.resetStyle === false ? null : Y4, X5.value];
      }), r4];
    };
  }
  function G3(e10, S5, c16, t14 = {}) {
    const i22 = v10(e10, S5, c16, {
      resetStyle: false,
      // Sub Style should default after root one
      order: -998,
      ...t14
    });
    return ({
      prefixCls: m13,
      rootCls: p9 = m13
    }) => (i22(m13, p9), null);
  }
  return {
    genStyleHooks: L5,
    genSubStyleComponent: G3,
    genComponentStyleHook: v10
  };
}

// node_modules/ant-design-x-vue/es/_util/cssinjs/hooks/useCacheToken.mjs
var k4 = {};
var I = "css";
var a8 = /* @__PURE__ */ new Map();
function K3(e10) {
  a8.set(e10, (a8.get(e10) || 0) + 1);
}
function N4(e10, s16) {
  typeof document < "u" && document.querySelectorAll(`style[${q}="${e10}"]`).forEach((n10) => {
    var t14;
    n10[i5] === s16 && ((t14 = n10.parentNode) == null || t14.removeChild(n10));
  });
}
var D3 = 0;
function O2(e10, s16) {
  a8.set(e10, (a8.get(e10) || 0) - 1);
  const o11 = Array.from(a8.keys()), n10 = o11.filter((t14) => (a8.get(t14) || 0) <= 0);
  o11.length - n10.length > D3 && n10.forEach((t14) => {
    N4(t14, s16), a8.delete(t14);
  });
}
var A3 = (e10, s16, o11, n10) => {
  let u16 = {
    ...o11 == null ? void 0 : o11.getDerivativeToken(e10),
    ...s16
  };
  return n10 && (u16 = n10(u16)), u16;
};
function H5(e10, s16, o11 = ref({})) {
  const n10 = y(), t14 = computed(() => Object.assign({}, ...s16.value || [])), u16 = computed(() => h5(t14.value)), m13 = computed(() => {
    var r4;
    return h5(((r4 = o11.value) == null ? void 0 : r4.override) || k4);
  });
  return y6("token", computed(() => {
    var r4, c16;
    return [((r4 = o11.value) == null ? void 0 : r4.salt) || "", (c16 = e10.value) == null ? void 0 : c16.id, u16.value, m13.value];
  }), () => {
    const {
      salt: r4 = "",
      override: c16 = k4,
      formatToken: g8,
      getComputedToken: d11
    } = o11.value || {}, l20 = d11 ? d11(t14.value, c16, e10.value) : A3(t14.value, c16, e10.value, g8), v10 = k2(l20, r4);
    l20._tokenKey = v10, K3(v10);
    const T4 = `${I}-${fa(v10)}`;
    return l20._hashId = T4, [l20, T4];
  }, (r4) => {
    var c16;
    O2(r4[0]._tokenKey, (c16 = n10.value) == null ? void 0 : c16.cache.instanceId);
  });
}

// node_modules/ant-design-x-vue/es/_util/cssinjs/theme/createTheme.mjs
var t6 = new u3();
function h9(r4) {
  const e10 = Array.isArray(r4) ? r4 : [r4];
  return t6.has(e10) || t6.set(e10, new s5(e10)), t6.get(e10);
}

// node_modules/ant-design-x-vue/es/theme/patch-antd.mjs
var e6 = {
  size: true,
  sizeSM: true,
  sizeLG: true,
  sizeMD: true,
  sizeXS: true,
  sizeXXS: true,
  sizeMS: true,
  sizeXL: true,
  sizeXXL: true,
  sizeUnit: true,
  sizeStep: true,
  motionBase: true,
  motionUnit: true
};
var t7 = {
  lineHeight: true,
  lineHeightSM: true,
  lineHeightLG: true,
  lineHeightHeading1: true,
  lineHeightHeading2: true,
  lineHeightHeading3: true,
  lineHeightHeading4: true,
  lineHeightHeading5: true,
  opacityLoading: true,
  fontWeightStrong: true,
  zIndexPopupBase: true,
  zIndexBase: true,
  opacityImage: true
};

// node_modules/ant-design-x-vue/es/version/version.mjs
var e7 = "1.0.3";

// node_modules/ant-design-x-vue/es/theme/useToken.mjs
var D4 = h9(theme_default.defaultAlgorithm);
var y7 = {
  screenXS: true,
  screenXSMin: true,
  screenXSMax: true,
  screenSM: true,
  screenSMMin: true,
  screenSMMax: true,
  screenMD: true,
  screenMDMin: true,
  screenMDMax: true,
  screenLG: true,
  screenLGMin: true,
  screenLGMax: true,
  screenXL: true,
  screenXLMin: true,
  screenXLMax: true,
  screenXXL: true,
  screenXXLMin: true
};
var d4 = (s16, c16, u16) => {
  const n10 = u16.getDerivativeToken(s16), { override: h16, ...t14 } = c16;
  let r4 = {
    ...n10,
    override: h16
  };
  return r4 = formatToken(r4), t14 && Object.entries(t14).forEach(([a18, m13]) => {
    const { theme: o11, ...i22 } = m13;
    let k6 = i22;
    o11 && (k6 = d4(
      {
        ...r4,
        ...i22
      },
      {
        override: i22
      },
      o11
    )), r4[a18] = k6;
  }), r4;
};
function I2() {
  const { token: s16, hashId: c16, theme: u16 } = theme_default.useToken(), n10 = computed(() => ({
    token: s16.value,
    hashed: c16.value,
    theme: u16.value
  })), {
    // @ts-expect-error
    override: h16,
    // @ts-expect-error
    cssVar: t14
  } = unref(n10), r4 = computed(() => n10.value.token), a18 = computed(() => n10.value.hashed), m13 = computed(() => n10.value.theme ?? D4), o11 = H5(
    // @ts-expect-error
    computed(() => m13.value),
    computed(() => [theme_default.defaultSeed, r4.value]),
    computed(() => ({
      salt: `${e7}-${a18.value || ""}`,
      override: h16,
      getComputedToken: d4,
      cssVar: t14 && {
        prefix: t14.prefix,
        key: t14.key,
        unitless: t7,
        ignore: e6,
        preserve: y7
      }
    }))
  ), [
    i22,
    // token
    k6,
    // hashId
    // @ts-expect-error
    p9
  ] = unref(o11), f12 = computed(() => o11.value[0]), T4 = computed(() => a18.value ? o11.value[1] : "");
  return [m13, p9, T4, f12, t14];
}

// node_modules/ant-design-x-vue/es/theme/genStyleUtils.mjs
var { genStyleHooks: C3, genComponentStyleHook: c9, genSubStyleComponent: P4 } = xe({
  usePrefix: () => {
    const { getPrefixCls: e10, iconPrefixCls: o11 } = c();
    return {
      iconPrefixCls: unref(o11),
      rootPrefixCls: e10()
    };
  },
  useToken: () => {
    const [e10, o11, r4, t14, s16] = I2();
    return { theme: e10, realToken: o11, hashId: r4, token: t14, cssVar: s16 };
  },
  useCSP: () => {
    const { csp: e10 } = c();
    return (e10 == null ? void 0 : e10.value) ?? {};
  },
  layer: {
    name: "antdx",
    dependencies: ["antd"]
  }
});

// node_modules/ant-design-x-vue/es/bubble/style/content.mjs
var g3 = (r4) => {
  const { componentCls: d11, paddingSM: o11, padding: n10 } = r4;
  return {
    [d11]: {
      [`${d11}-content`]: {
        // Shared: filled, outlined, shadow
        "&-filled,&-outlined,&-shadow": {
          padding: `${D2(o11)} ${D2(n10)}`,
          borderRadius: r4.borderRadiusLG
        },
        // Filled:
        "&-filled": {
          backgroundColor: r4.colorFillContent
        },
        // Outlined:
        "&-outlined": {
          border: `1px solid ${r4.colorBorderSecondary}`
        },
        // Shadow:
        "&-shadow": {
          boxShadow: r4.boxShadowTertiary
        }
      }
    }
  };
};
var h10 = (r4) => {
  const { componentCls: d11, fontSize: o11, lineHeight: n10, paddingSM: a18, padding: l20, calc: e10 } = r4, s16 = e10(o11).mul(n10).div(2).add(a18).equal(), t14 = `${d11}-content`;
  return {
    [d11]: {
      [t14]: {
        // round:
        "&-round": {
          borderRadius: {
            _skip_check_: true,
            value: s16
          },
          paddingInline: e10(l20).mul(1.25).equal()
        }
      },
      // corner:
      [`&-start ${t14}-corner`]: {
        borderStartStartRadius: r4.borderRadiusXS
      },
      [`&-end ${t14}-corner`]: {
        borderStartEndRadius: r4.borderRadiusXS
      }
    }
  };
};

// node_modules/ant-design-x-vue/es/bubble/style/list.mjs
var t8 = (r4) => {
  const { componentCls: o11, padding: l20 } = r4;
  return {
    [`${o11}-list`]: {
      display: "flex",
      flexDirection: "column",
      gap: l20,
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        width: 8,
        backgroundColor: "transparent"
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: r4.colorTextTertiary,
        borderRadius: r4.borderRadiusSM
      },
      // For Firefox
      "&": {
        scrollbarWidth: "thin",
        scrollbarColor: `${r4.colorTextTertiary} transparent`
      }
    }
  };
};

// node_modules/ant-design-x-vue/es/bubble/style/index.mjs
var g4 = new a5("loadingMove", {
  "0%": {
    transform: "translateY(0)"
  },
  "10%": {
    transform: "translateY(4px)"
  },
  "20%": {
    transform: "translateY(0)"
  },
  "30%": {
    transform: "translateY(-4px)"
  },
  "40%": {
    transform: "translateY(0)"
  }
});
var u8 = new a5("cursorBlink", {
  "0%": {
    opacity: 1
  },
  "50%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
});
var h11 = (n10) => {
  const { componentCls: t14, fontSize: e10, lineHeight: o11, paddingSM: i22, colorText: l20, calc: a18 } = n10;
  return {
    [t14]: {
      display: "flex",
      columnGap: i22,
      [`&${t14}-end`]: {
        justifyContent: "end",
        flexDirection: "row-reverse",
        [`& ${t14}-content-wrapper`]: {
          alignItems: "flex-end"
        }
      },
      [`&${t14}-rtl`]: {
        direction: "rtl"
      },
      [`&${t14}-typing ${t14}-content:last-child::after`]: {
        content: '"|"',
        fontWeight: 900,
        userSelect: "none",
        opacity: 1,
        marginInlineStart: "0.1em",
        animationName: u8,
        animationDuration: "0.8s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear"
      },
      // ============================ Avatar =============================
      [`& ${t14}-avatar`]: {
        display: "inline-flex",
        justifyContent: "center",
        alignSelf: "flex-start"
      },
      // ======================== Header & Footer ========================
      [`& ${t14}-header, & ${t14}-footer`]: {
        fontSize: e10,
        lineHeight: o11,
        color: n10.colorText
      },
      [`& ${t14}-header`]: {
        marginBottom: n10.paddingXXS
      },
      [`& ${t14}-footer`]: {
        marginTop: i22
      },
      // =========================== Content =============================
      [`& ${t14}-content-wrapper`]: {
        flex: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        minWidth: 0,
        maxWidth: "100%"
      },
      [`& ${t14}-content`]: {
        position: "relative",
        boxSizing: "border-box",
        minWidth: 0,
        maxWidth: "100%",
        color: l20,
        fontSize: n10.fontSize,
        lineHeight: n10.lineHeight,
        minHeight: a18(i22).mul(2).add(a18(o11).mul(e10)).equal(),
        wordBreak: "break-word",
        [`& ${t14}-dot`]: {
          position: "relative",
          height: "100%",
          display: "flex",
          alignItems: "center",
          columnGap: n10.marginXS,
          padding: `0 ${D2(n10.paddingXXS)}`,
          "&-item": {
            backgroundColor: n10.colorPrimary,
            borderRadius: "100%",
            width: 4,
            height: 4,
            animationName: g4,
            animationDuration: "2s",
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
            "&:nth-child(1)": {
              animationDelay: "0s"
            },
            "&:nth-child(2)": {
              animationDelay: "0.2s"
            },
            "&:nth-child(3)": {
              animationDelay: "0.4s"
            }
          }
        }
      }
    }
  };
};
var y8 = () => ({});
var H6 = C3(
  "Bubble",
  (n10) => {
    const t14 = l5(n10, {});
    return [
      h11(t14),
      t8(t14),
      g3(t14),
      h10(t14)
    ];
  },
  y8
);

// node_modules/ant-design-x-vue/es/bubble/context.mjs
var u9 = Symbol("BubbleContext");
var o5 = shallowRef();
var f8 = (e10) => {
  provide(u9, e10), watch(
    e10,
    () => {
      o5.value = unref(e10), triggerRef(o5);
    },
    { immediate: true, deep: true }
  );
};
var B2 = () => inject(
  u9,
  computed(() => o5.value || {})
);
var v3 = defineComponent({
  props: {
    value: c3()
  },
  setup(e10, { slots: t14 }) {
    return f8(computed(() => e10.value)), () => {
      var r4;
      return (r4 = t14.default) == null ? void 0 : r4.call(t14);
    };
  }
});

// node_modules/ant-design-x-vue/es/bubble/Bubble.mjs
var ce = defineComponent({
  name: "AXBubble",
  __name: "Bubble",
  props: {
    prefixCls: {},
    rootClassName: {},
    styles: {
      default: () => ({})
    },
    classNames: {
      default: () => ({})
    },
    avatar: {},
    placement: {
      default: "start"
    },
    loading: {
      type: Boolean,
      default: false
    },
    typing: {},
    content: {
      default: ""
    },
    messageRender: {},
    loadingRender: {},
    variant: {
      default: "filled"
    },
    shape: {},
    _key: {},
    onTypingComplete: {},
    header: {},
    footer: {}
  },
  setup(e10, {
    expose: $3
  }) {
    const b5 = c2(e10, ["prefixCls", "rootClassName", "classNames", "styles", "avatar", "placement", "loading", "loadingRender", "typing", "content", "messageRender", "variant", "shape", "onTypingComplete", "header", "footer", "_key"]);
    toRef(e10, "content"), toRef(e10, "prefixCls");
    const a18 = useSlots(), y9 = ref(e10.content);
    watch(() => e10.content, () => {
      y9.value = e10.content;
    });
    const {
      onUpdate: c16
    } = unref(B2()), g8 = ref(null), {
      direction: R7,
      getPrefixCls: k6
    } = c(), t14 = k6("bubble", e10.prefixCls), n10 = c4("bubble"), [T4, P5, S5, C6] = i3(() => e10.typing), [s16, f12] = h2(y9, T4, P5, S5), u16 = ref(false);
    watch(s16, () => {
      c16 == null || c16();
    }), watchEffect(() => {
      var o11;
      !f12.value && !e10.loading ? u16.value || (u16.value = true, (o11 = e10.onTypingComplete) == null || o11.call(e10)) : u16.value = false;
    });
    const [V5, A7, w4] = H6(() => t14), B4 = computed(() => [t14, e10.rootClassName, n10.value.className, A7.value, w4, `${t14}-${e10.placement}`, {
      [`${t14}-rtl`]: R7.value === "rtl"
    }, {
      [`${t14}-typing`]: f12.value && !e10.loading && !e10.messageRender && !a18.message && !C6.value
    }]), E4 = (o11) => Array.isArray(o11) && o11.every(isVNode), I5 = computed(() => a18.avatar ? a18.avatar() : typeof e10.avatar == "function" ? e10.avatar() : isVNode(e10.avatar) || E4(e10.avatar) ? e10.avatar : createVNode(avatar_default, e10.avatar, null)), X5 = computed(() => a18.message ? a18.message({
      content: s16.value
    }) : e10.messageRender ? e10.messageRender(s16.value) : s16.value), j4 = computed(() => e10.loading ? a18.loading ? a18.loading() : e10.loadingRender ? e10.loadingRender() : createVNode(n, {
      prefixCls: t14
    }, null) : createVNode(Fragment, null, [X5.value, f12.value && toValue(C6)])), F = computed(() => {
      const o11 = createVNode("div", {
        style: {
          ...n10.value.styles.content,
          ...e10.styles.content
        },
        class: [`${t14}-content`, `${t14}-content-${e10.variant}`, {
          [`${t14}-content-${e10.shape}`]: e10.shape
        }, n10.value.classNames.content, e10.classNames.content]
      }, [toValue(j4)]), m13 = a18.header ? a18.header({
        content: s16.value,
        info: {
          key: e10._key
        }
      }) : typeof e10.header == "function" ? e10.header(s16.value, {
        key: e10._key
      }) : e10.header, d11 = a18.footer ? a18.footer({
        content: s16.value,
        info: {
          key: e10._key
        }
      }) : typeof e10.footer == "function" ? e10.footer(s16.value, {
        key: e10._key
      }) : e10.footer;
      return m13 || d11 ? createVNode("div", {
        class: `${t14}-content-wrapper`
      }, [m13 && createVNode("div", {
        class: [`${t14}-header`, n10.value.classNames.header, e10.classNames.header],
        style: {
          ...n10.value.styles.header,
          ...e10.styles.header
        }
      }, [m13]), o11, d11 && createVNode("div", {
        class: [`${t14}-footer`, n10.value.classNames.footer, e10.classNames.footer],
        style: {
          ...n10.value.styles.footer,
          ...e10.styles.footer
        }
      }, [d11])]) : o11;
    });
    return $3({
      nativeElement: g8
    }), () => V5(createVNode("div", mergeProps({
      style: {
        ...n10.value.style
        // ...(style as object),
      },
      class: toValue(B4)
    }, b5, {
      ref: g8
    }), [(a18.avatar || e10.avatar) && createVNode("div", {
      style: {
        ...n10.value.styles.avatar,
        ...e10.styles.avatar
      },
      class: [`${t14}-avatar`, n10.value.classNames.avatar, e10.classNames.avatar]
    }, [toValue(I5)]), toValue(F)]));
  }
});

// node_modules/ant-design-x-vue/es/_util/hooks/use-event-callback.mjs
function n3(a18) {
  const e10 = ref(a18), t14 = ref((u16) => {
    e10.value && e10.value(u16);
  });
  return e10.value = a18, t14.value;
}

// node_modules/ant-design-x-vue/es/_util/pick-attrs.mjs
var l9 = `accept acceptcharset accesskey action allowfullscreen allowtransparency
alt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge
charset checked classid class colspan cols content contenteditable contextmenu
controls coords crossorigin data datetime default defer dir disabled download draggable
enctype form formaction formenctype formmethod formnovalidate formtarget frameborder
headers height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity
is keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media
mediagroup method min minlength multiple muted name novalidate nonce open
optimum pattern placeholder poster preload radiogroup readonly rel required
reversed role rowspan rows sandbox scope scoped scrolling seamless selected
shape size sizes span spellcheck src srcdoc srclang srcset start step style
summary tabindex target title type usemap value width wmode wrap`;
var c10 = `onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`;
var r2 = `${l9} ${c10}`.split(/[\s\n]+/);
var i14 = "aria-";
var d5 = "data-";
function s7(t14, n10) {
  return t14.indexOf(n10) === 0;
}
function u10(t14, n10 = false) {
  let o11;
  n10 === false ? o11 = {
    aria: true,
    data: true,
    attr: true
  } : n10 === true ? o11 = {
    aria: true
  } : o11 = {
    ...n10
  };
  const a18 = {};
  return Object.keys(t14).forEach((e10) => {
    (o11.aria && (e10 === "role" || s7(e10, i14)) || // Data
    o11.data && s7(e10, d5) || // Attr
    o11.attr && (r2.includes(e10) || r2.includes(e10.toLowerCase()))) && (a18[e10] = t14[e10]);
  }), a18;
}

// node_modules/ant-design-x-vue/es/bubble/hooks/useDisplayData.mjs
function v4(a18) {
  const [o11, u16] = f2(a18.value.length), t14 = computed(() => a18.value.slice(0, unref(o11))), i22 = computed(() => {
    const l20 = unref(t14)[unref(t14).length - 1];
    return l20 ? l20.key : null;
  });
  watch(
    a18,
    () => {
      var l20;
      if (u16(a18.value.length), !(unref(t14).length && unref(t14).every((n10, y9) => {
        var r4;
        return n10.key === ((r4 = a18.value[y9]) == null ? void 0 : r4.key);
      }))) {
        if (unref(t14).length === 0)
          u16(1);
        else
          for (let n10 = 0; n10 < unref(t14).length; n10 += 1)
            if (unref(t14)[n10].key !== ((l20 = a18.value[n10]) == null ? void 0 : l20.key)) {
              u16(n10);
              break;
            }
      }
    },
    { immediate: true, deep: true }
  );
  const p9 = n3((l20) => {
    l20 === unref(i22) && u16(unref(o11) + 1);
  });
  return [t14, p9];
}

// node_modules/ant-design-x-vue/es/bubble/hooks/useListData.mjs
function p5(u16, e10) {
  const o11 = (t14, r4) => {
    var n10;
    return typeof e10.value == "function" ? e10.value(t14, r4) : e10 ? ((n10 = e10.value) == null ? void 0 : n10[t14.role]) || {} : {};
  };
  return computed(() => (u16.value || []).map((t14, r4) => {
    const n10 = t14.key ?? `preset_${r4}`;
    return {
      ...o11(t14, r4),
      ...t14,
      key: n10
    };
  }));
}

// node_modules/ant-design-x-vue/es/bubble/BubbleList.mjs
var it2 = 1;
var It2 = defineComponent({
  name: "AXBubbleList",
  inheritAttrs: false,
  __name: "BubbleList",
  props: mergeDefaults({
    prefixCls: null,
    rootClassName: null,
    items: null,
    autoScroll: {
      type: Boolean
    },
    roles: null
  }, {
    autoScroll: true
  }),
  setup(s16, {
    expose: L5
  }) {
    const N6 = c2(s16, ["prefixCls", "rootClassName", "items", "autoScroll", "roles"]);
    toRef(s16, "roles"), toRef(s16, "items"), toRef(s16, "prefixCls");
    const w4 = useAttrs(), r4 = useSlots(), B4 = computed(() => u10(mergeProps(N6, w4), {
      attr: true,
      aria: true
    })), R7 = ref(s16.items), P5 = ref(s16.roles);
    watch(() => s16.items, () => {
      R7.value = s16.items;
    }), watch(() => s16.roles, () => {
      P5.value = s16.roles;
    });
    const i22 = ref(null), u16 = ref({}), {
      getPrefixCls: H8
    } = c(), I5 = H8("bubble", s16.prefixCls), E4 = `${I5}-list`, [U2, $3, z2] = H6(I5), [X5, D6] = f2(false);
    watchPostEffect(() => {
      D6(true), onWatcherCleanup(() => {
        D6(false);
      });
    });
    const y9 = p5(R7, P5), [m13, K4] = v4(y9), [T4, C6] = f2(true), [h16, V5] = f2(0), M5 = (t14) => {
      const a18 = t14.target;
      C6(a18.scrollHeight - Math.abs(a18.scrollTop) - a18.clientHeight <= it2);
    };
    watch(h16, () => {
      s16.autoScroll && unref(i22) && unref(T4) && nextTick(() => {
        unref(i22).scrollTo({
          top: unref(i22).scrollHeight
        });
      });
    }), watch(() => unref(m13).length, () => {
      var t14;
      if (s16.autoScroll) {
        const a18 = (t14 = unref(m13)[unref(m13).length - 2]) == null ? void 0 : t14.key, e10 = unref(u16)[a18];
        if (e10) {
          const {
            nativeElement: n10
          } = e10, {
            top: c16 = 0,
            bottom: f12 = 0
          } = (n10 == null ? void 0 : n10.getBoundingClientRect()) ?? {}, {
            top: l20,
            bottom: j4
          } = unref(i22).getBoundingClientRect();
          c16 < j4 && f12 > l20 && (V5(unref(h16) + 1), C6(true));
        }
      }
    });
    const O4 = n3(() => {
      s16.autoScroll && V5(unref(h16) + 1);
    }), W4 = computed(() => ({
      onUpdate: O4
    }));
    return L5({
      nativeElement: i22,
      scrollTo: ({
        key: t14,
        offset: a18,
        behavior: e10 = "smooth",
        block: n10
      }) => {
        if (typeof a18 == "number")
          unref(i22).scrollTo({
            top: a18,
            behavior: e10
          });
        else if (t14 !== void 0) {
          const c16 = unref(u16)[t14];
          if (c16) {
            const f12 = unref(m13).findIndex((l20) => l20.key === t14);
            C6(f12 === unref(m13).length - 1), c16.nativeElement.scrollIntoView({
              behavior: e10,
              block: n10
            });
          }
        }
      }
    }), () => U2(createVNode(v3, {
      value: W4.value
    }, {
      default: () => [createVNode("div", mergeProps(B4.value, {
        class: ga(E4, s16.rootClassName, $3.value, z2, {
          [`${E4}-reach-end`]: T4.value
        }),
        ref: i22,
        onScroll: M5
      }), [renderList(unref(m13), ({
        key: t14,
        onTypingComplete: a18,
        ...e10
      }) => {
        var n10, c16, f12;
        return createVNode(ce, mergeProps(e10, {
          avatar: r4.avatar ? () => {
            var l20;
            return (l20 = r4.avatar) == null ? void 0 : l20.call(r4, {
              item: {
                key: t14,
                ...e10
              }
            });
          } : e10.avatar,
          header: ((n10 = r4.header) == null ? void 0 : n10.call(r4, {
            item: {
              key: t14,
              ...e10
            }
          })) ?? e10.header,
          footer: ((c16 = r4.footer) == null ? void 0 : c16.call(r4, {
            item: {
              key: t14,
              ...e10
            }
          })) ?? e10.footer,
          loadingRender: r4.loading ? () => r4.loading({
            item: {
              key: t14,
              ...e10
            }
          }) : e10.loadingRender,
          content: ((f12 = r4.message) == null ? void 0 : f12.call(r4, {
            item: {
              key: t14,
              ...e10
            }
          })) ?? e10.content,
          key: t14,
          ref: (l20) => {
            l20 ? u16.value[t14] = l20 : delete u16.value[t14];
          },
          typing: X5.value ? e10.typing : false,
          onTypingComplete: () => {
            a18 == null || a18(), K4(t14);
          }
        }), null);
      })])]
    }));
  }
});

// node_modules/ant-design-x-vue/es/bubble/index.mjs
var t9 = Object.assign(ce, {
  List: It2
});
t9.install = function(n10) {
  return n10.component(t9.name, t9), n10.component(It2.name, It2), n10;
};

// node_modules/ant-design-x-vue/es/conversations/ConversationsItem.mjs
var S2 = defineComponent({
  name: "AXConversationsItem",
  __name: "ConversationsItem",
  props: {
    info: null,
    prefixCls: null,
    direction: null,
    menu: null,
    active: {
      type: Boolean
    },
    onClick: {
      type: Function
    }
  },
  setup(e10) {
    const u16 = c2(e10, ["prefixCls", "info", "class", "direction", "onClick", "active", "menu"]);
    toRef(e10, "class");
    const f12 = computed(() => u10(u16, {
      aria: true,
      data: true,
      attr: true
    })), m13 = (n10) => {
      n10.stopPropagation();
    }, l20 = computed(() => e10.info.disabled), [d11, g8] = f2(false), [C6, r4] = f2(false), v10 = computed(() => ga(e10.class, `${e10.prefixCls}-item`, {
      [`${e10.prefixCls}-item-active`]: e10.active && !l20.value
    }, {
      [`${e10.prefixCls}-item-disabled`]: l20.value
    })), x8 = () => {
      !l20.value && e10.onClick && e10.onClick(e10.info);
    }, b5 = (n10) => {
      n10 && r4(!n10);
    }, o11 = computed(() => {
      var n10;
      return (n10 = e10.menu) == null ? void 0 : n10.trigger;
    }), c16 = computed(() => {
      const {
        trigger: n10,
        ...a18
      } = e10.menu || {};
      return a18;
    }), P5 = computed(() => {
      var n10;
      return (n10 = c16.value) == null ? void 0 : n10.getPopupContainer;
    }), k6 = (n10) => {
      const a18 = createVNode(Rt, {
        onClick: m13,
        class: `${e10.prefixCls}-menu-icon`
      }, null);
      return o11.value ? typeof o11.value == "function" ? o11.value(n10, {
        originNode: a18
      }) : o11.value : a18;
    };
    return () => createVNode(tooltip_default, {
      title: e10.info.label,
      open: d11.value && C6.value,
      onOpenChange: r4,
      placement: e10.direction === "rtl" ? "left" : "right"
    }, {
      default: () => [createVNode("li", mergeProps(f12.value, {
        class: v10.value,
        onClick: x8
      }), [e10.info.icon && createVNode("div", {
        class: `${e10.prefixCls}-icon`
      }, [e10.info.icon]), createVNode(typography_default.Text, {
        class: `${e10.prefixCls}-label`,
        ellipsis: {
          onEllipsis: g8
        }
      }, {
        default: () => [e10.info.label]
      }), !l20.value && e10.menu && createVNode(dropdown_default, {
        placement: e10.direction === "rtl" ? "bottomLeft" : "bottomRight",
        trigger: ["click"],
        disabled: l20.value,
        onOpenChange: b5,
        getPopupContainer: P5.value
      }, {
        default: () => k6(e10.info),
        overlay: () => createVNode(menu_default, c16.value, null)
      })])]
    });
  }
});

// node_modules/ant-design-x-vue/es/conversations/context.mjs
var u11 = Symbol("GroupTitleContext");
var o6 = shallowRef();
var x5 = (e10) => {
  provide(u11, e10), watch(
    e10,
    () => {
      o6.value = unref(e10), triggerRef(o6);
    },
    { immediate: true, deep: true }
  );
};
var G2 = () => inject(
  u11,
  computed(() => o6.value || {})
);
var v5 = defineComponent({
  props: {
    value: c3()
  },
  setup(e10, { slots: t14 }) {
    return x5(computed(() => e10.value)), () => {
      var r4;
      return (r4 = t14.default) == null ? void 0 : r4.call(t14);
    };
  }
});

// node_modules/ant-design-x-vue/es/conversations/GroupTitle.mjs
var _4 = defineComponent({
  name: "AXConversationsGroupTitle",
  __name: "GroupTitle",
  setup(m13) {
    const e10 = useSlots(), n10 = G2(), t14 = computed(() => {
      var o11;
      return (o11 = e10.default) == null ? void 0 : o11.call(e10);
    });
    return () => createVNode("div", {
      class: ga(`${n10.value.prefixCls}-group-title`)
    }, [t14.value && createVNode(typography_default.Text, null, {
      default: () => [t14.value]
    })]);
  }
});

// node_modules/ant-design-x-vue/es/_util/hooks/useMergedState.mjs
function m6(l20, t14) {
  const { defaultValue: u16, value: a18 = ref() } = t14 || {};
  let n10 = typeof l20 == "function" ? l20() : l20;
  a18.value !== void 0 && (n10 = unref(a18)), u16 !== void 0 && (n10 = typeof u16 == "function" ? u16() : u16);
  const v10 = ref(n10), f12 = ref(n10);
  watchEffect(() => {
    let e10 = a18.value !== void 0 ? a18.value : v10.value;
    t14.postState && (e10 = t14.postState(e10)), f12.value = e10;
  });
  function r4(e10) {
    const i22 = f12.value;
    v10.value = e10, toRaw(f12.value) !== e10 && t14.onChange && t14.onChange(e10, i22);
  }
  return watch(a18, () => {
    v10.value = a18.value;
  }), [f12, r4];
}

// node_modules/ant-design-x-vue/es/conversations/hooks/useGroupable.mjs
var n4 = "__ungrouped";
var b = (u16, a18 = []) => {
  const o11 = computed(() => {
    if (!toValue(u16))
      return {
        enableGroup: false,
        sort: void 0,
        title: void 0
      };
    let t14 = {
      sort: void 0,
      title: void 0
    };
    return typeof toValue(u16) == "object" && (t14 = { ...t14, ...toValue(u16) }), {
      enableGroup: true,
      sort: t14.sort,
      title: t14.title
    };
  });
  return computed(() => {
    if (!o11.value.enableGroup)
      return {
        groupList: [
          {
            name: n4,
            data: toValue(a18),
            title: void 0
          }
        ],
        enableGroup: o11.value.enableGroup
      };
    const t14 = toValue(a18).reduce((e10, l20) => {
      const s16 = l20.group || n4;
      return e10[s16] || (e10[s16] = []), e10[s16].push(l20), e10;
    }, {});
    return {
      groupList: (o11.value.sort ? Object.keys(t14).sort(o11.value.sort) : Object.keys(t14)).map((e10) => ({
        name: e10 === n4 ? void 0 : e10,
        title: o11.value.title,
        data: t14[e10]
      })),
      enableGroup: o11.value.enableGroup
    };
  });
};

// node_modules/ant-design-x-vue/es/conversations/style/index.mjs
var t10 = (o11) => {
  const { componentCls: i22 } = o11;
  return {
    [i22]: {
      display: "flex",
      flexDirection: "column",
      gap: o11.paddingXXS,
      overflowY: "auto",
      padding: o11.paddingSM,
      [`&${i22}-rtl`]: {
        direction: "rtl"
      },
      // 会话列表
      [`& ${i22}-list`]: {
        display: "flex",
        gap: o11.paddingXXS,
        flexDirection: "column",
        paddingLeft: 0,
        [`& ${i22}-item`]: {
          paddingInlineStart: o11.paddingXL
        },
        [`& ${i22}-label`]: {
          color: o11.colorTextDescription
        }
      },
      // 会话列表项
      [`& ${i22}-item`]: {
        display: "flex",
        height: o11.controlHeightLG,
        minHeight: o11.controlHeightLG,
        gap: o11.paddingXS,
        padding: `0 ${D2(o11.paddingXS)}`,
        alignItems: "center",
        borderRadius: o11.borderRadiusLG,
        cursor: "pointer",
        transition: `all ${o11.motionDurationMid} ${o11.motionEaseInOut}`,
        // 悬浮样式
        "&:hover": {
          backgroundColor: o11.colorBgTextHover
        },
        // 选中样式
        "&-active": {
          backgroundColor: o11.colorBgTextHover,
          [`& ${i22}-label, ${i22}-menu-icon`]: {
            color: o11.colorText
          }
        },
        // 禁用样式
        "&-disabled": {
          cursor: "not-allowed",
          [`& ${i22}-label`]: {
            color: o11.colorTextDisabled
          }
        },
        // 悬浮、选中时激活操作菜单
        "&:hover, &-active": {
          [`& ${i22}-menu-icon`]: {
            opacity: 1
          }
        }
      },
      // 会话名
      [`& ${i22}-label`]: {
        flex: 1,
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: o11.colorText
      },
      // 会话操作菜单
      [`& ${i22}-menu-icon`]: {
        opacity: 0,
        fontSize: o11.fontSizeXL
      },
      // 会话图标
      [`& ${i22}-group-title`]: {
        display: "flex",
        alignItems: "center",
        height: o11.controlHeightLG,
        minHeight: o11.controlHeightLG,
        padding: `0 ${D2(o11.paddingXS)}`
      }
    }
  };
};
var n5 = () => ({});
var f9 = C3(
  "Conversations",
  (o11) => {
    const i22 = l5(o11, {});
    return t10(i22);
  },
  n5
);

// node_modules/ant-design-x-vue/es/conversations/Conversations.mjs
var _5 = defineComponent({
  name: "AXConversations",
  __name: "Conversations",
  props: mergeDefaults({
    items: null,
    activeKey: null,
    defaultActiveKey: null,
    onActiveChange: {
      type: Function
    },
    menu: {
      type: Function
    },
    groupable: null,
    styles: null,
    classNames: null,
    prefixCls: null,
    rootClassName: null
  }, {
    styles: () => ({}),
    classNames: () => ({})
  }),
  setup(e10) {
    const f12 = c2(e10, ["prefixCls", "rootClassName", "items", "activeKey", "defaultActiveKey", "onActiveChange", "menu", "styles", "classNames", "groupable", "class", "style"]);
    toRef(e10, "class"), toRef(e10, "activeKey"), toRef(e10, "prefixCls");
    const c16 = ref(e10.activeKey), C6 = computed(() => u10(f12, {
      attr: true,
      aria: true,
      data: true
    })), [d11, x8] = m6(e10.defaultActiveKey, {
      value: c16
    });
    watch(() => e10.activeKey, () => {
      c16.value = e10.activeKey;
    });
    const r4 = b(() => e10.groupable, () => e10.items), {
      getPrefixCls: k6,
      direction: u16
    } = c(), l20 = computed(() => k6("conversations", e10.prefixCls)), i22 = c4("conversations"), [K4, A7, N6] = f9(l20), g8 = computed(() => ga(l20.value, i22.value.className, e10.class, e10.rootClassName, A7.value, N6, {
      [`${l20.value}-rtl`]: u16.value === "rtl"
    })), b5 = (t14) => {
      x8(t14.key), e10.onActiveChange && e10.onActiveChange(t14.key);
    };
    return () => K4(createVNode("ul", mergeProps(C6.value, {
      style: {
        ...typeof i22.value.style == "object" ? i22.value.style : {},
        ...typeof e10.style == "object" ? e10.style : {}
      },
      class: g8.value
    }), [r4.value.groupList.map((t14, P5) => {
      const o11 = t14.data.map((a18, h16) => createVNode(S2, {
        key: a18.key || `key-${h16}`,
        info: a18,
        prefixCls: l20.value,
        direction: u16.value,
        class: ga(e10.classNames.item, i22.value.classNames.item),
        style: {
          ...i22.value.styles.item,
          ...e10.styles.item
        },
        menu: typeof e10.menu == "function" ? e10.menu(a18) : e10.menu,
        active: d11.value === a18.key,
        onClick: b5
      }, null));
      return r4.value.enableGroup ? createVNode("li", {
        key: t14.name || `key-${P5}`
      }, [createVNode(v5, {
        value: {
          prefixCls: l20.value
        }
      }, {
        default: () => {
          var a18;
          return [((a18 = t14.title) == null ? void 0 : a18.call(t14, t14.name, {
            components: {
              GroupTitle: _4
            }
          })) || createVNode(_4, {
            key: t14.name
          }, {
            default: () => [t14.name]
          })];
        }
      }), createVNode("ul", {
        class: `${l20.value}-list`
      }, [o11])]) : o11;
    })]));
  }
});

// node_modules/ant-design-x-vue/es/conversations/index.mjs
_5.install = function(o11) {
  return o11.component(_5.name, _5), o11;
};

// node_modules/ant-design-x-vue/es/welcome/style/index.mjs
var l10 = (e10) => {
  const { componentCls: i22, calc: t14 } = e10, n10 = t14(e10.fontSizeHeading3).mul(e10.lineHeightHeading3).equal(), a18 = t14(e10.fontSize).mul(e10.lineHeight).equal();
  return {
    [i22]: {
      gap: e10.padding,
      // ======================== Icon ========================
      [`${i22}-icon`]: {
        height: t14(n10).add(a18).add(e10.paddingXXS).equal(),
        display: "flex",
        img: {
          height: "100%"
        }
      },
      // ==================== Content Wrap ====================
      [`${i22}-content-wrapper`]: {
        gap: e10.paddingXS,
        flex: "auto",
        minWidth: 0,
        [`${i22}-title-wrapper`]: {
          gap: e10.paddingXS
        },
        [`${i22}-title`]: {
          margin: 0
        },
        [`${i22}-extra`]: {
          marginInlineStart: "auto"
        }
      }
    }
  };
};
var o7 = (e10) => {
  const { componentCls: i22 } = e10;
  return {
    [i22]: {
      // ======================== Filled ========================
      "&-filled": {
        paddingInline: e10.padding,
        paddingBlock: e10.paddingSM,
        background: e10.colorFillContent,
        borderRadius: e10.borderRadiusLG
      },
      // ====================== Borderless ======================
      "&-borderless": {
        [`${i22}-title`]: {
          fontSize: e10.fontSizeHeading3,
          lineHeight: e10.lineHeightHeading3
        }
      }
    }
  };
};
var g5 = () => ({});
var H7 = C3(
  "Welcome",
  (e10) => {
    const i22 = l5(e10, {});
    return [l10(i22), o7(i22)];
  },
  g5
);

// node_modules/ant-design-x-vue/es/welcome/Welcome.mjs
function W3(e10) {
  return typeof e10 == "function" || Object.prototype.toString.call(e10) === "[object Object]" && !isVNode(e10);
}
var I3 = defineComponent({
  name: "AXWelcome",
  __name: "Welcome",
  props: mergeDefaults({
    prefixCls: null,
    rootClassName: null,
    className: null,
    style: null,
    variant: null,
    classNames: null,
    styles: null,
    icon: null,
    title: null,
    description: null,
    extra: null
  }, {
    variant: "filled",
    classNames: () => ({}),
    styles: () => ({})
  }),
  setup(e10) {
    toRef(e10, "prefixCls");
    const s16 = useSlots(), {
      direction: d11,
      getPrefixCls: x8
    } = c(), l20 = x8("welcome", e10.prefixCls), n10 = c4("welcome"), [y9, v10, N6] = H7(l20), C6 = computed(() => {
      const t14 = s16.icon ? s16.icon() : typeof e10.icon == "function" ? e10.icon() : e10.icon;
      if (!t14)
        return null;
      let f12 = t14;
      return typeof t14 == "string" && t14.startsWith("http") && (f12 = createVNode("img", {
        src: t14,
        alt: "icon"
      }, null)), createVNode("div", {
        class: ga(`${l20}-icon`, n10.value.classNames.icon, e10.classNames.icon),
        style: e10.styles.icon
      }, [f12]);
    }), r4 = computed(() => {
      const t14 = s16.title ? s16.title() : typeof e10.title == "function" ? e10.title() : e10.title;
      return t14 ? createVNode(typography_default.Title, {
        level: 4,
        class: ga(`${l20}-title`, n10.value.classNames.title, e10.classNames.title),
        style: e10.styles.title
      }, W3(t14) ? t14 : {
        default: () => [t14]
      }) : null;
    }), u16 = computed(() => s16.description ? s16.description() : typeof e10.description == "function" ? e10.description() : e10.description), g8 = computed(() => {
      const t14 = s16.extra ? s16.extra() : typeof e10.extra == "function" ? e10.extra() : e10.extra;
      return t14 ? createVNode("div", {
        class: ga(`${l20}-extra`, n10.value.classNames.extra, e10.classNames.extra),
        style: e10.styles.extra
      }, [t14]) : null;
    });
    return () => y9(createVNode(flex_default, {
      class: ga(l20, n10.value.className, e10.className, e10.rootClassName, v10.value, N6, `${l20}-${e10.variant}`, {
        [`${l20}-rtl`]: d11.value === "rtl"
      }),
      style: e10.style
    }, {
      default: () => [C6.value, createVNode(flex_default, {
        vertical: true,
        class: `${l20}-content-wrapper`
      }, {
        default: () => [s16.extra || e10.extra ? createVNode(flex_default, {
          align: "flex-start",
          class: `${l20}-title-wrapper`
        }, {
          default: () => [r4.value, g8.value]
        }) : r4.value, u16.value && createVNode(typography_default.Text, {
          class: ga(`${l20}-description`, n10.value.classNames.description, e10.classNames.description),
          style: e10.styles.description
        }, {
          default: () => [u16.value]
        })]
      })]
    }));
  }
});

// node_modules/ant-design-x-vue/es/welcome/index.mjs
I3.install = function(e10) {
  return e10.component(I3.name, I3), e10;
};

// node_modules/ant-design-x-vue/es/prompts/style/index.mjs
var n6 = (r4) => {
  const { componentCls: e10 } = r4;
  return {
    [e10]: {
      // ======================== Prompt ========================
      "&, & *": {
        boxSizing: "border-box"
      },
      maxWidth: "100%",
      [`&${e10}-rtl`]: {
        direction: "rtl"
      },
      [`& ${e10}-title`]: {
        marginBlockStart: 0,
        fontWeight: "normal",
        color: r4.colorTextTertiary
      },
      [`& ${e10}-list`]: {
        display: "flex",
        gap: r4.paddingSM,
        overflowX: "auto",
        // Hide scrollbar
        scrollbarWidth: "none",
        "-ms-overflow-style": "none",
        "&::-webkit-scrollbar": {
          display: "none"
        },
        listStyle: "none",
        paddingInlineStart: 0,
        marginBlock: 0,
        alignItems: "stretch",
        "&-wrap": {
          flexWrap: "wrap"
        },
        "&-vertical": {
          flexDirection: "column",
          alignItems: "flex-start"
        }
      },
      // ========================= Item =========================
      [`${e10}-item`]: {
        flex: "none",
        display: "flex",
        gap: r4.paddingXS,
        height: "auto",
        paddingBlock: r4.paddingSM,
        paddingInline: r4.padding,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        background: r4.colorBgContainer,
        borderRadius: r4.borderRadiusLG,
        transition: ["border", "background"].map((t14) => `${t14} ${r4.motionDurationSlow}`).join(","),
        border: `${D2(r4.lineWidth)} ${r4.lineType} ${r4.colorBorderSecondary}`,
        [`&:not(${e10}-item-has-nest)`]: {
          "&:hover": {
            cursor: "pointer",
            background: r4.colorFillTertiary
          },
          "&:active": {
            background: r4.colorFill
          }
        },
        [`${e10}-content`]: {
          flex: "auto",
          minWidth: 0,
          display: "flex",
          gap: r4.paddingXXS,
          flexDirection: "column",
          alignItems: "flex-start"
        },
        [`${e10}-icon, ${e10}-label, ${e10}-desc`]: {
          margin: 0,
          padding: 0,
          fontSize: r4.fontSize,
          lineHeight: r4.lineHeight,
          textAlign: "start",
          whiteSpace: "normal"
        },
        [`${e10}-label`]: {
          color: r4.colorTextHeading,
          fontWeight: 500
        },
        [`${e10}-label + ${e10}-desc`]: {
          color: r4.colorTextTertiary
        },
        // Disabled
        [`&${e10}-item-disabled`]: {
          pointerEvents: "none",
          background: r4.colorBgContainerDisabled,
          [`${e10}-label, ${e10}-desc`]: {
            color: r4.colorTextTertiary
          }
        }
      }
    }
  };
};
var a9 = (r4) => {
  const { componentCls: e10 } = r4;
  return {
    [e10]: {
      // ========================= Parent =========================
      [`${e10}-item-has-nest`]: {
        [`> ${e10}-content`]: {
          // gap: token.paddingSM,
          [`> ${e10}-label`]: {
            fontSize: r4.fontSizeLG,
            lineHeight: r4.lineHeightLG
          }
        }
      },
      // ========================= Nested =========================
      [`&${e10}-nested`]: {
        marginTop: r4.paddingXS,
        // ======================== Prompt ========================
        alignSelf: "stretch",
        [`${e10}-list`]: {
          alignItems: "stretch"
        },
        // ========================= Item =========================
        [`${e10}-item`]: {
          border: 0,
          background: r4.colorFillQuaternary
        }
      }
    }
  };
};
var s8 = () => ({});
var u12 = C3(
  "Prompts",
  (r4) => {
    const e10 = l5(r4, {});
    return [n6(e10), a9(e10)];
  },
  s8
);

// node_modules/ant-design-x-vue/es/prompts/Prompts.mjs
var X3 = defineComponent({
  name: "AXPrompts",
  __name: "Prompts",
  props: mergeDefaults({
    items: null,
    title: {
      type: Function
    },
    onItemClick: {
      type: Function
    },
    vertical: {
      type: Boolean
    },
    wrap: {
      type: Boolean
    },
    styles: null,
    classNames: null,
    prefixCls: null,
    rootClassName: null
  }, {
    styles: () => ({}),
    classNames: () => ({})
  }),
  setup(e10) {
    const y9 = c2(e10, ["prefixCls", "title", "class", "items", "onItemClick", "vertical", "wrap", "rootClassName", "styles", "classNames", "style"]);
    toRef(e10, "class"), toRef(e10, "prefixCls");
    const n10 = useSlots(), {
      getPrefixCls: v10,
      direction: C6
    } = c(), t14 = v10("prompts", e10.prefixCls), l20 = c4("prompts"), [d11, N6, f12] = u12(t14), $3 = computed(() => ga(t14, l20.value.className, e10.class, e10.rootClassName, N6.value, f12, {
      [`${t14}-rtl`]: C6.value === "rtl"
    })), b5 = computed(() => ga(`${t14}-list`, l20.value.classNames.list, e10.classNames.list, {
      [`${t14}-list-wrap`]: e10.wrap
    }, {
      [`${t14}-list-vertical`]: e10.vertical
    })), o11 = computed(() => n10.title ? n10.title() : typeof e10.title == "function" ? e10.title() : e10.title);
    return () => {
      var r4;
      return d11(createVNode("div", mergeProps(y9, {
        class: $3.value,
        style: {
          ...typeof e10.style == "object" ? e10.style : {},
          ...typeof l20.value.style == "object" ? l20.value.style : {}
        }
      }), [o11.value && createVNode(typography_default.Title, {
        level: 5,
        class: ga(`${t14}-title`, l20.value.classNames.title, e10.classNames.title),
        style: {
          ...l20.value.styles.title,
          ...e10.styles.title
        }
      }, {
        default: () => [o11.value]
      }), createVNode("div", {
        class: b5.value,
        style: {
          ...l20.value.styles.list,
          ...e10.styles.list
        }
      }, [(r4 = e10.items) == null ? void 0 : r4.map((s16, h16) => {
        const m13 = s16.children && s16.children.length > 0;
        return createVNode("div", {
          key: s16.key || `key_${h16}`,
          style: {
            ...l20.value.styles.item,
            ...e10.styles.item
          },
          class: ga(`${t14}-item`, l20.value.classNames.item, e10.classNames.item, {
            [`${t14}-item-disabled`]: s16.disabled,
            [`${t14}-item-has-nest`]: m13
          }),
          onClick: () => {
            !m13 && e10.onItemClick && e10.onItemClick({
              data: s16
            });
          }
        }, [s16.icon && createVNode("div", {
          class: `${t14}-icon`
        }, [s16.icon]), createVNode("div", {
          class: ga(`${t14}-content`, l20.value.classNames.itemContent, e10.classNames.itemContent),
          style: {
            ...l20.value.styles.itemContent,
            ...e10.styles.itemContent
          }
        }, [s16.label && createVNode("h6", {
          class: `${t14}-label`
        }, [s16.label]), s16.description && createVNode("p", {
          class: `${t14}-desc`
        }, [s16.description]), m13 && createVNode(X3, {
          class: `${t14}-nested`,
          items: s16.children,
          vertical: true,
          onItemClick: e10.onItemClick,
          classNames: {
            list: e10.classNames.subList,
            item: e10.classNames.subItem
          },
          styles: {
            list: e10.styles.subList,
            item: e10.styles.subItem
          }
        }, null)])]);
      })])]));
    };
  }
});

// node_modules/ant-design-x-vue/es/prompts/index.mjs
X3.install = function(t14) {
  return t14.component(X3.name, X3), t14;
};

// node_modules/ant-design-x-vue/es/suggestion/style/index.mjs
var i15 = (n10) => {
  const { componentCls: t14, antCls: e10 } = n10;
  return {
    [t14]: {
      [`${e10}-cascader-menus ${e10}-cascader-menu`]: {
        height: "auto"
      },
      [`${t14}-item`]: {
        "&-icon": {
          marginInlineEnd: n10.paddingXXS
        },
        "&-extra": {
          marginInlineStart: n10.padding
        }
      },
      [`&${t14}-block`]: {
        [`${t14}-item-extra`]: {
          marginInlineStart: "auto"
        }
      }
    }
  };
};
var a10 = () => ({});
var S3 = C3(
  "Suggestion",
  (n10) => {
    const t14 = l5(n10, {});
    return i15(t14);
  },
  a10
);

// node_modules/ant-design-x-vue/es/suggestion/useActive.mjs
function C4(i22, v10, m13, p9, w4) {
  const [t14, c16] = f2([]), o11 = (e10, r4 = t14.value) => {
    let n10 = toValue(i22);
    for (let s16 = 0; s16 < e10 - 1; s16 += 1) {
      const a18 = r4[s16], u16 = n10.find((f12) => f12.value === a18);
      if (!u16)
        break;
      n10 = u16.children || [];
    }
    return n10;
  }, I5 = (e10) => e10.map((r4, n10) => {
    const a18 = o11(n10 + 1, e10).find((u16) => u16.value === r4);
    return a18 == null ? void 0 : a18.value;
  }), h16 = (e10) => {
    const r4 = t14.value.length || 1, n10 = o11(r4), s16 = n10.findIndex(
      (f12) => f12.value === t14.value[r4 - 1]
    ), a18 = n10.length, u16 = n10[(s16 + e10 + a18) % a18];
    c16([...t14.value.slice(0, r4 - 1), u16.value]);
  }, g8 = () => {
    t14.value.length > 1 && c16(t14.value.slice(0, t14.value.length - 1));
  }, k6 = () => {
    const e10 = o11(t14.value.length + 1);
    e10.length && c16([...t14.value, e10[0].value]);
  }, d11 = n3((e10) => {
    if (toValue(v10))
      switch (console.log("e.key", e10), e10.key) {
        case "ArrowDown":
          h16(1), e10.preventDefault();
          break;
        case "ArrowUp":
          h16(-1), e10.preventDefault();
          break;
        case "ArrowRight":
          toValue(m13) ? g8() : k6(), e10.preventDefault();
          break;
        case "ArrowLeft":
          toValue(m13) ? k6() : g8(), e10.preventDefault();
          break;
        case "Enter":
          o11(t14.value.length + 1).length || p9(I5(t14.value)), e10.preventDefault();
          break;
        case "Escape":
          w4(), e10.preventDefault();
          break;
      }
  });
  return watch(() => toValue(v10), () => {
    toValue(v10) && c16([toValue(i22)[0].value]);
  }, { immediate: true }), [t14, d11];
}

// node_modules/ant-design-x-vue/es/suggestion/Suggestion.mjs
var Y3 = defineComponent({
  name: "AXSuggestion",
  __name: "Suggestion",
  props: mergeDefaults({
    prefixCls: null,
    className: null,
    rootClassName: null,
    style: null,
    children: {
      type: Function
    },
    open: {
      type: Boolean
    },
    onOpenChange: {
      type: Function
    },
    items: {
      type: Function
    },
    onSelect: {
      type: Function
    },
    block: {
      type: Boolean
    },
    styles: null,
    classNames: null
  }, {
    open: false
  }),
  setup(e10) {
    toRef(e10, "prefixCls");
    const s16 = useSlots(), {
      direction: x8,
      getPrefixCls: b5
    } = c(), n10 = computed(() => b5("suggestion", e10.prefixCls));
    `${n10.value}`;
    const a18 = computed(() => x8.value === "rtl"), i22 = c4("suggestion"), u16 = ref(), [k6, c16, r4] = S3(n10), {
      width: f12
    } = ba(u16), F = computed(() => {
      if (e10.block && f12.value)
        return {
          width: `${f12.value}px`
        };
    }), [m13, O4] = f2(e10.open), [R7, V5] = f2(), o11 = (t14) => {
      var h16;
      O4(t14), (h16 = e10.onOpenChange) == null || h16.call(e10, t14);
    }, d11 = (t14) => {
      t14 === false ? o11(false) : (V5(t14), o11(true));
    }, g8 = () => {
      o11(false);
    }, v10 = computed(() => typeof e10.items == "function" ? e10.items(R7.value) : e10.items), C6 = (t14) => {
      e10.onSelect && e10.onSelect(t14[t14.length - 1]), o11(false);
    }, [$3, y9] = C4(v10, m13, a18, C6, g8), p9 = computed(() => {
      var t14;
      return s16.default ? s16.default({
        onTrigger: d11,
        onKeyDown: y9
      }) : (t14 = e10.children) == null ? void 0 : t14.call(e10, {
        onTrigger: d11,
        onKeyDown: y9
      });
    });
    return () => k6(createVNode(cascader_default, {
      options: v10.value,
      open: m13.value,
      value: $3.value,
      placement: a18.value ? "topRight" : "topLeft",
      onDropdownVisibleChange: (t14) => {
        t14 || g8();
      },
      popupClassName: ga(e10.rootClassName, n10.value, c16.value, r4, {
        [`${n10.value}-block`]: e10.block
      }),
      onChange: C6,
      dropdownStyle: F.value
    }, {
      default: () => createVNode("div", {
        ref: u16,
        class: ga(n10.value, i22.value.className, e10.rootClassName, e10.className, `${n10.value}-wrapper`, c16.value, r4),
        style: {
          ...i22.value.style,
          ...e10.style
        }
      }, [p9.value])
    }));
  }
});

// node_modules/ant-design-x-vue/es/suggestion/index.mjs
Y3.install = function(t14) {
  return t14.component(Y3.name, Y3), t14;
};

// node_modules/ant-design-x-vue/es/sender/context.mjs
var d6 = Symbol("SenderHeaderContext");
var t11 = shallowRef();
var C5 = (e10) => {
  provide(d6, e10), watch(
    e10,
    () => {
      t11.value = unref(e10), triggerRef(t11);
    },
    { immediate: true, deep: true }
  );
};
var l11 = () => inject(
  d6,
  computed(() => t11.value || {})
);
var v6 = defineComponent({
  props: {
    value: c3()
  },
  setup(e10, { slots: r4 }) {
    return C5(computed(() => e10.value)), () => {
      var n10;
      return (n10 = r4.default) == null ? void 0 : n10.call(r4);
    };
  }
});

// node_modules/ant-design-x-vue/es/sender/components/ActionButton/context.mjs
var u13 = Symbol("ActionButtonContext");
var o8 = shallowRef();
var A4 = (t14) => {
  provide(u13, t14), watch(
    t14,
    () => {
      o8.value = unref(t14), triggerRef(o8);
    },
    { immediate: true, deep: true }
  );
};
var l12 = () => inject(
  u13,
  computed(() => o8.value || {})
);
var v7 = defineComponent({
  props: {
    value: c3()
  },
  setup(t14, { slots: e10 }) {
    return A4(computed(() => t14.value)), () => {
      var n10;
      return (n10 = e10.default) == null ? void 0 : n10.call(e10);
    };
  }
});

// node_modules/ant-design-x-vue/es/sender/components/ActionButton/index.mjs
var D5 = defineComponent({
  name: "AXSenderActionButton",
  __name: "index",
  props: {
    action: {},
    prefixCls: {},
    type: {
      default: "text"
    },
    htmlType: {},
    shape: {},
    size: {},
    loading: {
      type: [Boolean, Object]
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    ghost: {
      type: Boolean
    },
    block: {
      type: Boolean
    },
    danger: {
      type: Boolean
    },
    icon: {},
    href: {},
    target: {},
    title: {},
    onClick: {},
    onMousedown: {},
    audioIcon: {},
    audioDisabledIcon: {},
    audioRecordingIcon: {}
  },
  setup(e10) {
    const c16 = c2(e10, ["action", "type", "disabled", "onClick"]);
    toRef(e10, "disabled");
    const r4 = useSlots(), n10 = l12(), i22 = computed(() => {
      var o11;
      const a18 = n10.value.disabled, t14 = (o11 = n10.value) == null ? void 0 : o11[`${e10.action}Disabled`];
      return e10.disabled ?? a18 ?? t14;
    }), l20 = computed(() => n10.value.prefixCls);
    return () => createVNode(button_default, mergeProps({
      type: e10.type
    }, c16, {
      onClick: (a18) => {
        var t14, o11;
        i22.value || ((o11 = (t14 = n10.value) == null ? void 0 : t14[e10.action]) == null || o11.call(t14), e10.onClick && !Array.isArray(e10.onClick) && e10.onClick(a18));
      },
      class: ga(l20.value, {
        [`${l20.value}-disabled`]: i22.value
      })
    }), {
      icon: () => r4.default()
    });
  }
});

// node_modules/ant-design-x-vue/es/sender/components/ClearButton.mjs
var p6 = defineComponent({
  name: "AXSenderClearButton",
  __name: "ClearButton",
  props: mergeDefaults({
    prefixCls: null,
    type: null,
    htmlType: null,
    shape: null,
    size: null,
    loading: null,
    disabled: null,
    ghost: null,
    block: null,
    danger: null,
    icon: null,
    href: null,
    target: null,
    title: null,
    onClick: null,
    onMousedown: null,
    audioIcon: null,
    audioDisabledIcon: null,
    audioRecordingIcon: null
  }, {
    disabled: void 0
  }),
  setup(l20) {
    const e10 = c2(l20, ["disabled"]);
    return () => createVNode(D5, mergeProps({
      disabled: l20.disabled
    }, e10, {
      action: "onClear"
    }), {
      default: () => [createVNode(Et, null, null)]
    });
  }
});

// node_modules/ant-design-x-vue/es/sender/StopLoading.mjs
var a11 = defineComponent({
  name: "AXSenderStopLoading",
  __name: "StopLoading",
  props: {
    className: null
  },
  setup(t14) {
    const e10 = t14;
    return () => createVNode("svg", {
      color: "currentColor",
      viewBox: "0 0 1000 1000",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      class: e10.className
    }, [createVNode("title", null, [createTextVNode("Stop Loading")]), createVNode("rect", {
      fill: "currentColor",
      height: "250",
      rx: "24",
      ry: "24",
      width: "250",
      x: "375",
      y: "375"
    }, null), createVNode("circle", {
      cx: "500",
      cy: "500",
      fill: "none",
      r: "450",
      stroke: "currentColor",
      "stroke-width": "100",
      opacity: "0.45"
    }, null), createVNode("circle", {
      cx: "500",
      cy: "500",
      fill: "none",
      r: "450",
      stroke: "currentColor",
      "stroke-width": "100",
      "stroke-dasharray": "600 9999999"
    }, [createVNode("animateTransform", {
      attributeName: "transform",
      dur: "1s",
      from: "0 500 500",
      repeatCount: "indefinite",
      to: "360 500 500",
      type: "rotate"
    }, null)])]);
  }
});

// node_modules/ant-design-x-vue/es/sender/components/LoadingButton.mjs
var k5 = defineComponent({
  name: "AXSenderLoadingButton",
  __name: "LoadingButton",
  props: mergeDefaults({
    prefixCls: null,
    type: null,
    htmlType: null,
    shape: null,
    size: null,
    loading: null,
    disabled: null,
    ghost: null,
    block: null,
    danger: null,
    icon: null,
    href: null,
    target: null,
    title: null,
    onClick: null,
    onMousedown: null,
    audioIcon: null,
    audioDisabledIcon: null,
    audioRecordingIcon: null
  }, {
    type: "primary",
    shape: "circle",
    icon: void 0,
    disabled: void 0
  }),
  setup(n10) {
    const o11 = c2(n10, ["type", "shape", "icon", "disabled"]), e10 = l12(), {
      token: t14
    } = theme_default.useToken();
    return () => createVNode(D5, mergeProps({
      type: n10.type,
      disabled: n10.disabled,
      shape: n10.shape,
      icon: n10.icon
    }, o11, {
      style: {
        backgroundColor: "transparent",
        color: t14.value.colorPrimary
      },
      class: ga(`${e10.value.prefixCls}-loading-button`),
      action: "onCancel"
    }), {
      default: () => [createVNode(a11, {
        className: `${e10.value.prefixCls}-loading-icon`
      }, null)]
    });
  }
});

// node_modules/ant-design-x-vue/es/sender/components/SendButton.mjs
var m7 = defineComponent({
  name: "AXSenderLoadingButton",
  __name: "SendButton",
  props: mergeDefaults({
    prefixCls: null,
    type: null,
    htmlType: null,
    shape: null,
    size: null,
    loading: null,
    disabled: null,
    ghost: null,
    block: null,
    danger: null,
    icon: null,
    href: null,
    target: null,
    title: null,
    onClick: null,
    onMousedown: null,
    audioIcon: null,
    audioDisabledIcon: null,
    audioRecordingIcon: null
  }, {
    type: "primary",
    shape: "circle",
    disabled: void 0
  }),
  setup(l20) {
    const n10 = c2(l20, ["type", "shape", "disabled"]);
    return () => createVNode(D5, mergeProps({
      type: l20.type,
      shape: l20.shape,
      disabled: l20.disabled
    }, n10, {
      action: "onSend"
    }), {
      default: () => [createVNode($t, null, null)]
    });
  }
});

// node_modules/ant-design-x-vue/es/sender/components/SpeechButton/RecordingIcon.mjs
var n7 = 1e3;
var t12 = 4;
var r3 = 140;
var s9 = 250;
var i16 = 500;
var c11 = 0.8;
var _6 = defineComponent({
  name: "AXSenderRecordingIcon",
  __name: "RecordingIcon",
  props: {
    className: null,
    audioIcon: null,
    audioDisabledIcon: null,
    audioRecordingIcon: null
  },
  setup(u16) {
    const a18 = r3 / 2;
    return () => createVNode("svg", {
      color: "currentColor",
      viewBox: `0 0 ${n7} ${n7}`,
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      class: u16.className
    }, [createVNode("title", null, [createTextVNode("Speech Recording")]), Array.from({
      length: t12
    }).map((T4, o11) => {
      const m13 = (n7 - r3 * t12) / (t12 - 1), d11 = o11 * (m13 + r3), l20 = n7 / 2 - s9 / 2, g8 = n7 / 2 - i16 / 2;
      return createVNode("rect", {
        fill: "currentColor",
        rx: a18,
        ry: a18,
        height: s9,
        width: r3,
        x: d11,
        y: l20,
        key: o11
      }, [createVNode("animate", {
        attributeName: "height",
        values: `${s9}; ${i16}; ${s9}`,
        keyTimes: "0; 0.5; 1",
        dur: `${c11}s`,
        begin: `${c11 / t12 * o11}s`,
        repeatCount: "indefinite"
      }, null), createVNode("animate", {
        attributeName: "y",
        values: `${l20}; ${g8}; ${l20}`,
        keyTimes: "0; 0.5; 1",
        dur: `${c11}s`,
        begin: `${c11 / t12 * o11}s`,
        repeatCount: "indefinite"
      }, null)]);
    })]);
  }
});

// node_modules/ant-design-x-vue/es/sender/components/SpeechButton/index.mjs
var A5 = defineComponent({
  name: "AXSenderSpeechButton",
  __name: "index",
  props: mergeDefaults({
    prefixCls: null,
    type: null,
    htmlType: null,
    shape: null,
    size: null,
    loading: null,
    disabled: null,
    ghost: null,
    block: null,
    danger: null,
    icon: null,
    href: null,
    target: null,
    title: null,
    onClick: null,
    onMousedown: null,
    audioIcon: null,
    audioDisabledIcon: null,
    audioRecordingIcon: null
  }, {
    type: "text",
    disabled: void 0,
    audioIcon: () => createVNode(Tt, null, null),
    audioDisabledIcon: () => createVNode(zt, null, null),
    audioRecordingIcon: void 0
  }),
  setup(e10) {
    const t14 = c2(e10, ["type", "disabled", "audioIcon", "audioDisabledIcon", "audioRecordingIcon"]), o11 = l12(), {
      token: u16
    } = theme_default.useToken(), d11 = computed(() => o11.value.speechRecording), c16 = computed(() => o11.value.prefixCls), a18 = computed(() => {
      let n10;
      return d11.value ? n10 = e10.audioRecordingIcon ? e10.audioRecordingIcon : createVNode(_6, {
        className: `${c16.value}-recording-icon`
      }, null) : o11.value.onSpeechDisabled ? n10 = e10.audioDisabledIcon : n10 = e10.audioIcon, n10;
    });
    return () => createVNode(D5, mergeProps({
      type: e10.type,
      disabled: e10.disabled
    }, t14, {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: u16.value.colorPrimary
      },
      action: "onSpeech"
    }), {
      default: () => [a18.value]
    });
  }
});

// node_modules/ant-design-x-vue/es/transition-collapse/TransitionCollapse.mjs
var l13 = defineComponent({
  name: "AXTransitionCollapse",
  __name: "TransitionCollapse",
  props: {
    prefixCls: {
      default: "ax"
    }
  },
  setup(e10) {
    const d11 = e10, a18 = useSlots(), s16 = computed(() => d11.prefixCls + "-transition-collapse"), o11 = {
      beforeEnter(t14) {
        t14.dataset || (t14.dataset = {}), t14.dataset.oldPaddingTop = t14.style.paddingTop, t14.dataset.oldPaddingBottom = t14.style.paddingBottom, t14.style.maxHeight = "0", t14.style.paddingTop = "0", t14.style.paddingBottom = "0";
      },
      enter(t14) {
        t14.dataset.oldOverflow = t14.style.overflow, t14.scrollHeight !== 0 ? (t14.style.maxHeight = `${t14.scrollHeight}px`, t14.style.paddingTop = t14.dataset.oldPaddingTop, t14.style.paddingBottom = t14.dataset.oldPaddingBottom) : (t14.style.maxHeight = `${t14.dataset.oldMaxHeight || "999"}px`, t14.style.paddingTop = t14.dataset.oldPaddingTop, t14.style.paddingBottom = t14.dataset.oldPaddingBottom), t14.style.overflow = "hidden";
      },
      afterEnter(t14) {
        t14.style.maxHeight = "", t14.style.overflow = t14.dataset.oldOverflow;
      },
      beforeLeave(t14) {
        t14.dataset || (t14.dataset = {}), t14.dataset.oldMaxHeight = t14.scrollHeight, t14.dataset.oldPaddingTop = t14.style.paddingTop, t14.dataset.oldPaddingBottom = t14.style.paddingBottom, t14.dataset.oldOverflow = t14.style.overflow, t14.style.overflow = "hidden", t14.style.maxHeight = `${t14.scrollHeight}px`;
      },
      leave(t14) {
        t14.scrollHeight !== 0 && (t14.style.maxHeight = "0", t14.style.paddingTop = "0", t14.style.paddingBottom = "0");
      },
      afterLeave(t14) {
        t14.style.maxHeight = "", t14.style.overflow = t14.dataset.oldOverflow, t14.style.paddingTop = t14.dataset.oldPaddingTop, t14.style.paddingBottom = t14.dataset.oldPaddingBottom;
      }
    };
    return () => createVNode(Transition, {
      name: s16.value,
      onBeforeEnter: o11.beforeEnter,
      onEnter: o11.enter,
      onAfterEnter: o11.afterEnter,
      onBeforeLeave: o11.beforeLeave,
      onLeave: o11.leave,
      onAfterLeave: o11.afterLeave
    }, {
      default: () => {
        var t14;
        return [(t14 = a18.default) == null ? void 0 : t14.call(a18)];
      }
    });
  }
});

// node_modules/ant-design-x-vue/es/transition-collapse/style/index.mjs
var a12 = (t14) => {
  const { componentCls: n10 } = t14, i22 = `${n10}-transition-collapse`;
  return {
    [n10]: {
      [i22]: {
        "&-enter-active": {
          transition: ["max-height", "padding-top", "padding-bottom"].map(
            (o11) => `${o11} ${t14.motionDurationSlow} ${t14.motionEaseInOut}`
          ).join(",")
        },
        "&-leave-active": {
          transition: ["max-height", "padding-top", "padding-bottom"].map(
            (o11) => `${o11} ${t14.motionDurationSlow} ${t14.motionEaseInOut}`
          ).join(",")
        }
      }
    }
  };
};

// node_modules/ant-design-x-vue/es/transition-collapse/index.mjs
l13.install = function(o11) {
  return o11.component(l13.name, l13), o11;
};

// node_modules/ant-design-x-vue/es/sender/style/header.mjs
var t13 = (d11) => {
  const { componentCls: e10, calc: o11 } = d11, r4 = `${e10}-header`;
  return {
    [e10]: {
      [r4]: {
        borderBottomWidth: d11.lineWidth,
        borderBottomStyle: "solid",
        borderBottomColor: d11.colorBorder,
        // ======================== Header ========================
        "&-header": {
          background: d11.colorFillAlter,
          fontSize: d11.fontSize,
          lineHeight: d11.lineHeight,
          paddingBlock: o11(d11.paddingSM).sub(d11.lineWidthBold).equal(),
          paddingInlineStart: d11.padding,
          paddingInlineEnd: d11.paddingXS,
          display: "flex",
          borderRadius: {
            _skip_check_: true,
            value: o11(d11.borderRadius).mul(2).equal()
          },
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
          [`${r4}-title`]: {
            flex: "auto"
          }
        },
        // ======================= Content ========================
        "&-content": {
          padding: d11.padding
        },
        // ======================== Motion ========================
        "&-motion": {
          transition: ["height", "border"].map((i22) => `${i22} ${d11.motionDurationSlow}`).join(","),
          overflow: "hidden",
          "&-enter-start, &-leave-active": {
            borderBottomColor: "transparent"
          },
          "&-hidden": {
            display: "none"
          }
        }
      }
    }
  };
};

// node_modules/ant-design-x-vue/es/sender/style/index.mjs
var S4 = (o11) => {
  const {
    componentCls: i22,
    padding: e10,
    paddingSM: r4,
    paddingXS: n10,
    paddingXXS: d11,
    lineWidth: t14,
    lineWidthBold: a18,
    calc: l20
  } = o11;
  return {
    [i22]: {
      position: "relative",
      width: "100%",
      boxSizing: "border-box",
      boxShadow: `${o11.boxShadowTertiary}`,
      transition: `background ${o11.motionDurationSlow}`,
      // Border
      borderRadius: {
        _skip_check_: true,
        value: l20(o11.borderRadius).mul(2).equal()
      },
      borderColor: o11.colorBorder,
      borderWidth: 0,
      borderStyle: "solid",
      // Border
      "&:after": {
        content: '""',
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        transition: `border-color ${o11.motionDurationSlow}`,
        borderRadius: {
          _skip_check_: true,
          value: "inherit"
        },
        borderStyle: "inherit",
        borderColor: "inherit",
        borderWidth: t14
      },
      // Focus
      "&:focus-within": {
        boxShadow: `${o11.boxShadowSecondary}`,
        borderColor: o11.colorPrimary,
        "&:after": {
          borderWidth: a18
        }
      },
      "&-disabled": {
        background: o11.colorBgContainerDisabled
      },
      // ============================== RTL ==============================
      [`&${i22}-rtl`]: {
        direction: "rtl"
      },
      // ============================ Content ============================
      [`${i22}-content`]: {
        display: "flex",
        gap: n10,
        width: "100%",
        paddingBlock: r4,
        paddingInlineStart: e10,
        paddingInlineEnd: r4,
        boxSizing: "border-box",
        alignItems: "flex-end"
      },
      // ============================ Prefix =============================
      [`${i22}-prefix`]: {
        flex: "none"
      },
      // ============================= Input =============================
      [`${i22}-input`]: {
        padding: 0,
        borderRadius: 0,
        flex: "auto",
        alignSelf: "center",
        minHeight: "auto"
      },
      // ============================ Actions ============================
      [`${i22}-actions-list`]: {
        flex: "none",
        display: "flex",
        "&-presets": {
          gap: o11.paddingXS
        }
      },
      [`${i22}-actions-btn`]: {
        "&-disabled": {
          opacity: 0.45
        },
        "&-loading-button": {
          padding: 0,
          border: 0
        },
        "&-loading-icon": {
          height: o11.controlHeight,
          width: o11.controlHeight,
          verticalAlign: "top"
        },
        "&-recording-icon": {
          height: "1.2em",
          width: "1.2em",
          verticalAlign: "top"
        }
      },
      // ============================ Footer =============================
      [`${i22}-footer`]: {
        paddingInlineStart: e10,
        paddingInlineEnd: r4,
        paddingBlockEnd: r4,
        paddingBlockStart: d11,
        boxSizing: "border-box"
      }
    }
  };
};
var h12 = () => ({});
var _7 = C3(
  "Sender",
  (o11) => {
    const { paddingXS: i22, calc: e10 } = o11, r4 = l5(o11, {
      SenderContentMaxWidth: `calc(100% - ${D2(
        e10(i22).add(32).equal()
      )})`
    });
    return [
      S4(r4),
      t13(r4),
      a12(r4)
    ];
  },
  h12
);

// node_modules/ant-design-x-vue/es/sender/useSpeech.mjs
var c12;
!c12 && typeof window < "u" && (c12 = window.SpeechRecognition || window.webkitSpeechRecognition);
function x6(h16, w4) {
  const m13 = h16, i22 = computed(() => {
    const e10 = toValue(w4);
    return typeof e10 == "object" ? {
      controlledRecording: e10.recording,
      onControlledRecordingChange: e10.onRecordingChange,
      speechInControlled: typeof e10.recording == "boolean"
    } : {
      controlledRecording: void 0,
      onControlledRecordingChange: void 0,
      speechInControlled: false
    };
  }), R7 = computed(() => i22.value.controlledRecording), n10 = i22.value.onControlledRecordingChange, S5 = i22.value.speechInControlled, r4 = ref(null);
  watchEffect(() => {
    if (typeof navigator < "u" && "permissions" in navigator) {
      let e10 = null;
      navigator.permissions.query({ name: "microphone" }).then((t14) => {
        r4.value = t14.state, t14.onchange = function() {
          r4.value = this.state;
        }, e10 = t14;
      }), onWatcherCleanup(() => {
        e10 && (e10.onchange = null);
      });
    }
  });
  const f12 = computed(() => c12 && r4.value !== "denied"), o11 = ref(null), [l20, d11] = m6(false, {
    value: R7
  }), s16 = ref(false), y9 = () => {
    if (f12.value && !o11.value) {
      const e10 = new c12();
      e10.onstart = () => {
        d11(true);
      }, e10.onend = () => {
        d11(false);
      }, e10.onresult = (t14) => {
        var p9, v10, g8;
        if (!s16.value) {
          const I5 = (g8 = (v10 = (p9 = t14.results) == null ? void 0 : p9[0]) == null ? void 0 : v10[0]) == null ? void 0 : g8.transcript;
          m13(I5);
        }
        s16.value = false;
      }, o11.value = e10;
    }
  };
  return { speechPermission: f12, triggerSpeech: (e10) => {
    e10 && !l20.value || (s16.value = e10, S5 ? n10 == null || n10(!l20.value) : (y9(), o11.value && (l20.value ? (o11.value.stop(), n10 == null || n10(false)) : (o11.value.start(), n10 == null || n10(true)))));
  }, recording: l20 };
}

// node_modules/ant-design-x-vue/es/_util/getValue.mjs
function u14(t14, n10) {
  for (var r4 = t14, e10 = 0; e10 < n10.length; e10 += 1) {
    if (r4 == null)
      return;
    r4 = r4[n10[e10]];
  }
  return r4;
}

// node_modules/ant-design-x-vue/es/sender/Sender.mjs
var Ae2 = defineComponent({
  name: "AXSender",
  __name: "Sender",
  props: mergeDefaults({
    onKeyPress: {
      type: Function
    },
    onFocus: null,
    onBlur: null,
    prefixCls: null,
    defaultValue: null,
    value: null,
    loading: {
      type: Boolean
    },
    placeholder: null,
    readOnly: {
      type: Boolean
    },
    submitType: {
      type: [String, Boolean]
    },
    disabled: {
      type: Boolean
    },
    onSubmit: {
      type: Function
    },
    onChange: {
      type: Function
    },
    onCancel: null,
    onKeyDown: {
      type: Function
    },
    onPaste: {
      type: Function
    },
    onPasteFile: {
      type: Function
    },
    components: null,
    styles: null,
    rootClassName: null,
    classNames: null,
    style: null,
    className: null,
    actions: {
      type: [Function, Boolean]
    },
    allowSpeech: null,
    prefix: {
      type: Function
    },
    footer: {
      type: Function
    },
    header: {
      type: Function
    },
    autoSize: null
  }, {
    styles: () => ({}),
    classNames: () => ({}),
    submitType: "enter",
    actions: void 0,
    disabled: void 0,
    autoSize: () => ({
      maxRows: 8
    })
  }),
  emits: ["update:value"],
  setup(e10, {
    expose: K4,
    emit: R7
  }) {
    const V5 = c2(e10, ["prefixCls", "styles", "classNames", "className", "rootClassName", "style", "defaultValue", "value", "placeholder", "readOnly", "submitType", "onSubmit", "loading", "components", "onCancel", "onChange", "actions", "onKeyPress", "onKeyDown", "disabled", "allowSpeech", "prefix", "footer", "header", "onPaste", "onPasteFile", "autoSize"]);
    toRef(e10, "prefixCls");
    function T4(n10, t14, c16) {
      return u14(n10, t14) || c16;
    }
    const m13 = {
      SendButton: m7,
      ClearButton: p6,
      LoadingButton: k5,
      SpeechButton: A5
    }, z2 = R7, i22 = useSlots(), {
      direction: A7,
      getPrefixCls: E4
    } = c(), o11 = computed(() => E4("sender", e10.prefixCls)), v10 = ref(null), f12 = ref(null), s16 = c4("sender"), g8 = computed(() => `${o11.value}-input`), [k6, O4, X5] = _7(o11.value), L5 = computed(() => ga(o11.value, s16.value.className, e10.className, e10.rootClassName, O4.value, X5, {
      [`${o11.value}-rtl`]: A7.value === "rtl",
      [`${o11.value}-disabled`]: e10.disabled
    })), M5 = computed(() => `${o11.value}-actions-btn`), S5 = computed(() => `${o11.value}-actions-list`), u16 = ref(e10.value ?? e10.defaultValue ?? ""), b5 = (n10) => {
      u16.value = n10;
    };
    watch(() => e10.value, () => {
      b5(e10.value);
    });
    const y9 = (n10, t14) => {
      b5(n10), z2("update:value", n10), e10.onChange && e10.onChange(n10, t14);
    }, {
      speechPermission: j4,
      triggerSpeech: x8,
      recording: p9
    } = x6((n10) => {
      y9(`${u16.value} ${n10}`);
    }, () => e10.allowSpeech), q3 = T4(e10.components, ["input"], input_default.TextArea), H8 = computed(() => u10(V5, {
      attr: true,
      aria: true,
      data: true
    })), G3 = computed(() => ({
      ...H8.value,
      ref: f12
    })), C6 = () => {
      u16.value && e10.onSubmit && !e10.loading && e10.onSubmit(u16.value);
    }, J2 = () => {
      y9("");
    }, h16 = ref(false), Q2 = () => {
      h16.value = true;
    }, U2 = () => {
      h16.value = false;
    }, W4 = (n10) => {
      const t14 = n10.key === "Enter" && !h16.value;
      switch (e10.submitType) {
        case "enter":
          t14 && !n10.shiftKey && (n10.preventDefault(), C6());
          break;
        case "shiftEnter":
          t14 && n10.shiftKey && (n10.preventDefault(), C6());
          break;
      }
      e10.onKeyPress && e10.onKeyPress(n10);
    }, Y4 = (n10) => {
      var c16, F;
      const t14 = (c16 = n10.clipboardData) == null ? void 0 : c16.files;
      t14 != null && t14.length && e10.onPasteFile && (e10.onPasteFile(t14[0], t14), n10.preventDefault()), (F = e10.onPaste) == null || F.call(e10, n10);
    }, Z2 = (n10) => {
      var t14, c16;
      n10.target !== ((t14 = v10.value) == null ? void 0 : t14.querySelector(`.${g8.value}`)) && n10.preventDefault(), (c16 = f12.value) == null || c16.focus();
    }, P5 = computed(() => {
      let n10 = createVNode(flex_default, {
        class: `${S5.value}-presets`
      }, {
        default: () => [e10.allowSpeech && createVNode(A5, typeof e10.allowSpeech == "object" ? {
          audioIcon: e10.allowSpeech.audioIcon,
          audioDisabledIcon: e10.allowSpeech.audioDisabledIcon,
          audioRecordingIcon: e10.allowSpeech.audioRecordingIcon
        } : {}, null), e10.loading ? createVNode(k5, null, null) : createVNode(m7, null, null)]
      });
      const t14 = {
        components: m13
      };
      return i22.actions ? n10 = i22.actions({
        ori: n10,
        info: t14
      }) : typeof e10.actions == "function" ? n10 = e10.actions(n10, t14) : (e10.actions || e10.actions === false) && (n10 = e10.actions), n10;
    }), _8 = computed(() => ({
      prefixCls: M5.value,
      onSend: C6,
      onSendDisabled: !u16.value,
      onClear: J2,
      onClearDisabled: !u16.value,
      onCancel: e10.onCancel,
      onCancelDisabled: !e10.loading,
      onSpeech: () => x8(false),
      onSpeechDisabled: !j4.value,
      speechRecording: p9.value,
      disabled: e10.disabled
    })), N6 = computed(() => {
      let n10 = null;
      const t14 = {
        components: m13
      };
      return i22.footer ? n10 = i22.footer({
        info: t14
      }) : typeof e10.footer == "function" ? n10 = e10.footer({
        components: m13
      }) : e10.footer && (n10 = e10.footer), n10;
    }), w4 = computed(() => i22.header ? i22.header() : typeof e10.header == "function" ? e10.header() : e10.header), D6 = computed(() => i22.prefix ? i22.prefix() : typeof e10.prefix == "function" ? e10.prefix() : e10.prefix);
    return K4({
      nativeElement: v10.value,
      // @ts-expect-error
      focus: (n10) => {
        var t14;
        return (t14 = f12.value) == null ? void 0 : t14.focus(n10);
      },
      // @ts-expect-error
      blur: () => {
        var n10;
        return (n10 = f12.value) == null ? void 0 : n10.blur();
      }
    }), () => k6(createVNode("div", {
      ref: v10,
      class: L5.value,
      style: {
        ...s16.value.style,
        ...e10.style
      }
    }, [w4.value && createVNode(v6, {
      value: {
        prefixCls: o11.value
      }
    }, {
      default: () => [w4.value]
    }), createVNode(v7, {
      value: _8.value
    }, {
      default: () => [createVNode("div", {
        class: `${o11.value}-content`,
        onMousedown: Z2
      }, [D6.value && createVNode("div", {
        class: ga(`${o11.value}-prefix`, s16.value.classNames.prefix, e10.classNames.prefix),
        style: {
          ...s16.value.styles.prefix,
          ...e10.styles.prefix
        }
      }, [D6.value]), createVNode(q3, mergeProps(G3.value, {
        disabled: e10.disabled,
        style: {
          ...s16.value.styles.input,
          ...e10.styles.input
        },
        class: ga(g8.value, s16.value.classNames.input, e10.classNames.input),
        autoSize: e10.autoSize,
        value: u16.value,
        onChange: (n10) => {
          y9(n10.target.value, n10), x8(true);
        },
        onPressEnter: W4,
        onCompositionstart: Q2,
        onCompositionend: U2,
        onKeydown: e10.onKeyDown,
        placeholder: e10.placeholder,
        onPaste: Y4,
        bordered: false,
        readOnly: e10.readOnly
      }), null), P5.value && createVNode("div", {
        class: ga(S5.value, s16.value.classNames.actions, e10.classNames.actions),
        style: {
          ...s16.value.styles.actions,
          ...e10.styles.actions
        }
      }, [P5.value])]), N6.value && createVNode("div", {
        class: ga(`${o11.value}-footer`, s16.value.classNames.footer, e10.classNames.footer),
        style: {
          ...s16.value.styles.footer,
          ...e10.styles.footer
        }
      }, [N6.value])]
    })]));
  }
});

// node_modules/ant-design-x-vue/es/sender/SenderHeader.mjs
var R4 = defineComponent({
  name: "AXSenderHeader",
  inheritAttrs: false,
  __name: "SenderHeader",
  props: mergeDefaults({
    forceRender: {
      type: Boolean
    },
    open: {
      type: Boolean
    },
    onOpenChange: {
      type: Function
    },
    title: null,
    children: null,
    className: null,
    style: null,
    classNames: null,
    styles: null,
    closable: {
      type: Boolean
    }
  }, {
    classNames: () => ({}),
    styles: () => ({})
  }),
  setup(e10) {
    toRef(e10, "classNames");
    const a18 = useSlots(), s16 = l11(), t14 = computed(() => `${s16.value.prefixCls}-header`), i22 = useAttrs();
    return () => createVNode(l13, {
      prefixCls: s16.value.prefixCls
    }, {
      default: () => {
        var c16;
        return [e10.open || e10.forceRender ? withDirectives(createVNode("div", mergeProps(i22, {
          class: ga(t14.value, e10.className),
          style: {
            ...e10.style
          }
        }), [(e10.closable !== false || e10.title) && createVNode("div", {
          class: (
            // We follow antd naming standard here.
            // So the header part is use `-header` suffix.
            // Though its little bit weird for double `-header`.
            ga(`${t14.value}-header`, e10.classNames.header)
          ),
          style: {
            ...e10.styles.header
          }
        }, [createVNode("div", {
          class: `${t14.value}-title`
        }, [e10.title]), e10.closable !== false && createVNode("div", {
          class: `${t14.value}-close`
        }, [createVNode(button_default, {
          type: "text",
          icon: createVNode(kt, null, null),
          size: "small",
          onClick: () => {
            var o11;
            (o11 = e10.onOpenChange) == null || o11.call(e10, !e10.open);
          }
        }, null)])]), a18.default && createVNode("div", {
          class: ga(`${t14.value}-content`, e10.classNames.content),
          style: {
            ...e10.styles.content
          }
        }, [(c16 = a18.default) == null ? void 0 : c16.call(a18)])]), [[vShow, e10.open]]) : null];
      }
    });
  }
});

// node_modules/ant-design-x-vue/es/sender/index.mjs
var e8 = Object.assign(Ae2, {
  Header: R4
});
e8.install = function(n10) {
  return n10.component(e8.name, e8), n10.component(R4.name, R4), n10;
};

// node_modules/ant-design-x-vue/es/attachments/context.mjs
var a13 = Symbol("AttachmentContext");
var n8 = shallowRef();
var A6 = (t14) => {
  provide(a13, t14), watch(
    t14,
    () => {
      n8.value = unref(t14), triggerRef(n8);
    },
    { immediate: true, deep: true }
  );
};
var l14 = () => inject(
  a13,
  computed(() => n8.value || {})
);
var s10 = defineComponent({
  inheritAttrs: false,
  props: {
    value: c3()
  },
  setup(t14, { slots: e10 }) {
    return A6(computed(() => t14.value)), () => {
      var r4;
      return (r4 = e10.default) == null ? void 0 : r4.call(e10);
    };
  }
});

// node_modules/ant-design-x-vue/es/attachments/PlaceholderUploader.mjs
var L2 = defineComponent({
  name: "AXAttachmentsPlaceholderUploader",
  __name: "PlaceholderUploader",
  props: mergeDefaults({
    prefixCls: null,
    placeholder: null,
    upload: null,
    className: null,
    style: null
  }, {
    placeholder: () => ({})
  }),
  setup(e10, {
    expose: i22
  }) {
    const l20 = `${e10.prefixCls}-placeholder`, r4 = computed(() => e10.placeholder || {}), u16 = useTemplateRef("upload-dragger"), d11 = l14(), [p9, n10] = f2(false), f12 = () => {
      n10(true);
    }, m13 = (a18) => {
      a18.currentTarget.contains(a18.relatedTarget) || n10(false);
    }, g8 = () => {
      n10(false);
    }, h16 = computed(() => {
      var a18;
      return (a18 = u16.value) == null ? void 0 : a18.$el;
    });
    i22({
      nativeElement: h16
    });
    const v10 = (a18) => Array.isArray(a18) && a18.every(isVNode), y9 = computed(() => isVNode(e10.placeholder) || v10(e10.placeholder) ? e10.placeholder : createVNode(flex_default, {
      align: "center",
      justify: "center",
      vertical: true,
      class: `${l20}-inner`
    }, {
      default: () => [createVNode(typography_default.Text, {
        class: `${l20}-icon`
      }, {
        default: () => [r4.value.icon]
      }), createVNode(typography_default.Title, {
        class: `${l20}-title`,
        level: 5
      }, {
        default: () => [r4.value.title]
      }), createVNode(typography_default.Text, {
        class: `${l20}-description`,
        type: "secondary"
      }, {
        default: () => [r4.value.description]
      })]
    }));
    return () => createVNode("div", {
      class: ga(l20, {
        [`${l20}-drag-in`]: p9.value,
        [`${l20}-disabled`]: d11.value.disabled
      }, e10.className),
      onDragenter: f12,
      onDragleave: m13,
      onDrop: g8,
      "aria-hidden": d11.value.disabled,
      style: e10.style
    }, [createVNode(upload_default.Dragger, mergeProps({
      showUploadList: false
    }, e10.upload, {
      ref: "upload-dragger",
      style: {
        padding: 0,
        border: 0,
        background: "transparent"
      }
    }), {
      default: () => [y9.value]
    })]);
  }
});

// node_modules/ant-design-x-vue/es/attachments/DropArea.mjs
var O3 = defineComponent({
  name: "AXAttachmentsDropArea",
  __name: "DropArea",
  props: {
    prefixCls: null,
    className: null,
    getDropContainer: {
      type: Function
    },
    children: null
  },
  setup(e10) {
    const v10 = l14(), [n10, l20] = f2(), [f12, o11] = f2(null);
    onMounted(() => {
      var t14;
      l20((t14 = e10.getDropContainer) == null ? void 0 : t14.call(e10));
    }), watch(() => toValue(e10.getDropContainer), () => {
      var a18;
      const t14 = (a18 = e10.getDropContainer) == null ? void 0 : a18.call(e10);
      n10.value !== t14 && l20(t14);
    }), watch(() => !!n10.value, () => {
      if (n10.value) {
        const t14 = () => {
          o11(true);
        }, a18 = (r4) => {
          r4.preventDefault();
        }, u16 = (r4) => {
          r4.relatedTarget || o11(false);
        }, c16 = (r4) => {
          o11(false), r4.preventDefault();
        };
        document.addEventListener("dragenter", t14), document.addEventListener("dragover", a18), document.addEventListener("dragleave", u16), document.addEventListener("drop", c16), onWatcherCleanup(() => {
          document.removeEventListener("dragenter", t14), document.removeEventListener("dragover", a18), document.removeEventListener("dragleave", u16), document.removeEventListener("drop", c16);
        });
      }
    });
    const g8 = computed(() => e10.getDropContainer && n10.value && !v10.value.disabled), d11 = `${e10.prefixCls}-drop-area`;
    return () => g8.value ? createVNode(Teleport, {
      to: n10.value
    }, {
      default: () => [createVNode("div", {
        class: ga(d11, e10.className, {
          [`${d11}-on-body`]: n10.value.tagName === "BODY"
        }),
        style: {
          display: f12.value ? "block" : "none"
        }
      }, [e10.children])]
    }) : null;
  }
});

// node_modules/ant-design-x-vue/es/attachments/SilentUploader.mjs
var i17 = defineComponent({
  name: "AXAttachmentsSilentUploader",
  __name: "SilentUploader",
  props: {
    children: null,
    upload: null,
    rootClassName: null
  },
  setup(e10, {
    expose: o11
  }) {
    const t14 = useTemplateRef("upload"), a18 = computed(() => {
      var l20;
      return (l20 = t14.value) == null ? void 0 : l20.$el;
    });
    return o11({
      nativeElement: a18
    }), () => createVNode(upload_default, mergeProps(e10.upload, {
      showUploadList: false,
      ref: "upload"
    }), {
      default: () => [e10.children]
    });
  }
});

// node_modules/ant-design-x-vue/es/attachments/FileList/AudioIcon.mjs
var l15 = {};
var i18 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink"
};
function s11(L5, o11) {
  return openBlock(), createElementBlock("svg", i18, o11[0] || (o11[0] = [
    createBaseVNode("title", null, "audio", -1),
    createBaseVNode("g", {
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      "fill-rule": "evenodd"
    }, [
      createBaseVNode("path", {
        d: "M14.1178571,4.0125 C14.225,4.11964286 14.2857143,4.26428571 14.2857143,4.41607143 L14.2857143,15.4285714 C14.2857143,15.7446429 14.0303571,16 13.7142857,16 L2.28571429,16 C1.96964286,16 1.71428571,15.7446429 1.71428571,15.4285714 L1.71428571,0.571428571 C1.71428571,0.255357143 1.96964286,0 2.28571429,0 L9.86964286,0 C10.0214286,0 10.1678571,0.0607142857 10.275,0.167857143 L14.1178571,4.0125 Z M10.7315824,7.11216117 C10.7428131,7.15148751 10.7485063,7.19218979 10.7485063,7.23309113 L10.7485063,8.07742614 C10.7484199,8.27364959 10.6183424,8.44607275 10.4296853,8.50003683 L8.32984514,9.09986306 L8.32984514,11.7071803 C8.32986605,12.5367078 7.67249692,13.217028 6.84345686,13.2454634 L6.79068592,13.2463395 C6.12766108,13.2463395 5.53916361,12.8217001 5.33010655,12.1924966 C5.1210495,11.563293 5.33842118,10.8709227 5.86959669,10.4741173 C6.40077221,10.0773119 7.12636292,10.0652587 7.67042486,10.4442027 L7.67020842,7.74937024 L7.68449368,7.74937024 C7.72405122,7.59919041 7.83988806,7.48101083 7.98924584,7.4384546 L10.1880418,6.81004755 C10.42156,6.74340323 10.6648954,6.87865515 10.7315824,7.11216117 Z M9.60714286,1.31785714 L12.9678571,4.67857143 L9.60714286,4.67857143 L9.60714286,1.31785714 Z",
        fill: "currentColor"
      })
    ], -1)
  ]));
}
var d7 = a(l15, [["render", s11]]);

// node_modules/ant-design-x-vue/es/attachments/FileList/VideoIcon.mjs
var l16 = {};
var i19 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink"
};
function s12(c16, o11) {
  return openBlock(), createElementBlock("svg", i19, o11[0] || (o11[0] = [
    createBaseVNode("title", null, "video", -1),
    createBaseVNode("g", {
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      "fill-rule": "evenodd"
    }, [
      createBaseVNode("path", {
        d: "M14.1178571,4.0125 C14.225,4.11964286 14.2857143,4.26428571 14.2857143,4.41607143 L14.2857143,15.4285714 C14.2857143,15.7446429 14.0303571,16 13.7142857,16 L2.28571429,16 C1.96964286,16 1.71428571,15.7446429 1.71428571,15.4285714 L1.71428571,0.571428571 C1.71428571,0.255357143 1.96964286,0 2.28571429,0 L9.86964286,0 C10.0214286,0 10.1678571,0.0607142857 10.275,0.167857143 L14.1178571,4.0125 Z M12.9678571,4.67857143 L9.60714286,1.31785714 L9.60714286,4.67857143 L12.9678571,4.67857143 Z M10.5379461,10.3101106 L6.68957555,13.0059749 C6.59910784,13.0693494 6.47439406,13.0473861 6.41101953,12.9569184 C6.3874624,12.9232903 6.37482581,12.8832269 6.37482581,12.8421686 L6.37482581,7.45043999 C6.37482581,7.33998304 6.46436886,7.25043999 6.57482581,7.25043999 C6.61588409,7.25043999 6.65594753,7.26307658 6.68957555,7.28663371 L10.5379461,9.98249803 C10.6284138,10.0458726 10.6503772,10.1705863 10.5870027,10.2610541 C10.5736331,10.2801392 10.5570312,10.2967411 10.5379461,10.3101106 Z",
        fill: "currentColor"
      })
    ], -1)
  ]));
}
var m8 = a(l16, [["render", s12]]);

// node_modules/ant-design-x-vue/es/attachments/util.mjs
var E2 = (e10) => e10.indexOf("image/") === 0;
function g6(e10) {
  return new Promise((a18) => {
    if (!e10 || !e10.type || !E2(e10.type)) {
      a18("");
      return;
    }
    const n10 = new Image();
    if (n10.onload = () => {
      const { width: t14, height: c16 } = n10, o11 = t14 / c16, i22 = o11 > 1 ? 200 : 200 * o11, r4 = o11 > 1 ? 200 / o11 : 200, s16 = document.createElement("canvas");
      s16.width = i22, s16.height = r4, s16.style.cssText = `position: fixed; left: 0; top: 0; width: ${i22}px; height: ${r4}px; z-index: 9999; display: none;`, document.body.appendChild(s16), s16.getContext("2d").drawImage(n10, 0, 0, i22, r4);
      const d11 = s16.toDataURL();
      document.body.removeChild(s16), window.URL.revokeObjectURL(n10.src), a18(d11);
    }, n10.crossOrigin = "anonymous", e10.type.startsWith("image/svg+xml")) {
      const t14 = new FileReader();
      t14.onload = () => {
        t14.result && typeof t14.result == "string" && (n10.src = t14.result);
      }, t14.readAsDataURL(e10);
    } else if (e10.type.startsWith("image/gif")) {
      const t14 = new FileReader();
      t14.onload = () => {
        t14.result && a18(t14.result);
      }, t14.readAsDataURL(e10);
    } else
      n10.src = window.URL.createObjectURL(e10);
  });
}

// node_modules/ant-design-x-vue/es/attachments/style/fileCard.mjs
var o9 = (i22) => {
  const { componentCls: d11, antCls: t14, calc: r4 } = i22, e10 = `${d11}-list-card`, a18 = r4(i22.fontSize).mul(i22.lineHeight).mul(2).add(i22.paddingSM).add(i22.paddingSM).equal();
  return {
    [e10]: {
      borderRadius: i22.borderRadius,
      position: "relative",
      background: i22.colorFillContent,
      borderWidth: i22.lineWidth,
      borderStyle: "solid",
      borderColor: "transparent",
      flex: "none",
      // =============================== Desc ================================
      [`${e10}-name,${e10}-desc`]: {
        display: "flex",
        flexWrap: "nowrap",
        maxWidth: "100%"
      },
      [`${e10}-ellipsis-prefix`]: {
        flex: "0 1 auto",
        minWidth: 0,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      },
      [`${e10}-ellipsis-suffix`]: {
        flex: "none"
      },
      // ============================= Overview ==============================
      "&-type-overview": {
        padding: r4(i22.paddingSM).sub(i22.lineWidth).equal(),
        paddingInlineStart: r4(i22.padding).add(i22.lineWidth).equal(),
        display: "flex",
        flexWrap: "nowrap",
        gap: i22.paddingXS,
        alignItems: "flex-start",
        width: 236,
        // Icon
        [`${e10}-icon`]: {
          fontSize: r4(i22.fontSizeLG).mul(2).equal(),
          lineHeight: 1,
          paddingTop: r4(i22.paddingXXS).mul(1.5).equal(),
          flex: "none"
        },
        // Content
        [`${e10}-content`]: {
          flex: "auto",
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch"
        },
        [`${e10}-desc`]: {
          color: i22.colorTextTertiary
        }
      },
      // ============================== Preview ==============================
      "&-type-preview": {
        width: a18,
        height: a18,
        lineHeight: 1,
        display: "flex",
        alignItems: "center",
        [`&:not(${e10}-status-error)`]: {
          border: 0
        },
        // Img
        [`${t14}-image`]: {
          width: "100%",
          height: "100%",
          borderRadius: "inherit",
          img: {
            height: "100%",
            objectFit: "cover",
            borderRadius: "inherit"
          }
        },
        // Mask
        [`${e10}-img-mask`]: {
          position: "absolute",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: `rgba(0, 0, 0, ${i22.opacityLoading})`,
          borderRadius: "inherit"
        },
        // Error
        [`&${e10}-status-error`]: {
          [`img, ${e10}-img-mask`]: {
            borderRadius: r4(i22.borderRadius).sub(i22.lineWidth).equal()
          },
          [`${e10}-desc`]: {
            paddingInline: i22.paddingXXS
          }
        },
        // Progress
        [`${e10}-progress`]: {}
      },
      // ============================ Remove Icon ============================
      [`${e10}-remove`]: {
        position: "absolute",
        top: 0,
        insetInlineEnd: 0,
        border: 0,
        padding: i22.paddingXXS,
        background: "transparent",
        lineHeight: 1,
        transform: "translate(50%, -50%)",
        fontSize: i22.fontSize,
        cursor: "pointer",
        opacity: i22.opacityLoading,
        display: "none",
        "&:dir(rtl)": {
          transform: "translate(-50%, -50%)"
        },
        "&:hover": {
          opacity: 1
        },
        "&:active": {
          opacity: i22.opacityLoading
        }
      },
      [`&:hover ${e10}-remove`]: {
        display: "block"
      },
      // ============================== Status ===============================
      "&-status-error": {
        borderColor: i22.colorError,
        [`${e10}-desc`]: {
          color: i22.colorError
        }
      },
      // ============================== Motion ===============================
      "&-motion": {
        overflow: "hidden",
        transition: ["opacity", "width", "margin", "padding"].map((n10) => `${n10} ${i22.motionDurationSlow}`).join(","),
        [`${e10}-remove`]: {
          display: "none !important"
        },
        "&-appear-start": {
          width: 0,
          transition: "none"
        },
        "&-leave-active": {
          opacity: 0,
          width: 0,
          paddingInline: 0,
          borderInlineWidth: 0,
          marginInlineEnd: r4(i22.paddingSM).mul(-1).equal()
        }
      }
    }
  };
};

// node_modules/ant-design-x-vue/es/attachments/style/index.mjs
var a14 = {
  "&, *": {
    boxSizing: "border-box"
  }
};
var g7 = (o11) => {
  const { componentCls: r4, calc: i22, antCls: e10 } = o11, n10 = `${r4}-drop-area`, t14 = `${r4}-placeholder`;
  return {
    // ============================== Full Screen ==============================
    [n10]: {
      position: "absolute",
      inset: 0,
      zIndex: o11.zIndexPopupBase,
      ...a14,
      "&-on-body": {
        position: "fixed",
        inset: 0
      },
      "&-hide-placement": {
        [`${t14}-inner`]: {
          display: "none"
        }
      },
      [t14]: {
        padding: 0
      }
    },
    "&": {
      // ============================= Placeholder =============================
      [t14]: {
        height: "100%",
        borderRadius: o11.borderRadius,
        borderWidth: o11.lineWidthBold,
        borderStyle: "dashed",
        borderColor: "transparent",
        padding: o11.padding,
        position: "relative",
        backdropFilter: "blur(10px)",
        // background: token.colorBgPlaceholderHover,
        ...a14,
        [`${e10}-upload-wrapper ${e10}-upload${e10}-upload-btn`]: {
          padding: 0
        },
        [`&${t14}-drag-in`]: {
          borderColor: o11.colorPrimaryHover
        },
        [`&${t14}-disabled`]: {
          opacity: 0.25,
          pointerEvents: "none"
        },
        [`${t14}-inner`]: {
          gap: i22(o11.paddingXXS).div(2).equal()
        },
        [`${t14}-icon`]: {
          fontSize: o11.fontSizeHeading2,
          lineHeight: 1
        },
        [`${t14}-title${t14}-title`]: {
          margin: 0,
          fontSize: o11.fontSize,
          lineHeight: o11.lineHeight
        },
        [`${t14}-description`]: {}
      }
    }
  };
};
var c13 = (o11) => {
  const { componentCls: r4, calc: i22 } = o11, e10 = `${r4}-list`, n10 = i22(o11.fontSize).mul(o11.lineHeight).mul(2).add(o11.paddingSM).add(o11.paddingSM).equal();
  return {
    [r4]: {
      position: "relative",
      width: "100%",
      ...a14,
      // =============================== File List ===============================
      [e10]: {
        display: "flex",
        flexWrap: "wrap",
        gap: o11.paddingSM,
        fontSize: o11.fontSize,
        lineHeight: o11.lineHeight,
        color: o11.colorText,
        paddingBlock: o11.paddingSM,
        paddingInline: o11.padding,
        width: "100%",
        background: o11.colorBgContainer,
        // Hide scrollbar
        scrollbarWidth: "none",
        "-ms-overflow-style": "none",
        "&::-webkit-scrollbar": {
          display: "none"
        },
        // Scroll
        "&-overflow-scrollX, &-overflow-scrollY": {
          "&:before, &:after": {
            content: '""',
            position: "absolute",
            opacity: 0,
            transition: `opacity ${o11.motionDurationSlow}`,
            zIndex: 1
          }
        },
        "&-overflow-ping-start:before": {
          opacity: 1
        },
        "&-overflow-ping-end:after": {
          opacity: 1
        },
        "&-overflow-scrollX": {
          overflowX: "auto",
          overflowY: "hidden",
          flexWrap: "nowrap",
          "&:before, &:after": {
            insetBlock: 0,
            width: 8
          },
          "&:before": {
            insetInlineStart: 0,
            background: "linear-gradient(to right, rgba(0,0,0,0.06), rgba(0,0,0,0));"
          },
          "&:after": {
            insetInlineEnd: 0,
            background: "linear-gradient(to left, rgba(0,0,0,0.06), rgba(0,0,0,0));"
          },
          "&:dir(rtl)": {
            "&:before": {
              background: "linear-gradient(to left, rgba(0,0,0,0.06), rgba(0,0,0,0));"
            },
            "&:after": {
              background: "linear-gradient(to right, rgba(0,0,0,0.06), rgba(0,0,0,0));"
            }
          }
        },
        "&-overflow-scrollY": {
          overflowX: "hidden",
          overflowY: "auto",
          maxHeight: i22(n10).mul(3).equal(),
          "&:before, &:after": {
            insetInline: 0,
            height: 8
          },
          "&:before": {
            insetBlockStart: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.06), rgba(0,0,0,0));"
          },
          "&:after": {
            insetBlockEnd: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.06), rgba(0,0,0,0));"
          }
        },
        // ======================================================================
        // ==                              Upload                              ==
        // ======================================================================
        "&-upload-btn": {
          width: n10,
          height: n10,
          fontSize: o11.fontSizeHeading2,
          color: "#999"
        },
        // ======================================================================
        // ==                             PrevNext                             ==
        // ======================================================================
        "&-prev-btn, &-next-btn": {
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          boxShadow: o11.boxShadowTertiary,
          opacity: 0,
          pointerEvents: "none"
        },
        "&-prev-btn": {
          left: {
            _skip_check_: true,
            value: o11.padding
          }
        },
        "&-next-btn": {
          right: {
            _skip_check_: true,
            value: o11.padding
          }
        },
        "&:dir(ltr)": {
          [`&${e10}-overflow-ping-start ${e10}-prev-btn`]: {
            opacity: 1,
            pointerEvents: "auto"
          },
          [`&${e10}-overflow-ping-end ${e10}-next-btn`]: {
            opacity: 1,
            pointerEvents: "auto"
          }
        },
        "&:dir(rtl)": {
          [`&${e10}-overflow-ping-end ${e10}-prev-btn`]: {
            opacity: 1,
            pointerEvents: "auto"
          },
          [`&${e10}-overflow-ping-start ${e10}-next-btn`]: {
            opacity: 1,
            pointerEvents: "auto"
          }
        }
      }
    }
  };
};
var b2 = (o11) => {
  const { colorBgContainer: r4 } = o11;
  return {
    colorBgPlaceholderHover: new Qt(r4).setA(0.85).toRgbString()
  };
};
var x7 = C3(
  "Attachments",
  (o11) => {
    const r4 = l5(o11, {});
    return [
      g7(r4),
      c13(r4),
      o9(r4)
    ];
  },
  b2
);

// node_modules/ant-design-x-vue/es/attachments/FileList/FileListCard.mjs
var v8 = " ";
var s13 = "#8c8c8c";
var Ce2 = defineComponent({
  name: "AXAttachmentsFileListCard",
  __name: "FileListCard",
  props: {
    prefixCls: null,
    item: null,
    onRemove: {
      type: Function
    },
    className: null,
    style: null,
    imageProps: null,
    icon: null,
    type: null
  },
  setup(l20, {
    expose: S5
  }) {
    toRef(l20, "prefixCls");
    const x8 = ["png", "jpg", "jpeg", "gif", "bmp", "webp", "svg"], g8 = [{
      key: "default",
      icon: createVNode(Dt, null, null),
      color: s13,
      ext: []
    }, {
      key: "excel",
      icon: createVNode(It, null, null),
      color: "#22b35e",
      ext: ["xlsx", "xls"]
    }, {
      key: "image",
      icon: createVNode(Vt, null, null),
      color: s13,
      ext: x8
    }, {
      key: "markdown",
      icon: createVNode(Lt, null, null),
      color: s13,
      ext: ["md", "mdx"]
    }, {
      key: "pdf",
      icon: createVNode(Nt, null, null),
      color: "#ff4d4f",
      ext: ["pdf"]
    }, {
      key: "ppt",
      icon: createVNode(Bt, null, null),
      color: "#ff6e31",
      ext: ["ppt", "pptx"]
    }, {
      key: "word",
      icon: createVNode(Wt, null, null),
      color: "#1677ff",
      ext: ["doc", "docx"]
    }, {
      key: "zip",
      icon: createVNode(qt, null, null),
      color: "#fab714",
      ext: ["zip", "rar", "7z", "tar", "gz"]
    }, {
      key: "video",
      icon: createVNode(m8, null, null),
      color: "#ff4d4f",
      ext: ["mp4", "avi", "mov", "wmv", "flv", "mkv"]
    }, {
      key: "audio",
      icon: createVNode(d7, null, null),
      color: "#8c8c8c",
      ext: ["mp3", "wav", "flac", "ape", "aac", "ogg"]
    }];
    function p9(n10, t14) {
      return t14.some((c16) => n10.toLowerCase() === `.${c16}`);
    }
    function P5(n10) {
      let t14 = n10;
      const c16 = ["B", "KB", "MB", "GB", "TB", "PB", "EB"];
      let d11 = 0;
      for (; t14 >= 1024 && d11 < c16.length - 1; )
        t14 /= 1024, d11++;
      return `${t14.toFixed(0)} ${c16[d11]}`;
    }
    const b5 = l14(), E4 = computed(() => b5.value.disabled), j4 = computed(() => l20.item.name), F = computed(() => l20.item.size), u16 = computed(() => l20.item.percent), a18 = computed(() => l20.item.status || "done"), y9 = computed(() => l20.item.description), {
      getPrefixCls: z2
    } = c(), C6 = computed(() => z2("attachment", l20.prefixCls)), i22 = `${C6.value}-list-card`, [O4, R7, B4] = x7(C6), T4 = useTemplateRef("file-list-card-container"), r4 = computed(() => {
      const n10 = j4.value || "", t14 = n10.match(/^(.*)\.[^.]+$/);
      return {
        namePrefix: t14 ? t14[1] : n10,
        nameSuffix: t14 ? n10.slice(t14[1].length) : ""
      };
    }), A7 = computed(() => p9(r4.value.nameSuffix, x8)), $3 = computed(() => y9.value ? y9.value : a18.value === "uploading" ? `${u16.value || 0}%` : a18.value === "error" ? l20.item.response || v8 : F.value ? P5(F.value) : v8), w4 = computed(() => {
      if (l20.icon)
        if (typeof l20.icon == "string") {
          const n10 = g8.find((t14) => t14.key === l20.icon);
          if (n10)
            return {
              icon: n10.icon,
              color: n10.color
            };
        } else
          return {
            icon: l20.icon,
            color: void 0
          };
      for (const {
        ext: n10,
        icon: t14,
        color: c16
      } of g8)
        if (p9(r4.value.nameSuffix, n10))
          return {
            icon: t14,
            iconColor: c16
          };
      return {
        icon: createVNode(Dt, {
          key: "defaultIcon"
        }, null),
        iconColor: s13
      };
    }), [L5, I5] = f2();
    watch(() => l20.item.originFileObj, () => {
      if (l20.item.originFileObj) {
        let n10 = true;
        g6(l20.item.originFileObj).then((t14) => {
          n10 && I5(t14);
        }), onWatcherCleanup(() => {
          n10 = false;
        });
      }
      I5(void 0);
    }, {
      immediate: true
    });
    const m13 = computed(() => l20.item.thumbUrl || l20.item.url || L5.value), f12 = computed(() => l20.type === "image" || l20.type !== "file" && A7.value && (l20.item.originFileObj || m13.value)), N6 = computed(() => f12.value ? createVNode(Fragment, null, [m13.value && createVNode(image_default, mergeProps(l20.imageProps, {
      alt: "preview",
      src: m13.value
    }), null), a18.value !== "done" && createVNode("div", {
      class: `${i22}-img-mask`
    }, [a18.value === "uploading" && u16.value !== void 0 && createVNode(progress_default, {
      percent: u16.value,
      prefixCls: i22
    }, null), a18.value === "error" && createVNode("div", {
      class: `${i22}-desc`
    }, [createVNode("div", {
      class: `${i22}-ellipsis-prefix`
    }, [$3.value])])])]) : createVNode(Fragment, null, [createVNode("div", {
      class: `${i22}-icon`,
      style: {
        color: w4.value.iconColor
      }
    }, [w4.value.icon]), createVNode("div", {
      class: `${i22}-content`
    }, [createVNode("div", {
      class: `${i22}-name`
    }, [createVNode("div", {
      class: `${i22}-ellipsis-prefix`
    }, [r4.value.namePrefix ?? v8]), createVNode("div", {
      class: `${i22}-ellipsis-suffix`
    }, [r4.value.nameSuffix])]), createVNode("div", {
      class: `${i22}-desc`
    }, [createVNode("div", {
      class: `${i22}-ellipsis-prefix`
    }, [$3.value])])])]));
    return S5({
      nativeElement: T4
    }), () => O4(createVNode("div", {
      class: ga(i22, {
        [`${i22}-status-${a18.value}`]: a18.value,
        [`${i22}-type-preview`]: f12.value,
        [`${i22}-type-overview`]: !f12.value
      }, l20.className, R7.value, B4),
      style: l20.style,
      ref: "file-list-card-container"
    }, [N6.value, !E4.value && l20.onRemove && createVNode("button", {
      type: "button",
      class: `${i22}-remove`,
      onClick: () => {
        l20.onRemove(l20.item);
      }
    }, [createVNode(Ht, null, null)])]));
  }
});

// node_modules/ant-design-x-vue/es/attachments/FileList/FileList.mjs
var d8 = 1;
var I4 = defineComponent({
  name: "AXAttachmentsFileList",
  __name: "FileList",
  props: {
    prefixCls: null,
    items: null,
    onRemove: {
      type: Function
    },
    overflow: null,
    upload: null,
    imageProps: null,
    listClassName: null,
    listStyle: null,
    itemClassName: null,
    itemStyle: null
  },
  setup(l20) {
    const n10 = computed(() => `${l20.prefixCls}-list`), a18 = useTemplateRef("file-list-container"), [A7, c16] = f2(false), h16 = l14();
    watchEffect(() => {
      c16(true), onWatcherCleanup(() => {
        c16(false);
      });
    });
    const [g8, r4] = f2(false), [C6, u16] = f2(false), f12 = () => {
      const e10 = a18.value;
      e10 && (l20.overflow === "scrollX" ? (r4(Math.abs(e10.scrollLeft) >= d8), u16(e10.scrollWidth - e10.clientWidth - Math.abs(e10.scrollLeft) >= d8)) : l20.overflow === "scrollY" && (r4(e10.scrollTop !== 0), u16(e10.scrollHeight - e10.clientHeight !== e10.scrollTop)));
    };
    watch([() => l20.overflow, () => l20.items.length], () => {
      nextTick(() => {
        f12();
      });
    }, {
      immediate: true
    });
    const m13 = (e10) => {
      const o11 = a18.value;
      o11 && o11.scrollTo({
        left: o11.scrollLeft + e10 * o11.clientWidth,
        behavior: "smooth"
      });
    }, w4 = () => {
      m13(-1);
    }, S5 = () => {
      m13(1);
    };
    return () => createVNode("div", {
      class: ga(n10.value, {
        [`${n10.value}-overflow-${l20.overflow}`]: l20.overflow,
        [`${n10.value}-overflow-ping-start`]: g8.value,
        [`${n10.value}-overflow-ping-end`]: C6.value
      }, l20.listClassName),
      ref: "file-list-container",
      onScroll: f12,
      style: l20.listStyle
    }, [l20.items.map((e10) => createVNode(Ce2, {
      key: e10.uid,
      prefixCls: l20.prefixCls,
      item: e10,
      onRemove: l20.onRemove,
      className: ga(l20.itemClassName),
      imageProps: l20.imageProps,
      style: {
        ...l20.itemStyle
      }
    }, null)), !h16.value.disabled && createVNode(i17, {
      upload: l20.upload,
      children: createVNode(button_default, {
        class: `${n10.value}-upload-btn`,
        type: "dashed"
      }, {
        default: () => [createVNode(Ut, {
          class: `${n10.value}-upload-btn-icon`
        }, null)]
      })
    }, null), l20.overflow === "scrollX" && createVNode(Fragment, null, [createVNode(button_default, {
      size: "small",
      shape: "circle",
      class: `${n10.value}-prev-btn`,
      icon: createVNode(Gt, null, null),
      onClick: w4
    }, null), createVNode(button_default, {
      size: "small",
      shape: "circle",
      class: `${n10.value}-next-btn`,
      icon: createVNode(Zt, null, null),
      onClick: S5
    }, null)])]);
  }
});

// node_modules/ant-design-x-vue/es/attachments/Attachments.mjs
var ce2 = defineComponent({
  name: "AXAttachments",
  __name: "Attachments",
  props: mergeDefaults({
    capture: null,
    type: null,
    name: null,
    defaultFileList: null,
    action: null,
    directory: null,
    data: null,
    method: null,
    headers: null,
    showUploadList: null,
    multiple: null,
    accept: null,
    beforeUpload: null,
    onChange: {
      type: Function
    },
    "onUpdate:fileList": null,
    onDrop: null,
    listType: null,
    onPreview: null,
    onDownload: null,
    onReject: null,
    onRemove: null,
    remove: null,
    supportServerRender: null,
    disabled: {
      type: Boolean
    },
    prefixCls: null,
    customRequest: null,
    withCredentials: null,
    openFileDialogOnClick: null,
    locale: null,
    id: null,
    previewFile: null,
    transformFile: null,
    iconRender: null,
    isImageUrl: null,
    progress: null,
    itemRender: null,
    maxCount: null,
    height: null,
    removeIcon: null,
    downloadIcon: null,
    previewIcon: null,
    rootClassName: null,
    rootStyle: null,
    style: null,
    className: null,
    classNames: null,
    styles: null,
    children: null,
    placeholder: {
      type: Function
    },
    getDropContainer: {
      type: Function
    },
    items: null,
    overflow: null,
    imageProps: null
  }, {
    items: () => [],
    classNames: () => ({}),
    styles: () => ({})
  }),
  setup(e10, {
    expose: F
  }) {
    const L5 = c2(e10, ["prefixCls", "rootClassName", "rootStyle", "className", "style", "items", "children", "getDropContainer", "placeholder", "onChange", "onRemove", "overflow", "imageProps", "disabled", "classNames", "styles"]);
    toRef(e10, "prefixCls");
    const C6 = useSlots(), {
      getPrefixCls: b5,
      direction: y9
    } = c(), a18 = b5("attachment", e10.prefixCls), g8 = c4("attachments"), m13 = computed(() => g8.value.classNames), d11 = computed(() => g8.value.styles), N6 = useTemplateRef("attachments-container"), I5 = useTemplateRef("placeholder-uploader"), [U2, $3, A7] = x7(a18), f12 = computed(() => ga($3.value, A7)), [u16, p9] = f2(e10.items);
    watch(() => e10.items, () => {
      p9(e10.items);
    });
    const x8 = (l20) => {
      var t14;
      p9(l20.fileList), (t14 = e10.onChange) == null || t14.call(e10, l20);
    }, h16 = computed(() => ({
      ...L5,
      fileList: u16.value,
      onChange: x8
    })), E4 = (l20) => Promise.resolve(typeof e10.onRemove == "function" ? e10.onRemove(l20) : e10.onRemove).then((t14) => {
      if (t14 === false)
        return;
      const o11 = u16.value.filter((c16) => c16.uid !== l20.uid);
      x8({
        file: {
          ...l20,
          status: "removed"
        },
        fileList: o11
      });
    }), v10 = (l20, t14) => {
      const o11 = C6.placeholder ? C6.placeholder({
        type: l20
      }) : typeof e10.placeholder == "function" ? e10.placeholder(l20) : e10.placeholder;
      return createVNode(L2, {
        placeholder: o11,
        upload: h16.value,
        prefixCls: a18,
        className: ga(m13.value.placeholder, e10.classNames.placeholder),
        style: {
          ...d11.value.placeholder,
          ...e10.styles.placeholder,
          ...t14 == null ? void 0 : t14.style
        },
        ref: l20 === "inline" ? "placeholder-uploader" : void 0
      }, null);
    }, R7 = computed(() => u16.value.length > 0);
    return F({
      nativeElement: N6.value,
      upload: (l20) => {
        var c16, w4, P5;
        const t14 = (P5 = (c16 = I5.value) == null ? void 0 : (w4 = c16.nativeElement).querySelector) == null ? void 0 : P5.call(w4, 'input[type="file"]');
        if (!t14) return;
        const o11 = new DataTransfer();
        try {
          if ("length" in l20 && l20.length >= 1)
            for (let i22 = 0; i22 < l20.length; i22++)
              o11.items.add(l20[i22]);
          else
            o11.items.add(l20);
          t14.files = o11.files, t14.dispatchEvent(new Event("change", {
            bubbles: true
          }));
        } catch (i22) {
          console.error("upload failed", i22);
        }
      }
    }), () => U2(createVNode(s10, {
      value: {
        disabled: e10.disabled
      }
    }, {
      default: () => [e10.children ? createVNode(Fragment, null, [createVNode(i17, {
        upload: h16.value,
        rootClassName: e10.rootClassName,
        ref: "attachments-upload",
        children: e10.children
      }, null), createVNode(O3, {
        getDropContainer: e10.getDropContainer,
        prefixCls: a18,
        className: ga(f12.value, e10.rootClassName),
        children: v10("drop")
      }, null)]) : createVNode("div", {
        class: ga(a18, f12.value, {
          [`${a18}-rtl`]: y9.value === "rtl"
        }, e10.className, e10.rootClassName),
        style: {
          ...e10.rootStyle,
          ...e10.style
        },
        dir: y9.value || "ltr",
        ref: "attachments-container"
      }, [createVNode(I4, {
        prefixCls: a18,
        items: u16.value,
        onRemove: E4,
        overflow: e10.overflow,
        upload: h16.value,
        listClassName: ga(m13.value.list, e10.classNames.list),
        listStyle: {
          ...d11.value.list,
          ...e10.styles.list,
          ...!R7.value && {
            display: "none"
          }
        },
        itemClassName: ga(m13.value.item, e10.classNames.item),
        itemStyle: {
          ...d11.value.item,
          ...e10.styles.item
        },
        imageProps: e10.imageProps
      }, null), v10("inline", R7.value ? {
        style: {
          display: "none"
        }
      } : {}), createVNode(O3, {
        getDropContainer: e10.getDropContainer || (() => N6.value),
        prefixCls: a18,
        className: f12.value,
        children: v10("drop")
      }, null)])]
    }));
  }
});

// node_modules/ant-design-x-vue/es/attachments/index.mjs
var m9 = Object.assign(ce2, {
  FileCard: Ce2
});
m9.install = function(t14) {
  return t14.component(m9.name, m9), t14.component(Ce2.name, Ce2), t14;
};

// node_modules/ant-design-x-vue/es/thought-chain/hooks/useCollapsible.mjs
var b3 = (t14, f12, m13) => {
  const n10 = computed(() => {
    const e10 = toValue(t14);
    let a18 = {
      expandedKeys: [],
      onExpand: () => {
      }
    };
    return e10 ? (typeof e10 == "object" && (a18 = { ...a18, ...e10 }), {
      enableCollapse: true,
      customizeExpandedKeys: a18.expandedKeys,
      customizeOnExpand: a18.onExpand
    }) : {
      enableCollapse: false,
      customizeExpandedKeys: a18.expandedKeys,
      customizeOnExpand: a18.onExpand
    };
  }), [s16, o11] = f2(n10.value.customizeExpandedKeys), i22 = (e10) => {
    var l20, d11;
    if (!n10.value.enableCollapse)
      return;
    const a18 = s16.value.includes(e10) ? s16.value.filter((x8) => x8 !== e10) : [...s16.value, e10];
    (d11 = (l20 = n10.value).customizeOnExpand) == null || d11.call(l20, a18), typeof toValue(t14) != "object" && o11(a18);
  };
  return watch(
    n10,
    (e10) => {
      o11(e10.customizeExpandedKeys);
    },
    {
      deep: 1
    }
  ), [
    computed(() => n10.value.enableCollapse),
    s16,
    i22
    // collapseMotion,
  ];
};

// node_modules/ant-design-x-vue/es/thought-chain/interface.mjs
var e9 = ((r4) => (r4.PENDING = "pending", r4.SUCCESS = "success", r4.ERROR = "error", r4))(e9 || {});

// node_modules/ant-design-x-vue/es/thought-chain/style/index.mjs
var f10 = (e10) => {
  const { componentCls: t14 } = e10, i22 = `${t14}-item`, o11 = {
    [e9.PENDING]: e10.colorPrimaryText,
    [e9.SUCCESS]: e10.colorSuccessText,
    [e9.ERROR]: e10.colorErrorText
  }, l20 = Object.keys(o11);
  return l20.reduce((c16, r4) => {
    const s16 = o11[r4];
    return l20.forEach((a18) => {
      const S5 = `& ${i22}-${r4}-${a18}`, p9 = r4 === a18 ? {} : {
        backgroundColor: "none !important",
        backgroundImage: `linear-gradient(${s16}, ${o11[a18]})`
      };
      c16[S5] = {
        [`& ${i22}-icon, & > *::before`]: {
          backgroundColor: `${s16} !important`
        },
        "& > :last-child::before": p9
      };
    }), c16;
  }, {});
};
var z = (e10) => {
  const { calc: t14, componentCls: i22 } = e10, o11 = `${i22}-item`, l20 = {
    content: '""',
    width: t14(e10.lineWidth).mul(2).equal(),
    display: "block",
    position: "absolute",
    insetInlineEnd: "none",
    backgroundColor: e10.colorTextPlaceholder
  };
  return {
    "& > :last-child > :last-child": {
      "&::before": {
        display: "none !important"
      },
      [`&${o11}-footer`]: {
        "&::before": {
          display: "block !important",
          bottom: 0
        }
      }
    },
    [`& > ${o11}`]: {
      [`& ${o11}-header, & ${o11}-content, & ${o11}-footer`]: {
        position: "relative",
        "&::before": {
          bottom: t14(e10.itemGap).mul(-1).equal()
        }
      },
      [`& ${o11}-header, & ${o11}-content`]: {
        marginInlineStart: t14(e10.itemSize).mul(-1).equal(),
        "&::before": {
          ...l20,
          insetInlineStart: t14(e10.itemSize).div(2).sub(e10.lineWidth).equal()
        }
      },
      [`& ${o11}-header::before`]: {
        top: e10.itemSize,
        bottom: t14(e10.itemGap).mul(-2).equal()
      },
      [`& ${o11}-content::before`]: {
        top: "100%"
      },
      [`& ${o11}-footer::before`]: {
        ...l20,
        top: 0,
        insetInlineStart: t14(e10.itemSize).div(-2).sub(e10.lineWidth).equal()
      }
    }
  };
};
var $2 = (e10) => {
  const { componentCls: t14 } = e10, i22 = `${t14}-item`;
  return {
    [i22]: {
      display: "flex",
      flexDirection: "column",
      [`& ${i22}-collapsible`]: {
        cursor: "pointer"
      },
      [`& ${i22}-header`]: {
        display: "flex",
        marginBottom: e10.itemGap,
        gap: e10.itemGap,
        alignItems: "flex-start",
        [`& ${i22}-icon`]: {
          height: e10.itemSize,
          width: e10.itemSize,
          fontSize: e10.itemFontSize,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        [`& ${i22}-extra`]: {
          height: e10.itemSize,
          maxHeight: e10.itemSize
        },
        [`& ${i22}-header-box`]: {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          [`& ${i22}-title`]: {
            height: e10.itemSize,
            lineHeight: `${D2(e10.itemSize)}`,
            maxHeight: e10.itemSize,
            fontSize: e10.itemFontSize,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            [`& ${i22}-collapse-icon`]: {
              marginInlineEnd: e10.marginXS
            }
          },
          [`& ${i22}-desc`]: {
            fontSize: e10.itemFontSize,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }
        }
      },
      [`& ${i22}-content`]: {
        [`& ${i22}-content-hidden`]: {
          display: "none"
        },
        [`& ${i22}-content-box`]: {
          padding: e10.itemGap,
          display: "inline-block",
          maxWidth: `calc(100% - ${e10.itemSize})`,
          borderRadius: e10.borderRadiusLG,
          backgroundColor: e10.colorBgContainer,
          border: `${D2(e10.lineWidth)} ${e10.lineType} ${e10.colorBorderSecondary}`
        }
      },
      [`& ${i22}-footer`]: {
        marginTop: e10.itemGap,
        display: "inline-flex"
      }
    }
  };
};
var n9 = (e10, t14 = "middle") => {
  const { componentCls: i22 } = e10, o11 = {
    large: {
      itemSize: e10.itemSizeLG,
      itemGap: e10.itemGapLG,
      itemFontSize: e10.itemFontSizeLG
    },
    middle: {
      itemSize: e10.itemSize,
      itemGap: e10.itemGap,
      itemFontSize: e10.itemFontSize
    },
    small: {
      itemSize: e10.itemSizeSM,
      itemGap: e10.itemGapSM,
      itemFontSize: e10.itemFontSizeSM
    }
  }[t14];
  return {
    [`&${i22}-${t14}`]: {
      paddingInlineStart: o11.itemSize,
      gap: o11.itemGap,
      ...$2({
        ...e10,
        ...o11
      }),
      ...z({
        ...e10,
        ...o11
      })
    }
  };
};
var b4 = (e10) => {
  const { componentCls: t14 } = e10;
  return {
    [t14]: {
      display: "flex",
      flexDirection: "column",
      ...f10(e10),
      ...n9(e10),
      ...n9(e10, "large"),
      ...n9(e10, "small"),
      [`&${t14}-rtl`]: {
        direction: "rtl"
      }
    }
  };
};
var L3 = C3("ThoughtChain", (e10) => {
  const t14 = l5(e10, {
    // small size tokens
    itemFontSizeSM: e10.fontSizeSM,
    itemSizeSM: e10.calc(e10.controlHeightXS).add(e10.controlHeightSM).div(2).equal(),
    itemGapSM: e10.marginSM,
    // default size tokens
    itemFontSize: e10.fontSize,
    itemSize: e10.calc(e10.controlHeightSM).add(e10.controlHeight).div(2).equal(),
    itemGap: e10.margin,
    // large size tokens
    itemFontSizeLG: e10.fontSizeLG,
    itemSizeLG: e10.calc(e10.controlHeight).add(e10.controlHeightLG).div(2).equal(),
    itemGapLG: e10.marginLG
  });
  return [
    b4(t14),
    a12(t14)
  ];
});

// node_modules/ant-design-x-vue/es/thought-chain/context.mjs
var h13 = Symbol("ThoughtChainNodeContext");
var o10 = shallowRef();
var m10 = (e10) => {
  provide(h13, e10), watch(
    e10,
    () => {
      o10.value = unref(e10), triggerRef(o10);
    },
    { immediate: true, deep: true }
  );
};
var T2 = () => inject(
  h13,
  computed(() => o10.value || {})
);
var N5 = defineComponent({
  props: {
    value: c3()
  },
  setup(e10, { slots: t14 }) {
    return m10(computed(() => e10.value)), () => {
      var n10;
      return (n10 = t14.default) == null ? void 0 : n10.call(t14);
    };
  }
});

// node_modules/ant-design-x-vue/es/thought-chain/item.mjs
var te3 = defineComponent({
  name: "AXThoughtChainNode",
  __name: "item",
  props: mergeDefaults({
    info: null,
    nextStatus: null,
    onClick: {
      type: Function
    }
  }, {
    info: () => ({})
  }),
  setup(t14) {
    const c16 = c2(t14, ["info", "nextStatus", "onClick"]), R7 = computed(() => u10(c16, {
      attr: true,
      aria: true,
      data: true
    })), n10 = T2(), C6 = computed(() => n10.value.prefixCls), v10 = computed(() => n10.value.enableCollapse), A7 = computed(() => n10.value.expandedKeys), g8 = computed(() => n10.value.direction), r4 = computed(() => n10.value.classNames), f12 = computed(() => n10.value.styles), F = useId(), h16 = computed(() => t14.info.key ?? F), L5 = computed(() => t14.info.icon), d11 = computed(() => t14.info.title), x8 = computed(() => t14.info.extra), s16 = computed(() => t14.info.content), y9 = computed(() => t14.info.footer), $3 = computed(() => t14.info.status), u16 = computed(() => t14.info.description), p9 = computed(() => {
      const a18 = t14.info.tooltip ?? true, k6 = g8.value === "rtl" ? "topRight" : "topLeft", T4 = {
        title: d11.value,
        placement: k6
      }, N6 = {
        title: u16.value,
        placement: k6
      };
      return typeof a18 == "boolean" ? {
        titleConfig: T4,
        descriptionConfig: N6
      } : {
        titleConfig: {
          ...T4,
          ...a18.titleConfig ? a18.titleConfig : {}
        },
        descriptionConfig: {
          ...N6,
          ...a18.descriptionConfig ? a18.descriptionConfig : {}
        }
      };
    }), b5 = computed(() => !t14.info.tooltip), o11 = computed(() => `${C6.value}-item`), O4 = () => {
      var a18;
      return (a18 = t14.onClick) == null ? void 0 : a18.call(t14, h16.value);
    }, m13 = computed(() => {
      var a18;
      return (a18 = A7.value) == null ? void 0 : a18.includes(h16.value);
    }), w4 = computed(() => v10.value ? m13.value : true);
    return () => createVNode("div", mergeProps(R7.value, {
      class: ga(o11.value, {
        [`${o11.value}-${$3.value}${t14.nextStatus ? `-${t14.nextStatus}` : ""}`]: $3.value
      }, c16.class),
      style: c16.style
    }), [createVNode("div", {
      class: ga(`${o11.value}-header`, r4.value.itemHeader),
      style: f12.value.itemHeader,
      onClick: O4
    }, [createVNode(avatar_default, {
      icon: L5.value,
      class: `${o11.value}-icon`
    }, null), createVNode("div", {
      class: ga(`${o11.value}-header-box`, {
        [`${o11.value}-collapsible`]: v10.value && s16.value
      })
    }, [createVNode(typography_default.Text, {
      strong: true,
      class: `${o11.value}-title`
    }, {
      default: () => [v10.value && s16.value && (g8.value === "rtl" ? createVNode(Gt, {
        class: `${o11.value}-collapse-icon`,
        rotate: m13.value ? -90 : 0
      }, null) : createVNode(Zt, {
        class: `${o11.value}-collapse-icon`,
        rotate: m13.value ? 90 : 0
      }, null)), b5.value ? d11.value : createVNode(tooltip_default, p9.value.titleConfig, {
        default: () => [d11.value]
      })]
    }), u16.value && createVNode(typography_default.Text, {
      class: `${o11.value}-desc`,
      type: "secondary"
    }, {
      default: () => [b5.value ? u16.value : createVNode(tooltip_default, p9.value.descriptionConfig, {
        default: () => [u16.value]
      })]
    })]), x8.value && createVNode("div", {
      class: `${o11.value}-extra`
    }, [x8.value])]), createVNode(l13, {
      prefixCls: C6.value
    }, {
      default: () => [s16.value && withDirectives(createVNode("div", {
        class: ga(`${o11.value}-content`)
      }, [createVNode("div", {
        class: ga(`${o11.value}-content-box`, r4.value.itemContent),
        style: f12.value.itemContent
      }, [s16.value])]), [[vShow, w4.value]])]
    }), y9.value && createVNode("div", {
      class: ga(`${o11.value}-footer`, r4.value.itemFooter),
      style: f12.value.itemFooter
    }, [y9.value])]);
  }
});

// node_modules/ant-design-x-vue/es/thought-chain/ThoughtChain.mjs
var L4 = defineComponent({
  name: "AXThoughtChain",
  __name: "ThoughtChain",
  props: mergeDefaults({
    items: null,
    collapsible: {
      type: Boolean
    },
    size: null,
    styles: null,
    classNames: null,
    prefixCls: null,
    rootClassName: null
  }, {
    styles: () => ({}),
    classNames: () => ({}),
    size: "middle"
  }),
  setup(e10) {
    const f12 = c2(e10, ["prefixCls", "rootClassName", "class", "items", "collapsible", "styles", "style", "classNames", "size"]);
    toRef(e10, "class"), toRef(e10, "prefixCls");
    const y9 = computed(() => u10(f12, {
      attr: true,
      aria: true,
      data: true
    })), {
      getPrefixCls: n10,
      direction: r4
    } = c(), v10 = computed(() => n10()), s16 = computed(() => n10("thought-chain", e10.prefixCls)), t14 = c4("thoughtChain"), [
      d11,
      N6,
      h16
      // collapseMotion
    ] = b3(() => e10.collapsible, s16.value, v10.value), [x8, g8, b5] = L3(s16), P5 = computed(() => ga(e10.class, e10.rootClassName, s16.value, t14.value.className, g8.value, b5, {
      [`${s16.value}-rtl`]: r4.value === "rtl"
    }, `${s16.value}-${e10.size}`));
    return () => x8(createVNode("div", mergeProps(y9.value, {
      class: P5.value,
      style: {
        ...typeof t14.value.style == "object" ? t14.value.style : {},
        ...typeof e10.style == "object" ? e10.style : {}
      }
    }), [createVNode(N5, {
      value: {
        prefixCls: s16.value,
        enableCollapse: d11.value,
        // collapseMotion,
        expandedKeys: N6.value,
        direction: r4.value,
        classNames: {
          itemHeader: ga(t14.value.classNames.itemHeader, e10.classNames.itemHeader),
          itemContent: ga(t14.value.classNames.itemContent, e10.classNames.itemContent),
          itemFooter: ga(t14.value.classNames.itemFooter, e10.classNames.itemFooter)
        },
        styles: {
          itemHeader: {
            ...t14.value.styles.itemHeader,
            ...e10.styles.itemHeader
          },
          itemContent: {
            ...t14.value.styles.itemContent,
            ...e10.styles.itemContent
          },
          itemFooter: {
            ...t14.value.styles.itemFooter,
            ...e10.styles.itemFooter
          }
        }
      }
    }, {
      default: () => {
        var u16;
        return [(u16 = e10.items) == null ? void 0 : u16.map((a18, m13) => {
          var c16;
          return createVNode(te3, {
            key: a18.key || `key_${m13}`,
            class: ga(t14.value.classNames.item, e10.classNames.item),
            style: {
              ...t14.value.styles.item,
              ...e10.styles.item
            },
            info: {
              ...a18,
              icon: a18.icon || m13 + 1
            },
            onClick: h16,
            nextStatus: ((c16 = e10.items[m13 + 1]) == null ? void 0 : c16.status) || a18.status
          }, null);
        })];
      }
    })]));
  }
});

// node_modules/ant-design-x-vue/es/thought-chain/index.mjs
L4.install = function(t14) {
  return t14.component(L4.name, L4), t14;
};

// node_modules/ant-design-x-vue/es/components.ts-chunk.mjs
var T3 = Object.freeze(Object.defineProperty({
  __proto__: null,
  Attachments: m9,
  Bubble: t9,
  BubbleList: It2,
  Conversations: _5,
  Prompts: X3,
  Sender: e8,
  Suggestion: Y3,
  ThoughtChain: L4,
  Welcome: I3,
  XProvider: w,
  defaultPrefixCls: f,
  useXProviderContext: c
}, Symbol.toStringTag, { value: "Module" }));

// node_modules/ant-design-x-vue/es/_util/cssinjs/linters/utils.mjs
function a15(r4, t14) {
  const { path: n10, parentSelectors: e10 } = t14;
  u4(
    false,
    `[Ant Design Vue CSS-in-JS] ${n10 ? `Error in '${n10}': ` : ""}${r4}${e10.length ? ` Selector info: ${e10.join(" -> ")}` : ""}`
  );
}

// node_modules/ant-design-x-vue/es/_util/cssinjs/linters/legacyNotSelectorLinter.mjs
function s14(n10) {
  var r4;
  return (((r4 = n10.match(/:not\(([^)]*)\)/)) == null ? void 0 : r4[1]) || "").split(/(\[[^[]*])|(?=[.#])/).filter((o11) => o11).length > 1;
}
function a16(n10) {
  return n10.parentSelectors.reduce((e10, t14) => e10 ? t14.includes("&") ? t14.replace(/&/g, e10) : `${e10} ${t14}` : t14, "");
}
var i20 = (n10, e10, t14) => {
  const o11 = a16(t14).match(/:not\([^)]*\)/g) || [];
  o11.length > 0 && o11.some(s14) && a15("Concat ':not' selector not support in legacy browsers.", t14);
};

// node_modules/ant-design-x-vue/es/_util/cssinjs/linters/logicalPropertiesLinter.mjs
var p7 = (t14, r4, i22) => {
  switch (t14) {
    case "marginLeft":
    case "marginRight":
    case "paddingLeft":
    case "paddingRight":
    case "left":
    case "right":
    case "borderLeft":
    case "borderLeftWidth":
    case "borderLeftStyle":
    case "borderLeftColor":
    case "borderRight":
    case "borderRightWidth":
    case "borderRightStyle":
    case "borderRightColor":
    case "borderTopLeftRadius":
    case "borderTopRightRadius":
    case "borderBottomLeftRadius":
    case "borderBottomRightRadius":
      a15(
        `You seem to be using non-logical property '${t14}' which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties.`,
        i22
      );
      return;
    case "margin":
    case "padding":
    case "borderWidth":
    case "borderStyle":
      if (typeof r4 == "string") {
        const s16 = r4.split(" ").map((n10) => n10.trim());
        s16.length === 4 && s16[1] !== s16[3] && a15(
          `You seem to be using '${t14}' property with different left ${t14} and right ${t14}, which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties.`,
          i22
        );
      }
      return;
    case "clear":
    case "textAlign":
      (r4 === "left" || r4 === "right") && a15(
        `You seem to be using non-logical value '${r4}' of ${t14}, which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties.`,
        i22
      );
      return;
    case "borderRadius":
      typeof r4 == "string" && r4.split("/").map((o11) => o11.trim()).reduce((o11, l20) => {
        if (o11)
          return o11;
        const e10 = l20.split(" ").map((d11) => d11.trim());
        return e10.length >= 2 && e10[0] !== e10[1] || e10.length === 3 && e10[1] !== e10[2] || e10.length === 4 && e10[2] !== e10[3] ? true : o11;
      }, false) && a15(
        `You seem to be using non-logical value '${r4}' of ${t14}, which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties.`,
        i22
      );
      return;
  }
};

// node_modules/ant-design-x-vue/es/_util/cssinjs/linters/parentSelectorLinter.mjs
var i21 = (r4, l20, e10) => {
  e10.parentSelectors.some((t14) => t14.split(",").some((o11) => o11.split("&").length > 2)) && a15("Should not use more than one `&` in a selector.", e10);
};

// node_modules/ant-design-x-vue/es/_util/cssinjs/transformers/px2rem.mjs
var l17 = /url\([^)]+\)|var\([^)]+\)|(\d*\.?\d+)px/g;
function d9(s16, i22) {
  const o11 = Math.pow(10, i22 + 1), c16 = Math.floor(s16 * o11);
  return Math.round(c16 / 10) * 10 / o11;
}
var h14 = (s16 = {}) => {
  const { rootValue: i22 = 16, precision: o11 = 5, mediaQuery: c16 = false } = s16, p9 = (n10, e10) => {
    if (!e10) return n10;
    const t14 = parseFloat(e10);
    return t14 <= 1 ? n10 : `${d9(t14 / i22, o11)}rem`;
  };
  return { visit: (n10) => {
    const e10 = { ...n10 };
    return Object.entries(n10).forEach(([t14, r4]) => {
      if (typeof r4 == "string" && r4.includes("px")) {
        const a18 = r4.replace(l17, p9);
        e10[t14] = a18;
      }
      !ua[t14] && typeof r4 == "number" && r4 !== 0 && (e10[t14] = `${r4}px`.replace(l17, p9));
      const f12 = t14.trim();
      if (f12.startsWith("@") && f12.includes("px") && c16) {
        const a18 = t14.replace(l17, p9);
        e10[a18] = e10[t14], delete e10[t14];
      }
    }), e10;
  } };
};

// node_modules/ant-design-x-vue/es/_util/cssinjs/index.mjs
var R5 = {
  Theme: s5,
  createTheme: h9,
  useStyleRegister: ye2,
  useCacheToken: H5,
  createCache: s3,
  useStyleInject: y,
  useStyleProvider: S,
  Keyframes: a5,
  extractStyle: ue2,
  // Transformer
  legacyLogicalPropertiesTransformer: h6,
  px2remTransformer: h14,
  // Linters
  logicalPropertiesLinter: p7,
  legacyNotSelectorLinter: i20,
  parentSelectorLinter: i21,
  // cssinjs
  StyleProvider: R
};
var V4 = {
  supportModernCSS: () => M4() && V2()
};

// node_modules/ant-design-x-vue/es/x-stream/x-stream.mjs
var l18 = `

`;
var h15 = `
`;
var c14 = ":";
var u15 = (e10) => (e10 ?? "").trim() !== "";
function m11() {
  let e10 = "";
  return new TransformStream({
    transform(t14, o11) {
      e10 += t14;
      const r4 = e10.split(l18);
      r4.slice(0, -1).forEach((n10) => {
        u15(n10) && o11.enqueue(n10);
      }), e10 = r4[r4.length - 1];
    },
    flush(t14) {
      u15(e10) && t14.enqueue(e10);
    }
  });
}
function d10() {
  return new TransformStream({
    transform(e10, t14) {
      const r4 = e10.split(h15).reduce((n10, s16) => {
        const a18 = s16.indexOf(c14);
        if (a18 === -1)
          throw new Error(
            `The key-value separator "${c14}" is not found in the sse line chunk!`
          );
        const i22 = s16.slice(0, a18);
        if (!u15(i22)) return n10;
        const f12 = s16.slice(a18 + 1);
        return { ...n10, [i22]: f12 };
      }, {});
      Object.keys(r4).length !== 0 && t14.enqueue(r4);
    }
  });
}
function p8(e10) {
  const { readableStream: t14, transformStream: o11 } = e10;
  if (!(t14 instanceof ReadableStream))
    throw new Error("The options.readableStream must be an instance of ReadableStream.");
  const r4 = new TextDecoderStream(), n10 = o11 ? (
    /**
     * Uint8Array binary -> string -> Output
     */
    t14.pipeThrough(r4).pipeThrough(o11)
  ) : (
    /**
     * Uint8Array binary -> string -> SSE part string -> Default Output {@link SSEOutput}
     */
    t14.pipeThrough(r4).pipeThrough(m11()).pipeThrough(d10())
  );
  return n10[Symbol.asyncIterator] = async function* () {
    const s16 = this.getReader();
    for (; ; ) {
      const { done: a18, value: i22 } = await s16.read();
      if (a18) break;
      i22 && (yield i22);
    }
  }, n10;
}

// node_modules/ant-design-x-vue/es/x-request/x-fetch.mjs
var c15 = async (i22, r4 = {}) => {
  const { fetch: n10 = globalThis.fetch, middlewares: t14 = {}, ...f12 } = r4;
  if (typeof n10 != "function")
    throw new Error("The options.fetch must be a typeof fetch function!");
  let o11 = [i22, f12];
  typeof t14.onRequest == "function" && (o11 = await t14.onRequest(...o11));
  let e10 = await n10(...o11);
  if (typeof t14.onResponse == "function") {
    const s16 = await t14.onResponse(e10);
    if (!(s16 instanceof Response))
      throw new Error("The options.onResponse must return a Response instance!");
    e10 = s16;
  }
  if (!e10.ok)
    throw new Error(`Fetch failed with status ${e10.status}`);
  if (!e10.body)
    throw new Error("The response body is empty.");
  return e10;
};

// node_modules/ant-design-x-vue/es/x-request/x-request.mjs
var s15 = class _s {
  constructor(r4) {
    this.create = async (h16, e10, n10) => {
      var i22, u16;
      const t14 = new AbortController(), o11 = {
        method: "POST",
        body: JSON.stringify({
          model: this.model,
          ...h16
        }),
        headers: this.defaultHeaders,
        signal: t14.signal
      };
      (i22 = e10 == null ? void 0 : e10.onStream) == null || i22.call(e10, t14);
      try {
        const d11 = await c15(this.baseURL, {
          fetch: this.customOptions.fetch,
          ...o11
        });
        if (n10) {
          await this.customResponseHandler(d11, e10, n10);
          return;
        }
        const p9 = d11.headers.get("content-type") || "";
        switch (p9.split(";")[0].trim()) {
          case "text/event-stream":
            await this.sseResponseHandler(d11, e10);
            break;
          case "application/json":
            await this.jsonResponseHandler(d11, e10);
            break;
          default:
            throw new Error(`The response content-type: ${p9} is not support!`);
        }
      } catch (d11) {
        const p9 = d11 instanceof Error ? d11 : new Error("Unknown error!");
        throw (u16 = e10 == null ? void 0 : e10.onError) == null || u16.call(e10, p9), p9;
      }
    }, this.customResponseHandler = async (h16, e10, n10) => {
      var o11, i22;
      const t14 = [];
      for await (const u16 of p8({
        readableStream: h16.body,
        transformStream: n10
      }))
        t14.push(u16), (o11 = e10 == null ? void 0 : e10.onUpdate) == null || o11.call(e10, u16);
      (i22 = e10 == null ? void 0 : e10.onSuccess) == null || i22.call(e10, t14);
    }, this.sseResponseHandler = async (h16, e10) => {
      var t14, o11;
      const n10 = [];
      for await (const i22 of p8({
        readableStream: h16.body
      }))
        n10.push(i22), (t14 = e10 == null ? void 0 : e10.onUpdate) == null || t14.call(e10, i22);
      (o11 = e10 == null ? void 0 : e10.onSuccess) == null || o11.call(e10, n10);
    }, this.jsonResponseHandler = async (h16, e10) => {
      var t14, o11;
      const n10 = await h16.json();
      (t14 = e10 == null ? void 0 : e10.onUpdate) == null || t14.call(e10, n10), (o11 = e10 == null ? void 0 : e10.onSuccess) == null || o11.call(e10, [n10]);
    };
    const { baseURL: g8, model: H8, dangerouslyApiKey: S5, ...f12 } = r4;
    this.baseURL = r4.baseURL, this.model = r4.model, this.defaultHeaders = {
      "Content-Type": "application/json",
      ...r4.dangerouslyApiKey && {
        Authorization: r4.dangerouslyApiKey
      }
    }, this.customOptions = f12;
  }
  static init(r4) {
    if (!r4.baseURL || typeof r4.baseURL != "string")
      throw new Error("The baseURL is not valid!");
    return new _s(r4);
  }
};
var E3 = (y9) => computed(() => s15.init(toValue(y9)));

// node_modules/ant-design-x-vue/es/use-x-agent/use-x-agent.mjs
var a17 = 0;
var v9 = class {
  constructor(i22) {
    this.requestingMap = ref({}), this.request = (n10, s16, g8) => {
      const { request: u16 } = this.config, { onUpdate: c16, onSuccess: l20, onError: h16, onStream: r4 } = s16, e10 = a17;
      a17 += 1, this.requestingMap.value[e10] = true, u16 == null || u16(
        n10,
        {
          onStream: (t14) => {
            this.requestingMap.value[e10] && (r4 == null || r4(t14));
          },
          // Status should be unique.
          // One get success or error should not get more message
          onUpdate: (t14) => {
            this.requestingMap.value[e10] && c16(t14);
          },
          onSuccess: (t14) => {
            this.requestingMap.value[e10] && (l20(t14), this.finishRequest(e10));
          },
          onError: (t14) => {
            this.requestingMap.value[e10] && (h16(t14), this.finishRequest(e10));
          }
        },
        g8
      );
    }, this.config = i22;
  }
  finishRequest(i22) {
    delete this.requestingMap.value[i22];
  }
  isRequesting() {
    return Object.keys(this.requestingMap.value).length > 0;
  }
};
function R6(o11) {
  return [
    computed(
      () => {
        const { request: n10, ...s16 } = toValue(o11);
        return new v9({
          // @ts-expect-error
          request: n10 || E3({
            baseURL: s16.baseURL,
            model: s16.model,
            dangerouslyApiKey: s16.dangerouslyApiKey
          }).value.create,
          ...s16
        });
      }
    )
  ];
}

// node_modules/ant-design-x-vue/es/use-x-chat/useSyncState.mjs
function l19(f12, o11) {
  const e10 = ref(f12);
  function u16(t14) {
    const n10 = typeof t14 == "function" ? t14(e10.value) : t14;
    n10 !== e10.value && o11(n10, e10.value), e10.value = n10;
  }
  return [e10, u16];
}

// node_modules/ant-design-x-vue/es/use-x-chat/use-x-chat.mjs
function X4(d11) {
  return Array.isArray(d11) ? d11 : [d11];
}
function B3(d11) {
  const {
    defaultMessages: _8,
    agent: v10,
    requestFallback: f12,
    requestPlaceholder: m13,
    parser: b5,
    transformMessage: q3,
    transformStream: x8,
    resolveAbortController: y9
  } = d11, R7 = ref(0), D6 = computed(() => (_8 || []).map((r4, s16) => ({
    id: `default_${s16}`,
    status: "local",
    ...r4
  }))), [p9, g8] = l19(D6.value, () => {
  }), M5 = (r4, s16) => {
    const e10 = {
      id: `msg_${R7.value}`,
      message: r4,
      status: s16
    };
    return R7.value += 1, e10;
  }, F = computed(() => {
    const r4 = [];
    return p9.value.forEach((s16) => {
      const e10 = b5 ? b5(s16.message) : s16.message, l20 = X4(e10);
      l20.forEach((i22, h16) => {
        let t14 = s16.id;
        l20.length > 1 && (t14 = `${t14}_${h16}`), r4.push({
          id: t14,
          message: i22,
          status: s16.status
        });
      });
    }), r4;
  }), w4 = (r4) => r4.filter((s16) => s16.status !== "loading" && s16.status !== "error").map((s16) => s16.message), A7 = () => w4(p9.value), E4 = (r4) => {
    const { chunk: s16, chunks: e10, originMessage: l20 } = r4;
    if (typeof q3 == "function")
      return q3(r4);
    if (s16)
      return s16;
    if (Array.isArray(e10)) {
      const i22 = (e10 == null ? void 0 : e10.length) > 0 ? e10 == null ? void 0 : e10[(e10 == null ? void 0 : e10.length) - 1] : void 0;
      return l20 || i22;
    }
    return e10;
  };
  return {
    onRequest: n3((r4) => {
      if (!v10)
        throw new Error(
          "The agent parameter is required when using the onRequest method in an agent generated by useXAgent."
        );
      let s16 = null, e10, l20 = {};
      if (r4 && typeof r4 == "object" && "message" in r4) {
        const { message: t14, ...a18 } = r4;
        e10 = t14, l20 = a18;
      } else
        e10 = r4;
      g8((t14) => {
        let a18 = [...t14, M5(e10, "local")];
        if (m13) {
          let n10;
          typeof m13 == "function" ? n10 = m13(e10, {
            messages: w4(a18)
          }) : n10 = m13;
          const o11 = M5(n10, "loading");
          s16 = o11.id, a18 = [...a18, o11];
        }
        return a18;
      });
      let i22 = null;
      const h16 = (t14, a18, n10) => {
        let o11 = p9.value.find((c16) => c16.id === i22);
        if (o11)
          g8((c16) => c16.map((u16) => {
            if (u16.id === i22) {
              const S5 = E4({
                originMessage: u16.message,
                chunk: a18,
                chunks: n10,
                status: t14
              });
              return {
                ...u16,
                message: S5,
                status: t14
              };
            }
            return u16;
          }));
        else {
          const c16 = E4({ chunk: a18, status: t14, chunks: n10 });
          o11 = M5(c16, t14), g8((u16) => [...u16.filter((I5) => I5.id !== s16), o11]), i22 = o11.id;
        }
        return o11;
      };
      v10.request(
        {
          message: e10,
          messages: A7(),
          ...l20
        },
        {
          onUpdate: (t14) => {
            h16("loading", t14, []);
          },
          onSuccess: (t14) => {
            h16("success", void 0, t14);
          },
          onError: async (t14) => {
            if (f12) {
              let a18;
              typeof f12 == "function" ? a18 = await f12(e10, {
                error: t14,
                messages: A7()
              }) : a18 = f12, g8((n10) => [
                ...n10.filter((o11) => o11.id !== s16 && o11.id !== i22),
                M5(a18, "error")
              ]);
            } else
              g8((a18) => a18.filter((n10) => n10.id !== s16 && n10.id !== i22));
          },
          onStream: (t14) => {
            y9 == null || y9(t14);
          }
        },
        x8
      );
    }),
    messages: p9,
    parsedMessages: F,
    setMessages: g8
  };
}

// node_modules/ant-design-x-vue/es/index.mjs
var f11 = function(e10) {
  return Object.keys(T3).forEach((o11) => {
    const t14 = T3[o11];
    t14.install && e10.use(t14);
  }), e10.use(R5.StyleProvider), e10;
};
var m12 = {
  install: f11
};
export {
  m9 as Attachments,
  t9 as Bubble,
  It2 as BubbleList,
  _5 as Conversations,
  a5 as Keyframes,
  X3 as Prompts,
  e8 as Sender,
  R as StyleProvider,
  Y3 as Suggestion,
  s5 as Theme,
  L4 as ThoughtChain,
  I3 as Welcome,
  v9 as XAgent,
  c15 as XFetch,
  w as XProvider,
  E3 as XRequest,
  p8 as XStream,
  V4 as _experimental,
  s3 as createCache,
  h9 as createTheme,
  m12 as default,
  f as defaultPrefixCls,
  ue2 as extractStyle,
  f11 as install,
  h6 as legacyLogicalPropertiesTransformer,
  i20 as legacyNotSelectorLinter,
  p7 as logicalPropertiesLinter,
  i21 as parentSelectorLinter,
  h14 as px2remTransformer,
  theme_default as theme,
  _2 as token2CSSVar,
  D2 as unit,
  v2 as useCSSVarRegister,
  H5 as useCacheToken,
  y as useStyleInject,
  S as useStyleProvider,
  ye2 as useStyleRegister,
  R6 as useXAgent,
  B3 as useXChat,
  c as useXProviderContext
};
/*! Bundled license information:

ant-design-x-vue/es/chunks/module-chunk.mjs:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=ant-design-x-vue.js.map
