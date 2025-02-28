import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { colors, typography, spacing, border, shadows } from './index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type DesignTokens = {
  [key: string]: string | number | DesignTokens;
};

function generateCssVariables(object: DesignTokens, prefix: string): string[] {
  const variables: string[] = [];

  function formatKey(key: string): string {
    return key.replace(/_/g, '-');
  }

  function processObject(obj: DesignTokens, currentPrefix: string) {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'object' && value !== null) {
        processObject(value, `${currentPrefix}-${formatKey(key)}`);
      } else {
        variables.push(`  --${currentPrefix}-${formatKey(key)}: ${value};`);
      }
    }
  }

  processObject(object, prefix);
  return variables;
}

const colorVars = generateCssVariables(colors, 'color');
const typographyVars = generateCssVariables(typography, 'typography');
const spacingVars = generateCssVariables(spacing, 'spacing');
const borderVars = generateCssVariables(border, 'border');
const shadowVars = generateCssVariables(shadows, 'shadow');

const cssContent = `:root {
  /* Colors */
${colorVars.join('\n')}

  /* Typography */
${typographyVars.join('\n')}

  /* Spacing */
${spacingVars.join('\n')}

  /* Borders */
${borderVars.join('\n')}

  /* Shadows */
${shadowVars.join('\n')}
}
`;

const outputPath = path.resolve(__dirname, 'tokens.css');
fs.writeFileSync(outputPath, cssContent);
console.log(`CSS variables written to ${outputPath}`);
