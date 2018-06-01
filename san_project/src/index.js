import san from 'san'

const myApp = san.defineComponent({
    template:'<div><input type="text" value="{{name}}"/>这是一个san组件</div>',
    initData:function(){
        return {
            name:'san'
        }
    }
})
var app = new myApp()
app.attach(document.body)
