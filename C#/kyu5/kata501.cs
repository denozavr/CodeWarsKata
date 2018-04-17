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

#region 5002 PaginationHelper
/* 5002 PaginationHelper (https://www.codewars.com/kata/paginationhelper)
Description:
  For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.
  The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.
  The following are some examples of how this class is used:

    var helper = new PaginationHelper<char>(new List<char>{'a', 'b', 'c', 'd', 'e', 'f'}, 4);
    helper.PageCount; //should == 2
    helper.ItemCount; //should == 6
    helper.PageItemCount(0); //should == 4
    helper.PageItemCount(1); // last page - should == 2
    helper.PageItemCount(2); // should == -1 since the page is invalid

    // pageIndex takes an item index and returns the page that it belongs on
    helper.PageIndex(5); //should == 1 (zero based index)
    helper.PageIndex(2); //should == 0
    helper.PageIndex(20); //should == -1
    helper.PageIndex(-10); //should == -1
*/

//My solution
    using System;
    using System.Collections.Generic;

    public class PagnationHelper<T>
    {
        // TODO: Complete this class

        /// <summary>
        /// Constructor, takes in a list of items and the number of items that fit within a single page
        /// </summary>
        /// <param name="collection">A list of items</param>
        /// <param name="itemsPerPage">The number of items that fit within a single page</param>
        public PagnationHelper(IList<T> collection, int itemsPerPage)
        {
            this.collection = collection;
            this.itemsPage = itemsPerPage;
        }

        private IList<T> collection;
        private int itemsPage;

        /// <summary>
        /// The number of items within the collection
        /// </summary>
        public int ItemCount
        {
            get
            {
              return collection.Count;
            }
        }

        /// <summary>
        /// The number of pages
        /// </summary>
        public int PageCount
        {
            get
            {
                return (int)Math.Ceiling((double)collection.Count/itemsPage);
            }
        }

        /// <summary>
        /// Returns the number of items in the page at the given page index
        /// </summary>
        /// <param name="pageIndex">The zero-based page index to get the number of items for</param>
        /// <returns>The number of items on the specified page or -1 for pageIndex values that are out of range</returns>
        public int PageItemCount(int pageIndex)
        {
            return PageCount > pageIndex && pageIndex >= 0 ? Math.Min(itemsPage, ItemCount - (itemsPage*pageIndex)) : -1;
        }


        /// <summary>
        /// Returns the page index of the page containing the item at the given item index.
        /// </summary>
        /// <param name="itemIndex">The zero-based index of the item to get the pageIndex for</param>
        /// <returns>The zero-based page index of the page containing the item at the given item index or -1 if the item index is out of range</returns>
        public int PageIndex(int itemIndex)
        {
            return (itemIndex>=0 && itemIndex<ItemCount) ? (int)Math.Floor((double)itemIndex/itemsPage) : -1;
        }
    }


//Solution(s) I like(links):
//1)  Best(2) https://www.codewars.com/kata/reviews/592d1714fd1539766300000d/groups/593595be24c5ec42a40001c0
    using System;
    using System.Collections.Generic;

    public class PagnationHelper<T>
    {
      // TODO: Complete this class
      private int _itemCount = 0;
      private int _pageCount = 0;
      private int _itemsPerPage = 0;


      public PagnationHelper(IList<T> collection, int itemsPerPage)
      {
        if(null == collection || collection.Count ==0 || itemsPerPage <=0)
          {_itemCount =0; _pageCount =0;}
        else
          {
            _itemCount =collection.Count;

            int partialPage  = 0;
            if((_itemCount%itemsPerPage)!=0){partialPage =1;}

            _pageCount = _itemCount/itemsPerPage + partialPage;
          }

        _itemsPerPage = itemsPerPage;
      }


      public int ItemCount
      {
        get
        {
        return _itemCount;

        }
      }

      public int PageCount
      {
        get
        {
          return _pageCount;
        }
      }


      public int PageItemCount(int pageIndex)
      {
          if(pageIndex <0 || pageIndex >= _pageCount)
          {return -1;}
          if(_itemCount == 0)
          {return 0;  }
          if(pageIndex == (_pageCount-1))
          {
            return _itemCount - (_itemsPerPage *(pageIndex));
          }
          return _itemsPerPage;
      }


      public int PageIndex(int itemIndex)
      {
        if(itemIndex < 0 || itemIndex >= _itemCount)
          {return -1;}
        if( itemIndex < _itemsPerPage)
          {return 0; }
        return itemIndex/_itemsPerPage;
      }
    }

//2) LINQ https://www.codewars.com/kata/reviews/592d1714fd1539766300000d/groups/5ad29bca5e82406ff6000b4d
    public int PageItemCount(int pageIndex)
    {
                    if (pageIndex < 0) return -1;
        var count = this.collection.Skip(pageIndex * itemsPerPage).Take(this.itemsPerPage).ToList().Count;
        return count > 0 ? count : -1;
    }

#endregion
