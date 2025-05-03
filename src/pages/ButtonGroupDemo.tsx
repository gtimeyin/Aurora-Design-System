import React, { useState } from 'react';
import { ButtonGroup } from '../components/ButtonGroup';
import { Button } from '../components/Button';
import { Stack } from '../components/Stack';
import { Box } from '../components/Box';
import { 
  CaretLeft, 
  CaretRight, 
  List, 
  SquaresFour, 
  ChartBar,
  ChartLine,
  ChartPie,
  Download,
  Share,
  DotsThree
} from '@phosphor-icons/react';

export const ButtonGroupDemo = () => {
  const [selectedView, setSelectedView] = useState('grid');
  const [selectedAlign, setSelectedAlign] = useState('left');

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Button Group Component</h1>

      <div className="space-y-12">
        {/* Basic Button Group */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Basic Button Group</h2>
          <Box className="p-4 border border-border-primary rounded-radius-md">
            <Stack gap="4">
              <ButtonGroup>
                <Button>Copy</Button>
                <Button>Cut</Button>
                <Button>Paste</Button>
              </ButtonGroup>
            </Stack>
          </Box>
        </section>

        {/* With Icons */}
        <section>
          <h2 className="text-xl font-semibold mb-4">With Icons</h2>
          <Stack gap="4">
            {/* Navigation Example */}
            <Box className="p-4 border border-border-primary rounded-radius-md">
              <h3 className="text-lg font-medium mb-4">Navigation</h3>
              <ButtonGroup>
                <Button leftIcon={CaretLeft}>Previous</Button>
                <Button>Current</Button>
                <Button rightIcon={CaretRight}>Next</Button>
              </ButtonGroup>
            </Box>

            {/* View Toggle Example */}
            <Box className="p-4 border border-border-primary rounded-radius-md">
              <h3 className="text-lg font-medium mb-4">View Toggle</h3>
              <ButtonGroup>
                <Button
                  leftIcon={List}
                  onClick={() => setSelectedView('list')}
                  className={selectedView === 'list' ? 'bg-background-hover' : ''}
                >
                  List
                </Button>
                <Button
                  leftIcon={SquaresFour}
                  onClick={() => setSelectedView('grid')}
                  className={selectedView === 'grid' ? 'bg-background-hover' : ''}
                >
                  Grid
                </Button>
              </ButtonGroup>
            </Box>

            {/* Icon Only Example */}
            <Box className="p-4 border border-border-primary rounded-radius-md">
              <h3 className="text-lg font-medium mb-4">Icon Only</h3>
              <ButtonGroup>
                <Button leftIcon={ChartBar} iconOnly aria-label="Bar Chart" />
                <Button leftIcon={ChartLine} iconOnly aria-label="Line Chart" />
                <Button leftIcon={ChartPie} iconOnly aria-label="Pie Chart" />
              </ButtonGroup>
            </Box>

            {/* Mixed Content Example */}
            <Box className="p-4 border border-border-primary rounded-radius-md">
              <h3 className="text-lg font-medium mb-4">Mixed Content</h3>
              <ButtonGroup>
                <Button leftIcon={Download}>Download</Button>
                <Button leftIcon={Share}>Share</Button>
                <Button leftIcon={DotsThree} iconOnly aria-label="More Options" />
              </ButtonGroup>
            </Box>
          </Stack>
        </section>

        {/* Sizes */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Sizes</h2>
          <Stack gap="4">
            <Box className="p-4 border border-border-primary rounded-radius-md">
              <h3 className="text-lg font-medium mb-4">Extra Small</h3>
              <ButtonGroup size="xs">
                <Button leftIcon={CaretLeft}>Prev</Button>
                <Button>1</Button>
                <Button rightIcon={CaretRight}>Next</Button>
              </ButtonGroup>
            </Box>

            <Box className="p-4 border border-border-primary rounded-radius-md">
              <h3 className="text-lg font-medium mb-4">Small</h3>
              <ButtonGroup size="sm">
                <Button leftIcon={CaretLeft}>Prev</Button>
                <Button>1</Button>
                <Button rightIcon={CaretRight}>Next</Button>
              </ButtonGroup>
            </Box>

            <Box className="p-4 border border-border-primary rounded-radius-md">
              <h3 className="text-lg font-medium mb-4">Base</h3>
              <ButtonGroup>
                <Button leftIcon={CaretLeft}>Previous</Button>
                <Button>Current</Button>
                <Button rightIcon={CaretRight}>Next</Button>
              </ButtonGroup>
            </Box>

            <Box className="p-4 border border-border-primary rounded-radius-md">
              <h3 className="text-lg font-medium mb-4">Large</h3>
              <ButtonGroup size="lg">
                <Button leftIcon={CaretLeft}>Previous</Button>
                <Button>Current</Button>
                <Button rightIcon={CaretRight}>Next</Button>
              </ButtonGroup>
            </Box>

            <Box className="p-4 border border-border-primary rounded-radius-md">
              <h3 className="text-lg font-medium mb-4">Extra Large</h3>
              <ButtonGroup size="xl">
                <Button leftIcon={CaretLeft}>Previous</Button>
                <Button>Current</Button>
                <Button rightIcon={CaretRight}>Next</Button>
              </ButtonGroup>
            </Box>
          </Stack>
        </section>

        {/* Full Width */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Full Width</h2>
          <Box className="p-4 border border-border-primary rounded-radius-md">
            <ButtonGroup fullWidth>
              <Button leftIcon={Download}>Download</Button>
              <Button leftIcon={Share}>Share</Button>
              <Button leftIcon={DotsThree}>More</Button>
            </ButtonGroup>
          </Box>
        </section>
      </div>
    </div>
  );
}; 