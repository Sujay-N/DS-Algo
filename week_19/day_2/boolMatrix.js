function boolMat(input){

    input = input.split("\n")
    var size = Number(input[0])
    var mat=[]
    var verbose =0
    for(var i = 1; i <= size ; i++)
    {
         mat.push(input[i].split(" ").map((e)=> Number(e)))
    }
    if(verbose)
    console.log(mat)
    for(var i =0 ; i < size; i++)
    {
        for(var j =0; j<size ; j++ )
        {
          if (mat[i][j] == 1 ) 
          {
              mat[i]=1
              mat[j]=1
          }
        }
        console.log(mat)
    }
} 
boolMat(`3
0 0 1
1 0 0
0 1 0`)

// boolMat(`5
// 0 0 0 0 0
// 1 0 0 0 0
// 0 0 1 0 0
// 0 0 0 0 1
// 0 0 0 0 0`)