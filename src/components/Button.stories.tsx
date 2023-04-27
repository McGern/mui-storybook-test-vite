import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack from "@mui/material/Stack";

import { StyledButton } from "./button.component";

export default {
  title: "Example/Button",
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>;

const Template: ComponentStory<typeof StyledButton> = (args) => (
  <StyledButton {...args} />
);

export const Playground = Template.bind({});

Playground.args = {
  label: "Click me!",
};

export const Variants: ComponentStory<typeof StyledButton> = () => (
  <Stack spacing={2} maxWidth={300}>
    <StyledButton variant="text" label="Text Button" />
    <StyledButton variant="contained" label="Contained Button" />
    <StyledButton variant="outlined" label="Outlined Button" />
  </Stack>
);

export const Colors: ComponentStory<typeof StyledButton> = () => (
  <Stack spacing={2} maxWidth={300}>
    <StyledButton variant="contained" label="Primary" />
    <StyledButton variant="contained" color="secondary" label="Secondary" />
    <StyledButton variant="contained" color="success" label="Success" />
    <StyledButton variant="contained" color="error" label="Error" />
  </Stack>
);

export const Sizes: ComponentStory<typeof StyledButton> = () => (
  <Stack spacing={2} maxWidth={300}>
    <StyledButton variant="contained" size="small" label="Small" />
    <StyledButton variant="contained" size="medium" label="Medium" />
    <StyledButton variant="contained" size="large" label="Large" />
  </Stack>
);
