let inp=document.getElementsByTagName('input')[1];
let txt=document.getElementsByTagName('textarea')[0];
let sect=document.getElementsByClassName('sect2')[0];
let formin=document.getElementsByClassName('formin')[0];
let form=document.getElementsByClassName('form2');
let ansres=document.createElement('div');
ansres.setAttribute('class','ansres');
let pucha=document.createElement('span');
let btaya=document.createElement('span');
let resin=document.createElement('input');
let restext=document.createElement('textarea');
let upper=document.createElement('div');
upper.setAttribute('class','upper');
let lower=document.createElement('div');
let z=0;
let searchinp=document.getElementsByTagName('input');
searchinp[0].addEventListener('input',search);

function defaul(){
    let def=JSON.parse(localStorage.getItem('questions'));
    if(def==null)
        return;
    else{
        for(let i=0;i<def.length;i++){
            let check;
            let q=document.createElement('div');
            q.setAttribute('onclick','x(this)');
            q.setAttribute('id',def[i][0]);  
            q.setAttribute('class','subquest');
            let sub=document.createElement('span');
            sub.setAttribute('class','upsub');
            let qstate=document.createElement('span'); 
            sub.innerText=def[i][1];
            qstate.innerText=def[i][2];
            let x=document.createElement('span');
        let y=document.createElement('span');
            let n=def[i][0];
            x.innerText=def[i][3][1];
            y.innerText=def[i][3][2];

        let extra=document.createElement('div');
        extra.setAttribute('class','extra');
        let star=document.createElement('span');
        star.setAttribute('class',"fa fa-star");
        star.setAttribute('id',n);
        star.setAttribute('onclick','starit(this)');
        if(def[i][3][0]==1){
            star.setAttribute('style','color:#ffe000');
            check=1;
        }
        else{ 
            star.setAttribute('style','color:black');
            check=0;
        }

        let thumbsup=document.createElement('div');
        thumbsup.setAttribute('class','thumbsup');
        let thumbsdown=document.createElement('div');
        thumbsdown.setAttribute('class','thumbsup');

        let thup=document.createElement('i');
        thup.setAttribute('id',n);
        thup.setAttribute('onclick','tup(this)');
        thup.setAttribute('class','fa fa-thumbs-up');
        thup.setAttribute('aria-hidden','true');
        thumbsup.appendChild(thup);
        thumbsup.appendChild(x);
        let thdown=document.createElement('i');
        thdown.setAttribute('class','fa fa-thumbs-down');
        thdown.setAttribute('aria-hidden','true');
        thdown.setAttribute('id',n);
        thdown.setAttribute('onclick','tdown(this)');
        thumbsdown.appendChild(thdown);
        thumbsdown.appendChild(y);
        extra.appendChild(star);
        extra.appendChild(thumbsup);
        extra.appendChild(thumbsdown);

        let dono=document.createElement('div');
        dono.setAttribute('class','qe');
        dono.appendChild(sub);
        dono.appendChild(qstate);

        let timing=document.createElement('div');
        let ti=document.createElement('span');
        ti.setAttribute('class','setT');
        ti.setAttribute('id',def[i][0]);
        timing.appendChild(ti);
            q.appendChild(dono);
            q.appendChild(timing);
            q.appendChild(extra);

            if(check==1){
                upper.appendChild(q);
            }
            else lower.appendChild(q);
            sect.appendChild(upper); 
            sect.appendChild(lower);
        }
    }
}
defaul();

