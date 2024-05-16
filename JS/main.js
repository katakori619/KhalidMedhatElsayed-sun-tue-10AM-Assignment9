let Quotes = [
    "\"You know you're in love when you can't fall asleep because reality is finally better than your dreams.\"",
    "\"You only live once, but if you do it right, once is enough.\"",
    "\"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\"",
    "\"If you tell the truth, you don't have to remember anything.\"",
    "\"Live as if you were to die tomorrow. Learn as if you were to live forever.\""
];
let Authors = [
    "--Dr. Seuss","--Mae West","--Albert Einstein" , "--Mark Twain" , "Mahatma Gandhi"
]
let x = -1
function quote(){
    var rand = Math.random()*5
    var num = Math.floor(rand)
    if(x == num){
        while(x == num){
            var rand = Math.random()*5
            var num = Math.floor(rand)
        }
    }
    document.getElementById("demo").innerHTML = Quotes[num]
    document.getElementById("demo2").innerHTML = Authors[num]
    x = num
}