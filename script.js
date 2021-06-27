let title = document.createElement('title');
title.innerHTML = 'Page';
document.head.appendChild(title);

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute ('charset', 'UTF-8');
document.head.appendChild(metaUtf8);

document.querySelector('html').getAttribute('lang', 'en'); //???

let h1 = document.createElement ('h1');
h1.classList.add('header');
h1.innerHTML = 'Choose Your Option';
document.body.appendChild(h1);

let p1 = document.createElement ('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p1.classList.add('discription')
document.body.appendChild(p1);

let div4 = document.createElement('div');
div4.classList.add('header_information');
document.body.appendChild(div4);
div4.appendChild(h1);
div4.appendChild(p1);

let p2 = document.createElement ('p');
p2.innerHTML = 'FREELANCER';
p2.classList.add('information')
document.body.appendChild(p2);

let h2_1 = document.createElement ('h2');
h2_1.classList.add('inf_title');
h2_1.innerHTML = 'Initially <br> designed to ';
document.body.appendChild(h2_1);

let p3 = document.createElement ('p');
p3.innerHTML = 'But I must explain to you how all this <br> mistaken idea of denouncing ';
p3.classList.add('discription')
document.body.appendChild(p3);

let button1 = document.createElement ('button');
button1.classList.add('btn');
button1.innerHTML = 'Start here';
document.body.appendChild(button1);

let div1 = document.createElement('div');
div1.classList.add('block_information1');
document.body.appendChild (div1);
div1.appendChild(p2);
div1.appendChild(h2_1);
div1.appendChild(p3);
div1.appendChild(button1);

let p4 = document.createElement ('p');
p4.innerHTML = 'STUDIO';
p4.classList.add('information');
document.body.appendChild(p4);

let h2_2 = document.createElement ('h2');
h2_2.classList.add('inf_title');
h2_2.innerHTML = 'Initially <br> designed to ';
document.body.appendChild(h2_2);

let p5 = document.createElement ('p');
p5.innerHTML = 'But I must explain to you how all this <br> mistaken idea of denouncing ';
p5.classList.add('discription');
document.body.appendChild(p5);

let button2 = document.createElement ('button');
button2.classList.add('btn');
button2.innerHTML = 'Start here';
document.body.appendChild(button2);

let div2 = document.createElement('div');
div2.classList.add('block_information2');
document.body.appendChild (div2);
div2.appendChild(p4);
div2.appendChild(h2_2);
div2.appendChild(p5);
div2.appendChild(button2);

let div3 = document.createElement('div');
div3.classList.add('block_information');
document.body.appendChild (div3);
div3.appendChild(div1);
div3.appendChild(div2);

document.body.classList.add('container');

let style = document.createElement('style');
style.innerHTML =`
    *{
        padding: 0;
        margin: 0;
    }
    .container{
        max-width: 1280px;
        width: 80%;
        margin: 0 auto;
        height: 900px;
    }
    body{
        font-family: 'Arvo', serif;
    }
    .header_information{
        display: flex;       
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 300px;
    }
    .header{
        font-size: 44px;
        line-height: 48px;
        font-weight: normal;
    }
    .discription{
        font-size: 14px;
        line-height: 26px;
        margin-top: 35px;
        color: #9FA3A7;
    }
    .block_information{
        display: flex;
        border: 1px solid #9FA3A7;
        border-radius: 5px;
        height: 500px;
        width: 800px;
        margin: 0 auto;
        
    }
    .block_information1,
    .block_information2{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        
    }
    .block_information2{
        background-color: #8F75BE;        
    }

    .information{
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        text-transform: uppercase;
        margin-bottom: 20px;
        letter-spacing: 2.4px;
    }
    .block_information1 .information{
        color: #9FA3A7;
    }
    .block_information2 .information{
        color: #FFC80A;
    }
    .inf_title{
        font-size: 36px;
        line-height: 46px;
        font-style: normal;
        font-weight: normal;
        margin-bottom: 30px;
        text-align: center;
    }
    .block_information2 .inf_title,
    .block_information2 .discription{
        color: #fff;
    }
    .block_information .discription{
        text-align: center;
    }
    .btn{
        font-family: 'Arvo', serif;
        margin-top: 60px;
        width: 176px;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        text-transform: uppercase;
        background-color: white;
        border: 4px solid #FFC80A;
        padding: 25px 0;
        border-radius: 55px;
        letter-spacing: 2.4px;
    }
    .block_information2 .btn{
        color: white;
        background-color: #8F75BE;
    }
    .btn:hover{
        opacity: 0.5;
        cursor: pointer;
    }
`;
document.head.appendChild(style);