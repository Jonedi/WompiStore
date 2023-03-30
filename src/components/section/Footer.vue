<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { Social, footerLinks } from "@/data/dataComponents";
</script>

<template>
    <!-- -----------------------------------------------
    Start Footer
----------------------------------------------- -->
    <v-footer>
        <v-container>
            <v-row class="py-6 py-sm-7">
                <!-- -----------------------------------------------
                First Column
            ----------------------------------------------- -->
                <v-col cols="12" md="6" class="px-xs-0">
                    <h3 class="text-h3 font-weight-regular font-18">Jon Tmarz</h3>
                    <p class="mt-5 text-muted">Web Developer</p>
                </v-col>
                <!-- -----------------------------------------------
                Second Column
            ----------------------------------------------- -->
                <v-col cols="auto" md="auto" class="px-xs-0">
                    <h4 class="text-h5 font-weight-regular font-18">Social</h4>
                    <div class="social-icons mt-5">
                        <a
                            :href="item.href"
                            v-for="item in Social"
                            :key="item"
                        >
                            <i class="mdi" v-bind:class="item.icon"></i>
                        </a>
                    </div>
                </v-col>
            </v-row>
            <div class="footer-bottom-bar mt-sm-5 mt-0 font-14 ml-sm-0 ml-n3">
                <div class="d-block d-sm-flex align-center">
                    <p class="text-muted mb-sm-0 mb-3">
                        &#169; All Rights Reserved {{ new Date().getFullYear() }} | Designed and developed by Jon Tmarz
                    </p>
                    <div class="ml-auto">
                        <div class="d-sm-flex align-center">
                        <a
                            v-for="item in footerLinks"
                            :key="item"
                            :href="item.href"
                            class="link px-sm-4 ps-0"
                        >{{ item.title }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </v-container>
    </v-footer>
</template>