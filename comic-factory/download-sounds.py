import requests

if __name__ == "__main__":
    for index in range(1, 28):
        s_index = str(index)
        no_of_zeros = "0" * (3 - len(str(index)))
        s_index = no_of_zeros + s_index + ".wav"
        response = requests.get(
            "http://static1.grsites.com/archive/sounds/comic/comic" +
            s_index)
        print response
        with open(s_index, "w") as f:
            f.write(response.content)
        print "Got", ("http://static1.grsites.com/archive/sounds/comic/comic" + s_index)
