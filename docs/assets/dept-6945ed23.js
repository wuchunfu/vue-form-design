import {
  d as V,
  l,
  L as h,
  r as i,
  o as x,
  c as C,
  i as n,
  w as E,
  I as u,
  q as c
} from './index-62047d8c.js'
const D = V({
  __name: 'dept',
  setup(L) {
    const m = l(),
      a = l(),
      p = l([]),
      d = l({
        list: [
          {
            type: 'input',
            control: { modelValue: '', placeholder: '请输入部门名称' },
            config: {},
            name: 'name',
            formItem: { label: '部门名称' }
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
        form: { labelWidth: '', class: '', size: 'default' },
        config: { submitCancel: !0 }
      }),
      f = l({
        tableProps: { rowKey: 'id' },
        columns: [
          { label: '部门名称', prop: 'name' },
          { label: '排序', prop: 'sort' },
          {
            label: '状态',
            prop: 'status',
            config: {
              dictKey: 'sys-status',
              tagList: { 1: 'success', 2: 'info' }
            }
          },
          { label: '操作', prop: '__control' }
        ],
        controlBtn: [
          {
            label: '新增',
            type: 'primary',
            size: 'small',
            icon: 'plus',
            click: () => {
              ;(e.visible = !0), (e.title = '新增部门'), (e.formType = 1), r()
            }
          }
        ],
        operateBtn: [
          {
            label: '新增',
            click: t => {
              ;(e.visible = !0),
                (e.title = '新增部门'),
                (e.formType = 1),
                c(() => {
                  a.value.setValue({ parentId: t.id })
                }),
                r()
            }
          },
          {
            label: '编辑',
            click: t => {
              ;(e.visible = !0),
                (e.title = '编辑部门'),
                (e.formType = 2),
                (e.editId = t.id),
                t.parentId === 0 && (t.parentId = ''),
                c(() => {
                  a.value.setValue(t)
                }),
                r()
            }
          },
          { label: '删除', key: 'del' }
        ],
        config: { fixedBottomScroll: !1 }
      }),
      e = h({ visible: !1, title: '', formType: 1, editId: '' }),
      b = l({
        list: [
          {
            type: 'treeSelect',
            control: {
              modelValue: '',
              data: [],
              renderAfterExpand: !1,
              props: { label: 'name', value: 'id' },
              checkStrictly: !0,
              placeholder: '请选择上级部门'
            },
            config: { optionsType: 0 },
            name: 'parentId',
            formItem: { label: '上级部门' }
          },
          {
            type: 'input',
            control: { modelValue: '', placeholder: '请输入部门名称' },
            config: {},
            name: 'name',
            formItem: { label: '部门名称' },
            customRules: [
              { type: 'required', message: '部门名称不能为空', trigger: 'blur' }
            ]
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
            config: {},
            name: 'remark',
            formItem: { label: '备注' }
          }
        ],
        form: { labelWidth: '100px', size: 'default' },
        config: { submitCancel: !0 }
      }),
      y = t => (e.formType === 2 && (t.id = e.editId), t),
      v = t => {
        ;(e.visible = !1), t === 'success' && m.value.getListData()
      },
      g = t => {
        t === 'reset' && (e.visible = !1)
      },
      _ = t => {
        const o = t.list,
          s = u(o)
        return (p.value = s), u(s)
      },
      r = () => {
        c(() => {
          a.value.setOptions({ parentId: p.value })
        })
      }
    return (t, o) => {
      const s = i('ak-list'),
        k = i('ak-form'),
        I = i('el-dialog')
      return (
        x(),
        C('div', null, [
          n(
            s,
            {
              ref_key: 'tableListEl',
              ref: m,
              'request-url': 'deptList',
              'delete-url': 'deptDelete',
              'search-data': d.value,
              data: f.value,
              'after-fetch': _
            },
            null,
            8,
            ['search-data', 'data']
          ),
          n(
            I,
            {
              modelValue: e.visible,
              'onUpdate:modelValue': o[0] || (o[0] = T => (e.visible = T)),
              title: e.title,
              width: '400px',
              'destroy-on-close': ''
            },
            {
              default: E(() => [
                n(
                  k,
                  {
                    ref_key: 'formNameEl',
                    ref: a,
                    type: e.formType,
                    data: b.value,
                    'submit-url': 'deptSave',
                    'edit-url': 'deptEdit',
                    'before-submit': y,
                    'after-submit': v,
                    onBtnClick: g
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
export { D as default }
