<template>
    <div>
        <div class="columns">
            <div class="column">
                <p>Kamu bisa nemuin gw di</p>
            </div>
        </div>
        <div class="columns">
            <div class="column" v-for="(item,key) in social" v-bind:key="key">
                <a :href="item.link" target="_blank">
                    <img :src="item.gambar" style="max-width:100px;"/>
                </a>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <p>Atau Pengen tau lebih detail?bisa contact di</p>
            </div>
        </div>
        <div class="columns">
            <div class="column" v-for="(item,key) in contact" v-bind:key="key">
                <img :src="item.gambar" style="max-width:100px;width:100%"/>
                <p>{{item.details}}</p>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <img src="https://media.giphy.com/media/Cmr1OMJ2FN0B2/giphy.gif" style="max-width:200px;"/>
            </div>
        </div>
    </div>
</template>

<script>
    import 'bulma/css/bulma.min.css'
    export default {
        name: "credit",
        data(){
            return{
                social:[
                    {
                        nama:"facebook",
                        link:'www.facebook.com/adiirfan01',
                        gambar:'./assets/sociallogo/fb.svg'
                    },
                    {
                        nama:"LinkedIn",
                        link:'www.linkedin.com/in/adi-irfan01',
                        gambar:'./assets/sociallogo/in.png'
                    },
                    {
                        nama:"GitHub",
                        link:'www.github.com/adiirfan/',
                        gambar:'./assets/sociallogo/github.png'
                    },
                    {
                        nama:"Instagram",
                        link:'www.instagram.com/irfans01',
                        gambar:'./assets/sociallogo/insta.png'
                    }
                ],
                contact:[
                    {
                        nama:"email",
                        details: "adiirfan01@gmail.com",
                        gambar:'./assets/sociallogo/email.svg'
                    },
                    {
                        nama:"Whatsapp",
                        details: "081388640320",
                        gambar:'./assets/sociallogo/wa.svg'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>