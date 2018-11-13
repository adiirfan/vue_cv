<template xmlns:width="http://www.w3.org/1999/xhtml">
    <div id="MyFirstSlideshow">
        <div class="eg-slideshow">
            <slide class="local-eg-theme-one" enter='bounceInRight' leave='bounceOutRight'>
                <h2>Halooo Di sana ✌️<br>
                Selamat Datang
                </h2>
                <eg-transition enter='bounceInLeft' leave='bounceOutLeft'>
                    <div>
                        <h3>Petunjuk</h3>
                        <p>Gunakan arah panah ⌨️ atau scroll 🖱️ untuk navigasi </p>
                    </div>
                </eg-transition>
            </slide>
            <slide class="local-eg-theme-two" enter='bounceInRight' leave='bounceOutRight' :steps=2>
                <h3 class="second-title">Tunggu,Tunggu Dulu!!!  🖐️</h3>
                <p class="center">Sebelum pengen tau lebih jauh,bolehkah daku mengetahui nama mu terlebih dahulu<br>
                    <input class="center" v-model='username'/>
                </p>
                <eg-transition enter='bounceInLeft' leave='bounceOutLeft'>
                    <div v-if="step >= 2">
                        <p v-if="username" class="center">
                            Halooo {{username}}, Senang Mengenalmu 😬
                        </p>
                        <p v-else class="center">
                            Memilih Anonim ya? 🤔, okela senang bisa berkenalan denganmu anon👋
                        </p>
                        <div class="center">
                            <img src="https://media.giphy.com/media/l3V0uEmPgKpjZH6ve/giphy.gif" >
                        </div>
                    </div>
                </eg-transition>
            </slide>
            <slide enter='fadeIn' class="local-eg-theme-three" :steps="2">
                <h3 class="center second-title">
                    <img src="https://media.giphy.com/media/QQkyLVLAbQRKU/giphy.gif" />
                </h3>
                <p>Perkenalkan nama gw Adi, Adi Irfan Safrudin,lahir di hari terakhir bulan april {{umur}} tahun lalu,di
                    kota <a href ="https://id.wikipedia.org/wiki/Kota_Malang" target="_blank">Malang</a>(dibaca:Malang,30 April 1996),lahir sebagai
                    anak terakhir dari 2 bersaudara, gw sekarang hidup dan tinggal di
                    <a href ="https://id.wikipedia.org/wiki/Daerah_Khusus_Ibukota_Jakarta" target="_blank">Ibukota</a>,
                    dengan menjalani profesi sebagai Web Developer, dan juga part time pedagang online,Single,hobby dengan barang
                    barang elektronik,seperti PC,gadget,dll,
                </p>
                <eg-modal v-if='step >= 2'>
                    <eg-transition enter="fadeIn" leave="fadeOut">
                        <p class="center">Lanjut untuk cari tau lebih detail tentang gw</p>
                    </eg-transition>
                    <div class="center">
                        <img src="https://media.giphy.com/media/2ZvQhiW2dup20/giphy.gif"/>
                        <p class="center">*ekspresi gw sekarang</p>
                    </div>
                </eg-modal>
            </slide>
            <slide :steps=2 enter='bounceInRight' leave='bounceOutRight'>

                <h3 class="second-title">Profil Diri 👨</h3>
                <div class="columns">
                    <div class="column">
                        <img src="@/assets/photo.jpg" class="photodiri"/>
                    </div>
                    <div class="column">
                        <p>Nama  : Adi Irfan Safrudin</p>
                        <p>Lahir : Malang,30 April 1996 (🐂)</p>
                        <p>Agama : Islam</p>
                    </div>
                </div>
                <div class="columns">
                    <a href="https://www.google.com/maps/dir//-6.3460378,106.7437117/@-6.3460947,106.7434431,20z" target="_blank">
                        Perumahan Bukit Pamulang Indah Blok A3/6 Pamulang Timur,Pamulang,Tangsel</a><br>
                    Tinggi : 179 cm / 5 ft 10 inch<br>
                    Berat  : 83 kg / 182 lbs<br>
                    Golongan Darah : B
                </div>

                <p  v-if='step >= 2'> Next Untuk Pengalaman Pekerjaan </p>
            </slide>
            <slide enter='bounceInUp' leave='bounceOutUp'>
                <h3 class="second-title">Pengalaman Pekerjaan 👨‍💻</h3>
                <div style="overflow-y: scroll;overflow:visible" >
                    <div class="card" v-for="(item,key) in pekerjaan" v-bind:key="key" @click="opendetail(item)">
                        <p class="jobdesc">{{item.perusahaan}} <br> {{item.durasi}}
                        <br>{{item.jobDesc}}
                        </p>
                    </div>
                </div>
            </slide>
            <slide enter='bounceInUp' leave='bounceOutUp' :steps=2>
                <h3 class="second-title">Pengalaman Pekerjaan 👨‍💻</h3>
                <div style="overflow-y: scroll;overflow:visible" >
                    <div class="card" v-for="(item,key) in pekerjaansecond" v-bind:key="key" @click="opendetail(item)">
                        <p class="jobdesc">{{item.perusahaan}} <br> {{item.durasi}}<br>
                            {{item.jobDesc}}
                        </p>
                    </div>
                </div>
                <eg-modal v-if='step >= 2'>
                    <eg-transition enter="fadeIn" leave="fadeOut">
                        <p class="center" style="color:white">Masih Penasaran 🤔? Yuk {{username}},kita lanjuttt </p>
                    </eg-transition>
                    <div class="center">
                        <img src="https://media.giphy.com/media/TvZRJdKk49cKQ/giphy.gif"/>
                    </div>
                </eg-modal>
            </slide>
            <slide enter='bounceInDown' leave='bounceOutDown' :steps=2>
                <h3 class="second-title">Pendidikan 👨‍🎓</h3>
                <div style="overflow-y: scroll;overflow:visible" >
                    <div class="card" v-for="(item,key) in pendidikan" v-bind:key="key" @click="opendetail(item)">
                        <p>{{item.sekolah}} <br> {{item.Tahun}}
                        </p>
                    </div>
                </div>
                <eg-modal v-if='step >= 2'>
                    <eg-transition enter="fadeIn" leave="fadeOut">
                        <p class="center" style="color:white">Masih Penasaran jugaa 😆? kita kasih lihat yang lain dahh </p>
                    </eg-transition>
                    <div class="center">
                        <img src="https://media.giphy.com/media/PUBxelwT57jsQ/giphy.gif"/>
                    </div>
                </eg-modal>
            </slide>
            <slide enter='bounceInUp' leave='bounceOutUp'>
                <h3 class="second-title">Skill 🏃</h3>
                <div class="columns">
                    <div class="column">
                        <h4 class="subtitle">Pemrograman 👨‍💻</h4>
                    </div>
                </div>
                <div class="columns">
                    <div class="column center">
                        <radial-progress-bar :diameter="200"
                                             :completed-steps="8.5"
                                             :total-steps="10">
                            <h4>85%</h4>
                        </radial-progress-bar>
                        <p>HTML</p>
                    </div>
                    <div class="column center">
                        <radial-progress-bar :diameter="200"
                                             :completed-steps="8.3"
                                             :total-steps="10">
                            <h4>83%</h4>
                        </radial-progress-bar>
                        <p>CSS</p>
                    </div>
                    <div class="column center">
                        <radial-progress-bar :diameter="200"
                                             :completed-steps="8.8"
                                             :total-steps="10">
                            <h4>88%</h4>
                        </radial-progress-bar>
                        <p>JavaScript</p>
                    </div>
                    <div class="column center">
                        <radial-progress-bar :diameter="200"
                                             :completed-steps="9"
                                             :total-steps="10">
                            <h4>90%</h4>
                        </radial-progress-bar>
                        <p>PHP</p>
                    </div>
                </div>
                <div class="columns">
                    <div class="column center">

                    </div>
                    <div class="column center">
                        <radial-progress-bar :diameter="200"
                                             :completed-steps="8.3"
                                             :total-steps="10">
                            <h4>83%</h4>
                        </radial-progress-bar>
                        <p>Database</p>
                    </div>
                    <div class="column center">
                        <radial-progress-bar :diameter="200"
                                             :completed-steps="8.8"
                                             :total-steps="10">
                            <h4>88%</h4>
                        </radial-progress-bar>
                        <p>Dev Tool</p>
                    </div>
                    <div class="column center">

                    </div>
                </div>
            </slide>
            <slide enter='bounceInUp' leave='bounceOutRight'>
                <h3 class="second-title">Skill  🏃</h3>
                <div class="columns">
                    <div class="column">
                        <h4 class="subtitle">Pemrograman 👨‍💻</h4>
                        <p>HTML : HTML5</p>
                        <p>CSS : CSS3, SCSS</p>
                        <p>JS : Vanilla JS, Vue JS, Axios, Express JS,Nuxt JS,dll</p>
                        <p>PHP : PHP 7.1, native, framework CI, laravel,dll </p>
                        <p>DB : MySQL, MongoDB </p>
                        <p>Dev Tool : npm, yarn, artisan, git,dll </p>
                    </div>
                </div>
            </slide>
            <slide enter='bounceInRight' leave='bounceOutRight'>
                <h3 class="second-title">Skill  🏃</h3>
                <div class="columns">
                    <div class="column">
                        <h4 class="subtitle">Bahasa 🙋‍️</h4>
                        <p>Bahasa,English,Bahasa Jawa</p>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <h4 class="subtitle">Personal Skill 🕵️</h4>
                    </div>
                </div>
                <div class="columns">
                    <div class="column center">
                        <radial-progress-bar :diameter="200"
                                                 :completed-steps="9"
                                                 :total-steps="10">
                                <h4>90%</h4>
                        </radial-progress-bar>
                        <p>Problem Solve</p>
                        </div>
                        <div class="column center">
                            <radial-progress-bar :diameter="200"
                                                 :completed-steps="8"
                                                 :total-steps="10">
                                <h4>80%</h4>
                            </radial-progress-bar>
                            <p>Team Work</p>
                        </div>
                        <div class="column center">
                            <radial-progress-bar :diameter="200"
                                                 :completed-steps="8.7"
                                                 :total-steps="10">
                                <h4>87%</h4>
                            </radial-progress-bar>
                            <p>Belajar</p>
                        </div>
                        <div class="column center">
                            <radial-progress-bar :diameter="200"
                                                 :completed-steps="8.5"
                                                 :total-steps="10">
                                <h4>85%</h4>
                            </radial-progress-bar>
                            <p>Innovasi</p>
                        </div>
                    </div>
            </slide>
            <slide enter='bounceInLeft' leave='bounceOutLeft'>
                <h3 class="second-title">Skill  🏃</h3>
                <div class="columns">
                    <div class="column">
                    <h4 class="subtitle">Hobby ⛹️</h4>
                    <p>Game</p>
                    <p>Rakit PC</p>
                    <p>Basket</p>
                    <p>dan lain lain</p>
                    </div>
                </div>
            </slide>
            <slide enter='bounceInRight' leave='bounceOutRight' :steps=2>
                <h3 class="second-title">Tunggu Sebentar!!  🖐️</h3>
                <div class="columns">
                    <p class="subtitle">Kita rehat sebentar dengan gambar" imut ini</p>
                </div>
                <div class="columns" >
                    <div class="column" v-for="item in imut" style="margin-bottom:350px;">
                            <img :src="item.url" class="imut">
                    </div>
                </div>
                <eg-transition enter='bounceInLeft' leave='bounceOutLeft'>
                    <p  v-if='step >= 2'> Lanjut? Lets Go  🏃 </p>
                </eg-transition>
            </slide>
            <slide enter='bounceInLeft' leave='bounceOutRight' :steps=2 :mouseNavigation='false'>
                <h3 class="second-title">Portofolio  🖐️</h3>
                <eg-transition enter='bounceInLeft' leave='bounceOutLeft'>
                    <portofolio  v-if='step >= 2'/>
                </eg-transition>
            </slide>
            <slide enter='bounceInRight' leave='bounceOutLeft'  :mouseNavigation='false'>
                <h3 class="second-title">Katakan Haloo 🖐️</h3>
                <credit/>
            </slide>
            <slide enter='bounceInRight' leave='bounceOutLeft' :mouseNavigation='false'>
                <h4 class="second-title center">Sekian Dulu perkenalannya {{username}} 🖐️</h4>
                <end/>
            </slide>
        </div>
    </div>
