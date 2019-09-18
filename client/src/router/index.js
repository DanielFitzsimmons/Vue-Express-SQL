import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Browse from '@/components/Browse'
import CreateInstructionGuide from '@/components/CreateInstructionGuide'
import ViewInstructionGuide from '@/components/ViewInstructionGuide'
import EditInstructionGuide from '@/components/EditInstructionGuide'

Vue.use(Router)
export default new Router({
    routes : [
        {
            path:'/',
            name:'root',
            component: HelloWorld
        },
        {
            path:'/register',
            name:'register',
            component: Register
        },
        {
            path:'/login',
            name:'login',
            component: Login
        },
        {
            path:'/browse',
            name:'browse',
            component: Browse
        },
        {
            path:'/browse/create',
            name:'createinstructionguide',
            component: CreateInstructionGuide
        },
        {
            path: '/browse/:instructionGuideId',
            name: 'viewinstructionguide',
            component: ViewInstructionGuide
        },
        {
            path: '/browse/:instructionGuideId/edit',
            name: 'editinstructionguide',
            component: EditInstructionGuide
        }
    ]
})
