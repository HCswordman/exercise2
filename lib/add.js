function add(a, b) {
    // 实现该函数
    var a = a.split('').reverse(),
        b = b.split('').reverse(),
        len = a.length > b.length ? a.length : b.length,
        count = 0,
        arr = [];

    for (var i = 0; i < len + 1; i++) {
        count = ~~a[i] + ~~b[i] + count;
        arr.push(count % 10);
        count = count > 9 ? 1 : 0;
    }

    if (!arr[len])  arr.pop();

    return arr.reverse().join('') + '';
}

// function add(a,b){
//     var res='', c=0;
//     a = a.split('');
//     b = b.split('');
//     while (a.length || b.length || c){
//         c += ~~a.pop() + ~~b.pop();
//         res = c % 10 + res;
//         c = c>9;
//     }
//     return res.replace(/^0+/,'');
// }

module.exports = add