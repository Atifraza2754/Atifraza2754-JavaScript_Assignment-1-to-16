//CHAPTER 1 ALERTS


//1. 
alert("Greetings Welcome to Javascript Programming");

//2.
alert("Error! Please Enter a Valid Password ");

//3.
alert("Welcome to JS Land,,,, \n Happy Coding! ");

//4.
alert("Welcome to JS Land !");
alert("Happy Coding \n Prevent This page form creating dialogs");

//5.
console.log(alert("Heloo ! i can run JS through my web browser's console"));

//6.

//Chapter 1 END
// <======================

//CHAPTER 2 VARIABALES FOR STRINGS

//1.
var username;

//2.
var myname = "Atif Raza";

//3.
var message ="Hello World";
alert(message);

//4.
var Name="Atif Raza";
var Age="22 Years Old";
var Course="Certified Mobile Application Development";

alert(Name);
alert(Age);
alert(Course);

//5.
var Pizaa="PIZAA\nPIZZ\nPIZ\nPI\nP";
alert(Pizaa);

//6.
var email="Atifrazait@gmail.com";
alert("My Email Address is " + email);

//7.
var book="A smarter\n Way to Learn Javascript";
alert("I am trying to learn form the Book " + book);

//8 
document.write("Yeah i can Write HTML content through javascript <br>");

//9.
var draw="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(draw);

//Chapter 2 End
//=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//Chapter 3 => Variables for Numbers

//1.
var age=15;
alert('i am' + age + ' years old');

//2
var user;
user=14;
alert("You have visited this site " + user +" times");

//3
var birthyear=1990;
alert("My birth year is"+birthyear+"\n data type of my declared variable is " + typeof(birthyear));

//4
visitor_name="Aatif Raza";
product_name="T-shirt";
order_quantity=5;

document.write("<b>" + visitor_name + "</b>" + " ordered " + "<b>"
+order_quantity + "&nbsp" +product_name + "</b>"+"(s) on XYZ Clothing store ");

//Chapter 3 END

//Chapter 4 Start VARIABLE NAMES: LEGAL AND ILLEGAL 

//task 1
var name="Aatif Raza" , age=15, course='WMA';

//task 2 Legal Variables
var FirstName;
var _Num;
var A5;
var $price;
var Price_$1;

//Illegal Variables
// var 1num;
// var #price;
// var atif-123;
// var typeof; //we can not use reserved keyword
// var value 122; // spaces in variable is illegal

//task 3

document.write("<h1>Rules for naming JS Variables </h1>");
document.write("A heading stating “Rules for naming JS variables"+"<br>");
document.write("Variable names can only contain numbers , _ underscore , $ And Camel Case or . For example $my_1stVariable"+"<br>");
document.write("Variables must begin with a letter , _ underscore And $ or . For example $name, _name or name"+"<br>");
document.write("Variable names are case Sensitive" +"<br>"+ "Variable names should not be JS Keyword"+"<br><br><br><br>");


//END CHAPTER 4

//START CHAPTER 5 --> MATH EXPRESSION 

//task ..1
var a=3;
var b=5;
var c=a+b;
document.write("Sum of 3 and 5 is "+c+"<br><br>");

//task ...2
var a=23;
var b=7;
var sub=a-b;
var mul=a*b;
var div=a/b;
var mod=a%b;
document.write("subtraction of 23 and 7 is " + sub+"<br>");
document.write("muiltplication of 23 and 7 is " + mul+"<br>");
document.write("division of 23 and 7 is " +div+"<br>");
document.write("mod of 23 and 7 is " +mod+"<br><br><br>");


//task 3

var num;
document.write("Value after variable declaration is " +typeof(num)+"<br>");

var value=5;
document.write("initial value is : " +value+"<br>");

inc=value+1;
document.write("Value after increment is "+inc +"<br>");

add=inc+7;
document.write("Value after addition "+add+"<br>");

dec=add-1;
document.write("Value after decrement "+dec+"<br>");

rem=dec%3;
document.write("The reminder is "+rem+"<br><br>");

//task 4
var ticket1=600;
total=ticket1*5;
document.write("Total cost to buy 5 tickets to a movie is " +total+"PKR"+"<br><br>");

