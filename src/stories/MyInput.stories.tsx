import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import MyInput from '../components/Input/Input';
import { Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const meta: Meta<typeof MyInput> = {
  title: 'Components/MyInput',
  component: MyInput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MyInput>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MyInput
        label="Name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        fullWidth
      />
    );
  },
};

export const Email: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MyInput
        label="Email"
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        fullWidth
      />
    );
  },
};

export const Password: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    return (
      <MyInput
        label="Password"
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        fullWidth
        endAdornment={
          <IconButton
            onClick={() => setShowPassword(!showPassword)}
            edge="end"
          >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </IconButton>
        }
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MyInput
        label="Username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        error
        helperText="This field is required"
        fullWidth
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <MyInput
      label="Disabled Input"
      value="Cannot edit this"
      variant="outlined"
      disabled
      fullWidth
    />
  ),
};

export const WithPlaceholder: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MyInput
        label="Search"
        placeholder="Type to search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        fullWidth
      />
    );
  },
};

export const SecondaryPalette: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MyInput
        label="Search"
        placeholder="Search targets..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        colorVariant="secondary"
        fullWidth
        startAdornment={<SearchIcon />}
      />
    );
  },
};

export const Required: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MyInput
        label="Required Field"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        required
        helperText="This field is required"
        fullWidth
      />
    );
  },
};

export const Multiline: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MyInput
        label="Description"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        multiline
        rows={4}
        fullWidth
      />
    );
  },
};

export const MultilineAutoHeight: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MyInput
        label="Comments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        multiline
        maxRows={6}
        fullWidth
        placeholder="Start typing... (grows automatically)"
      />
    );
  },
};

export const Variants: Story = {
  render: () => {
    const [outlined, setOutlined] = useState('');
    const [filled, setFilled] = useState('');
    const [standard, setStandard] = useState('');

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: 400 }}>
        <MyInput
          label="Outlined (default)"
          value={outlined}
          onChange={(e) => setOutlined(e.target.value)}
          variant="outlined"
          fullWidth
        />
        <MyInput
          label="Filled"
          value={filled}
          onChange={(e) => setFilled(e.target.value)}
          variant="filled"
          fullWidth
        />
        <MyInput
          label="Standard"
          value={standard}
          onChange={(e) => setStandard(e.target.value)}
          variant="standard"
          fullWidth
        />
      </Box>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [small, setSmall] = useState('');
    const [medium, setMedium] = useState('');

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: 400 }}>
        <MyInput
          label="Small"
          value={small}
          onChange={(e) => setSmall(e.target.value)}
          variant="outlined"
          size="small"
          fullWidth
        />
        <MyInput
          label="Medium (default)"
          value={medium}
          onChange={(e) => setMedium(e.target.value)}
          variant="outlined"
          size="medium"
          fullWidth
        />
      </Box>
    );
  },
};

export const WithStartAdornment: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MyInput
        label="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        fullWidth
        startAdornment={<SearchIcon />}
      />
    );
  },
};

export const WithEndAdornment: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MyInput
        label="Email"
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        fullWidth
        endAdornment={<EmailIcon />}
      />
    );
  },
};

export const WithBothAdornments: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MyInput
        label="Price"
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        fullWidth
        startAdornment={<AttachMoneyIcon />}
        endAdornment=".00"
      />
    );
  },
};

export const NumberInput: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MyInput
        label="Age"
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        fullWidth
        slotProps={{ htmlInput: { min: 0, max: 120 } }}
      />
    );
  },
};

export const DateInput: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MyInput
        label="Birth Date"
        type="date"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        fullWidth
        slotProps={{ inputLabel: { shrink: true } }}
      />
    );
  },
};

export const TimeInput: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MyInput
        label="Appointment Time"
        type="time"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        fullWidth
        slotProps={{ inputLabel: { shrink: true } }}
      />
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 400 }}>
        <MyInput
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          required
          fullWidth
          startAdornment={<PersonIcon />}
        />
        <MyInput
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          required
          fullWidth
          startAdornment={<EmailIcon />}
        />
        <MyInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          required
          fullWidth
          startAdornment={<LockIcon />}
          helperText="Must be at least 8 characters"
        />
        <MyInput
          label="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          variant="outlined"
          multiline
          rows={3}
          fullWidth
          placeholder="Tell us about yourself..."
        />
      </Box>
    );
  },
};

export const AutoFocus: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MyInput
        label="Auto Focused"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        fullWidth
        autoFocus
        helperText="This field is automatically focused"
      />
    );
  },
};

export const CharacterLimit: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const maxLength = 50;
    return (
      <MyInput
        label="Tweet"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        multiline
        rows={3}
        fullWidth
        slotProps={{ htmlInput: { maxLength } }}
        helperText={`${value.length}/${maxLength} characters`}
      />
    );
  },
};

export const CustomStyled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MyInput
        label="Custom Styled"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 3,
            '& fieldset': {
              borderColor: 'primary.main',
              borderWidth: 2,
            },
            '&:hover fieldset': {
              borderColor: 'primary.dark',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'secondary.main',
            },
          },
        }}
      />
    );
  },
};