function abc(){
    let quest=localStorage.getItem('questions');
    if(quest==null){
        var sto=[];
    }
    else{
    sto=JSON.parse(localStorage.getItem('questions'));
    }
    let inpval=inp.value;
    let txtval=txt.value;
        if(txtval=="" || inpval=="")return;
        let n=new Date().getTime();
        let m=new Date().getTime();
        let quesob=[n,inpval,txtval,[0,0,0]];
        sto.push(quesob);
        localStorage.setItem('questions',JSON.stringify(sto));
        txt.value=null;
        inp.value=null;
        
        let q=document.createElement('div');
        let qe=document.createElement('div');
        qe.setAttribute('class','qe');


        let extra=document.createElement('div');
        extra.setAttribute('class','extra');
        let star=document.createElement('span');
        star.setAttribute('class',"fa fa-star");
        star.setAttribute('id',n);
        star.setAttribute('onclick','starit(this)');
        let i=0;
        let j=0;
        let x=document.createElement('span');
        let y=document.createElement('span');
        x.innerText=i;
        y.innerText=j;
        let thumbsup=document.createElement('div');
        thumbsup.setAttribute('class','thumbsup');
        let thumbsdown=document.createElement('div');
        thumbsdown.setAttribute('class','thumbsup');
        let thup=document.createElement('i');
        thup.setAttribute('id',n);
        thup.setAttribute('class','fa fa-thumbs-up');
        thup.setAttribute('aria-hidden','true');
        thup.setAttribute('onclick','tup(this)');

        let thdown=document.createElement('i');
        thdown.setAttribute('class','fa fa-thumbs-down');
        thdown.setAttribute('aria-hidden','true');
        thdown.setAttribute('id',n);
        thdown.setAttribute('onclick','tdown(this)');
        thumbsup.appendChild(thup);
        thumbsup.appendChild(x);
        thumbsdown.appendChild(thdown);
        thumbsdown.appendChild(y);
        extra.appendChild(star);
        extra.appendChild(thumbsup);
        extra.appendChild(thumbsdown);


        q.setAttribute('id',n);
        q.setAttribute('class','subquest');
        let sub=document.createElement('span');
        let qstate=document.createElement('span'); 
        qstate.setAttribute('class','twrap');
        sub.innerText=inpval;
        qstate.innerText=txtval;
        sub.setAttribute('class','upsub');
        qe.appendChild(sub);
        qe.appendChild(qstate);

        let timing=document.createElement('div');
        let ti=document.createElement('span');
        ti.setAttribute('class',"setT");
        ti.setAttribute('id',m);
        timing.appendChild(ti);
        q.appendChild(qe);
        q.appendChild(timing);
        q.appendChild(extra);
        q.setAttribute('onclick',"x(this)");
        sect.appendChild(q);
}
 
function x(arg){
    z=0;
    formin.setAttribute('style','display:none');
    form[0].innerHTML=null;
    let s=JSON.parse(localStorage.getItem('questions'));
    let i;
    let idop=arg.id;
    for(i=0;i<s.length;i++){
        if(s[i][0]==arg.id){
            break;
        }
    }
    let x=s[i][1];
    let y=s[i][2];

    // spques qa but ko bhej diya form me

    let spques=document.createElement('span');
    spques.innerText="Question";
    spques.setAttribute('id','spques');
    let qa=document.createElement('div');
    qa.setAttribute('class','qa');
    pucha.setAttribute('class','upsub');
    pucha.innerText=x;
    btaya.innerText=y;
    btaya.setAttribute('class','twrap');
    qa.appendChild(spques);
    qa.appendChild(pucha);
    qa.appendChild(btaya);

    let but=document.createElement('div');
    but.setAttribute('class','but1');
    let resolvebut=document.createElement('button');
    resolvebut.setAttribute('id','resolvebut');
    resolvebut.setAttribute('onclick',`resolve(${idop})`);
    resolvebut.innerHTML="Resolve";
    but.appendChild(resolvebut);
    qa.appendChild(but);

    let addresponse=document.createElement('div');
    addresponse.setAttribute('class','addresponse');
    let reshead=document.createElement('span');
    reshead.innerHTML="Add Response";
    resin.setAttribute('placeholder','Enter Name');
    restext.setAttribute('placeholder','Enter Comment');
    let ressubmit=document.createElement('button');
    ressubmit.setAttribute('onclick',`answerstore(${idop})`);
    ressubmit.innerHTML="Submit";
    let resh=document.createElement('span');
    resh.setAttribute('class','reshead')
    resh.innerText="Responses :-";
    addresponse.appendChild(reshead);
    addresponse.appendChild(resin);
    addresponse.appendChild(restext);
    addresponse.appendChild(ressubmit);

    form[0].appendChild(qa);
    form[0].appendChild(resh);
    form[0].appendChild(ansres);
    form[0].appendChild(addresponse);
    ansres.innerHTML=null;
    answershow(idop);
}

