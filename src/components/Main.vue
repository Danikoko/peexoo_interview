<template>
    <div>
        <b-row class="text-center container-fluid mx-auto pb-4">
            <b-col class="text-left">
                <div>
                    <img src="../assets/7.png" style="width: 12%;" alt="">
                    <a @click="show_card = true" href="#" class="ml-2" style="text-decoration: none; color: #E39400;">Show Card</a>
                </div>
            </b-col>
            <b-col cols="8">
                <b-navbar-nav style="flex-direction: row;" class="ml-auto tab-control">
                    <b-nav-item @click="tab = 0" :class="tab == 0 ? 'active ' : ''" class="mr-4" href="#">Portfolio</b-nav-item>
                    <b-nav-item @click="tab = 1" :class="tab == 1 ? 'active ' : ''" class="mr-4" href="#">Availability</b-nav-item>
                    <b-nav-item @click="tab = 2" :class="tab == 2 ? 'active ' : ''" class="mr-4" href="#">Pricing Package</b-nav-item>
                </b-navbar-nav>
            </b-col>
        </b-row>
        <b-row>
            <b-col v-if="show_card" cols="4">
                <b-card
                class="show-card"
                >
                    <header @click="show_card = false" class="card-header px-0">Hide</header>
                    <div class="text-center">
                        <img src="../assets/8.png" style="width: 35%;" alt="">
                    </div>
                    <h3 class="card-text text-center mt-2" style="font-weight: bold;">Ekemini Mark</h3>
                    <p class="text-center">I’m a wedding and portrait photographer based in Lagos, Nigeria. 
                        I’ve been shooting weddings since I was in high school (before 
                        I ever had my driver’s license!).
                    </p>
                    <b-row class="pt-1">
                        <b-col>
                            <h5 class="mb-0" style="font-weight: bold">22.1k</h5>
                            <span style="font-size: 85%; color: #4d4d4d;">Total View</span>
                        </b-col>
                        <b-col>
                            <h5 class="mb-0" style="font-weight: bold"><i class="fal fa-heart mr-1"></i>13.1k</h5>
                            <span style="font-size: 85%; color: #4d4d4d;">Total Likes</span>
                        </b-col>
                        <b-col>
                            <h5 class="mb-0" style="font-weight: bold">Sony 92J</h5>
                            <span style="font-size: 85%; color: #4d4d4d;">Camera Lens</span>
                        </b-col>
                    </b-row>
                    <b-row class="mb-1 mt-3" style="font-size: 90%;">
                        <b-col cols="3 pr-0">
                            <span style="opacity: 0.6; color: #4d4d4d">Category</span>
                        </b-col>
                        <b-col cols="9">
                            &#8226; Food &#8226; Portrait &#8226; Wedding &#8226; Model 
                        </b-col>
                        <b-col cols="3">
                            <span style="opacity: 0.6; color: #4d4d4d">Location</span>
                        </b-col>
                        <b-col cols="9">
                            Lagos, Nigeria
                        </b-col>
                    </b-row>
                    <p class="text-center mt-3 pt-3">
                        <i style="color: #F29F05;" class="far fa-share-alt mr-2"></i><a style="color: #000; text-decoration: none;" href="#">www.peexoo.ai/anijohnson</a>
                    </p>
                    <b-row>
                        <b-col cols="5" offset="1" class="px-0">
                            <b-row>
                                <b-col cols="3" offset="2">
                                    <b-button class="fa-iconz fab fa-twitter"></b-button>
                                </b-col>
                                <b-col cols="3">
                                    <b-button class="fa-iconz fab fa-instagram"></b-button>
                                </b-col>
                                <b-col cols="3">
                                    <b-button class="fa-iconz fas fa-envelope"></b-button>
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col cols="5">
                            <b-button style="border: none; border-radius: 20px; background-color: #F29F05; color: #fff;" href="#">Book Now</b-button>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
            <b-col :cols="show_card ? '8' : '12'">
                <b-row class="text-center container-fluid mx-auto pt-4">
                    <b-col v-for="n in 9" :key="n" cols="4" style="padding-right: 5px; padding-left: 5px; padding-bottom: 10px;">
                        <img class="img-fluid big-0-image" src="../assets/2.jpg" alt="">
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tab: 1,
            show_card: false
        }
    }
}
</script>

<style scoped>
.card-header {
    cursor: pointer;
}
.fa-iconz {
    line-height: 1; 
    padding: 10px; 
    border-radius: 20px; 
    background-color: #e4e4e473; 
    color: #000; 
    border: none; 
    cursor: pointer;
}
.show-card .card-body {
    padding-top: 0;
}
.show-card header {
    text-align: right;
    color: #e39400;
    background: #fff;
    border: none;
}
.show-card {
    border: 1px solid #e3940061;
}
.tab-control .nav-item .nav-link {
    color: #4d4d4d !important;
}
.big-0-image {
    border-radius: 10px;
}
</style>