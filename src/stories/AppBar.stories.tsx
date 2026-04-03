import type { Meta, StoryObj } from "@storybook/react-vite";
import MyAppBar from "../components/AppBar/AppBar";

const meta: Meta<typeof MyAppBar> = {
  title: "Components/AppBar",
  component: MyAppBar,
  tags: ["autodocs"],
  argTypes: {
    navItems: { control: "object" },
    position: {
      control: "select",
      options: ["fixed", "absolute", "sticky", "static", "relative"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "default", "transparent", "inherit"],
    },
    onLoginClick: { action: "login clicked" },
    onSignupClick: { action: "signup clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof MyAppBar>;

export const Default: Story = {
  args: {
    title: "My App",
  },
};

export const WithNavigation: Story = {
  args: {
    title: "My App",
    navItems: [
      { label: "Home" },
      { label: "About" },
      { label: "Contact" },
    ],
  },
};

export const FullVariant: Story = {
  args: {
    logo: <strong>LOGO</strong>,
    title: "My App",
    navItems: [
      { label: "Docs" },
      { label: "Blog" },
      { label: "Support" },
    ],
    loginLabel: "Login",
    signupLabel: "Sign up",
    position: "sticky",
    color: "primary",
  },
};