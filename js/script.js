const languages = [ 'Javascript', 'HTML & CSS', 'Java', 'C++', 'C#', 'PHP', 'ASP.NET', 'NodeJS' ];
const langSkill = [ 86, 80, 67, 67, 80, 69, 85, 80 ];
let skill_flag = false;



$(document).ready(() => {
    console.log('loaded');

    $('#to_top').click(() => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    $('#reddit').on('click', () => {
        console.log('reddit clicked');
        reddit_redirect()
    });

    $('#linkedin').on('click', () => {
        console.log('linkedin clicked');
        linkedin_click();
    });

    $('#github').on('click', () => {
        console.log('github clicked');
        github_click();
    });

    for (let index = 0; index < languages.length; index++) {
        $('.skills-box').append(
        `
            <div class="row">
                <div class="skill-name bar-description col-12">
                    <span class="skill-text">${languages[index]}</span>
                </div>
                
                <div class="skill-bar" style="width: ${langSkill[index]}%; height: 1vh;">
                    <div class="bar">
                        <span class="bar-info">${langSkill[index]}</span>
                    </div>
                </div>
            </div>
        `);
    }

    $('#button').click();

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


    $('.skills-div').hover(function() {
        console.log('hover');

        if (!skill_flag) {
            $(this).addClass('dark');
            $(this).removeClass('light');
            $('.bar').addClass('light');
            $('.bar').removeClass('dark');
            $('.skill-text').addClass('dark-text');
            $('.skill-text').removeClass('light-text');
            $('.bar-info').addClass('inverted-dark-text');
            $('.bar-info').removeClass('inverted-light-text');
        } else {
            $(this).addClass('light');
            $(this).removeClass('dark');
            $('.bar').addClass('dark');
            $('.bar').removeClass('light');
            $('.skill-text').addClass('light-text');
            $('.skill-text').removeClass('dark-text');
            $('.bar-info').addClass('inverted-light-text');
            $('.bar-info').removeClass('inverted-dark-text');
        }

        skill_flag = !skill_flag;
    });
    
})


function reddit_redirect() {
    window.location.href = 'https://www.reddit.com/user/R4NG3R_za/';
}

function linkedin_click() {
    window.location.href = 'https://www.linkedin.com/in/aiden-diederiks-3045801a5/';
}

function github_click () {
    window.location.href = 'https://github.com/le-ginger';
}
