// Page Loading Animation
window.addEventListener('load', function() {
    const loader = document.getElementById('page-loader');

    // Hide loader after page loads
    setTimeout(() => {
        loader.classList.add('hidden');

        // Remove loader from DOM after animation
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 1000); // Show loader for at least 1 second
});

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target) || hamburger.contains(event.target);
        
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 70; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(31, 41, 55, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Enhanced scroll animations for all sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Parallax scroll effect
    function initParallaxScroll() {
        const parallaxElements = document.querySelectorAll('.hero-container, .section-header, .project-card');

        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;

            parallaxElements.forEach((element, index) => {
                const speed = 0.2 + (index * 0.1);
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    // Animate section headers with advanced effects
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.style.opacity = '0';
        header.style.transform = 'translateY(30px) scale(0.9) rotateX(10deg)';
        header.style.transition = 'opacity 1s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        observer.observe(header);
    });

    // Animate about content with staggered effect
    const aboutContent = document.querySelectorAll('.about-content > *');
    aboutContent.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateX(-50px) rotateY(15deg) scale(0.9)';
        element.style.transition = `opacity 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.15}s, transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.15}s`;
        observer.observe(element);
    });

    // Animate project cards with staggered effect and 3D
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(80px) scale(0.8) rotateX(20deg)';
        card.style.transition = `opacity 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.1}s, transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.1}s`;
        observer.observe(card);
    });

    // Initialize parallax scroll
    initParallaxScroll();

    // Animate certification cards with staggered effect and 3D
    const certCards = document.querySelectorAll('.certification-card');
    certCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(60px) scale(0.85) rotateY(10deg)';
        card.style.transition = `opacity 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.12}s, transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.12}s`;
        observer.observe(card);
    });

    // Animate skills categories with staggered effect and advanced transforms
    const skillsCategories = document.querySelectorAll('.skills-category');
    skillsCategories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(50px) scale(0.9) rotateX(5deg)';
        category.style.transition = `opacity 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.15}s, transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.15}s`;
        observer.observe(category);
    });

    // Animate skill tags with wave effect
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = `translateY(30px) scale(0.8) rotateZ(${Math.sin(index) * 5}deg)`;
        tag.style.transition = `opacity 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.05}s, transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.05}s`;
        observer.observe(tag);
    });

    // Animate contact content with advanced effects
    const contactContent = document.querySelectorAll('.contact-content > *');
    contactContent.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(40px) scale(0.95)';
        element.style.transition = `opacity 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.2}s, transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.2}s`;
        observer.observe(element);
    });

    // Animate footer
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.style.opacity = '0';
        footer.style.transform = 'translateY(20px)';
        footer.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(footer);
    }

    // Initialize animated counters
    initAnimatedCounters();

    // Initialize interactive project card animations
    initProjectCardAnimations();

    // Initialize animated progress bars
    initProgressBars();

    // Initialize floating navigation elements
    initFloatingNavigation();

    // Initialize smooth section transitions
    initSectionTransitions();

    // Initialize advanced scroll animations
    initAdvancedScrollAnimations();

    // Initialize dark mode toggle
    initDarkModeToggle();

    // Initialize enhanced project showcases
    initProjectShowcases();

    // Initialize profile image animations
    initProfileImageAnimations();
});

