// Assignment 21-25


// Q1
// var First_Name=prompt("Enter the first Name: ");
// var last_Name=prompt("Enter the last Name: ");
// var Full_Name=First_Name+last_Name;
// document.write("Good Morning " +Full_Name)

// Q2
// var model=prompt("Please Enter the Favorite mobile phone model !");
// document.write("Length of String : " +model.length)

// Q3
// var word="Pakistani";
// document.write("Index of 'n' : " + word.indexOf("n"));

// Q4
// var string="Hello world";
// document.write("Last index of 'l' " + string.lastIndexOf("l"));

// Q5
// var word ="Pakistani";
// document.write("Character at index 3 :"+word.charAt(3));

// Q6
// var First_Name=prompt("Enter the first Name..");
// var last_Name=prompt("Enter the last Name..");

// var fullName =First_Name.concat(last_Name)
// document.write(" Hello " + First_Name )

// Q7
// var city="Hyderabad";
// document.write("After the replacement :" + city.replace("Hyder","Islam"))


// Q8
// var message = "Ali and Sami are best friends. They play cricket and football together";
// document.write(message.replace(/and/g  ,"&"))

// Q9
// var val="472";
// document.write( "Value " + val +"<br>");
// document.write( "Type :"+ typeof  val + "<br>");
// var val=472;
// document.write( "Value " + val +"<br>");
// document.write( "Type :"+ typeof  val + "<br>");

// Q10
// var text=prompt("Please Enter the Text:");
// document.write(text.toUpperCase())

// Q11
// var inp=prompt("input")
// var f=inp.slice(0,1)
// f=(f.toUpperCase())
// alert(inp.replace("j",f))

// Q12
// var num =35.36;
// document.write("Number: " + num);
// var result=parseInt(num)
// var num = 35.36;
// document.write("Number: " + num +"<br>")
// var myInteger = parseInt(35.36);
// document.write("Result :"+ myInteger)

// Q13
// var userName = prompt("entere username");
// var userName = userName.split("")
// for (let i = 0; i < userName.length; i++) {
//     if (userName[i]=="@" || userName[i]=="!" || userName[i]=="." || userName[i]==",") {
//         var flag=false
//     }
// }
// if (flag===false){
//     alert("enter valid username")
// }
// else{
//     alert("ok fine")
// }

