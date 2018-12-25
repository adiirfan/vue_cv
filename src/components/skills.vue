<template>
    <div>
        <div class="container">
            <div class="columns">
                <div class="column" >
                    <button v-for="(item,key) in skills" class="button is-danger" :style="{backgroundColor: background()}" disabled>{{item}}</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "skills",
        data(){
            return{
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
                ],
                skills:[
                    "HTML5",
                    "CSS",
                    "JavaScript",
                    "PHP",
                    "MySql",
                    "Laravel",
                    "Lumen",
                    "CodeIgniter",
                    "git",
                    "SASS",
                    "ES6",
                    "vueJs",
                    "ExpressJs",
                    "MongoDB",
                    "Bootstrap",
                    "Bulma",
                ]
            }
        },
        methods:{
            background(){
                var min = 1;
                var max = 16;
                var randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
                return this.color[randomnumber]
            }
        }
    }
</script>

<style scoped>
    .buttons .button {
        margin-bottom: .5rem;
    }
    .button.is-danger {
        color: #fff;
    }
    .button {
        background-color: #fff;
        border-color: #dbdbdb;
        border-width: 0px;
        color: #363636;
        cursor: pointer;
        margin-left: 5px;
        margin-top: 5px;
        border-radius: 20px;
        justify-content: center;
        padding-bottom: calc(.75em - 1px);
        padding-left: .75em;
        padding-right: .75em;
        padding-top: calc(.75em - 1px);
        text-align: center;
        white-space: nowrap;
    }
</style>