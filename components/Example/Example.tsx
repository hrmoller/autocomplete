import React from 'react';
import { Button, Menu } from '@mantine/core';

export function Example(): React.ReactElement {
  return <Menu width={'target'}>
    <Menu.Target>
      <Button fullWidth variant={''} loading={false} loaderProps={{ type: 'dots' }}>
        Click me
      </Button>
    </Menu.Target>

    <Menu.Dropdown>
      <Menu.Item>Menu Item</Menu.Item>
    </Menu.Dropdown>
  </Menu>;
};
