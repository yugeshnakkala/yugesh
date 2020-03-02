fetch("data.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        display_info(data.basic);
});


var bodyElement=document.querySelector("#root");
function display_info(info){
    //card view
    let card = document.createElement("div");
    card.classList.add("card");
    //heading
    let heading = document.createElement("h1");
    heading.textContent=info.name;
   
    let heading3 = document.createElement("h4");
    heading3.textContent=info.role;

    let heading2 = document.createElement("a");
    heading2.href="mailto:"+info.email;
    heading2.textContent=info.email;

    let line=document.createElement("hr");
    let line1=document.createElement("hr");
    let line2=document.createElement("hr");
    let line3=document.createElement("hr");

    let mobile=document.createElement("a");
    mobile.href="tel:"+info.mobile;
    mobile.textContent=info.mobile;

    var button=document.createElement("a");
    button.textContent="View profile";
    button.classList.add("btn")


    bodyElement.append(card);
    card.append(heading);
    card.append(line);
    card.append(heading3);
    card.append(line2);
    card.append(heading2);
    card.append(line1);
    card.append(mobile);
    card.append(line3);
    card.append(button);
    

    
    bodyElement.appendChild(card);

}