function answerstore(id){
    ansres.innerHTML=null;
    let na=document.getElementsByTagName('input')[2];
    let co=document.getElementsByTagName('textarea')[1];
    let nameres=na.value;
    let commentres=co.value;
    if(nameres=="" || commentres=="")return;
    let obj=[nameres,commentres,[0,0,0],z];
    z++;
    na.value=null;
    co.value=null;
    let y=JSON.parse(localStorage.getItem('questions'));
    let m;
    for(m=0;m<y.length;m++){
        if(y[m][0]==id){
            y[m].push(obj);
            localStorage.setItem('questions',JSON.stringify(y));
            break;
        }
    }
    answershow(id);
}

function answershow(id){
    let y=JSON.parse(localStorage.getItem('questions'));
    let t;
    for(t=0;t<y.length;t++){
        if(y[t][0]==id)break;
    }
    

    for(m=4;m<y[t].length;m++){
        let jwb=document.createElement('div');
        jwb.setAttribute('class','jwb');
        let naam=document.createElement('span');
        let jawaab=document.createElement('span');
        naam.innerText=y[t][m][0];
        jawaab.innerText=y[t][m][1];
        jawaab.setAttribute('class','twrap');

        let thumbsup=document.createElement('div');
        let thumbsdown=document.createElement('div');
        thumbsup.setAttribute('class','thumbsup');
        thumbsdown.setAttribute('class','thumbsup');
        let thup=document.createElement('i');
        thup.setAttribute('class','fa fa-thumbs-up');
        thup.setAttribute('aria-hidden','true');
        let thdown=document.createElement('i');
        thdown.setAttribute('class','fa fa-thumbs-down');
        thdown.setAttribute('aria-hidden','true');
        let tup=document.createElement('span');
        let tdown=document.createElement('span');
        tup.innerText=y[t][m][2][0];
        tdown.innerText=y[t][m][2][1];
        thumbsup.appendChild(thup);
        thumbsup.appendChild(tup);
        thumbsdown.appendChild(thdown);
        thumbsdown.appendChild(tdown);
        let side=document.createElement('div');
        side.setAttribute('id',y[t][m][3]);
        thup.setAttribute('onclick',`reslike(${id},this.parentNode.parentNode)`);
        thdown.setAttribute('onclick',`resdislike(${id},this.parentNode.parentNode)`);
        side.setAttribute('class','side');
        side.appendChild(thumbsup);
        side.appendChild(thumbsdown);
        let imp=document.createElement('div');
        imp.setAttribute('class','imp');
        imp.appendChild(naam);
        imp.appendChild(jawaab);
        jwb.appendChild(imp);
        jwb.appendChild(side);
        ansres.appendChild(jwb);
    }
}

function newf(){
    formin.setAttribute('style','display:flex');
    form[0].innerHTML=null;
}

function resolve(idop){
    let s=JSON.parse(localStorage.getItem('questions'));
    let t;
    for(t=0;t<s.length;t++){
        if(s[t][0]==idop){
           s.splice(t,1);
        }
    }
    localStorage.setItem('questions',JSON.stringify(s));
    upper.innerHTML=null;
    lower.innerHTML=null;
    sect.innerHTML=null;
    newf();
    defaul();
}
function search(){
    let x=document.getElementById('qsearch');
    let needval=x.value.toLowerCase();
    let s=JSON.parse(localStorage.getItem('questions'));
    console.log(sect.children[1].children[0].children[0].children[1]);
    for(t=0;t<sect.children[1].children.length;t++){
        if(sect.children[1].children[t].children[0].children[1].textContent.toLowerCase().indexOf(needval)<0){
                sect.children[1].children[t].style.display="none";
            }
            else
           { 
            sect.children[1].children[t].style.display="flex";
                let regex = new RegExp(needval, 'gi');
            let highlightedText = sect.children[1].children[t].children[0].children[1].innerText.toLowerCase().replace(regex,(match) => {
              return `<span class="highlight">${match}</span>`;
            });
            sect.children[1].children[t].children[0].children[1].innerHTML = highlightedText;
        }
}
}
function starit(arg){
    let s=JSON.parse(localStorage.getItem('questions'));
    let t;
    for(t=0;t<s.length;t++){
        if(s[t][0]==arg.id){
            if(s[t][3][0]==0){
                s[t][3][0]=1;
                arg.setAttribute('style','color:#ffe000');
            }
            else {
                s[t][3][0]=0;
                arg.setAttribute('style','color:black');
            }
        }
    }
    localStorage.setItem('questions',JSON.stringify(s));
    sect.innerHTML=null;
    upper.innerHTML=null;
    lower.innerHTML=null;
    defaul();
}