// Advanced Scroll Animations
function initAdvancedScrollAnimations() {
    // Add CSS classes for advanced animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: advancedFadeIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        @keyframes advancedFadeIn {
            0% {
                opacity: 0;
                transform: translateY(50px) scale(0.9);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        .parallax-element {
            transition: transform 0.1s linear;
        }

        .stagger-animate > *:nth-child(1) { animation-delay: 0.1s; }
        .stagger-animate > *:nth-child(2) { animation-delay: 0.2s; }
        .stagger-animate > *:nth-child(3) { animation-delay: 0.3s; }
        .stagger-animate > *:nth-child(4) { animation-delay: 0.4s; }
        .stagger-animate > *:nth-child(5) { animation-delay: 0.5s; }
    `;
    document.head.appendChild(style);

    // Add stagger classes to skill categories
    const skillsContainers = document.querySelectorAll('.skills-list');
    skillsContainers.forEach(container => {
        container.classList.add('stagger-animate');
    });
}

// Smooth Section Transitions
function initSectionTransitions() {
    // Add transition effects when switching sections
    const sections = document.querySelectorAll('section');
    let isTransitioning = false;

    // Add subtle fade transition between sections
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isTransitioning) {
                isTransitioning = true;

                // Add a subtle scale effect
                entry.target.style.transform = 'scale(0.98)';

                setTimeout(() => {
                    entry.target.style.transform = 'scale(1)';
                    isTransitioning = false;
                }, 100);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Add page transition effects for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Add transition effect
                targetElement.style.transform = 'translateY(20px)';
                targetElement.style.opacity = '0';

                // Scroll to element
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Animate in
                setTimeout(() => {
                    targetElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    targetElement.style.opacity = '1';
                    targetElement.style.transform = 'translateY(0)';
                }, 100);
            }
        });
    });
}

// Enhanced Project Showcases
function initProjectShowcases() {
    // Project data with demos and code snippets
    const projectsData = {
        'stock-dashboard': {
            title: 'AI-Powered Stock Market Dashboard',
            subtitle: 'Interactive dashboard with real-time data visualization',
            demo: `
                <div class="demo-container">
                    <h4>🚀 Live Dashboard Preview</h4>
                    <p>This interactive dashboard features:</p>
                    <ul style="color: var(--text-secondary); margin: 1rem 0;">
                        <li>📊 Real-time stock price tracking</li>
                        <li>📈 Interactive candlestick charts</li>
                        <li>🤖 AI-powered price predictions</li>
                        <li>📱 Responsive design for all devices</li>
                    </ul>
                    <div style="background: #1a1a1a; padding: 1rem; border-radius: 8px; text-align: center; color: var(--primary-color);">
                        <i class="fas fa-chart-line" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
                        <p>Interactive Demo Placeholder</p>
                        <small>Streamlit dashboard with Plotly visualizations</small>
                    </div>
                </div>
            `,
            code: `
                <div class="code-snippet">
                    <button class="copy-btn" onclick="copyToClipboard(this)">Copy</button>
                    <pre><code>import streamlit as st
import plotly.graph_objects as go
import yfinance as yf
from datetime import datetime

# Streamlit app configuration
st.set_page_config(
    page_title="AI Stock Dashboard",
    page_icon="📈",
    layout="wide"
)

@st.cache_data
def load_stock_data(ticker, period='1y'):
    """Load stock data using yfinance"""
    stock = yf.Ticker(ticker)
    df = stock.history(period=period)
    return df

def create_candlestick_chart(df):
    """Create interactive candlestick chart"""
    fig = go.Figure(data=[go.Candlestick(
        x=df.index,
        open=df['Open'],
        high=df['High'],
        low=df['Low'],
        close=df['Close']
    )])
    return fig

# Main dashboard
st.title("🤖 AI Stock Market Dashboard")
ticker = st.sidebar.text_input("Enter Stock Ticker", "AAPL")

if ticker:
    df = load_stock_data(ticker)
    fig = create_candlestick_chart(df)
    st.plotly_chart(fig, use_container_width=True)</code></pre>
                </div>
            `
        },
        'salary-predictor': {
            title: 'Employee Salary Prediction System',
            subtitle: 'Machine learning model for salary prediction',
            demo: `
                <div class="demo-container">
                    <h4>🔮 ML Prediction Engine</h4>
                    <p>Advanced salary prediction using:</p>
                    <ul style="color: var(--text-secondary); margin: 1rem 0;">
                        <li>📊 Multiple linear regression models</li>
                        <li>🎯 Feature engineering and selection</li>
                        <li>📈 Model evaluation and optimization</li>
                        <li>🔄 Real-time prediction updates</li>
                    </ul>
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 1rem; border-radius: 8px; text-align: center; color: white;">
                        <i class="fas fa-money-bill-wave" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
                        <p>Salary Prediction Model</p>
                        <small>Scikit-learn powered ML system</small>
                    </div>
                </div>
            `,
            code: `
                <div class="code-snippet">
                    <button class="copy-btn" onclick="copyToClipboard(this)">Copy</button>
                    <pre><code>import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import joblib

class SalaryPredictor:
    def __init__(self):
        self.model = LinearRegression()
        self.is_trained = False

    def prepare_features(self, df):
        """Feature engineering for salary prediction"""
        # Create dummy variables for categorical features
        categorical_cols = ['experience_level', 'employment_type', 'remote_ratio']

        # Select numerical features
        numerical_cols = ['work_year', 'salary_in_usd']

        # One-hot encoding
        df_encoded = pd.get_dummies(df, columns=categorical_cols)

        return df_encoded[numerical_cols + list(df_encoded.columns.drop(numerical_cols))]

    def train(self, X, y):
        """Train the salary prediction model"""
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

        self.model.fit(X_train, y_train)

        # Model evaluation
        predictions = self.model.predict(X_test)
        mse = mean_squared_error(y_test, predictions)
        r2 = r2_score(y_test, predictions)

        self.is_trained = True
        return mse, r2

    def predict(self, features):
        """Make salary predictions"""
        if not self.is_trained:
            raise ValueError("Model not trained yet")
        return self.model.predict(features)</code></pre>
                </div>
            `
        }
    };

    // Make project data available globally
    window.projectsData = projectsData;
}

// Project Modal Functions
function showProjectDemo(projectId) {
    const modal = document.getElementById('project-modal');
    const title = document.getElementById('project-title');
    const subtitle = document.getElementById('project-subtitle');
    const content = document.getElementById('project-content');

    const project = window.projectsData[projectId];
    if (project) {
        title.textContent = project.title;
        subtitle.textContent = project.subtitle;
        content.innerHTML = project.demo;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function showCodeSnippet(projectId) {
    const modal = document.getElementById('project-modal');
    const title = document.getElementById('project-title');
    const subtitle = document.getElementById('project-subtitle');
    const content = document.getElementById('project-content');

    const project = window.projectsData[projectId];
    if (project) {
        title.textContent = project.title + ' - Code Snippet';
        subtitle.textContent = 'Implementation details and code structure';
        content.innerHTML = project.code;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Copy to clipboard functionality
function copyToClipboard(button) {
    const codeSnippet = button.parentElement.querySelector('code');
    const textArea = document.createElement('textarea');
    textArea.value = codeSnippet.textContent;
    document.body.appendChild(textArea);
    textArea.select();

    try {
        document.execCommand('copy');
        // Visual feedback
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.background = 'var(--success-color)';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = 'var(--primary-color)';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }

    document.body.removeChild(textArea);
}

// Close project modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('project-modal');
    const modalContent = document.querySelector('.project-modal-content');

    if (event.target === modal) {
        closeProjectModal();
    }
});

// Close project modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProjectModal();
    }
});

// Floating Navigation Elements and Micro-interactions
function initFloatingNavigation() {
    // Back to top button functionality
    const backToTopBtn = document.getElementById('back-to-top');

    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Back to top button click handler
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Add a little animation feedback
        this.style.transform = 'translateY(-3px) scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'translateY(0) scale(1)';
        }, 200);
    });

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add magnetic effect to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            this.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) rotate(${x * 0.02}deg)`;
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0) rotate(0deg)';
        });
    });

    // Add magnetic effect to buttons
    const buttonElements = document.querySelectorAll('.btn');
    buttonElements.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });

    // Initialize magnetic cursor effect
    initMagneticCursor();

    // Initialize floating elements
    initFloatingElements();
}

