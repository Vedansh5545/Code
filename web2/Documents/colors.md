# Morning Coffee and Robot Color Theme

## Primary Palette
1. **Coffee Brown**: `#4E342E`  
   - Represents the richness of coffee. Use this as a background or header color.
2. **Latte Beige**: `#D7CCC8`  
   - A soft beige for light backgrounds or text areas.
3. **Espresso Black**: `#2E2E2E`  
   - For text or contrasting elements like borders and buttons.

## Accent Palette
1. **Metallic Silver**: `#B0BEC5`  
   - For robot-like accents, buttons, and details.
2. **Robot Blue**: `#0288D1`  
   - A pop of futuristic blue for links, highlights, and call-to-action elements.
3. **Copper Glow**: `#FF8A65`  
   - Warm highlights to balance the robotic theme with morning sunlight vibes.

## Neutral Tones
1. **Steamed Milk White**: `#FFFFFF`  
   - For text backgrounds or minimalistic sections.
2. **Coffee Cream**: `#E0E0E0`  
   - Subtle background for content sections.

## Gradient Example
- **Morning Coffee Gradient**: `linear-gradient(135deg, #4E342E, #D7CCC8)`
- **Robot Glow Gradient**: `linear-gradient(135deg, #0288D1, #B0BEC5)`

## Example Usage
### Background:
- Coffee Brown (`#4E342E`) or Latte Beige (`#D7CCC8`)

### Text:
- Espresso Black (`#2E2E2E`) for headings
- Steamed Milk White (`#FFFFFF`) for dark backgrounds

### Buttons and Highlights:
- Robot Blue (`#0288D1`) for active states
- Copper Glow (`#FF8A65`) for hover effects

### Borders and Dividers:
- Metallic Silver (`#B0BEC5`) for a clean, modern look

## Sample CSS
```css
:root {
    --coffee-brown: #4E342E;
    --latte-beige: #D7CCC8;
    --espresso-black: #2E2E2E;
    --metallic-silver: #B0BEC5;
    --robot-blue: #0288D1;
    --copper-glow: #FF8A65;
    --steamed-milk-white: #FFFFFF;
    --coffee-cream: #E0E0E0;
}

body {
    background-color: var(--latte-beige);
    color: var(--espresso-black);
}

nav {
    background-color: var(--coffee-brown);
    color: var(--steamed-milk-white);
}

a {
    color: var(--robot-blue);
}

a:hover {
    color: var(--copper-glow);
}

button {
    background-color: var(--robot-blue);
    color: var(--steamed-milk-white);
    border: 2px solid var(--metallic-silver);
}

button:hover {
    background-color: var(--copper-glow);
}
```

