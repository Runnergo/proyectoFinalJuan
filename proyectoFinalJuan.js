/**
 * 
 */
function r(R){
	var prue=[1,2,3,4,5,6,7,8,9]
	var matrixEncode=[];
    var matrixC=[];
    var contTabla=0;    
	var matrixR=[];
		for (i=0 ;i<3;i++){
		
		matrixR[i]=[];
		matrixC[i]=[];
		
		for (k=0; k<3;k++){
			
			matrixR[i][k]=prue[contTabla];
			console.log(matrixR[i][k]);
			contTabla++;
		}
	}
        matrixC[0][0]=3;
        matrixC[0][1]=7;
        matrixC[0][2]=8;
        matrixC[1][0]=1;
        matrixC[1][1]=2;
        matrixC[1][2]=4;
        matrixC[2][0]=6;
        matrixC[2][1]=2;
        matrixC[2][2]=9;
	for (i=0 ;i<3;i++){
		matrixEncode[i]=[];
		for (k=0; k<3;k++){
			matrixEncode[i][k]=matrixR[k][i]*matrixC[k][i]
		console.log(matrixR[i][k] + " X " + matrixC[i][k] + " = " + matrixEncode[i][k] + "<br>");
		}
	}
}return; 