//task 5
var table=4;
var one=table*1;
var two=table*2;
var three=table*3;
var four=table*4;
var five=table*5;
var six=table*6;
var seven=table*7;
var eight=table*8;
var nine=table*9;
var ten=table*10;
document.write("<h1>Table of 4 </h1>");
document.write("4 x 1 =" +one+"<br>");
document.write("4 x 2 =" +two+"<br>");
document.write("4 x 3 =" +three+"<br>");
document.write("4 x 4 =" +four+"<br>");
document.write("4 x 5 =" +five+"<br>");
document.write("4 x 6 =" +six+"<br>");
document.write("4 x 7 =" +seven+"<br>");
document.write("4 x 8 =" +eight+"<br>");
document.write("4 x 9 =" +nine+"<br>");
document.write("4 x10 ="+ten+"<br><br><br>");

//task5 end

//task6 start

//task6 end


//task7 start
var item1=650;
var item2=100;
var ordered_quantity_item1=3;
var ordered_quantity_item2=7;
var shipping_charges=100;

document.write("<h1>Shopping Cart</h1>");
document.write("price of item 1 is " +item1+"<br>");
document.write("Quantity of item 1 is "+ordered_quantity_item1+"<br>");
document.write("price of item 2 is "+item2+"<br>");
document.write("Quantity of item 2 is "+ordered_quantity_item2+"<br>");
document.write("Shipping Charges "+shipping_charges+"<br><br><br>");

var total=item1*ordered_quantity_item1+item2*ordered_quantity_item2+shipping_charges;
document.write("Total Cost of your order is " +total+"<br><br>");

//end task7

//start task8

var totalmarks=980;
var obt_marks=804;
var percentage=obt_marks/totalmarks*100;

document.write("<h1>Marks Sheet</h1>");
document.write("Total Marks: "+totalmarks+"<br>");
document.write("Obtained Marks: "+obt_marks+"<br>");
document.write("Percentage: " +percentage+"%<br><br>");

//task8 end

//task9 start

var US_dollar=226;
var Saudi_riyal=28;

var Total_currency=US_dollar*10 + Saudi_riyal*25;

document.write("<h1>Currency in PKR</h1>");
document.write("Total Currency in PKR: " +Total_currency+"<br><br>");

//task9 end

//task10 start
var no1=parseInt(prompt("Enter a Number"));
var result=no1+5*10/2;

document.write("All Calculation Result: "+result+"<br><br>");

//task 10 end

//task 11 start

var CurrentYear=2022;
var BirthYear=2000;
var Age=CurrentYear-BirthYear;

document.write("<h1>Age Calculator</h1>");
document.write("Current Year:"+CurrentYear+"<br>");
document.write("Current Year:"+BirthYear+"<br>");
document.write('Your Age is: '+Age+"<br>");

//task 11 end

//task 12 start
var radius=20;

document.write("<h1>The Geometrizer</h1> <br>");

document.write("Radius of circle is : "+ radius+"<br>");
var circum=(Math.PI * 2*radius);
document.write("The Circumference is :" + circum+"<br>");

var area=(Math.PI * radius*radius);
document.write("The Area is :" + area+"<br><br>");

//task 12 end

//task 13 start
fav_snack=" chocolate_chip";
CurrentAge=15;
MaxAge=65;
snacks_per_day=3;
total=(snacks_per_day * 365) * (MaxAge - CurrentAge);
var message = (" Your will need " + total + fav_snack + " to last you until the ripe old age of "+ MaxAge);

document.write("<h1>The Lifetime supply Calculator </h1><br>")
document.write("Favourite Snack: "+fav_snack+"<br>");
document.write("Current Age: "+ CurrentAge+"<br>");
document.write("Estimated Maximum Age: "+ MaxAge+"<br>");
document.write("Amount of Snacks Per Day: "+ snacks_per_day+"<br>");
document.write(message+"<br><br>");

//END chapter 5

//Start chapter 6 to 9

//task 1
var a=parseInt(prompt("Enter a Number"));
document.write("value of a is:"+a+"<br>...................<br><br>");

++a;
document.write("Value of ++a is:"+a+"<br>");
document.write("Now the Value of a is:"+a+"<br><br>");

document.write("the value of a++ is:"+a+"<br>");
a++;
document.write("Now the the value of a is:"+a+"<br><br>");

--a;
document.write("Value of --a is:"+a+"<br>");
document.write("Now the Value of a is:"+a+"<br><br>");

document.write("the value of a-- is:"+a+"<br>");
a--;
document.write("Now the the value of a is:"+a+"<br><br>");
// End task 1

//Task 2 start
var a=2
var b=1
var result= --a - --b + ++b + b--;
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;

