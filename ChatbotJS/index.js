function init() {
    let res_elm = document.createElement("div");
    res_elm.innerHTML = "Hello Myself Eddie, How can I help you?"
    res_elm.setAttribute("class","left");

    document.getElementById('msg').appendChild(res_elm);
}

document.getElementById('reply').addEventListener("click", async (e) => {
    e.preventDefault();

    let req = document.getElementById('msg_send').value;
    
    if (req == undefined || req== "") {
 alert("Type message")
    }
    else{
        switch (req) {
            case "hi":
               alert("hi")
                break;
        
            default:
                break;
        }
       
    }

    let data_req = document.createElement('div');
    let data_res = document.createElement('div');

    let container1 = document.createElement('div');
    let container2 = document.createElement('div');

    container1.setAttribute("class", "msgCon1");
    container2.setAttribute("class", "msgCon2");

    data_req.innerHTML = req;
    data_res.innerHTML = res;

    data_req.setAttribute("class", "right");
    data_res.setAttribute("class", "left");

    let message = document.getElementById('msg');

    message.appendChild(container1);
    message.appendChild(container2);

    container1.appendChild(data_req);
    container1.appendChild(data_res);

    document.getElementById('msg_send').value = "";

    function scroll() {
        let scrollMsg = document.getElementById('msg')
        scrollingMsg.scrollTop = scrollMsg.scrollHeight;
    }
    scroll();
}
);