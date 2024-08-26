function InfomationComponent(){
    return `
        <div class="container mt-5">
        <div class="row text-center">
            <div class="col-md-3">
                <i class="fas fa-map-marker-alt fa-3x"></i>
                <p>Address: 198 West 21th Street, Suite 721 New York NY 10016</p>
            </div>
            <div class="col-md-3">
                <i class="fas fa-phone fa-3x"></i>
                <p>Phone: <a href="tel:+1235235598">+ 1235 2355 98</a></p>
            </div>
            <div class="col-md-3">
                <i class="fas fa-envelope fa-3x"></i>
                <p>Email: <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
            </div>
            <div class="col-md-3">
                <i class="fas fa-globe fa-3x"></i>
                <p>Website <a href="https://yoursite.com">yoursite.com</a></p>
            </div>
        </div>
    </div>
    `;

}
const infomationElements = document.getElementsByTagName("InfomationComponent");// array
for(let item of infomationElements){
    item.innerHTML = InfomationComponent();
}