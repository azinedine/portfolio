# ScrollIndicator Component

A reusable scroll indicator component with smooth animations and theme support.

## Features

- ✅ **Theme Support** - Automatically adapts to light/dark modes
- ✅ **Multiple Variants** - Default, minimal, and outlined styles
- ✅ **Flexible Positioning** - Top, bottom, left, right positions
- ✅ **Smooth Animations** - Beautiful Framer Motion animations
- ✅ **Customizable Text** - Custom scroll text
- ✅ **TypeScript Support** - Fully typed with proper interfaces
- ✅ **Performance Optimized** - Memoized component

## Basic Usage

```tsx
import { ScrollIndicator } from '@/components/common/ScrollIndicator'

// Basic scroll indicator
<ScrollIndicator onClick={() => scrollToNext()} />
```

## Advanced Usage

```tsx
// Customized scroll indicator
<ScrollIndicator 
  onClick={handleScrollToNext}
  text="Scroll down to see more"
  delay={1.5}
  position="bottom"
  variant="outlined"
  className="custom-class"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onClick` | `() => void` | - | Click handler function |
| `text` | `string` | `"Scroll to explore"` | Text to display |
| `delay` | `number` | `2` | Animation delay in seconds |
| `className` | `string` | `""` | Additional CSS classes |
| `position` | `'bottom' \| 'top' \| 'left' \| 'right'` | `'bottom'` | Position on screen |
| `variant` | `'default' \| 'minimal' \| 'outlined'` | `'default'` | Visual style variant |

## Variants

### Default
- Standard styling with good contrast
- Gray colors in light mode, white in dark mode
- Single border around scroll indicator

### Minimal
- Subtle, less prominent styling
- Lighter colors for minimal visual impact
- Thinner borders

### Outlined
- Bold, prominent styling
- Stronger contrast and thicker borders
- More visible for important sections

## Positions

### Bottom (Default)
```tsx
<ScrollIndicator position="bottom" />
```
- Positioned at bottom center of container
- Most common use case

### Top
```tsx
<ScrollIndicator position="top" />
```
- Positioned at top center of container
- Useful for "scroll up" indicators

### Left
```tsx
<ScrollIndicator position="left" />
```
- Positioned at left center of container
- For horizontal scrolling

### Right
```tsx
<ScrollIndicator position="right" />
```
- Positioned at right center of container
- For horizontal scrolling

## Examples

### Hero Section
```tsx
<ScrollIndicator 
  onClick={() => scrollToSection('about')}
  text="Discover more"
  delay={2}
  variant="default"
/>
```

### Section Divider
```tsx
<ScrollIndicator 
  onClick={() => scrollToSection('services')}
  text="View services"
  delay={0.5}
  variant="minimal"
  position="bottom"
/>
```

### Navigation Helper
```tsx
<ScrollIndicator 
  onClick={() => scrollToTop()}
  text="Back to top"
  delay={1}
  variant="outlined"
  position="top"
/>
```

### Horizontal Scroll
```tsx
<ScrollIndicator 
  onClick={() => scrollHorizontally()}
  text="Swipe to see more"
  delay={1}
  variant="minimal"
  position="right"
/>
```

## Theme Support

The component automatically adapts to light and dark themes:

**Light Mode:**
- Text: Gray-600
- Border: Gray-300
- Icon: Gray-400

**Dark Mode:**
- Text: White/60
- Border: White/30
- Icon: White/40

## Animation Details

- **Entrance**: Fades in with upward motion after delay
- **Text Pulse**: Subtle opacity animation (0.6 to 1)
- **Scroll Dot**: Vertical bouncing motion inside container
- **Container**: Gentle vertical movement
- **Chevron**: Delayed vertical movement for layered effect

## Performance

- **Memoized**: Prevents unnecessary re-renders
- **Optimized Animations**: Uses efficient Framer Motion animations
- **Lightweight**: Minimal DOM footprint
- **Accessible**: Proper ARIA labels and keyboard support

## Accessibility

- **Keyboard Support**: Clickable with keyboard navigation
- **Screen Reader**: Proper text content for screen readers
- **High Contrast**: Good contrast ratios in both themes
- **Focus States**: Visible focus indicators