document.write("a is "+a+"<br>");
document.write("b is "+b+"<br>");
document.write("Result is: "+result+"<br><br>");
//Task 2 end

//Task 3 start
var input="Aatif Raza";
document.write("Welcome "+input+"<br>");
//Task 3 end

//Task 5 start
var no1=5;
var one=1*no1;
var two=2*no1;
var three=3*no1;
var four=4*no1;
var five=5*no1;
var six=6*no1;
var seven=7*no1;
var eight=8*no1;
var nine=9*no1;
var ten=10*no1;
document.write("1 x "+no1+"="+one+"<br>")
document.write("2 x "+no1+"="+two+"<br>")
document.write("3 x "+no1+"="+three+"<br>")
document.write("4 x "+no1+"="+four+"<br>")
document.write("5 x "+no1+"="+five+"<br>")
document.write("6 x "+no1+"="+six+"<br>")
document.write("7 x "+no1+"="+seven+"<br>")
document.write("8 x "+no1+"="+eight+"<br>")
document.write("9 x "+no1+"="+nine+"<br>")
document.write("10 x "+no1+"="+ten+"<br><br>")

//End Task 5

//Start Task 6

var total_sub1=100;
var total_sub2=100;
var total_sub3=100;
var total_sub_marks=total_sub1+total_sub2+total_sub3;

console.log(total_sub_marks+"<br>");

var subject1="Science";
var subject2="Computer";
var subject3="Science";

var sub1_obt_marks=parseInt(54);
var sub2_obt_marks=parseInt(54);
var sub3_obt_marks=parseInt(48);

// var obtained_marks=sub1_obt_marks+sub2_obt_marks+sub3_obt_marks;
var percentage1=sub1_obt_marks/total_sub1*100;
var percentage2=sub2_obt_marks/total_sub2*100;
var percentage3=sub3_obt_marks/total_sub3*100;

document.write("<table border='2px'>");
document.write("<tr><th>SUBJECT</th><th>TOTAL MARKS</th><th>OBTAINED MARKS</th><th>PERCENTAGE</th></tr>");
document.write("<tr><td>"+subject1+"</td>"+"<td>"+total_sub1+"</td>"+"<td>"+sub1_obt_marks+"</td>"+"<td>"+percentage1+'%'+"</td></tr>");
document.write("<tr><td>"+subject2+"</td>"+"<td>"+total_sub2+"</td>"+"<td>"+sub2_obt_marks+"</td>"+"<td>"+percentage2+'%'+"</td></tr>");
document.write("<tr><td>"+subject3+"</td>"+"<td>"+total_sub3+"</td>"+"<td>"+sub3_obt_marks+"</td>"+"<td>"+percentage3+'%'+"</td></tr>");
document.write("</table><br><br>");

//End task6
//End chapter 6 to 9

//start CHAPTER 9 to 11

//task1
var city = prompt("Enter City NAME").toLocaleLowerCase();
        if (city == "karachi"){
             document.write("WELCOME TO THE CITY OF LIGHTS <br><br> ")
         }
        else{
             document.write("WELCOME TO THE Other City <br><br> ")
         }
//end task1

//task2
var gender=prompt("Enter user gender ");

if(gender.toLocaleLowerCase()=="male"){
    document.write("Good Morning Sir <br><br>");
}
else if(gender.toLocaleLowerCase()=="female"){
    document.write("Good Morning Madam <br><br>");
}
else{
    document.write("No Gender Specified <br><br>");
}
//end task2

//start task3
var traffic_signal=prompt("Enter Traffic Signal Color")

    if(traffic_signal.toLocaleLowerCase()=="red"){
        document.write("Must Stop<br><br>");
    }
    else if(traffic_signal.toLocaleLowerCase()=="yellow"){
        document.write("Ready to move <br><br>");
    }
    else if(traffic_signal.toLocaleLowerCase()=="green"){
        document.write("Move Now <br>");
    } 
    else{
        document.write("No direction specified <br><br>");
    }
//end task3

//start task4
var remaining_fuel=parseFloat(prompt("Enter Remaining fuel"));

        if(remaining_fuel < 0.25){
            document.write("Please refill the fuel in your car<br>")
        }
        else{
            document.write("your fuel is full you can drive<br>");
        }
//end task 4

//start task5
var a = 4;
 if (++a === 5){
     alert("Given Condition of variable a is true ")
 }

