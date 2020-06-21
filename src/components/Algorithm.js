import React from "react";

class Algorithm extends React.Component {
    state = {
        lists: [...Array.from({ length: 20 }, () => Math.floor(Math.random() * 100))],
        algo: null
    }

    reset = (list)=>{
        this.setState(
            {
                lists: list
            }
        )
    }

    binarySort = () => {
        let list = [...Array.from({ length: 20 }, () => Math.floor(Math.random() * 100))];
        this.reset(list)
        let c = 0
        for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < list.length - i - 1; j++) {
                if (list[j] > list[j + 1]) {
                    let temp = list[j]
                    list[j] = list[j + 1]
                    list[j + 1] = temp
                    c = c + 1
                    let new_list = [...list]
                    setTimeout(() => {
                        this.setState({
                            lists: new_list,
                        })
                    }, 100 * c)
                }
            }
        }
    }

    insertionSort = ()=>{
        let list = [...Array.from({ length: 20 }, () => Math.floor(Math.random() * 100))];
        this.reset(list)
        let c=0
        for(let i=1;i<list.length;i++){
            let j=i
            let current = list[i]
           while((j>=1)&&(list[j-1]>current)){
                list[j]=list[j-1]
                j = j-1
               }
               list[j] = current
               let new_list = [...list]
               setTimeout(() => {
                this.setState({
                    lists: new_list,
                })
            }, 100 * c)
            c=c+1
           }
        return list
    }
    quickSort = () => {
        let list = [...Array.from({ length: 20 }, () => Math.floor(Math.random() * 100))];
        this.reset(list)
        let c=0
        let quickSort = (list, start, end) => {
            if (start>end) {
                return list
            }
            let pivot = partition(list, start, end)
            quickSort(list, start, pivot - 1)
            quickSort(list, pivot + 1, end)
            let new_list = [...list]
                setTimeout(() => {
                    this.setState({
                        lists: new_list,
                    })
                }, 200 * c)
               c=c+1
            return list
        }
        let partition = (list, start, end) => {
            let pivot = list[end]
            let pivotIndex = start
                for (let i = start; i < end; i++) {
                if (list[i] <= pivot) {
                    let temp = list[i]
                    list[i]= list[pivotIndex]
                    list[pivotIndex] = temp
                    pivotIndex = pivotIndex+1
                }
                let new_list = [...list]
                setTimeout(() => {
                    this.setState({
                        lists: new_list,
                    })
                }, 200 * c)
               c=c+1
            }
            let temp = list[pivotIndex]
            list[pivotIndex] = pivot
            list[end] = temp
            return pivotIndex
        }
        quickSort(list,0,list.length-1)
    }

    mergeSorting = ()=>{
        let list = [...Array.from({ length: 20 }, () => Math.floor(Math.random() * 100))];
        this.reset(list)
        let c=0
        const mergeSort=(list)=>{
            if(list.length === 1){
                return list
            }
            const mid = Math.floor(list.length/2)
            const left = list.slice(0,mid)
            const right = list.slice(mid)
        
            const sortedLeft = mergeSort(left)
            const sortedRight = mergeSort(right)

            let list_merg = merge(sortedLeft,sortedRight)
            
            let new_list = [...list_merg]
                setTimeout(() => {
                    this.setState({
                        lists: new_list,
                    })
                }, 400 * c)
               c=c+1
            return list
        }
        function merge(sortedLeft,sortedRight){
            const result = sortedLeft.concat(sortedRight)
            return result.sort((a,b)=>a-b)
        }
        mergeSort(list)
    }


    render() {
        return (
            <div>
                <div className="m-1">
                    <div className="d-flex flex-row">
                        <div className="p-2"><button type="button" className="btn btn-success" onClick={this.binarySort}>Bubble Sort</button></div>
                        <div className="p-2"><button type="button" className="btn btn-success" onClick={this.quickSort}>Quick Sort</button></div>
                        <div className="p-2"><button type="button" className="btn btn-success" onClick={this.insertionSort}>Insertion Sort</button></div>
                        <div className="p-2"><button type="button" className="btn btn-success" onClick={this.mergeSorting}>Merge Sort</button></div>
                    </div>
                    {this.state.lists.map((item) => {
                        return (
                            <div className="progress m-1" key={Math.random()}> <div className="progress-bar bg-secondary" role="progressbar" style={{ "width": `${item}%` }}></div> </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Algorithm