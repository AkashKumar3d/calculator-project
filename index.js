let  string= "";// blank string banaya input ke liye 
// saare button lo select kiya query selector ki madat se
let buttons=document.querySelectorAll('.button');
// fir ek array banaya and usame foreach loop lagaya 
Array.from(buttons).forEach((button)=>{
  // fir add event listner lagaya and ek fnction banaya 
  button.addEventListener('click', (e)=>{
    // agar hamare inner html mai usako if condition laga ke target kar liya 
    if(e.target.innerHTML == "="){
      // input ke ander ke value ko evaluate kar lega 
      string=eval(string);
      // calculate karane ke baad input tag ke value ke string ke baraber kar dega 
         document.querySelector('input').value=string;
    }
      // agar koe clear karne ke liye clear button pe click karega to ye condition true ho jayega 
      else if(e.target.innerHTML == "C"){
      string=" ";
         document.querySelector('input').value=string;
    }
    else {
      console.log(e.target);
    string=string + e.target.innerHTML;
    document.querySelector('input').value=string;
    }
  })
})