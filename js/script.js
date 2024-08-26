const fruits = {
    "Hoa quả": ["../img/product-2.jpg", "../img/quả đào.jpg", "../img/quả nho.jpg"],
    "Thực Phẩm": ["../img/product-7.jpg", "../img/blog-2.jpg", "../img/blog-3.jpg"],
    "Strawberries": ["../img/camep.jpg", "../img/cafe1.jpg", "../img/nuocchanh.jpg"]
};

// Lưu dữ liệu vào Local Storage
localStorage.setItem('fruits', JSON.stringify(fruits));

$(document).ready(function () {
    const fruits = JSON.parse(localStorage.getItem('fruits'));

    // Hiển thị danh sách trái cây
    for (let fruit in fruits) {
        $('#fruit-list').append(`<li class="list-group-item fruit-item" data-fruit="${fruit}">${fruit}</li>`);
    }

    // Xử lý sự kiện khi người dùng chọn một loại trái cây
    $('.fruit-item').on('click', function () {
        const selectedFruit = $(this).data('fruit');
        $('#fruit-title').text(selectedFruit);
        $('#fruit-images').empty();

        const images = fruits[selectedFruit];
        images.forEach(image => {
            $('#fruit-images').append(`
                <div class="col-md-4">
                    <img src="${image}" class="img-thumbnail" alt="${selectedFruit}">
                </div>
            `);
        });
    });
});
