def solution(numbers, hand):
    answer = ''
    left_hand = '*'
    right_hand = '#'
    keypad = {
        1: (0, 0), 2: (1, 0), 3: (2, 0),
        4: (0, 1), 5: (1, 1), 6: (2, 1),
        7: (0, 2), 8: (1, 2), 9: (2, 2),
        '*': (0, 3), 0: (1, 3), '#': (2, 3)
    }

    def calculate_distance(hand_pos, number):
        hand_x, hand_y = hand_pos
        number_x, number_y = keypad[number]
        distance = abs(hand_x - number_x) + abs(hand_y - number_y)
        return distance

    for number in numbers:
        if number in [1, 4, 7]:
            answer += 'L'
            left_hand = number
        elif number in [3, 6, 9]:
            answer += 'R'
            right_hand = number
        else:
            left_distance = calculate_distance(keypad[left_hand], number)
            right_distance = calculate_distance(keypad[right_hand], number)

            if left_distance < right_distance:
                answer += 'L'
                left_hand = number
            elif left_distance > right_distance:
                answer += 'R'
                right_hand = number
            else:
                if hand == 'left':
                    answer += 'L'
                    left_hand = number
                else:
                    answer += 'R'
                    right_hand = number

    return answer
