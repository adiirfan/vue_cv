<template>
    <div>
        <div class="test">
            <p>
              {{datas}}
            </p>
            <p @click="close">
                X
            </p>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "detaile",
        computed: mapState([
            'detaile',
            'datas'
        ]),
        methods:{
            close(){
                this.$store.commit('closedetails')
            }
        }
    }
</script>

<style scoped>
    .test {
        width: 100px;
        height: 100px;
        position: relative;
        -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
        -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
        animation-name: example;
        animation-duration: 1.2s;
    }

    /* Safari 4.0 - 8.0 */
    @-webkit-keyframes example {
        0%   {background-color:red; left:0px; top:0px;}
        25%  {background-color:yellow; left:200px; top:0px;}
        50%  {background-color:blue; left:200px; top:200px;}
        75%  {background-color:green; left:0px; top:200px;}
        100% {background-color:red; left:0px; top:0px;}
    }

    /* Standard syntax */
    @keyframes example {
        0%   {left:0px; top:10px;opacity:0}
        100% {left:0px; top:0px;opacity:1}
    }
</style>