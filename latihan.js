
  // rocket 

function pyramidNumberExtension1(a){
    for (i = 0; i < a; i++ ){
        str1 = "";
        for ( j = 0; j <= i; j++){
            str1 += (i+1);
        }
    console.log(str1);
    }
}
    
    
    
function pyramidNumberExtension2(b){
    for (i = b; i > 1; i-- ){
        str2 = ""
        for ( j = 1; j <= i; j++){
            str2 += (i);
        }
        console.log(str2);
    }
}

    
function pyramidNumberExtensionmax (batas){
    pyramidNumberExtension2(batas)
    pyramidNumberExtension1(batas)
}

var max = 5

pyramidNumberExtensionmax(max)

