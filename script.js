let picturesList = document.querySelectorAll(".profile-card")

    window.addEventListener("scroll", function() {
        
            for (var i = 0; i < picturesList.length; i++) {

                var distanceInFrame = picturesList[i].getBoundingClientRect().top - window.innerHeight;

                if (distanceInFrame < 100) {
                    picturesList[i].style.marginTop = "0px"
                } 
                else if (distanceInFrame > 100 - window.innerHeight) {
                    let random = Math.floor(Math.random() * 150) + 70;
                    console.log(random + " " + [i])
                    picturesList[i].style.marginTop = random+"px"
                }   
            }
            
        })

       
        


    
