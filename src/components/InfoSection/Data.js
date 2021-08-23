import svg1 from '../../images/svg-1.svg';
import svg2 from '../../images/svg-2.svg';
import svg3 from '../../images/svg-3.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,    
    lightText: true,
    lightTextDesc: true, 
    topLine: 'Premium Ban',
    headLine: 'Unlimited Transactions with zero fees',
    description: 'Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada.',
    buttonLabel: 'Get started',
    imgStart: false,
    // img: require('../../images/svg-1.svg'),
    img: svg1,
    alt: 'Car',   
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,    
    lightText: false,
    lightTextDesc: false, 
    topLine: 'unlimited Access',
    headLine: 'Unlimited Transactions with zero fees',
    description: 'Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada.',
    buttonLabel: 'Learn More',
    imgStart: true,
    // img: require('../../images/svg-1.svg'),
    img: svg2,
    alt: 'Car',   
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,    
    lightText: false,
    lightTextDesc: false, 
    topLine: 'Join our Team',
    headLine: 'Creative Unlimited Transactions with zero fees',
    description: 'Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada.',
    buttonLabel: 'Get started',
    imgStart: false,
    // img: require('../../images/svg-1.svg'),
    img: svg3,
    alt: 'Car',   
    dark: false,
    primary: false,
    darkText: true
};