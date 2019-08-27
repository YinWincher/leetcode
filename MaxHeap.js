class MaxHeap{
    constructor(capacity){
        this.capacity = this.capacity
        this.size = 0
        //0不用
        this.elements = [null]
    }

    insert(element){
        this.size++
        const {size,elements} = this
        elements[size] = element
        for(let i=size;i>0&&elements[i]>elements[Math.floor(i/2)];i=Math.floor(i/2)){
            [elements[i],elements[Math.floor(i/2)]] = [elements[Math.floor(i/2)],elements[i]]
        }
        // this.size++
        return this
    }
    _deleteMax(){
        const {size,elements} = this
        elements[1] = elements[size]

    }
    getMax(){
        const max = this.elements[1]
        this._deleteMax()
        return max
    }
}


const max = new MaxHeap()
max.insert(5).insert(2).insert(3).insert(4)
console.log(max)
debugger