var b = 89;
 if (b++ === 90) {
     alert("Given Condition of variable b is true ");
 }

 var b = 82;
 if (b++ === 83) {
     alert("given condition for variable b is true");
 }
 var c = 12;
 if (c++ === 13) {
     alert("condition 1 is true")
 }
// false
 if (c === 13) {
     alert("condition 2 is true")
 }
// true
 if (c === 14) {
     alert("condition 4 is true");
     // true
 }

//end task5
         var sub1 = parseInt(prompt(" Enter first subject marks"));
         var sub2 = parseInt(prompt(" Enter second subject marks"));
         var sub3 = parseInt(prompt(" Enter third subject marks"));
         var total_marks = 300;
         var obt_marks = (sub1+sub2) + sub3 ;
         var obt_percent = ((obt_marks/total_marks)*100).toFixed(2);

         document.write("<h1>Marks Sheet</h1>");
       
         document.write("Total Marks :"+ total_marks +"<br/>");
         document.write("Marks Obtained :"+ obt_marks +"<br/>");
         document.write("Percentage :"+ obt_percent +"%"+"<br/>");
         if(obt_percent >= 80){
             document.write("Grade : A-one"+"<br/>");
             document.write("Remarks : Excellent"+"<br/>");
         }else if(obt_percent >= 70){
             document.write("Grade : A"+"<br/>");
             document.write("Remarks : Good"+"<br/>");
         }else if(obt_percent >= 60){
             document.write("Grade : B"+"<br/>");
             document.write("Remarks : You need to improve"+"<br/>");
         }else if(obt_percent < 60){
             document.write("Grade : Fail"+"<br/>");
             document.write("Remarks : Sorry"+"<br/>");
         }else{
             document.write("invalid marks"+"<br/>");
         }

//end task6

