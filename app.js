const P=`New York|United States|US|America/New_York|Americas
Los Angeles|United States|US|America/Los_Angeles|Americas
Toronto|Canada|CA|America/Toronto|Americas
Mexico City|Mexico|MX|America/Mexico_City|Americas
São Paulo|Brazil|BR|America/Sao_Paulo|Americas
Buenos Aires|Argentina|AR|America/Argentina/Buenos_Aires|Americas
London|United Kingdom|GB|Europe/London|Europe
Paris|France|FR|Europe/Paris|Europe
Berlin|Germany|DE|Europe/Berlin|Europe
Madrid|Spain|ES|Europe/Madrid|Europe
Rome|Italy|IT|Europe/Rome|Europe
Amsterdam|Netherlands|NL|Europe/Amsterdam|Europe
Stockholm|Sweden|SE|Europe/Stockholm|Europe
Istanbul|Türkiye|TR|Europe/Istanbul|Europe
Dubai|United Arab Emirates|AE|Asia/Dubai|Middle East
Tehran|Iran|IR|Asia/Tehran|Middle East
Riyadh|Saudi Arabia|SA|Asia/Riyadh|Middle East
Doha|Qatar|QA|Asia/Qatar|Middle East
Cairo|Egypt|EG|Africa/Cairo|Africa
Lagos|Nigeria|NG|Africa/Lagos|Africa
Nairobi|Kenya|KE|Africa/Nairobi|Africa
Cape Town|South Africa|ZA|Africa/Johannesburg|Africa
Casablanca|Morocco|MA|Africa/Casablanca|Africa
Tokyo|Japan|JP|Asia/Tokyo|Asia Pacific
Seoul|South Korea|KR|Asia/Seoul|Asia Pacific
Beijing|China|CN|Asia/Shanghai|Asia Pacific
Singapore|Singapore|SG|Asia/Singapore|Asia Pacific
Bangkok|Thailand|TH|Asia/Bangkok|Asia Pacific
Jakarta|Indonesia|ID|Asia/Jakarta|Asia Pacific
Mumbai|India|IN|Asia/Kolkata|Asia Pacific
Karachi|Pakistan|PK|Asia/Karachi|Asia Pacific
Dhaka|Bangladesh|BD|Asia/Dhaka|Asia Pacific
Sydney|Australia|AU|Australia/Sydney|Asia Pacific
Perth|Australia|AU|Australia/Perth|Asia Pacific
Auckland|New Zealand|NZ|Pacific/Auckland|Asia Pacific`.split('\n').map(x=>{const[city,country,code,zone,region]=x.split('|');return{city,country,code,zone,region}}),C={en:{clocks:'World clocks',about:'About',eyebrow:'THE WORLD, RIGHT ON TIME',line1:'Every city.',line2:'One moment.',lead:'A beautifully simple world clock for teams, travelers, and everyone across time zones.',cta:'Explore the world ↓',local:'YOUR LOCAL TIME',label:'WORLD CLOCKS',title:'Time, everywhere.',desc:'Search cities and countries. Accurate, live, and always in sync.',search:'Search city or country…',more:'Show more clocks ＋',made:'MADE FOR REAL LIFE',sync:'Built to keep you in sync.',accurate:'Always accurate',accurateP:'Automatic daylight-saving updates powered by your browser.',find:'Find anywhere',findP:'Search cities and countries and filter by global region.',night:'Day or night',nightP:'Know whether the sun is up before you call.',footer:'Time connects us all.'},fa:{clocks:'ساعت‌های جهان',about:'درباره',eyebrow:'جهان، دقیق و به‌موقع',line1:'هر شهر.',line2:'یک لحظه.',lead:'ساعتی زیبا و ساده برای تیم‌ها، مسافران و همه‌ی کسانی که میان منطقه‌های زمانی زندگی می‌کنند.',cta:'سفر در زمان ↓',local:'زمان محلی شما',label:'ساعت‌های جهان',title:'زمان، در هر نقطه.',desc:'شهرها و کشورها را جست‌وجو کنید؛ دقیق، زنده و همیشه هماهنگ.',search:'جست‌وجوی شهر یا کشور…',more:'نمایش ساعت‌های بیشتر ＋',made:'برای زندگی واقعی',sync:'برای هماهنگ ماندن ساخته شده.',accurate:'همیشه دقیق',accurateP:'تنظیم خودکار ساعت تابستانی با مرورگر شما.',find:'هرجا را پیدا کن',findP:'شهرها را جست‌وجو و بر اساس منطقه فیلتر کنید.',night:'روز یا شب',nightP:'پیش از تماس، روز یا شب بودن مقصد را ببینید.',footer:'زمان، همه‌ی ما را به هم متصل می‌کند.'}};let lang='en',region='All',limit=12,q='';const $=s=>document.querySelector(s),flag=c=>[...c].map(x=>String.fromCodePoint(127397+x.charCodeAt(0))).join(''),time=(d,z,s=false)=>new Intl.DateTimeFormat('en-GB',{timeZone:z,hour:'2-digit',minute:'2-digit',second:s?'2-digit':undefined,hour12:false}).format(d),date=(d,z)=>new Intl.DateTimeFormat('en-US',{timeZone:z,weekday:'short',month:'short',day:'numeric'}).format(d);function render(){const d=new Date(),list=P.filter(p=>(region==='All'||p.region===region)&&(p.city+' '+p.country).toLowerCase().includes(q));$('#local').textContent=time(d,Intl.DateTimeFormat().resolvedOptions().timeZone,true);$('#grid').innerHTML=list.slice(0,limit).map(p=>{const h=+new Intl.DateTimeFormat('en',{timeZone:p.zone,hour:'numeric',hourCycle:'h23'}).format(d);return `<article class="card"><div class="top"><span class="flag">${flag(p.code)}</span><span>${h>6&&h<19?(lang==='fa'?'روز':'Day'):(lang==='fa'?'شب':'Night')}</span></div><div class="time">${time(d,p.zone)}</div><h3>${p.city}</h3><p>${p.country}</p><p class="date">${date(d,p.zone)}</p></article>`}).join('');$('#more').style.display=limit<list.length?'block':'none';$('#ticker').innerHTML=P.slice(0,8).map(p=>`<span>${flag(p.code)} ${p.city} · ${time(d,p.zone)}</span>`).join('')}function translate(){const t=C[lang];document.documentElement.lang=lang;document.documentElement.dir=lang==='fa'?'rtl':'ltr';document.querySelectorAll('[data-i]').forEach(e=>e.textContent=t[e.dataset.i]);document.querySelectorAll('[data-placeholder]').forEach(e=>e.placeholder=t[e.dataset.placeholder]);$('#lang').textContent=lang==='en'?'فا':'EN';render()}['All','Americas','Europe','Middle East','Africa','Asia Pacific'].forEach(r=>{const b=document.createElement('button');b.textContent=r;b.className=r==='All'?'on':'';b.onclick=()=>{region=r;limit=12;document.querySelectorAll('#filters button').forEach(x=>x.classList.toggle('on',x===b));render()};$('#filters').append(b)});$('#search').oninput=e=>{q=e.target.value.toLowerCase();limit=12;render()};$('#more').onclick=()=>{limit+=12;render()};$('#lang').onclick=()=>{lang=lang==='en'?'fa':'en';translate()};$('#theme').onclick=()=>document.body.classList.toggle('light');$('#year').textContent=new Date().getFullYear();translate();setInterval(render,1000);
