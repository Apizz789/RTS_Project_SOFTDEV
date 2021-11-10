alp = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
inp = int(input("Enter Number : "))
i = 0
j=0
copy_inp = inp
while inp > 0 :
    inp -= i+1
    i += 1
inp = copy_inp
while inp > 0 :
    j += 1
    for k in range(j+1) :
        inp -= 1
        if inp <= 0 :
            break
cur_alp = 0
number_of_print = j+j-2
middle = j-1
cur_value = 0





for row in range(i) :
    cur_value = row
    for column in range(number_of_print) :
        if cur_alp > 25 :
            cur_alp = 0
        if row % 2 != 0 :
            if column >= middle - row and column <= middle and copy_inp > 0:
                if cur_alp + cur_value < 26 :
                    print(alp[cur_alp + cur_value] , end='')
                else :
                    print(alp[cur_alp + cur_value -26] , end='')
                cur_value -= 2
                cur_alp += 1
                copy_inp -= 1
            else :
                print(".",end='')

        elif row % 2 == 0 :
            if column <= middle + row and column >= middle and copy_inp > 0 :
                print(alp[cur_alp],end = '')
                cur_alp += 1
                copy_inp -= 1
            else :
                print("." , end='')
        
    
    print('')
 
        