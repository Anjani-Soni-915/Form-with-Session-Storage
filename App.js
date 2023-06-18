let form=document.getElementById('form')

        if(sessionStorage.getItem('username')&& sessionStorage.getItem('email') && sessionStorage.getItem('branch') && sessionStorage.getItem('year')){
            document.getElementById('username').value=sessionStorage.getItem('username')
            document.getElementById('email').value=sessionStorage.getItem('email')
            document.getElementById('branch').value=sessionStorage.getItem('branch')
            document.getElementById('year').value=sessionStorage.getItem('year')



        }
        form.addEventListener('submit',(e)=>{
            e.preventDefault()
            let username=document.getElementById('username').value 
            let email=document.getElementById('email').value
            let branch=document.getElementById('branch').value 
            let year=document.getElementById('year').value 



            sessionStorage.setItem('username',username)
            sessionStorage.setItem('email',email)
            sessionStorage.setItem('branch',branch)
            sessionStorage.setItem('year',year)


            alert("Your details are stored Successfully in a session storage!!");


        })


// var style=document.createElement('style');
// var position='right';

// style.innerHTML=`
// @keyframes my-animation{
//     0%{${position}:-${document.querySelector(".text").offsetWidth+10}px;}
//     100%{${position}:100%;}
// }`;

// document.head.append(style);


// import axios from 'axios';

// function App(){

//     return(
//     <div className='app'>
//         {/*<axios/>*/}
//         <axios/>
//     </div>
//     );
// }

// export default App;