</template>

<script>
    import eagle from 'eagle.js'
    import RadialProgressBar from 'vue-radial-progress'
    import portofolio from '@/components/portofolio'
    import credit from '@/components/credit'
    import end from '@/components/end'
    export default {
        mixins: [ eagle.slideshow ],
        infos: {
            // These infos appear on the home page, below the slideshow's thumbnail
            title: 'Your First Slideshow',
            description: 'A boilerplate to get you started',
            path: 'your-first-slideshow'
        },
        data(){
            return{
                username : "Alle",
                umur : "",
                detail: false,
                selecteddetail:"",
                pekerjaan: [
                    {
                        perusahaan:"Telkomsel (Internship)",
                        durasi: "September 2013 - December 2013",
                        jobDesc: "Bertanggung Jawab melayani permintaan data dari client serta membangun website dashboard" +
                            "untuk menampilkan data dan mengenerate report dari codeigniter"
                    },
                    {
                        perusahaan:"Aivon Mediatama (Web Developer)",
                        durasi: "Mei 2014 - December 2015",
                        jobDesc: "Bertanggung Jawab membangun website dengan HTML5,css,js dan PHP" +
                            "serta melakukan maintenance terhadap website client,seperti bug fixing,content update,migrasi server" +
                            "google analytic report,dll"
                    },
                    {
                        perusahaan:"Cloudaron Pte Ltd (Software Engineer)",
                        durasi: "Februari 2016 - Februari 2017",
                        jobDesc: "Bertanggung Jawab membangun website Apps bernama Education Cloud" +
                            "berbasis PHP dan C# untuk aplikasi desktopnya,serta website p2p lending kredito" +
                            "berbasis PHP"

                    },
                ],
                pekerjaansecond:[
                    {
                        perusahaan:"Akabetech (Web Developer Team Lead)",
                        durasi: "May 2017 - Juni 2018",
                        jobDesc: "Bertanggung Jawab membangun website Apps bernama Belaundry " +
                            "berbasis PHP,dan juga memanage team web developer agar mencapai target"

                    },
                    {
                        perusahaan:"Lyto Datarindo Fortuna (Web Developer)",
                        durasi: "Juni 2018 - Sekarang",
                        jobDesc: "Bertanggung Jawab Mendevelop Website berbasis PHP dan ASP serta Memaintenance Website" +
                            "seperti bug fixing,dll"

                    },
                ],
                pendidikan:[
                    {
                        sekolah:"Universitas Budi Luhur",
                        Tahun : "2015 - Sekarang",
                    },
                    {
                        sekolah:"SMK Telkom Malang",
                        Tahun : "2011-2014",
                    },
                    {
                        sekolah:"SMPN 1 Tumpang Malang",
                        Tahun : "2008-2011",
                    }
                ],
                imut:[
                    {
                        url:'https://media.giphy.com/media/WYEWpk4lRPDq0/giphy.gif',
                    },
                    {
                        url:'https://media.giphy.com/media/IkpnJSRmNdCSI/giphy.gif',
                    },
                    {
                        url:'https://media.giphy.com/media/Q56ZI04r6CakM/giphy.gif',
                    },
                    {
                        url:'https://media.giphy.com/media/X3Yj4XXXieKYM/giphy.gif',
                    },


                ]
            }
        },
        components: {
            RadialProgressBar,
            portofolio,
            credit,
            end
        },
        mounted(){
            var x = new Date().getFullYear();
            var y = new Date('1996-04-30').getFullYear();
            console.log(y);
            this.umur = x-y;
        },
        methods:{
            opendetail(data){
                this.detail = true
                this.selecteddetail = data.jobDesc
            },
        }

    }
