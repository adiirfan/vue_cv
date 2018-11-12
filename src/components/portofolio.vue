<template>
    <div class="porto center">
        <v-popover
                offset="16" v-for="(item,key) in portofolio" v-bind:key="key"
        >
            <a class="tooltip-target b3 center" target="_blank">{{item.nama}}</a>

            <template slot="popover">
                <p>
                    <a :href="item.url">Link</a><br>
                    {{item.technology}}
                </p>
            </template>
        </v-popover>
    </div>
</template>

<script>
    export default {
        name: "portofolio",
        data(){
          return{
              portofolio:[
                  {
                      nama:'Permaisuri Online Store',
                      url:'http://online.permaisuri.com/en/',
                      isActive:false,
                      technology: "Codeigniter,HTML,css,JS,mysql"
                  },
                  {
                      nama:'The Park Solo',
                      url:'http://mall.theparksolo.com/home',
                      isActive:false,
                      technology: "Codeigniter,HTML,css,JS,mysql"
                  },
                  {
                      nama:'Aston Hotel International',
                      url:'https://www.astonhotelsinternational.com/id',
                      isActive:false,
                      technology: "Codeigniter,HTML,css,JS,mysql"
                  },
                  {
                      nama:'AKR',
                      url:'http://akr.co.id',
                      isActive:false,
                      technology: "Codeigniter,HTML,css,JS,mysql"
                  },
                  {
                      nama:'Astra International (Layout)',
                      url:'https://astra.co.id/en/',
                      isActive:false,
                      technology: "HTML,css,JS"
                  },
                  {
                      nama:'vMap (Education Cloud)',
                      url:'http://adiirfan.esy.es/vmap/',
                      isActive:false,
                      technology: "Codeigniter,HTML5,css,JS,mysql"
                  },
                  {
                      nama:'Kredito',
                      url:'https://kredito.id',
                      isActive:false,
                      technology: "HTML5,css,JS"
                  },
                  {
                      nama:'Ragnarok Rush',
                      url:'https://rush.gravindo.id/',
                      isActive:false,
                      technology: "Laravel,HTML5,css,JS,mysql"
                  },
                  {
                      nama:'Crossfire Next',
                      url:'https://cfnext.lytogame.com/',
                      isActive:false,
                      technology: "Laravel,HTML5,css,JS,mysql"
                  },
                  {
                      nama:'Mobile Blog',
                      url:'https://consummate-yew-642.firebaseapp.com/',
                      isActive:false,
                      technology: "HTML5,css,JS,mysql,Wordpress(BackEnd)"
                  },
                  {
                      nama:'Lyto Internal Portal Video',
                      url:'https://videoproadi.firebaseapp.com/',
                      isActive:false,
                      technology: "HTML5,css,JS,mysql,PHP Native(BackEnd)"
                  },
              ],
          }
        },
    }
</script>

<style lang="scss">
    .porto p{
        font-size:1.5rem;
    }
    .tooltip {

        &.popover {
             $color: #f9f9f9;

            .popover-inner {
                font-family: 'Coming Soon';
                background: $color;
                color: black;
                padding: 24px;
                border-radius: 5px;
                box-shadow: 0 5px 30px rgba(black, .1);
            }

            .popover-arrow {
                border-color: $color;
            }
            .center{
                text-align: center;
            }
        }
    }
</style>