#region 5001 RGB To Hex Conversion
/*5001 RGB To Hex Conversion (https://www.codewars.com/kata/rgb-to-hex-conversion)
  Description:
    The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.
    The following are examples of expected output values:

    Rgb(255, 255, 255) # returns FFFFFF
    Rgb(255, 255, 300) # returns FFFFFF
    Rgb(0,0,0) # returns 000000
    Rgb(148, 0, 211) # returns 9400D3
*/

//My solution
    public class Kata
    {
      public static string Rgb(int r, int g, int b)
      {
        string hex = ToHex(r) + ToHex(g) + ToHex(b);
        return hex;
      }

      public static string ToHex(int num){
        if(num <= 0 ) {return "00";}
        if(num > 255 ) {return "FF";}
            return  num.ToString("X2"); //X2 means 2 digits if 0 append 0 at the start
      }

    }

//Solution(s) I like(links):
//1) BEST(23) AND CLEVER(3) https://www.codewars.com/kata/reviews/59956835a82c795f9d000004/groups/59d26a676bbc7f7bc6002b91
    public static string Rgb(int r, int g, int b)
    {
        r = Math.Max(Math.Min(255, r), 0);
        g = Math.Max(Math.Min(255, g), 0);
        b = Math.Max(Math.Min(255, b), 0);
        return String.Format("{0:X2}{1:X2}{2:X2}", r, g, b);
    }
//2) https://www.codewars.com/kata/reviews/59956835a82c795f9d000004/groups/59afd0cc1025afcf07000123
    public static string Rgb(int r, int g, int b)
    {
        Func<int, string> f = x => ((x < 16) ? "0" : "") + ((x > 255) ? 255 : (x < 0) ? 0 : x).ToString("X");
        return f(r) + f(g) + f(b);
    }
//3) https://www.codewars.com/kata/reviews/59956835a82c795f9d000004/groups/59f491882dcc4559bc000a35
    public static string Rgb(int r, int g, int b) => (ToByte(r) << 16 | ToByte(g) << 8 | ToByte(b)).ToString("X6");
    private static int ToByte(int value) => Max(0, Min(255, value));
//4)
    public static string Rgb(int r, int g, int b) {
      return  IntToHex(r)+IntToHex(g)+IntToHex(b);
    }

    private static string IntToHex(int n) {
      var dict = new string[]{"0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"};
      n = n < 0 ? 0 : n > 255 ? 255: n;
      return dict[n/16] + dict[n%16];
    }
#endregion
