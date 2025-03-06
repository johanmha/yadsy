# YADSY - Yet Another Design System

As of today yadsy is simply the infrastructure of a design system for my own use and education. Who knows what it might become. The rest of this readme reflects what it might could be, and works as documentation for my self.

---

A modular, accessible design system built with React. YADSY provides a collection of reusable components and design tokens to help you build consistent user interfaces.

## Installation

```bash
npm install yadsy
```

## Components

### Usage

```jsx
import { Button } from 'yadsy';
import 'yadsy/dist/tokens/tokens.css';

function App() {
  return (
    <Button variant="primary" size="medium">
      Click Me
    </Button>
  );
}
```

## Design Tokens

YADSY includes a not so comprehensive and well though through set of design tokens for:

- **Colors**: Primary, secondary, and semantic color palettes
- **Typography**: Font families, sizes, weights, and line heights
- **Spacing**: Consistent spacing values
- **Borders**: Border radii and widths
- **Shadows**: Elevation levels

These are mainly fillers or placeholders as of today, though they are used in the components.

TODO: change tokens according to best practice.
TODO: create a more inspiring color pallet.

### Usage

You can override the CSS variables in your CSS file:

```css
.custom-button {
  --color-primary-500: #ff5500;
  --border-radius-md: 0.5rem;
}
```

Or use the tokens directly as javascript:

```jsx
import { Button, colors, spacing, border } from 'yadsy';
import './App.css';

function App() {
  const customStyle = {
    backgroundColor: colors.secondary[700],
    padding: `${spacing[2]} ${spacing[4]}`,
    borderRadius: border.radius.lg,
  };

  return (
    <div style={{ padding: spacing[4] }}>
      <Button
        onClick={() => console.log('Jeg er yadsy')}
        size="large"
        style={customStyle}
      >
        I am yadsy
      </Button>
    </div>
  );
}
```

Or create your own custom button

```jsx
import { Button } from 'yadsy';
import './App.css';

function CustomButton(props) {
  return (
    <Button
      {...props}
      className={`custom-themed-button ${props.className || ''}`}
    />
  );
}

function App() {
  return (
    <CustomButton onClick={() => console.log('I am yadsy')} size="large">
      I am yadsy
    </CustomButton>
  );
}
```

with corresponding css:

```css
.custom-themed-button.yadsy-button--primary {
  background-color: var(--color-secondary-700);
  color: var(--color-white);
}

.custom-themed-button.yadsy-button--primary:hover:not(:disabled) {
  background-color: var(--color-secondary-800);
}
```

## Development

### Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start Storybook: `npm run storybook`

### Commands

- `npm run build`: Build the package
- `npm run build:clean`: Build the package after cleaning up folders. Recommended in dev to avoid false positives
- `npm run test`: Run tests
- `npm run lint`: Run linting
- `npm run format`: Format code with Prettier
- `npm run storybook`: Start Storybook development environment

TODO: add watch scripts for dev
TODO: add deployment of Storybook?

## Contributing

### Making Changes

1. Create a new branch from `main`
2. Make your changes
3. Add tests for your changes
4. Run `npm run lint` and `npm run test` to ensure your changes pass linting and tests

### Creating a Changeset

We use [changesets](https://github.com/changesets/changesets) to manage versions and package releases.

1. Run `npm run changeset` to create a new changeset
2. Follow the prompts to select the type of change (patch, minor, major)
3. Write a summary of the changes
4. Commit the generated changeset file with your changes

Example:

```bash
npm run changeset
# Select the appropriate version bump
# Add a summary of your changes
git add .
git commit -m "feat: add new component"
git push
```

### Release Process

Our CI/CD pipeline will automatically:

1. Create a release PR when changesets are merged to main
2. Publish to npm when the release PR is merged

## License

ISC
