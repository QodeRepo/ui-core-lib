import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import MyCheckbox from '../components/Checkbox/Checkbox';
import { Box } from '@mui/material';

const meta: Meta<typeof MyCheckbox> = {
  title: 'Components/MyCheckbox',
  component: MyCheckbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof MyCheckbox>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <MyCheckbox
        label="Accept terms and conditions"
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
      <MyCheckbox
        label="Remember me"
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
      <MyCheckbox
        label="Disabled checkbox"
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
      <MyCheckbox
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
        <MyCheckbox label="Primary (default)" checked={primary} onChange={setPrimary} color="primary" />
        <MyCheckbox label="Secondary" checked={secondary} onChange={setSecondary} color="secondary" />
        <MyCheckbox label="Success" checked={success} onChange={setSuccess} color="success" />
        <MyCheckbox label="Error" checked={error} onChange={setError} color="error" />
        <MyCheckbox label="Warning" checked={warning} onChange={setWarning} color="warning" />
        <MyCheckbox label="Info" checked={info} onChange={setInfo} color="info" />
      </Box>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [small, setSmall] = useState(true);
    const [medium, setMedium] = useState(true);
    const [large, setLarge] = useState(true);

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <MyCheckbox label="Small size" checked={small} onChange={setSmall} size="small" />
        <MyCheckbox label="Medium size (default)" checked={medium} onChange={setMedium} size="medium" />
        <MyCheckbox label="Large size" checked={large} onChange={setLarge} size="large" />
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
        <MyCheckbox label="End (default)" checked={end} onChange={setEnd} labelPlacement="end" />
        <MyCheckbox label="Start" checked={start} onChange={setStart} labelPlacement="start" />
        <MyCheckbox label="Top" checked={top} onChange={setTop} labelPlacement="top" />
        <MyCheckbox label="Bottom" checked={bottom} onChange={setBottom} labelPlacement="bottom" />
      </Box>
    );
  },
};

export const Indeterminate: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <MyCheckbox
        label="Indeterminate state"
        checked={checked}
        onChange={setChecked}
        indeterminate={true}
      />
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [terms, setTerms] = useState(false);
    const [newsletter, setNewsletter] = useState(false);
    const [updates, setUpdates] = useState(true);

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 300 }}>
        <MyCheckbox
          label="I agree to the terms and conditions"
          checked={terms}
          onChange={setTerms}
          color="primary"
        />
        <MyCheckbox
          label="Subscribe to newsletter"
          checked={newsletter}
          onChange={setNewsletter}
          color="secondary"
        />
        <MyCheckbox
          label="Receive product updates"
          checked={updates}
          onChange={setUpdates}
          color="info"
        />
      </Box>
    );
  },
};

export const TodoList: Story = {
  render: () => {
    const [task1, setTask1] = useState(true);
    const [task2, setTask2] = useState(false);
    const [task3, setTask3] = useState(false);
    const [task4, setTask4] = useState(true);

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 250 }}>
        <MyCheckbox
          label="Complete project proposal"
          checked={task1}
          onChange={setTask1}
          color="success"
        />
        <MyCheckbox
          label="Review code changes"
          checked={task2}
          onChange={setTask2}
          color="success"
        />
        <MyCheckbox
          label="Update documentation"
          checked={task3}
          onChange={setTask3}
          color="success"
        />
        <MyCheckbox
          label="Deploy to production"
          checked={task4}
          onChange={setTask4}
          color="success"
        />
      </Box>
    );
  },
};

export const Permissions: Story = {
  render: () => {
    const [read, setRead] = useState(true);
    const [write, setWrite] = useState(false);
    const [delete_, setDelete] = useState(false);
    const [admin, setAdmin] = useState(false);

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 250 }}>
        <MyCheckbox
          label="Read Access"
          checked={read}
          onChange={setRead}
          color="info"
        />
        <MyCheckbox
          label="Write Access"
          checked={write}
          onChange={setWrite}
          color="primary"
          disabled={!read}
        />
        <MyCheckbox
          label="Delete Access"
          checked={delete_}
          onChange={setDelete}
          color="warning"
          disabled={!write}
        />
        <MyCheckbox
          label="Admin Access"
          checked={admin}
          onChange={setAdmin}
          color="error"
          disabled={!delete_}
        />
      </Box>
    );
  },
};

export const Features: Story = {
  render: () => {
    const [feature1, setFeature1] = useState(true);
    const [feature2, setFeature2] = useState(false);
    const [feature3, setFeature3] = useState(true);

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 250 }}>
        <MyCheckbox
          label="Email notifications"
          checked={feature1}
          onChange={setFeature1}
          size="small"
        />
        <MyCheckbox
          label="SMS alerts"
          checked={feature2}
          onChange={setFeature2}
          size="small"
        />
        <MyCheckbox
          label="Push notifications"
          checked={feature3}
          onChange={setFeature3}
          size="small"
        />
      </Box>
    );
  },
};

export const CustomStyled: Story = {
  render: () => {
    const [premium, setPremium] = useState(true);
    return (
      <MyCheckbox
        label="Enable Premium Features"
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

export const SelectAll: Story = {
  render: () => {
    const [item1, setItem1] = useState(false);
    const [item2, setItem2] = useState(true);
    const [item3, setItem3] = useState(false);
    
    const allChecked = item1 && item2 && item3;
    const someChecked = (item1 || item2 || item3) && !allChecked;

    const handleSelectAll = (checked: boolean) => {
      setItem1(checked);
      setItem2(checked);
      setItem3(checked);
    };

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 250 }}>
        <MyCheckbox
          label="Select All"
          checked={allChecked}
          onChange={handleSelectAll}
          indeterminate={someChecked}
          color="primary"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <MyCheckbox label="Item 1" checked={item1} onChange={setItem1} size="small" />
          <MyCheckbox label="Item 2" checked={item2} onChange={setItem2} size="small" />
          <MyCheckbox label="Item 3" checked={item3} onChange={setItem3} size="small" />
        </Box>
      </Box>
    );
  },
};
