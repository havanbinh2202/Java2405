function tinhChuViVaDienTich(a, b, c) {
    // Kiểm tra xem ba cạnh có tạo thành một tam giác hợp lệ hay không
    if (a + b > c && a + c > b && b + c > a) {
        // Tính chu vi
        var chuVi = a + b + c;

        // Tính diện tích sử dụng công thức Heron
        var p = chuVi / 2;
        var dienTich = Math.sqrt(p * (p - a) * (p - b) * (p - c));

        // Hiển thị kết quả
        alert(`Chu vi: ${chuVi}`);
        alert(`Diện tích: ${dienTich}`);
    } else {
        alert("Đây không phải là một tam giác hợp lệ.");
    }
}
function kiemtraSNT(n){
    for(var i=2; i<Math.sqrt(n);i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

songuyento(19);
if(kiemtraSNT(21)){
    alert(`Đây là số nguyên tố`);
}else{
    alert(`Đây không phải là snt`);
}


function songuyento(n){
  
    for (var i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0){ // kiểm tra chia hết hay k
            alert(`${n} không phải là số ng to`);
            return ; 
        }
    }

    alert(`${n} là số nguyên tố`);
    return ;

}

// viết các function để xử lý array -- input : array
// 1. viết function tìm số lớn nhất trong 1 mảng
// 2. viết function tìm tbc của 1 mảng
// 3. viết function tìm số dương nhỏ nhất trong 1 mảng số
// 4. viết function tìm tbc của các số dương trong mảng

function timSoLonNhat(array) {
    if (array.length === 0) return null;
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

// 2. Hàm tính trung bình cộng của 1 mảng
function tinhTBC(array) {
    if (array.length === 0) return null;
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

// 3. Hàm tìm số dương nhỏ nhất trong 1 mảng số
function timSoDuongNhoNhat(array) {
    var minPositive = null;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0 && (minPositive === null || array[i] < minPositive)) {
            minPositive = array[i];
        }
    }
    return minPositive;
}

// 4. Hàm tính trung bình cộng của các số dương trong mảng
function tinhTBCSoDuong(array) {
    var sum = 0;
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];
            count++;
        }
    }
    return count > 0 ? sum / count : null;
}

