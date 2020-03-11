const demoCode = {
    mainCode:`/**编辑器 */
    import VueHtml5Editor from "vue-html5-editor";
    let opt = {
      // 全局组件名称，使用new VueHtml5Editor(options)时该选项无效
      // global component name
      name: "vue-html5-editor",
      // 是否显示模块名称，开启的话会在工具栏的图标后台直接显示名称
      // if set true,will append module name to toolbar after icon
      showModuleName: true,
      // 自定义各个图标的class，默认使用的是font-awesome提供的图标
      // custom icon class of built-in modules,default using font-awesome
      icons: {
        text: "fa fa-pencil",
        color: "fa fa-paint-brush",
        font: "fa fa-font",
        align: "fa fa-align-justify",
        list: "fa fa-list",
        link: "fa fa-chain",
        unlink: "fa fa-chain-broken",
        tabulation: "fa fa-table",
        image: "fa fa-file-image-o",
        hr: "fa fa-minus",
        eraser: "fa fa-eraser",
        undo: "fa-undo fa",
        "full-screen": "fa fa-arrows-alt",
        info: "fa fa-info"
      },
      // 配置图片模块
      // config image module
      image: {
        // 文件最大体积，单位字节  max file size
        sizeLimit: 2 * 1024 * 1024,
        // 上传参数,默认把图片转为base64而不上传
        // upload config,default null and convert image to base64
        upload: {
          url: process.env.VUE_APP_editorUploadUrl,
          headers: {
            authorization: "Bearer " + localStorage.getItem('token'),
          },
          params: {},
          fieldName: "file"
        },
        // 压缩参数,默认使用localResizeIMG进行压缩,设置为null禁止压缩
        // compression config,default resize image by localResizeIMG (https://github.com/think2011/localResizeIMG)
        // set null to disable compression
        // compress: {
        //   width: 600,
        //   height: 600,
        //   quality: 80
        // },
        compress: null,
        // 响应数据处理,最终返回图片链接
        // handle response data，return image url
        uploadHandler(responseText) {
          var json = JSON.parse(responseText);
          if (json.code == 200) {
            return json.data.filePath || json.data.path;
          } else if (json.imgurl) {
            return json.imgurl;
          } else if (json.code == 10) {
            ElementUI.Message({
              message: "上传错误,请重新上传",
              type: "warning"
            });
          }
        },
        uploadHandlerError(code) {
          if (code == 401) {
            store.state.isLogin = false;
          }
        }
      },
      // 语言，内建的有英文（en-us）和中文（zh-cn）
      //default en-us, en-us and zh-cn are built-in
      language: "zh-cn",
      // 自定义语言
      i18n: {
        //specify your language here
        "zh-cn": {
          align: "对齐方式",
          image: "图片",
          list: "列表",
          link: "链接",
          unlink: "去除链接",
          table: "表格",
          font: "文字",
          "full screen": "全屏",
          text: "排版",
          eraser: "格式清除",
          info: "关于",
          color: "颜色",
          "please enter a url": "请输入地址",
          "create link": "创建链接",
          bold: "加粗",
          italic: "倾斜",
          underline: "下划线",
          "strike through": "删除线",
          subscript: "上标",
          superscript: "下标",
          heading: "标题",
          "font name": "字体",
          "font size": "文字大小",
          "left justify": "左对齐",
          "center justify": "居中",
          "right justify": "右对齐",
          "ordered list": "有序列表",
          "unordered list": "无序列表",
          "fore color": "前景色",
          "background color": "背景色",
          "row count": "行数",
          "column count": "列数",
          save: "确定",
          upload: "上传",
          progress: "进度",
          unknown: "未知",
          "please wait": "请稍等",
          error: "错误",
          abort: "中断",
          reset: "重置"
        }
      },
      // 隐藏不想要显示出来的模块
      // the modules you don't want
      hiddenModules: [],
      // 自定义要显示的模块，并控制顺序
      // keep only the modules you want and customize the order.
      // can be used with hiddenModules together
      visibleModules: [
        /*"text",*/
        /*"color",*/
        "font",
        "align",
        /*"list",*/
        /*"link",*/
        /*"unlink",*/
        /*"tabulation",*/
        "image",
        /*"hr",*/
        /*"eraser",*/
        "undo"
        /*"full-screen",*/
        /*"info",*/
      ],
      // 扩展模块，具体可以参考examples或查看源码
      // extended modules
      modules: {
        //omit,reference to source code of build-in modules
      }
    };
    Vue.use(VueHtml5Editor, opt);`,
    code: `<y-vueEditor :content="content" :width="500" :height="300"  @updateData="updateData"></y-vueEditor>
      
        //update事件回调示例
        updateData(){
        let c1 = e.replace(/<img width="100%"/g, "<img");
        let c2 = c1.replace(/<img/g, '<img width="100%"');
        let str = c2.replace(/crossorigin="anonymous"/g, "");
        console.log(str)//str即为最终数据
        }`,
    demo_tableData: [
        {
            name: 'content',
            description: '编辑器渲染的内容',
            type: 'String',
            value: '无',
            isTrue: 'true',
        },
        {
            name: 'width',
            description: '编辑器宽度',
            type: 'Number',
            value: '默认为父元素的100%',
            isTrue: 'false',
        },
        {
            name: 'height',
            description: '编辑器高度',
            type: 'Number',
            value: '默认为父元素的100%',
            isTrue: 'false',
        },
        {
            name: 'zIndex',
            description: '编辑器z-index',
            type: 'Number',
            value: '默认:100',
            isTrue: 'false',
        },
        {
            name: 'updateData',
            description: '动态监听编辑器内容变化的事件',
            type: 'Function',
            value: '默认支持微信公众号文章(须在此函数内添加正则,如上图)',
            isTrue: 'true',
        },
    ],
    demo_tableModel: [
        {
            label: "参数",
            prop: "name",
            minWidth: 100,
            align: "left"
        },
        {
            label: "说明",
            prop: "description",
            minWidth: 150,
            align: "left"
        },
        {
            label: "类型",
            prop: "type",
            minWidth: 150,
            align: "left"
        },
        {
            label: "可选值",
            prop: "value",
            minWidth: 200,
            align: "left"
        },
        {
            label: "是否必填",
            prop: "isTrue",
            minWidth: 60,
            align: "left"
        }
    ]
}

export default demoCode;