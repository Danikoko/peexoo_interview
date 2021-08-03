<template>
    <div>
                <!-- The Modal -->
<div id="myModal" class="modal">

  <!-- The Close Button -->
  <div class="text-center">
      <b-button class="close" style="font-weight: 100; opacity: 1; float: initial; padding: 10px; border: none; border-radius: 20px; background-color: #5a6268; color: #fff;">Close Image</b-button>
  </div>

  <!-- Modal Content (The Image) -->
  <img class="modal-content" id="img01">

  <!-- Modal Caption (Image Text) -->
  <div id="caption"></div>
</div>
        <b-row class="text-center container-fluid mx-auto pb-3">
            <b-col class="text-left">
                <div @click="display_card()" style="cursor: pointer;" v-if="!show_card">
                    <img src="../assets/7.png" style="width: 12%;" alt="">
                    <a href="#" class="ml-2" style="text-decoration: none; color: #E39400;">Show Card</a>
                </div>
            </b-col>
            <b-col cols="8">
                <b-navbar-nav style="flex-direction: row;" class="ml-auto tab-control">
                    <b-nav-item @click="tab_change(0)" :class="tab == 0 ? 'active ' : ''" class="mr-4" href="#">Portfolio</b-nav-item>
                    <b-nav-item @click="tab_change(1)" :class="tab == 1 ? 'active ' : ''" class="mr-4" href="#">Availability</b-nav-item>
                    <b-nav-item @click="tab_change(2)" :class="tab == 2 ? 'active ' : ''" class="mr-4" href="#">Pricing Package</b-nav-item>
                </b-navbar-nav>
            </b-col>
            <b-col v-if="tab == 0" class="text-right" cols="4" offset="8">
                <span class="mr-2">Sort by Image Category</span>
                <b-dropdown class="filter" id="dropdown-left" text="All">
                    <b-dropdown-item href="#">Food</b-dropdown-item>
                    <b-dropdown-item href="#">Wedding Images</b-dropdown-item>
                    <b-dropdown-item href="#">Portraits</b-dropdown-item>
                    <b-dropdown-item href="#">Model Shots</b-dropdown-item>
                </b-dropdown>
            </b-col>
        </b-row>
        <b-row>
            <b-col v-if="show_card" cols="4" :style="fixed ? 'position: fixed; top: 3%; padding: 0 25px;' : 'position: relative; top: -230px; left: 15px;'">
                <b-card
                class="show-card"
                >
                    <header @click="hide_card()" class="card-header px-0">Hide</header>
                    <div class="text-center">
                        <img id="myImg" src="../assets/8.png" style="width: 35%; cursor: pointer;" alt="">
                        <!-- <img src="../assets/7.png" style="width: 12%;" alt=""> -->
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
                            <b-button style="border: none; border-radius: 20px; background-color: #F29F05; color: #fff;">Book Now</b-button>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
            <b-col :cols="show_card ? '8' : '12'" :offset="fixed ? '4' : ''">
                <b-row v-if="tab == 0" class="text-center container-fluid mx-auto pt-4">
                    <b-col v-for="n in 9" :key="n" cols="4" style="padding-right: 5px; padding-left: 5px; padding-bottom: 10px;">
                        <img class="img-fluid big-0-image" src="../assets/2.jpg" alt="">
                    </b-col>
                </b-row>
                <b-row v-if="tab == 1" :class="show_card ? '' : 'text-center '" class="container-fluid mx-auto pt-4">
                    <b-col cols="12">
                        <b-calendar today-variant="warning" selected-variant="warning" v-model="value" :date-info-fn="dateClass" locale="en"></b-calendar>
                        <div style="height: 100px;">
                            <span style="opacity: 0;">x</span>
                        </div>
                    </b-col>
                </b-row>
                <b-row v-if="tab == 2" class="text-center container-fluid mx-auto pt-4">
                    <b-table @row-clicked="service_chosen = true" v-if="!service_chosen" hover :items="services"></b-table>
                    <b-col cols="12" v-else>
                        <div class="text-center pb-4">
                            <a href="#" style="display: block; float: left; text-decoration: none; color: #E39400;" @click="service_chosen = false">Go back</a>
                            <h5>Beauty Campaign</h5>
                        </div>
                        <!-- <template v-if="tab == 2">
                            <b-col class="text-left" cols="4">
                                <a href="#" style="text-decoration: none; color: #E39400;" @click="service_chosen = false">Go back</a>
                            </b-col>
                            <b-col class="text-center" cols="4">
                                <h5>Beauty Campaign</h5>
                            </b-col>
                        </template> -->
                        <table role="table" aria-busy="false" aria-colcount="5" class="table b-table table-hover">
                            <thead role="rowgroup" class="">
                                <tr role="row" class="">
                                    <th role="columnheader" scope="col" aria-colindex="1" class="">
                                        <div>Package Item</div>
                                    </th>
                                    <th role="columnheader" scope="col" aria-colindex="2" class="">
                                        <div>Quantity</div>
                                    </th>
                                    <th role="columnheader" scope="col" aria-colindex="3" class="">
                                        <div>Price</div>
                                    </th>
                                    <th role="columnheader" scope="col" aria-colindex="4" class="">
                                        <div>Amount</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody role="rowgroup">
                                <tr role="row" class="">
                                    <td aria-colindex="1" role="cell" class="">150 edited images</td>
                                    <td aria-colindex="1" role="cell" class="">1</td>
                                    <td aria-colindex="1" role="cell" class="">0</td>
                                    <td aria-colindex="1" role="cell" class="">0</td>
                                </tr>
                                <tr role="row" class="">
                                    <td aria-colindex="1" role="cell" class="">Pack of balloon</td>
                                    <td aria-colindex="1" role="cell" class="">1</td>
                                    <td aria-colindex="1" role="cell" class="">15000</td>
                                    <td aria-colindex="1" role="cell" class="">150000</td>
                                </tr>
                                <tr style="border-bottom: 1px solid #ccc;" role="row" class="">
                                    <td aria-colindex="1" role="cell" class="">Big Circular Ear rings</td>
                                    <td aria-colindex="1" role="cell" class="">2</td>
                                    <td aria-colindex="1" role="cell" class="">10000</td>
                                    <td aria-colindex="1" role="cell" class="">20000</td>
                                </tr>
                                <tr role="row" class="">
                                    <td aria-colindex="1" role="cell" class=""><i class="far fa-times-square mr-2"></i>Confetti and Flowers</td>
                                    <td aria-colindex="1" role="cell" class="">2</td>
                                    <td aria-colindex="1" role="cell" class="">3,000</td>
                                    <td aria-colindex="1" role="cell" class="">6,000</td>
                                </tr>
                                <tr role="row" class="">
                                    <td aria-colindex="1" role="cell" class=""><small style="font-weight: bold;">Service Charge</small></td>
                                    <td aria-colindex="1" role="cell" class=""></td>
                                    <td aria-colindex="1" role="cell" class=""><small style="font-weight: bold;">N10,000</small></td>
                                    <td aria-colindex="1" role="cell" class=""><small style="font-weight: bold;">N10,000</small></td>
                                </tr>
                                <tr role="row" class="">
                                    <td style="color: #E39400; font-weight: bold;" aria-colindex="1" role="cell" class="">Total</td>
                                    <td aria-colindex="1" role="cell" class=""></td>
                                    <td aria-colindex="1" role="cell" class=""></td>
                                    <td aria-colindex="1" role="cell" class="" style="font-weight: bold;">N10,000</td>
                                </tr>
                                <tr role="row" class="">
                                    <td style="color: #E39400; font-weight: bold;" aria-colindex="1" role="cell" class="">
                                        <b-form-select :style="show_card ? 'width: 60%;' : 'width: 37%;'" v-model="selected" :options="options"></b-form-select>
                                    </td>
                                    <td aria-colindex="1" role="cell" class=""></td>
                                    <td aria-colindex="1" role="cell" class=""></td>
                                    <td aria-colindex="1" role="cell" class="" style="font-weight: bold;">
                                        <b-button style="border: none; border-radius: 20px; background-color: #F29F05; color: #fff;">Select Package</b-button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </b-col>
                    <div :style="!service_chosen ? 'height: 200px;' : 'height: 50px;'">
                        <span style="opacity: 0;">x</span>
                    </div>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>

