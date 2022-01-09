const arr = [2, 'b', 1, 'a', 2, 6, 'a', 3, 'b', 2, 9, 3, 2]

function mostFrequent(arr) {
    mf=1;
    m=0;
    var item;

    for (i=0; i<arr.length; i++) {
        for (j=i; j<arr.length; j++) {
            if (arr[i] == arr[j]) {
                m++;
            }
            if (mf<m) {
                mf=m;
                item=arr[i];
            }
        }

        m=0;
    }

    console.log(item + " (" + mf + " times)");
}

mostFrequent(arr)