var json = [
    {
        "question": "메롱",
        "answer": "메롱이다멍!"
        }
    ];


var question = "";
var answer = "";
var key = 0;

function checkText() {
    var value = document.getElementById("console").value;
    var reply = document.getElementById("dogConsole");
    var back = document.getElementById("back");
    var reset = document.getElementById("console").value = null;
    var audio = new Audio('mung.mp3');
    audio.play();

    if (value == 0) {
        reply.innerHTML = ".....";
        setTimeout(function () {
            reply.innerHTML = "할 말을 적어달라멍!";
        }, 1000);
    } else {
        console.log(value);
        reset;
        reply.innerHTML = ".....";
        if (value.includes("불꺼") || value.includes("불끄")) {
            setTimeout(function () {
                reply.innerHTML = "알겠다멍!";
                back.classList.add('blackBack');
            }, 1000);
            return;
        }
        if (value.includes("불켜") || value.includes("불키")) {
            setTimeout(function () {
                reply.innerHTML = "알겠다멍!";
                back.classList.remove('blackBack');
            }, 1000);
            return;
        }
        if (value.includes("안녕")) {
            setTimeout(function () {
                reply.innerHTML = "안녕하멍!";
            }, 1000);
            return;
        }
        if (value.includes("반가") || value.includes("반갑") || value.includes("방가")) {
            setTimeout(function () {
                reply.innerHTML = "나도 반갑다멍!";
            }, 1000);
            return;
        }
        if (value.includes("뭐해") || value.includes("뭐하")) {
            setTimeout(function () {
                reply.innerHTML = "니 생각한다멍~( ͡° ͜ʖ ͡° )";
            }, 1000);
            return;
        }

        if (value.includes("사랑")) {
            setTimeout(function () {
                reply.innerHTML = "나도 사랑한다멍!💕";
            }, 1000);
            return;
        }


        function randomItem(a) {
            return a[Math.floor(Math.random() * a.length)];
        }

        var hot = new Array('헥헥 너무 덥다멍!', '바다에 퐁당 빠지고 싶은 날씨다 멍!', '에어컨 발명가에게 감사한 나날들이다멍!', '수영하고 싶다 멍!');


        if (value.includes("더워") || value.includes("덥다") || value.includes("덥지") || value.includes("더운")) {
            setTimeout(function () {
                reply.innerHTML = randomItem(hot);
            }, 1000);
            return;
        }

        var now = new Date;
        var nowTime = now.getHours() + '시 ' + now.getMinutes() + '분';
        var time = new Array(nowTime + '이다멍!', '섹시~💋', '접시~~😉', '택시~🚖', '낚시~🐟');
        if (value.includes("몇 시") || value.includes("몇시") || value.includes("몇시야")) {
            setTimeout(function () {
                reply.innerHTML = randomItem(time);
            }, 1000);
            return;
        }

        if (key == 1) {
            if (value == "응") {
                setTimeout(function () {
                    reply.innerHTML = "대답을 입력해 달라 멍!";
                }, 1000);
                key = 2;
            } else {
                setTimeout(function () {
                    reply.innerHTML = "할 말을 적어달라멍!";
                }, 1000);
                key = 0;
            }
            return;
        }
        if (key == 2) {
            setTimeout(function () {
                reply.innerHTML = "말을 배웠다 멍!";
            }, 1000);
            answer = value; //전역변수 answer값에 사용자의 입력을 저장
            json.push({
                question: `${question}`,
                answer: `${answer}`
            }); //json이라는 데이터에 값을 추가하는 push함수
            key = 0; //키 값 0으로 초기화
            return;
        }

        var i = 0;
        for (i = 0; i < json.length; i++) {
            if (value == json[i].question) {
                setTimeout(function () {
                    reply.innerHTML = json[i].answer;
                }, 1000);
                return;
            }
        }


        setTimeout(function () {
            reply.innerHTML = "말을 가르쳐 주겠냐멍?<br> <small>(응 or 아니)</small>";
        }, 1000);
        question = value;
        key = 1;
        return;
    }
}





function mouse() {
    var button = document.getElementById("button");
    button.classList.add('buttonHover');
}

function mouseout() {
    var button = document.getElementById("button");
    button.classList.remove('buttonHover');
}
