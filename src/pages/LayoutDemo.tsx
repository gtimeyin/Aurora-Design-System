import React from 'react';
import { Box } from '../components/Box';
import { Stack } from '../components/Stack';
import { Grid } from '../components/Grid';
import { Container } from '../components/Container';

export const LayoutDemo: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Layout Components</h1>

      <div className="space-y-12">
        {/* Box Component */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Box Component</h2>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Basic Usage</h3>
            <div className="space-y-4">
              <Box className="p-4 bg-background-secondary rounded-md">
                Basic Box with padding and background
              </Box>
              <Box as="section" className="p-4 border border-border-primary rounded-md">
                Box rendered as a section element
              </Box>
              <Box className="p-4 bg-interactive-primary text-text-inverse-primary rounded-md">
                Box with interactive background
              </Box>
            </div>

            <h3 className="text-lg font-medium mt-8">Box with Different Elements</h3>
            <div className="space-y-4">
              <Box as="button" className="px-4 py-2 bg-interactive-primary text-text-inverse-primary rounded-md">
                Box as button
              </Box>
              <Box as="a" href="#" className="px-4 py-2 bg-interactive-secondary text-text-primary rounded-md inline-block">
                Box as link
              </Box>
            </div>
          </div>
        </section>

        {/* Stack Component */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Stack Component</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Vertical Stack</h3>
              <Stack gap="4">
                <Box className="p-4 bg-background-secondary rounded-md">Item 1</Box>
                <Box className="p-4 bg-background-secondary rounded-md">Item 2</Box>
                <Box className="p-4 bg-background-secondary rounded-md">Item 3</Box>
              </Stack>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Horizontal Stack</h3>
              <Stack direction="row" gap="4">
                <Box className="p-4 bg-background-secondary rounded-md">Item 1</Box>
                <Box className="p-4 bg-background-secondary rounded-md">Item 2</Box>
                <Box className="p-4 bg-background-secondary rounded-md">Item 3</Box>
              </Stack>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Nested Stacks</h3>
              <Stack gap="4">
                <Stack direction="row" gap="4">
                  <Box className="p-4 bg-background-secondary rounded-md">Row 1, Item 1</Box>
                  <Box className="p-4 bg-background-secondary rounded-md">Row 1, Item 2</Box>
                </Stack>
                <Stack direction="row" gap="4">
                  <Box className="p-4 bg-background-secondary rounded-md">Row 2, Item 1</Box>
                  <Box className="p-4 bg-background-secondary rounded-md">Row 2, Item 2</Box>
                </Stack>
              </Stack>
            </div>
          </div>
        </section>

        {/* Grid Component */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Grid Component</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4">2-Column Grid</h3>
              <Grid cols={2} gap="4">
                <Box className="p-4 bg-background-secondary rounded-md">Column 1</Box>
                <Box className="p-4 bg-background-secondary rounded-md">Column 2</Box>
                <Box className="p-4 bg-background-secondary rounded-md">Column 3</Box>
                <Box className="p-4 bg-background-secondary rounded-md">Column 4</Box>
              </Grid>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">3-Column Grid</h3>
              <Grid cols={3} gap="4">
                <Box className="p-4 bg-background-secondary rounded-md">Column 1</Box>
                <Box className="p-4 bg-background-secondary rounded-md">Column 2</Box>
                <Box className="p-4 bg-background-secondary rounded-md">Column 3</Box>
                <Box className="p-4 bg-background-secondary rounded-md">Column 4</Box>
                <Box className="p-4 bg-background-secondary rounded-md">Column 5</Box>
                <Box className="p-4 bg-background-secondary rounded-md">Column 6</Box>
              </Grid>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Grid with Different Gaps</h3>
              <Grid cols={2} gap="8">
                <Box className="p-4 bg-background-secondary rounded-md">Wide Gap 1</Box>
                <Box className="p-4 bg-background-secondary rounded-md">Wide Gap 2</Box>
              </Grid>
            </div>
          </div>
        </section>

        {/* Container Component */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Container Component</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Default Container (xl)</h3>
              <Container>
                <Box className="p-4 bg-background-secondary rounded-md">
                  This content is centered and constrained to the default max-width
                </Box>
              </Container>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Container with 2xl max-width</h3>
              <Container maxWidth="2xl">
                <Box className="p-4 bg-background-secondary rounded-md">
                  This content is centered and constrained to a larger max-width
                </Box>
              </Container>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Container with Grid</h3>
              <Container>
                <Grid cols={2} gap="4">
                  <Box className="p-4 bg-background-secondary rounded-md">Grid Item 1</Box>
                  <Box className="p-4 bg-background-secondary rounded-md">Grid Item 2</Box>
                </Grid>
              </Container>
            </div>
          </div>
        </section>

        {/* Complex Layout Example */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Complex Layout Example</h2>
          <Container>
            <Stack gap="6">
              <Box className="p-4 bg-background-secondary rounded-md">
                <h3 className="text-lg font-medium mb-4">Header Section</h3>
                <Stack direction="row" gap="4">
                  <Box className="p-4 bg-background-tertiary rounded-md flex-1">Navigation</Box>
                  <Box className="p-4 bg-background-tertiary rounded-md">Actions</Box>
                </Stack>
              </Box>

              <Grid cols={3} gap="6">
                <Box className="p-4 bg-background-secondary rounded-md">
                  <h4 className="font-medium mb-2">Sidebar</h4>
                  <Stack gap="2">
                    <Box className="p-2 bg-background-tertiary rounded-md">Menu Item 1</Box>
                    <Box className="p-2 bg-background-tertiary rounded-md">Menu Item 2</Box>
                    <Box className="p-2 bg-background-tertiary rounded-md">Menu Item 3</Box>
                  </Stack>
                </Box>

                <Box className="p-4 bg-background-secondary rounded-md col-span-2">
                  <h4 className="font-medium mb-4">Main Content</h4>
                  <Stack gap="4">
                    <Box className="p-4 bg-background-tertiary rounded-md">Content Block 1</Box>
                    <Box className="p-4 bg-background-tertiary rounded-md">Content Block 2</Box>
                    <Grid cols={2} gap="4">
                      <Box className="p-4 bg-background-tertiary rounded-md">Grid Item 1</Box>
                      <Box className="p-4 bg-background-tertiary rounded-md">Grid Item 2</Box>
                    </Grid>
                  </Stack>
                </Box>
              </Grid>

              <Box className="p-4 bg-background-secondary rounded-md">
                <h3 className="text-lg font-medium mb-4">Footer Section</h3>
                <Stack direction="row" gap="4">
                  <Box className="p-4 bg-background-tertiary rounded-md flex-1">Footer Content</Box>
                  <Box className="p-4 bg-background-tertiary rounded-md">Footer Actions</Box>
                </Stack>
              </Box>
            </Stack>
          </Container>
        </section>
      </div>
    </div>
  );
}; 