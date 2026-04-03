import type { Preview } from '@storybook/react-vite'
import { createElement, useEffect } from 'react';
import type { ComponentType } from 'react';
import MyThemeProvider from '../src/components/Theme/ThemeProvider';
import { useThemeMode } from '../src/components/Theme';

type ThemeMode = 'light' | 'dark';

function StoryThemeSync({ mode }: { mode: ThemeMode }) {
  const { mode: currentMode, toggleTheme } = useThemeMode();

  useEffect(() => {
    if (currentMode !== mode) {
      toggleTheme();
    }
  }, [currentMode, mode, toggleTheme]);

  return null;
}

function StoryThemeWrapper({
  mode,
  Story,
}: {
  mode: ThemeMode;
  Story: ComponentType;
}) {
  return createElement(
    MyThemeProvider,
    null,
    createElement(StoryThemeSync, { mode }),
    createElement(Story),
  );
}

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme mode for stories',
      defaultValue: 'light',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) =>
      createElement(StoryThemeWrapper, {
        mode: context.globals.theme as ThemeMode,
        Story,
      }),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
