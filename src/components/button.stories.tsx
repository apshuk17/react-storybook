import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Button',
        variant: 'primary',
        size: 'medium',
        disabled: false,
    },
    argTypes: {
        children: {
            name: 'Label',
            control: 'select',
            description: 'Text to display on the button',
            options: ['Button', 'Click me', 'Submit']
        },
        disabled: {
            control: 'boolean',
        },
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'destructive']
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large']
        }
    }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        className: 'mb-6 py-8'
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive'
    },
};

export const Small: Story = {
    args: {
        size: 'small'
    }
};

export const Medium: Story = {}

export const Dark: Story = {
    parameters: {
        themes: {
            themeOverride: 'dark'
        }
    }
}

export const Mobile: Story = {
    parameters: {
        viewport: {
            defaultViewport: 'mobile1'
        }
    }
}

export const MobileDark: Story = {
    parameters: {
        themes: {
            themeOverride: 'dark'
        },
        viewport: {
            defaultViewport: 'mobile1'
        }
    }
}