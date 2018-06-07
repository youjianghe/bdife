import san from 'san'
import {router} from 'san-router'
import list from './components/list'

const myApp = san.defineComponent({
    template:`<div>
        
        <router-link to="/user">用户信息</router-link>    
    </div>`,
    initData:function(){
        return {
            name:'book'
        }
    },
    components:{
        'dis':list
    }
})

router.add({
    rule: '/dis',
    Component: list
});
router.start();

var app = new myApp()
app.attach(document.body)