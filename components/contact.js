function ContactFormComponent(){
    return `
         <div class="container mt-5">
        <h2>Contact Us</h2>
        <form>
            <div class="row mb-3">
                <div class="col">
                    <label for="fullName" class="form-label">FULL NAME</label>
                    <input type="text" class="form-control" id="fullName" placeholder="Name">
                </div>
                <div class="col">
                    <label for="emailAddress" class="form-label">EMAIL ADDRESS</label>
                    <input type="email" class="form-control" id="emailAddress" placeholder="Email">
                </div>
            </div>
            <div class="mb-3">
                <label for="subject" class="form-label">SUBJECT</label>
                <input type="text" class="form-control" id="subject" placeholder="Subject">
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">MESSAGE</label>
                <textarea class="form-control" id="message" rows="4" placeholder="Message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
    </div>
    `;

}
const headerElements = document.getElementsByTagName("ContactFormComponent");// array
for(let item of headerElements){
    item.innerHTML = ContactFormComponent();
}