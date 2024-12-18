function init(){
    console.log("uwu");
    spawnBG();
    //sWindow();
}
function spawnBG(){
    const tooltip = "This button does nothing. Hint: Click login/register";

    const topbar = document.createElement("div");
    topbar.id  ="tpbar";
    document.body.appendChild(topbar); 

    const txt_btn_cont = document.createElement("div");
    txt_btn_cont.id = "tpbar_btn_cont";
    topbar.appendChild(txt_btn_cont);
    
    const logo = document.createElement("img");
    logo.src = "./assets/img/icon_large_dark.png";
    logo.id = "tpbar_logo";
    txt_btn_cont.appendChild(logo);

    const txt_btn1 = document.createElement("div");
    txt_btn1.innerHTML = "Insurance";
    txt_btn1.title = tooltip;
    txt_btn1.className  ="tbpar_btns";
    txt_btn_cont.appendChild(txt_btn1);

    const txt_btn2 = document.createElement("div");
    txt_btn2.innerHTML = "Rapport Damage";
    txt_btn2.className  ="tbpar_btns";
    txt_btn2.title = tooltip;
    txt_btn_cont.appendChild(txt_btn2);

    const txt_btn3 = document.createElement("div");
    txt_btn3.innerHTML = "Customer Service";
    txt_btn3.className  ="tbpar_btns";
    txt_btn3.title = tooltip;
    txt_btn_cont.appendChild(txt_btn3);

    const login_btn = document.createElement("div");
    login_btn.id = "tpbar_login";
    login_btn.innerHTML = "Login/Register";
    login_btn.addEventListener("click",function(){
        if(Store.sWindow_open == false){
            sWindow();
            Store.sWindow_open = true;
        }
        
    });
    topbar.appendChild(login_btn);

    const ad_slide = document.createElement("div");
    ad_slide.id  ="ad_slide";
    document.body.appendChild(ad_slide);

    const triangle = document.createElement("div");
    triangle.id = "div_trig";
    triangle.style.borderWidth = ad_slide.offsetHeight +"px " + ad_slide.offsetWidth/2 +"px 0 0"; 
    ad_slide.appendChild(triangle);

    const triangleImage = document.createElement("img");
    triangleImage.src = "./assets/img/car.jpg" 
    triangleImage.id = "div_trig_img";
    ad_slide.appendChild(triangleImage);
    
    const triangleText = document.createElement("div");
    triangleText.id = "div_trig_txt";
    triangleText.className  ="text"; 
    triangleText.innerHTML = "Join us now and get a 10% discount on your insurance*"; 
    ad_slide.appendChild(triangleText);

    const insurance_plan_header = document.createElement("div");
    insurance_plan_header.id = "insur_plan_head";
    insurance_plan_header.innerHTML = "Our Insurances:";
    document.body.appendChild(insurance_plan_header);

    //insurance types
    const insurance_plans = document.createElement("div");
    insurance_plans.id  ="insur_plan";
    document.body.appendChild(insurance_plans);

    const plan1 = document.createElement("div");
    plan1.className = "insur_plans";
    const plan1_header = document.createElement("div");
    plan1_header.className = "insur_plan_header";
    plan1_header.innerHTML = "Vehicle Insurance";
    plan1.appendChild(plan1_header);
    const plan1_icon = document.createElement("img");
    plan1_icon.className  ="insur_plan_icon";
    plan1_icon.src = "./assets/img/car-back.svg";    
    plan1.appendChild(plan1_icon);
    const plan1_next = document.createElement("img");
    plan1_next.className = "insur_plan_next";
    plan1_next.src = "./assets/img/arrow-right-bold-circle.svg";
    plan1_next.title = tooltip;
    plan1.appendChild(plan1_next);
    insurance_plans.appendChild(plan1); 

    const plan2 = document.createElement("div");
    plan2.className = "insur_plans";
    const plan2_header = document.createElement("div");
    plan2_header.className = "insur_plan_header";
    plan2_header.innerHTML = "Health Insurance";
    plan2.appendChild(plan2_header);
    const plan2_icon = document.createElement("img");
    plan2_icon.className  ="insur_plan_icon";
    plan2_icon.src = "./assets/img/account.svg";    
    plan2.appendChild(plan2_icon);
    const plan2_next = document.createElement("img");
    plan2_next.className = "insur_plan_next";
    plan2_next.src = "./assets/img/arrow-right-bold-circle.svg";
    plan2_next.title = tooltip;
    plan2.appendChild(plan2_next);
    insurance_plans.appendChild(plan2); 

    const plan3 = document.createElement("div");
    plan3.className = "insur_plans";
    const plan3_header = document.createElement("div");
    plan3_header.className = "insur_plan_header";
    plan3_header.innerHTML = "Travel Insurance";
    plan3.appendChild(plan3_header);
    const plan3_icon = document.createElement("img");
    plan3_icon.className  ="insur_plan_icon";
    plan3_icon.src = "./assets/img/airplane.svg";    
    plan3.appendChild(plan3_icon);
    const plan3_next = document.createElement("img");
    plan3_next.className = "insur_plan_next";
    plan3_next.src = "./assets/img/arrow-right-bold-circle.svg";
    plan3_next.title = tooltip;
    plan3.appendChild(plan3_next);
    insurance_plans.appendChild(plan3); 
    
    const plan4 = document.createElement("div");
    plan4.className = "insur_plans";
    const plan4_header = document.createElement("div");
    plan4_header.className = "insur_plan_header";
    plan4_header.innerHTML = "Pet Insurance";
    plan4.appendChild(plan4_header);
    const plan4_icon = document.createElement("img");
    plan4_icon.className  ="insur_plan_icon";
    plan4_icon.src = "./assets/img/dog-side.svg";    
    plan4.appendChild(plan4_icon);
    const plan4_next = document.createElement("img");
    plan4_next.className = "insur_plan_next";
    plan4_next.src = "./assets/img/arrow-right-bold-circle.svg";
    plan4_next.title = tooltip;
    plan4.appendChild(plan4_next);
    insurance_plans.appendChild(plan4); 



    setInterval(bg_switcher,18000);

}