<script>
// import $ from 'jquery';
export default {
    data() {
        return {
            tab: 0,
            show_card: false,
            fixed: false,
            services: [
                { Title: 'Wedding Classic', Category: 'Wedding', Items: '15', Date_Created: '5th Sep, 2020', Amount: 'N350,000' },
                { Title: 'Beauty Campaign', Category: 'Beauty', Items: '2', Date_Created: '5th Sep, 2020', Amount: 'N45,000' },
                { Title: 'Prewedding Gold', Category: 'Wedding', Items: '2', Date_Created: '5th Sep, 2020', Amount: 'N45,000' },
                { Title: 'Culinary Photography', Category: 'Food', Items: '18', Date_Created: '5th Sep, 2020', Amount: 'N75,000' }
            ],
            options: [
                { value: null, text: 'Select Addons'}
            ],
            selected: null,
            service_chosen: false,
            value: ''
        }
    },
    methods: {
        display_card() {
            let _this = this;
            _this.show_card = true;
            setTimeout(() => {
                // Get the modal
                var modal = document.getElementById("myModal");

                // Get the image and insert it inside the modal - use its "alt" text as a caption
                var img = document.getElementById("myImg");
                var modalImg = document.getElementById("img01");
                var captionText = document.getElementById("caption");
                img.onclick = function(e){
                    e.preventDefault()
                    modal.style.display = "block";
                    modalImg.src = this.src;
                    captionText.innerHTML = this.alt;
                }

                // Get the <span> element that closes the modal
                var span = document.getElementsByClassName("close")[0];

                // When the user clicks on <span> (x), close the modal
                span.onclick = function() {
                    modal.style.display = "none";
                }
            }, 300);
        },
        dateClass(ymd, date) {
            const day = date.getDate()
            return day >= 10 && day <= 20 ? 'table-info' : ''
        },
        tab_change(tab) {
            let _this = this;
            _this.tab = tab;
            _this.service_chosen = 0;
        },
        hide_card() {
            let _this = this;
            _this.show_card = false;
            _this.fixed = false;
        }
    },
    mounted() {
        let _this = this;
        document.addEventListener('scroll', function() {
            if (window.pageYOffset <= 100) {
                // console.log(window.pageYOffset)
                _this.fixed = false;
            } else {
                if (_this.show_card) {
                    _this.fixed = true;
                }
            }
        })
    }
}
</script>

