<template>
  <div>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/base-components">Base Components</router-link>
    <router-view class="mt-4"/> -->
    	<!-- container -->
		<!-- header -->
		<Navbar/>
		<!-- header -->
		<!--- top-nav -->
		<SubNavbar/>
		<!--- top-nav -->
		<!-- script-for-nav -->
		<!-- <script>
			$(document).ready(function(){
				$("span.menu").click(function(){
					$(".top-nav ul").slideToggle(500);
				});
			});
		</script>
			 -->
		<!-- /script-for-nav -->

		<!-- bottom-grids -->
		<div class="bottom-grids m_t-40">
			<div class="container">
 				<router-view/>
			</div>
		</div>
		<!-- bottom-grids -->

		<!-- footer -->
		<SubFooter/>
		<Footer/>

		<!-- footer -->
		<!-- container -->
  </div>
</template>
<script>
import Navbar from '@/components/Layout/Navbar'
import SubNavbar from '@/components/Layout/SubNavbar'
import Footer from '@/components/Layout/Footer'
import SubFooter from '@/components/Layout/SubFooter'
export default {
	components:{
		Navbar,
		SubNavbar,
		Footer,
		SubFooter
	}
}
</script>
