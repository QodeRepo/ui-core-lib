import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import MySelect from '../components/Select/Select';
import type { OptionType } from '../components/Select/Select';
import { Box } from '@mui/material';

const meta: Meta<typeof MySelect> = {
  title: 'Components/MySelect',
  component: MySelect,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MySelect>;

const defaultOptions: OptionType[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'mango', label: 'Mango' },
  { value: 'orange', label: 'Orange' },
];

const countryOptions: OptionType[] = [
  { value: 'in', label: 'India' },
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'au', label: 'Australia' },
  { value: 'ca', label: 'Canada' },
];

// Default story
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MySelect
        label="Select Fruit"
        options={defaultOptions}
        value={value}
        onChange={setValue}
        fullWidth
      />
    );
  },
};

// Pre-selected value
export const WithPreSelectedValue: Story = {
  render: () => {
    const [value, setValue] = useState('banana');
    return (
      <MySelect
        label="Select Fruit"
        options={defaultOptions}
        value={value}
        onChange={setValue}
        fullWidth
      />
    );
  },
};

// With disabled options
export const WithDisabledOptions: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MySelect
        label="Select Fruit"
        options={[
          { value: 'apple', label: 'Apple' },
          { value: 'banana', label: 'Banana', disabled: true },
          { value: 'mango', label: 'Mango' },
          { value: 'orange', label: 'Orange', disabled: true },
        ]}
        value={value}
        onChange={setValue}
        fullWidth
      />
    );
  },
};

// Disabled select
export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState('apple');
    return (
      <MySelect
        label="Select Fruit"
        options={defaultOptions}
        value={value}
        onChange={setValue}
        disabled
        fullWidth
      />
    );
  },
};

// Error state
export const ErrorState: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MySelect
        label="Select Fruit"
        options={defaultOptions}
        value={value}
        onChange={setValue}
        error
        helperText="Please select a fruit"
        fullWidth
      />
    );
  },
};

// With helper text
export const WithHelperText: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MySelect
        label="Select Country"
        options={countryOptions}
        value={value}
        onChange={setValue}
        helperText="Choose your country of residence"
        fullWidth
      />
    );
  },
};

// Required field
export const Required: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MySelect
        label="Select Fruit"
        options={defaultOptions}
        value={value}
        onChange={setValue}
        required
        helperText="This field is required"
        fullWidth
      />
    );
  },
};

// Different variants
export const Variants: Story = {
  render: () => {
    const [outlined, setOutlined] = useState('');
    const [filled, setFilled] = useState('');
    const [standard, setStandard] = useState('');

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: 300 }}>
        <MySelect
          label="Outlined (default)"
          options={defaultOptions}
          value={outlined}
          onChange={setOutlined}
          variant="outlined"
          fullWidth
        />
        <MySelect
          label="Filled"
          options={defaultOptions}
          value={filled}
          onChange={setFilled}
          variant="filled"
          fullWidth
        />
        <MySelect
          label="Standard"
          options={defaultOptions}
          value={standard}
          onChange={setStandard}
          variant="standard"
          fullWidth
        />
      </Box>
    );
  },
};

// Different sizes
export const Sizes: Story = {
  render: () => {
    const [small, setSmall] = useState('');
    const [medium, setMedium] = useState('');

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: 300 }}>
        <MySelect
          label="Small"
          options={defaultOptions}
          value={small}
          onChange={setSmall}
          size="small"
          fullWidth
        />
        <MySelect
          label="Medium (default)"
          options={defaultOptions}
          value={medium}
          onChange={setMedium}
          size="medium"
          fullWidth
        />
      </Box>
    );
  },
};

// With placeholder
export const WithPlaceholder: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MySelect
        label="Select Fruit"
        options={defaultOptions}
        value={value}
        onChange={setValue}
        placeholder="Choose a fruit..."
        fullWidth
      />
    );
  },
};

// Not full width
export const NotFullWidth: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MySelect
        label="Select Fruit"
        options={defaultOptions}
        value={value}
        onChange={setValue}
        fullWidth={false}
        sx={{ minWidth: 200 }}
      />
    );
  },
};

// Many options
export const ManyOptions: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const options: OptionType[] = Array.from({ length: 30 }, (_, i) => ({
      value: `option${i + 1}`,
      label: `Option ${i + 1}`,
    }));

    return (
      <MySelect
        label="Select Option"
        options={options}
        value={value}
        onChange={setValue}
        fullWidth
      />
    );
  },
};

// Priority levels
export const PrioritySelect: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MySelect
        label="Priority"
        options={[
          { value: 'low', label: '🟢 Low' },
          { value: 'medium', label: '🟡 Medium' },
          { value: 'high', label: '🟠 High' },
          { value: 'critical', label: '🔴 Critical' },
        ]}
        value={value}
        onChange={setValue}
        fullWidth
      />
    );
  },
};

// Status select
export const StatusSelect: Story = {
  render: () => {
    const [value, setValue] = useState('active');
    return (
      <MySelect
        label="Status"
        options={[
          { value: 'active', label: 'Active' },
          { value: 'pending', label: 'Pending' },
          { value: 'inactive', label: 'Inactive' },
          { value: 'archived', label: 'Archived' },
        ]}
        value={value}
        onChange={setValue}
        helperText="Current user status"
        fullWidth
      />
    );
  },
};

// Custom styled
export const CustomStyled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <MySelect
        label="Select Theme"
        options={[
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' },
          { value: 'auto', label: 'Auto' },
        ]}
        value={value}
        onChange={setValue}
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
          },
        }}
      />
    );
  },
};
