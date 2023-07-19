def solution(picks, minerals):
    total_picks = sum(picks)

    if len(minerals) > total_picks*5:
        del minerals[total_picks*5:]

    minerals_list = []
    while minerals:
        minerals_list.append(minerals[0:5])
        del minerals[0:5]

    minerals_value = []
    for i in range(len(minerals_list)):
        value = 0
        for j in minerals_list[i]:
            if j == "diamond":
                value += 25
            elif j == "iron":
                value += 5
            elif j == "stone":
                value += 1
        minerals_value.append(value)

    sort_index = []

    while len(sort_index) != len(minerals_value):
        for i in range(len(minerals_value)):
            if minerals_value[i] == max(minerals_value):
                if minerals_value[i] != 0:
                    sort_index.append(i)
                    minerals_value[i] = 0

    result = 0

    for i in range(picks[0]):
        if i <= len(sort_index)-1:
            result += len(minerals_list[sort_index[i]])

    for i in range(picks[0],picks[0]+picks[1]):
        if i <= len(sort_index)-1:
            for j in range(len(minerals_list[sort_index[i]])):
                if minerals_list[sort_index[i]][j] == "diamond":
                    result += 5
                else:
                    result += 1

    for i in range(picks[0]+picks[1],picks[0]+picks[1]+picks[2]):
        if i <= len(sort_index)-1:
            for j in range(len(minerals_list[sort_index[i]])):
                if minerals_list[sort_index[i]][j] == "diamond":
                    result += 25
                elif minerals_list[sort_index[i]][j] == "iron":
                    result += 5
                else:
                    result += 1
    
    return result
