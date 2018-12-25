<template>
    <div id="mobile">
        <detaile v-if="detaile"/>
        <div v-else class="container is-mobile">
            <div class="tile is-ancestor">
                <div class="tile is-5 is-vertical is-parent">
                    <div class="tile is-child box center " :style="{backgroundColor: background()}">
                        <p class="title"></p>
                        <p class="test"> Adi Irfan Safrudin</p>
                    </div>
                    <div class="tile is-child box profile" :style="{backgroundColor: background()}" @click="opendetails('tentang')">
                        <h1 class="title test">TENTANG SAYA</h1>
                    </div>
                </div>
                <div class="tile is-parent " id="photo"  @click="opendetails('datadiri')">
                    <div class="tile is-child box photoframe ripple center" >
                        <h1 class="title test" style="text-align: center">Data Diri</h1>
                    </div>
                </div>
            </div>
            <div class="tile is-ancestor">
                <div class="tile is-parent ">
                    <article class="tile is-child box center" :style="{backgroundColor: background()}" @click="opendetails('job')">
                        <h3 class="title test">PEKERJAAN</h3>
                        <p class="subtitle test "></p>
                    </article>
                </div>
                <div class="tile is-parent ">
                    <article class="tile is-child box center" :style="{backgroundColor: background()}" @click="opendetails('edu')">
                        <h3 class="title test">PENDIDIKAN</h3>
                        <p class="subtitle test center"></p>
                    </article>
                </div>
                <div class="tile is-parent ">
                    <article class="tile is-child box center" :style="{backgroundColor: background()}" @click="opendetails('skills')">
                        <h3 class="title test">SKILLS</h3>
                    </article>
                </div>
            </div>
            <div class="tile is-ancestor">
                <div class="tile is-3 is-vertical is-parent">
                    <div class="tile is-child box center" :style="{backgroundColor: background()}">
                        <h1 class="title test underline"><i class="fab fa-github fa-2x"></i></h1>
                    </div>
                    <div class="tile is-child box center" :style="{backgroundColor: background()}" >
                        <h1 class="title test underline"><i class="fab fa-linkedin fa-2x"></i></h1>
                    </div>
                </div>
                <div class="tile is-parent" @click="opendetails('porto')">
                    <div class="tile is-child box ripple center" :style="{backgroundColor: background()}" >
                        <h1 class="title test">PORTOFOLIO</h1>
                    </div>
                </div>
            </div>
            <div class="tile is-ancestor">
                <div class="tile is-parent" @click="opendetails('porto')">
                    <div class="tile is-child box center rf">
                        <h2 class="title test">RF Online<br></h2>
                        <p class="subtitle"></p>
                    </div>
                </div>
            </div>
            <div class="tile is-ancestor">
                <div class="tile is-6 is-vertical is-parent" @click="opendetails('porto')">
                    <div class="tile is-child box center rush">
                        <h3 class="title test">Ragnarok Rush</h3>
                    </div>
                </div>
                <div class="tile is-parent" @click="opendetails('porto')">
                    <div class="tile is-child box ripple center cf" >
                        <h3 class="title test">CrossFire Next</h3>
                    </div>
                </div>
            </div>
            <div class="tile is-ancestor">
                <div class="tile is-5 is-vertical is-parent" @click="opendetails('porto')">
                    <div class="tile is-child box center vmap">
                        <h2 class="title test">VMap<br></h2>
                        <p class="subtitle"></p>
                    </div>
                    <div class="tile is-child box center mblog" @click="opendetails('porto')">
                        <h2 class="title test">Mobile Blog<br></h2>
                        <p class="subtitle"></p>
                    </div>
                </div>
                <div class="tile is-parent" @click="opendetails('porto')">
                    <div class="tile is-child box center videolib">
                        <h2 class="title test">Video Library<br></h2>
                        <p class="subtitle"></p>
                    </div>
                </div>
            </div>
            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <div class="tile is-child box center akr" @click="opendetails('porto')">
                        <h2 class="title test">AKR<br></h2>
                        <p class="subtitle"></p>
                    </div>
                </div>
                <div class="tile is-parent" @click="opendetails('porto')">
                    <div class="tile is-child box center aston">
                        <h2 class="title test">Aston<br></h2>
                        <p class="subtitle"></p>
                    </div>
                </div>
                <div class="tile is-parent" @click="opendetails('porto')">
                    <div class="tile is-child box center astra">
                        <h2 class="title test">Astra<br></h2>
                        <p class="subtitle"></p>
                    </div>
                </div>
            </div>
            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <div class="tile is-child box" :style="{backgroundColor: background()}">
                        <section class="hero is-primary">
                        <div class="hero-body">
                            <div class="container">
                                <p class="title">
                                    Hidup itu seperti catur,ada hitam ada putih,dan di akhir tujuannya kita bisa menjadi apa saja
                                </p>
                                <p class="subtitle">
                                    - Anonim
                                </p>
                            </div>
                        </div>
                    </section>
                    </div>
                </div>
                <div class="tile is-parent" @click="opendetails('porto')">
                    <div class="tile is-child box center" :style="{backgroundColor: background()}">
                        <a href="./assets/pdf/cv_adi_2018late.pdf" target="_blank" style="text-decoration: none;" >
                            <p style="color:white">Download versi pdfnya disini 🖐</p>
                        </a>
                    </div>

                </div>
            </div>
        </div>
        <div class="float" id="base">
            <a class="button is-link" @click="floatclick"><i class="fas fa-phone fa-lg buttonfloat"></i></a>
        </div>
        <div class="float" id="whatsapp">
            <a class="button is-link" @click="floatclick"><i class="fab fa-whatsapp fa-lg"></i></a>
        </div>
        <div class="float" id="mail">
            <a class="button is-link" @click="floatclick"><i class="fa fa-at fa-lg"></i></a>
        </div>
    </div>
