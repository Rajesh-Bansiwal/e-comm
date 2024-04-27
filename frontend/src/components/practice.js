const fun =async()=>{
    return true
}
let a;
const main=async()=>{
    const data=await fun()
    // console.log(data)
    a=data
}
main()
console.log(a)