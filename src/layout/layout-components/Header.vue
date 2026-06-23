<template>
    <header class="w-full border-b border-light-teal">
      <div class="mx-auto hidden lg:flex flex-col items-center py-4 px-2 border-b border-b-zinc-100">
    <div class="flex flex-col w-full lg:w-[1480px] justify-between lg:flex-row lg:items-center lg:space-x-2">
        <div class="flex flex-row lg:space-x-2 lg:divide-x divide-light-teal">
            <div>
                <a href="tel:+1 314 500 2424" class="flex items-center gap-2">
                    <img src="@/assets/icons/phone.png" class="w-4 h-4">
                    <p class="text-[#636468]">+1 (314) 500 2424</p>
                </a>
            </div>
            <div class="space-y-2 lg:pl-2">
              <div class="flex items-center gap-4 lg:pl-2 text-sm text-[#636468]">
                    <img src="@/assets/icons/map.png" class="w-4 h-4">
                    <p>10004 Kennerly Road, Suite 370A Saint Louis, MO 63128</p>
                    
                    <img src="@/assets/icons/map.png" class="w-4 h-4">
                    <p>Executive Building, 16216 Baxter Road, Suite 110, Chesterfield, MO 63017</p>
                </div>
            </div>
        </div>
        <div class="flex items-center gap-2 lg:pl-2">
            <div class="bg-dark-teal hover:bg-light-teal text-white font-manrope text-[12px] font-bold py-2.5 px-5 rounded-[4px] h-[40px]">
                <router-link to="/BariatricSurgeryStLouis/Weight-Loss-Surgery-Cost">Insurance and Self Pay Options</router-link>
            </div>
        </div>
    </div>
