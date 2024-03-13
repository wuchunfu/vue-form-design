import {
  d as C,
  l,
  L,
  r as m,
  o as f,
  c as E,
  b as w,
  w as b,
  g as y,
  n as B,
  t as D,
  f as N,
  i as g,
  I as S,
  q as p
} from './index-62047d8c.js'
const q = { style: { 'padding-left': '5px' } },
  P = C({
    __name: 'menu',
    setup(z) {
      const u = l(),
        s = l(),
        d = { menuType: { 1: '菜单', 2: '按钮', 3: '设计内容' } },
        i = l(!0),
        v = l({
          list: [
            {
              type: 'input',
              control: { modelValue: '', placeholder: '请输入菜单名称' },
              name: 'name',
              formItem: { label: '菜单名称' }
            },
            {
              type: 'select',
              control: { modelValue: '' },
              options: [],
              config: { optionsType: 2, optionsFun: 'sys-status' },
              name: 'status',
              formItem: { label: '状态' }
            }
          ],
          config: { submitCancel: !0 },
          form: { size: 'default' }
        }),
        r = l({
          tableProps: { rowKey: 'id', defaultExpandAll: !1 },
          columns: [
            { label: '菜单名称', prop: 'name' },
            { label: '地址', prop: 'path' },
            { label: '排序', prop: 'sort', width: 60 },
            {
              label: '类型',
              prop: 'type',
              width: 100,
              config: {
                dictKey: 'menuType',
                tagList: { 1: 'success', 2: 'info', 3: 'warning' }
              }
            },
            {
              label: '状态',
              prop: 'status',
              width: 70,
              config: {
                dictKey: 'sys-status',
                tagList: { 1: 'success', 2: 'info' }
              }
            },
            { label: '操作', prop: '__control', width: 140 }
          ],
          controlBtn: [
            {
              label: '新增',
              type: 'primary',
              icon: 'plus',
              click: () => {
                ;(t.visible = !0), (t.title = '新增菜单'), (t.formType = 1)
              }
            },
            {
              label: '展开折叠',
              click: () => {
                ;(r.value.tableProps.defaultExpandAll =
                  !r.value.tableProps.defaultExpandAll),
                  (i.value = !1),
                  p(() => {
                    i.value = !0
                  })
              }
            }
          ],
          operateBtn: [
            {
              label: '新增',
              click: e => {
                ;(t.visible = !0),
                  (t.title = '新增菜单'),
                  (t.formType = 1),
                  p(() => {
                    s.value.setValue({ parentId: e.id })
                  })
              }
            },
            {
              label: '编辑',
              click: e => {
                ;(t.visible = !0),
                  (t.title = '编辑菜单'),
                  (t.formType = 2),
                  (t.editId = e.id),
                  p(() => {
                    s.value.setValue(e, !0)
                  })
              }
            },
            { label: '删除', key: 'del' }
          ],
          config: { pageSize: 100, fixedBottomScroll: !1 }
        }),
        t = L({ visible: !1, title: '', formType: 1, editId: '' }),
        h = l({
          list: [
            {
              type: 'input',
              control: { modelValue: '', disabled: !0, placeholder: '父级ID' },
              name: 'parentId',
              formItem: { label: '父级ID' }
            },
            {
              type: 'select',
              control: { modelValue: 1 },
              options: [],
              config: { optionsType: 2, optionsFun: 'menuType' },
              name: 'type',
              formItem: { label: '类型' }
            },
            {
              type: 'select',
              control: { modelValue: '' },
              options: [],
              config: {
                optionsType: 1,
                optionsFun: 'designList',
                method: 'post',
                label: 'name',
                value: 'id',
                query: { type: 2 },
                hidden: '$.type!==3'
              },
              name: 'contentList',
              formItem: { label: '内容列表' }
            },
            {
              type: 'input',
              control: { modelValue: '', placeholder: '请输入菜单名称' },
              config: {},
              name: 'name',
              formItem: { label: '菜单名称' },
              customRules: [
                {
                  type: 'required',
                  message: '菜单名称不能为空',
                  trigger: 'blur'
                }
              ]
            },
            {
              type: 'input',
              control: {
                modelValue: '',
                placeholder: '请输入访问地址/类型标识'
              },
              config: { disabled: '$.type===3' },
              name: 'path',
              formItem: { label: '访问地址' }
            },
            {
              type: 'component',
              control: { modelValue: '' },
              config: { componentName: 'diyIconfont' },
              name: 'icon',
              formItem: { label: 'icon图标' }
            },
            {
              type: 'inputNumber',
              control: { modelValue: 0, controlsPosition: 'right' },
              config: {},
              name: 'sort',
              formItem: { label: '排序' }
            },
            {
              type: 'radio',
              control: { modelValue: 1 },
              options: [],
              config: { optionsType: 2, optionsFun: 'sys-status' },
              name: 'status',
              formItem: { label: '状态' }
            },
            {
              type: 'textarea',
              control: { modelValue: '' },
              config: { span: 24 },
              name: 'remark',
              formItem: { label: '备注' }
            }
          ],
          form: { class: 'form-row-2', labelWidth: '100px', size: 'default' },
          config: { submitCancel: !0 }
        }),
        _ = e => (
          t.formType === 2 && (e.id = t.editId), delete e.contentList, e
        ),
        I = e => {
          ;(t.visible = !1), e === 'success' && u.value.getListData()
        },
        V = e => {
          e === 'reset' && (t.visible = !1)
        },
        k = e => ((e.list = S(e.list)), e),
        T = ({ key: e, label: o, model: a, value: c }) => {
          e === 'contentList' &&
            ((a.path = '/design/list/content/' + c), (a.name = o))
        }
      return (e, o) => {
        const a = m('ak-list'),
          c = m('ak-form'),
          x = m('el-dialog')
        return (
          f(),
          E('div', null, [
            i.value
              ? (f(),
                w(
                  a,
                  {
                    key: 0,
                    ref_key: 'tableListEl',
                    ref: u,
                    'request-url': 'menuList',
                    'delete-url': 'menuDelete',
                    'search-data': v.value,
                    data: r.value,
                    'after-fetch': k,
                    dict: d
                  },
                  {
                    name: b(({ row: n }) => [
                      y('i', { class: B(n.icon) }, null, 2),
                      y('span', q, D(n.name), 1)
                    ]),
                    _: 1
                  },
                  8,
                  ['search-data', 'data']
                ))
              : N('', !0),
            g(
              x,
              {
                modelValue: t.visible,
                'onUpdate:modelValue': o[0] || (o[0] = n => (t.visible = n)),
                title: t.title,
                width: '680px',
                'destroy-on-close': ''
              },
              {
                default: b(() => [
                  g(
                    c,
                    {
                      ref_key: 'formNameEl',
                      ref: s,
                      type: t.formType,
                      data: h.value,
                      'submit-url': 'menuSave',
                      'edit-url': 'menuEdit',
                      'before-submit': _,
                      'after-submit': I,
                      onBtnClick: V,
                      dict: d,
                      onChange: T
                    },
                    null,
                    8,
                    ['type', 'data']
                  )
                ]),
                _: 1
              },
              8,
              ['modelValue', 'title']
            )
          ])
        )
      }
    }
  })
export { P as default }
