const easyvk = require('easyvk');


  
const setStatus = async () => {
    console.log("do");
  const vk = await easyvk({
    username: "89043270137",
    password: "rorotan553",
    save_session: false
  });

  console.error;

   //SENDING MESSAGE  
   let mess = await vk.call("messages.send", {
    user_id: 185014513,
    message: "Я начал работать"
  });

//CHANGE OF STATUS
//for(;;){ 
//   await sleep(60000);
   let response = await vk.call("status.set", {
     text: "time: " + (new Date(Date.now())).toString()
   });
//}

//GET CONVERSATIONS
/*
   let getMess = await vk.call("messages.getConversations", {
    filter: "unread"
   });
   console.log(getMess);
*/


//CREATING A CHAT   
    let chat = await vk.call("messages.createChat",{   
        user_ids: "316816996, 316800541",
        title: "New chat"
    });

//SEND CHAT MESSAGE
    let messChat = await vk.call("messages.send", {
        chat_id: 6,
        message: "test messages"
    });


let history = await vk.call("messages.getHistory",{
    count: 22,
    user_id: 185014513
});



}

async function initTimeOut(){
  
   
  // for(;;){  
        console.log(1);
        //await sleep(3000)
        await setStatus();
        console.log(2);
   //}

}

function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

initTimeOut();
