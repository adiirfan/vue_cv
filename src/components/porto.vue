<template>
    <div class="container">
        <div class="columns" v-for="(item,key) in portofolio">
            <div class="column">
                <div class="card">
                    <a :href='item.url' target="_blank">
                        <div class="card-content" :style="{backgroundImage: '-webkit-gradient( linear, left top, left bottom, from(rgba(0, 0, 0, 0.55))), url(' + './' + item.background + ')'}">
                                <h3>{{item.nama}}</h3>
                        </div>
                    </a>
                    <div class="card-sub">Menggunakan : {{item.technology}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "porto",
        data(){
            return{
                portofolio:[
                    {
                        nama:'Permaisuri Online Store',
                        url:'http://online.permaisuri.com/en/',
                        isActive:false,
                        technology: "Codeigniter,HTML,css,JS,mysql",
                        background: "assets/porto/permaisuri.png"
                    },
                    {
                        nama:'The Park Solo',
                        url:'http://mall.theparksolo.com/home',
                        isActive:false,
                        technology: "Codeigniter,HTML,css,JS,mysql",
                        background: "assets/porto/theparksolo.png"
                    },
                    {
                        nama:'Aston Hotel International',
                        url:'https://www.astonhotelsinternational.com/id',
                        isActive:false,
                        technology: "Codeigniter,HTML,css,JS,mysql",
                        background: "assets/porto/aston.png"
                    },
                    {
                        nama:'AKR',
                        url:'http://akr.co.id',
                        isActive:false,
                        technology: "Codeigniter,HTML,css,JS,mysql",
                        background: "assets/porto/akr.png"
                    },
                    {
                        nama:'Astra International (Layout)',
                        url:'https://astra.co.id/en/',
                        isActive:false,
                        technology: "HTML,css,JS",
                        background: "assets/porto/astra.png"
                    },
                    {
                        nama:'vMap (Education Cloud)',
                        url:'http://adiirfan.esy.es/vmap/',
                        isActive:false,
                        technology: "Codeigniter,HTML5,css,JS,mysql",
                        background: "assets/porto/vmap.png"
                    },
                    {
                        nama:'Ragnarok Rush',
                        url:'https://rush.gravindo.id/',
                        isActive:false,
                        technology: "Laravel,HTML5,css,JS,mysql",
                        background: "assets/porto/rush.png"
                    },
                    {
                        nama:'Crossfire Next',
                        url:'https://cfnext.lytogame.com/',
                        isActive:false,
                        technology: "Laravel,HTML5,css,JS,mysql",
                        background: "assets/porto/cf.png"
                    },
                    {
                        nama:'RF Online',
                        url:'https://rf.lytogame.com/',
                        isActive:false,
                        technology: "HTML5,css,JS,mysql",
                        background: "assets/porto/rf.png"
                    },
                    {
                        nama:'Mobile Blog',
                        url:'https://consummate-yew-642.firebaseapp.com/',
                        isActive:false,
                        technology: "HTML5,css,JS,mysql,Wordpress(BackEnd)",
                        background: "assets/porto/blogmobile.png"
                    },
                    {
                        nama:'Lyto Internal Portal Video',
                        url:'https://videoproadi.firebaseapp.com/',
                        isActive:false,
                        technology: "HTML5,css,JS,mysql,PHP Native(BackEnd)",
                        background: "assets/porto/video.png"
                    },
                ],
            }
        },
    }
</script>

<style scoped>
    .card{
        background-color: #fff;
        box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
        color: #4a4a4a;
        max-width: 95%;
        position: relative;
        border-radius: 5px;
    }
    .card-content{
        max-height:150px;
        background-size:cover;
        padding:1rem;
        display:flex;
        justify-content: flex-end;
        flex-direction: column;
        color:white;
    }
    .card-sub{
        background-color: transparent;
        padding: 1rem;
    }
</style>