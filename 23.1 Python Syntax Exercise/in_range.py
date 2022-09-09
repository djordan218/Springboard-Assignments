def in_range(nums, lowest, highest):
    """Print numbers inside range.

    - nums: list of numbers
    - lowest: lowest number to print
    - highest: highest number to print

    For example:

      in_range([10, 20, 30, 40], 15, 30)

    should print:

      20 fits
      30 fits
    """
    # if lowest > nums[0] and highest < nums[3]:
    #   print(lowest, f"fits")
    #   print(highest, f"fits")
      
    #running a for in loop (loops over each num in nums)  
    for num in nums:
        if num >= lowest and num <= highest:
            print(f"{num} fits")


in_range([10, 20, 30, 40, 50], 15, 30)             
