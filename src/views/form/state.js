module.exports = {
  inLine_FormModel: [
    {
      elemType: 'select',
      label: '公司地址：',
      placeholder: '请选择...',
      prop: 'province',
      colSpan: 12,
      width: '200px',
      rules: ['required'],
      col: 'dataValue',
      colVal: 'dataCode',
      options: []
    },
    {
      elemType: 'select',
      placeholder: '请选择...',
      prop: 'province',
      colSpan: 12,
      rules: ['required'],
      labelWidth: '10px',
      col: 'dataValue',
      colVal: 'dataCode',
      options: []
    }, {
      elemType: 'select',
      placeholder: '请选择...',
      prop: 'province',
      colSpan: 24,
      rules: ['required'],
      labelWidth: '130px',
      col: 'dataValue',
      colVal: 'dataCode',
      options: []
    },
    {
      elemType: 'select',
      label: '有无异常：',
      placeholder: '请选择有无异常',
      defaultValue: '',
      width: '250px',
      rules: ['required'],
      prop: 'isMistake',
      col: 'name',
      colVal: 'value',
      options: [{
        name: '有',
        value: true
      }, {
        name: '无',
        value: false
      }]
    },
    {
      elemType: 'textarea',
      label: '异常信息',
      colSpan: 24,
      rows: 4,
      width: '250px',
      placeholder: '请输入...',
      rules: ['required'],
      prop: 'remark',
      maxlength: 255,
      visible: (formData) => {
        return formData.isMistake
      }
    },
    {
      elemType: 'radio',
      prop: 'houseType',

      width: '100%',
      col: 'id',
      colVal: 'name',
      options: [{
          type: true,
          name: '市价房',
          id: '1'
        },
        {
          type: true,
          name: '折扣房',
          id: '2'
        },
      ],
      label: '房源类别：',
      defaultValue: '',
      activeText: '1',
      inactiveText: '2'
    },
    {
      elemType: 'input',
      placeholder: '请输入价格信息',
      maxlength: 100,
      label: '价格信息：',
      prop: 'address',
      rules: ['required', 'bNumber'],
      labelWidth: '130px',
      width: '250px',
      slotApp: '万',
      slotPre: '售价：$'
    },
    {
      elemType: 'input',
      prop: 'zj',
      label: '注册资金：',

      width: '250px',
      rules: ['required', 'intger'],
      placeholder: '请输入注册资金',
      classes: 'slot',
      slot: '元'
    },
    {
      elemType: 'date',
      prop: 'debt',
      width: '250px',
      rules: ['required'],
      label: '注册日期：',
      placeholder: '请选择注册日期',
    },
    {
      elemType: 'time',
      prop: 'time',
      width: '250px',
      rules: ['required'],
      label: '注册时间：',
      placeholder: '请选择注册时间',
      timeRange: ['09:30:00 - 12:00:00', '14:30:00 - 18:30:00'],
    },
    {
      elemType: 'daterange',
      prop: 'daterange',
      width: '250px',
      rules: ['required'],
      label: '注册时间：',
      placeholder: '请选择具体成交时间',
    },
    {
      label: '自定义：',
      elemType: 'div',
      slot: '自定义文字内容slot',
    },
    {
      label: '上传图片：',
      prop: 'uploadUrl',
      elemType: 'upload',
      rules: ['required'],
      ref:'upload',
      width:100,
      height:100,
      sizeWidth:600,
      sizeHeight:300,
      num:2,
      maxNum:5,
      uploadUrl:'/v1/upload',
    }
  ],
  inLine_FormData: {}
}