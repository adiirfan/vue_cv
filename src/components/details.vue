<template>
    <div>
        <div class="columns has-text-centered">
            <div class="column test">
                <h1>Profile</h1>
            </div>
            </div>
            <div class="columns has-text-centered is-mobile">
                <div class="column test">
                    <!--img src="@/assets/photo.jpg" class="photoprofile" /!-->
                </div>
            </div>
            <div class="columns has-text-centered is-mobile">
                <div class="column test profile">
                    <div class="card">
                        <div class="card-content">
                            <h2>Nama</h2>
                            <p>Adi Irfan Safrudin</p>
                            <h2>Lahir</h2>
                            <p><a href="https://bit.ly/2m1gVDP" target="_blank">Malang</a>,30 April 1996</p>
                            <h2>Alamat</h2>
                            <p><a href="http://bit.ly/2QHZQj4" target="_blank">Perumahan bukit pamulang indah blok A3/6
                            Pamulang,Kota Tangerang Selatan
                            </a></p>
                            <h2>Agama</h2>
                            <p>Islam</p>
                        </div>
                    </div>
                </div>
            </div>
        <div class="closebutton center" @click="close">
            <i class="fas fa-times fa-lg "></i>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "detaile",
        data(){
            return{

            }
        },
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
        position:relative;
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
    .closebutton{
        position:fixed;
        bottom:20px;
        left:20px;
        background-color: #ff3860;
        border-radius: 100%;
        padding: 1em;
        color:white;
        width: 19px;
        height:19px;
        display:flex;
        justify-content: center;
        align-content: center;
    }
    .has-text-centered{
        text-align: center;
    }
    .photoprofile{
        width:70%;
    }
    .card{
        background-color: #fff;
        box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
        color: #4a4a4a;
        max-width: 100%;
        position: relative;
        border-radius: 5px;
    }
    .card-content{
        background-color: transparent;
        padding: 1rem;
    }
    .container{
        width:100%;
    }
    .profile{
        padding: 3rem;
    }
</style>