class Sorter {
    constructor(public collection: number[]) {
        this.collection = collection
    }

    sort():number[] {
        return this.collection.sort()
    }
}

export default Sorter