// Q14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// const b=prompt("Please Enter the Item" );
// var c=A.find(b);
// alert(c)
// var input = prompt("enter item name");
// var arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// input = input.toLocaleLowerCase()
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === input) {
//         var flag=false
//     }
// }
// if (flag === false) {
//     alert(input + " found in bakery")
// }
// else {
//     alert(input + " not found in bakery")
// }  

// Q15
// var inputtxt=prompt("Please Enter the Password")
// var passw=  /^[A-Za-z]\w{7,14}$/;
// if (inputtxt.length<=6) {
//     alert("It's Too Short")
// }else if(inputtxt.match(passw)) 
// { 
// alert('Correct, try another...')
// }
// else
// { 
// alert('Password Can not be begin with a Number Or Characters Please Enter the Valid Password...!')
// }

// Q16
// var university="University of Karachi";
// var ar = university.split(''); 
// console.log( ar );

// Q17
// var input=prompt("please Enter the Country Name:");
// document.write("User Input: " + input + " <br>");
// document.write("last Character of input :" + input.substr(-1))

// Q18
// var text="The quick brown fox jumps over the lazy dog";
// var ch = 'the';
// document.write("Text:" +text +"<br>")
// var count = text.split(ch).length ;
// document.write("There are " + count  + " occurrences(s) of Words 'the'" ) 

// Assignment 26-30

// Q1
// var numb = +prompt("Please Enter the Positive integer ..");
// document.write("Number "+numb +"<br>")
// var numb1 = Math.round(numb) ;
// document.write("Roundoff Value is : "+ numb1  +"<br>")
// document.write("Floor Value: " + Math.floor(numb) +"<br>")
// document.write("Ceil Value: " + Math.ceil(numb) +"<br>")

// Q2
// var numb=+prompt("Please Enter the negative floating point ..");
// document.write("Number "+numb +"<br>")
// var numb1 = Math.round(numb) ;
// document.write("Roundoff Value is : "+ numb1  +"<br>")
// document.write("Floor Value: " + Math.floor(numb) +"<br>")
// document.write("Ceil Value: " + Math.ceil(numb) +"<br>")

// Q3
// var a=-4.66;
// document.write("The Absolute Value of "+ a + " is " + Math.abs(a) )

// Q4
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write('You rolled a ' + diceRoll);

// Q5
// var coin = Math.floor( Math.random() * 2 ) +1;
// if (coin===1) {
//     document.write("Tail")
// }
// else{
//     document.write("Head")
// }

// Q6
// var numb=Math.floor(Math.random()*100)+1;
// document.write("Random number between 1 and 100 :"+numb)

// Q7
// var weight=prompt("Please Enter Your Weight..");
// if (weight==50) {
//     document.write("The Weight of User Is: "+ weight*2.2046)
// } else if (weight==50.2) {
//     document.write("The Weight of User Is: "+ weight*2.2046)
// } else if (weight==50.4) {
//     document.write("The Weight of User Is: "+ weight*2.2046)
// } else if (weight==50.6) {
//     document.write("The Weight of User Is: "+ weight*2.2046)
// }else{
//     alert("error")
// }

// Q8
// var numb=prompt("Please Enter the Number Between 1 To 10 :");
// var numb1=Math.floor(Math.random()*10)+1;
// if (numb==numb1) {
//     alert("congratulate !!!")
// }else{
//     alert("Try Again!")
// }


// Assignment 31-34


// Q1
// var time=new Date();
// document.write(time)

// Q2
// var d = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var n = month[d.getMonth()];
// document.write(n)

// Q3
// var d = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
// var n = weekday[d.getDay()];
// document.write("Today is "+n)

// Q4
// var d = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
// var n = weekday[d.getDay()];
// // document.write("Today is "+n)
// if (n ===  "Saturday" ||  n ===  "Sunday"  ) {
//     alert("It's a Fun Day")
// }else{
//     alert("Work Days")
// }

// Q5
// var d = new Date();
// var n = d.getDate();
// if (n<=15) {
//     document.write("First fifteen days of the month")
// } else {
//     document.write("Last days of the month")
// }

// Q6
// var today = new Date();
// var miliseconds = new Date().getTime();
// var minute = new Date().getTime() / 60000;
// document.write("Current Date :"+today+'<br>')
// document.write("MiliSeconds :"+miliseconds+'<br>')
// document.write("Minutes :"+minute+'<br>')
     
// Q7
// var a = new Date();
// var b = a.toString();
// var c = b.slice(16,19);
// if (c === "12:"){
//     document.write("It's PM")
// }else if(c === "13:"){
//     document.write("It's PM")
// }else if(c === "14:"){
//     document.write("It's PM")
// }else if(c === "15:"){
//     document.write("It's PM")
// }else if(c === "16:"){
//     document.write("It's PM")
// }else if(c === "17:"){
//     document.write("It's PM")
// }else if(c === "18:"){
//     document.write("It's PM")
// }else if(c === "19:"){
//     document.write("It's PM")
// }else if(c === "20:"){
//     document.write("It's PM")
// }else if(c === "21:"){
//     document.write("It's PM")
// }else if(c === "22:"){
//     document.write("It's PM")
// }else if(c === "23:"){
//     document.write("It's PM")
// }else if(c === "24:"){
//     document.write("It's AM")
// }else if(c === "01:"){
//     document.write("It's AM")
// }else if(c === "02:"){
//     document.write("It's AM")
// }else if(c === "03:"){
//     document.write("It's AM")
// }else if(c === "04:"){
//     document.write("It's AM")
// }else if(c === "05:"){
//     document.write("It's AM")
// }else if(c === "06:"){
//     document.write("It's AM")
// }else if(c === "07:"){
//     document.write("It's AM")
// }else if(c === "08:"){
//     document.write("It's AM")
// }else if(c === "09:"){
//     document.write("It's AM")
// }else if(c === "10:"){
//     document.write("It's AM")
// }else if(c === "11:"){
//     document.write("It's AM")
// }

// Q8
// var month = 0;
// var laterDate = new Date(2020, month + 12, 0);
// alert(laterDate); 

// Q9
// var date1 = new Date("06/18/2015"); 
// var date2 = new Date("07/19/2019");  
// var Difference_In_Time = date2.getTime() - date1.getTime(); 
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
// document.write( "The Numbers of Days is passed Since Ramazan 1st  is: "+ Difference_In_Days); 

// Q10
// var date1=new Date("Dec 05 2015 11:12:15")
// var date2=new Date()
// var timeDiff=date2.getTime()-date1.getTime()
// alert(timeDiff/1000+" seconds")

// Q12
// var date=new Date('1920');
// alert(date)

// Q13
// var age =prompt("Please Enter the Age ")
// document.write("Yuor Age Is " + age+"<br>")
// var d=new Date();
// document.write(d.getFullYear()-age);

// Q14
// var Customer_Name="ABC"
// var Current_Month="February"
// var Number_Of_Units=410;
// var charge_per_Unit=16;
// var late_Surcharge=350;
// var d=new Date();
// var d=d.getDate()
// document.write("<h1> K-Electric Bill</h1>")
// var Net_Amount=Number_Of_Units*charge_per_Unit;
// var after_Due_Date=Net_Amount+late_Surcharge;
// if (d <= 15) {
//     document.write("Payabe withIn Due Date is :"+Net_Amount)
// } else {
//     document.write("Payabe After Due Date is :"+after_Due_Date)
// }



// Assignment 35-38


// Q1
// function date(){
//     var d=new Date();
//     document.write(d)
// }
// date();

// Q2
// function greet(){
//     var first_Name=prompt("Please Enter the First Name")
//     var last_Name=prompt("Please Enter the last Name")
//     document.write("Hello " +first_Name+last_Name)
// }
// greet();

// Q3
// function add(){
//     var num1=+prompt("Please Enter the Number 1 ");
//     var num2=+prompt("please Enter the Number 2")
//     var sum=num1+num2;
//     alert( sum);
// }
// add()

// Q4
// function calculator(num1,num2,operator){
//     if (operator=='+'){
//         document.write(num1+num2)
//     }        
//     else if(operator=="-"){
//         document.write(num1-num2)
//     }
//     else if(operator=="*"){
//         document.write(num1*num2)
//     }
//     else if(operator=="/"){
//         document.write(num1/num2)
//     }
// }
// num1=prompt("enter number 1")
// num2=prompt("enter number 1")
// operator=prompt("enter operator")
// calculator(num1,num2,operator)

// Q5
// function square(n){
//     alert(n*n);
// }
// n=+prompt("Please Enter the Number ")
// square(n)

// Q6
// function Factorial(n){
//     var f=1
//     for (var i=n;i>=2;i--){
//         f=f*i
//     }
// document.write("Factorial of ",n," is :"+f);
// }    

// Factorial(3)

// Q7
// var start=+prompt("Enter the Start Point")
// var end=+prompt("Enter the Endt Point")

// function count(start,end){
//     for(i=start;i<=end;i++){
//         document.write(i+"<br>")
//     }
// }
// count(start,end)

// Q8
// function calculate_Hypotenuse(base,perpendicular){
//     function square(n){
//         return (n*n)
//     }
//     var hypotenuse=Math.sqrt(square(base)+square(perpendicular))
//     document.write("Hypotenuse : "+hypotenuse)
// }
// calculate_Hypotenuse(2,4)

// Q9
// var a,w,h;

// function area(w,h){
//     a=w*h;
//     return(a)
// }
// area(2,2)

// w=+prompt("Enter Width");
// h=+prompt("Enter Height");
// area(w,h)
// alert(a)

// Q10
// function palindrome(word){
//     var w=word.split(" ")
//     var wr=w.reverse()

//     if (w==wr) {
//     alert("Word Is Palindrome!")        
//     }
// else{
//     alert("Word Is Not a Palindrome!")
// }
// }
// var word=prompt("PLease Enter the Word");
// palindrome(word)

// function pallindrome(word) {
//     var w = word.split('')
//     var wr = w.reverse()
//     if (w === wr) {
//         alert("word is pallindrome")
//     }else {
//         alert("word is not pallindrome")
//     }
// }
// // Driver Code
// var word = prompt("enter word")
// pallindrome(word)

// function pallindrome(word) {
//     var w = word.split('').reverse().join("")
//     if (word == w) {
//         alert("word is pallindrome")
//     }
//     else {
//         alert("word is not pallindrome")
//     }
// }

// var word = prompt("enter word")
// pallindrome(word)

// Q11
// function caps(word) {
//     var w = word.split(' ')
//     for (let i = 0; i <= w.length - 1; i++) {
//         var q = w[i]
//         var e = q.split('')
//         var r = (e[0].toUpperCase())
//         document.write(r + q.slice(1) + " ")
//     }
// }

// var word = prompt("enter sentence");
// caps(word)

// Q12
// function longestWord() {
//     var sent = prompt("Enter Sentence")
//     var brkSent = sent.split(' ')
//     for (let i = 0; i < brkSent.length - 1; i++) {
//         if (brkSent[i].length < brkSent[i + 1].length) {
//             var a = (brkSent[i + 1])
//         }
//         else {
//             var a = brkSent[i]
//         }
//     }
//     alert(a)
// }
// longestWord()

// Q13
// function count(sent, word) {
//     var count = 0
//     for (let i = 0; i < sent.length; i++) {
//         if (sent[i] == word) {
//             count++
//         }
//     }
//     document.write(count)
// }
// var sent = prompt("enter sentence")
// var word = prompt("enter word to be searched")
// count(sent,word)


// Q14
// function calcCircumference(r) {
//     var circ=2*3.142*r
//     document.write(circ)
// }

// function calcArea(radius) {
//     var area=3.142*radius*radius
//     document.write(area)    
// }
// calcCircumference(3)
// calcArea(3)


// Assignment 38-42

// Q1
// function power(){
//     var a=+prompt("Enter the base..")
//     var b=+prompt("Enter the Power..")
//     var result=Math.pow(a,b)
//     alert("The Result is :"+result)
// }
// power()

// Q2
// function leapyear(){
//     var year=prompt("Enter the Year:")
//     if (year%4==0) {
//         alert("It is a Leap Year...");
//     }else{
//         alert("it is not a leap Year...")
//     }
// }

// leapyear()

// Q3
// function input(){
//     var a=+prompt("Enter the Value of a")
//     var b=+prompt("Enter the Value of a")
//     var c=+prompt("Enter the Value of a")
//     var s=(a+b+c)/2;
//     document.write(s+"<br>");    
//     var tri_area=s*(s-a)*(s-b)*(s-c)
//     document.write("Area Of Triangle Is: " +tri_area);
// }
// input()

// Q4
// function mainFunction(m1,m2,m3){
// var avg = average(m1,m2,m3);
// var per = percentage(m1,m2,m3);
// document.write("Average of ",m1,",",m2,",",m3," is ", avg.toFixed(3));
// document.write("<br><br>Percentage : ",per.toFixed(2),"%");
// }
// function average(m1,m2,m3){
// ans = (m1+m2+m3)/3;
// return ans;
// }
// function percentage(m1,m2,m3){
// var ans = ((m1+m2+m3)*100)/300;
// return ans;
// }
// mainFunction(71,70,85);

// Q5
// function index(){
//     var country="Pakistan"
//     for(var i=0;i<=country.length;i++){
//         document.write(i)
//     }
// }
// index()

// Q7
// function vowel_count(str1){
//     var vowel_list='aieouAEIOU';
//     var vcount=0;

//     for(var i=0;i < str1.length;i++){
//         if(vowel_list.indexOf(str1[i]) !== -1){
//             vcount +-1;
//         }

//     }
//     return vcount;
// }

// console.log(vowel_count("Pleases read this application and give me gratuity"))

// Q8
// var a =+prompt("Enter the Value in KM");
// var km=a*1000;

// document.write("The Distance In Meter"+''+''+km.toFixed(1)+"meter " + "<br>");

// var f=a*3280.84;
// document.write("The Distance In Feet"+''+''+f.toFixed(1)+"feet " +"<br>");

// var inc=a*39370.05;
// document.write("The Distance In Inches"+''+''+inc.toFixed(1)+"Inc " +"<br>");

// var cent=a*1000*100;
// document.write("The Distance In Centimeter"+''+''+cent.toFixed(1)+"Centemeter " +"<br>");

// Q9
// var time=prompt("Write down your Over Time..");
// document.write("Your over time pay is "+" "+ (time*12));

// Q10
// function note(){
//     var amount=+prompt("Please Input amount of withdraw: ");

//     document.write("Your input amount for withdraw : "+amount+"<br>")

//     document.write("Required notes of Rs. 100  :  " +amount / 100 +"<br>")
//     document.write("Required notes of Rs. 50  :  " +(amount % 100) / 50+"<br>")
//     document.write("Required notes of Rs. 10  :  " +(((amount % 100) %50 ) / 10+"<br>"))
//     document.write("Amount still remaining Rs.  :  " +(((amount % 100) % 50 ) % 10+"<br>"))

// }
// note()


// Assignment 43-48

// Q1
// function q1(){
//     alert("Displaying alert!")
// }

// // Q2
// function q2(){
//     alert("Thanks for purchasing phone from us.")
// }

// // Q3
// var std_list = [["John", '10'], ["Doe", '9'], ["Mark", '10'], ["James", '8'],
// ["Henry", '10'], ["Helen", '7'], ['Den', '10'], ['Sarah', '9'],
// ['Alex', '11'], ['Edward', '8']];
// var alpha = ['b', 'c'];


// for (i = 0; i < 10; i++) {
//     for (j = 0; j <= 1; j++) {
//         my_id = '_' + i + alpha[j];
//         first_id = '_'+i+'a';
//         var index_ = document.getElementById(first_id);
//         var data_ = document.getElementById(my_id);
//         index_.innerHTML = i;
//         data_.innerHTML = std_list[i][j];
//     }
// }

// function dlt(clicked) {
//     var row = clicked.parentNode.parentNode.rowIndex;
//     document.getElementById('mytable').deleteRow(row); 
// }


// // Q4
// // check index.html

// // Q5
//  var num = 0
// function q5inc(){
//     cur_num = document.getElementById("count");
//     cur_num.innerHTML = ++num;
// }

// function q5dec(){
//     cur_num = document.getElementById("count");
//     cur_num.innerHTML = --num;
// }


// ---------------- X ---------------- X --------------------- X ----------------------


// Assignment 49-52

// Q1
// function submit_(){
//     fname = document.getElementById("fname").value;
//     lname = document.getElementById("lname").value;
//     email = document.getElementById("email").value;
//     pwd = document.getElementById("pwd").value;
//     document.write("<h1> SIGN-UP INFO </h1>")
//     document.write("<h2>First Name :</h2> ",fname,"<br/>");
//     document.write("<h2>Last Name : </h2>",lname,"<br/>");
//     document.write("<h2>Email :</h2> ",email,"<br/>");
//     document.write("<h2>Password </h2>",pwd,"<br/>");
// }

// Q2
// function expand(){
//     var para = "<br/>Yes, all the information is right there in the book if the author has done a good job. But learning a language entails far more than reading some information.<br/> You need to commit the information to memory, which requires some kind of plan. You need to practice. How are you going to structure that?<br/> And you need some way to correct yourself when you go off-course. Since a book isn't the best way to help you with these tasks, most authors don't even try.<br/> Which means all the work of designing a learning path for yourself is left to you. And this do-it yourself meta-learning,<br/> this struggle with the question of how to master what the book is telling you, takes more effort than the learning itself."
//     var toadd = document.getElementById("show");
//     toadd.innerHTML += para;
// ;}


// ---------------- X ---------------- X --------------------- X ----------------------


// Assignment 58-67

// Q1
// // part(i)
// var main_ = document.getElementById("main-content");
// // part(ii)
// var a = main_.childNodes;
// document.write("<h1> Displaying All Child Elements Of main-content </h1>");
// for(i=0;i<a.length;i++){
//     document.write("<b>",i, "</b>", a[i].nodeName, "<br/>");
// }
// console.log(a);

// // part(iii)
// document.write("<h1>Displaying InnerHTML In Browser </h1>" )
// for(i=0;i<a.length;i++){
// document.write("<b>Tag : </b>",a[i].nodeName,"<br/><b>Content : </b>" , a[i].innerHTML,"<br/><br/>");
// }
// // part(iv)
// var fname = document.getElementById("first-name");
// val = a[0].innerHTML;
// fname.value = val.slice(14);
// // part(v)
// var fname = document.getElementById("last-name");
// val = a[1].innerHTML;
// fname.value = val.slice(11);
// var fname = document.getElementById("email");
// val = a[2].innerHTML;
// fname.value = val.slice(9);

// Q2

// part(i)
// var ntype = document.getElementById("form-content");
// console.log(ntype.nodeType);
// // part(ii)
// var ntype = document.getElementById("lastName");
// document.write("Node Type of lastName Element : ",ntype.nodeType);
// document.write("<br><br> Node Type of ChildNode of lastName Element :",ntype.childNodes[0].nodeType);
// // part(iii)
// document.write("<br><br> Before Updation, ChildNode of lastName Element : ",ntype.childNodes[0].nodeValue)
// var new_txt= document.createTextNode("Last Name: Helen");
// ntype.replaceChild(new_txt , ntype.childNodes[0]);
// document.write("<br><br> Updated ChildNode of lastName Element : ",ntype.childNodes[0].nodeValue)
// // part(iv)
// var elements = document.getElementById("main-content");
// var first_Child = elements.firstChild
// var last_Child = elements.lastChild
// console.log(first_Child)
// console.log(last_Child)
// // part(v)
// var ele = document.getElementById("lastName");
// var next_sib = ele.nextSibling;
// var prev_sib = ele.previousSibling;
// console.log(next_sib);
// console.log(prev_sib);
// // part(vi)
// var ele = document.getElementById("email");
// var p_node = ele.parentNode;
// console.log(p_node);
// console.log(p_node.nodeType);

//  Q3

// Already done in 43-38 Q1

// --------------------X----------------------X---------------------X----------------------- 






