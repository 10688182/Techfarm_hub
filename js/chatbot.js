// Chatbot Database
const chatbotDatabase = {
  greetings: {
    patterns: [
      "hello",
      "hi",
      "hey",
      "good morning",
      "good afternoon",
      "good evening",
    ],
    responses: [
      "Hello! Welcome to TECHFARM Hub. How can I assist you today?",
      "Hi there! I'm the TECHFARM Hub assistant. What can I help you with?",
      "Greetings! I'm here to provide information about TECHFARM Hub's programs and services.",
    ],
  },
  about: {
    patterns: [
      "about",
      "who are you",
      "what is techfarm",
      "tell me about techfarm",
    ],
    responses: [
      "TECHFARM Hub is at the intersection of agriculture and technology, fostering innovation that addresses global food security challenges while creating economic opportunities. We've supported 150+ startups since 2018.",
      "We're building the future of sustainable agriculture through investment in visionary entrepreneurs and cutting-edge training programs. Our global network includes 500+ industry experts across 15+ countries.",
      "TECHFARM Hub empowers agri-tech innovators with funding, mentorship, and resources. We've deployed over $25M in funding and trained 2,000+ professionals.",
    ],
  },
  programs: {
    patterns: ["program", "training", "course", "accelerator", "incubator"],
    responses: [
      "We offer several programs: 1) Accelerator Program (6 months, $50K funding), 2) Professional Training (12-week courses), and 3) Innovation Challenges (annual competitions with $100K in prizes). Which program interests you?",
      "Our programs include intensive startup acceleration, professional development courses in agri-tech, and annual innovation competitions. Would you like details about any specific program?",
      "TECHFARM Hub provides structured pathways including our 6-month accelerator, 12-week training courses, and innovation challenges with cash prizes. What would you like to know more about?",
    ],
  },
  funding: {
    patterns: ["funding", "investment", "grant", "money", "financial support"],
    responses: [
      "We provide various funding opportunities including innovation grants, startup investments, and competition prizes. We've deployed over $25M to agri-tech solutions. Would you like information on how to apply?",
      "TECHFARM Hub offers funding through our accelerator program ($50K per startup), innovation challenges ($100K in annual prizes), and direct investment opportunities. Our application process is competitive but rewarding!",
      "Financial support is available through multiple channels: direct startup funding, innovation grants, and competition prizes. We've awarded over $2M in grants this year alone.",
    ],
  },
  events: {
    patterns: ["event", "workshop", "conference", "summit", "meetup"],
    responses: [
      "We host regular events including the Agri-Tech Innovation Summit (June 15), Precision Agriculture Workshop (July 8), and Agri-Tech Investors Meetup (August 22). Check our Events section for details!",
      "Upcoming events: Virtual Agri-Tech Innovation Summit on June 15, Precision Agriculture Workshop in Nairobi on July 8, and Investors Meetup in Lagos on August 22. Which event interests you?",
      "Our community events include conferences, hands-on workshops, and networking meetups. We have both virtual and in-person options throughout the year.",
    ],
  },
  services: {
    patterns: ["service", "support", "help", "consulting", "mentorship"],
    responses: [
      "We offer comprehensive services: Training & Workshops, Mentorship Programs, Startup Support, Community Engagement, Business Consultancy, and Multimedia Services. Which service are you interested in?",
      "Our services include hands-on training, one-on-one mentorship, startup incubation, community building, business strategy consulting, and professional content creation. How can we support you?",
      "TECHFARM Hub provides end-to-end support including education programs, expert mentorship, funding access, business consulting, and networking opportunities. What type of support do you need?",
    ],
  },
  contact: {
    patterns: ["contact", "email", "phone", "address", "location", "visit"],
    responses: [
      "You can reach us at info@techfarmhub.com or call +1 (555) 123-4567. Our office is at 123 Innovation Drive, Tech Valley, CA 94025. We'd love to hear from you!",
      "Contact information: Email: info@techfarmhub.com | Phone: +1 (555) 123-4567 | Address: 123 Innovation Drive, Tech Valley, CA 94025. When would you like to connect?",
      "Get in touch via email at info@techfarmhub.com, phone at +1 (555) 123-4567, or visit our office at 123 Innovation Drive. Our team is ready to assist you!",
    ],
  },
  careers: {
    patterns: ["job", "career", "work", "employment", "hire", "recruitment"],
    responses: [
      "We're always looking for passionate individuals to join our team! Check our Careers section for current openings in agri-tech innovation, program management, and community engagement.",
      "TECHFARM Hub offers exciting career opportunities in a dynamic environment. Visit our website's Careers page to see current job openings and application details.",
      "Join our mission-driven team! We have positions available in various departments. Please check our Careers section for the latest opportunities and how to apply.",
    ],
  },
  partnerships: {
    patterns: [
      "partner",
      "collaboration",
      "sponsor",
      "affiliate",
      "work together",
    ],
    responses: [
      "We collaborate with leading organizations worldwide to advance agri-tech innovation. If you're interested in partnership opportunities, please contact our partnerships team at partnerships@techfarmhub.com.",
      "TECHFARM Hub values strategic partnerships with industry leaders, academic institutions, and innovation ecosystems. Let's discuss how we can work together!",
      "Our partnership network includes 150+ organizations across agriculture, technology, and investment sectors. We're always open to new collaborations that advance sustainable agriculture.",
    ],
  },
  applications: {
    patterns: [
      "apply",
      "application",
      "submit",
      "join",
      "participate",
      "enroll",
    ],
    responses: [
      "Applications for our programs are accepted on a rolling basis. Visit our website's Programs section to find application forms and deadlines for each opportunity.",
      "To apply for any TECHFARM Hub program, please visit our website and navigate to the specific program page for application details, requirements, and deadlines.",
      "We welcome applications from innovative agri-tech ventures and professionals. Check our website for current application cycles and program-specific requirements.",
    ],
  },
  default: {
    responses: [
      "I'm here to help with information about TECHFARM Hub's programs, services, events, and funding opportunities. Could you please rephrase your question?",
      "I specialize in providing information about our agri-tech innovation programs. Could you tell me more about what you're looking for?",
      "I'd love to help! Could you provide more details about your interest in TECHFARM Hub so I can give you the most relevant information?",
    ],
  },
};

