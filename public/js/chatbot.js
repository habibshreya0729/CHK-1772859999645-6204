// Chatbot functionality
class PropertyTaxChatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.init();
    }

    init() {
        this.createChatbotElements();
        this.attachEventListeners();
        this.addBotMessage("Hello! 👋 I'm your Property Tax Assistant. I can help you with property tax payments, calculations, exemptions, due dates, and more. How can I assist you today?");
    }

    createChatbotElements() {
        // Create chatbot button
        const button = document.createElement('button');
        button.className = 'chatbot-button';
        button.id = 'chatbotButton';
        button.innerHTML = '<i class="fas fa-comments"></i>';
        button.title = 'Property Tax Assistant';
        document.body.appendChild(button);

        // Create chatbot container
        const container = document.createElement('div');
        container.className = 'chatbot-container';
        container.id = 'chatbotContainer';
        container.innerHTML = `
            <div class="chatbot-header">
                <h3>
                    <i class="fas fa-robot"></i>
                    Property Tax Assistant
                </h3>
                <button class="chatbot-close" id="chatbotClose">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="chatbot-messages" id="chatbotMessages"></div>
            <div class="quick-suggestions" id="quickSuggestions"></div>
            <div class="chatbot-input-area">
                <input 
                    type="text" 
                    class="chatbot-input" 
                    id="chatbotInput" 
                    placeholder="Ask about property tax..."
                    autocomplete="off"
                >
                <button class="chatbot-send" id="chatbotSend">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        `;
        document.body.appendChild(container);

        // Add quick suggestions
        this.addQuickSuggestions();
    }

    attachEventListeners() {
        const button = document.getElementById('chatbotButton');
        const close = document.getElementById('chatbotClose');
        const send = document.getElementById('chatbotSend');
        const input = document.getElementById('chatbotInput');

        button.addEventListener('click', () => this.toggleChatbot());
        close.addEventListener('click', () => this.closeChatbot());
        send.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
    }

    toggleChatbot() {
        this.isOpen = !this.isOpen;
        const container = document.getElementById('chatbotContainer');
        const button = document.getElementById('chatbotButton');
        
        if (this.isOpen) {
            container.classList.add('active');
            button.classList.add('active');
            document.getElementById('chatbotInput').focus();
        } else {
            container.classList.remove('active');
            button.classList.remove('active');
        }
    }

    closeChatbot() {
        this.isOpen = false;
        document.getElementById('chatbotContainer').classList.remove('active');
        document.getElementById('chatbotButton').classList.remove('active');
    }

    addQuickSuggestions() {
        const suggestions = [
            'How to pay tax?',
            'Due date',
            'Tax calculation',
            'Exemptions',
            'Required documents'
        ];

        const suggestionsContainer = document.getElementById('quickSuggestions');
        suggestions.forEach(suggestion => {
            const chip = document.createElement('span');
            chip.className = 'suggestion-chip';
            chip.textContent = suggestion;
            chip.addEventListener('click', () => {
                document.getElementById('chatbotInput').value = suggestion;
                this.sendMessage();
            });
            suggestionsContainer.appendChild(chip);
        });
    }

    async sendMessage() {
        const input = document.getElementById('chatbotInput');
        const message = input.value.trim();

        if (!message) return;

        // Add user message
        this.addUserMessage(message);
        input.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        try {
            // Send to backend
            const response = await fetch('/api/chatbot/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            });

            const data = await response.json();
            
            // Remove typing indicator
            this.hideTypingIndicator();

            // Add bot response
            this.addBotMessage(data.response);

        } catch (error) {
            this.hideTypingIndicator();
            this.addBotMessage('Sorry, I encountered an error. Please make sure the server is running and try again.');
            console.error('Chatbot error:', error);
        }
    }

    addUserMessage(message) {
        const messagesContainer = document.getElementById('chatbotMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message user';
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="message-bubble">
                ${this.escapeHtml(message)}
            </div>
        `;
        messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }

    addBotMessage(message) {
        const messagesContainer = document.getElementById('chatbotMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message bot';
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-bubble">
                ${this.escapeHtml(message)}
            </div>
        `;
        messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbotMessages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chatbot-message bot';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('chatbotMessages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PropertyTaxChatbot();
});
