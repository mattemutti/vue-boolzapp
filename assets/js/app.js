const { createApp } = Vue

createApp({
	data() {
		return {
			message: 'Hello Vue!'
		}
},

method() {

},

mounted() {
	console.log('ci siamo?');
}
}).mount('#app')