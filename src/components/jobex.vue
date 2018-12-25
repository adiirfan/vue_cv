<template>
    <div>
        <div class="timeline">
            <div class="container left">
                <div class="content">
                    <h2>Juli 2018 - Now</h2>
                    <h3>Lyto Datarindo Fortuna | Web Developer </h3>
                    <p>Bertanggung Jawab Mendevelop Website berbasis PHP dan ASP serta Memaintenance Website" +
                        "seperti bug fixing,dll</p>
                </div>
            </div>
            <div class="container right">
                <div class="content">
                    <h2>Mei 2017 - Juni 2018</h2>
                    <h3>Lyto Datarindo Fortuna | Web Developer Team Lead</h3>
                    <p>Bertanggung Jawab membangun website Apps bernama Belaundry berbasis PHP,dan juga memanage team web developer agar mencapai target</p>
                </div>
            </div>
            <div class="container left">
                <div class="content">
                    <h2>Februari 2016 - Februari 2017</h2>
                    <h3>Cloudaron Pte Ltd</h3>
                    <p>Bertanggung Jawab membangun website Apps bernama Education Cloud
                        berbasis PHP dan C# untuk aplikasi desktopnya,serta website p2p lending kredito
                        berbasis PHP</p>
                </div>
            </div>
            <div class="container right">
                <div class="content">
                    <h2>Mei 2014 - December 2015</h2>
                    <h3>Aivon Mediatama</h3>
                    <p>Bertanggung Jawab membangun website dengan HTML5,css,js dan PHP
                        serta melakukan maintenance terhadap website client,seperti bug fixing,content update,migrasi server
                        google analytic report,dll</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "jobex"
    }
</script>

<style scoped>
    {
        box-sizing: border-box;
    }
    p{
        color:white
    }
    .timeline {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
    }
    .timeline::after {
        content: '';
        position: absolute;
        width: 6px;
        background-color: lightgray;
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -3px;
    }
    .container {
        padding: 10px 40px;
        position: relative;
        background-color: inherit;
        width: 50%;
    }
    .container::after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        right: -17px;
        background-color: lightgray;
        border: 4px solid #FF9F55;
        top: 15px;
        border-radius: 50%;
        z-index: 1;
    }
    .left {
        left: 0;
    }
    .right {
        left: 50%;
    }

    .right::after {
        left: -16px;
    }
    .content {
        padding: 20px 30px;
        background-color: lightgray;
        position: relative;
        border-radius: 6px;
    }

    @media screen and (max-width: 600px) {
        .timeline::after {
            left: 31px;
        }
        .container {
            width: 75%;
            padding-left: 70px;
            padding-right: 25px;
        }
        .container::before {
            left: 60px;
            border: medium solid lightgray;
            border-width: 10px 10px 10px 0;
            border-color: transparent lightgray transparent transparent;
        }
        .left::after, .right::after {
            left: 15px;
        }
        .right {
            left: 0%;
        }
    }
</style>