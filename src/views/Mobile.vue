<template>
    <div id="mobile">
        <div v-if="details">
            <detaile/>
        </div>
        <div v-else class="container is-mobile">
            <div class="tile is-ancestor">
                <div class="tile is-5 is-vertical is-parent">
                    <div class="tile is-child box">
                        <p class="title"></p>
                        <p> {{test}}</p>
                    </div>
                </div>
                <div class="tile is-parent " id="photo">
                    <div class="tile is-child box photoframe ripple" >
                        <!--img src="@/assets/photo.jpg" class="photo" /-->
                    </div>
                </div>
            </div>
            <div class="tile is-ancestor">
                <div class="tile is-parent ">
                    <article class="tile is-child box">
                        <p class="title">Main column</p>
                        <p class="subtitle">With some content</p>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import anime from 'animejs'
    import detaile from '@/components/details'
    export default {
        name: "Mobile",
        data(){
            return{
                test: '',
                zoom: false,
                details:true,
            }
        },
        mounted(){
            var myElement = document.getElementById('photo');
            const hammer = new Hammer(myElement)
            hammer.on('tap', (ev) => {
                this.anime()
            })
            hammer.on('swipeleft', () => {
                this.test = 'swipe left'
            })
        },
        methods:{
            anime(){
                anime({
                    targets: '#photo .tile',
                    scale: {
                        value: 2,
                        duration: 800,
                        delay: 100,
                        easing: 'easeInOutQuart'
                    },
                    delay: 250 // All properties except 'scale' inherit 250ms delay
                });
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
    }
    .box {
        background-color: #fff;
        border-radius: 3px;
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
</style>