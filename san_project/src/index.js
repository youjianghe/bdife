import san from 'san'

const myApp = san.defineComponent({
    template:'<div>hell {{name}}</div>',
    initData:function(){
        return {
            name:'san'
        }
    }
})

var app = new myApp()
app.attach(document.body)