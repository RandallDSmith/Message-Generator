let jokeNum = Math.floor(Math.random() * 10) + 1;

const joke = jokeNum => {

    switch (jokeNum) {
        case 1:
            console.log('Why was Cinderella so bad at soccer?');
            setTimeout(() => console.log('She kept running away from the ball!'), 2000);
            break;
        case 2:
            console.log('What did the horse say after it tripped?');
            setTimeout(() => console.log('Help! I\'\ve fallen and I can\'\t giddyup!'),2000);
            break;
        case 3:
            console.log('Why can\'\t you hear a pterodactyl going to the bathroom?');
            setTimeout(() => console.log('Because the "P" is silent'), 2000);
            break;
        case 4:
            console.log('What do you call a well-balance horse?');
            setTimeout(() => console.log('Stable'), 2000);
            break;
        case 5:
            console.log('Where do polar bears keep their money?');
            setTimeout(() => console.log('In a snowbank'), 2000);
            break;
        case 6:
            console.log('What do you call an angry carrot?');
            setTimeout(() => console.log('A steamed veggie'), 2000);
            break;
        case 7:
            console.log('How do you make an egg-roll?');
            setTimeout(() => console.log('You push it!'), 2000);
            break;
        case 8:
            console.log('What would bears be without bees?');
            setTimeout(() => console.log('Ears'), 2000);
            break;
        case 9:
            console.log('What do you call a pile of cats?');
            setTimeout(() =>  console.log('A meow-ntain.'), 2000);
            break;
        case 10:
            console.log('Why do cows wear bells?');
            setTimeout(() => console.log('Because their horns don\'\t work'), 2000);
        default:
            break;
    }
};