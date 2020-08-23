
// 看結果
var headerEvent= document.querySelector('.headerEvent');
headerEvent.addEventListener('click',BMIupdate);

// 抓取資料庫資料
var data = JSON.parse(localStorage.getItem('BMI')) || [];


// var title = document.querySelector('.title');
// title.addEventListener('click',function(){
//     console.log(data);
// })
// 插入點2
var content = document.querySelector('.content');
// 插入點
var load = document.querySelector('.load');

// Delete
var Delete = document.querySelector('.Delete');

// 動態更新看結果圖標
function BMIupdate(){
    // value抓到的值是字串 需用parseInt()轉成數字
    var typeCm = parseInt(document.querySelector('.headerCmText').value);
    var headerKg = parseInt(document.getElementById('headerCmText').value);
    var BMI = (headerKg / ((typeCm / 100) * (typeCm / 100)));
    
    // 四捨五入取小數後2位 .toFixed(2)
    BMI = BMI.toFixed(2);
    if (18.5 < BMI & BMI < 25){
        load.innerHTML = '<div class="headerEvent2">'+ 
                        '<h3>'+ BMI + '</h3>'+
                        '<p>' + 'BMI' + '</p>'+
                        '<div' + 'class="headerEvent2Img">'+
                            '<img' + 'src="img/loop.png" alt="">'+
                            '<h2>'+ '理想' + '</h2>'+
                        '</div>' +
                    '</div>';
    }
    else if(16 < BMI & BMI < 18.5){
        load.innerHTML = '<div class="headerEvent3">'+ 
                        '<h3>'+ BMI + '</h3>'+
                        '<p>' + 'BMI' + '</p>'+
                        '<div' + 'class="headerEvent3Img">'+
                            '<img' + 'src="img/loop.png" alt="">'+
                            '<h2>'+ '過輕' + '</h2>'+
                        '</div>' +
                    '</div>';
    }
    else if(25 < BMI & BMI < 30){
        load.innerHTML = '<div class="headerEvent4">'+ 
                        '<h3>'+ BMI + '</h3>'+
                        '<p>' + 'BMI' + '</p>'+
                        '<div' + 'class="headerEvent4Img">'+
                            '<img' + 'src="img/loop.png" alt="">'+
                            '<h2>'+ '過重' + '</h2>'+
                        '</div>' +
                    '</div>';
    }
    else if(30 < BMI & BMI < 35){
        load.innerHTML = '<div class="headerEvent5">'+ 
                        '<h3>'+ BMI + '</h3>'+
                        '<p>' + 'BMI' + '</p>'+
                        '<div' + 'class="headerEvent5Img">'+
                            '<img' + 'src="img/loop.png" alt="">'+
                            '<h2>'+ '輕度肥胖' + '</h2>'+
                        '</div>' +
                    '</div>';
    }
    else if(35 < BMI & BMI < 40){
        load.innerHTML = '<div class="headerEvent5">'+ 
                        '<h3>'+ BMI + '</h3>'+
                        '<p>' + 'BMI' + '</p>'+
                        '<div' + 'class="headerEvent5Img">'+
                            '<img' + 'src="img/loop.png" alt="">'+
                            '<h2>'+ '中度肥胖' + '</h2>'+
                        '</div>' +
                    '</div>';
    }
    else if(40 < BMI){
        load.innerHTML = '<div class="headerEvent6">'+ 
                        '<h3>'+ BMI + '</h3>'+
                        '<p>' + 'BMI' + '</p>'+
                        '<div' + 'class="headerEvent6Img">'+
                            '<img' + 'src="img/loop.png" alt="">'+
                            '<h2>'+ '重度肥胖' + '</h2>'+
                        '</div>' +
                    '</div>';
    }

    // 抓日期
    var date = new Date();

    // 日期資訊
    // console.log(date.getFullYear());
    // console.log(date.getMonth());
    // console.log(date.getDate());

    // 紀錄資料
    var myBmi = {
            Bmi : BMI,
            height : typeCm,
            weight : headerKg,
            FullYear : date.getFullYear(),
            Month : date.getMonth(),
            Date : date.getDate(),
        };
    // 新增資料至daat
    data.push(myBmi);

    // 更新html
    updata(data);

    // 將陣列轉字串 存資料庫
    var x = JSON.stringify(data)
    localStorage.setItem("BMI",x);
    
    
}

// 打開網頁即刻更新歷史資料
updata(data);

