class HashMap {
    constructor(size=16) {
        this.maxSize = size
        this.fill = 0
        this.buckets = new Array(this.maxSize)
    }

    set(key,value){
        let load = this.checkLoad()
        if(load > 0.75){
            ///this.increaseCapacity()
        }
        let hashed = this.hash(key)
        let index = hashed
        if (!this.buckets[index]){
          this.buckets[index] = {   
            key: key,  
            value: value,
            next: null
            }
            this.fill++
        }
        else {
            this.buckets[index].next = {key: key, value:value, next: null}
        }
    }

    get(key){
        let find = this.searchKey(key)
        if(find) return find

        else return null
        }
          
    has(key){
      let find = this.searchKey(key)
      if (find) return true

      else return false
    }  
    
    searchKey(key){
      let index = this.hash(key)
      if(this.buckets[index] == true) {
      const bucket = this.buckets[index];
      console.log(bucket.key)
      let current = bucket;
      while(current) {
          if(current.key === key){
            return current.value;
          }
          current = current.next;
        }
      }
    }
    

    hash(string) {
        return this.stringToNumber(string)% this.maxSize;
    }

    checkLoad() {
        let check = this.fill / this.maxSize
        console.log(check)
    }

    reSize(change=2) {
        let oldMax = this.maxSize
        this.maxSize = this.maxSize * change
        this.fill = 0
        let oldData = this.buckets
        this.buckets = ""
        console.log(this.maxSize)
        this.buckets = new Array(this.maxSize)
        console.log(oldData)
        for(let i = 0; i < oldMax; i++){
        if(oldData[i] == null){
        }
        else {this.gather(oldData[i])}
      }
    }

    stringToNumber(string) {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < string.length; i++) {
          hashCode = primeNumber * hashCode + string.charCodeAt(i);
        }
      
        return hashCode;
      }

    gather(oldData){
      console.log(oldData)
      let key = oldData.key
      let next = oldData.next
      if(!key) console.log("done")

   
      else if(next == null){
        this.set(oldData.key, oldData.value)
        console.log(oldData.next)
      }  
         
        
      else{
        this.set(oldData.key, oldData.value)
        console.log(oldData.next)
        return this.gather(oldData.next)
      }
    }

}




const  hashMap = new HashMap
hashMap.set("burrito", "food")
hashMap.set("hotdog", "food")
hashMap.set("hashbrown", "food")
hashMap.set("pizza", "food")
hashMap.set("tuna", "food")
hashMap.set("popcorn", "food")
hashMap.set("soup", "food")
hashMap.set("hamburger", "food")
hashMap.set("salad", "food")
hashMap.set("chicken", "food")
hashMap.set("steak", "food")
hashMap.set("BBQ Chicken", "food")
hashMap.set("Taco", "food")
hashMap.set("Hotdog", "food")
hashMap.set("Egg Sandwich", "food")
hashMap.set("Subway", "food")
hashMap.set("Fries", "food")
hashMap.set("Lobster", "food")
hashMap.set("Shark", "food")
hashMap.set("Whale", "food")
hashMap.set("Egg Rolls", "food")
hashMap.set("Bacon", "food")
hashMap.set("Crackers", "food")
hashMap.set("Potato", "food")
console.log(hashMap)
console.log(hashMap.get("burrito"))
hashMap.reSize()
console.log(hashMap)
console.log(hashMap.has("gotdog"))




/*   if (index < 0 || index >= buckets.length) {
    throw new Error("Trying to access index out of bound");
  } */