// Animated Progress Bars
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');

    const progressObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width;
                progressObserver.unobserve(entry.target);
            }
        });
        
        // Profile Image Animations
        function initProfileImageAnimations() {
            const profileContainer = document.querySelector('.profile-container');
            const profileImage = document.querySelector('.profile-image');
        
            if (profileContainer && profileImage) {
                // Add subtle floating animation
                let floatDirection = 1;
                setInterval(() => {
                    if (Math.random() > 0.95) { // 5% chance to trigger
                        profileContainer.style.transform = `scale(1.02) translateY(-2px)`;
                        setTimeout(() => {
                            profileContainer.style.transform = 'scale(1) translateY(0)';
                        }, 1000);
                    }
                }, 3000);
        
                // Add click interaction for profile image
                profileContainer.addEventListener('click', function() {
                    // Add a subtle pulse effect
                    this.style.transform = 'scale(1.1)';
                    this.style.boxShadow = '0 30px 60px rgba(100, 255, 218, 0.5), 0 0 100px rgba(100, 255, 218, 0.4)';
        
                    setTimeout(() => {
                        this.style.transform = 'scale(1) translateY(0)';
                        this.style.boxShadow = '0 20px 40px rgba(100, 255, 218, 0.3), 0 0 60px rgba(100, 255, 218, 0.2)';
                    }, 600);
        
                    // Optional: Show a fun fact or animation
                    showProfileFact();
                });
        
                // Add magnetic effect to profile image
                profileContainer.addEventListener('mousemove', function(e) {
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
        
                    const distance = Math.sqrt(x * x + y * y);
                    if (distance < 100) {
                        const strength = (100 - distance) / 100;
                        this.style.transform = `scale(1.05) translate(${x * strength * 0.1}px, ${y * strength * 0.1}px)`;
                    }
                });
        
                profileContainer.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1) translate(0, 0)';
                });
            }
        }
        
        // Profile Fun Facts
        function showProfileFact() {
            const facts = [
                "🚀 Passionate about AI & Machine Learning",
                "📊 Data Science enthusiast",
                "☁️ Cloud technology explorer",
                "🎓 BCA Student at Uttaranchal University",
                "🏆 10+ Professional Certifications"
            ];
        
            const randomFact = facts[Math.floor(Math.random() * facts.length)];
        
            // Create floating fact bubble
            const factBubble = document.createElement('div');
            factBubble.textContent = randomFact;
            factBubble.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(100, 255, 218, 0.9);
                color: var(--bg-primary);
                padding: 0.5rem 1rem;
                border-radius: 20px;
                font-size: 0.9rem;
                font-weight: 600;
                pointer-events: none;
                z-index: 10;
                animation: factBubble 3s ease-in-out forwards;
                backdrop-filter: blur(10px);
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            `;
        
            const profileContainer = document.querySelector('.profile-container');
            profileContainer.style.position = 'relative';
            profileContainer.appendChild(factBubble);
        
            setTimeout(() => {
                if (factBubble.parentNode) {
                    factBubble.remove();
                }
            }, 3000);
        }
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });

    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
}

// Interactive Project Card Animations
function initProjectCardAnimations() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        // Add 3D tilt effect on mouse move
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.02)`;
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });

        // Add magnetic effect to icons
        const icon = card.querySelector('.project-header i');
        if (icon) {
            card.addEventListener('mousemove', function(e) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const iconRect = icon.getBoundingClientRect();
                const iconCenterX = iconRect.left + iconRect.width / 2 - rect.left;
                const iconCenterY = iconRect.top + iconRect.height / 2 - rect.top;

                const deltaX = (x - iconCenterX) * 0.1;
                const deltaY = (y - iconCenterY) * 0.1;

                icon.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
            });

            card.addEventListener('mouseleave', function() {
                icon.style.transform = 'translate(0, 0)';
            });
        }
    });
}