</template>

<script>
    import detaile from '@/components/details'
    import { mapState } from 'vuex'
    import anime from 'animejs'
    export default {
        name: "Mobile",
        data(){
            return{
                test: '',
                zoom: false,
                isopen:false,
                color:[
                     "#f44336",
                    "#e91e63",
                    "#9c27b0",
                    "#673ab7",
                    "#3f51b5",
                    "#2196f3",
                    "#03a9f4",
                    "#00bcd4",
                    "#009688",
                    "#4caf50",
                    "#8bc34a",
                   "#cddc39",
                   "#ffeb3b",
                    "#ffc107",
                    "#ff9800",
                   "#ff7043",
                   "#bcaaa4",
                ]
            }
        },
        computed: mapState([
            'detaile'
        ]),
        mounted(){
            ScrollReveal({ duration: 1000 })
            ScrollReveal().reveal('.tile')

        },
        methods:{
            opendetails(data){
                this.$store.commit('opendetails',data)
            },
            floatclick(){
                if(this.isopen){
                    anime({
                        targets: '.buttonfloat',
                        rotate: 0,
                        duration: 3000,
                    })
                    anime({
                        targets: '#whatsapp',
                        translateX: 0,
                        opacity: [1,0],
                    })
                    anime({
                        targets: '#mail',
                        translateX: 0,
                        opacity: [1,0],
                    })
                    this.isopen = !this.isopen
                }else{
                    anime({
                        targets: '.buttonfloat',
                        rotate: -360,
                        duration: 3000,
                    })
                    anime({
                        targets: '#whatsapp',
                        translateX: -55,
                        opacity: [0,1],
                    })
                    anime({
                        targets: '#mail',
                        opacity: [0,1],
                        translateX: -110,
                    })
                    this.isopen = !this.isopen
                }

            },
            background(){
                var min = 1;
                var max = 16;
                var randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
                return this.color[randomnumber]
            }

        },
        components:{
            detaile
        }
    }
</script>

<style scoped>
    @import url(https://fonts.googleapis.com/css?family=Noto+Sans);
    #mobile{
        font-family: 'Noto Sans', sans-serif;
        font-size:.9rem;
        color:#ffffff;
    }
    .box {
        border-radius: 8px;
        box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
        color: #ffffff;
        display: block;
        padding: 0.75rem;
    }
    .photoframe{
        display:flex;
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.45)),
        url('../assets/photo.jpg');
        background-size:cover;
        vertical-align: center;
        align-items: center;
    }
    .photo{
        width:100%;
    }
    .ripple {
        background-position: center;
        transition: background 0.5s;
    }
    .ripple:hover {
        background: #fff radial-gradient(circle, transparent 1%, #f5f5f5 1%) center/15000%;
    }
    .ripple:active {
        background-color: #fff;
        background-size: 100%;
        transition: background 0s;
    }
    .test {
        -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
        -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
        animation-name: example;
        animation-duration: 1s;
    }

    /* Safari 4.0 - 8.0 */
    @-webkit-keyframes example {
        0%   {left:0px; top:10px;opacity:0;animation-timing-function: linear;}
        100% {left:0px; top:0px;opacity:1;animation-timing-function: linear;}
    }

    /* Standard syntax */
    @keyframes example {
        0%   {left:0px; top:10px;opacity:0;animation-timing-function: linear;}
        100% {left:0px; top:0px;opacity:1;animation-timing-function: linear;}
    }
    .profile{
        display:flex;
        justify-content: center;
        align-items: center;
        text-align: left;
    }
    .center{
        display:flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .underline{
        text-decoration: underline;
    }
    .gifone{
        background-image: url("https://media.giphy.com/media/I0MnQSOgLotk4/giphy.gif");
        background-size:cover;
        min-height:50px;
    }
    .rf{
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.45)),
        url("../assets/porto/rf.png");
        -webkit-background-size: cover;
        background-size: cover;
        color:#ffffff !important;
    }
    .rush{
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.45)),
        url("../assets/porto/rush.png");
        -webkit-background-size: cover;
        background-size: cover;
        color:#ffffff !important;
    }
    .cf{
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.45)),
        url("../assets/porto/cf.png");
        -webkit-background-size: cover;
        background-size: cover;
        color:#ffffff !important;
    }
    .vmap{
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.45)),
        url("../assets/porto/vmap.png");
        -webkit-background-size: cover;
        background-size: cover;
        color:#ffffff !important;
    }
    .mblog{
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.45)),
        url("../assets/porto/blogmobile.png");
        -webkit-background-size: cover;
        background-size: cover;
        color:#ffffff !important;
    }
    .akr{
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.45)),
        url("../assets/porto/akr.png");
        -webkit-background-size: cover;
        background-size: cover;
        background-position: center;
        color:#ffffff !important;
    }
    .aston{
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.45)),
        url("../assets/porto/aston.png");
        -webkit-background-size: cover;
        background-size: cover;
        background-position: center;
        color:#ffffff !important;
    }
    .astra{
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.45)),
        url("../assets/porto/astra.png");
        -webkit-background-size: cover;
        background-size: cover;
        background-position: center;
        color:#ffffff !important;
    }
    .videolib{
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.45)),
        url("../assets/porto/video.png");
        -webkit-background-size: cover;
        background-size: cover;
        background-position: center;
        color:#ffffff !important;
    }
    .float{
        position:fixed;
        bottom:20px;
        right:30px;
        border-radius: 50%;
        padding: 1em;
        background-color:#209cee;
        color:white;
    }
    #base{
        z-index:2;
    }
</style>