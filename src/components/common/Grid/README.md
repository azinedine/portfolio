# Grid Component

A flexible, reusable grid system with built-in animations and responsive design.

## Features

- ✅ **Responsive Design** - Automatically adapts to different screen sizes
- ✅ **Flexible Layouts** - Support for 1-6 columns
- ✅ **Built-in Animations** - Staggered animations with Framer Motion
- ✅ **TypeScript Support** - Fully typed with proper interfaces
- ✅ **Customizable** - Gap, alignment, and spacing options
- ✅ **Performance Optimized** - Memoized components for better performance

## Basic Usage

```tsx
import { Grid, GridItem } from '@/components/common/Grid'

// Simple 2-column grid
<Grid cols={2} gap="lg" align="center">
  <GridItem>
    <div>Content 1</div>
  </GridItem>
  <GridItem>
    <div>Content 2</div>
  </GridItem>
</Grid>
```

## Advanced Usage

```tsx
// Responsive grid with animations
<Grid 
  cols={3} 
  gap="xl" 
  align="stretch" 
  responsive={true}
  animate={true}
  stagger={true}
  delay={0.2}
>
  {items.map((item, index) => (
    <GridItem key={index} animate={true} direction="up">
      <Card content={item} />
    </GridItem>
  ))}
</Grid>
```

## Props

### Grid Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Grid items |
| `cols` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `2` | Number of columns |
| `gap` | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'lg'` | Gap between items |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch'` | `'center'` | Vertical alignment |
| `justify` | `'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly'` | `'start'` | Horizontal alignment |
| `responsive` | `boolean` | `true` | Enable responsive behavior |
| `animate` | `boolean` | `false` | Enable animations |
| `stagger` | `boolean` | `false` | Enable staggered animations |
| `delay` | `number` | `0` | Animation delay |

### GridItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Item content |
| `span` | `1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 'full'` | `1` | Column span |
| `order` | `number` | - | CSS order |
| `animate` | `boolean` | `false` | Enable item animations |
| `delay` | `number` | `0` | Animation delay |
| `direction` | `'up' \| 'down' \| 'left' \| 'right'` | `'up'` | Animation direction |

## Examples

### Hero Section Layout
```tsx
<Grid cols={2} gap="xl" align="center" responsive={true} animate={true} stagger={true}>
  <GridItem>
    <HeroContent />
  </GridItem>
  <GridItem>
    <HeroProfile />
  </GridItem>
</Grid>
```

### Services Grid
```tsx
<Grid cols={3} gap="lg" align="stretch" responsive={true} animate={true} stagger={true}>
  {services.map((service, index) => (
    <GridItem key={service.id}>
      <ServiceCard service={service} />
    </GridItem>
  ))}
</Grid>
```

### Portfolio Grid
```tsx
<Grid cols={4} gap="md" align="start" responsive={true} animate={true}>
  {projects.map((project, index) => (
    <GridItem key={project.id} span={project.featured ? 2 : 1}>
      <ProjectCard project={project} />
    </GridItem>
  ))}
</Grid>
```

## Responsive Behavior

The grid automatically adapts based on screen size:

- **Mobile (default)**: 1 column
- **Tablet (md)**: 2 columns (for 2+ column grids)
- **Desktop (lg)**: 3 columns (for 3+ column grids)
- **Large Desktop (xl)**: 4 columns (for 4+ column grids)
- **Extra Large (2xl)**: 5-6 columns (for 5+ column grids)

## Performance Tips

1. **Use `memo`** - Components are already memoized
2. **Enable `stagger`** - For better visual appeal with multiple items
3. **Set appropriate `delay`** - To control animation timing
4. **Use `responsive={false}`** - For fixed layouts when needed