// Animated Counters Functionality
function initAnimatedCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    });

    statNumbers.forEach(stat => {
        counterObserver.observe(stat);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
        current += increment;

        if (current >= target) {
            element.textContent = target;
        } else {
            element.textContent = Math.floor(current);
        }

        if (current >= target) {
            clearInterval(timer);
            // Add a little bounce effect when counter completes
            element.style.transform = 'scale(1.1)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
        }
    }, 16);
}

// Enhanced Resume Download Functionality
function downloadResume() {
    // Show confirmation modal instead of direct download
    const modal = document.getElementById('resume-modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeResumeModal() {
    const modal = document.getElementById('resume-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

function confirmDownload() {
    // Close modal first
    closeResumeModal();

    // Show loading state on button
    const downloadBtn = document.getElementById('resume-download-btn');
    const originalText = downloadBtn.innerHTML;
    downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
    downloadBtn.disabled = true;

    try {
        // Try multiple download methods for better browser compatibility
        const pdfPath = 'Arjun_Tomar_CV.pdf';

        // Method 1: Fetch API with blob (most reliable)
        console.log('Attempting download using Fetch API...');
        fetch(pdfPath)
            .then(response => {
                console.log('Fetch response status:', response.status);
                if (!response.ok) {
                    throw new Error(`File not found or not accessible: ${response.status}`);
                }
                return response.blob();
            })
            .then(blob => {
                // Create blob URL for download
                const blobUrl = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = blobUrl;
                link.download = 'Arjun_Tomar_CV.pdf';

                // Trigger download
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // Clean up blob URL
                window.URL.revokeObjectURL(blobUrl);

                // Show success message
                setTimeout(() => {
                    showDownloadSuccess();

                    // Reset button after 3 seconds
                    setTimeout(() => {
                        downloadBtn.innerHTML = originalText;
                        downloadBtn.disabled = false;
                    }, 3000);
                }, 500);
            })
            .catch(error => {
                console.error('Fetch download failed:', error);

                // Method 2: Fallback to traditional method
                try {
                    const link = document.createElement('a');
                    link.href = pdfPath;
                    link.download = 'Arjun_Tomar_CV.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);

                    setTimeout(() => {
                        showDownloadSuccess();
                        setTimeout(() => {
                            downloadBtn.innerHTML = originalText;
                            downloadBtn.disabled = false;
                        }, 3000);
                    }, 500);
                } catch (fallbackError) {
                    console.error('Fallback download also failed:', fallbackError);
                    handleDownloadError();
                }
            });

    } catch (error) {
        console.error('Download initialization failed:', error);

        // Method 3: Alternative approach using window.open as final fallback
        try {
            const link = document.createElement('a');
            link.href = 'Arjun_Tomar_CV.pdf';
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setTimeout(() => {
                showDownloadSuccess();
                setTimeout(() => {
                    downloadBtn.innerHTML = originalText;
                    downloadBtn.disabled = false;
                }, 3000);
            }, 500);
        } catch (finalError) {
            console.error('All download methods failed:', finalError);
            handleDownloadError();
        }
    }
}

function showDownloadSuccess() {
    // Remove existing success message if any
    const existingSuccess = document.querySelector('.download-success');
    if (existingSuccess) {
        existingSuccess.remove();
    }

    // Create success message
    const successDiv = document.createElement('div');
    successDiv.className = 'download-success';
    successDiv.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>Resume downloaded successfully!</span>
    `;

    // Add to DOM
    document.body.appendChild(successDiv);

    // Show with animation
    setTimeout(() => {
        successDiv.classList.add('show');
    }, 100);

    // Auto-hide after 4 seconds
    setTimeout(() => {
        successDiv.classList.remove('show');
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.remove();
            }
        }, 300);
    }, 4000);
}

// Dark Mode Toggle Functionality
function initDarkModeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        icon.className = 'fas fa-sun';
        themeToggle.classList.add('active');
    }

    themeToggle.addEventListener('click', function() {
        const isCurrentlyDark = body.getAttribute('data-theme') === 'dark';

        if (isCurrentlyDark) {
            // Switch to light mode
            body.setAttribute('data-theme', 'light');
            icon.className = 'fas fa-moon';
            themeToggle.classList.remove('active');
            localStorage.setItem('theme', 'light');
        } else {
            // Switch to dark mode
            body.setAttribute('data-theme', 'dark');
            icon.className = 'fas fa-sun';
            themeToggle.classList.add('active');
            localStorage.setItem('theme', 'dark');
        }

        // Add a ripple effect to the toggle button
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            width: 100px;
            height: 100px;
            background: rgba(100, 255, 218, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;

        themeToggle.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });

    // Add smooth transition when theme changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                body.style.transition = 'background-color 0.5s ease, color 0.5s ease';

                setTimeout(() => {
                    body.style.transition = '';
                }, 500);
            }
        });
    });

    observer.observe(body, {
        attributes: true,
        attributeFilter: ['data-theme']
    });
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('resume-modal');
    if (event.target == modal) {
        closeResumeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeResumeModal();
    }
});

// Handle download errors
function handleDownloadError() {
    const downloadBtn = document.getElementById('resume-download-btn');
    downloadBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Download Failed';
    downloadBtn.style.backgroundColor = '#ef4444';

    setTimeout(() => {
        downloadBtn.innerHTML = '<i class="fas fa-download"></i> Resume';
        downloadBtn.style.backgroundColor = '';
        downloadBtn.disabled = false;
    }, 3000);
}

// Typing animation for hero subtitle
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    element.style.opacity = '1';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Add loading animation to skill tags
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    tag.style.opacity = '0';
    tag.style.transform = 'translateY(20px)';

    setTimeout(() => {
        tag.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        tag.style.opacity = '1';
        tag.style.transform = 'translateY(0)';
    }, index * 100);
});

// Initialize typing animation for hero subtitle
document.addEventListener('DOMContentLoaded', function() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.style.opacity = '0';
        setTimeout(() => {
            typeWriter(heroSubtitle, 'Data Science | AI | Cloud Enthusiast', 100);
        }, 800);
    }

    // Initialize floating particles
    initFloatingParticles();

    // Initialize advanced micro-interactions
    initAdvancedMicroInteractions();
});

// Floating Particles Effect
function initFloatingParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'floating-particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    document.body.appendChild(particlesContainer);

    // Create floating particles
    const particleCount = 20;
    const colors = ['#64ffda', '#52e0c4', '#00d4ff', '#0099cc'];

    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
            createFloatingParticle(particlesContainer, colors);
        }, i * 500);
    }
}

function createFloatingParticle(container, colors) {
    const particle = document.createElement('div');
    const size = Math.random() * 4 + 2;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const duration = Math.random() * 10 + 15;
    const startX = Math.random() * 100;
    const endX = startX + (Math.random() * 200 - 100);

    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        box-shadow: 0 0 ${size * 2}px ${color};
        opacity: ${Math.random() * 0.6 + 0.3};
        left: ${startX}%;
        top: 100vh;
        animation: floatParticle ${duration}s linear infinite;
    `;

    container.appendChild(particle);

    // Remove particle after animation completes
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, duration * 1000);
}

// Magnetic Cursor Effect
function initMagneticCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'magnetic-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(100, 255, 218, 0.8) 0%, rgba(100, 255, 218, 0.3) 70%, transparent 100%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        transform: translate(-50%, -50%);
        opacity: 0;
    `;

    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.opacity = '1';
    });

    function animateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;

        cursorX += dx * 0.15;
        cursorY += dy * 0.15;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        // Add magnetic effect to interactive elements
        const magneticElements = document.querySelectorAll('.btn, .nav-link, .skill-tag');
        magneticElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elementX = rect.left + rect.width / 2;
            const elementY = rect.top + rect.height / 2;

            const distance = Math.sqrt(Math.pow(cursorX - elementX, 2) + Math.pow(cursorY - elementY, 2));

            if (distance < 100) {
                const strength = (100 - distance) / 100;
                const moveX = (cursorX - elementX) * strength * 0.3;
                const moveY = (cursorY - elementY) * strength * 0.3;

                element.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        });

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Hide cursor when mouse leaves window
    document.addEventListener('mouseleave', function() {
        cursor.style.opacity = '0';
    });
}

// Floating Elements
function initFloatingElements() {
    const floatingElements = [
        { selector: '.hero-title', icon: 'fas fa-code', color: '#64ffda' },
        { selector: '.section-title', icon: 'fas fa-database', color: '#64ffda' },
        { selector: '.project-header i', icon: 'fas fa-project-diagram', color: '#64ffda' }
    ];

    floatingElements.forEach((element, index) => {
        setTimeout(() => {
            createFloatingIcon(element);
        }, index * 2000);
    });
}

function createFloatingIcon(element) {
    const icon = document.createElement('i');
    icon.className = element.icon;
    icon.style.cssText = `
        position: absolute;
        color: ${element.color};
        font-size: 1.2rem;
        opacity: 0.3;
        pointer-events: none;
        z-index: 1;
        animation: floatIcon 6s ease-in-out infinite;
    `;

    const targetElement = document.querySelector(element.selector);
    if (targetElement) {
        targetElement.style.position = 'relative';
        targetElement.appendChild(icon);

        // Randomize initial position
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        icon.style.left = startX + '%';
        icon.style.top = startY + '%';

        // Animate floating movement
        let direction = 1;
        setInterval(() => {
            const currentY = parseFloat(icon.style.top) || startY;
            const newY = currentY + (direction * 0.5);
            icon.style.top = Math.max(0, Math.min(100, newY)) + '%';

            if (newY >= 100 || newY <= 0) {
                direction *= -1;
            }
        }, 100);
    }
}

// Performance Optimized Micro-interactions
function initAdvancedMicroInteractions() {
    // Throttle function for better performance
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Debounce function for scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Add hover sound effect simulation (visual feedback)
    const interactiveElements = document.querySelectorAll('.btn, .nav-link, .skill-tag, .project-card');

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1) saturate(1.2)';
        });

        element.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1) saturate(1)';
        });
    });

    // Optimized scroll handler with throttling
    const optimizedScrollHandler = throttle(function() {
        const scrolled = window.pageYOffset;

        // Animate elements based on scroll with reduced frequency
        const animatedElements = document.querySelectorAll('.hero-container, .about-image, .project-card:nth-child(odd)');
        animatedElements.forEach((element, index) => {
            const speed = 0.03 + (index * 0.01); // Reduced speed for better performance
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }, 16); // ~60fps

    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });

    // Add performance monitoring
    if ('performance' in window) {
        console.log('Animation performance monitoring enabled');
    }

    // Reduce animations on slower devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        document.body.classList.add('reduced-animations');
    }
}
