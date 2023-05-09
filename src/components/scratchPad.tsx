import { Menu, Button, Text } from '@mantine/core';
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight, IconChevronDown } from '@tabler/icons-react';

// pass a button view to this demo
export function Demo({text, disabled}:{text: string; disabled?: object;}) {

  return (
    // Dont' change color on highlight
  <Menu disabled={disabled ? false: true}  arrowSize={10} withArrow={true} position='bottom' shadow="md" width={200} trigger="hover" >
      <Menu.Target>
        <Button color='red'>{text}
          {disabled && <IconChevronDown style={{ marginLeft: '2px' }} opacity={0.8} size={12} />}
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        {/* <Menu.Label>Application</Menu.Label> */}
        <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
        <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
        <Menu.Item
          icon={<IconSearch size={14} />}
          rightSection={<Text size="xs" color="dimmed">⌘K</Text>}
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item icon={<IconArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
        <Menu.Item color="red" icon={<IconTrash size={14} />}>Delete my account</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}