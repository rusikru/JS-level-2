Vue.component('filt', {
	props: ['filtered', 'userSearch'],

	 template: `<div class = "search">
	 	<form action="#" class="search-form" >
        <input type="text" class="search-field" v-model="userSearch" >
                <button type="submit" class="btn-search">
                    <i class="fas fa-search"></i>
                </button>
         </form>
     </div> `
});


// Vue.component('filt', {
//     props: ['filtered',],

//      template: `<div class = "search">
//         <form action="#" class="search-form" @submit.prevent="filter()" >
//         :userSearch = "userSearch";
//          </form>
//      </div> `
// });
// Vue.component('userSearch', {
//     props: ['userSearch'],

//      template: `<div>

//         <input type="text" class="search-field" v-model="userSearch" >
//                 <button type="submit" class="btn-search">
//                     <i class="fas fa-search"></i>
//                 </button>

//      </div> `
// });