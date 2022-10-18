import self from "../img/self.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(55, 146, 225)", "rgb(2, 47, 136)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Matheus ",
    lastName: "Pontes Vilas Boas",
    initials: "mpvb",
    position: "Front-end developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🎮',
            text: '(semi)-professional gamer'
        },
        {
            emoji: '🌎',
            text: 'World traveller'
        },
        {
            emoji: "💼",
            text: "Front-end developer at Arpa Sistemas"
        },
        {
            emoji: "📧",
            text: "mpvilasboas2022@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://instagram.com/mppvbs",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/mppvbs",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/matheus-pontes-vilas-boas-632b531b8/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.twitch.tv/mpvilasboas",
            icon: "fa fa-twitch",
            label: 'twitch'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! My name is Matheus. I'm a jr front-end developer currently working with JavaScript, React JS, Tailwind and Storybook JS. I'm currently pursuing a bachelor's degree in Computer Science. I have lived in the Netherlands for five years, where I graduated high school and got myself an IB Dipploma.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'tailwind', 'html5', 'css3',],
            exposedTo: ['nodejs', 'python', 'typescript']
        }
    ,
    hobbies: [
        {
            label: 'gaming',
            emoji: '🎮'
        },
        {
            label: 'singing',
            emoji: '🎤'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🍳'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ]
}