// Main app function
function app() {
  return {
    chatbotOpen: false,
    chatbotMessages: [
      {
        text: "Hello! I'm the TECHFARM Hub assistant. I can help you with information about our programs, services, events, and funding opportunities. What would you like to know?",
        sender: "bot",
      },
    ],
    chatbotNewMessage: "",
    chatbotTyping: false,

    sendChatbotMessage() {
      if (this.chatbotNewMessage.trim() === "") return;

      // Add user message
      this.chatbotMessages.push({
        text: this.chatbotNewMessage,
        sender: "user",
      });
      const userMessage = this.chatbotNewMessage.toLowerCase();
      this.chatbotNewMessage = "";

      // Show typing indicator
      this.chatbotTyping = true;

      // Generate response after delay
      setTimeout(() => {
        this.chatbotTyping = false;
        const response = this.generateChatbotResponse(userMessage);
        this.chatbotMessages.push({ text: response, sender: "bot" });

        // Scroll to bottom
        this.$nextTick(() => {
          const messagesContainer = this.$refs.messages;
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        });
      }, 1500);
    },

    generateChatbotResponse(message) {
      // Check each category for matching patterns
      for (const [category, data] of Object.entries(chatbotDatabase)) {
        if (category === "default") continue;

        for (const pattern of data.patterns) {
          if (message.includes(pattern)) {
            const responses = data.responses;
            return responses[Math.floor(Math.random() * responses.length)];
          }
        }
      }

      // Default response if no patterns match
      const defaultResponses = chatbotDatabase.default.responses;
      return defaultResponses[
        Math.floor(Math.random() * defaultResponses.length)
      ];
    },
  };
}