</div>

      <div class="max-w-screen-2xl mx-auto">
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
          <div class="flex flex-wrap items-center justify-between mx-auto p-4">
            <router-link to="/" class="lg:w-fit">
              <img src="@/assets/cbs-logo.svg"
                   class="w-40 md:w-48 lg:w-56 h-auto md:mx-auto lg:mx-0 md:mb-4 lg:mb-0"
                   alt="Chester logo" />
            </router-link>
  
            <button data-collapse-toggle="navbar-default" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-dark-teal rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-light-teal"
                    aria-controls="navbar-default" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
  
            <div class="hidden w-full lg:block lg:w-auto md:mx-auto lg:mx-0" id="navbar-default">
              <ul class="font-medium flex flex-col lg:p-0 mt-4 border divide-y divide-zinc-400 lg:divide-y-0 border-zinc-400 rounded-lg bg-gray-50 lg:flex-row lg:space-x-2 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white">
                <li>
                  <router-link to="/" class="block py-3 px-3 font-manrope font-extrabold hover:text-white md:hover:text-dark-teal md:hover:bg-transparent hover:bg-dark-teal rounded-t-lg"
                               :class="getRoute === '/' ? 'text-dark-teal' : 'text-[#211C1A]'" aria-current="page">Home
                  </router-link>
                </li>
                <li>
                  <router-link to="/chesterfield-weight-loss-surgeon/meet-the-doctor" class="block py-3 px-3 font-manrope text-[#211C1A] font-extrabold hover:text-white md:hover:text-dark-teal md:hover:bg-transparent hover:bg-dark-teal"
                               :class="getRoute === '/chesterfield-weight-loss-surgeon/meet-the-doctor' ? 'text-dark-teal' : 'text-[#211C1A]'" aria-current="page">Meet the Surgeon
                  </router-link>
                </li>
                <li>
                  <router-link to="/weight-loss-surgery/treatments" class="block py-3 px-3 font-manrope text-[#211C1A] font-extrabold hover:text-white md:hover:text-dark-teal md:hover:bg-transparent hover:bg-dark-teal"
                               :class="getRoute === '/weight-loss-surgery/treatments' ? 'text-dark-teal' : 'text-[#211C1A]'" aria-current="page">Services
                  </router-link>
                </li>
                <!-- <li>
                  <router-link to="/bariatricSurgeryStLouis/BMI-calculator" class="block py-3 px-1 font-manrope text-[#211C1A] font-extrabold hover:text-white md:hover:text-dark-teal md:hover:bg-transparent hover:bg-dark-teal"
                               :class="getRoute === '/bariatricSurgeryStLouis/BMI-calculator' ? 'text-dark-teal' : 'text-[#211C1A]'" aria-current="page">Am I a Candidate ?
                  </router-link>
                </li> -->
                <li>
                  <router-link to="/BariatricSurgeryStLouis/weightlossclinic" class="block py-3 px-3 font-manrope text-[#211C1A] font-extrabold hover:text-white md:hover:text-dark-teal md:hover:bg-transparent hover:bg-dark-teal"
                               :class="getRoute === '/BariatricSurgeryStLouis/weightlossclinic' ? 'text-dark-teal' : 'text-[#211C1A]'" aria-current="page">Success Stories
                  </router-link>
                </li>
                <li>
                  <a href="https://www.cbsurgery.com/blog/" class="block py-3 px-3 font-manrope text-[#211C1A] font-extrabold hover:text-white md:hover:text-dark-teal md:hover:bg-transparent hover:bg-dark-teal"
                     aria-current="page">Blogs
                  </a>
                </li>
                <li>
                  <a href="https://www.cbsurgery.com/media/" class="block py-3 px-3 font-manrope text-[#211C1A] font-extrabold hover:text-white md:hover:text-dark-teal md:hover:bg-transparent hover:bg-dark-teal"
                     aria-current="page">Media
                  </a>
                </li>
                <li>
                  <router-link to="/contact-us" class="block py-3 px-3 font-manrope text-[#211C1A] font-extrabold hover:text-white md:hover:text-dark-teal md:hover:bg-transparent hover:bg-dark-teal rounded-b-lg"
                               :class="getRoute === '/contact-us' ? 'text-dark-teal' : 'text-[#211C1A]'" aria-current="page">Contact Us
                  </router-link>
                </li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                        class="flex items-center justify-between py-3 px-3 font-manrope text-[#211C1A] font-extrabold hover:text-white md:hover:text-dark-teal md:hover:bg-transparent hover:bg-dark-teal rounded-b-lg w-full text-gray-900 rounded hover:bg-gray-100 md:border-0 md:w-auto dark:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Patient Portal
                  <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <!-- Dropdown menu -->
                <div id="dropdownNavbar" class="z-30 hidden font-manrope bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <router-link to="/appointments" class="block px-4 py-2 font-archivo text-[#211C1A] font-bold hover:text-dark-teal">
                        Book an Appointment
                      </router-link>
                    </li>
                    <li>
                      <a href="https://mycw220.ecwcloud.com/portal26606/jsp/100mp/login_otp.jsp" target="_blank"
                         class="block px-4 py-2 font-archivo text-[#211C1A] font-bold hover:text-dark-teal dark:hover:bg-gray-600">Patient Portal
                      </a>
                    </li>
                    <li>
                      <a href="https://www.healowpay.com/HealowPay/jsp/healow/login.jsp" target="_blank"
                         class="block px-4 py-2 font-archivo text-[#211C1A] font-bold hover:text-dark-teal dark:hover:bg-gray-600">Pay Now
                      </a>
                    </li>
                    <li>
                      <router-link to="/BariatricSurgeryStLouis/Weight-Loss-Surgery-Cost" class="block px-4 py-2 font-archivo text-[#211C1A] font-bold hover:text-dark-teal">
                        Insurance and Self Pay Options
                      </router-link>
                    </li>
                  </ul>
                </div>
                <li>
                  <router-link to="/Our-Products" class="block py-3 px-3 font-manrope text-[#211C1A] font-extrabold hover:text-white md:hover:text-dark-teal md:hover:bg-transparent hover:bg-dark-teal rounded-b-lg"
                               :class="getRoute === '/Our-Products' ? 'text-dark-teal' : 'text-[#211C1A]'" aria-current="page">Our Products
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex items-center bg-transparent gap-2 px-2 justify-end  w-full lg:hidden mb-[-3rem] z-10 relative">
            <div class="bg-dark-teal hover:bg-light-teal text-white font-manrope text-[12px] font-bold py-2.5 px-5 rounded-[4px] h-[40px]">
              <router-link to="/BariatricSurgeryStLouis/Weight-Loss-Surgery-Cost">Insurance and Self Pay Options</router-link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  
   
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { initFlowbite } from 'flowbite';
  
  // initialize components based on data attribute selectors
  onMounted(() => {
    initFlowbite();
  });
  </script>
  
  <script>
  export default {
    computed: {
      getRoute() {
        return this.$route.path;
      }
    }
  }
  </script>
  