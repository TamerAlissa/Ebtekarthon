<<<<<<< HEAD
var  arrayData = []  ; 
 const  card =  document.getElementById("newMain") ;
const myH =new Headers();
my.append('Content-Type', 'application/json');

    fetch('http://localhost:3000/contact',{
        method:'GET', 
        headers : myH }) 
        .then( res => res.json())  .then((data) => { 
            arrayData = data ; 
            console.log(data) ; 
              rendercontact(); 
        });

        function rendercontact(){
            let r ="";
             console.log(arrayData);
             arrayData.forEach(a=> { 
        r +='<div class="col-lg-4 col-md-6">'+
        '<div class="contact-post"  >'+
         '<img src="./Ebtekarthon_files/mem1.jpg" alt="">' +
        '<div class="contact-post-content">'+
        '<h2>'+ a.name + '</h2><span>'+a.position+'</span><p>'+a.mobile+
        '<br>'+a.email+'</p></div></div></div>';
       });
                card.innerHTML = r ;
               }
								
							
=======
let  arr =[] , i ; 
 const  card =  document.getElementById("newMain") ;
const my =new Headers();
my.append('Content-Type', 'application/json');
    fetch('http://localhost:3000/contact',{
        method:'GET', 
        headers : my }) 
        .then( res => res.json())  .then((data) => { 
            arr = data ; 
            console.log(data) ; 
              render(); 
        });

        function render(){
            let r ="";
             arr.forEach((o,j)=>{ if( o.id == i){arr.splice(j,1); }});
             console.log(arr);
                  arr.forEach(a=> { 
       r +='<div class="col-lg-4 col-md-6">' +
       '<div class="contact-post">' +
       '<img src="./Ebtekarthon_files/mem1.jpg" alt="">' +
        '<div class="contact-post-content">'+
        '<h2>'+ a.name + '</h2><span>crew</span><p>'+a.mobile+
        '<br>'+a.email+'</p></div></div></div>';

    //    '<b> Name : '</b><br>' +
    //    '<b> Position : '+ a.position+'</b><br><b> Mobile : ' + + "</b><br><b>Email : "+ +
    //    '</b><button class="button" id ="'+ a.id +'"  onclick="del(this.id)"  ><strong>DELETE</strong></button>' +
    //    '<br></div><br></div></a>' ;  
       });
                card.innerHTML = r ;
               
               }
								
								
>>>>>>> 7a577dcabbcc4ca4d07e2bef9378aac970c5f7fd
									
									
									
									


    

