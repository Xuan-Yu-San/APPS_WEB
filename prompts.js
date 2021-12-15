module.exports = [{
    type: "input",
    name: "project_name",
    message: "请输入项目名称",
    default: "web_app"
},{
    type: "checkbox",
    message: "选择颜色:",
    name: "color",
    choices: [
        {
            name: "axios",
            value: "vue-axios"
            checked: true
        },
        {
            name: "element-ui",
            value: "element-ui"
            checked: true
        },
        {
            name: "fontawesome",
            value: "vue-awesome"
        },
        // new inquirer.Separator("--- 分隔符 ---"), // 自定义分隔符
        {
            name: "echarts",
            value: "vue-awesome"
        }
    ]
}];
