const CREATE_ITEM_SIZE = 'CREATE_ITEM_SIZE';


let initialState = {
    product :[
        [
            {id:0,name:'Рефлективная панама',prise:400,size:'XS',color:'white',gender:'unisex',img:'https://instagram.fiev25-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/147410824_708361653382212_1644264873359271092_n.jpg?tp=1&_nc_ht=instagram.fiev25-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=-hG7p-NgNbUAX_duGSi&edm=APU89FAAAAAA&ccb=7-4&oh=dbe2ca1cf5751fb40a78fb13a3682342&oe=609B016F&_nc_sid=86f79a'},
            {id:1,name:'Рефлективная панама',prise:400,size:'S',color:'white',gender:'unisex',img:'https://instagram.fiev25-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/147410824_708361653382212_1644264873359271092_n.jpg?tp=1&_nc_ht=instagram.fiev25-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=-hG7p-NgNbUAX_duGSi&edm=APU89FAAAAAA&ccb=7-4&oh=dbe2ca1cf5751fb40a78fb13a3682342&oe=609B016F&_nc_sid=86f79a'},
            {id:2,name:'Рефлективная панама',prise:400,size:'M',color:'white',gender:'unisex',img:'https://instagram.fiev25-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/147410824_708361653382212_1644264873359271092_n.jpg?tp=1&_nc_ht=instagram.fiev25-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=-hG7p-NgNbUAX_duGSi&edm=APU89FAAAAAA&ccb=7-4&oh=dbe2ca1cf5751fb40a78fb13a3682342&oe=609B016F&_nc_sid=86f79a'},
            {id:3,name:'Рефлективная панама',prise:400,size:'L',color:'white',gender:'unisex',img:'https://instagram.fiev25-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/147410824_708361653382212_1644264873359271092_n.jpg?tp=1&_nc_ht=instagram.fiev25-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=-hG7p-NgNbUAX_duGSi&edm=APU89FAAAAAA&ccb=7-4&oh=dbe2ca1cf5751fb40a78fb13a3682342&oe=609B016F&_nc_sid=86f79a'},
            {id:4,name:'Рефлективная панама',prise:400,size:'XL',color:'white',gender:'unisex',img:'https://instagram.fiev25-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/147410824_708361653382212_1644264873359271092_n.jpg?tp=1&_nc_ht=instagram.fiev25-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=-hG7p-NgNbUAX_duGSi&edm=APU89FAAAAAA&ccb=7-4&oh=dbe2ca1cf5751fb40a78fb13a3682342&oe=609B016F&_nc_sid=86f79a'},
        ],

        [
            {id:0,name:'Рюкзак БИМО',prise:550,size:'S',color:'white',gender:'unisex',img:'https://instagram.fiev25-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/156425106_869996083791745_3968128708217725714_n.jpg?tp=1&_nc_ht=instagram.fiev25-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=r8bPzxsS8qEAX90WDM-&tn=nBEYgN1dGNk-rde3&edm=APU89FAAAAAA&ccb=7-4&oh=65daa5f874663fbfde040d058b1b43a5&oe=609D24E9&_nc_sid=86f79a'},
            {id:1,name:'Рюкзак БИМО',prise:550,size:'M',color:'white',gender:'unisex',img:'https://instagram.fiev25-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/156425106_869996083791745_3968128708217725714_n.jpg?tp=1&_nc_ht=instagram.fiev25-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=r8bPzxsS8qEAX90WDM-&tn=nBEYgN1dGNk-rde3&edm=APU89FAAAAAA&ccb=7-4&oh=65daa5f874663fbfde040d058b1b43a5&oe=609D24E9&_nc_sid=86f79a'},
            {id:2,name:'Рюкзак БИМО',prise:550,size:'L',color:'white',gender:'unisex',img:'https://instagram.fiev25-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/156425106_869996083791745_3968128708217725714_n.jpg?tp=1&_nc_ht=instagram.fiev25-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=r8bPzxsS8qEAX90WDM-&tn=nBEYgN1dGNk-rde3&edm=APU89FAAAAAA&ccb=7-4&oh=65daa5f874663fbfde040d058b1b43a5&oe=609D24E9&_nc_sid=86f79a'},
            {id:3,name:'Рюкзак БИМО',prise:550,size:'XL',color:'white',gender:'unisex',img:'https://instagram.fiev25-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/156425106_869996083791745_3968128708217725714_n.jpg?tp=1&_nc_ht=instagram.fiev25-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=r8bPzxsS8qEAX90WDM-&tn=nBEYgN1dGNk-rde3&edm=APU89FAAAAAA&ccb=7-4&oh=65daa5f874663fbfde040d058b1b43a5&oe=609D24E9&_nc_sid=86f79a'},
        ],
        [
            {id:0,name:'Кепка рефлективная',prise:350,size:'M',color:'white',gender:'unisex',img:'https://instagram.fiev25-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.179.1440.1440a/s640x640/123305173_214217500093988_1164538768417296759_n.jpg?tp=1&_nc_ht=instagram.fiev25-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=f2x7XzwYQKIAX-j0866&edm=APU89FAAAAAA&ccb=7-4&oh=988abb4b068f51cd72c54a12f394f4df&oe=60A36A8E&_nc_sid=86f79a'},
            {id:1,name:'Кепка рефлективная',prise:350,size:'L',color:'white',gender:'unisex',img:'https://instagram.fiev25-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.179.1440.1440a/s640x640/123305173_214217500093988_1164538768417296759_n.jpg?tp=1&_nc_ht=instagram.fiev25-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=f2x7XzwYQKIAX-j0866&edm=APU89FAAAAAA&ccb=7-4&oh=988abb4b068f51cd72c54a12f394f4df&oe=60A36A8E&_nc_sid=86f79a'},
            {id:2,name:'Кепка рефлективная',prise:350,size:'XL',color:'white',gender:'unisex',img:'https://instagram.fiev25-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.179.1440.1440a/s640x640/123305173_214217500093988_1164538768417296759_n.jpg?tp=1&_nc_ht=instagram.fiev25-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=f2x7XzwYQKIAX-j0866&edm=APU89FAAAAAA&ccb=7-4&oh=988abb4b068f51cd72c54a12f394f4df&oe=60A36A8E&_nc_sid=86f79a'}
        ],
        [
            {id:0,name:'Tactical Bag',prise:400,size:'L',color:'white',gender:'unisex',img:'https://instagram.fiev25-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c240.0.960.960a/s640x640/82109349_1127122940995000_5262040278675753950_n.jpg?tp=1&_nc_ht=instagram.fiev25-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_iNz0WGfaq8AX_K1oEx&edm=APU89FAAAAAA&ccb=7-4&oh=ab2dbf5dfdd948cddc49666f74d493a9&oe=60A31CBA&_nc_sid=86f79a'},
            {id:1,name:'Tactical Bag',prise:400,size:'XL',color:'white',gender:'unisex',img:'https://instagram.fiev25-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c240.0.960.960a/s640x640/82109349_1127122940995000_5262040278675753950_n.jpg?tp=1&_nc_ht=instagram.fiev25-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_iNz0WGfaq8AX_K1oEx&edm=APU89FAAAAAA&ccb=7-4&oh=ab2dbf5dfdd948cddc49666f74d493a9&oe=60A31CBA&_nc_sid=86f79a'},
        ],
        [
            {id:0,name:'Tactical Bag 2.0',prise:500,size:'XS',color:'white',gemder:'unisex',img:'https://instagram.fiev25-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.179.1440.1440a/s640x640/146939649_879545659255425_92100646238616247_n.jpg?tp=1&_nc_ht=instagram.fiev25-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=KkhLMvfPUvsAX8x_gfX&edm=APU89FAAAAAA&ccb=7-4&oh=ee3d188921b2f12bb4f112d595bc780d&oe=60A28505&_nc_sid=86f79a'},
        ]
    ]
}

let productReduser = (state = initialState,action)=>{
   switch (action.type){
       case 1 :{

       }default:{
           return state;
       }
   }
}



export default productReduser;