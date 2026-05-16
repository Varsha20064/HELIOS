# Requirements Document

## 1. Application Overview

### 1.1 Application Name
Global Insight Globe

### 1.2 Application Description
An interactive web platform featuring a 3D rotatable globe interface where users can click on countries to view key insights including currency information, stock market data, government policies, and AI-generated country briefs.

## 2. Users and Usage Scenarios

### 2.1 Target Users
- Students and researchers exploring global economics
- Business professionals analyzing international markets
- Developers showcasing portfolio projects
- Hackathon participants demonstrating technical skills

### 2.2 Core Usage Scenarios
- Quick access to country-specific economic and policy information
- Currency conversion calculations
- Overview of major stock market indices
- AI-powered country insights generation
- Interactive 3D globe exploration with 360-degree rotation

## 3. Page Structure and Functionality

### 3.1 Page Structure
```
Global Insight Globe
└── Main Page
    ├── Interactive 3D Globe (Center)
    └── Dynamic Info Panel (Right Side)
```

### 3.2 Main Page

#### 3.2.1 Page Background
- Apply light-themed gradient background
- Use soft pastel colors or light neutral tones
- Maintain visual hierarchy with globe as focal point
- Ensure sufficient contrast for readability

#### 3.2.2 Interactive 3D Globe
- Display a 3D globe at the center of the page
- Enable 360-degree rotation in all directions (horizontal and vertical)
- Support mouse drag interaction for manual rotation
- Illuminate the globe with lighting effects
- Enable hover effects on countries with smooth animations
- Support click interaction on any country to trigger info panel display
- Highlight selected country with visual feedback
- Maintain smooth rotation performance during interaction

#### 3.2.3 Dynamic Info Panel
When a country is clicked, display the following sections:

**Basic Information Section:**
- Country name
- Country flag icon
- Brief description

**Currency Section:**
- Local currency name and symbol
- Exchange rate versus USD
- Currency converter input field allowing users to enter amount and view converted value

**Stock Market Section:**
- Display one major stock index name
- Show current index value (mock/static data)
- Display trend indicator (up arrow for positive, down arrow for negative)

**Government Policy Insights Section:**
- List 2-3 key simplified policies in bullet points
- Focus on startup, education, or visa-related policies
- Keep each point concise (one line maximum)

**AI Insight Section:**
- Display a button labeled「Generate AI Country Brief」
- When clicked, generate and display a summary (maximum 80 words) containing:
  - Economy overview
  - Opportunities (especially tech/AI related)
  - One key insight

## 4. Business Rules and Logic

### 4.1 Globe Interaction
- Globe rotation continues smoothly when user drags
- Rotation stops when user releases mouse
- Country selection does not interrupt rotation capability
- Globe can be rotated while info panel is open

### 4.2 Data Handling
- Use mock or static data for currency rates and stock market information
- Sample data must be provided for at least 2-3 countries
- AI generation only triggers on button click, not automatically

### 4.3 Currency Conversion
- Calculate converted amount based on static exchange rate
- Formula: Converted Amount = Input Amount × Exchange Rate
- Display result immediately after user input

### 4.4 AI Brief Generation
- Generate content only when user clicks the button
- Limit output to 80 words maximum
- Structure output to include economy overview, opportunities, and one key insight

### 4.5 Info Panel Display Trigger
- Info panel displays only when a country is clicked
- Panel shows all sections: basic information, currency, stock market, government policies, and AI insight
- Panel remains visible until another country is clicked or user closes it

## 5. Exceptions and Edge Cases

| Scenario | Handling |
|----------|----------|
| User clicks on ocean or non-country area | No action, no panel display |
| User clicks on a country without data | Display message: Data not available for this country |
| Currency converter receives non-numeric input | Show error message: Please enter a valid number |
| AI brief generation fails | Display message: Unable to generate brief, please try again |
| User clicks multiple countries rapidly | Close previous panel and open new panel for latest selection |
| Globe rotation becomes too fast | Implement rotation speed limit to maintain control |

## 6. Acceptance Criteria

1. 3D globe displays correctly at page center with proper illumination
2. Globe rotates smoothly 360 degrees in all directions via mouse drag
3. Page background displays light-themed gradient with soft colors
4. All countries on globe are clickable with hover effects
5. Click animations execute smoothly without lag
6. Info panel opens on the right side only when a country is clicked
7. All sections (basic info, currency, stock market, policies, AI insight) display correctly in the panel
8. Currency converter calculates and displays results accurately
9. Stock market trend indicator shows correct direction (up/down arrow)
10. AI brief generates only on button click and respects 80-word limit
11. Globe rotation remains functional while info panel is open
12. Light-themed background provides good contrast and readability
13. Sample data for 2-3 countries is complete and displays correctly
14. Interface is responsive and optimized for desktop viewing

## 7. Out of Scope for Current Release

- User authentication and login system
- Real-time API integration for live currency or stock data
- Mobile-first responsive optimization
- Multi-language support
- User data persistence or saving favorites
- Historical data charts or trends
- Social sharing features
- Country comparison functionality
- Advanced filtering or search capabilities
- Backend database integration
- Auto-rotation animation for globe
- VR or AR globe viewing modes