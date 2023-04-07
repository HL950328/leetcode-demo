// 整数转千分位
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

str.replace(/\d{1,3}(?=(\d{3})+$)/g,function(s){
    console.log(s)
    return s+','
  }) 
// 整数转换前面加0
function addZero(num) {
    return num < 10 ? '0' + num : num
}