function updata(data){
    var len = data.length;
    var str = '';
    for(var i=0; i<len; i++){
    if (18.5 < data[i].Bmi & data[i].Bmi < 25){

        str +=
        '<ul class="load3">'+
            '<li><h2>理想</h2></li>'+
            '<li><p>BMI:</p><h3>' + data[i].Bmi + '</h3></li>'+
            '<li><p>weight:</p><h3>' + data[i].weight + '</h3></li>'+
            '<li><p>height:</p><h3>' + data[i].height + '</h3></li>'+
            '<li><p>' + (data[i].Month+1)+ '-' + data[i].Date + '-' + data[i].FullYear + '</p></li>'+
                
        '</ul>'
    
        content.innerHTML = str;
       
    }
    else if(16 < data[i].Bmi & data[i].Bmi < 18.5){
        str +=
        '<ul class="load3-1">'+
            '<li><h2>過輕</h2></li>'+
            '<li><p>BMI:</p><h3>' + data[i].Bmi + '</h3></li>'+
            '<li><p>weight:</p><h3>' + data[i].weight + '</h3></li>'+
            '<li><p>height:</p><h3>' + data[i].height + '</h3></li>'+
            '<li><p>' + (data[i].Month+1)+ '-' + data[i].Date + '-' + data[i].FullYear + '</p></li>'+
                
        '</ul>'
    
        content.innerHTML = str;
    }
    else if(25 < data[i].Bmi & data[i].Bmi < 30){
        str +=
        '<ul class="load3-2">'+
            '<li><h2>過重</h2></li>'+
            '<li><p>BMI:</p><h3>' + data[i].Bmi + '</h3></li>'+
            '<li><p>weight:</p><h3>' + data[i].weight + '</h3></li>'+
            '<li><p>height:</p><h3>' + data[i].height + '</h3></li>'+
            '<li><p>' + (data[i].Month+1)+ '-' + data[i].Date + '-' + data[i].FullYear + '</p></li>'+
                
        '</ul>'
    
        content.innerHTML = str;    
    }
    else if(30 < data[i].Bmi & data[i].Bmi < 35){
        str +=
        '<ul class="load3-3">'+
            '<li><h2>輕度肥胖</h2></li>'+
            '<li><p>BMI:</p><h3>' + data[i].Bmi + '</h3></li>'+
            '<li><p>weight:</p><h3>' + data[i].weight + '</h3></li>'+
            '<li><p>height:</p><h3>' + data[i].height + '</h3></li>'+
            '<li><p>' + (data[i].Month+1)+ '-' + data[i].Date + '-' + data[i].FullYear + '</p></li>'+
                
        '</ul>'
    
        content.innerHTML = str;    
    }
    else if(35 < data[i].Bmi & data[i].Bmi < 40){
        str +=
        '<ul class="load3-3">'+
            '<li><h2>中度肥胖</h2></li>'+
            '<li><p>BMI:</p><h3>' + data[i].Bmi + '</h3></li>'+
            '<li><p>weight:</p><h3>' + data[i].weight + '</h3></li>'+
            '<li><p>height:</p><h3>' + data[i].height + '</h3></li>'+
            '<li><p>' + (data[i].Month+1)+ '-' + data[i].Date + '-' + data[i].FullYear + '</p></li>'+
                
        '</ul>'
    
        content.innerHTML = str;
    }
    else if(40 < data[i].Bmi){
        str +=
        '<ul class="load3-5">'+
            '<li><h2>重度肥胖</h2></li>'+
            '<li><p>BMI:</p><h3>' + data[i].Bmi + '</h3></li>'+
            '<li><p>weight:</p><h3>' + data[i].weight + '</h3></li>'+
            '<li><p>height:</p><h3>' + data[i].height + '</h3></li>'+
            '<li><p>' + (data[i].Month+1)+ '-' + data[i].Date + '-' + data[i].FullYear + '</p></li>'+
                
        '</ul>'
    
        content.innerHTML = str;
        }
    }

}
// 清除資料
function Delete2(){
    // 讀取資料庫資料 轉回陣列
    var data = JSON.parse(localStorage.getItem('BMI'))
    var len = data.length;
    // 刪除陣列所有資料
    data.splice(0,len);
    var data = JSON.stringify(data);
    // 把空資料覆寫回資料庫
    localStorage.setItem("BMI",data);

    // 更新html
    var str = '';
    str +=''
    content.innerHTML = str;
    
}
Delete.addEventListener('click',Delete2);