//start task7

        var ran_num =Math.random()*10;
        var guess_no  = random.tofixed();
        var user = parseInt(prompt("Guess a num between 1 TO 10 "));
        if (user == guess_no){
            document.write("Bing ! correct answer ")
        }
        else if (user+1 == guess_no){
            document.write("close Enough to correct number")
        }
        else{
            document.write(" ^^ Not a Secret Number ^^")
        }
    //end task 7

    //start task8

        var checkNum = parseInt(prompt("Enter a Number : "));
        if (checkNum%3 == 0){
            document.write("Number is divisible by 3");
        }else{
            document.write("Number is not divisible by 3");
        }
    //end task 8

    //start task 9

        var checkEven = parseInt(prompt("enter a number : "));
        if (checkEven % 2 == 0) {
            document.write("it is Even");
        } else {
            document.write("it is Odd");
        }
    //end task 9

    //start task 10

        var temperature = parseInt(prompt("Input temperature : "));
        if (temperature > 40){
            document.write("Oh it is too hot outside.");
        }else if (temperature > 30){
            document.write("Wao The Weather is Normal Today.");
        }else if (temperature > 20){
            document.write("Todays Weather is cool");
        }else if (temperature > 10){
            document.write("OMG ! Today,s weather is so Cool ");
        }else{
            document.write("Correct Temprature is not defined");
        }
    //end task 10

    //start task 11

        var firstNumber = parseInt(prompt("Enter First Number : "));
        var SecondNumber = parseInt(prompt("Enter Second Number : "));
        var Operator = prompt("Enter Operator symbol Ex. '+','-','*','/','%' : ");
        if (Operator == '+'){
            document.write(firstNumber+SecondNumber);
        }else if (Operator == '-'){
            document.write(firstNumber-SecondNumber);
        }else if (Operator == '*'){
            document.write(firstNumber*SecondNumber);
        }else if (Operator == '/'){
            document.write(firstNumber/SecondNumber);
        }else if (Operator == '%'){
            document.write(firstNumber%SecondNumber);
        }else{
            document.write("Invalid Number given ")
        }

    //end task 11

    //end chapter 9 to 11

    //start Chapter 12 to 13

    //start task 1
            var  no1 = prompt("Input Single Character Or Single Number");
            var  ascii =  no1.charCodeAt(0);
            if ( ascii >= 97 &&  ascii <= 122) {
                document.write("Upercase Alphabet");
            }
            else if ( ascii >= 65 &&  ascii <= 90) {
                document.write("Lowercase Alphabet");
            }
            else if ( ascii >= 48 &&  ascii <= 57) {
                document.write("it is Number");
            }
    //end task 1

    //start task2
            var  num1 = parseInt(prompt("Enter first NUmber : "));
            var  num2 = parseInt(prompt("Enter second Number : "));
            if(num1 >  num2){
                document.write("Number 1 is larger" + num1);
            }else if ( num1 <  num2){
                document.write("Number 2 is Smaller" + num2);
            }else if ( num1 ==  num2){
                document.write("Both Numbera are Equal");
            }else{
                document.write("invalid input.")
            }
    //end task 2

    //start task3
            var num1 = parseInt(prompt("Enter a no1"));
            if(num1 > 0){
                document.write("number is Positive");
            }else if(inputnum < 0){
                document.write("number is Negative");
            }else{
                document.write("ZERO");
            }
    //end task 3
    
    //start task 4
             var inp = prompt("Enter a character : ").toLowerCase();
             if(inp.length > 1){
                 document.write("Invalid input");
             }else if(inp == 'a' ||inp == 'e' || inp == 'i' || inp == 'o' || inp == 'u' ){
                 document.write(true);
             }else{
                 document.write(false)
             }
    //end task 4

    //start task 5
             var pass = 'Aatif';
             var passinp = prompt("Enter password :");
             if(passinp == ''||passinp == null || passinp == undefined){
                 document.write("Please enter your password");
             }else if(passinp == pass) {
                 document.write("Correct go forward!");
             }else{
                 document.write("Incorrect password");
             }
    //end task 5

    //start task6

            var GREETING;
            var hour = 13;
            if (hour < 18) {
                GREETING = "Good day";
    
                GREETING = "Good evening";
            }
    
            var GREETING;
            var hour = 13;
            if (hour < 18) {
                GREETING = "Good day";
                document.write(GREETING);
            }else{
                GREETING = "Good evening";
                document.write(GREETING);
            }
            
            //start task 7
            var time = parseInt(prompt("Enter waqt in 24 Hr between 0000 and 23 59"));
            if(time >= 0000 && time < 1200){
                document.write("Good Morning.");
            }else if(time >= 1200 && waqt < 1700){
                document.write("Good Afternoon.");
            }else if(time >= 1700 && waqt < 2100){
                document.write("Good Evening.");
            }else if(time >= 2100 && waqt < 2359){
                document.write("Good Night.");
            }else{
                document.write("Invalid Input.");
            }
            
            //end task 7
            //end TASK 12 To 13

            //Start TASK 14 To 16

                // start task 1
                var arrkhali = [];
    
                // start task 2
                var arr1 = new Array(100);
        
                // start task 3
                var string_array = ["a","b","c","d"];
        
                // start task 4
                var numbers = [44,22,35,46,90];
        
                // start task 5
                var bolean_arr = [true,false];
        
                // start task 6
                var mixArray = ["mango","football",33,50,true,"mouse",45,true];
        
                 // start task 7
                var EDUCATION = ['SSC','HSC','BCS','BS','BSIT','MS','PhD'];
                for(i in EDUCATION){
                    document.write(`<b> ${parseInt(i)+1} ) $ {EDUCATION[i]} <b> <br/>`)
                }
                
                // start task 8

                var students = ['ashad', 'atif', 'saima'];
                var score = [550, 250, 350];
                for(i in students){
                    document.write(`Score of ${students[i]} is ${score[i]}. Percentage: ${score[i]/500*100}% <br/>`)
                }

                // start task 9
                var colors = ['white','yellow','blue'];
                document.write("Array after first initialization : ",colors);
        
                // start task 10
                var student_scor =[250,340,555,200];
                document.write(`Scores of Students : ${student_scor} <br/>`);
                var Sort_Scor = student_scor.sort();
                document.write(`Ordered Scores of Students : ${Sort_Scor}`);
        
                // start task 11

                var cityname = ['hyderabad','islamabad','dadu','sukkur'];
                document.write(`City's list : <br/>${cityname}<br/> <br/>`);
                var selectedCities = cityname.slice(2,4);
                document.write(`Selected city's list : <br/>${selectedCities}`);
        
                // start task 12
                var array = ['this','is','my','cat'];
                document.write('Array : <br/>',arr);
                var arrToStr = arr.join();
                document.write('<br/> String : <br/>',arrToStr);
        
                // start task 13
                var arr = ['scanner','fax','printer','lcd'];
                document.write("Devices : <br/> ",arr,"<br/> <br/> FIFO <br/> <br/>")
                document.write(`Out : <br/> ${arr[0]} <br/> Out : <br/> ${arr[1]} <br/> Out : <br/> ${arr[2]} <br/> Out : <br/> ${arr[3]} <br/>`)
                