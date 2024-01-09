import { join } from 'path';

import fs from 'fs-extra';
import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { TrackSchema } from '../src';

const outputDir = 'jsonschemas';
await fs.ensureDir(outputDir);

const schemas = new Map<string, z.ZodSchema<unknown>>([
  ['metadata/track/1.0.0.json', TrackSchema]
]);

for (const [path, Schema] of schemas) {
  const outputFile = join(outputDir, path);
  await fs.ensureFile(outputFile);

  const jsonSchema = zodToJsonSchema(Schema, {
    target: 'jsonSchema7',
    definitionPath: '$defs',
  });
  await fs.writeJSON(outputFile, jsonSchema, { spaces: 2 });
}