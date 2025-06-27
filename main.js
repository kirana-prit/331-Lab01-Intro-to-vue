const {createApp, ref} = Vue
createApp({
    setup(){
        const product = ref('Green Socks')
        const description = ref('This is green socks')
        const image = ref('./assets/images/socks_green.jpg')
        const link = ref('https://www.camt.cmu.ac.th/')
        const inStock = ref(true)
        const inventory = ref(100)
        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color:'green', image: './assets/images/socks_green.jpg'},
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'}
        ])
        const sizes = ref('S M L')
        const cart = ref(0)
        function addToCart(){
            cart.value +=1
        }
        function updateImage(variantImage){
            image.value = variantImage
        }
        function toggleInStock(){
            inventory.value = 0
            onSale.value = false
        }
        return{
            product,description,image,link,inStock,inventory,onSale,details,variants,sizes,cart,addToCart,
            updateImage,toggleInStock
        }
    }
}).mount('#app')