<template>
    <div id="mobile">
        <div v-if="detaile">
            <detaile/>
        </div>
        <div v-else class="container is-mobile">
            <div class="tile is-ancestor">
                <div class="tile is-5 is-vertical is-parent">
                    <div class="tile is-child box center ">
                        <p class="title"></p>
                        <p class="test"> Adi Irfan Safrudin</p>
                    </div>
                    <div class="tile is-child box profile">
                        <h1 class="title test">TENTANG SAYA</h1>
                    </div>
                </div>
                <div class="tile is-parent " id="photo" @click="opendetails">
                    <div class="tile is-child box photoframe ripple" >
                        <!--img src="@/assets/photo.jpg" class="photo" /-->
                    </div>
                </div>
            </div>
            <div class="tile is-ancestor">
                <div class="tile is-parent ">
                    <article class="tile is-child box center">
                        <h3 class="title test">PEKERJAAN</h3>
                        <p class="subtitle test "></p>
                    </article>
                </div>
                <div class="tile is-parent ">
                    <article class="tile is-child box center">
                        <h3 class="title test">PENDIDIKAN</h3>
                        <p class="subtitle test center"></p>
                    </article>
                </div>
                <div class="tile is-parent ">
                    <article class="tile is-child box center">
                        <h3 class="title test">SKILLS</h3>
                    </article>
                </div>
            </div>
            <div class="tile is-ancestor">
                <div class="tile is-3 is-vertical is-parent">
                    <div class="tile is-child box center gifone ">

                    </div>
                    <div class="tile is-child box center">
                        <h1 class="title test underline"><i class="fas fa-map-marker-alt fa-lg"></i></h1>
                    </div>
                </div>
                <div class="tile is-parent" @click="opendetails">
                    <div class="tile is-child box ripple center" >
                        <h1 class="title test">PORTOFOLIO</h1>
                    </div>
                </div>
            </div>
            <div class="tile is-ancestor">
                <div class="tile is-parent" @click="opendetails">
                    <div class="tile is-child box center" >
                        <h1 class="title test">RF ONLINE <br></h1>
                        <p class="subtitle"></p>
                    </div>
                </div>
            </div>
            <div class="tile is-ancestor">
                <div class="tile is-6 is-vertical is-parent">
                    <div class="tile is-child box center">
                        <h1 class="title test">RF ONLINE</h1>
                    </div>
                </div>
                <div class="tile is-parent" @click="opendetails">
                    <div class="tile is-child box ripple center" >
                        <h1 class="title test">PORTOFOLIO</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import detaile from '@/components/details'
    import { mapState } from 'vuex'
    export default {
        name: "Mobile",
        data(){
            return{
                test: '',
                zoom: false,
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
            opendetails(){
                var data = "test123"
                this.$store.commit('opendetails',data)
            },
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
    }
    .box {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
        color: #4a4a4a;
        display: block;
        padding: 0.75rem;
    }
    .photoframe{
        display:flex;

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
</style>