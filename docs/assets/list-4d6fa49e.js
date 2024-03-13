import {
  d as f,
  k as y,
  l as o,
  r as s,
  o as _,
  c as b,
  i as a,
  w as n,
  m as g,
  t as r
} from './index-62047d8c.js'
const B = f({
  __name: 'list',
  setup(k) {
    const l = y(),
      c = o(),
      i = o({
        list: [
          {
            type: 'input',
            control: { modelValue: '', placeholder: '请输入流程名称' },
            config: {},
            name: 'name',
            formItem: { label: '流程名称' }
          },
          {
            type: 'select',
            control: { modelValue: '', appendToBody: !0 },
            options: [],
            config: { optionsType: 2, optionsFun: 'sys-flow' },
            name: 'flow',
            formItem: { label: '流程分类' }
          }
        ],
        form: { size: 'default' },
        config: { submitCancel: !0 }
      }),
      p = o({
        columns: [
          { label: '多选', type: 'selection' },
          { label: '流程名称', prop: 'name' },
          { label: '流程表单', prop: 'sourceName' },
          { label: '分类', prop: 'category', config: { dictKey: 'sys-flow' } },
          {
            label: '状态',
            prop: 'status',
            config: {
              dictKey: 'sys-status',
              tagList: { 0: 'info', 1: 'success' }
            }
          },
          { label: '操作', prop: '__control' }
        ],
        config: {},
        controlBtn: [
          {
            label: '新增流程',
            type: 'primary',
            size: 'small',
            icon: 'plus',
            click: () => {
              l.push({ path: '/design/flow' })
            }
          },
          {
            label: '批量删除',
            key: 'del',
            type: 'danger',
            size: 'small',
            icon: 'delete'
          }
        ],
        operateBtn: [
          {
            label: '编辑',
            click: e => {
              l.push({ path: '/design/flow', query: { id: e.id } })
            }
          },
          { label: '删除', key: 'del' }
        ]
      }),
      u = e => ((e.type = 3), e)
    return (e, h) => {
      const d = s('router-link'),
        m = s('ak-list')
      return (
        _(),
        b('div', null, [
          a(
            m,
            {
              ref_key: 'tableListEl',
              ref: c,
              'request-url': 'designList',
              'delete-url': 'designDelete',
              'search-data': i.value,
              data: p.value,
              'before-fetch': u
            },
            {
              sourceName: n(({ row: t }) => [
                a(
                  d,
                  {
                    to: `/design/form?id=${t.source}&redirect=/design/flow/list`
                  },
                  {
                    default: n(() => [
                      g(r(t.sourceName) + '/' + r(t.source), 1)
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
          )
        ])
      )
    }
  }
})
export { B as default }