</script>

<style lang='scss'>
    @import url(https://fonts.googleapis.com/css?family=Coming+Soon);
    #MyFirstSlideshow{
        .eg-slideshow{
            font-family: 'Coming Soon';
            background-color: white;
            right: 0px;
            top: 0px;
            .eg-slide{
                .eg-slide-content{
                    width: 25em;
                    max-width: 80%;
                    margin: 0 auto;
                }
            }
        }
        .eg-slide-content{
            width: 25em;
            max-width: 80%;
            margin: 0 auto;
        }
        .local-eg-theme-one {
            background-color: #7199c9;
            background-image: none;
            color: #fff;
        }
        .local-eg-theme-two {
            background-color: #424e75;
            background-image: none;
            color: #fff;
        }
        .local-eg-theme-three {
            background-color: #a65959;
            background-image: none;
            color: #fff;
        }
        .second-title{
            margin-top: 30px;
        }
        .subtitle{
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .eg-modal{
            background-color: rgba(0,0,0,.9);
        }
        .photodiri{
            max-width:300px;
        }
        .card{
            border: 2px black solid;
            border-radius: 8px;
            margin-bottom:2rem;
            padding:1rem;
        }
        .jobdesc{
            font-size:1.3rem;
        }
        .subs{
            font-size:1.3rem;
        }
        .column{
            width:25%;
            float:left;
            text-align: center;
            min-height: 10px;
        }
        .columns{
            width:100%;
        }
        .slice{
            position:relative !important;
        }
        .imut{
            width:100%;
        }
        @media only screen and (max-width: 700px) {
            .column{
                width:100%;
                float:left;
                text-align: center;
                min-height: 10px;
            }
        }
    }

</style>