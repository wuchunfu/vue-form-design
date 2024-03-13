import {
  d as B,
  u as E,
  l as r,
  A as C,
  k as S,
  h as y,
  p as N,
  r as i,
  o as D,
  c as L,
  g as R,
  i as n,
  w as c,
  m as j,
  Z as F,
  D as M,
  q as z,
  $ as A,
  E as g
} from './index-62047d8c.js'
const O = { class: 'design-flow-container' },
  P = { class: 'tools' },
  Q = B({
    __name: 'index',
    setup(U) {
      E().changeBreadcrumb([{ label: '系统工具' }, { label: '流程设计' }])
      const f = r(),
        u = r(),
        m = C(),
        d = S(),
        s = r(m.query.tabs || 'info'),
        _ = r({
          list: [
            {
              type: 'input',
              control: { modelValue: '', placeholder: '请输入流程名称' },
              config: {},
              name: 'name',
              formItem: { label: '流程名称' },
              customRules: [
                { type: 'required', message: '请输入流程名称', trigger: 'blur' }
              ]
            },
            {
              type: 'select',
              control: { modelValue: '', appendToBody: !0 },
              options: [],
              config: {
                optionsType: 1,
                optionsFun: 'designList',
                method: 'post',
                debug: !0,
                label: 'name',
                value: 'id',
                beforeFetch: e => ((e.type = 1), e)
              },
              name: 'source',
              formItem: {
                label: '流程表单',
                rules: [
                  { required: !0, message: '请选择流程表单', trigger: 'blur' }
                ]
              }
            },
            {
              type: 'switch',
              control: { modelValue: 1, activeValue: 1, inactiveValue: 0 },
              options: [],
              config: { optionsType: 2 },
              name: 'status',
              formItem: { label: '状态' }
            },
            {
              type: 'component',
              control: { modelValue: '', colorPicker: !0 },
              config: { componentName: 'DiyIconfont' },
              name: 'icon',
              formItem: { label: '流程图标' }
            },
            {
              type: 'select',
              control: { modelValue: '', appendToBody: !0 },
              options: [],
              config: { optionsType: 2, optionsFun: 'sys-flow' },
              name: 'category',
              formItem: { label: '所在分组' }
            },
            {
              type: 'select',
              control: { modelValue: '', appendToBody: !0 },
              options: [],
              config: {
                optionsType: 1,
                optionsFun: 'roleList',
                label: 'name',
                value: 'id'
              },
              name: 'roleId',
              formItem: { label: '角色权限', showLabel: !1 }
            },
            {
              type: 'textarea',
              control: { modelValue: '' },
              config: { span: 24 },
              name: 'remark',
              formItem: { label: '备注说明', showLabel: !1 }
            }
          ],
          form: { class: 'form-row-2', labelWidth: '110px', size: 'default' }
        }),
        l = y(() => m.query.id),
        v = y(() => (l.value ? 2 : 1)),
        k = e => {
          e.paneName
        },
        w = () => {
          f.value.submit()
        },
        V = e => {
          let t, o, a
          return (
            l.value && (e.id = l.value),
            e.icon && (e.icon = (t = e.icon) == null ? void 0 : t.join(',')),
            (e.type = 3),
            (o = u.value) != null &&
              o.getValue &&
              (e.data = F((a = u.value) == null ? void 0 : a.getValue())),
            e
          )
        },
        h = e => (
          e.icon && (e.icon = e.icon.split(',')), u.value.setValue(M(e.data)), e
        ),
        T = (e, t) => {
          if (e === 'success')
            if (s.value === 'info') {
              if (((s.value = 'flow'), !l.value)) {
                const o = t.data.insertId
                d.push({
                  path: '/design/flow',
                  query: { id: o, tabs: 'flow' }
                }),
                  z(() => {
                    p()
                  })
              }
            } else d.push({ path: '/design/flow/list' })
          if (e === 'validate' && s.value === 'flow') {
            let o
            try {
              for (const a in t)
                if (!o) {
                  o = t[a][0].message
                  break
                }
              A.error(o)
            } catch {}
          }
        },
        p = () => {
          l.value && f.value.getData({ id: l.value })
        }
      return (
        N(() => {
          p()
        }),
        (e, t) => {
          const o = i('el-button'),
            a = i('ak-form'),
            b = i('el-tab-pane'),
            I = i('ak-flow'),
            q = i('el-tabs')
          return (
            D(),
            L('div', O, [
              R('div', P, [
                n(
                  o,
                  { type: 'primary', onClick: w },
                  { default: c(() => [j('保存')]), _: 1 }
                )
              ]),
              n(
                q,
                {
                  modelValue: s.value,
                  'onUpdate:modelValue': t[0] || (t[0] = x => (s.value = x)),
                  class: 'flow-tabs',
                  onTabClick: k
                },
                {
                  default: c(() => [
                    n(
                      b,
                      { label: '基础信息', name: 'info', class: 'tabs-info' },
                      {
                        default: c(() => [
                          n(
                            a,
                            {
                              ref_key: 'formEl',
                              ref: f,
                              data: _.value,
                              type: v.value,
                              'submit-url': 'designSave',
                              'edit-url': 'designEdit',
                              'request-url': 'designById',
                              'before-submit': V,
                              'after-submit': T,
                              'after-fetch': h
                            },
                            null,
                            8,
                            ['data', 'type']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    n(
                      b,
                      { label: '审批流程', name: 'flow' },
                      {
                        default: c(() => [
                          n(I, { ref_key: 'flowEl', ref: u }, null, 512)
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  _: 1
                },
                8,
                ['modelValue']
              )
            ])
          )
        }
      )
    }
  })
typeof g == 'function' && g(Q)
export { Q as default }
