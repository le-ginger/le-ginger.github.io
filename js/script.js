const languages = [ 'Javascript', 'HTML & CSS', 'Java', 'C++', 'C#', 'PHP', 'ASP.NET', 'NodeJS' ];
const langSkill = [ 86, 90, 80, 70, 80, 79, 85, 80 ];

$(document).ready(() => {
    console.log('loaded');

    for (let index = 0; index < languages.length; index++) {
        $('.skills-box').append(
        `
            <div class="row">
                <div class="skill-name ml-5 col-lg-4 mt-4 col-md-6 col-12">
                    ${languages[index]} 
                </div>
                <div class="skill-level col-lg-1 col-md-2 col-3">
                    <div class="count">
                        ${langSkill[index]}
                    </div>
                </div>
            </div>
        `);
        if ((index+1) != languages.length) {
            $('.skills-box').append(
                `
                <div class="divider">
                </div>
                `
            );
        }
    }

    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
})
