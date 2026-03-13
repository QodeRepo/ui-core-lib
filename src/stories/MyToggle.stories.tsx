import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import MyToggle from '../components/Toggle/Toggle';
import { Box } from '@mui/material';

const meta: Meta<typeof MyToggle> = {
  title: 'Components/MyToggle',
  component: MyToggle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof MyToggle>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <MyToggle
        label="Enable notifications"
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};

export const DefaultChecked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <MyToggle
        label="Auto-save enabled"
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <MyToggle
        label="Disabled toggle"
        checked={checked}
        onChange={setChecked}
        disabled
      />
    );
  },
};

export const DisabledChecked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <MyToggle
        label="Disabled (checked)"
        checked={checked}
        onChange={setChecked}
        disabled
      />
    );
  },
};

export const ColorVariants: Story = {
  render: () => {
    const [primary, setPrimary] = useState(true);
    const [secondary, setSecondary] = useState(true);
    const [success, setSuccess] = useState(true);
    const [error, setError] = useState(true);
    const [warning, setWarning] = useState(true);
    const [info, setInfo] = useState(true);

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <MyToggle label="Primary (default)" checked={primary} onChange={setPrimary} color="primary" />
        <MyToggle label="Secondary" checked={secondary} onChange={setSecondary} color="secondary" />
        <MyToggle label="Success" checked={success} onChange={setSuccess} color="success" />
        <MyToggle label="Error" checked={error} onChange={setError} color="error" />
        <MyToggle label="Warning" checked={warning} onChange={setWarning} color="warning" />
        <MyToggle label="Info" checked={info} onChange={setInfo} color="info" />
      </Box>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [small, setSmall] = useState(true);
    const [medium, setMedium] = useState(true);

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <MyToggle label="Small size" checked={small} onChange={setSmall} size="small" />
        <MyToggle label="Medium size (default)" checked={medium} onChange={setMedium} size="medium" />
      </Box>
    );
  },
};

export const LabelPlacement: Story = {
  render: () => {
    const [end, setEnd] = useState(true);
    const [start, setStart] = useState(true);
    const [top, setTop] = useState(true);
    const [bottom, setBottom] = useState(true);

    return (
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', alignItems: 'center' }}>
        <MyToggle label="End (default)" checked={end} onChange={setEnd} labelPlacement="end" />
        <MyToggle label="Start" checked={start} onChange={setStart} labelPlacement="start" />
        <MyToggle label="Top" checked={top} onChange={setTop} labelPlacement="top" />
        <MyToggle label="Bottom" checked={bottom} onChange={setBottom} labelPlacement="bottom" />
      </Box>
    );
  },
};

export const Settings: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [autoSave, setAutoSave] = useState(true);
    const [twoFactor, setTwoFactor] = useState(false);

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 250 }}>
        <MyToggle
          label="Push Notifications"
          checked={notifications}
          onChange={setNotifications}
          color="primary"
        />
        <MyToggle
          label="Dark Mode"
          checked={darkMode}
          onChange={setDarkMode}
          color="secondary"
        />
        <MyToggle
          label="Auto-Save"
          checked={autoSave}
          onChange={setAutoSave}
          color="success"
        />
        <MyToggle
          label="Two-Factor Authentication"
          checked={twoFactor}
          onChange={setTwoFactor}
          color="warning"
        />
      </Box>
    );
  },
};

export const PrivacyToggles: Story = {
  render: () => {
    const [publicProfile, setPublicProfile] = useState(false);
    const [showEmail, setShowEmail] = useState(false);
    const [allowMessages, setAllowMessages] = useState(true);

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 250 }}>
        <MyToggle
          label="Public Profile"
          checked={publicProfile}
          onChange={setPublicProfile}
        />
        <MyToggle
          label="Show Email Address"
          checked={showEmail}
          onChange={setShowEmail}
          disabled={!publicProfile}
        />
        <MyToggle
          label="Allow Direct Messages"
          checked={allowMessages}
          onChange={setAllowMessages}
        />
      </Box>
    );
  },
};

export const FeatureFlags: Story = {
  render: () => {
    const [beta, setBeta] = useState(false);
    const [analytics, setAnalytics] = useState(true);
    const [experimental, setExperimental] = useState(false);

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 250 }}>
        <MyToggle
          label="Beta Features"
          checked={beta}
          onChange={setBeta}
          color="warning"
        />
        <MyToggle
          label="Analytics & Tracking"
          checked={analytics}
          onChange={setAnalytics}
          color="info"
        />
        <MyToggle
          label="Experimental Mode"
          checked={experimental}
          onChange={setExperimental}
          color="error"
        />
      </Box>
    );
  },
};

export const CustomStyled: Story = {
  render: () => {
    const [premium, setPremium] = useState(true);
    return (
      <MyToggle
        label="Premium Account"
        checked={premium}
        onChange={setPremium}
        color="success"
        formControlLabelProps={{
          sx: {
            padding: 2,
            border: '2px solid',
            borderColor: premium ? 'success.main' : 'grey.300',
            borderRadius: 2,
            backgroundColor: premium ? 'success.light' : 'background.paper',
            transition: 'all 0.3s',
            '& .MuiFormControlLabel-label': {
              fontWeight: 'bold',
            },
          },
        }}
      />
    );
  },
};

export const MultipleToggles: Story = {
  render: () => {
    const [wifi, setWifi] = useState(true);
    const [bluetooth, setBluetooth] = useState(false);
    const [airplane, setAirplane] = useState(false);
    const [location, setLocation] = useState(true);

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 250 }}>
        <MyToggle label="Wi-Fi" checked={wifi} onChange={setWifi} color="primary" size="small" />
        <MyToggle label="Bluetooth" checked={bluetooth} onChange={setBluetooth} color="primary" size="small" />
        <MyToggle label="Airplane Mode" checked={airplane} onChange={setAirplane} color="error" size="small" />
        <MyToggle label="Location Services" checked={location} onChange={setLocation} color="success" size="small" />
      </Box>
    );
  },
};
