function asyncFunction(){
    let p = new Promise(function(resolve){
        resolve("Hi there") ; 
    }) ; 
    return p ;
}

async function main(){
    const value = await asyncFunction() ; 
    console.log(value) ;
}; 
main()  ;