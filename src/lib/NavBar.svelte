<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
  import NavBarHeader from './NavBar/NavBarHeader.svelte';
  import NavBarOptions from './NavBar/NavBarOptions.svelte';
  import type { optionsTypes } from './NavBar/NavBarTypes';

  //required attributes
  export let options: optionsTypes = {
    id: '',
    header: '',
    imgSrc: '',
    imgClass: '',
    imgAlt: '',
    contentInfo: [],
  }

</script>


<!-- ************************* HTML ************************* -->

<nav id={options.id} class="sv-navbar">
  <NavBarHeader 
    header={options.header}
    imgSrc={options.imgSrc}
    imgClass={options.imgClass}
    imgAlt={options.imgAlt}/>
  <NavBarOptions 
    contentInfo={options.contentInfo}/>
</nav>

<!-- ************************* STYLES ************************* -->  
<style>
	/*
    Style these however we'd like later
  */
</style>
