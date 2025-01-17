from rapidfuzz import process

# Define the keywords dictionary
keywords = {
    "medicine": ["medicine", "mdicine", "mdcine", "medecine"],
    "engineering": ["engineering", "engeneering", "enginering", "engneering"],
    "science": ["science", "sciens", "scince", "scince"],
}

def detect_keyword(user_query):
    # Flatten the keywords into a single list
    all_keywords = [keyword for sublist in keywords.values() for keyword in sublist]

    # Match user query to the closest keyword
    match, score = process.extractOne(user_query, all_keywords)

    # Find the original category (e.g., medicine, engineering) based on match
    for category, variations in keywords.items():
        if match in variations:
            return category, score
    return None, 0
