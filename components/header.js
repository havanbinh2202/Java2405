function HeaderComponent(){
    return `
        <div class="container" style="text-align: center;">
            <h1>Header component1</h1>
        </div>
    `;

}
const headerElements = document.getElementsByTagName("HeaderComponent");// array
for(let item of headerElements){
    item.innerHTML = HeaderComponent();
}