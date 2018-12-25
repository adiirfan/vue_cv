<template>
    <div>
        <div v-if="datas === 'datadiri'">
            <div class="columns has-text-centered">
                <div class="column test details-title">
                    <h1>Profile</h1>
                </div>
            </div>
            <div class="columns has-text-centered is-mobile">
                    <div class="column test">
                        <img src="@/assets/photo.jpg" class="photoprofile" />
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
        </div>
        <div v-if="datas === 'tentang'" class="paragraph">
            <div class="columns has-text-centered">
                <div class="column test details-title">
                    <h1>Profile</h1>
                </div>
            </div>
            <div class="columns has-text-centered is-mobile">
                <div class="column test profile">
                    <p>Perkenalkan nama gw Adi, Adi Irfan Safrudin,lahir di hari terakhir bulan april {{umur}} tahun lalu,di
                        kota <a href ="https://id.wikipedia.org/wiki/Kota_Malang" target="_blank">Malang</a>(dibaca:Malang,30 April 1996),lahir sebagai
                        anak terakhir dari 2 bersaudara, gw sekarang hidup dan tinggal di
                        <a href ="https://id.wikipedia.org/wiki/Daerah_Khusus_Ibukota_Jakarta" target="_blank">Ibukota</a>,
                        dengan menjalani profesi sebagai Web Developer, dan juga part time pedagang online,Single,hobby dengan barang
                        barang elektronik,seperti PC,gadget,dll,
                    </p>
                </div>
            </div>
        </div>
        <div v-if="datas === 'job'" class="test">
            <div class="columns has-text-centered">
                <div class="column test details-title">
                    <h1>Pengalaman Pekerjaan</h1>
                </div>
            </div>
           <jobex/>
        </div>
        <div v-if="datas === 'edu'" class="test">
            <div class="columns has-text-centered">
                <div class="column test details-title">
                    <h1>Pendidikan</h1>
                </div>
            </div>
            <education/>
        </div>
        <div v-if="datas === 'skills'" class="test">
            <div class="columns has-text-centered">
                <div class="column test details-title">
                    <h1>Skills</h1>
                </div>
            </div>
            <skills/>
        </div>
        <div v-if="datas === 'porto'" class="test">
            <div class="columns has-text-centered">
                <div class="column test details-title">
                    <h1>Portofolio</h1>
                </div>
            </div>
            <porto/>
        </div>
        <div class="closebutton center" @click="close">
            <i class="fas fa-times fa-lg "></i>
        </div>
    </div>
</template>

<script>
    import jobex from './jobex.vue'
    import education from './education.vue'
    import skills from './skills.vue'
    import porto from './porto.vue'
    import { mapState } from 'vuex'
    export default {
        name: "detaile",
        data(){
            return{
                umur:0
            }
        },
        computed: mapState([
            'detaile',
            'datas'
        ]),
        mounted(){
            var x = new Date().getFullYear();
            var y = new Date('1996-04-30').getFullYear();
            console.log(y);
            this.umur = x-y;
        },
        components:{
            jobex,
            education,
            skills,
            porto
        },
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
    .paragraph{
        color: #000000;
    }
    h1{
        color: #000000;
        margin: 2px 0px;
    }
    .card{
        background-color: #fff;
        box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
        color: #4a4a4a;
        max-width: 95%;
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