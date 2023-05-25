import { defineStore } from 'pinia'

export const productCounter = defineStore('counter', {
    state: () => {
        return{
            count:0,
            active:0,
            inactive:0
        }
    },
    getters: {
        getCount: (state) => state.count,
        getActive: (state) => state.active,
        getInactive: (state) => state.inactive,
      },
    actions: {
        update(val) {
            console.log(val);
            this.count=val.length
            let countActive=0,countInactive=0;
            val.forEach(element => {
               if(element.status){
                   countActive++;
               }else{
                  countInactive++;
               } 
            });
            this.active=countActive;
            this.inactive=countInactive;
        },
      },
})