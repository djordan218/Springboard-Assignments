def count_up(start, stop):
    """Print all numbers from start up to and including stop.

    For example:

        count_up(5, 7)

   should print:

        5
        6
        7
    """
    #running a while loop
    while start <= stop:
        #printing the lesser number
        print(start)
        #adding one until the parameters are false
        start = start + 1

count_up(5, 7)        
