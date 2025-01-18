from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .corrections import custom_corrections


# Function to correct spelling mistakes
def correct_spelling(user_message):
    # Correct using custom corrections
    corrected_message = custom_corrections.get(user_message.lower(), user_message)
    return corrected_message

# A simple chatbot function
def get_chatbot_response(user_message):
    # Predefined responses
    responses = {
        "hello": "Hi! How can I help you today?",
        "bye": "Goodbye! Have a great day!",
        "are there scholarships available for students in sri lanka?": "Yes, scholarships are available for both state and private university students. State university students can apply for the Mahapola Higher Education Scholarship (merit-based) and the University Bursary Scheme (for financially disadvantaged students). Private universities like SLIIT, NSBM, and CINEC offer merit and need-based scholarships. International scholarships include the Commonwealth Scholarships, Australia Awards Scholarships, and Erasmus+ Scholarship.",
        "what are the top-ranked private universities in sri lanka?": "Top-ranked private universities in Sri Lanka include SLIIT (Sri Lanka Institute of Information Technology), NSBM Green University, CINEC Campus, ICBT Campus, and APIIT (Asia Pacific Institute of Information Technology).",
        "what are the top-ranked state universities in sri lanka?": "Some of the top-ranked state universities in Sri Lanka include the University of Colombo, University of Peradeniya, University of Moratuwa, University of Sri Jayewardenepura, University of Kelaniya, and Uva Wellassa University.",
        "what are the eligibility criteria for undergraduate courses at private universities?": "Private universities require GCE A/L, Cambridge A/L, or an equivalent qualification for admission. If you don't have direct entry qualifications, foundation programs may be available. You may also need to show English proficiency (IELTS/TOEFL).",
        "what is the eligibility criteria for undergraduate courses at state universities?": "To be eligible for undergraduate courses at state universities, you must have passed the GCE A/L or an equivalent qualification recognized by the UGC. Specific subject combinations are required for certain programs (e.g., Science stream for Medicine). There is no strict age limit for applicants.",
        "what are the steps to apply to a private university in sri lanka?": "To apply to a private university, first research the available programs and universities. Check the entry requirements, such as GCE A/L or international qualifications (IELTS/TOEFL may also be needed). Submit your application online with the required documents, and if applicable, attend any entrance exams or interviews.",
        "how can i apply to a state university in sri lanka?": "To apply to a state university in Sri Lanka, you need to sit for the GCE A/L examination with the required subjects. Afterward, check your Z-Score to see if you meet the cut-off marks for your desired program. You can then apply through the University Grants Commission (UGC) via their official website. Rank your preferred courses and wait for the selection results.",
        
    }

    # Normalize the user message for matching
    normalized_message = user_message.lower().strip()
    return responses.get(normalized_message, "Sorry, I didn't understand that.")

# Chatbot API view
class ChatbotAPIView(APIView):
    def post(self, request):
        user_message = request.data.get('message', '')
        if not user_message:
            return Response({'error': 'Message is required'}, status=status.HTTP_400_BAD_REQUEST)

        # Correct spelling mistakes in the user's message
        corrected_message = correct_spelling(user_message)

        # Get response from the chatbot function
        chatbot_response = get_chatbot_response(corrected_message)

        return Response({
            'original_message': user_message,
            'corrected_message': corrected_message,
            'response': chatbot_response
        })
