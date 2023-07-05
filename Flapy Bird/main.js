let move_speed = 3, grativy = 0.5;
let bird = document.querySelector('.bird');
let img = document.getElementById('bird-1');

let bird_props = bird.getBoundingClientRect();

let background = document.querySelector('.background').getBoundingClientRect();
let score_val = document.querySelector('.score_val');
let message = document.querySelector('.message');
let score_title = document.querySelector('.score_title');

let game_state = 'Start';
img.style.display = 'none';
message.classList.add('messageStyle');

document.addEventListener('keydown', (e) => {
    if (e.key == 'Enter' && game_state != 'Play') {
        document.querySelectorAll('.pipe_sqrite').forEach((e) => {
            e.remove();
        });
        img.style.display = 'block';
        bird.style.top = '40vh';
        game_state = 'Play';
        message.innerHTML = '';
        score_title.innerHTML = 'Score: ';
        score_val.innerHTML = '0';
        message.classList.remove('messageStyle');
        play();
    }
});

function play() {
    function move() {
        if (game_state != 'Play') return;

        let pipe_sqrite = document.querySelectorAll('.pipe_sqrite');
        pipe_sqrite.forEach((element) => {
            let pipe_sqrite_props = element.getBoundingClientRect();

            if (pipe_sqrite_props.right <= 0) {
                element.remove();
            } else {
                if (
                    bird_props.left < pipe_sqrite_props.left + pipe_sqrite_props.width &&
                    bird_props.left + bird_props.width > pipe_sqrite_props.left &&
                    bird_props.top < pipe_sqrite_props.top + pipe_sqrite_props.height &&
                    bird_props.top + bird_props.height > pipe_sqrite_props.top
                ) {
                    game_state = 'End';
                    message.innerHTML =
                        'Game Over'.fontcolor('red') + '<br>Press Enter to Restart';
                    message.classList.add('messageStyle');
                    img.style.display = 'none';
                    return;
                } else {
                    if (
                        pipe_sqrite_props.right < bird_props.left &&
                        pipe_sqrite_props.right + move_speed >= bird_props.left &&
                        element.increase_score == '1'
                    ) {
                        score_val.innerHTML = +score_val.innerHTML + 1;
                        element.increase_score = '0';
                    }
                    element.style.left = pipe_sqrite_props.left - move_speed + 'px';
                }
            }
        });
        requestAnimationFrame(move);
    }

    requestAnimationFrame(move);

    let bird_dy = 0;
    function apply_gravity() {
        if (game_state != 'Play') return;
        bird_dy = bird_dy + grativy;
        document.addEventListener('keydown', (e) => {
            if (e.key == 'ArrowUp' || e.key == ' ') {
                img.src = 'Images/Bird-2.png';
                bird_dy = -7.6;
            }
        });
        document.addEventListener('keyup', (e) => {
            if (e.key == 'ArrowUp' || e.key == ' ') {
                img.src = 'Images/Bird-1.png';
            }
        });

        if (bird_props.top <= 0 || bird_props.bottom >= background.bottom) {
            game_state = 'End';
            message.style.left = '28vw';
            window.location.reload();
            message.classList.remove('messageStyle');
            return;
        }
        bird.style.top = bird_props.top + bird_dy + 'px';
        bird_props = bird.getBoundingClientRect();
        requestAnimationFrame(apply_gravity);
    }
    requestAnimationFrame(apply_gravity);
    let pipe_seperation = 0;
    let pipe_gap = 35;

    function create_pipe() {
        if (game_state != 'Play') return;

        if (pipe_seperation > 115) {
            pipe_seperation = 0;
            let pipe_posi = Math.floor(Math.random() * 43) + 8;
            let pipe_sqrite_inv = document.createElement('div');
            pipe_sqrite_inv.className = 'pipe_sqrite';
            pipe_sqrite_inv.style.top = pipe_posi - 70 + 'vh';
            pipe_sqrite_inv.style.left = '100vw';

            document.body.appendChild(pipe_sqrite_inv);
            let pipe_sqrite = document.createElement('div');
            pipe_sqrite.className = 'pipe_sqrite';
            pipe_sqrite.style.top = pipe_posi + pipe_gap + 'vh';
            pipe_sqrite.style.left = '100vw';
            pipe_sqrite.increase_score = '1';

            document.body.appendChild(pipe_sqrite);
        }
        pipe_seperation++;
        requestAnimationFrame(create_pipe);
    }
    requestAnimationFrame(create_pipe);
}

