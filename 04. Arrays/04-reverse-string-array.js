function reverse(arr){
    for(let i = 0; i <= arr.length / 2 - 1; i++){
        let helper = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = helper;
    }

    console.log(arr.join(' '));
}

reverse(['33', '123', '0', 'dd']);