class MaxHeap{
    constructor(){
        this.size = 0
        //0不用
        this.elements = [Infinity]
    }

    insert(element){
        this.size++
        const {size,elements: ele} = this
        ele[size] = element
        for(let i=size;ele[i]>ele[Math.floor(i/2)];i=Math.floor(i/2)){
            this._swap(i,Math.floor(i/2))
        }
        console.log(this.elements)
        return this
    }
    _deleteMax(){
        const {size,elements:ele} = this
        ele[1] = ele[size]
        ele.pop()
        this.size--
        let i = 1
        while(typeof ele[i] !== 'undefined'){
            let node = ele[i]
            let left = ele[i*2]
            let right = ele[i*2+1]
            if(Math.max(node,left,right)===node){
                break
            }
            if(left>right){
                this._swap(i,i*2)
            }else{
                this._swap(i,i*2+1)
            }
        }
    }
    _swap(left,right){
        const { elements: ele } = this
        let tem = ele[left]
        ele[left] = ele[right]
        ele[right] = tem
        // [ele[left] ,ele[right]] = [ele[right] ,ele[left]]
        return this
    }
    getMax(){
        const max = this.elements[1]
        this._deleteMax()
        return max
    }
}


const max = new MaxHeap()
max.insert(5).insert(2).insert(3).insert(4).insert(6).getMax()