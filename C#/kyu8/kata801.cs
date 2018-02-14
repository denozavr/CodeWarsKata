#region 8001
/* 8001
Description:
The function is not returning the correct values. Can you figure out why?
    getPlanetName(3); // should return 'Earth'
 */

//My solution
    public class Kata
    {
        public static string GetPlanetName(int id)
        {
            string name="";
            switch(id)
            {
                case 1:
                    name = "Mercury";
                    break;
                case 2:
                    name = "Venus";
                    break;
                case 3:
                    name = "Earth";
                    break;
                case 4:
                    name = "Mars";
                    break;
                case 5:
                    name = "Jupiter";
                    break;
                case 6:
                    name = "Saturn";
                    break;
                case 7:
                    name = "Uranus";
                    break;
                case 8:
                    name = "Neptune";
                    break;
            }

            return name;
        }
    }

//Solution(s) I like(links): http://bit.ly/2xGqjDL
#endregion

#region 8002 Square n sum
/*8002 https://www.codewars.com/kata/square-n-sum/csharp
Description:
Complete the squareSum/square_sum/SquareSum method so that it squares each number passed into it and then sums the results together.

For example:
    Kata.SquareSum(new int[] {1, 2, 2}) # should return 9
 */

 //My solution
    public static class Kata
    {
        public static int SquareSum(int[] n)
        {
            int sum = 0;

            foreach (int num in n){
                sum += num*num;
            }
            return sum;
        }
    }

 //Solution(s) I like(links):
    public static int SquareSum(int[] n) => n.Sum(i => i * i); // http://bit.ly/2xuqHG5
    public static int SquareSum(int[] n) => n.Select(x => x * x).Sum(o => o); // http://bit.ly/2xtpyhN
#endregion

#region 8003 How many lightsabers do you own?
/*8003 How many lightsabers do you own?
Description:
Inspired by the development team at Vooza, write the function howManyLightsabersDoYouOwn that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

No starting help here -- you'll need to know how to write a function that accepts a parameter and returns a value based on that parameter.

    howManyLightsabersDoYouOwn("anyone else") \\ should === 0
    howManyLightsabersDoYouOwn("Zach") \\ should === 18
 */


//My solution
    public static int HowManyLightsabersDoYouOwn(string name)
    {
        var sabers = 0;
        if(name == "Zach") sabers = 18;
        return sabers;
    }

//Solution(s) I liked:
    public static int HowManyLightsabersDoYouOwn(string name) => name == "Zach" ? 18 : 0;  // http://bit.ly/2xMX0iV
#endregion

#region 8004 Short Long Short
/*8004  Short Long Short (https://www.codewars.com/kata/short-long-short/train/csharp)
 Description:
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length0).
For example:
    ShortLongShort.Solution("1", "22"); // returns "1221"
    ShortLongShort.Solution("22", "1"); // returns "1221"
*/
//My solution

    public class ShortLongShort
    {
        public static string Solution(string a, string b)
        {
            return a.Length > b.Length ? (b + a + b) : (a + b + a);
        }
    }

//Solution(s) I like:
//1) http://bit.ly/2h41Dfq
    public static string Solution(string a, string b) => (a.Length>b.Length) ? b+a+b : a+b+a;
//2) http://bit.ly/2y1sGTg
      public static string Solution(string a, string b)
      {
         return (b.Length > a.Length) ? $"{a}{b}{a}" : $"{b}{a}{b}";
      }
#endregion

#region 8005 Function 1 - hello world
/*8005 Function 1 - hello world (https://www.codewars.com/kata/function-1-hello-world/train/csharp)
 Description:
  Make a simple function called greet that returns the most-famous "hello world!".
Style Points
  Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of?
  What is a "hello world" solution you would want to show your friends?
*/
//My solution
    using System;
    public static class Kata
    {
      // Write a public static method "greet" that returns "hello world!"
      public static string greet() => "hello world";
    }

//Solution(s) I like:
//1) Clever(12) http://bit.ly/2mtCQXs
//2) Clever(10) http://bit.ly/2hzCMne SineWave
//3)
    public static String greet()
    { return "hello world";}
#endregion


#region 8006 Function 2 - squaring an argument
/*8006 Function 2 - squaring an argument https://www.codewars.com/kata/function-2-squaring-an-argument
    Description:
    Now you have to write a function called square that takes an argument and returns the square of it.
*/
//My solution
    public class Kata  {
      public static double Square(double x) => x*x;
    }

//Solution(s) I like:
//1) https://www.codewars.com/kata/reviews/599181e9fab78c44ad0006ea/groups/5a06566bf270a15db00001c7
    public static int Square(int num)
    {
      return num * num;
    }
    public static double Square(double num)
    {
      return num * num;
    }


#endregion
