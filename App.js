function getdata(dataid,getNextData){
    setTimeout(()=>{
   console.log("data"+dataid);
   if(getNextData){
   getNextData();
   }
    },2000)
}
getdata(1, () => {
    console.log("The getting Data .....")
  getdata(2,()=>{
    console.log("The getting Data .....")
    getdata(3)
  })
});