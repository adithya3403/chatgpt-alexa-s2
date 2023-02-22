import openai
import sys


# command line arguments
ans1 = sys.argv[1]
ans2 = sys.argv[2]

# create a file named apikey.txt and paste your api key in it
openai.api_key_path="./apikey.txt"

def generatePrompt(ans1, ans2):
    return "Below are two paragraphs para1, para2. Check if para2 means the same as para1. para2 might be a much general statement of para1.\npara1 :" + ans1 + "para2 :" + ans2 + "\nAnswer with rating bewteen 0 to 10, it must be integers only: "

def generate(prompt):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        temperature=0,
        max_tokens=100,
    )
    return response

print(generate(generatePrompt(ans1, ans2)).choices[0].text)