<template>
    <div>
        <div class="timeline">
            <div class="container left">
                <div class="content">
                    <h2>2015 - Sekarang</h2>
                    <h3>Budi Luhur University - Sistem Informasi </h3>
                </div>
            </div>
            <div class="container right">
                <div class="content">
                    <h2>2011 - 2014</h2>
                    <h3>SMK Telkom Malang - Teknik Komputer Jaringan</h3>
                </div>
            </div>
            <div class="container left">
                <div class="content">
                    <h2>2008 - 2011</h2>
                    <h3>SMPN 1 Tumpang Malang</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "education"
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