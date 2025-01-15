from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

# A simple chatbot function
def get_chatbot_response(user_message):
    # In a real scenario, you can integrate with NLP models, AI, or predefined logic
    responses = {
        "hello": "Hi! How can I help you today?",
        "bye": "Goodbye! Have a great day!",
    }
    return responses.get(user_message.lower(), "Sorry, I didn't understand that.")

# Chatbot API view
class ChatbotAPIView(APIView):
    def post(self, request):
        user_message = request.data.get('message', '')
        if not user_message:
            return Response({'error': 'Message is required'}, status=status.HTTP_400_BAD_REQUEST)

        # Get response from the chatbot function
        chatbot_response = get_chatbot_response(user_message)

        return Response({'response': chatbot_response})
