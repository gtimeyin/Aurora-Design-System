import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Tooltip } from '../components/Tooltip';
import { Popover } from '../components/Popover';
import { Stack } from '../components/Stack';
import { Info, Bell } from '@phosphor-icons/react';

export const TooltipPopoverDemo = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-8">Tooltip & Popover Components</h1>

      {/* Tooltip Examples */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Tooltips</h2>
        <div className="space-y-8">
          {/* Basic Tooltips */}
          <div>
            <h3 className="text-lg font-medium mb-4">Basic Tooltips</h3>
            <Stack direction="row" gap="4">
              <Tooltip content="This is a tooltip">
                <Button>Hover me</Button>
              </Tooltip>

              <Tooltip content="Small tooltip" size="sm">
                <Button variant="secondary">Small tooltip</Button>
              </Tooltip>

              <Tooltip content={
                <div className="flex items-center gap-2">
                  <Info size={16} />
                  <span>Tooltip with icon</span>
                </div>
              }>
                <Button variant="white">With icon</Button>
              </Tooltip>
            </Stack>
          </div>

          {/* Tooltip Placements */}
          <div>
            <h3 className="text-lg font-medium mb-4">Tooltip Placements</h3>
            <Stack direction="row" gap="4">
              <Tooltip content="Top tooltip" placement="top">
                <Button>Top</Button>
              </Tooltip>

              <Tooltip content="Right tooltip" placement="right">
                <Button>Right</Button>
              </Tooltip>

              <Tooltip content="Bottom tooltip" placement="bottom">
                <Button>Bottom</Button>
              </Tooltip>

              <Tooltip content="Left tooltip" placement="left">
                <Button>Left</Button>
              </Tooltip>
            </Stack>
          </div>
        </div>
      </section>

      {/* Popover Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Popovers</h2>
        <div className="space-y-8">
          {/* Basic Popovers */}
          <div>
            <h3 className="text-lg font-medium mb-4">Basic Popovers</h3>
            <Stack direction="row" gap="4">
              <Popover
                content={
                  <div className="w-64">
                    <p>This is a basic popover with some content.</p>
                  </div>
                }
              >
                <Button>Click me</Button>
              </Popover>

              <Popover
                title="Notifications"
                content={
                  <div className="w-64">
                    <div className="flex items-center gap-3 p-2 hover:bg-background-hover rounded-radius-sm cursor-pointer">
                      <Bell size={20} />
                      <div>
                        <p className="text-sm font-medium">New message</p>
                        <p className="text-xs text-text-tertiary">2 minutes ago</p>
                      </div>
                    </div>
                  </div>
                }
              >
                <Button variant="secondary">With title</Button>
              </Popover>

              <Popover
                content={
                  <div className="w-64">
                    <p>This popover won't close when clicking outside.</p>
                  </div>
                }
                closeOnClickOutside={false}
              >
                <Button variant="white">Manual close</Button>
              </Popover>
            </Stack>
          </div>

          {/* Controlled Popover */}
          <div>
            <h3 className="text-lg font-medium mb-4">Controlled Popover</h3>
            <Popover
              isOpen={isPopoverOpen}
              onOpenChange={setIsPopoverOpen}
              content={
                <div className="w-64">
                  <p>This is a controlled popover.</p>
                  <Button
                    variant="secondary"
                    className="mt-3"
                    onClick={() => setIsPopoverOpen(false)}
                  >
                    Close
                  </Button>
                </div>
              }
            >
              <Button>
                {isPopoverOpen ? 'Close Popover' : 'Open Popover'}
              </Button>
            </Popover>
          </div>

          {/* Popover Placements */}
          <div>
            <h3 className="text-lg font-medium mb-4">Popover Placements</h3>
            <Stack direction="row" gap="4">
              <Popover
                placement="top"
                content={
                  <div className="w-48">
                    <p>Top placement</p>
                  </div>
                }
              >
                <Button>Top</Button>
              </Popover>

              <Popover
                placement="right"
                content={
                  <div className="w-48">
                    <p>Right placement</p>
                  </div>
                }
              >
                <Button>Right</Button>
              </Popover>

              <Popover
                placement="bottom"
                content={
                  <div className="w-48">
                    <p>Bottom placement</p>
                  </div>
                }
              >
                <Button>Bottom</Button>
              </Popover>

              <Popover
                placement="left"
                content={
                  <div className="w-48">
                    <p>Left placement</p>
                  </div>
                }
              >
                <Button>Left</Button>
              </Popover>
            </Stack>
          </div>
        </div>
      </section>
    </div>
  );
}; 