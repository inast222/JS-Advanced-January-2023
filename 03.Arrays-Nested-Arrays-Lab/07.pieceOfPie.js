function pieceOfPie(array,start,end) {
    const startIndex=array.indexOf(start);
    const endIndex=array.indexOf(end)+1;

    console.log(array.slice(startIndex,endIndex))
}
pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)