import {
  d as x,
  k as V,
  L as C,
  l as a,
  r as o,
  o as q,
  c as B,
  i as s,
  w as n,
  m as I,
  t as u,
  q as N
} from './index-62047d8c.js'
const T = x({
  __name: 'list',
  setup(w) {
    const i = V(),
      t = C({ visible: !1, id: null }),
      r = a(),
      c = a(),
      m = a({
        columns: [
          { label: '勾选', type: 'selection' },
          { prop: 'id', label: 'ID', width: '60px' },
          { prop: 'name', label: '名称', width: '150px' },
          { prop: 'sourceName', label: '表单名称/ID', width: 150 },
          { prop: 'category', label: '分类', config: { dictKey: 'sys-list' } },
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
          { label: '操作', prop: '__control', width: '110px', fixed: 'right' }
        ],
        controlBtn: [
          {
            label: '新增列表',
            icon: 'plus',
            type: 'primary',
            size: 'small',
            permission: '/design/list/list',
            click: () => {
              d({})
            }
          },
          {
            label: '删除',
            key: 'del',
            size: 'small',
            type: 'danger',
            icon: 'delete'
          }
        ],
        operateBtn: [
          {
            label: '编辑',
            click: e => {
              d(e)
            }
          },
          {
            label: '设置',
            click: e => {
              ;(t.visible = !0),
                N(() => {
                  ;(t.id = e.id), r.value.setValue(e, !0)
                })
            }
          },
          {
            label: '搜索设置',
            click: e => {
              i.push({
                path: '/design/form',
                query: {
                  type: 'search',
                  id: e.id,
                  redirect: '/design/list/list'
                }
              })
            }
          },
          {
            label: '查看',
            click: e => {
              i.push({ path: '/design/list/content/' + e.id })
            }
          },
          { label: '删除', key: 'del' }
        ],
        config: { operateDropdown: 1 }
      }),
      d = e => {
        i.push({ path: '/design/list', query: { id: e.id } })
      },
      f = a({
        list: [
          {
            type: 'input',
            control: { modelValue: '', placeholder: '请输入列表名称' },
            config: {},
            name: 'name',
            formItem: { label: '名称' }
          },
          {
            type: 'input',
            control: { modelValue: '', placeholder: '请输入表单名称' },
            config: {},
            name: 'sourceName',
            formItem: { label: '表单名称' }
          }
        ],
        form: { labelWidth: '', class: '', size: 'default' },
        config: { submitCancel: !0 }
      }),
      b = a({
        list: [
          {
            type: 'input',
            control: { modelValue: '', placeholder: '请输入列表名称' },
            name: 'name',
            formItem: { label: '名称' }
          },
          {
            type: 'select',
            control: { modelValue: '', appendToBody: !0 },
            options: [],
            config: { optionsType: 2, optionsFun: 'sys-list' },
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
      g = e => {
        e === 'success' && ((t.visible = !1), c.value.getListData())
      },
      y = e => {
        e === 'reset' && (t.visible = !1)
      },
      _ = e => e
    return (e, p) => {
      const h = o('router-link'),
        k = o('ak-list'),
        v = o('ak-form'),
        D = o('el-dialog')
      return (
        q(),
        B('div', null, [
          s(
            k,
            {
              ref_key: 'tableListEl',
              ref: c,
              'request-url': 'designList',
              'delete-url': 'designDelete',
              'search-data': f.value,
              data: m.value,
              'before-fetch': _,
              query: { type: 2 }
            },
            {
              sourceName: n(({ row: l }) => [
                s(
                  h,
                  {
                    to: `/design/form?id=${l.source}&redirect=/design/list/list`
                  },
                  {
                    default: n(() => [
                      I(u(l.sourceName) + '/' + u(l.source), 1)
                    ]),
                    _: 2
                  },
                  1032,
                  ['to']
                )
              ]),
              _: 1
            },
            8,
            ['search-data', 'data']
          ),
          s(
            D,
            {
              modelValue: t.visible,
              'onUpdate:modelValue': p[0] || (p[0] = l => (t.visible = l)),
              title: '设置',
              width: '480px',
              'destroy-on-close': ''
            },
            {
              default: n(() => [
                s(
                  v,
                  {
                    ref_key: 'formEl',
                    ref: r,
                    data: b.value,
                    type: 2,
                    params: { id: t.id },
                    'edit-url': 'designChange',
                    'after-submit': g,
                    onBtnClick: y
                  },
                  null,
                  8,
                  ['data', 'params']
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
export { T as default }