<style scoped>
/* Style the Image Used to Trigger the Modal */
#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

#myImg:hover {opacity: 0.7;}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 60px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content (Image) */
.modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 300px;
    margin-top: 60px;
    border-radius: 100%;
}

/* Caption of Modal Image (Image Text) - Same Width as the Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation - Zoom in the Modal */
.modal-content, #caption {
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {transform:scale(0)}
  to {transform:scale(1)}
}

/* The Close Button */
.close {
  top: 5px;
  color: #f1f1f1;
  font-size: 15px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}
</style>
<style>
.btn-outline-warning {
    color: #f19f27 !important;
}
.btn-outline-warning:hover {
    color: #fff !important;
    background-color: #f19f27 !important;
}
.form-control:focus {
    border-color: #f19f27 !important;
    box-shadow: 0 0 0 0.2rem rgb(241 159 39 / 38%) !important;
}
.table-info .text-dark {
    color: #fff !important;
}
.table-info .text-dark:hover {
    color: #f19f27 !important;
}
.table-info, .table-info > th, .table-info > td {
    background-color: #f19f27 !important;
    border-radius: 100%;
}
/* .table-info, .table-info > th, .table-info > td:hover {
    color: #f19f27 !important;
} */
.table-hover tbody tr:hover {
    color: #212529;
    background-color: #fff !important;
}
.table-hover tbody tr {
    background-color: #fffdf7;
}
.filter ul {
    left: -76px !important;
}
.filter button {
    background: #f29f0526 !important;
    color: #4d4d4d !important;
    border: none;
}
.filter button::after {
    margin-left: 1.4em !important;
}
thead {
    background: #FEF5E6;
}
tr {
    cursor: pointer;
}
td, th {
    border-top: none !important;
}
.table thead th {
    border-bottom: none !important;
}
</style>

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