import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import MyRadioButton from '../components/RadioButton/RadioButton';

const meta: Meta<typeof MyRadioButton> = {
  title: 'Components/MyRadioButton',
  component: MyRadioButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof MyRadioButton>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <MyRadioButton
        label="Choose an option"
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
        ]}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Row: Story = {
  render: () => {
    const [value, setValue] = useState('small');
    return (
      <MyRadioButton
        label="Size"
        options={[
          { value: 'small', label: 'Small' },
          { value: 'medium', label: 'Medium' },
          { value: 'large', label: 'Large' },
        ]}
        value={value}
        onChange={setValue}
        row
      />
    );
  },
};

export const WithDisabledOptions: Story = {
  render: () => {
    const [value, setValue] = useState('available');
    return (
      <MyRadioButton
        label="Product Status"
        options={[
          { value: 'available', label: 'Available' },
          { value: 'outOfStock', label: 'Out of Stock', disabled: true },
          { value: 'discontinued', label: 'Discontinued', disabled: true },
        ]}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const ColorVariants: Story = {
  render: () => {
    const [value, setValue] = useState('primary');
    return (
      <MyRadioButton
        label="Color"
        options={[
          { value: 'primary', label: 'Primary' },
          { value: 'secondary', label: 'Secondary' },
          { value: 'default', label: 'Default' },
        ]}
        value={value}
        onChange={setValue}
        color="secondary"
        row
      />
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [value, setValue] = useState('small');
    return (
      <MyRadioButton
        label="Size Options"
        options={[
          { value: 'small', label: 'Small' },
          { value: 'medium', label: 'Medium' },
        ]}
        value={value}
        onChange={setValue}
        size="small"
        row
      />
    );
  },
};

export const YesNo: Story = {
  render: () => {
    const [value, setValue] = useState('yes');
    return (
      <MyRadioButton
        label="Do you agree?"
        options={[
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ]}
        value={value}
        onChange={setValue}
        row
      />
    );
  },
};

export const PaymentMethod: Story = {
  render: () => {
    const [value, setValue] = useState('credit');
    return (
      <MyRadioButton
        label="Payment Method"
        options={[
          { value: 'credit', label: 'Credit Card' },
          { value: 'debit', label: 'Debit Card' },
          { value: 'paypal', label: 'PayPal' },
          { value: 'cash', label: 'Cash on Delivery' },
        ]}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const ShippingOptions: Story = {
  render: () => {
    const [value, setValue] = useState('standard');
    return (
      <MyRadioButton
        label="Shipping Speed"
        options={[
          { value: 'standard', label: 'Standard (5-7 days)' },
          { value: 'express', label: 'Express (2-3 days)' },
          { value: 'overnight', label: 'Overnight' },
        ]}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const PreferredContact: Story = {
  render: () => {
    const [value, setValue] = useState('email');
    return (
      <MyRadioButton
        label="Preferred Contact Method"
        options={[
          { value: 'email', label: 'Email' },
          { value: 'phone', label: 'Phone' },
          { value: 'sms', label: 'SMS' },
          { value: 'none', label: 'Do not contact', disabled: true },
        ]}
        value={value}
        onChange={setValue}
        row
      />
    );
  },
};

export const MultipleGroups: Story = {
  render: () => {
    const [gender, setGender] = useState('female');
    const [age, setAge] = useState('adult');
    return (
      <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
        <MyRadioButton
          label="Gender"
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' },
          ]}
          value={gender}
          onChange={setGender}
          row
        />
        <MyRadioButton
          label="Age Group"
          options={[
            { value: 'child', label: 'Child (0-12)' },
            { value: 'teen', label: 'Teen (13-19)' },
            { value: 'adult', label: 'Adult (20-59)' },
            { value: 'senior', label: 'Senior (60+)' },
          ]}
          value={age}
          onChange={setAge}
        />
      </div>
    );
  },
};

export const CustomStyled: Story = {
  render: () => {
    const [value, setValue] = useState('pro');
    return (
      <MyRadioButton
        label="Subscription Plan"
        options={[
          { value: 'free', label: 'Free' },
          { value: 'pro', label: 'Pro ($9.99/mo)' },
          { value: 'enterprise', label: 'Enterprise ($49.99/mo)' },
        ]}
        value={value}
        onChange={setValue}
        formControlProps={{
          sx: {
            padding: 2,
            border: '1px solid #e0e0e0',
            borderRadius: 2,
            backgroundColor: '#f9f9f9',
          },
        }}
      />
    );
  },
};
