let modal_stars = document.querySelector(".modal-stars"),
    stars = document.querySelectorAll(".fa-star"), flag_star = false,
    stars_content = document.querySelector(".stars-content"),
    stars_h2 = document.querySelectorAll(".stars-result"), flag_h2 = false, h2_num,
    emoji = document.querySelectorAll(".fa-xl"),
    btn_send = document.querySelector(".send-review"),
    modal_review = document.querySelector(".modal-review")

for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener('mouseover', function () {
        if (flag_star === false) {
            stars[i].style.opacity = "1";
        }
    });
    stars[i].addEventListener('mouseout', function () {
        if (flag_star === false) {
            stars[i].style.opacity = "0.1";
        }
    });
    if (i > 0) {
        for (let j = 0; j < i; j++) {
            stars[i].addEventListener('mouseover', function () {
                if (flag_star === false) {
                    stars[j].style.opacity = "1";
                }
            });
            stars[i].addEventListener('mouseout', function () {
                if (flag_star === false) {
                    stars[j].style.opacity = "0.1";
                }
            });
        }
    }
}
for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener('click', function () {
        stars[i].style.opacity = "1";
        flag_star = true;
    });
    if (i > 0) {
        for (let j = 0; j < i; j++) {
            stars[i].addEventListener('click', function () {
                stars[j].style.opacity = "1";
            });
        }
    }
    stars[i].addEventListener('click', function () {
        modal_stars.style.height = "300px";
        stars_content.style.display = "block";
        if (flag_h2 === false) {
            if (i >= 0 && i < 2) {
                stars_h2[0].style.display = "block";
                h2_num = 0;
            }
            else if (i >= 2 && i < 4) {
                stars_h2[1].style.display = "block";
                h2_num = 1;
            }
            else if (i === 4) {
                stars_h2[2].style.display = "block";
                h2_num = 2;
            }
            flag_h2 = true;
        }
    });
}

btn_send.addEventListener('click', function () {
    for (let i = 0; i < stars.length; i++) {
        stars[i].style.opacity = "0.1";
    }
    modal_stars.style.display = "none";
    modal_stars.style.height = "100px";
    stars_content.style.display = "none";
    modal_review.style.display = "block";
    flag_h2 = false;
    flag_star = false;
    stars_h2[h2_num].style.display = "none";
    document.querySelector(".experience").value = "";
});