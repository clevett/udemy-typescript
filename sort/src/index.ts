import Sorter from "./Sorter"
import NumberCollection from "./NumberCollection"
import NumbersCollection from "./NumberCollection"

const numbersCollection  = new NumbersCollection([1000, 3. -5, 9])
const sorter = new Sorter(numbersCollection.data)
sorter.sort()
