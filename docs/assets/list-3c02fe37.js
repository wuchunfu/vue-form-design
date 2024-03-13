import {
  d as k,
  k as v,
  L as w,
  l,
  r as a,
  o as x,
  c as V,
  i as s,
  w as D,
  q as B
} from './index-62047d8c.js'
const L = k({
  __name: 'list',
  setup(C) {
    const n = v(),
      t = w({ visible: !1 }),
      i = l(),
      r = l(),
      p = l({
        columns: [
          { label: '勾选', type: 'selection' },
          { prop: 'id', label: 'ID', width: '60px' },
          { prop: 'name', label: '名称', width: '150px' },
          {
            prop: 'category',
            label: '分类',
            config: { dictKey: 'sys-screen' }
          },
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
          { label: '操作', prop: '__control', width: '200px', fixed: 'right' }
        ],
        controlBtn: [
          {
            label: '新增大屏',
            icon: 'plus',
            type: 'primary',
            click: () => {
              c({})
            }
          },
          { label: '删除', key: 'del', type: 'danger', icon: 'delete' }
        ],
        operateBtn: [
          {
            label: '编辑',
            click: e => {
              c(e)
            }
          },
          {
            label: '设置',
            click: e => {
              ;(t.visible = !0),
                B(() => {
                  i.value.setValue(e)
                })
            }
          },
          {
            label: '查看',
            click: e => {
              const { href: o } = n.resolve({
                path: '/design/screen/show/' + e.id
              })
              window.open(o)
            }
          },
          { label: '删除', key: 'del', type: 'danger' }
        ],
        config: {}
      }),
      c = e => {
        n.push({ path: '/design/screen', query: { id: e.id } })
      },
      d = l({
        list: [
          {
            type: 'input',
            control: { modelValue: '', placeholder: '请输入大屏名称' },
            config: {},
            name: 'name',
            formItem: { label: '名称' }
          }
        ],
        form: { labelWidth: '', class: '', size: 'default' },
        config: { submitCancel: !0 }
      }),
      u = l({
        list: [
          {
            type: 'input',
            control: { modelValue: '' },
            config: {},
            name: 'name',
            formItem: { label: '名称' }
          },
          {
            type: 'select',
            control: { modelValue: '', appendToBody: !0 },
            options: [],
            config: { optionsType: 2, optionsFun: 'sys-screen' },
            name: 'category',
            formItem: { label: '分类' }
          },
          {
            type: 'select',
            control: { modelValue: '', appendToBody: !0 },
            options: [],
            config: {
              optionsType: 1,
              optionsFun: 'roleList',
              method: 'post',
              label: 'name',
              value: 'id',
              help: '哪些角色可以查看'
            },
            name: 'roleId',
            formItem: { label: '权限角色' }
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
        config: { source: '', submitCancel: !0 }
      }),
      m = e => {
        e === 'success' && ((t.visible = !1), r.value.getListData())
      },
      f = e => {
        e === 'reset' && (t.visible = !1)
      },
      b = e => ((e.type = 4), e)
    return (e, o) => {
      const y = a('ak-list'),
        g = a('ak-form'),
        h = a('el-dialog')
      return (
        x(),
        V('div', null, [
          s(
            y,
            {
              ref_key: 'tableListEl',
              ref: r,
              'request-url': 'designList',
              'delete-url': 'designDelete',
              'search-data': d.value,
              data: p.value,
              'before-fetch': b
            },
            null,
            8,
            ['search-data', 'data']
          ),
          s(
            h,
            {
              modelValue: t.visible,
              'onUpdate:modelValue': o[0] || (o[0] = _ => (t.visible = _)),
              title: '设置',
              width: '480px',
              'destroy-on-close': ''
            },
            {
              default: D(() => [
                s(
                  g,
                  {
                    ref_key: 'formEl',
                    ref: i,
                    data: u.value,
                    type: 2,
                    'edit-url': 'designChange',
                    'after-submit': m,
                    onBtnClick: f
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
export { L as default }
