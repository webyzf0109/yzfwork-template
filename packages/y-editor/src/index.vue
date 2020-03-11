<!-- yEditor -->
<template>
<div class='yEditor'>
	<div>aa</div>
    <script id="editor" type="text/plain"></script>
</div>
</template>

<script>
	// import "../../../public/utf8-jsp/ueditor.config.js"; //根据自己文件的路径接入
	// import "../../../public/utf8-jsp/ueditor.all.newupload.js";
	// import "../../../public/utf8-jsp/lang/zh-cn/zh-cn.js";
	// import "../../../public/utf8-jsp/ueditor.parse.min.js";
	export default {
		name: "y-editor",
		data() {
			return {
				editor: null,
			};
		},
		props: {
			config: {
				type: Object
			},
		},
		mounted(){
			console.log(UE)
		},
		methods: {
			getdefaultMsg(msg) {
					this.defaultMsg = msg;
					const _this = this;
					this.editor = UE.getEditor("editor", this.config); // 初始化UE
					this.editor.addListener("ready", function() {
						_this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
					});
				// this.$refs.ue.getdefaultMsg(defaultMsg);
			},
			setDisabled(msg) {
				this.defaultMsg = msg;
				const _this = this;
				this.editor = UE.getEditor("editor", this.config); // 初始化UE
				this.editor.addListener("ready", function() {
					_this.editor.setDisabled(_this.defaultMsg); // 确保UE加载完成后，放入内容。
				});
			},
			getUEContent() {
				// 获取内容方法
				return this.editor.getContent();
			},
			destroy() {
				this.editor.destroy();
			}
		},
		destroyed() {
			this.editor.destroy();
		}
	};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类

</style>