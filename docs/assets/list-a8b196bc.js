import {
  d as V,
  k as D,
  L as C,
  l,
  r as a,
  o as p,
  c as N,
  i as s,
  w as r,
  b as q,
  m as B,
  t as I,
  f as T,
  q as L
} from './index-62047d8c.js'
const z = V({
  __name: 'list',
  setup(E) {
    const i = D(),
      t = C({ visible: !1 }),
      n = l(),
      c = l(),
      d = l({
        columns: [
          { label: '勾选', type: 'selection' },
          { prop: 'id', label: 'ID', width: '60px' },
          { prop: 'name', label: '表单名称', width: '150px' },
          { prop: 'sourceName', label: '数据源名称', width: '150px' },
          { prop: 'category', label: '分类', config: { dictKey: 'sys-form' } },
          {
            prop: 'status',
            label: '状态',
            config: {
              dictKey: 'sys-status',
              tagList: { 0: 'info', 1: 'success' }
            }
          },
          { prop: 'creatName', label: '创建人' },
          {
            prop: 'creatDate',
            label: '创建时间',
            width: 200,
            config: { formatter: '{y}-{m}-{d} {h}:{i}:{s}' }
          },
          { label: '操作', prop: '__control', width: '250px', fixed: 'right' }
        ],
        controlBtn: [
          {
            label: '新增',
            type: 'primary',
            size: 'small',
            click: () => {
              u({})
            }
          },
          { label: '删除', key: 'del', size: 'small' }
        ],
        operateBtn: [
          {
            label: '设置',
            key: 'set',
            click: e => {
              ;(t.visible = !0),
                L(() => {
                  n.value.setValue({
                    name: e.name,
                    id: e.id,
                    category: e.category,
                    status: e.status
                  })
                })
            }
          },
          {
            label: '一键创建列表',
            click: e => {
              i.push({ path: '/design/list', query: { form: e.id } })
            }
          },
          {
            label: '编辑',
            click: e => {
              u(e)
            }
          },
          { label: '删除', key: 'del' }
        ],
        config: { expand: !0 }
      }),
      u = e => {
        i.push({ path: '/design/form', query: { id: e.id } })
      },
      f = l({
        list: [
          {
            type: 'input',
            control: { modelValue: '', placeholder: '请输入表单名称' },
            config: {},
            name: 'name',
            formItem: { label: '表单名称' }
          },
          {
            type: 'input',
            control: { modelValue: '', placeholder: '请输入数据源名称' },
            config: {},
            name: 'sourceName',
            formItem: { label: '数据源名称' }
          },
          {
            type: 'select',
            control: { modelValue: '', placeholder: '请选择表单分类' },
            config: { optionsType: 2, optionsFun: 'sys-form' },
            name: 'category',
            formItem: { label: '分类' }
          }
        ],
        form: { labelWidth: '', class: '', size: 'default' },
        config: { submitCancel: !0 }
      }),
      b = l({
        list: [
          {
            type: 'input',
            control: { modelValue: '' },
            config: {},
            name: 'name',
            formItem: { label: '表单名称' },
            customRules: [
              { type: 'required', message: '请输入表单名称', trigger: 'blur' }
            ]
          },
          {
            type: 'select',
            control: { modelValue: '', appendToBody: !0 },
            options: [],
            config: { optionsType: 2, optionsFun: 'sys-form' },
            name: 'category',
            formItem: { label: '分类' }
          },
          {
            type: 'select',
            control: { modelValue: '', appendToBody: !0 },
            options: [],
            config: { optionsType: 2, optionsFun: 'sys-status' },
            name: 'status',
            formItem: { label: '启用状态' }
          }
        ],
        form: {
          labelWidth: '140px',
          class: '',
          size: 'default',
          name: 'formDialog'
        },
        config: { submitCancel: !0 }
      }),
      y = e => {
        e === 'success' && ((t.visible = !1), c.value.getListData())
      },
      g = e => {
        e === 'reset' && (t.visible = !1)
      },
      _ = e => ((e.type = 1), e)
    return (e, m) => {
      const k = a('router-link'),
        h = a('ak-list'),
        v = a('ak-form'),
        x = a('el-dialog')
      return (
        p(),
        N('div', null, [
          s(
            h,
            {
              ref_key: 'tableListEl',
              ref: c,
              'request-url': 'designList',
              'delete-url': 'designDelete',
              'search-data': f.value,
              data: d.value,
              'before-fetch': _
            },
            {
              sourceName: r(({ row: o }) => [
                o.source
                  ? (p(),
                    q(
                      k,
                      { key: 0, to: `/design/datasource?source=${o.source}` },
                      { default: r(() => [B(I(o.sourceName), 1)]), _: 2 },
                      1032,
                      ['to']
                    ))
                  : T('', !0)
              ]),
              _: 1
            },
            8,
            ['search-data', 'data']
          ),
          s(
            x,
            {
              modelValue: t.visible,
              'onUpdate:modelValue': m[0] || (m[0] = o => (t.visible = o)),
              title: '设置',
              width: '480px',
              'destroy-on-close': ''
            },
            {
              default: r(() => [
                s(
                  v,
                  {
                    ref_key: 'formEl',
                    ref: n,
                    data: b.value,
                    type: 2,
                    'edit-url': 'designChange',
                    'after-submit': y,
                    'btn-click': g
                  },
                  null,
                  8,
                  ['data']
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
  }
})
export { z as default }
