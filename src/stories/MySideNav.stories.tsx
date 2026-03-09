import type { Meta, StoryObj } from '@storybook/react-vite';
import MySideNav from '../components/SideNav/SideNav';
import type { NavItem } from '../components/SideNav/SideNav';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';

const meta: Meta<typeof MySideNav> = {
  title: 'Components/MySideNav',
  component: MySideNav,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MySideNav>;

const basicItems: NavItem[] = [
  { label: 'Home', icon: <HomeIcon />, onClick: () => alert('Home clicked') },
  { label: 'Dashboard', icon: <DashboardIcon />, onClick: () => alert('Dashboard clicked') },
  { label: 'Profile', icon: <PersonIcon />, onClick: () => alert('Profile clicked') },
  { label: 'Settings', icon: <SettingsIcon />, onClick: () => alert('Settings clicked') },
  { label: 'About', icon: <InfoIcon />, onClick: () => alert('About clicked') },
];

// Default story
export const Default: Story = {
  render: () => <MySideNav title="My App" width={240} items={basicItems} />,
};

// Custom title
export const CustomTitle: Story = {
  render: () => <MySideNav title="Admin Panel" width={240} items={basicItems} />,
};

// Right anchor
export const RightAnchor: Story = {
  render: () => (
    <MySideNav
      title="Right Menu"
      width={240}
      items={basicItems}
      anchor="right"
    />
  ),
};

// Custom menu icon
export const CustomMenuIcon: Story = {
  render: () => (
    <MySideNav
      title="Dashboard"
      width={240}
      items={basicItems}
      menuIcon={<NotificationsIcon />}
    />
  ),
};

// With disabled items
export const WithDisabledItems: Story = {
  render: () => (
    <MySideNav
      title="My App"
      width={240}
      items={[
        { label: 'Home', icon: <HomeIcon /> },
        { label: 'Dashboard', icon: <DashboardIcon />, disabled: true },
        { label: 'Profile', icon: <PersonIcon /> },
        { label: 'Settings', icon: <SettingsIcon />, disabled: true },
        { label: 'About', icon: <InfoIcon /> },
      ]}
    />
  ),
};

// Without divider
export const NoDivider: Story = {
  render: () => (
    <MySideNav
      title="My App"
      width={240}
      items={basicItems}
      showDivider={false}
    />
  ),
};

// Custom header colors
export const CustomHeaderColors: Story = {
  render: () => (
    <MySideNav
      title="Dark Theme"
      width={240}
      items={basicItems}
      headerBgColor="#1a1a1a"
      headerTextColor="#ffd700"
    />
  ),
};

// E-commerce navigation
export const EcommerceNav: Story = {
  render: () => (
    <MySideNav
      title="Shop"
      width={260}
      items={[
        { label: 'Home', icon: <HomeIcon /> },
        { label: 'Products', icon: <ShoppingCartIcon /> },
        { label: 'Favorites', icon: <FavoriteIcon /> },
        { label: 'Orders', icon: <EmailIcon /> },
        { label: 'Account', icon: <PersonIcon /> },
        { label: 'Settings', icon: <SettingsIcon /> },
      ]}
      headerBgColor="#e91e63"
    />
  ),
};

// Narrow sidebar
export const NarrowNav: Story = {
  render: () => <MySideNav title="App" width={180} items={basicItems.slice(0, 3)} />,
};

// Wide sidebar
export const WideNav: Story = {
  render: () => (
    <MySideNav
      title="Extended Menu"
      width={320}
      items={[
        { label: 'Home', icon: <HomeIcon /> },
        { label: 'Dashboard', icon: <DashboardIcon /> },
        { label: 'Profile', icon: <PersonIcon /> },
        { label: 'Messages', icon: <EmailIcon /> },
        { label: 'Notifications', icon: <NotificationsIcon /> },
        { label: 'Favorites', icon: <FavoriteIcon /> },
        { label: 'Settings', icon: <SettingsIcon /> },
        { label: 'About', icon: <InfoIcon /> },
      ]}
    />
  ),
};

// Default active item
export const DefaultActiveItem: Story = {
  render: () => (
    <MySideNav
      title="My App"
      width={240}
      items={basicItems}
      defaultActive="Dashboard"
    />
  ),
};

// Custom styled header
export const CustomHeaderStyle: Story = {
  render: () => (
    <MySideNav
      title="Styled App"
      width={240}
      items={basicItems}
      headerSx={{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        p: 3,
      }}
    />
  ),
};

// Custom list style
export const CustomListStyle: Story = {
  render: () => (
    <MySideNav
      title="My App"
      width={240}
      items={basicItems}
      listSx={{
        bgcolor: '#f5f5f5',
        '& .MuiListItemButton-root:hover': {
          bgcolor: '#e0e0e0',
        },
      }}
    />
  ),
};

// Custom icon button props
export const CustomIconButton: Story = {
  render: () => (
    <MySideNav
      title="My App"
      width={240}
      items={basicItems}
      iconButtonProps={{
        color: 'secondary',
        size: 'large',
        sx: { border: '2px solid', borderRadius: 2 },
      }}
    />
  ),
};