function bg_switcher(){
    const text = document.getElementById("div_trig_txt");
    const img = document.getElementById("div_trig_img");
    const text_key =RandomRangedIntiger(0, Store.styles.filler_texts.length -1);
    const img_key =RandomRangedIntiger(0, Store.styles.imgs.length -1);
    text.innerHTML = Store.styles.filler_texts[text_key];
    img.src = "./assets/img/" + Store.styles.imgs[img_key];
}

function sWindow(){
    const id = "swindow";
    const swindow = document.createElement("div");
    swindow.id = id;
    document.body.appendChild(swindow);

    //Header
    const stp1_header = document.createElement("div");
    stp1_header.innerHTML = "It looks like you don't have an account. Register Here!";
    stp1_header.className = "stp_header";
    swindow.appendChild(stp1_header);

    const subhead = document.createElement("div");
    subhead.innerHTML = "Please enter your name to register (use the keyboard below to type your name, then click 'OK' to go to the next step)";
    subhead.id = "stp1_subhead";
    swindow.appendChild(subhead);

    const firstname = document.createElement("div");
    firstname.id = "stp1_firstname";
    firstname.className  ="stp1_name";
    firstname.innerHTML = "Firstname";
    swindow.appendChild(firstname);

    const lastname = document.createElement("div");
    lastname.id = "stp1_lastname";
    lastname.className  ="stp1_name";
    lastname.innerHTML = "Lastname";
    swindow.appendChild(lastname);

    const keyboard_cont = document.createElement("div");
    keyboard_cont.id = "stp1_keyboard_cont";
    swindow.appendChild(keyboard_cont);
    spawnBTNS(); 
    function spawnBTNS(){
        const container = document.getElementById("stp1_keyboard_cont");
        const letters = Store.stp1;
        function shuffleArray(array) {
            let shuffledArray = array.slice();
            for (let i = shuffledArray.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
            }
            return shuffledArray;
        }
        const new_array = shuffleArray(letters);
        const new_length = new_array.length;
        for(let pointer = 0; pointer < new_length; pointer ++){
            const btn = document.createElement("button");
            btn.innerHTML = new_array[pointer];
            btn.addEventListener("click", function(){
                type_letter(new_array[pointer]);
                //update divs
                if(Store.steps["0"].current_step == 0){
                    //firstname
                    document.getElementById("stp1_firstname").innerHTML = Store.steps["0"].firstname;
                }
                else{
                    document.getElementById("stp1_lastname").innerHTML = Store.steps["0"].lastname;
                }
            });
            container.appendChild(btn);
        }

        const btn = document.createElement("button");
        btn.innerHTML = "OK";
        btn.addEventListener("click",function(){
            Store.steps["0"].current_step = Store.steps["0"].current_step + 1;
        });
        container.appendChild(btn);


    }
    function type_letter(letter){
        if(Store.steps["0"].current_step == 0){
            //add to firstname
            Store.steps["0"].firstname = Store.steps["0"].firstname.concat(letter);
        }
        else{
            //add to lastname
            Store.steps["0"].lastname = Store.steps["0"].lastname.concat(letter);
        }
        document.getElementById("stp1_keyboard_cont").innerHTML = "";
        spawnBTNS();

    }

}