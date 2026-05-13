import { useState } from 'react';
import './App.css'
import { Button, Box } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import MyInput from './components/Input/Input';
import MySelect from './components/Select/Select';
import MyDialog from './components/Dialog/Dialog';
import MySnackbar from './components/Snackbar/Snackbar';
import MySideNav from './components/SideNav/SideNav';
import ThemeToggle from './components/Theme/ThemeToggle';
import MyTypography from './components/Typography/Typography';
import MyCard from './components/Card/Card';
import MyRadioButton from './components/RadioButton/RadioButton';
import MyToggle from './components/Toggle/Toggle';
import MyCheckbox from './components/Checkbox/Checkbox';
import MyAccordion from './components/Accordion/Accordion';
import type { AccordionItem } from './components/Accordion/Accordion';
import MySkeleton from './components/Skeleton/Skeleton';
import { useDesignTokens } from './hooks/useDesignTokens';

const fruitOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'mango', label: 'Mango' },
  { value: 'orange', label: 'Orange' },
];

function App() {
  const { colors, spacing, shadows, borders } = useDesignTokens();
  
  const [fruit, setFruit] = useState('');
  const [gender, setGender] = useState('male');
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [terms, setTerms] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState<string | false>(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snack, setSnack] = useState<{ open: boolean; severity: 'success' | 'error' | 'warning' | 'info'; message: string }>({
    open: false,
    severity: 'success',
    message: '',
  });

  const showSnack = (severity: 'success' | 'error' | 'warning' | 'info', message: string) => {
    setSnack({ open: true, severity, message });
  };

  const navItems = [
    { label: 'Home', icon: <HomeIcon />, onClick: () => alert('Home clicked') },
    { label: 'Dashboard', icon: <DashboardIcon />, onClick: () => alert('Dashboard clicked') },
    { label: 'Profile', icon: <PersonIcon />, onClick: () => alert('Profile clicked') },
    { label: 'Settings', icon: <SettingsIcon />, onClick: () => alert('Settings clicked') },
    { label: 'About', icon: <InfoIcon />, onClick: () => alert('About clicked') },
    { label: 'Demo', icon: <InfoIcon />, onClick: () => alert('About Demo') },
  ];

  return (
    <>
       <Box sx={{ 
         display: 'flex', 
         alignItems: 'center', 
         gap: spacing.scale[1], 
         p: spacing.scale[1], 
         bgcolor: 'primary.main',
         boxShadow: shadows.elevation[2],
       }}>
        <MySideNav title="My Design System" items={navItems} width={250} />
        <MyTypography text="My Design System" variant="h6" sx={{ color: 'white', flexGrow: 1, fontWeight: 'bold' }} />
        <ThemeToggle />
      </Box> 
      <Box sx={{ p: spacing.scale[3] }}>
      
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <MyTypography text="Loading States" variant="h5" />
          <Button 
            size="small" 
            variant="outlined" 
            onClick={() => setIsLoading(!isLoading)}
          >
            {isLoading ? 'Show Content' : 'Show Skeleton'}
          </Button>
        </Box>
        {isLoading ? (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <MySkeleton variant="circular" width={60} height={60} />
            <Box sx={{ flex: 1 }}>
              <MySkeleton variant="text" width="40%" height={30} />
              <MySkeleton variant="text" width="60%" />
              <MySkeleton variant="text" width="80%" />
            </Box>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ width: 60, height: 60, borderRadius: '50%', bgcolor: 'primary.main' }} />
            <Box sx={{ flex: 1 }}>
              <MyTypography text="John Doe" variant="h6" />
              <MyTypography text="Software Engineer" variant="body2" sx={{ color: 'text.secondary' }} />
              <MyTypography text="Building amazing applications with React and TypeScript" variant="body2" />
            </Box>
          </Box>
        )}
      </Box>

      <Button color="primary" variant="contained" sx={{ m: 1 }}>
        Primary Button
      </Button>
      <Button color="secondary" variant="contained" sx={{ m: 1 }}>
        Secondary Button
      </Button>

      <MyTypography text="Lalit Kr Choudhary" variant="h4" sx={{ color: "red", mt: 2 }} />

      <MyInput label="Name" type="text" variant="outlined" fullWidth sx={{ mt: 2 }} />
      <MyInput label="Email" type="email" variant="outlined" fullWidth sx={{ mt: 2 }} />
      <MyInput label="Password" type="password" variant="outlined" fullWidth sx={{ mt: 2 }} />

      <MySelect
        label="Select Fruit"
        value={fruit}
        options={fruitOptions}
        onChange={(val) => setFruit(val)}
        fullWidth={true}
        disabled={false}
        error={false}
        sx={{ mt: 2 }}
      />
      {/* {fruit && (
        <Typography sx={{ mt: 1, color: 'green' }}>
          Selected: {fruit}
        </Typography>
      )} */}

      <Box sx={{ mt: 2 }}>
        <MyRadioButton
          label="Gender"
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' },
            { value: 'apple', label: 'Apple' },
          ]}
          value={gender}
          onChange={setGender}
          row
        />
      </Box>

      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <MyToggle
          label="Enable Notifications"
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
      </Box>

      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <MyCheckbox
          label="I agree to terms and conditions"
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
      </Box>

      <Button variant="outlined" color="warning" sx={{ mt: 2 }} onClick={() => setDialogOpen(true)}>
        Open Dialog
      </Button>

      <MyDialog
        open={dialogOpen}
        title="Confirm Action"
        description="Are you sure you want to proceed? This action cannot be undone."
        onClose={() => setDialogOpen(false)}
        confirmButton={{
          label: 'Confirm',
          onClick: () => {
            alert('Confirmed!');
            setDialogOpen(false);
          },
        }}
        cancelButton={{
          label: 'Cancel',
          onClick: () => setDialogOpen(false),
        }}
      />

      <Button variant="contained" color="success" sx={{ mt: 2, mr: 1 }} onClick={() => showSnack('success', 'Saved successfully!')}>
        Success
      </Button>
      <Button variant="contained" color="error" sx={{ mt: 2, mr: 1 }} onClick={() => showSnack('error', 'Something went wrong!')}>
        Error
      </Button>
      <Button variant="contained" color="warning" sx={{ mt: 2, mr: 1 }} onClick={() => showSnack('warning', 'Check your input!')}>
        Warning
      </Button>
      <Button variant="contained" color="info" sx={{ mt: 2 }} onClick={() => showSnack('info', 'New update available.')}>
        Info
      </Button>

      <MySnackbar
        open={snack.open}
        severity={snack.severity}
        message={snack.message}
        duration={3000}
        position={{ vertical: 'bottom', horizontal: 'center' }}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
      />

      <Box sx={{ mt: 4 }}>
        <MyTypography text="Card Examples" variant="h5" sx={{ mb: 2 }} />
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2 }}>
          <MyCard
            title="Welcome Card"
            subtitle="Getting Started"
            description="This is a simple card demonstrating the MyCard component."
            elevation={2}
            actions={[
              { label: 'Learn More', onClick: () => alert('Learn more'), variant: 'contained', color: 'primary' },
              { label: 'Skip', onClick: () => alert('Skipped'), variant: 'text' },
            ]}
          />
          <MyCard
            title="Featured Product"
            subtitle="$99.99"
            description="High-quality product with excellent features."
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300"
            imageHeight={140}
            elevation={3}
            actions={[
              { label: 'Buy Now', onClick: () => alert('Buying'), variant: 'contained', color: 'success' },
            ]}
          />
          <MyCard
            title="Latest News"
            subtitle="March 6, 2026"
            description="Stay updated with the latest developments."
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300"
            imageHeight={140}
            elevation={2}
            actions={[
              { label: 'Read', onClick: () => alert('Reading'), variant: 'outlined', color: 'primary' },
            ]}
          />
        </Box>
      </Box>

      <Box sx={{ mt: 4, width: '100%' }}>
        <MyTypography text="FAQ Section" variant="h5" sx={{ mb: 2 }} />
        <MyAccordion
          items={[
            {
              id: 'faq1',
              title: 'How do I get started?',
              content: 'Simply sign up for an account and follow our onboarding guide to set up your profile.',
            },
            {
              id: 'faq2',
              title: 'What payment methods are accepted?',
              content: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.',
            },
            {
              id: 'faq3',
              title: 'Is there a free trial?',
              content: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required.',
            },
          ] as AccordionItem[]}
          expanded={expandedAccordion}
          onChange={setExpandedAccordion}
        />
      </Box>

      <Button
        onClick={() => alert('you done')}
        sx={{
          mt: 2,
          backgroundColor: colors.secondary.main,
          color: colors.common.white,
          padding: spacing.component.padding.button.medium,
          borderRadius: borders.radius.lg,
          boxShadow: shadows.component.button.rest,
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: colors.secondary.dark,
            boxShadow: shadows.component.button.hover,
          },
        }}
      >
        Submit
      </Button>
      </Box>
    </>
  )
}

export default App