function tup(arg){
    let s=JSON.parse(localStorage.getItem('questions'));
    let t;
    for(t=0;t<s.length;t++){
        if(s[t][0]==arg.id){
            s[t][3][1]++;
            arg.parentNode.children[1].innerHTML=s[t][3][1];
    }
}
    localStorage.setItem('questions',JSON.stringify(s));
}

function tdown(arg){
    let s=JSON.parse(localStorage.getItem('questions'));
    let t;
    for(t=0;t<s.length;t++){
        if(s[t][0]==arg.id){
            s[t][3][2]++;
            arg.parentNode.children[1].innerHTML=s[t][3][2];
    }
}
    localStorage.setItem('questions',JSON.stringify(s));
}

function reslike(id,arg){
    let s=JSON.parse(localStorage.getItem('questions'));
    let t,m;
    for(t=0;t<s.length;t++){
        if(s[t][0]==id){
            for(m=4;m<s[t].length;m++){
                if(s[t][m][3]==arg.id){
                        s[t][m][2][0]++;
                        s[t][m][2][2]=s[t][m][2][0]-s[t][m][2][1];
                    }
                }
            }
            sortres(s[t]);
        }
        localStorage.setItem('questions',JSON.stringify(s));
        ansres.innerHTML=null;
        answershow(id);
}

function resdislike(id,arg){
    let s=JSON.parse(localStorage.getItem('questions'));
    let t,m;
    for(t=0;t<s.length;t++){
        if(s[t][0]==id){
            for(m=4;m<s[t].length;m++){
                if(s[t][m][3]==arg.id){
                        s[t][m][2][1]++;
                        s[t][m][2][2]=s[t][m][2][0]-s[t][m][2][1];
                    }
                }
            }
            sortres(s[t]);
        }
        localStorage.setItem('questions',JSON.stringify(s));
        ansres.innerHTML=null;
        answershow(id);
}

function sortres(arg){
    const subArray= arg.slice(4);
    subArray.sort(function(a,b){return (b[2][2])-(a[2][2])});

    arg.splice(4,subArray.length,...subArray);

    return arg;
}






setInterval(Time, 1000);

function Time() {
    let tim = document.getElementsByClassName("setT");
    for (let m of tim) {
        m.textContent = getTime(m.id);
    }
}

function getTime(timestamp) {
    const now = new Date().getTime();
    const secondsSince = Math.floor((now - timestamp) / 1000);

    if (secondsSince < 60) {
        return `${secondsSince} second${secondsSince === 1 ? '' : 's'} ago`;
    }

    const minutesSince = Math.floor(secondsSince / 60);

    if (minutesSince < 60) {
        return `${minutesSince} minute${minutesSince === 1 ? '' : 's'} ago`;
    }

    const hoursSince = Math.floor(minutesSince / 60);

    if (hoursSince < 24) {
        return `${hoursSince} hour${hoursSince === 1 ? '' : 's'} ago`;
    }

    const daysSince = Math.floor(hoursSince / 24);

    if (daysSince < 7) {
        return `${daysSince} day${daysSince === 1 ? '' : 's'} ago`;
    }

    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });

    return `${month} ${date.getDate()}, ${year}`;
}