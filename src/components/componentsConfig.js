export const basicComponents = [
    {
        type: 'label',
        name: '标题标签',
        icon: 'icon-input',
        options: {
            labelWidth: '100%'
        }
    },
    {
        type: 'input',
        name: '单行文本',
        icon: 'icon-input',
        options: {
            width: '100%',
            defaultValue: '',
            required: false,
            dataType: 'string',
            pattern: '',
            placeholder: '',
            tips: '',
            dataVisible: true,
            tipsVisible: false
        }
    },
    {
        type: 'textarea',
        name: '多行文本',
        icon: 'icon-diy-com-textarea',
        options: {
            width: '100%',
            defaultValue: '',
            required: false,
            disabled: false,
            pattern: '',
            placeholder: ''
        }
    },
    {
        type: 'editor',
        name: '超媒文本',
        icon: 'icon-fuwenbenkuang',
        options: {
            defaultValue: '',
            width: ''
        }
    },
    {
        type: 'number',
        name: '数字类型',
        icon: 'icon-number',
        options: {
            width: '',
            required: false,
            defaultValue: 0,
            min: '',
            max: '',
            step: 1,
            disabled: false,
            controlsPosition: '',
            precision: 0
        }
    },
    {
        type: 'radio',
        name: '单选列表',
        icon: 'icon-radio-active',
        options: {
            inline: false,
            defaultValue: '',
            showLabel: true,
            options: [
                {
                    code: 1,
                    value: '0.0',
                    label: '选项1',
                    description: ''
                },
                {
                    code: 3,
                    value: '0.0',
                    label: '选项2',
                    description: ''
                },
                {
                    code: 5,
                    value: '0.0',
                    label: '选项3',
                    description: ''
                }
            ],
            required: false,
            width: '',
            remote: false,
            remoteOptions: [],
            props: {
                value: 'value',
                label: 'label'
            },
            remoteFunc: ''
        }
    },
    {
        type: 'checkbox',
        name: '多选列表',
        icon: 'icon-check-box',
        options: {
            inline: false,
            defaultValue: [],
            showLabel: true,
            options: [
                {
                    code: 1,
                    value: '0.0',
                    label: '选项1',
                    description: ''
                },
                {
                    code: 3,
                    value: '0.0',
                    label: '选项2',
                    description: ''
                },
                {
                    code: 5,
                    value: '0.0',
                    label: '选项3',
                    description: ''
                }
            ],
            required: false,
            width: '',
            remote: false,
            remoteOptions: [],
            props: {
                value: 'value',
                label: 'label'
            },
            remoteFunc: ''
        }
    },
    {
        type: 'select',
        name: '下拉列表',
        icon: 'icon-select',
        options: {
            defaultValue: '',
            multiple: false,
            disabled: false,
            clearable: false,
            placeholder: '',
            required: false,
            showLabel: false,
            width: '',
            options: [
                {
                    code: 1,
                    value: '0.0',
                    label: '选项1',
                    description: ''
                },
                {
                    code: 3,
                    value: '0.0',
                    label: '选项2',
                    description: ''
                },
                {
                    code: 5,
                    value: '0.0',
                    label: '选项3',
                    description: ''
                }
            ],
            remote: false,
            filterable: false,
            remoteOptions: [],
            props: {
                value: 'value',
                label: 'label'
            },
            remoteFunc: ''
        }
    },
    {
        type: 'time',
        name: '时间类型',
        icon: 'icon-time',
        options: {
            defaultValue: '21:19:56',
            readonly: false,
            disabled: false,
            editable: true,
            clearable: true,
            placeholder: '',
            startPlaceholder: '',
            endPlaceholder: '',
            isRange: false,
            arrowControl: true,
            format: 'HH:mm:ss',
            required: false,
            width: '',
        }
    },
    {
        type: 'date',
        name: '日期时间',
        icon: 'icon-date',
        options: {
            defaultValue: '',
            readonly: false,
            disabled: false,
            editable: true,
            clearable: true,
            placeholder: '',
            startPlaceholder: '',
            endPlaceholder: '',
            type: 'date',
            format: 'yyyy-MM-dd',
            timestamp: false,
            required: false,
            width: '',
        }
    },
    {
        type: 'slider',
        name: '滑块标尺',
        icon: 'icon-slider',
        options: {
            defaultValue: 0,
            disabled: false,
            required: false,
            min: 0,
            max: 100,
            step: 1,
            showInput: false,
            range: false,
            width: ''
        }
    },
    {
        type: 'imgupload',
        name: '图片上传',
        icon: 'icon-tupian',
        options: {
            defaultValue: [],
            size: {
                width: 100,
                height: 100,
            },
            width: '',
            tokenFunc: 'funcGetToken',
            token: '',
            domain: 'http://pfp81ptt6.bkt.clouddn.com/',
            disabled: false,
            length: 8,
            multiple: true
        }
    },
    {
        type: 'fileupload',
        name: '文件上传',
        icon: 'el-icon-document',
        options: {
            defaultValue: [],
            size: {
                width: 100,
                height: 100,
            },
            width: '',
            tokenFunc: 'funcGetToken',
            token: '',
            domain: 'http://pfp81ptt6.bkt.clouddn.com/',
            disabled: false,
            length: 8,
            multiple: true
        }
    }
    // ,
    // {
    //   type: 'switch',
    //   name: '开关',
    //   icon: 'icon-switch',
    //   options: {
    //     defaultValue: false,
    //     required: false,
    //     disabled: false,
    //   }
    // },
    // {
    //     type: 'color',
    //     name: '颜色选择器',
    //     icon: 'icon-color',
    //     options: {
    //         defaultValue: '',
    //         disabled: false,
    //         showAlpha: false,
    //         required: false
    //     }
    // }
    // {
    //   type: 'rate',
    //   name: '评分',
    //   icon: 'icon-icon-test',
    //   options: {
    //       defaultValue: null,
    //       max: 5,
    //       disabled: false,
    //       allowHalf: false,
    //       required: false
    //   }
    // },
]

export const advanceComponents = [
    {
        type: 'blank',
        name: '自定义',
        icon: 'icon-ic',
        options: {
            defaultType: 'String'
        }
    },
    {
        type: 'cascader',
        name: '级联选择器',
        icon: 'icon-jilianxuanze',
        options: {
            defaultValue: [],
            width: '',
            placeholder: '',
            disabled: false,
            clearable: false,
            remote: true,
            remoteOptions: [],
            props: {
                value: 'value',
                label: 'label',
                children: 'children'
            },
            remoteFunc: ''
        }
    },
    {
        type: 'dataFormula',
        name: '逻辑计算',
        icon: 'icon-input',
        options: {
            id: 'F120',
            width: '50%',
            defaultValue: '',
            required: false,
            dataType: 'string',
            pattern: '',
            placeholder: '',
            formula: 'sdfadfadflakdfajlksdfjalf'
        }
    },
]

export const layoutComponents = [
    {
        type: 'grid',
        name: '栅格布局',
        icon: 'icon-grid-',
        columns: [
            {
                span: 12,
                list: []
            },
            {
                span: 12,
                list: []
            }
        ],
        options: {
            gutter: 0,
            justify: 'start',
            align: 'top'
        }
    },
    {
        type: 'pageLogical',
        name: '页面逻辑',
        icon: 'icon-input',
        options: {
            id: 'F120',
            width: '50%',
            defaultValue: '',
            required: false,
            dataType: 'string',
            pattern: '',
            placeholder: '',
            formula: 'sdfadfadflakdfajlksdfjalf'
        }
    }
]
