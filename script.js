 const menuBtn=document.querySelector(".menu-btn");
        const menu=document.querySelector(".menu");
        menuBtn.onclick=()=>{
            menu.classList.toggle("active");
        };
        const texts=[
            "Frontend Developer",
            "Java Programmer",
            "DSA Learner",
            "Web Designer"
        ];
        let count=0;
        let index=0;
        let currentText="";
        let letter="";
        (function type(){
            if(count===texts.length){
                count=0;
            }
            currentText=texts[count];
            letter=currentText.slice(0,++index);
            document.getElementById("typing-text").textContent=letter;
            if(letter.length===currentText.length){
                count++;
                index=0;
                setTimeout(type,1200);
            }
            else{
                setTimeout(type,120);
            }
        })();
 
window.addEventListener("scroll",()=>{
            const navbar=document.querySelector(".navbar");
            if(window.scrollY>20){
                navbar.style.padding="15px 0";
                navbar.style.background="#0d0d0d";
            }
            else{
                navbar.style.padding="20px 0";
                navbar.style.background="transparent";
            }
        });

        const scrollBtn=document.querySelector(".scroll-up-btn");
        window.addEventListener("scroll",()=>{
            if(window.scrollY>500){
                scrollBtn.classList.add("show");
            }
            else{
                scrollBtn.classList.remove("show");
            }
        });
        
scrollBtn.onclick=()=>{
            window.scrollTo({
                top:0,
                behavior:"smooth"
            });
        };
