/* 001
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



/*002 https://www.codewars.com/kata/square-n-sum/csharp
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

