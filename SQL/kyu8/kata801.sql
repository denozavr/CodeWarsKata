--#region 8000
-- /*Grasshopper - Check for factor (https://www.codewars.com/kata/55cbc3586671f6aa070000fb)
    --Description: This function should test if the factor is a factor of base.

    -- Return true if it is a factor or false if it is not.

    -- About factors
    -- Factors are numbers you can multiply together to get another number.

    -- 2 and 3 are factors of 6 because: 2 * 3 = 6

    -- You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
    -- You can use the mod operator (%) in most languages to check for a remainder
    -- For example 2 is not a factor of 7 because: 7 % 2 = 1

    -- Note: base is a non-negative number, factor is a positive number.
-- */

--My solution
-- you will be given a table 'kata' with columns 'id', 'base', and 'factor'. 
-- return the 'id' and your result in a column named 'res'.
-- select * from kata;

SELECT id, MOD(base, factor) = 0 AS res FROM kata;

--//Solution(s) I like(links):
--//1) Best(16) & Clever(5) https://www.codewars.com/kata/reviews/5e3eb92546c1e00001633c78/groups/5e3eb92746c1e00001633c7c
    SELECT id, (base % factor = 0) AS res FROM kata
--//2) Best(2) & Clever(7) https://www.codewars.com/kata/reviews/5e3eb92546c1e00001633c78/groups/5ef1fd9bf6608d0001e128c4
    CREATE OR REPLACE FUNCTION is_divisible(factor1 INT, base1 INT)
    RETURNS BOOLEAN AS $$
    BEGIN
    IF base1 % factor1 = 0 THEN RETURN TRUE;
    ELSE RETURN FALSE;
    END IF;
    END $$ LANGUAGE plpgsql;

    SELECT id, is_divisible(factor,base) AS res
    FROM kata
--#endregion

--#region 8001
-- /*SQL Basics: Simple DISTINCT (https://www.codewars.com/kata/58111670e10b53be31000108)
    --Description:
--     For this challenge you need to create a simple DISTINCT statement, you want to find all the unique ages.

    -- people table schema
        -- id
        -- name
        -- age
    -- select table schema
        -- age (distinct)
    -- NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing. 
-- */

--My solution

--//Solution(s) I like(links):
--//1) Best(16) & Clever(5) https://www.codewars.com/kata/reviews/5e3eb92546c1e00001633c78/groups/5e3eb92746c1e00001633c7c
--//2) Best(2) & Clever(7) https://www.codewars.com/kata/reviews/5e3eb92546c1e00001633c78/groups/5ef1fd9bf6608d0001e128c4
--#endregion



--#region 8000
-- /*TITLE (LINK)
    --Description: 
-- */

--My solution
SELECT DISTINCT age FROM People;

--//Solution(s) I like(links):
--//1) Best(12) & Clever(3) 
    SELECT distinct people.age 
    FROM people;
--//2) Best(5) 
    Select Distinct
    p.age
    From
    people p;-- Create your SELECT statement here
--#endregion




